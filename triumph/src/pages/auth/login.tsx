import LoginComponent from "src/components/Login";
import IPageProps from "src/interfaces/page";
import { auth } from "src/firebase/firebase";
import { Redirect } from "react-router-dom";
const login: React.FC<IPageProps> = (props) => {
  if (!auth.currentUser) {
    return <LoginComponent />;
  } else {
    return <Redirect to="/dashboard" />;
  }
};

export default login;
