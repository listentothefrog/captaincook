import { Box } from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/spinner";
import React, { Suspense } from "react";
const HeaderComponent = React.lazy(() => import("../components/Header"));
const OrganiseComponent = React.lazy(
  () => import("../components/DashBoard/Organise")
);

const create = () => {
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
        <OrganiseComponent />
      </Suspense>
    </Box>
  );
};

export default create;
