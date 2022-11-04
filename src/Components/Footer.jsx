import {
  Box,
  Container,
  Flex,
  HStack,
  Icon,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import {
  faFacebook,
  FaFacebookSquare,
  FaInstagram,
  FaInstagramSquare,
  FaLinkedinIn,
  FaTwitter,
  FaTwitterSquare,
  FaWhatsapp,
  FaYoutube,
  FaYoutubeSquare,
} from "react-icons/fa";

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <Box bgColor={"#0b4341"} color={"white"} mt={"20"}>
      <Container
        as={Stack}
        maxW={"6xl"}
        py={10}
        borderBottom={"2px solid"}
        borderColor={"gray.600"}
      >
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 1fr 1fr" }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Box borderBottom={"2px solid"} borderColor={"gray.600"} pb={"5"}>
              <Image
                w={"5rem"}
                src="https://kettocdn.gumlet.io/images/logo-dark-bg.svg?w=80&dpr=1.0"
              ></Image>
            </Box>
            <HStack>
              <FaFacebookSquare size={"2rem"} />
              <FaTwitter size={"2rem"} />
              <FaLinkedinIn size={"2rem"} />
              <FaYoutube size={"2rem"} />
              <FaInstagram size={"2rem"} />
              <FaWhatsapp size={"2rem"} />
            </HStack>
            <Text fontSize={"lg"} fontWeight={"600"}>
              1.5M +
              <Text fontSize={"sm"} color={"#01bfbd"}>
                Followers
              </Text>
            </Text>
            <Stack>
              <Text fontSize={"md"} fontWeight={"500"}>
                For any queries
                <Text fontSize={"md"} fontWeight={"500"}>
                  Email: info@ketto.org
                  <Text fontSize={"md"} fontWeight={"500"}>
                    Contact No.: +91 9930088522
                  </Text>
                </Text>
              </Text>
            </Stack>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Causes</ListHeader>
            <Link href={"#"}>Medical crowdfunding</Link>
            <Link href={"#"}>Cancer Crowdfundin</Link>
            <Link href={"#"}>Education Crowdfunding</Link>
            <Link href={"#"}>Creative Crowdfuncding</Link>
            <Link href={"#"}>Child Welfare</Link>
            <Link href={"#"}>Animal Fundraisers</Link>
            <Link href={"#"}>COVID-19 Relief Fundraisers</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>How it works?</ListHeader>
            <Link href={"#"}>Fundraisers for NGOs</Link>
            <Link href={"#"}>Sponsor A Child</Link>
            <Link href={"#"}>Fundraising Tips</Link>
            <Link href={"#"}>What is Crowdfunding</Link>
            <Link href={"#"}>Corporates</Link>
            <Link href={"#"}>Withdraw Funds</Link>
            <Link href={"#"}>Browse Fundraisers</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>About Us</ListHeader>
            <Link href={"#"}>Team Ketto</Link>
            <Link href={"#"}>In The News</Link>
            <Link href={"#"}>Our Partners</Link>
            <Link href={"#"}>Careers</Link>
            <Link href={"#"}>Ketto Blog</Link>
            <Link href={"#"}>Success Stories</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Support</ListHeader>
            <Link href={"#"}>Medical Finance</Link>
            <Link href={"#"}>FAQs & Help Center</Link>
            <Link href={"#"}>Are Ketto Campaigns Genuine?</Link>
            <Link href={"#"}>Fundraiser Video</Link>
            <Link href={"#"}>Trust & Safety</Link>
            <Link href={"#"}>Plans & Pricing</Link>
            <Link href={"#"}>Contact Us</Link>
          </Stack>
        </SimpleGrid>
          <Flex justifyContent={"right"}>
            <Image src="https://ketto.gumlet.io/assets/images/homepage/footer-secured-card.png?w=457&dpr=1.0"></Image>
          </Flex>
      </Container>
      <Container as={Stack} maxW={"6xl"} py={10}>
        <Text textAlign={"center"} fontSize={"sm"}>
          Copyright © 2022 Ketto Online Ventures Pvt Ltd. All Rights Reserved.
          Terms of Use | Privacy Policy | AML Policy | Use of cookies{" "}
        </Text>
      </Container>
    </Box>
  );
}
