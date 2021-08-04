import { Redirect } from "react-router-dom";
import RegisterComponent from "src/components/Register";
import { auth } from "src/firebase/firebase";
import IPageProps from "src/interfaces/page";

const register: React.FC<IPageProps> = (props) => {
  if (!auth.currentUser) {
    return <RegisterComponent />;
  } else {
    return <Redirect to="/dashboard" />;
  }
};
export default register;
