import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Container,
  Flex,
  Heading,
  Image,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";

const StartFundraiserSteps = () => {
  return (
    <div>
      <Container maxWidth={"100%"} mt={"10"}>
        <Heading textAlign={"center"}>
          Start a Fundraiser in three simple steps
        </Heading>
      </Container>
      <Flex gap="6" width={"70%"} margin={"auto"} mt={"10"}>
        <Box w={"15%"} mt={"10"}>
          <Image
            // border={"1px solid red"}
            width={"100%"}
            src="https://ketto.gumlet.io/assets/images/homepage/sac-separator.png?w=100&dpr=1.0"
          ></Image>
        </Box>
        <Box
          w={"100%"}
          h={"700px"}
          mt={"10"}
          display="flex"
          flexDirection={"column"}
          // justifyContent={"space-between"}
        >
          <Box>
            <Heading fontWeight={"medium"} size={"md"} color={"#01bfbd"}>
              Start your fundraiser
            </Heading>
            <br />
            <Text fontSize={"md"}>
              It’ll take only 2 minutes. Just tell us a few details about you
              and the ones you are raising funds for.
            </Text>
          </Box>
          <Box mt={"20"}>
            <Heading fontWeight={"medium"} size={"md"} color={"#01bfbd"}>
              Share your fundraiser
            </Heading>
            <br />
            <Text fontSize={"md"}>
              All you need to do is share the fundraiser with your friends and
              family. In no time, support will start pouring in.
            </Text>
            <Text fontSize={"xs"} color="gray">
              Share your fundraiser directly from dashboard on social media.
            </Text>
          </Box>
          <Box mt={"20"}>
            <Heading fontWeight={"medium"} size={"md"} color={"#01bfbd"}>
              Withdraw Funds
            </Heading>
            <br />
            <Text fontSize={"md"}>
              The funds raised can be withdrawn without any hassle directly to
              your bank account.
            </Text>
            <Text fontSize={"xs"} color={"gray"}>
              It takes only 5 minutes to withdraw funds on ketto.
            </Text>
          </Box>
        </Box>
        <Spacer></Spacer>
        <Spacer></Spacer>
        <Spacer></Spacer>
        <Box w={"70%"} bg={"transparent"}>
          <video loop muted autoPlay controls="">
            <source
              src="https://www.ketto.org/assets/videos/screen_recording.webm"
              type="video/webm"
            ></source>
            <source
              src="https://www.ketto.org/assets/videos/screen_recording.mp4"
              type="video/mp4"
            ></source>
          </video>
        </Box>
      </Flex>
      <Center>
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
      <Flex justifyContent={"space-around"} width={"93%"} m={"auto"} mt={"10"}>
        <Box display={"flex"} alignItems={"center"}>
          <Text>
            Have any questions for us? Chat with our team on Facebook or
            WhatsApp now.
          </Text>
        </Box>
        <Box>
          <ButtonGroup gap={"6"} size={"lg"}>
            <Button
              borderRadius={"30px"}
              colorScheme={"facebook"}
              leftIcon={<FaFacebook />}
            >
              CHAT WITH US
            </Button>
            <Button
              borderRadius={"30px"}
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

export default StartFundraiserSteps;
