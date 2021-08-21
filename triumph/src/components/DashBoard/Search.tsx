import {
  Box,
  Button,
  Flex,
  FormControl,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import axios from "axios";
import React, { Suspense, useEffect, useState } from "react";
import SpinnerComponent from "../Spinner";
const DashboardHeader = React.lazy(() => import("./DashboardHeader"));
const RecipesCardComponent = React.lazy(() => import("./RecipesCard"));

const SearchComponent = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState<string>("");
  const [query, setQuery] = useState<string>("");
  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await axios.get(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${process.env.REACT_APP_RECIPE_API_APP_ID}&app_key=${process.env.REACT_APP_RECIPE_API_APP_KEY}`
    );
    const data = await response.data;
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const updateSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const getSearch = () => {
    setQuery(search);
  };
  return (
    <Box>
      <Suspense fallback={<SpinnerComponent />}>
        <DashboardHeader />
      </Suspense>
      <Flex flexDir="row" mb="2" justifyContent="center" alignItems="center">
        <Box width={"490px"}>
          <Flex spacing={4} p="1rem">
            <FormControl onChange={updateSearch} id="Search Recipe" isRequired>
              <InputGroup>
                <InputLeftElement pointerEvents="none" />
                <Input
                  type="string"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Type something...."
                />
              </InputGroup>
            </FormControl>
          </Flex>
        </Box>
        <Button
          borderRadius={4}
          type="submit"
          variant="solid"
          onClick={getSearch}
          backgroundColor={"green.400"}
          width="100px"
          color={"white"}
        >
          Search
        </Button>
      </Flex>
      {!null ? (
        <Suspense fallback={<SpinnerComponent />}>
          <Heading
            fontWeight={"extrabold"}
            fontSize={"2xl"}
            mr={5}
            ml={5}
            mt={4}
          >
            Your feed
          </Heading>
          {recipes.map((recipe: any) => (
            <RecipesCardComponent
              key={recipe.recipe.calories}
              title={recipe.recipe.label}
              image={recipe.recipe.image}
              calories={recipe.recipe.calories}
              source={recipe.recipe.source}
              url={recipe.recipe.url}
              ingredients={recipe.recipe.ingredients}
              shareAs={recipe.recipe.shareAs}
            />
          ))}
        </Suspense>
      ) : (
        <Flex
          alignItems={"center"}
          width={"100%"}
          height={"90vh"}
          justifyContent={"center"}
        >
          Type something and all of the results will introduce themselves.
        </Flex>
      )}
    </Box>
  );
};

export default SearchComponent;
