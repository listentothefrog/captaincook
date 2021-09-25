import { Box } from "@chakra-ui/react";
import React, { Suspense } from "react";
import SpinnerComponent from "src/components/Spinner";
import MobileDashboardComponent from "src/components/DashBoard/DashboardHeader/MobileDashboard";
const DashboardHeader = React.lazy(
  () => import("src/components/DashBoard/DashboardHeader/DashboardHeader")
);
const FeedComponent = React.lazy(() => import("src/components/DashBoard/Feed"));

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
            <SpinnerComponent message={"Fetching a random recipe..."} />
          }
        >
          <FeedComponent />
        </Suspense>
        <Box
          width={{ base: "100%", lg: "0%" }}
          height={{ base: "70vh", lg: "0vh" }}
          display={{ base: "flex", lg: "none" }}
        >
          <MobileDashboardComponent />
        </Box>
      </Suspense>
    </Box>
  );
};

export default Dashboard;
