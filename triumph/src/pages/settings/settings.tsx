import { Box, Flex, Heading } from "@chakra-ui/react";
import React, { Suspense } from "react";
import { Spinner } from "@chakra-ui/spinner";
const Account = React.lazy(() => import("src/components/Account"));

const settings = () => {
  return (
    <Flex position={"fixed"} width={"100%"} height={"100vh"}>
      <Flex
        width={"20vh"}
        height={"100vh"}
        justifyContent={"flex-start"}
        alignItems={"center"}
        borderRight={"1px"}
        ml={10}
      >
        <Box display={"flex"} flexDirection={"column"}>
          <Box>
            <Heading fontSize={"16px"} textTransform={"uppercase"}>
              My stuff
            </Heading>
          </Box>
          <Box mt={2}>My Account</Box>
          <Box mt={2}>Security and Privacy</Box>
          <Box
            width={"160px"}
            p={1}
            border={1}
            borderBottom={"1px"}
            opacity={".5"}
          ></Box>
          {/* {separator} */}
          <Box>
            <Heading mt={2} fontSize={"16px"} textTransform={"uppercase"}>
              Billing Settings
            </Heading>
          </Box>
          <Box mt={2}>Subscriptions</Box>
          <Box mt={2}>Support</Box>
          <Box
            width={"160px"}
            p={1}
            border={1}
            borderBottom={"1px"}
            opacity={".5"}
          ></Box>
          <Box>
            <Heading
              mt={2}
              fontSize={"16px"}
              fontWeight={"bold"}
              textTransform={"uppercase"}
            >
              App Settings
            </Heading>
          </Box>
          <Box mt={2}>Appearance</Box>
          <Box mt={2}>Notifications</Box>
          <Box mt={2}>Languages</Box>
          <Box
            width={"160px"}
            p={1}
            border={1}
            borderBottom={"1px"}
            opacity={".5"}
          ></Box>
          <Box mt={2}>Updates</Box>
          <Box mt={2}>Downloads</Box>
        </Box>
      </Flex>
      <Box
        width={"80vh"}
        height={"100vh"}
        justifyContent={"center"}
        position={"absolute"}
        top={"2%"}
        right={"45%"}
        translateX={"-50%"}
        translateY={"-50%"}
        alignContent={"center"}
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
      </Box>
    </Flex>
  );
};

export default settings;
