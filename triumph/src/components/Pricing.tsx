import {
  Box,
  Center,
  Text,
  Stack,
  List,
  ListItem,
  ListIcon,
  Button,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";

const PricingComponent = () => {
  return (
    <Center py={6}>
      <Box
        maxW={"330px"}
        w={"full"}
        bg={"white"}
        boxShadow={"2xl"}
        rounded={"md"}
        overflow={"hidden"}
      >
        <Stack textAlign={"center"} p={6} color={"gray.800"} align={"center"}>
          <Text
            fontSize={"sm"}
            fontWeight={500}
            bg={"green.50"}
            p={2}
            px={3}
            color={"green.500"}
            rounded={"full"}
          >
            Hobby
          </Text>
          <Stack direction={"row"} align={"center"} justify={"center"}>
            <Text fontSize={"3xl"}>$</Text>
            <Text fontSize={"6xl"} fontWeight={800}>
              79
            </Text>
            <Text color={"gray.500"}>/month</Text>
          </Stack>
        </Stack>

        <Box bg={"gray.50"} px={6} py={10}>
          <List spacing={3}>
            <ListItem>
              <ListIcon as={CheckIcon} color="green.400" />
              5.000 page views
            </ListItem>
            <ListItem>
              <ListIcon as={CheckIcon} color="green.400" />
              50 automation executions
            </ListItem>
            <ListItem>
              <ListIcon as={CheckIcon} color="green.400" />
              50 identified users
            </ListItem>
            <ListItem>
              <ListIcon as={CheckIcon} color="green.400" />
              All features
            </ListItem>
          </List>

          <Button
            mt={10}
            w={"full"}
            bg={"green.400"}
            color={"white"}
            rounded={"xl"}
            boxShadow={"0 5px 20px 0px rgb(72 187 120 / 43%)"}
            _hover={{
              bg: "#6c9e4f",
            }}
          >
            Start your trial
          </Button>
        </Box>
      </Box>
    </Center>
  );
};

export default PricingComponent;
