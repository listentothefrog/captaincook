import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import HeaderComponent from "src/components/Header";

const home = () => {
  return (
    <Box>
      <HeaderComponent />
      <Flex
        justifyContent={"space-evenly"}
        width={"100%"}
        mt={"4"}
        height={"50vh"}
        alignItems={"center"}
        alignContent={"center"}
      >
        <Flex maxWidth={"50%"} maxHeight={"90vh"} flexDir={"column"}>
          <Heading>Cook like a pro chef.</Heading>
          <Text fontSize={"16px"} mt={"4"}>
            CaptainCook is where you can organize your recipes. Chef's can
            create a recipie and add ingredients to that recipe and can organize
            their recipes on a Kanban board. Chef's can also look up recipes and
            add it to their "cook list", their is also a recommended page where
            there will be a feed of recommended food where they can try out and
            add it to their "cook list".
          </Text>
        </Flex>
        <Flex height={"50vh"} alignContent={"center"} justifyContent={"center"}>
          <Box>
            <Image
              src={
                "https://images.unsplash.com/photo-1517244683847-7456b63c5969?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"
              }
              width={"300px"}
              alt={"Sweet"}
              boxShadow="lg"
              borderRadius={"lg"}
            />
          </Box>
        </Flex>
      </Flex>
      <Flex
        justifyContent={"space-around"}
        width={"45%"}
        mt={"4"}
        alignItems={"center"}
      >
        <Box>
          <Button
            mr={"4"}
            color={"white"}
            background={"#6c9e4f"}
            colorScheme={"whatsapp"}
          >
            <Link to="/register">Create an account</Link>
          </Button>
          <Button color={"white"} colorScheme={"purple"}>
            Fund CaptainCook
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default home;
