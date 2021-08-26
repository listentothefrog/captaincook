import { ReactElement } from "react";
import {
  Box,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  Flex,
  Heading,
} from "@chakra-ui/react";
import { FcPlanner, FcShare, FcMultipleSmartphones } from "react-icons/fc";

interface IFeatureComponentProps {
  title: string;
  text: string;
  icon: ReactElement;
}

const Feature = (props: IFeatureComponentProps) => {
  const { title, text, icon } = props;
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={"center"}
        justify={"center"}
        color={"white"}
        rounded={"full"}
        bg={"gray.100"}
        mb={1}
      >
        {icon}
      </Flex>
      <Heading fontSize={"18px"}>{title}</Heading>
      <Text color={"gray.600"}>{text}</Text>
    </Stack>
  );
};

const SimpleThreeColumns = () => {
  return (
    <Box p={4}>
      <SimpleGrid columns={{ base: 0.5, md: 3 }} spacing={10}>
        <Feature
          icon={<Icon as={FcPlanner} w={10} h={10} />}
          title={"Plan your recipes"}
          text={
            "With our interactive kanban board you can plan and organise your recipes with ease."
          }
        />
        <Feature
          icon={<Icon as={FcShare} w={10} h={10} />}
          title={"Share your recipes"}
          text={
            "Every wanted to share your tasty recipe with someone that might like, well you can do it with out any problems."
          }
        />
        <Feature
          icon={<Icon as={FcMultipleSmartphones} w={10} h={10} />}
          title={"Access from any device"}
          text={
            "Want to access all of recipes from any device? You just do that without losing all of your tasty recipes. "
          }
        />
      </SimpleGrid>
    </Box>
  );
};

export default SimpleThreeColumns;
