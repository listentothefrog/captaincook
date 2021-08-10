import { Box } from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/spinner";
import React, { Suspense } from "react";
const HeaderComponent = React.lazy(() => import("src/components/Header"));
const SearchComponent = React.lazy(
  () => import("src/components/DashBoard/Search")
);

const Dashboard = () => {
  return (
    <Box>
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
        <HeaderComponent />
        <SearchComponent />
      </Suspense>
    </Box>
  );
};

export default Dashboard;
