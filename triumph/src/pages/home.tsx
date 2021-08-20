import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React, { Suspense } from "react";
import { Link } from "react-router-dom";
import SpinnerComponent from "src/components/Spinner";
import HomeCookIcon from "../images/HomeCook.svg";
import MasterChefIcon from "../images/MasterChef.svg";
import ProChefIcon from "../images/ProChef.svg";
const PricingComponent = React.lazy(() => import("src/components/Pricing"));
const HeaderComponent = React.lazy(() => import("src/components/Header"));

const home = () => {
  return (
    <Box>
      <Suspense fallback={<SpinnerComponent />}>
        <HeaderComponent />
      </Suspense>
      <Flex
        justifyContent={"center"}
        width={"100%"}
        height={"90vh"}
        flexDir={{ sm: "column", md: "row", lg: "row" }}
        alignItems={"center"}
        background={"#f5f5f5"}
        boxShadow="lg"
      >
        <Flex maxWidth={"50%"} maxHeight={"90vh"} flexDir={"column"}>
          <Text fontFamily={"heading"} fontSize={{ sm: "30px", lg: "44px" }}>
            Cook like a pro chef.
          </Text>
          <Text fontSize={{ sm: "18px", md: "17px", lg: "19px" }} mt={"4"}>
            Save your favorite recipes in one place with ease. Look through a
            feed of recommended food items to try for your next meal. Organize
            all of your meal plans and share them with anyone, anywhere.
          </Text>
          <Flex
            width={"100%"}
            mt={"6"}
            flexDirection={"row"}
            alignItems={"center"}
          >
            <Box flexDirection={"row"}>
              <Link to="/register">
                <Button
                  mr={4}
                  width={{ sm: "250px", md: "200px", lg: "250px" }}
                  color={"white"}
                  background={"green.400"}
                >
                  Create an account
                </Button>
              </Link>
            </Box>
          </Flex>
        </Flex>
        <Flex
          height={{ sm: "0vh", lg: "50vh" }}
          width={{ sm: "0vh", lg: "60vh" }}
          alignContent={"center"}
          justifyContent={"center"}
        >
          <Box>
            <Suspense fallback={<SpinnerComponent />}>
              <Image
                src={
                  "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80"
                }
                width={{ sm: "0%", md: "50vh" }}
                objectFit={"cover"}
                height={"100%"}
                alt={"Photo by Davide Cantelli on Unsplash"}
                boxShadow="lg"
                borderRadius={"lg"}
              />
            </Suspense>
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
      <Suspense fallback={<SpinnerComponent />}>
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
