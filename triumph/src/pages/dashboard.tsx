import { useHistory } from "react-router";
import { auth } from "src/firebase/firebase";

const Dashboard = () => {
  const history = useHistory();
  const signOutUser = async () => {
    await auth.signOut();
    history.push("/");
  };
  return (
    <div>
      dashboard <button onClick={signOutUser}>Sign Out</button>
    </div>
  );
};

export default Dashboard;
