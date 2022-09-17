import { toast } from "react-toastify"
import "./styles.scss"
export const ThongBao = ({code,message}) =>{
    if(code){
        switch (code) {
         case 200:
            return toast.success(message ? message : "Thành công")
          case 299:
            return toast.warn(message ? message : "Có lỗi xảy ra")
          case 500:
            return toast.error(message ? message : "Có lỗi xảy ra")
          case 400:
            return toast.error("Cú pháp không hợp lệ")
          case 401:
            return toast.error("Không xác thực")
          case 404:
            return toast.error("Không tìm thấy dữ liệu")
          case 408:
            return toast.error("Hết thời gian yêu cầu máy chủ")
          case 502:
            return toast.error("Hệ thống không phản hồi")
          case 503:
            return toast.error("Máy chủ không phản hồi do quá thời gian")
          default:
            return toast.error(message ? message : "Có lỗi xảy ra")
        }
      }
      else{
        return toast.error(message ? message : "Có lỗi xảy ra")
      }
}