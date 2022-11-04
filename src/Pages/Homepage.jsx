import { ArrowForwardIcon, ChevronRightIcon } from "@chakra-ui/icons";
import {
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Grid,
  Image,
  Container,
  Center,
  Stack,
  ButtonGroup,
} from "@chakra-ui/react";
import React from "react";
import { GiMartyrMemorial } from "react-icons/gi";
import {
  FaBriefcaseMedical,
  FaFacebook,
  FaFacebookSquare,
  FaPaw,
  FaWhatsapp,
  FaWhatsappSquare,
} from "react-icons/fa";
import { BsDashLg } from "react-icons/bs";
import { BiDonateHeart } from "react-icons/bi";
import { TbSchool, TbMoodKid } from "react-icons/tb";
import { IoPawOutline } from "react-icons/io5";
import CardSlider from "../Components/CardSlider";
import StartFundraiserSteps from "../Components/StartFundraiserSteps";
import SuccessStories from "../Components/SuccessStories";
import FeaturedIn from "../Components/FeaturedIn";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import SupprortChatBox from "../Components/SupprortChatBox";
// import "../Assets/Images/industry.png";

const Homepage = () => {
  return (
    <div>
      {/* Banner starts here */}
      <Flex width={"100%"}>
        <Box
          height={["30rem", "30rem", "30rem"]}
          width={["100%", "100%", "100%"]}
          display="flex"
          flexDirection={["column", "column", "row"]}
          justifyContent={["center", "center", "center"]}
          bgImg="https://kettocdn.gumlet.io/media/banner/0/71/image/626a109be777492340e46d013c3cad0857a5da3a.png?w=1366&dpr=1.0"
          bgRepeat={"no-repeat"}
          bgSize={["contain", "contain", "cover"]}
        >
          <Box width={"50%"} height={["0%", "0%", "100%"]}></Box>
          <Box
            width={["90%", "70%", "50%"]}
            bg={"transparent"}
            display="flex"
            flexDirection={["column", "column", "row"]}
            justifyContent={["center", "flex-end", ""]}
            alignItems={["baseline", "baseline", "center"]}
          >
            <Box height={["", "50%", "75%"]} mt={["10", "", ""]}>
              <Heading color="blackAlpha.700" size={["md", "lg", "xl"]}>
                Need Funds to Pay For a Medical Emergency or Social Cause?
              </Heading>
              <Flex
                justifyContent="left"
                gap={["10px", "5px", "20px"]}
                mt={["4", "4", "8"]}
              >
                <Box>
                  <Heading
                    fontWeight={"bold"}
                    color={"#01bfbd"}
                    size={["md", "md", "lg"]}
                  >
                    0%
                  </Heading>
                  <Heading
                    fontWeight={"bold"}
                    color={"blackAlpha.600"}
                    size={["sm", "sm", "md"]}
                  >
                    PLATFORM FEE
                  </Heading>
                </Box>
                <Box>
                  <Heading
                    fontWeight={"bold"}
                    color={"#01bfbd"}
                    size={["md", "md", "lg"]}
                  >
                    55 Lakh+
                  </Heading>
                  <Heading
                    fontWeight={"bold"}
                    color={"blackAlpha.600"}
                    size={["sm", "sm", "md"]}
                  >
                    DONORS
                  </Heading>
                </Box>
                <Box>
                  <Heading
                    fontWeight={"bold"}
                    color={"#01bfbd"}
                    size={["md", "md", "lg"]}
                  >
                    2 Lakh+
                  </Heading>
                  <Heading
                    fontWeight={"bold"}
                    color={"blackAlpha.600"}
                    size={["sm", "sm", "md"]}
                  >
                    FUNDRAISERS
                  </Heading>
                </Box>
              </Flex>
              <Box mt={["0", "0", "8"]}>
                <Text
                  color={"#01bfbd"}
                  fontWeight={"medium"}
                  fontSize={["small", "large", "xl"]}
                >
                  Ketto’s{" "}
                  <span style={{ fontSize: "30px", fontWeight: "bold" }}>
                    0
                  </span>
                  <span style={{ fontWeight: "bold", fontSize: "20px" }}>
                    % Platform fees
                  </span>{" "}
                  ensures maximum funds for you
                </Text>

                <Button
                  bgColor={"#01bfbd"}
                  colorScheme={"#01bfbd"}
                  size={["md", "md", "lg"]}
                  p={["1", "3", "7"]}
                  shadow="5px 5px #CAE1E0"
                  mt={["5", "", ""]}
                  ml={["4rem", "0rem", "0rem"]}
                >
                  Start a Fundraiser for FREE
                </Button>
              </Box>

              <Button
                bg={"transparent"}
                colorScheme={"none"}
                color={"#01bfbd"}
                p="0"
                mt={"2"}
                ml={["4rem", "0rem", "0rem"]}
              >
                नि: शुल्क फंडरेजर शुरू करें{" "}
                <ChevronRightIcon fontSize={"2xl"} />
              </Button>
            </Box>
          </Box>
        </Box>
      </Flex>
      {/* Banner ends here */}

      {/* Mid section start here */}
      <Flex justifyContent={"center"} mt={["0", "0", "-7"]}>
        <Box
          border={"1px solid #d3d4f2"}
          boxShadow={"2xl"}
          bgColor={"white"}
          display={"flex"}
          justifyContent={"space-around"}
          gap={"10px"}
          width={["100%", "100%", "50%"]}
          height={["8rem", "4rem", "8rem"]}
          borderRadius={"15px"}
        >
          <Box display={"flex"} alignItems="center">
            <Button
              bgColor={"#204b6b"}
              color={"white"}
              rightIcon={<ChevronRightIcon fontSize={["md", "xl", "2xl"]} />}
              size={["sm", "md", "lg"]}
              ml={["1", "3", "5"]}
            >
              Donate{" "}
            </Button>
          </Box>
          <Box display={"flex"} alignItems="center">
            <Box p={[1, 2, 2]}>
              <Heading textTransform={"capitalize"} size={["xs", "sm", "md"]} color="#204b6b">
                start monthly donation to save lives
              </Heading>
              <Text fontSize={["10px", "sm", "sm"]} mt={"2"} color="#c5c5c5">
                With your support, countless children will receive health care
                and a happy life. Start your monthly donation <br /> today
              </Text>
            </Box>
          </Box>
          <Box
            width={["60%", "60%", "30%"]}
            bgSize={"12.6rem"}
            bgPosition={"center"}
            bgRepeat={"no-repeat"}
            bgImage="https://kettocdn.gumlet.io/media/banner/0/92/image/81d7a1a7626397c32f6c1fb83bfdf476ccd734af.png?w=720&dpr=1.0"
            borderRadius={"0px 11px 11px 0px"}
          ></Box>
        </Box>
      </Flex>
      {/* Mid section ends here */}
      <Container textAlign={"center"} mt={"10"}>
        <Heading>Trending Fundraisers</Heading>
        <Text>View the fundraiser that are most active right now</Text>
      </Container>
      {/* slider component */}
      <CardSlider />
      <Flex justifyContent={["space-between"]} alignItems={["center", "", ""]} mt={"7"} flexDirection={["column", "column", "row"]}>
        <Box width={"77%"}>
          {" "}
          <Text color={"gray"} fontSize={"sm"} textAlign={"center"}>
            Note: Some fundraisers are not eligible for any tax deduction such
            as 80G, 501(c), etc.
          </Text>{" "}
        </Box>
        <Box width={["50%", "23%", "23%"]} textAlign={["center", "center", "left"]}>
          {" "}
          <Heading size={["xs", "xs", "sm"]} color={"#01bfbd"}>
            View Mores <ArrowForwardIcon />{" "}
          </Heading>{" "}
        </Box>
      </Flex>
      {/* slider component */}

      <StartFundraiserSteps />

      <Box
        rounder={"xl"}
        boxShadow="2xl"
        bg="white"
        m={"auto"}
        w={"65%"}
        mt={"10"}
        display={"grid"}
        gridTemplateColumns={"repeat(2, 1fr)"}
      >
        <Box width={"75%"} margin={"auto"}>
          <Image
            w={"100%"}
            h={"100%"}
            src="https://ketto.gumlet.io/assets/images/homepage/mcd-app-homepage.png?w=480&dpr=1.0"
          ></Image>
        </Box>
        <Box height={"100%"}>
          <Box height={"30%"} display={"flex"} alignItems={"center"}>
            <Heading size={"lg"}>Manage your fundraisers on the go</Heading>
          </Box>
          <Grid templateColumns={"repeat(2, 1fr)"} gap={"10"}>
            <Box display={"flex"} flexDirection={"column"}>
              <Image
                width={"35%"}
                src="https://ketto.gumlet.io/assets/images/download/phone.png?w=200&dpr=1.0"
              ></Image>
              <Text fontSize={"1.2rem"}>Access a personlized dashboard</Text>
            </Box>
            <Box display={"flex"} flexDirection={"column"}>
              <Image
                width={"35%"}
                src="https://ketto.gumlet.io/assets/images/download/withdraw.png?w=200&dpr=1.0"
              ></Image>
              <Text fontSize={"1.2rem"}>Withdraw your funds faster</Text>
            </Box>
            <Box display={"flex"} flexDirection={"column"}>
              <Image
                width={"35%"}
                src="https://ketto.gumlet.io/assets/images/download/piggy-bank.png?w=200&dpr=1.0"
              ></Image>
              <Text fontSize={"1.2rem"}>
                Keep track of all your donations recieved
              </Text>
            </Box>
            <Box display={"flex"} flexDirection={"column"}>
              <Image
                width={"35%"}
                src="https://ketto.gumlet.io/assets/images/download/support.png?w=200&dpr=1.0"
              ></Image>
              <Text fontSize={"1.2rem"}>Start fundraisers within seconds</Text>
            </Box>
          </Grid>
          <Box display={"flex"} alignItems={"end"} height={"20%"}>
            <Box display={"flex"} gap={"2"} mb={"3"}>
              <Image
                width={"30%"}
                src="https://ketto.gumlet.io/assets/images/sip/icons/black-google-store.png?w=480&dpr=1.0"
              ></Image>
              <Image
                width={"30%"}
                src="https://ketto.gumlet.io/assets/images/sip/App-Store-black.png?w=480&dpr=1.0"
              ></Image>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box width={"60%"} margin="auto" textAlign={"center"} mt="20">
        <Heading size={"lg"}>Causes you can raise funds for</Heading>
        <Text color={"gray.500"} mt={"2"}>
          Be it for a personal need, social cause or a creative idea-you can
          count on us for <br /> the project tha you want to raise funds for.
        </Text>
      </Box>
      <Flex justifyContent={"center"} gap={"2"} mt={"10"}>
        <Box borderRadius={"lg"} width={"11rem"} height={"8.5rem"}>
          <Button
            width={"100%"}
            height={"100%"}
            bgImage="https://ketto.gumlet.io/assets/images/homepage/causes-bg.png?w=auto&dpr=1.0"
            display={"flex"}
            flexDirection={"column"}
            color={"white"}
            colorScheme={"none"}
          >
            <FaBriefcaseMedical color="white" size={"4rem"} />
            <Text mt={"2"}>MEDICAL</Text>
            <BsDashLg />
          </Button>
        </Box>{" "}
        <Box borderRadius={"lg"} width={"11rem"} height={"8.5rem"}>
          <Button
            width={"100%"}
            height={"100%"}
            bgImage="https://ketto.gumlet.io/assets/images/homepage/causes-bg.png?w=auto&dpr=1.0"
            display={"flex"}
            flexDirection={"column"}
            color={"white"}
            colorScheme={"none"}
          >
            <GiMartyrMemorial color="white" size={"4rem"} />
            <Text mt={"2"}>MEMORIAL</Text>
            <BsDashLg />
          </Button>
        </Box>{" "}
        <Box borderRadius={"lg"} width={"11rem"} height={"8.5rem"}>
          <Button
            width={"100%"}
            height={"100%"}
            bgImage="https://ketto.gumlet.io/assets/images/homepage/causes-bg.png?w=auto&dpr=1.0"
            display={"flex"}
            flexDirection={"column"}
            color={"white"}
            colorScheme={"none"}
          >
            <TbMoodKid color="white" size={"4rem"} />
            <Text mt={"2"}>CHILDREN</Text>
            <BsDashLg />
          </Button>
        </Box>{" "}
        <Box borderRadius={"lg"} width={"11rem"} height={"8.5rem"}>
          <Button
            width={"100%"}
            height={"100%"}
            bgImage="https://ketto.gumlet.io/assets/images/homepage/causes-bg.png?w=auto&dpr=1.0"
            display={"flex"}
            flexDirection={"column"}
            color={"white"}
            colorScheme={"none"}
          >
            <TbSchool color="white" size={"4rem"} />
            <Text mt={"2"}>EDUCATION</Text>
            <BsDashLg />
          </Button>
        </Box>{" "}
        <Box borderRadius={"lg"} width={"11rem"} height={"8.5rem"}>
          <Button
            width={"100%"}
            height={"100%"}
            bgImage="https://ketto.gumlet.io/assets/images/homepage/causes-bg.png?w=auto&dpr=1.0"
            display={"flex"}
            flexDirection={"column"}
            color={"white"}
            colorScheme={"none"}
          >
            <IoPawOutline color="white" size={"4rem"} />
            <Text mt={"2"}>ANIMAL</Text>
            <BsDashLg />
          </Button>
        </Box>{" "}
        <Box borderRadius={"lg"} width={"11rem"} height={"8.5rem"}>
          <Button
            colorScheme={"none"}
            width={"100%"}
            height={"100%"}
            bgImage="https://ketto.gumlet.io/assets/images/homepage/causes-bg.png?w=auto&dpr=1.0"
            display={"flex"}
            flexDirection={"column"}
            color={"white"}
          >
            <BiDonateHeart color="white" size={"4rem"} />
            <Text mt={"2"}>OTHERS</Text>
            <BsDashLg />
          </Button>
        </Box>{" "}
      </Flex>
      <Box textAlign={"center"} mt={"20"}>
        <Heading>Why Ketto?</Heading>
      </Box>
      <Grid
        templateColumns={"repeat(4, 1fr)"}
        width={"75%"}
        m={"auto"}
        mt={"20"}
        gap={"1rem"}
      >
        <Flex width={"80%"} direction={"column"} alignItems={"center"}>
          <Box
            w={"5rem"}
            h={"5rem"}
            bgImage={"https://i.postimg.cc/RZrxhJCx/industry.png"}
            bgSize={"contain"}
            bgRepeat={"no-repeat"}
            borderBottom={"4px solid orange"}
          ></Box>
          <Text mt={"2"} textAlign={"center"}>
            Industry's best fundraising success rate
          </Text>
        </Flex>
        <Flex width={"80%"} direction={"column"} alignItems={"center"}>
          <Box
            w={"5rem"}
            h={"5rem"}
            bgImage={"https://i.postimg.cc/VvbMzx7L/our-Supporters.png"}
            bgSize={"contain"}
            bgRepeat={"no-repeat"}
            borderBottom={"4px solid orange"}
          ></Box>
          <Text mt={"2"} textAlign={"center"}>
            Supported By 55,00,000+ Donors
          </Text>
        </Flex>
        <Flex width={"80%"} direction={"column"} alignItems={"center"}>
          <Box
            w={"5rem"}
            h={"5rem"}
            bgImage={"https://i.postimg.cc/6QpxFt3R/tools.png"}
            bgSize={"contain"}
            bgRepeat={"no-repeat"}
            borderBottom={"4px solid orange"}
          ></Box>
          <Text mt={"2"} textAlign={"center"}>
            Easy-To-Manage Tools To Boost Results
          </Text>
        </Flex>
        <Flex width={"80%"} direction={"column"} alignItems={"center"}>
          <Box
            w={"5rem"}
            h={"5rem"}
            bgImage={"https://i.postimg.cc/SKHq9HSM/donation.png"}
            bgSize={"contain"}
            bgRepeat={"no-repeat"}
            borderBottom={"4px solid orange"}
          ></Box>
          <Text mt={"2"} textAlign={"center"}>
            Receive donations via all popular payment modes
          </Text>
        </Flex>
        <Flex width={"80%"} direction={"column"} alignItems={"center"}>
          <Box
            w={"5rem"}
            h={"5rem"}
            bgImage={"https://i.postimg.cc/J7pM8pvZ/suppport-System.png"}
            bgSize={"contain"}
            bgRepeat={"no-repeat"}
            borderBottom={"4px solid orange"}
          ></Box>
          <Text mt={"2"} textAlign={"center"}>
            Get Expert Support 24/7
          </Text>
        </Flex>
        <Flex width={"80%"} direction={"column"} alignItems={"center"}>
          <Box
            w={"5rem"}
            h={"5rem"}
            bgImage={"https://i.postimg.cc/5yrt2g74/dashboard.png"}
            bgSize={"contain"}
            bgRepeat={"no-repeat"}
            borderBottom={"4px solid orange"}
          ></Box>
          <Text mt={"2"} textAlign={"center"}>
            A Dedicated Smart-Dashboard
          </Text>
        </Flex>
        <Flex width={"80%"} direction={"column"} alignItems={"center"}>
          <Box
            w={"5rem"}
            h={"5rem"}
            bgImage={"https://i.postimg.cc/pLBGFSvL/withdraw.png"}
            bgSize={"contain"}
            bgRepeat={"no-repeat"}
            borderBottom={"4px solid orange"}
          ></Box>
          <Text>Withdraw Funds Without Hassle</Text>
        </Flex>
        <Flex width={"80%"} direction={"column"} alignItems={"center"}>
          <Box
            w={"5rem"}
            h={"5rem"}
            // border={"1px solid red"}
            bgImage={"https://i.postimg.cc/QNbv5Vq3/international.png"}
            bgSize={"contain"}
            bgRepeat={"no-repeat"}
            borderBottom={"4px solid orange"}
          ></Box>
          <Text mt={"2"} textAlign={"center"}>
            International Payment Support
          </Text>
        </Flex>
      </Grid>
      <Heading textAlign={"center"} mt={"20"} mb={"20"}>
        Success Stories
      </Heading>
      <SuccessStories />
      <Center mt={"10"}>
        <Stack direction={"row"}>
          <ButtonGroup gap={"4"}>
            <Button
              fontWeight={"bold"}
              height={"50px"}
              width={"300px"}
              bgColor={"#01bfbd"}
              colorScheme={"teal"}
              variant={"solid"}
            >
              START A FUNDRAISER FOR FREE
            </Button>
            <Button
              fontWeight={"bold"}
              height={"50px"}
              width={"300px"}
              border={"2px"}
              colorScheme={"teal"}
              variant={"outline"}
            >
              TALK TO US
            </Button>
          </ButtonGroup>
        </Stack>
      </Center>
      <Heading textAlign={"center"} mt={"10"} mb={"10"}>
        Featured In
      </Heading>
      <FeaturedIn />
      <Flex
        justifyContent={"center"}
        gap={"5rem"}
        width={"93%"}
        m={"auto"}
        mt={"20"}
      >
        <Box display={"flex"} alignItems={"center"}>
          <Text>
            Have any questions? Check out our <Link to="#" color="teal">FAQs</Link> page or chat with us on Facebook or Whatsapp
          </Text>
        </Box>
        <Box>
          <ButtonGroup gap={"6"} size={"md"}>
            <Button
              dropShadow={"base"}
              rounded={"3xl"}
              colorScheme={"facebook"}
              leftIcon={<FaFacebookSquare />}
            >
              CHAT WITH US
            </Button>
            <Button
              dropShadow={"base"}
              rounded={"3xl"}
              colorScheme={"whatsapp"}
              leftIcon={<FaWhatsapp />}
            >
              CHAT WITH US
            </Button>
          </ButtonGroup>
        </Box>
      </Flex>
    </div>
  );
};

export default Homepage;
