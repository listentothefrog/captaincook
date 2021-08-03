import { auth } from "src/firebase/firebase";

const dashboard = () => {
  return (
    <div>
      dashboard <button onClick={() => auth.signOut()}>Sign Out</button>
    </div>
  );
};

export default dashboard;
