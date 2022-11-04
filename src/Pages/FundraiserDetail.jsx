import {
  Container,
  Button,
  Heading,
  Box,
  Input,
  Stack,
  Text,
  HStack,
  Image,
  VStack,
  Divider,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  useColorModeValue,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BsFillShareFill, BsFillSuitHeartFill } from "react-icons/bs";
import { AiFillFacebook, AiOutlinePlusCircle } from "react-icons/ai";
import { AiTwotoneAlert, AiOutlineCreditCard } from "react-icons/ai";
import { BsGlobe, BsTrophyFill } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";

import { BiQrScan, BiChevronDown } from "react-icons/bi";
import { GrContact, GrAnnounce } from "react-icons/gr";
import { GoVerified } from "react-icons/go";
import { MdLocationOn } from "react-icons/md";
import { RiTeamLine, RiMoneyDollarCircleFill } from "react-icons/ri";
import { ShowMoreData } from "../Components/ShowMoreForDetailPage";

export const FundraiserDetail = () => {
  const [comments, setComments] = useState([]);
  const [text, settext] = useState("");

  const [tabIndex, setTabIndex] = useState(0);
  const { name } = useParams();
  const [curr, setcurr] = useState(null);
  useEffect(() => {
    axios
      .get("https://qr1zme.sse.codesandbox.io/funds")
      .then((res) => {
        let temp = res.data.filter((el) => {
          if (el.title?.split(" ").join("") == name) {
            return el;
          }
        });
        console.log(res);
        setcurr(temp[0]);

        // console.log(curr)
      })
      .catch((err) => {
        console.log(err);
      });
  }, [name]);

  return (
    <Container maxW="container.2xl" marginTop={5}>
      <Container maxW="container.xl" margin="auto">
        <HStack
          spacing="auto"
          padding={3}
          margin="auto"
          width="sm"
          borderRadius={50}
          backgroundColor="#FFF2E4"
        >
          <AiTwotoneAlert color="red" fontSize={24} />
          <Text color="darkred" textAlign="center">
            This fundraiser is in an urgent need of funds
          </Text>
        </HStack>
        <Heading padding={5} width="auto" textAlign="center" fontWeight={600}>
          {curr?.title}{" "}
        </Heading>

        <HStack spacing="auto">
          <Container maxW="container.xl">
            <Box
              boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
              borderRadius={10}
            >
              <Container margin="auto">
                <Image
                  src={
                    curr
                      ? curr.mainImg
                      : "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                  }
                />
              </Container>
              <HStack margin="auto">
                <Box width="80%"></Box>
                <Box pt={10} pr={20}>
                  <Button
                    _hover={{ background: "#30C9C8", color: "white" }}
                    color="#30C9C8"
                    background="none"
                    leftIcon={<BsFillShareFill />}
                    borderRadius="none"
                    boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
                  >
                    Share This Fundraiser
                  </Button>
                </Box>
              </HStack>
              <Tabs onChange={(index) => setTabIndex(index)}>
                <TabList>
                  <Tab>About</Tab>
                  <Tab>Updates</Tab>
                  <Tab>Comments</Tab>
                </TabList>
                <TabPanels p="2rem">
                  <TabPanel>
                    <Box>
                      <Text padding={10}>{curr?.about[0].desc[0]}</Text>
                      <Container margin="auto" width="60%" height="60%">
                        <Image src={curr?.about[0].images[0]} />
                      </Container>
                      <Text padding={10}>
                        {curr?.about[0].desc[1] || (
                          <Text>
                            <Heading fontSize="larger">
                              Lorem ipsum dolor, sit amet consectetur
                              adipisicing elit. Quas unde numquam ipsa quidem
                              corrupti adipisci omnis ex eos error explicabo,
                              voluptates cum placeat laudantium sint asperiores
                              velit molestiae vero temporibus.
                            </Heading>
                            <br />
                           <Text>
                                Lorem ipsum dolor, sit amet consectetur
                              adipisicing elit. Quas unde numquam ipsa quidem
                              corrupti adipisci omnis ex eos error explicabo,
                              voluptates cum placeat laudantium sint asperiores
                              velit molestiae vero temporibus.
                              <br />
                              <br />
                              Lorem ipsum dolor, sit amet consectetur
                              adipisicing elit. Quas unde numquam ipsa quidem
                              corrupti adipisci omnis ex eos error explicabo,
                              voluptates cum placeat laudantium sint asperiores
                              velit molestiae vero temporibus.
                              <br />
                              <br />
                              Lorem ipsum dolor, sit amet consectetur
                              adipisicing elit. Quas unde numquam ipsa quidem
                              corrupti adipisci omnis ex eos error explicabo,
                              voluptates cum placeat laudantium sint asperiores
                              velit molestiae vero temporibus.
                           </Text>
                          </Text>
                        )}
                      </Text>
                      <Container width="60%" height="60%" margin="auto">
                        <Image src={curr?.about[0].images[1]} />
                      </Container>
                      {/* <Text  padding={10}>{curr?.about[0].desc[2]}</Text> */}
                    </Box>
                  </TabPanel>
                  <TabPanel>
                    <Box height={"80vh"}>
                      We have got nothing new in Update.
                      <br />
                      We will keep you updated
                    </Box>
                  </TabPanel>
                  <TabPanel>
                    <Box height={"80vh"}>
                      {comments?.map((el) => {
                        return <Text>{el}</Text>;
                      })}
                    </Box>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </Box>
            <Box
              boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
              mt={10}
              borderRadius={10}
            >
              <Box padding={5}>
                <Text padding={5} fontSize="large" fontWeight={700}>
                  Other Donation Methods
                </Text>
                <Divider width="90%" margin="auto" />
                <Box padding={5} background="#F9F9F9" margin={1}>
                  <Text>
                    <b>You can also pay via Paytm/UPI QR code</b> <br />
                    Scan the QR code from the app and make payment.
                  </Text>
                  <HStack spacing="auto" padding={5}>
                    <Box>
                      <Text fontWeight={700}>For Paytm</Text>
                      <Container
                        background="red"
                        height="30vh"
                        margin={1}
                        width="74%"
                        objectFit="contain"
                        backgroundImage="https://ketto.gumlet.io/assets/images/story/upi_qr_sample.png?w=320&dpr=1.0"
                        backgroundRepeat="no-repeat"
                      >
                        <Box p={50}>
                          <Button>Generat QR Code</Button>
                        </Box>
                      </Container>
                    </Box>
                    <Box>
                      <Text fontWeight={700}>For Other Apps</Text>
                      <Container
                        background="red"
                        height="30vh"
                        margin={1}
                        width="74%"
                        objectFit="contain"
                        backgroundImage="https://ketto.gumlet.io/assets/images/story/upi_qr_sample.png?w=320&dpr=1.0"
                        backgroundRepeat="no-repeat"
                      >
                        <Box p={50}>
                          <Button>Generat QR Code</Button>
                        </Box>
                      </Container>
                    </Box>
                  </HStack>
                  <Box
                    borderRadius={10}
                    fontSize={16}
                    padding={5}
                    backgroundImage="https://kettocdn.gumlet.io/images/payment_gateways/upi-card-bg.png?w=320&dpr=1.0"
                    backgroundRepeat="no-repeat"
                    backgroundColor="#30C9C8"
                  >
                    <Text fontWeight={700} color="white">
                      Claim your donation acknowledgement now! For payment done
                      via Paytm and UPI
                    </Text>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box
              boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
              marginTop={10}
              borderRadius={10}
              padding={5}
            >
              <Box border="1px solid black">
                <Text padding={5} fontSize="large" fontWeight={700}>
                  REFER A FRIEND
                </Text>
                <Divider width="90%" margin="auto" />
                <Box padding={10}>
                  <Text>
                    In need of funds for medical treatment or know someone who
                    might be? Share the details and Ketto will get in touch
                    with.
                  </Text>
                  <Container pt={10} textAlign="center">
                    <Button
                      borderRadius={0}
                      colorScheme="teal"
                      variant="outline"
                    >
                      REFER A FRIEND
                    </Button>
                  </Container>
                </Box>
              </Box>
            </Box>
          </Container>

          <Container>
            <Box mt={10} borderRadius={10}>
              <Button
                backgroundColor="#30C9C8"
                _hover={{ background: "teal" }}
                color="white"
                padding={10}
                width="80%"
                leftIcon={<BsFillSuitHeartFill />}
                fontSize="larger"
                fontWeight={700}
              >
                CONTRIBUTE NOW
              </Button>
              <HStack spacing={5} padding={2} m="auto">
                <Button
                  _hover={{ color: "teal", border: "2px solid teal" }}
                  variant="outline"
                  leftIcon={<AiOutlineCreditCard />}
                  fontSize={10}
                >
                  All credit <br /> & Debit Cards
                </Button>
                <Button
                  _hover={{ color: "teal", border: "2px solid teal" }}
                  variant="outline"
                  leftIcon={<BsGlobe />}
                  fontSize={10}
                >
                  Net <br /> banking
                </Button>
                <Button
                  _hover={{ color: "teal", border: "2px solid teal" }}
                  variant="outline"
                  leftIcon={<BiQrScan />}
                  fontSize={10}
                >
                  Paytm & <br />
                  UPI
                </Button>
              </HStack>
              <Button
                leftIcon={<AiFillFacebook color="white" />}
                colorScheme="blue"
                padding={8}
                width="80%"
              >
                Spread the word (640 shares)
              </Button>
              <Box>
                <Text color="darkblue" paddingLeft={10}>
                  <i>Every Social media share can bring ₹5000</i>
                </Text>
              </Box>
              <Stack pl={5} pt={5}>
                <Heading fontWeight={400}>{curr?.raised}</Heading>
                <Text color="grey">
                  <i>raised of {curr?.goal} goal</i>
                </Text>
                <Box
                  bg="#30C9C8"
                  width="80%"
                  height={4}
                  color="#30C9C8"
                  borderRadius={50}
                >
                  .
                </Box>
              </Stack>
              <HStack width="80%" spacing="auto" margin={5}>
                <HStack>
                  <Heading fontWeight={400} fontSize="xx-large">
                    {curr?.supporters}
                  </Heading>
                  <Text> supporters</Text>
                </HStack>
                <HStack>
                  <Heading fontWeight={400} fontSize="xx-large">
                    {curr?.daysLeft}{" "}
                  </Heading>
                  <Text>days left</Text>
                </HStack>
              </HStack>
            </Box>

            <Box
              borderRadius={10}
              boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
              mt={10}
              width="90%"
            >
              <HStack spacing="auto" padding={5}>
                <Image
                  width={20}
                  borderRadius={50}
                  src="https://www.nicepng.com/png/detail/251-2513189_adarsh-shiksha-samiti-ngo.png"
                />
                <Stack>
                  <Text fontSize="sm">Campaigner</Text>
                  <HStack>
                    <Text fontWeight={700} fontSize="sm">
                      {curr?.raisedBy}
                    </Text>
                    <GoVerified color="green" />
                    <Text>Verified</Text>
                  </HStack>
                  <HStack>
                    <MdLocationOn />
                    <Text fontSize="sm">{curr?.location}</Text>
                  </HStack>
                </Stack>
                <Button
                  colorScheme="blue"
                  variant="ghost"
                  fontSize="small"
                  leftIcon={<GrContact color="blue" />}
                >
                  Contact
                </Button>
              </HStack>
            </Box>
            <Box
              borderRadius={10}
              boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
              mt={10}
              width="90%"
            >
              <HStack padding={5}>
                <RiMoneyDollarCircleFill fontSize={28} />
                <Text fontSize="larger" fontWeight={700}>
                  Fundraiseing Team
                </Text>
              </HStack>
              <Divider />
              <HStack spacing="auto" padding={5}>
                <Button variant="ghost">
                  <AiOutlinePlusCircle color="#30C9C8" fontSize={48} />
                </Button>
                <Text fontSize={20} color="#30C9C8">
                  Start a Supporting Fundraiser
                </Text>
                <IoIosArrowForward color="#30C9C8" />
              </HStack>
              <HStack spacing="auto" padding={5}>
                <HStack spacing={2}>
                  <Image
                    borderRadius={50}
                    width={10}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScXyoZXpAWph9Vnu9_ZpWgNmn20W4hlBOn-5dLmFQuww8zSfnhRRNQW7B0RRuApO_PFwg&usqp=CAU"
                  />
                  <Text fontSize={14}>Prajwal Jaiswal</Text>
                </HStack>
                <Text color="#30C9C8" fontSize={16} fontWeight={700}>
                  $ 5,000
                </Text>
              </HStack>
            </Box>
            <Box
              borderRadius={10}
              boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
              width="90%"
            >
              <HStack padding={5} mt={10}>
                <BsTrophyFill fontSize={28} />
                <Text fontSize="larger" fontWeight={700}>
                  Top Donors
                </Text>
              </HStack>
              <Divider />

              <ShowMoreData />
            </Box>
            <Box
              borderRadius={10}
              boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
              mt={10}
              width="90%"
            >
              <HStack padding={5}>
                <GrAnnounce fontSize={28} />
                <Text fontSize="larger" fontWeight={700}>
                  Most Raised from Social Sharing
                </Text>
              </HStack>
              <Divider />
              <ShowMoreData />
            </Box>
            <Box
              borderRadius={10}
              boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
              mt={10}
              width="90%"
            >
              <HStack padding={5} spacing={2}>
                <RiTeamLine fontSize={28} />
                <Text fontSize="large" fontWeight={700}>
                  {curr?.supporters} Supporters
                </Text>
              </HStack>
              <Divider />
              <Box
                fontSize={16}
                padding={10}
                backgroundImage="https://kettocdn.gumlet.io/images/payment_gateways/upi-card-bg.png?w=320&dpr=1.0"
                backgroundRepeat="no-repeat"
                backgroundColor="#30C9C8"
              >
                <Text fontWeight={700} color="white">
                  DONATED VIA BANK / PAYTM / UPI ?
                </Text>
                <Text color="white">
                  Click here if you can't find your donation
                  <br /> listed below.
                </Text>
              </Box>

              <ShowMoreData showalllist="yes" />
            </Box>
          </Container>
        </HStack>
        <Box
          borderRadius={10}
          boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
          marginTop={10}
          padding={5}
        >
          <Box>
            <Text padding={5} fontSize="large" fontWeight={700}>
              Supporter's Comments {comments.length}
            </Text>
            <Divider width="90%" margin="auto" />
            <Box padding={10}>
              <Input
                value={text}
                placeholder={`Write Something to cheer ${curr?.raisedBy}`}
                onChange={(e) => settext(e.target.value)}
              />
              <Button
                onClick={() => {
                  setComments([text, ...comments]);
                  settext("");
                }}
              >
                Post
              </Button>
            </Box>
            <Box ml={5}>
              {comments?.map((el) => {
                return <Text p={5}>{el}</Text>;
              })}
            </Box>
          </Box>
        </Box>
      </Container>
    </Container>
  );
};
