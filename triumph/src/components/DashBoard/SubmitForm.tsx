import { Flex, Textarea, Box, Input, Button, Heading } from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";

const SubmitForm = () => {
  const [titleValue, setTitleValue] = useState();
  const [textValue, setTextValue] = useState("");

  const handleInputChange = (e: any) => {
    // title
    const inputTitleValue = e.target.value;
    setTitleValue(inputTitleValue);
    // text
    const inputTextValue = e.target.value;
    setTextValue(inputTextValue);
  };

  return (
    <Flex
      width={"100%"}
      height={"50vh"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"column"}
    >
      <Box
        width={{ base: "300px", md: "400px", lg: "600px" }}
        background={"#fafafa"}
        borderRadius={"lg"}
      >
        <Box mt={4} width={"100%"}>
          <Heading ml={4} fontSize={"xl"}>
            Create a Post
          </Heading>
          <Box
            width={"full"}
            p={1}
            border={1}
            borderBottom={"1px"}
            opacity={".5"}
            mt={2}
          ></Box>
        </Box>
        <Box m={4}>
          <Input placeholder={"Title"} borderRadius={"lg"} />
          <Textarea
            mt={5}
            value={textValue}
            onChange={handleInputChange}
            borderRadius={"lg"}
            placeholder="What is on your mind?"
            size="sm"
          />
          <Box mt={4} display={"flex"} justifyContent={"flex-end"}>
            <Link to="/dashboard/discussions">
              <Button
                borderRadius={4}
                type="submit"
                variant="solid"
                width="70px"
                mr={2}
                color={"black"}
              >
                Cancel
              </Button>
            </Link>
            <Button
              borderRadius={4}
              type="submit"
              variant="solid"
              backgroundColor={"green.400"}
              width="70px"
              isDisabled={textValue.length <= 5}
              onClick={() => console.log("Weee")}
              color={"white"}
            >
              Post
            </Button>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

export default SubmitForm;
