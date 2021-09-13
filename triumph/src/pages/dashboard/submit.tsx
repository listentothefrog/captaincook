import { Box } from "@chakra-ui/react";
import React, { Suspense } from "react";
import HeaderComponent from "src/components/Header";
import SpinnerComponent from "src/components/Spinner";
const SubmitForm = React.lazy(
  () => import("src/components/DashBoard/SubmitForm")
);

const submit = () => {
  return (
    <Box>
      <HeaderComponent />
      <Suspense
        fallback={
          <SpinnerComponent
            message={"Crunching on this file, just for you. Hang tight..."}
          />
        }
      >
        <SubmitForm />
      </Suspense>
    </Box>
  );
};

export default submit;
