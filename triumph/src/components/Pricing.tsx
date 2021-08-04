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
import IPricingProps from "src/interfaces/pricing";

const PricingComponent: React.FC<IPricingProps> = (props) => {
  const {
    plan_title,
    plan_price,
    plan_image,
    plan_perks_1,
    plan_perks_2,
    plan_perks_3,
    plan_perks_4,
  } = props;
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
            <Image src={plan_image} width={"75px"} height={"75px"} />
            <Flex
              direction={"column"}
              align={"center"}
              justifyContent={"space-evenly"}
            >
              <Flex>
                <Text ml={2} mr={2} fontSize={"20px"} fontWeight={"bold"}>
                  {plan_title}
                </Text>
              </Flex>
              <Flex mr={5}>
                <Text fontSize={"12px"}>$</Text>
                <Text fontSize={"18px"} fontWeight={"extrabold"}>
                  {plan_price}
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
              {plan_perks_1}
            </ListItem>
            <ListItem>
              <ListIcon as={CheckIcon} color="green.400" />
              {plan_perks_2}
            </ListItem>
            <ListItem>
              <ListIcon as={CheckIcon} color="green.400" />
              {plan_perks_3}
            </ListItem>
            <ListItem>
              <ListIcon as={CheckIcon} color="green.400" />
              {plan_perks_4}
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
