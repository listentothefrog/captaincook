import { Link } from "react-router-dom";
const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <Link to="/">
        <button>Back Home</button>
      </Link>
    </div>
  );
};

export default Dashboard;
