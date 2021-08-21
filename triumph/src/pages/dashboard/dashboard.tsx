import { Box } from "@chakra-ui/react";
import React, { Suspense } from "react";
import SpinnerComponent from "src/components/Spinner";
const HeaderComponent = React.lazy(() => import("src/components/Header"));
const DashboardHeader = React.lazy(
  () => import("src/components/DashBoard/DashboardHeader")
);
const FeedComponent = React.lazy(() => import("src/components/DashBoard/Feed"));

const Dashboard = () => {
  return (
    <Box>
      <Suspense fallback={<SpinnerComponent />}>
        <HeaderComponent />
        <DashboardHeader />
        <FeedComponent />
      </Suspense>
    </Box>
  );
};

export default Dashboard;
