import {
  Box,
  Center,
  Text,
  Stack,
  List,
  ListItem,
  ListIcon,
  Button,
  Flex,
  Image,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import HomeCookIcon from "../images/HomeCook.svg";

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
        <Stack
          direction={"column"}
          p={6}
          color={"gray.800"}
          align={"center"}
          justify={"center"}
        >
          <Flex>
            <Image src={HomeCookIcon} width={"75px"} height={"75px"} />
            <Flex
              direction={"column"}
              align={"center"}
              justifyContent={"space-evenly"}
            >
              <Flex>
                <Text ml={2} mr={2} fontSize={"20px"} fontWeight={"bold"}>
                  Home Cook
                </Text>
              </Flex>
              <Flex mr={5}>
                <Text fontSize={"12px"}>$</Text>
                <Text fontSize={"18px"} fontWeight={"extrabold"}>
                  0
                </Text>
                <Text color={"gray"} fontWeight={"14px"} fontSize={"13px"}>
                  /month
                </Text>
              </Flex>
            </Flex>
          </Flex>
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
            rounded={"sm"}
            boxShadow={"0 5px 20px 0px rgb(72 187 120 / 43%)"}
            _hover={{
              bg: "#6c9e4f",
            }}
          >
            Start using 👉
          </Button>
        </Box>
      </Box>
    </Center>
  );
};

export default PricingComponent;
