import { Box, Spinner } from "@chakra-ui/react";
import React, { Suspense } from "react";
import HeaderComponent from "src/components/Header";
const SearchComponent = React.lazy(
  () => import("src/components/DashBoard/Search")
);

const Dashboard = () => {
  return (
    <Box>
      <HeaderComponent />
      <Suspense
        fallback={
          <Spinner
            thickness="3px"
            speed="0.65s"
            emptyColor="gray.200"
            color="#6c9e4f"
            size="md"
          />
        }
      >
        <SearchComponent />
      </Suspense>
    </Box>
  );
};

export default Dashboard;
