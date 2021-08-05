import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Spinner,
  Text,
} from "@chakra-ui/react";
import React, { Suspense } from "react";
import { Link } from "react-router-dom";
import HeaderComponent from "src/components/Header";
import HomeCookIcon from "../images/HomeCook.svg";
import MasterChefIcon from "../images/MasterChef.svg";
import ProChefIcon from "../images/ProChef.svg";
const PricingComponent = React.lazy(() => import("src/components/Pricing"));

const home = () => {
  return (
    <Box>
      <HeaderComponent />
      <Flex
        justifyContent={"space-evenly"}
        width={"100%"}
        height={"100vh"}
        alignItems={"center"}
        background={"#f5f5f5"}
        alignContent={"center"}
        boxShadow="lg"
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
          <Flex
            width={"100%"}
            mt={"6"}
            flexDirection={"row"}
            alignItems={"center"}
          >
            <Box>
              <Button
                mr={"4"}
                color={"white"}
                background={"green.400"}
                colorScheme={"whatsapp"}
              >
                <Link to="/register">Create an account</Link>
              </Button>
              <Button color={"white"} colorScheme={"purple"}>
                Support CaptainCook
              </Button>
            </Box>
          </Flex>
        </Flex>
        <Flex height={"80vh"} alignContent={"center"} justifyContent={"center"}>
          <Box>
            <Image
              src={
                "https://images.unsplash.com/photo-1517244683847-7456b63c5969?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"
              }
              maxWidth={"100%"}
              height={"100%"}
              alt={"Sweet"}
              boxShadow="lg"
              borderRadius={"lg"}
            />
          </Box>
        </Flex>
      </Flex>
      <Flex
        width={"100%"}
        alignItems={"center"}
        justifyContent={"center"}
        mt={4}
        flexDir={"column"}
      >
        <Heading textAlign={"center"} mt={4} color={"green.400"}>
          Flexible Plans
        </Heading>
        <Text
          textAlign={"center"}
          fontSize={"medium"}
          fontWeight={"medium"}
          mt={2}
          color={"gray"}
        >
          Choose a plan that works best with you
          <br /> and fits your style.
        </Text>
      </Flex>
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
        <Flex w={"100%"} mt={4} justifyContent={"space-evenly"}>
          <PricingComponent
            plan_title={"Home Chef"}
            plan_image={HomeCookIcon}
            plan_price={0}
            plan_perks_1={"Store up to 50 recipes in your cook list."}
            plan_perks_2={"Access your recipes from any device."}
            plan_perks_3={"Get recommendations for foods to cook."}
            plan_perks_4={"Organise your recipes on a Kanban board."}
          />
          <PricingComponent
            plan_title={"Pro Chef"}
            plan_image={ProChefIcon}
            plan_price={5}
            plan_perks_1={"All the perks from the 'Home Chef' Plan."}
            plan_perks_2={"Store up to 100 recipes in your cook list."}
            plan_perks_3={"Get tips and tricks from other Pro Chef's."}
            plan_perks_4={"Get access to exclusive recipes."}
          />
          <PricingComponent
            plan_title={"Master Chef"}
            plan_image={MasterChefIcon}
            plan_price={25}
            plan_perks_1={
              "All the perks from 'Home Cook' and 'Pro Chef' plans are included."
            }
            plan_perks_2={"Store up to 1000 recipes in your cook list."}
            plan_perks_3={"Get a full list of the tools to make a great meal."}
            plan_perks_4={"Share you recipies with the entire world."}
          />
        </Flex>
      </Suspense>
    </Box>
  );
};

export default home;
