import { Box } from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/spinner";
import React, { Suspense } from "react";
import HeaderComponent from "src/components/Header";
const CreateComponent = React.lazy(
  () => import("../components/DashBoard/Create")
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
        <CreateComponent />
      </Suspense>
    </Box>
  );
};

export default create;
