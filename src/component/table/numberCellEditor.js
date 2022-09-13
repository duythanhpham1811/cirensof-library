import React, {
    forwardRef,
    useEffect,
    useImperativeHandle,
    useRef,
    useState,
  } from 'react';
  
  const KEY_BACKSPACE = 'Backspace';
  const KEY_DELETE = 'Delete';
  const KEY_ENTER = 'Enter';
  const KEY_TAB = 'Tab';

export const numberCellEditor = forwardRef((props, ref) => {
    const [value, setValue] = useState(props.value);
    const refInput = useRef(null);
 
    useEffect(() => {
        // focus on the input
        refInput.current.focus();
    }, []);
 
    /* Component Editor Lifecycle methods */
    useImperativeHandle(ref, () => {
        return {
            // the final value to send to the grid, on completion of editing
            getValue() {
                // this simple editor doubles any value entered into the input
                return value;
            },
 
            // Gets called once before editing starts, to give editor a chance to
            // cancel the editing before it even starts.
            isCancelBeforeStart() {
                return false;
            },
 
            // Gets called once when editing is finished (eg if Enter is pressed).
            // If you return true, then the result of the edit will be ignored.
            isCancelAfterEnd() {
                // our editor will reject any value greater than 1000
                return value > 1000000;
            }
        };
    });
 
    return (
        <input type="number"
               ref={refInput}
               value={value}
               onChange={event => setValue(event.target.value)}
               style={{width: "100%",height:"100%",padding:"0px 5px",border:" 1.5px solid #2195f37c",outline:"none",borderRadius:"2px"}}
        />
    );
 });