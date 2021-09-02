import { Box } from "@chakra-ui/react";
import React, { Suspense } from "react";
import SpinnerComponent from "src/components/Spinner";
const HeaderComponent = React.lazy(() => import("src/components/Header"));
const DashboardHeader = React.lazy(
  () => import("src/components/DashBoard/DashboardHeader/DashboardHeader")
);
const FeedComponent = React.lazy(() => import("src/components/DashBoard/Feed"));
const MobileDashboardComponent = React.lazy(
  () => import("src/components/DashBoard/DashboardHeader/MobileDashboard")
);
const Dashboard = () => {
  return (
    <Box>
      <Suspense
        fallback={
          <SpinnerComponent
            message={"Crunching on this file, just for you. Hang tight..."}
          />
        }
      >
        <HeaderComponent />
        <Box
          display={{ base: "none", lg: "flex" }}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Suspense
            fallback={
              <SpinnerComponent
                message={"Crunching on this file, just for you. Hang tight..."}
              />
            }
          >
            <DashboardHeader />
          </Suspense>
        </Box>
        <Suspense
          fallback={
            <SpinnerComponent
              message={"Crunching on this file, just for you. Hang tight..."}
            />
          }
        >
          <FeedComponent />
        </Suspense>
        <Box
          width={{ base: "100%", lg: "0%" }}
          height={{ base: "70vh", lg: "0vh" }}
          display={{ base: "flex", lg: "none" }}
        >
          <Suspense
            fallback={
              <SpinnerComponent
                message={"Crunching on this file, just for you. Hang tight..."}
              />
            }
          >
            <MobileDashboardComponent />
          </Suspense>
        </Box>
      </Suspense>
    </Box>
  );
};

export default Dashboard;
