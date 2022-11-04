import React from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Container,
  Flex,
  Heading,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import { FaFacebookSquare, FaWhatsapp } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";

const NewCampaign = () => {
  const navigate=useNavigate()
  const {name}=useParams()
  let paramtitle = name.split(" ").join("");
  
  return (
    <div>
      <Container
        m={"auto"}
        mt={"10"}
        flexDirection={"column"}
        boxShadow={"2xl"}
      >
        <Center>
          <Image src="https://ketto.gumlet.io/assets/images/thank-you/ketto-icon.png?w=480&dpr=1.0"></Image>
        </Center>
        <Heading
          textTransform={"capitalize"}
          fontSize={"2xl"}
          textAlign={"center"}
          mt={"5"}
          color={"#01bfbd"}
        >
          your fundraiser is under review
        </Heading>
        <Text fontSize={"1.2rem"} textAlign={"center"}>
          Meanwhile, you can alwasys improve fundraiser by going to the
          dashboard.
        </Text>
        <Center>
          <Button
            bgColor={"#01bfbd"}
            _hover={{ bgColor: "teal" }}
            color={"white"}
            w={"50%"}
            m={"auto"}
            mt={"5"}
            mb={"5"}
            onClick={()=>navigate(`/crowdfunding/fundraisers/${paramtitle}`)}
          >
            Visit Dashboard
          </Button>
        </Center>
      </Container>
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

export default NewCampaign;
