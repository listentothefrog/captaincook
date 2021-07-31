import { useState } from "react";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { auth } from "src/firebase/firebase";
import IPageProps from "src/interfaces/page";

const register: React.FC<IPageProps> = (props) => {
  const [registering, setRegistering] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassoword, setConfirmPassoword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const history = useHistory();

  const createUserWithEmailandPassword = async () => {
    if (password !== confirmPassoword)
      toast.error("password's don't match", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

    if (error !== "") setError("");
    setRegistering(true);
    await auth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        toast.info(
          "you have succefully created an account, a email verification link was sent to you inbox",
          {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          }
        );
        history.push("/login");
      })
      .catch((err) => {});
  };
  return (
    <div>
      <ToastContainer />
    </div>
  );
};

export default register;
