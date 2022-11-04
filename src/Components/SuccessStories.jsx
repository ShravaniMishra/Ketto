import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./successStories.styles.css";
import { Navigation } from "swiper";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import { FaWhatsapp } from "react-icons/fa";

const SuccessStories = () => {
  return (
    <div>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        loop={true}
        // loopFillGroupWithBlank={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <Flex
            width={"90%"}
            justifyContent={"space-evenly"}
            boxShadow={"3xl"}
            _hover={{ cursor: "pointer" }}
          >
            <Box width={"40%"}>
              {" "}
              <Image
                borderTopLeftRadius={"lg"}
                borderBottomLeftRadius={"lg"}
                src="https://kettocdn.gumlet.io/media/banner/0/97/image/50e08ce31ef3bfa184cadd9ec164b8ecee8bb0f0.jpg?w=auto&dpr=1.0"
              ></Image>{" "}
            </Box>
            <Box
              width={"43%"}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
            >
              <Heading size={"md"}>
                You are the reason Suraj gets to live his dream
              </Heading>
              <Text fontSize={"md"} mt={"5"} mb={"5"}>
                “Our son’s cancer had relapsed after 2.5 years of chemotherapy &
                we knew we couldn’t afford his life-saving treatment. But thanks
                to your donations & prayers, he underwent successful treatment &
                is recovering well. May God bless you all for saving his life!”
                -Dhanasar (Father)
              </Text>
              <Link href="#" _hover={{ color: "blue" }} color={"#01bfbd"}>
                Read more
              </Link>
              <Container
                display={"flex"}
                w={"90%"}
                alignItems={"center"}
                gap={"2"}
                mt={"10"}
              >
                <Text fontSize={"md"} color={"gray"}>
                  Subscribe to read such inspiring stories
                </Text>
                <Button
                  borderRadius={"20px"}
                  size={"sm"}
                  colorScheme={"whatsapp"}
                  variant={"outline"}
                  leftIcon={<FaWhatsapp />}
                >
                  Subscribe
                </Button>
              </Container>
            </Box>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Flex width={"90%"} justifyContent={"space-evenly"} boxShadow={"3xl"}>
            <Box width={"40%"}>
              {" "}
              <Image
                borderTopLeftRadius={"lg"}
                borderBottomLeftRadius={"lg"}
                src="https://kettocdn.gumlet.io/media/banner/0/96/image/0717875196afb641172a631c282e1875d76b8930.jpg?w=auto&dpr=1.0"
              ></Image>{" "}
            </Box>
            <Box
              width={"43%"}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
            >
              <Heading size={"md"}>
                Heroes like you helped my son win his battle.
              </Heading>
              <Text fontSize={"md"} mt={"5"} mb={"5"}>
                “May Allah bless you all! Thanks to your generous donations,
                Afzal underwent a successful BMT to treat thalassemia major. We
                are eternally grateful to you all for gifting our little bundle
                of joy a second chance at life!” -Reshma (Mother)
              </Text>
              <Link href="#" _hover={{ color: "blue" }} color={"#01bfbd"}>
                Read more
              </Link>
              <Container
                display={"flex"}
                w={"90%"}
                alignItems={"center"}
                gap={"2"}
                mt={"10"}
              >
                <Text fontSize={"md"} color={"gray"}>
                  Subscribe to read such inspiring stories
                </Text>
                <Button
                  borderRadius={"20px"}
                  size={"sm"}
                  colorScheme={"whatsapp"}
                  variant={"outline"}
                  leftIcon={<FaWhatsapp />}
                >
                  Subscribe
                </Button>
              </Container>
            </Box>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Flex width={"90%"} justifyContent={"space-evenly"} boxShadow={"3xl"}>
            <Box width={"40%"}>
              {" "}
              <Image
                borderTopLeftRadius={"lg"}
                borderBottomLeftRadius={"lg"}
                src="https://kettocdn.gumlet.io/media/banner/0/95/image/bc5ae443b8da492ff0c97082e2981ada078e385d.jpg?w=auto&dpr=1.0"
              ></Image>{" "}
            </Box>
            <Box
              width={"43%"}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
            >
              <Heading size={"md"}>
                My daughter finally gets to enjoy her childhood
              </Heading>
              <Text fontSize={"md"} mt={"5"} mb={"5"}>
                "My daughter was suffering from Budd Chiari syndrome with a
                recurrent gastrointestinal bleed and needed an urgent liver
                transplant to survive, but sadly we couldn't afford it. However,
                your donations gave her a new lease on life! She underwent a
                successful liver transplant and is now enjoying her childhood.
                Words cannot express how grateful I am to you angels!" -
                Prajakta (Mother)
              </Text>
              <Link href="#" _hover={{ color: "blue" }} color={"#01bfbd"}>
                Read more
              </Link>
              <Container
                display={"flex"}
                w={"90%"}
                alignItems={"center"}
                gap={"2"}
                mt={"10"}
              >
                <Text fontSize={"md"} color={"gray"}>
                  Subscribe to read such inspiring stories
                </Text>
                <Button
                  borderRadius={"20px"}
                  size={"sm"}
                  colorScheme={"whatsapp"}
                  variant={"outline"}
                  leftIcon={<FaWhatsapp />}
                >
                  Subscribe
                </Button>
              </Container>
            </Box>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Flex width={"90%"} justifyContent={"space-evenly"} boxShadow={"3xl"}>
            <Box width={"40%"}>
              {" "}
              <Image
                borderTopLeftRadius={"lg"}
                borderBottomLeftRadius={"lg"}
                src="https://kettocdn.gumlet.io/media/banner/0/94/image/26fe5c8a80fe779e091bd15f4de3c80224ca7c5b.jpg?w=auto&dpr=1.0"
              ></Image>{" "}
            </Box>
            <Box
              width={"43%"}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
            >
              <Heading size={"md"}>
                Your support gave my son a second chance at life
              </Heading>
              <Text fontSize={"md"} mt={"5"} mb={"5"}>
                I express my heartfelt gratitude towards you all for saving my
                son, Vedant's life! He was suffering from CLD Budd Chiari
                Syndrome, and a liver transplant was his only hope at survival,
                but we couldn't afford it. We would've lost him had it not been
                for your generosity and prayers. Thank you for lighting up our
                lives. He is doing better than ever post his liver transplant.
              </Text>
              <Link href="#" _hover={{ color: "blue" }} color={"#01bfbd"}>
                Read more
              </Link>
              <Container
                display={"flex"}
                w={"90%"}
                alignItems={"center"}
                gap={"2"}
                mt={"10"}
              >
                <Text fontSize={"md"} color={"gray"}>
                  Subscribe to read such inspiring stories
                </Text>
                <Button
                  borderRadius={"20px"}
                  size={"sm"}
                  colorScheme={"whatsapp"}
                  variant={"outline"}
                  leftIcon={<FaWhatsapp />}
                >
                  Subscribe
                </Button>
              </Container>
            </Box>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Flex width={"90%"} justifyContent={"space-evenly"} boxShadow={"3xl"}>
            <Box width={"40%"}>
              {" "}
              <Image
                borderTopLeftRadius={"lg"}
                borderBottomLeftRadius={"lg"}
                src="https://kettocdn.gumlet.io/media/banner/0/79/image/d0ab9b0b9bcc30ced6574c54d6b216ab895f90d5.jpg?w=auto&dpr=1.0"
              ></Image>{" "}
            </Box>
            <Box
              width={"43%"}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
            >
              <Heading size={"md"}>
                Amit and the world’s toughest cycling expedition
              </Heading>
              <Text fontSize={"md"} mt={"5"} mb={"5"}>
                At 38, Dr. Amit Samarth is the first Asian to qualify, contest
                and complete the Trans-Siberian Extreme Endurance Race. It is
                the world's longest and the toughest cycling race - starting
                from Moscow, traversing 9100 kms through Russia, to finally end
                in Vladivostok. Amit was one of the only six people who finished
                the race. He successfully raised the amount needed for this once
                in a lifetime adventure on Ketto, where
              </Text>
              <Link href="#" _hover={{ color: "blue" }} color={"#01bfbd"}>
                Read more
              </Link>
              <Container
                display={"flex"}
                w={"90%"}
                alignItems={"center"}
                gap={"2"}
                mt={"10"}
              >
                <Text fontSize={"md"} color={"gray"}>
                  Subscribe to read such inspiring stories
                </Text>
                <Button
                  borderRadius={"20px"}
                  size={"sm"}
                  colorScheme={"whatsapp"}
                  variant={"outline"}
                  leftIcon={<FaWhatsapp />}
                >
                  Subscribe
                </Button>
              </Container>
            </Box>
          </Flex>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SuccessStories;
