import { Box, Flex, Heading } from "@chakra-ui/react";

const settings = () => {
  return (
    <Box
      position={"absolute"}
      top={0}
      left={0}
      bottom={0}
      right={0}
      z-index={101}
      display={"flex"}
    >
      <Flex>
        <Box flexDirection={"column"}>
          <Box
            width={"30vh"}
            height={"100vh"}
            justifyContent={"center"}
            alignItems={"center"}
            borderRight={"1px"}
            padding={"350px 6px 60px 20px"}
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
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default settings;
