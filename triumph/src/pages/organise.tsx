import { Box } from "@chakra-ui/react";
import React, { Suspense } from "react";
import SpinnerComponent from "src/components/Spinner";
const HeaderComponent = React.lazy(() => import("../components/Header"));
const OrganiseComponent = React.lazy(
  () => import("../components/DashBoard/Organise")
);

const create = () => {
  return (
    <Box>
      <Suspense fallback={<SpinnerComponent />}>
        <HeaderComponent />
        <OrganiseComponent />
      </Suspense>
    </Box>
  );
};

export default create;
