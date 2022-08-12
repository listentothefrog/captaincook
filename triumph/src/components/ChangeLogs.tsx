import { Box, Flex, Heading, Link, Text, Divider } from "@chakra-ui/layout";

const ChangeLogs = () => {
  return (
    <Flex
      mr={5}
      ml={5}
      p={5}
      rounded={"lg"}
      borderWidth="1px"
      border={"transparent"}
    >
      <Box flex={1}>
        <Flex flexDir={"column"} alignContent={"center"}>
          <Flex alignItems={"center"} justifyContent="space-between">
            <Link>
              <Heading ml={"5"} fontSize="xl">
                Commit message mm/dd/year
              </Heading>
            </Link>
            <Link>
              <Flex mt={2}>
                <Text color={"#707070"}>by @username</Text>
              </Flex>
            </Link>
          </Flex>
          <Flex alignItems="flex-start" flexDir={"row"}>
            <Box flex={1} mt={4} ml="5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              laboriosam deserunt aspernatur nesciunt rerum consectetur eveniet
              omnis, iure fuga exercitationem mollitia quasi blanditiis in
              architecto eligendi illum eaque. Doloremque, soluta.
            </Box>
          </Flex>
        </Flex>
        <Divider
          mt={"2"}
          border={"1px"}
          borderColor={"blackAlpha.600"}
          ml={"5"}
          width={"748"}
        />
      </Box>
    </Flex>
  );
};

export default ChangeLogs;
