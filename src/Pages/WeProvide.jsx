import React from "react";
import {
  Button,
  HStack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Grid,
  GridItem,
  Image,
  Heading,
  Text,
  Divider,
  Spacer,
} from "@chakra-ui/react";
import { FaDashcube } from "react-icons/fa";
import {BsDash} from "react-icons/bs";

const WeProvide = () => {
  return (
    <div>
      <Heading mt={"20"} mb={"10"} color={"#444444"} textAlign={"center"} size={"xl"}>We provide everything you need</Heading>
      <Grid
        templateColumns={["repeat(2, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)"]}
        gap={"5"}
        width={"100%"}
        m={"auto"}
      >
        <GridItem display={"flex"}>
          <Box w={"40%"}>
            <Image
              w={"80%"}
              src="https://i.postimg.cc/QNpXN2Lt/payout.png"
            ></Image>
          </Box>
          <Box>
            <Heading color={"#909090"} fontWeight={"500"} size={"md"}>Payout</Heading>
            <BsDash size={"1.3rem"}  color={"#01bfbd"} />
            <Text color={"#909090"}>
              This is your money, you can withdraw it at any point during the
              course of fundraiser
            </Text>
          </Box>
        </GridItem>
        <GridItem display={"flex"}>
          <Box w={"40%"}>
            <Image
              w={"80%"}
              src="https://i.postimg.cc/7YJ7sPj6/internet.png"
            ></Image>
          </Box>
          <Box>
            <Heading color={"#909090"} fontWeight={"500"}  size={"md"}>International payment support</Heading>
            <BsDash size={"1.3rem"}  color={"#01bfbd"} />
            <Text color={"#909090"}>
              We accept donations in multiple currencies from anywhere in the
              world
            </Text>
          </Box>
        </GridItem>
        <GridItem display={"flex"}>
          <Box w={"30%"}>
            <Image
              w={"75%"}
              src="https://i.postimg.cc/C1DTrqC7/fundraisers.png"
            ></Image>
          </Box>
          <Box>
            <Heading color={"#909090"} fontWeight={"500"}  size={"md"}>Multiple people - Same Fundraiser</Heading>
            <BsDash size={"1.3rem"}  color={"#01bfbd"} />
            <Text color={"#909090"}>Multiple people manage and fundraise for your cause</Text>
          </Box>
        </GridItem>
        <GridItem display={"flex"}>
          <Box w={"60%"}>
            <Image
              w={"90%"}
              src="https://i.postimg.cc/Jhw6h2Cr/webApp.png"
            ></Image>
          </Box>
          <Box>
            <Heading color={"#909090"} fontWeight={"500"}  size={"md"}>Personalized Web App</Heading>
            <BsDash size={"1.3rem"}  color={"#01bfbd"} />
            <Text color={"#909090"}>
              Get instant updates on your fundraiser's progress via instant
              alerts, email and track everything realtime on Ketto's web app
            </Text>
          </Box>
        </GridItem>
        <GridItem display={"flex"}>
          <Box w={"40%"}>
            <Image
              w={"70%"}
              src="https://i.postimg.cc/63q9pqXx/expert.png"
            ></Image>
          </Box>
          <Box>
            <Heading color={"#909090"} fontWeight={"500"}  size={"md"}>Dedicated Fundraiser expert</Heading>
            <BsDash size={"1.3rem"}  color={"#01bfbd"} />
            <Text color={"#909090"}>
              A dedicated fundraiser expert guides you through your fundraising
            </Text>
          </Box>
        </GridItem>
        <GridItem display={"flex"}>
          <Box w={"40%"}>
            <Image
              w={"80%"}
              src="https://i.postimg.cc/pXXmnWJr/raised-Amount.png"
            ></Image>
          </Box>
          <Box>
            <Heading color={"#909090"} fontWeight={"500"}  size={"md"}>Keep the raised amount</Heading>
            <BsDash size={"1.3rem"}  color={"#01bfbd"} />
            <Text color={"#909090"}>
              You will receive all the raised amount after the transactional,
              processing fee.
            </Text>
          </Box>
        </GridItem>
        <GridItem display={"flex"}>
          <Box w={"40%"}>
            <Image
              w={"80%"}
              src="https://i.postimg.cc/1XFRkr2Y/support.png"
            ></Image>
          </Box>
          <Box>
            <Heading color={"#909090"} fontWeight={"500"}  size={"md"}>24/7 support</Heading>
            <BsDash size={"1.3rem"}  color={"#01bfbd"} />
            <Text color={"#909090"}>
              We offer you 24*7 assistance via call, WhatsApp, Email, SMS and
              our Instant Chatting Interface
            </Text>
          </Box>
        </GridItem>
        <GridItem display={"flex"}>
          <Box w={"40%"}>
            <Image
              w={"80%"}
              src="https://i.postimg.cc/zvPHG6M0/ad-Support.png"
            ></Image>
          </Box>
          <Box>
            <Heading color={"#909090"} fontWeight={"500"}  size={"md"}>Advertising support</Heading>
            <BsDash size={"1.3rem"}  color={"#01bfbd"} />
            <Text color={"#909090"}>
              We provide marketing and promotional support for your fundraiser
            </Text>
          </Box>
        </GridItem>
        <GridItem display={"flex"}>
          <Box w={"40%"}>
            <Image
              w={"80%"}
              src="https://i.postimg.cc/65h4qH2r/tools-1.png"
            ></Image>
          </Box>
          <Box>
            <Heading color={"#909090"} fontWeight={"500"}  size={"md"}>Fundraising Marketing tool</Heading>
            <BsDash size={"1.3rem"}  color={"#01bfbd"} />
            <Text color={"#909090"}>
              A highly intelligent marketing tool, which provides all insights
              on your fundraiser
            </Text>
          </Box>
        </GridItem>
      </Grid>

      <HStack
        style={{ marginLeft: "20rem", padding: "20px ", marginTop: "3rem" }}
      >
        <Button
          _hover={{ background: "teal" }}
          backgroundColor={"#30C9C8"}
          color={"white"}
          padding={"25"}
        >
          START A FUNDRAISER
        </Button>
        <Button
          color={"#30C9C8"}
          backgroundColor={"white"}
          padding={"25"}
          border={"1px solid #30C9C8 "}
        >
          BROWSE FUNDRAISER
        </Button>
      </HStack>


      {/* ------------------------------faq--------------------------------------------------- */}

      <Accordion allowToggle mt={"10"}>
        <h1
          style={{ fontSize: "20px", fontWeight: "bold", marginLeft: "2rem" }}
        >
          FAQS
        </h1>
        <AccordionItem backgroundColor={"white"}>
          <h2>
            <AccordionButton>
              <Box flex="1" lineHeight="42px" fontSize="17px" textAlign="left">
                How do I raise funds?
              </Box>
              <AccordionIcon style={{ color: "#30C9C8" }} />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} display="flex">
            To Start a Fundraiser, follow the three steps:
            <br />
            1.Sign up on Ketto.
            <br />
            2.Fill up the form
            <br />
            3.Hit Submit
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem backgroundColor={"white"}>
          <h2>
            <AccordionButton>
              <Box flex="1" lineHeight="42px" fontSize="17px" textAlign="left">
                Can I raise funds for a friend as well?
              </Box>
              <AccordionIcon style={{ color: "#30C9C8" }} />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Yes, you can also raise funds for a friend, a loved one or anyone in
            need during life's crucial moments
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem backgroundColor={"white"}>
          <h2>
            <AccordionButton>
              <Box flex="1" lineHeight="42px" fontSize="17px" textAlign="left">
                Does the raised amount reach the individual directly?
              </Box>
              <AccordionIcon style={{ color: "#30C9C8" }} />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            With Ketto, the money you collect goes directly to the bank account
            associated with your fundraising page. Raising money for yourself or
            anyone has never been easier.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem backgroundColor={"white"}>
          <h2>
            <AccordionButton>
              <Box flex="1" lineHeight="42px" fontSize="17px" textAlign="left">
                Is it safe?
              </Box>
              <AccordionIcon style={{ color: "#30C9C8" }} />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Your Ketto fundraiser features the very best in secure payment
            encryption technology. Not only are your donors online payments
            safe, your money is stored securely until you're ready to request a
            withdrawal via electronic bank transfer.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem backgroundColor={"white"}>
          <h2>
            <AccordionButton>
              <Box flex="1" lineHeight="42px" fontSize="17px" textAlign="left">
                What if I don't reach my goal?
              </Box>
              <AccordionIcon style={{ color: "#30C9C8" }} />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            No problem. You will still receive the raised amount after the
            transactional processing fee. To know more about transactional
            processing fee, visit: www.ketto.org/support/plans-and-pricing
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem backgroundColor={"white"}>
          <h2>
            <AccordionButton>
              <Box flex="1" lineHeight="42px" fontSize="17px" textAlign="left">
                I have more questions, who do I write to?
              </Box>
              <AccordionIcon style={{ color: "#30C9C8" }} />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            You can write to info@ketto.org Know someone who needs funds for
            medical treatment urgently? Help them out by sharing this
            information with them.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default WeProvide;
