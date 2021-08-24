import { Flex } from "@chakra-ui/react";
import React, { Suspense } from "react";
import Appearance from "src/components/Settings/Appearance";
import SpinnerComponent from "src/components/Spinner";
const Account = React.lazy(() => import("src/components/Settings/Account"));

const settings = () => {
  return (
    <Flex
      alignItems={"center"}
      justifyContent={"center"}
      flexDirection={"column"}
      width={"100%"}
      height={"100vh"}
    >
      <Suspense fallback={<SpinnerComponent />}>
        <Account />
        <Appearance />
      </Suspense>
    </Flex>
  );
};

export default settings;
