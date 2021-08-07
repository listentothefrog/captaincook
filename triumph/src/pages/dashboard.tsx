import { Box } from "@chakra-ui/react";
import SearchComponent from "src/components/DashBoard/Search";
import HeaderComponent from "src/components/Header";

const Dashboard = () => {
  return (
    <Box>
      <HeaderComponent />
      <SearchComponent />
    </Box>
  );
};

export default Dashboard;
