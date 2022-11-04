import React, { useEffect, useState } from "react";
import {
  Box,
  Heading,
  Text,
  Button,
  Input,
  HStack,
  Container,
  Select,
  Grid,
  GridItem,
  Spinner,
  InputGroup,
  Stack,
} from "@chakra-ui/react";
import { AiFillFacebook } from "react-icons/ai";
import { ImWhatsapp } from "react-icons/im";
import { Filter } from "../Components/FilterCategory";
import { useSelector, useDispatch } from "react-redux";
import { SearchIcon, ArrowRightIcon, ArrowLeftIcon } from "@chakra-ui/icons";
import { changeloadin, getdata } from "../Redux/AppReducer/app.actions";
import { BrowserFundingCard } from "../Components/BrowserFundingCard";
import SupprortChatBox from "../Components/SupprortChatBox";
const BrowseFundraiser = () => {
  const [filter, setFilter] = useState("");

  const [searchinpage, setsearchinpage] = useState("");
  const [seacheddata, setsearcheddata] = useState(null);

  const [offlimit, setofflimit] = useState(false);
  const [limit, setlimit] = useState(5);
  const [location, setlocation] = useState("");
  const dispatch = useDispatch();
  const funds = useSelector((state) => state.AppReducer.funds);
  const isLoading = useSelector((state) => state.AppReducer.isLoading);
 
  const loadingState = useSelector((state) => state.AppReducer.loadingState);

  const handlepagination = () => {
    if (limit >= 19) {
      setofflimit(true);
      setlimit(19);
    } else {
      setofflimit(false);
      setlimit(limit + 2);
    }
  };
  const handleofflimit = () => {
    setlimit(5);
    setofflimit(false);
  };
  useEffect(() => {
    dispatch(getdata(filter, location, limit));
    
    // setloadingstate(true)
    dispatch(changeloadin(true));
  }, [filter, location, limit]);

  const searchInpage = (e) => {
    setsearchinpage(e.target.value);
  };
  useEffect(() => {
    if (!searchinpage) {
      setsearcheddata([]);
    } else {
      let newlistofsuggestions = funds
        ?.filter((item) =>
          item.title?.toLowerCase().indexOf(searchinpage) !== -1 ? true : false
        )
        .map((item) => item);

      setsearcheddata(newlistofsuggestions);
    }
  }, [searchinpage]);

  return (
    <>
      <Container
        height={450}
        maxW="container.2xl"
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        backgroundImage="https://www.ketto.org/assets/images/Sip-banner-people/sip-banner-pc.png"
      >
        <Box paddingTop="6%" paddingLeft="10%" width="auto">
          <Heading fontSize={48} color="white" margin={5}>
            Save A Child Everyday
          </Heading>
          <Text fontSize={24} color="white" margin={5}>
            Join monthly donors with Social Impact and Start saving needy
            children every month
          </Text>
          <Button margin={5} color="#4C829C" variant="solid">
            Start Giving Monthly
          </Button>
        </Box>
      </Container>
      <Container maxW="container.xl" display="flex">
        {/* <HStack > */}
        <Filter onChange={(value) => setFilter(value)} />
        <Box width="80%" marginTop={10}>
          {/* <Input variant='outline' placeholder='Search for fundraisers' onChange={searchInpage}/> */}
          <InputGroup>
            <Input
              outline={false}
              outlineColor="#30C9C8"
              placeholder="Search for fundraisers"
              onChange={searchInpage}
            />

            <SearchIcon marginTop={3} marginLeft={-10} color="#30C9C8" />
          </InputGroup>

          <HStack marginTop={10}>
            <label htmlFor="cat">Showing fundaraisers for </label>
            <Select
              outline={false}
              outlineColor="#30C9C8"
              id="cat"
              placeholder="All Categories"
              width="30%"
              onChange={(e) => setFilter(e.target.value)}
            >
              <option
                selected={filter == "education" ? true : false}
                value="education"
              >
                Education
              </option>
              <option
                selected={filter == "medical" ? true : false}
                value="medical"
              >
                Medical
              </option>
              <option
                selected={filter == "Women_girls" ? true : false}
                value="Women_girls"
              >
                {" "}
                Women & Girls
              </option>
              <option
                selected={filter == "animals" ? true : false}
                value="animals"
              >
                Animals
              </option>
              <option
                selected={filter == "creative" ? true : false}
                value="creative"
              >
                Creative
              </option>
              <option
                selected={filter == "food_&_hunger" ? true : false}
                value="food_&_hunger"
              >
                Food & Hunger
              </option>
              <option
                selected={filter == "environment" ? true : false}
                value="environment"
              >
                Environment
              </option>
              <option
                selected={filter == "memorial" ? true : false}
                value="memorial"
              >
                Memorial
              </option>
              <option
                selected={filter == "community_development" ? true : false}
                value="community_development"
              >
                Community Development
              </option>
              <option
                selected={filter == "others" ? true : false}
                value="others"
              >
                Others
              </option>
            </Select>

            <label htmlFor="city">from </label>
            <Select
              outline={false}
              outlineColor="#30C9C8"
              id="city"
              placeholder="All Locations"
              width="30%"
              onChange={(e) => setlocation(e.target.value)}
            >
              <option value="mumbai">Mumbai</option>
              <option value="bengaluru">Bengaluru</option>
              <option value="delhi"> Delhi</option>
              <option value="noida">Noida</option>
              <option value="hyderbad">Hyderbad</option>
              <option value="chennai">Chennai</option>
              <option value="kolkata">Kolkata</option>
              <option value="jaipur">Jaipur</option>
              <option value="lucknow">Lucknow</option>
              <option value="others">Others</option>
            </Select>
            <Button
              colorScheme="red"
              variant="ghost"
              onClick={() => setFilter("")}
            >
              Reset Filter
            </Button>
          </HStack>
          {loadingState && isLoading == true ? (
            <Box margin="auto">
              <Spinner width={10} height={10} textAlign="center" />
            </Box>
          ) : null}

          {seacheddata?.length > 0 ? (
            <Grid templateColumns="repeat(3, 1fr)" gap={6} marginTop={10}>
              {seacheddata?.map((el) => {
                return (
                  <GridItem key={el.id}>
                    <BrowserFundingCard {...el} />
                  </GridItem>
                );
              })}
            </Grid>
          ) : funds?.length == 0 ||
            (searchinpage && seacheddata.length == 0) ? (
            <Text>No results found</Text>
          ) : (
            <Grid templateColumns="repeat(3, 1fr)" gap={6} marginTop={10}>
              {funds?.map((el) => {
                return (
                  <GridItem key={el.id}>
                    <BrowserFundingCard key={el.id} {...el} />
                  </GridItem>
                );
              })}
            </Grid>
          )}

          <Stack bottom={0} padding={50} margin="auto" textAlign="center">
            <Button
              rightIcon={<ArrowRightIcon />}
              _hover={{ background: "white" }}
              background="none"
              variant="ghost"
              color="#30C9C8"
              onClick={handlepagination}
            >
              Load more
            </Button>
          </Stack>

          {offlimit ? (
            <Container>
              <HStack bottom={0} padding={5} textAlign="center">
                <Text>No more fundraiser available</Text>
                <Button
                  leftIcon={<ArrowLeftIcon />}
                  _hover={{ background: "white" }}
                  background="none"
                  variant="ghost"
                  color="#30C9C8"
                  onClick={handleofflimit}
                >
                  Go to start ?
                </Button>
              </HStack>
            </Container>
          ) : null}
          <HStack spacing="auto" margin={5}>
            <Text>
              Have a question? Check out our FAQs page or chat with us on
              Facebook or WhatsApp.
            </Text>

            <HStack>
              <Button
                leftIcon={<AiFillFacebook color="white" />}
                colorScheme="blue"
              >
                Chat with us
              </Button>
              <Button leftIcon={<ImWhatsapp />} colorScheme="green">
                Chat with us
              </Button>
            </HStack>
          </HStack>
        </Box>

        {/* // pagination ends here */}

        {/* </HStack> */}
      </Container>
    </>
  );
};

export default BrowseFundraiser;
