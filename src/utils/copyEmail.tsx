import { toast } from "react-toastify";

export const handleCopyEmail = (email: string) => {
  navigator.clipboard
    .writeText(email)
    .then(() => {
      toast.success("이메일이 클립보드에 복사되었습니다", {
        position: "bottom-left",
        autoClose: 1200,
        hideProgressBar: true,
        pauseOnHover: true,
        style: {
          width: "320px",
          textAlign: "center",
          marginLeft: "15px",
        },
      });
    })
    .catch((err) => {
      toast.error("이메일 복사 실패: 다시 시도해주세요.", {
        position: "bottom-left",
        autoClose: 1200,
        hideProgressBar: true,
        pauseOnHover: true,
        style: {
          width: "320px",
          textAlign: "center",
          marginLeft: "15px",
        },
      });
      console.error("이메일 복사 실패:", err);
    });
};
