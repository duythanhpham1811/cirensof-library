import { useCallback, useRef, useEffect } from "react";

export const useStickyHeader = () => {
  const headerElementRef = useRef();
  const bodyElementRef = useRef();
  const stickyRef = useRef(false);
  const originalStyles = useRef({ position: "", top: "", zIndex: "" });

  useEffect(() => {
    headerElementRef.current = document.querySelector('[ref="headerRoot"]');
    bodyElementRef.current = document.querySelector('[ref="eBodyViewport"]');

    const header = headerElementRef.current;

    originalStyles.current.position = header.style.position;
    originalStyles.current.top = header.style.top;
    originalStyles.current.zIndex = header.style.zIndex;
  }, []);

  const onScroll = useCallback(() => {
    const header = headerElementRef.current;
    const body = bodyElementRef.current;
    if (!header || !body) return;

    let shouldStick = false;
    let shouldUnstick = false;

    if (!stickyRef.current) {
      shouldStick = header.getBoundingClientRect().top <= 0;
      if (shouldStick) stickyRef.current = true;
    } else {
      shouldUnstick =
        body.getBoundingClientRect().top -
          header.getBoundingClientRect().height >
        0;
      if (shouldUnstick) stickyRef.current = false;
    }

    if (shouldStick) {
      header.style.position = "fixed";
      header.style.top = "0";
      // this is optional, but if you have other contents that overlap the
      // header you may want to adjust zIndex accordingly
      header.style.zIndex = "2";
    }
    if (shouldUnstick) {
      const original = originalStyles.current;
      header.style.position = original.position;
      header.style.top = original.top;
      header.style.zIndex = original.zIndex;
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  });

  return stickyRef;
};
