import { Box, Flex, Heading } from "@chakra-ui/react";
import React, { Suspense } from "react";
import { Spinner } from "@chakra-ui/spinner";
const Account = React.lazy(() => import("src/components/Account"));

const settings = () => {
  return (
    <Flex
      alignItems={"center"}
      justifyContent={"center"}
      width={"100%"}
      height={"90vh"}
    >
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
        <Account />
      </Suspense>
    </Flex>
  );
};

export default settings;
