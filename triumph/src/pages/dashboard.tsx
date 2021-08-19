import { Box } from "@chakra-ui/react";
import React, { Suspense } from "react";
import SpinnerComponent from "src/components/Spinner";
const HeaderComponent = React.lazy(() => import("src/components/Header"));
const SearchComponent = React.lazy(
  () => import("src/components/DashBoard/Search")
);

const Dashboard = () => {
  return (
    <Box>
      <Suspense fallback={<SpinnerComponent />}>
        <HeaderComponent />
        <SearchComponent />
      </Suspense>
    </Box>
  );
};

export default Dashboard;
