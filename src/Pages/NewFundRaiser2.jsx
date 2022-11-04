import {
  IconButton,
  Input,
  Stack,
  Text,
  Box,
  Menu,
  MenuButton,
  MenuList,
  Button,
  MenuItem,
  Flex,
  Select,
  Container,
  Image,
  Textarea,
  Portal,
  MenuDivider,
  MenuGroup,
  HStack,
  InputLeftElement,
  InputGroup,
  Checkbox,
} from "@chakra-ui/react";

// import { navigate } from "react-dom";
import { ChevronDownIcon, PhoneIcon, ViewOffIcon } from "@chakra-ui/icons";
import plus from "../images/plus.jpg";
import qmark from "../images/qmark.png";

import { BiEnvelope } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";
import React, { useEffect, useState } from "react";
import { FaFlagUsa, FaSmileBeam } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { MdSendToMobile } from "react-icons/md";
import { postdata } from "../Redux/AppReducer/app.actions";
import { useDispatch } from "react-redux";
 
// import { Recaptcha } from "../Components/Recaptcha";

const NewFundRaiser2 = () => {
  const navigate=useNavigate()
  const [name, setname] = useState("Fundraiser");
  const [gotkitto,setgotkitto]=useState("How you first heard about ketto?")
  const [menu, setMenu] = useState("English");
  const [mobile,setmobile]=useState(91 )
  const dispatch=useDispatch()
  const [pages, setPages] = useState({
    medical: false,
    NGO: false,
    other: false,
  });
  const { cat } = useParams();
  const [pageNumbers, setPageNumber] = useState({
    page: true,
    page2: false,
    page3: false,
  });

  const handlepages = (x) => {
     
    setPageNumber(x);
  };

  const [data,setdata]=useState({
    "id": 1,
    "raisedBy": "The patient is my..",
    "category": "medical",
    "location": "Mumbai",
    "title": "",
    "mainImg": "https://savioursfoundation.org/wp-content/uploads/2021/02/ngo.jpg",
    "goal": "₹ 0",
    "raised": "₹ 0",
    "daysLeft": Math.floor(Math.random() * (100 - 10 + 1) + 10),
    "supporters": Math.floor(Math.random() * (1000 - 10 + 1) + 10),
    "about": [
      {
        "desc": [
          "`Hi ,My name is ${name} and I am raising funds for my grandmother, Manju singh who is suffering from Liver cancer adults and is undergoing treatment at AIIMS Hospital, New Delhi . The family has done all it can to collect the total amount required for the treatment but Rs.6000 more is required to pay for all the medical expenses. As the amount required is huge, I request you to kindly contribute towards the treatment and help during this time of need. Each contribution is important!",
           "Please help us raise this amount by clicking on the donate button and sharing this page with your friends and family." ,
          "What my son has been going through for years is awful. But we have had the opportunity to at least seek treatment for him. We understand thousands of little children are going through exactly the same, and possibly worse, than Abir. Hence, all contributions after funding the treatment cost will be used to fund cancer research and to launch a digital platform to support and empower Indian families and children suffering from cancer by bringing together 1000s of survivors, cancer doctors and experts, insurance companies, and a network of supporters to create a resilient ecosystem to beat cancer together."
        ],
        "images": [
          "https://miro.medium.com/max/1200/1*ZxpUxJqfs-LMzS788u2a0w.jpeg",
          "https://www.gannett-cdn.com/-mm-/d3b6dffaeec46acd6996b0f8d5e950f095216e0b/c=0-125-2045-1280/local/-/media/2018/06/12/USATODAY/USATODAY/636643942202141206-GettyImages-515836063.jpg"
        ]
      }
    ]
  })
  const handleSubmitData = () => {
    console.log("data is here");
    dispatch(postdata(data)).then(()=>{
      navigate(`/campaign_created/${data.title}`)
    }).catch((err)=>{
      alert("Something went wrong")
    })
  };
  useEffect(() => {
    if (cat == "medical") {
      setPages({ medical: true, NGO: false, other: false });

      console.log(pages);
    } else if (cat == "ngo") {
      setPages({ medical: false, NGO: true, other: false });
      console.log(pages);
    } else {
      setPages({ medical: false, NGO: false, other: true });

      console.log(pages);
    }
  }, []);

 
  return (
    <Container
      overflowY="scroll"
      backgroundColor="#3D3D3D"
      maxW="container.2xl"
      margin="auto"
      position="fixed"
      top={0}
      bottom={0}
    >
      <Container pl={10} pt={10} maxW="container.md" margin="auto">
        <Menu bg="white">
          <MenuButton
            outline={"none"}
            border={""}
            bg={"white"}
            as={Button}
            rightIcon={<ChevronDownIcon />}
            // rightIcon={<BiEnvelope />}
          >
            {menu}
          </MenuButton>
          <MenuList
            onChange={(e) => {
              setMenu(e.target.value);
            }}
            mt={"-10"}
            borderRadius={"15px"}
            width={"200px"}
          >
            <MenuItem
              onClick={(e) => {
                setMenu(e.target.value);
              }}
              value={"English"}
              borderRadius={"15px 15px 0px 0px"}
            >
              English
            </MenuItem>
            <MenuItem
              onClick={(e) => {
                setMenu(e.target.value);
              }}
              value={"Hindi"}
            >
              Hindi
            </MenuItem>
            <MenuItem
              onClick={(e) => {
                setMenu(e.target.value);
              }}
              value={"Tamil"}
            >
              Tamil
            </MenuItem>
            <MenuItem
              onClick={(e) => {
                setMenu(e.target.value);
              }}
              value={"Bengali"}
              borderRadius={"0px 0px 15px 15px"}
            >
              Bengali
            </MenuItem>
          </MenuList>
        </Menu>
      </Container>
      <br />
      <Container
        margin="auto"
        maxW="container.sm"
        paddingTop={"30px"}
        border={"2px solid green"}
        m="auto"
        bg="white"
        borderRadius={10}
      >
        <Text
          fontSize="16px"
          color="black"
          fontWeight="bold"
          fontFamily="Helvetica"
          textAlign={"center"}
          lineHeight="46px"
        >
          Tell Us more about your fund Raiser
        </Text>{" "}
        <hr />
        {pages.medical ? (
          <>
            {pageNumbers.page ? (
              <>
                <Flex justifyContent={"center"} mt="10px">
                  <Image w="20px" h="20px" src={plus}></Image>
                  <Text fontSize={"13px"}>
                    Raising funds for <strong>Medical Treatment</strong> purpose
                  </Text>
                </Flex>
                <br />
                <Stack borderRadius={10} spacing={5} alignItems="center">
                  <Container maxW="container.md">
                    <InputGroup>
                      <Input
                      type="number"
                        onChange={(e)=>setdata({...data,goal:e.target.value})}
                        variant="flushed"
                        placeholder="How much do you want to raise" value={data.goal}
                      />
                      <Image w="20px" h="20px" src={qmark}></Image>
                    </InputGroup>
                    <Text padding={2} fontSize="smaller">
                      Should be minimum ₹ 2000{" "}
                    </Text>
                  </Container>

                  <Container maxW="container.md" height={50}>
                    <Menu sx={{ overflow: "scroll" }}>
                      <MenuButton
                        width="100%"
                        value="What will be the funds used for?"
                        borderRadius="none"
                        borderBottom="1px solid lightgrey"
                        variant="flused"
                        as={Button}
                        rightIcon={<ChevronDownIcon />}
                      >
                        <Text textAlign="left" color="grey" fontWeight={400}>
                          {data.raisedBy}
                        </Text>
                      </MenuButton>
                      <Container maxW="container.md" background="white">
                        <MenuList
                          background="white"
                          overflowY="scroll"
                          height="30vh"
                          width="30vw"
                        >
                          <MenuItem onClick={(e)=>setdata({...data,raisedBy:e.target.value})}>Friend</MenuItem>
                          <MenuList>
                            <MenuGroup title="Parent">
                              <MenuItem value="Father"onClick={(e)=>setdata({...data,raisedBy:e.target.value})}>Father</MenuItem>
                              <MenuItem value="Mother"onClick={(e)=>setdata({...data,raisedBy:e.target.value})}>Mother</MenuItem>
                              <MenuItem value="Grand Father"onClick={(e)=>setdata({...data,raisedBy:e.target.value})}>Grand Father</MenuItem>
                              <MenuItem value="Grand Mother"onClick={(e)=>setdata({...data,raisedBy:e.target.value})}>Grand Mother</MenuItem>
                            </MenuGroup>
                            <MenuDivider />
                            <MenuGroup title="Spouse">
                              <MenuItem value="Husband"onClick={(e)=>setdata({...data,raisedBy:e.target.value})}>Husband</MenuItem>
                              <MenuItem value="Wife"onClick={(e)=>setdata({...data,raisedBy:e.target.value})}>Wife</MenuItem>
                            </MenuGroup>
                            <MenuDivider />
                            <MenuGroup title="Child">
                              <MenuItem value="Son"onClick={(e)=>setdata({...data,raisedBy:e.target.value})}>Son</MenuItem>
                              <MenuItem value="Daughter"onClick={(e)=>setdata({...data,raisedBy:e.target.value})}>Daughter</MenuItem>
                              <MenuItem value="Twins"onClick={(e)=>setdata({...data,raisedBy:e.target.value})}>Twins</MenuItem>
                              <MenuItem value="Grandson"onClick={(e)=>setdata({...data,raisedBy:e.target.value})}>Grandson</MenuItem>
                              <MenuItem value="Granddaughter"onClick={(e)=>setdata({...data,raisedBy:e.target.value})}>Granddaughter</MenuItem>
                            </MenuGroup>
                            <MenuDivider />
                            <MenuGroup title="Sibling">
                              <MenuItem value="Brother"onClick={(e)=>setdata({...data,raisedBy:e.target.value})}>Brother</MenuItem>
                              <MenuItem value="Sister"onClick={(e)=>setdata({...data,raisedBy:e.target.value})}>Sister</MenuItem>
                            </MenuGroup>
                            <MenuDivider />
                            <MenuGroup title="Others">
                              <MenuItem value="Friend"onClick={(e)=>setdata({...data,raisedBy:e.target.value})}>Friend</MenuItem>
                              <MenuItem value="Friend's Family"onClick={(e)=>setdata({...data,raisedBy:e.target.value})}>Friend's Family</MenuItem>
                              <MenuItem value="Cousin"onClick={(e)=>setdata({...data,raisedBy:e.target.value})}>Cousin</MenuItem>
                              <MenuItem value="Uncle"onClick={(e)=>setdata({...data,raisedBy:e.target.value})}>Uncle</MenuItem>
                              <MenuItem value="Aunt"onClick={(e)=>setdata({...data,raisedBy:e.target.value})}>Aunt</MenuItem>
                              <MenuItem value="Nephew"onClick={(e)=>setdata({...data,raisedBy:e.target.value})}>Nephew</MenuItem>
                              <MenuItem value="Niece"onClick={(e)=>setdata({...data,raisedBy:e.target.value})}>Niece</MenuItem>
                              <MenuItem value="Colleague"onClick={(e)=>setdata({...data,raisedBy:e.target.value})}>Colleague</MenuItem>
                              <MenuItem value="Relative"onClick={(e)=>setdata({...data,raisedBy:e.target.value})}>Relative</MenuItem>
                              <MenuItem value="Legal Ward"onClick={(e)=>setdata({...data,raisedBy:e.target.value})}>Legal Ward</MenuItem>
                              <MenuItem value="Other"onClick={(e)=>setdata({...data,raisedBy:e.target.value})}>Other</MenuItem>
                            </MenuGroup>
                          </MenuList>
                        </MenuList>
                      </Container>
                    </Menu>
                  </Container>

                  <InputGroup style={{ zIndex: 0 }}>
                    <InputLeftElement children={<FaFlagUsa p={5} />} />

                    <Input
                      variant="flushed"
                      outline="#30C9C8"
                      placeholder="Your Mobile Number"
                      type="number"
                      value={mobile}
                      onChange={(e)=>setmobile(e.target.value)}
                    />
                  </InputGroup>

                  <Menu>
                    <MenuButton
                      width="100%"
                       
                      borderRadius="none"
                      borderBottom="1px solid lightgrey"
                      variant="flused"
                      as={Button}
                      rightIcon={<ChevronDownIcon />}
                    >
                      <Text textAlign="left" color="grey" fontWeight={400}>
                        {gotkitto}
                      </Text>
                    </MenuButton>
                    <Container maxW="container.md">
                      <MenuList
                        overflowY="scroll"
                        height="30vh"
                        width="32vw"
                        direction="rtl"
                      >
                        <MenuItem  onClick={(e)=>setgotkitto(e.target.value)}value="Search Engine (Google,Yahoo,etc)" >
                          Search Engine (Google,Yahoo,etc)
                        </MenuItem>
                        <MenuItem onClick={(e)=>setgotkitto(e.target.value)} value="Facebook, Instagram Ad/Post" >
                          Facebook, Instagram Ad/Post
                        </MenuItem>
                        <MenuItem onClick={(e)=>setgotkitto(e.target.value)} value="Twitter Ad / Post">
                          Twitter Ad / Post
                        </MenuItem>
                        <MenuItem onClick={(e)=>setgotkitto(e.target.value)} value="YouTube Ad / Post">
                          YouTube Ad / Post
                        </MenuItem>
                        <MenuItem onClick={(e)=>setgotkitto(e.target.value)} value="Brochure / Banner in Hospital">
                          Brochure / Banner in Hospital
                        </MenuItem>
                        <MenuItem onClick={(e)=>setgotkitto(e.target.value)}value=" Recommended by Doctor" >
                          Recommended by Doctor
                        </MenuItem>
                        <MenuItem  onClick={(e)=>setgotkitto(e.target.value)}value="Recommended by hospital Staff Member">
                          Recommended by hospital Staff Member
                        </MenuItem>
                        <MenuItem onClick={(e)=>setgotkitto(e.target.value)}value="others">others</MenuItem>
                      </MenuList>
                    </Container>
                  </Menu>
                  <Container maxW="container.sm">
                    <HStack
                      fontSize="smaller"
                      borderRadius={10}
                      border="1px dashed teal"
                      width="55%"
                      p={3}
                      spacing={5}
                    >
                      <Text>
                        Add fundraiser image/video
                        <br />
                        <Text color="grey">(Optional)</Text>
                      </Text>
                      <Button variant="outline" colorScheme="teal">
                        Upload
                      </Button>
                    </HStack>
                  </Container>
                  <Text fontSize="12px" color="#b4ada6" fontStyle={"italic"}>
                    You can easily make changes to your fundraiser at any time
                  </Text>
                  <Box bg="#bfefee" fontSize="14px" w="420px">
                    <Text ml="20px">
                      Ketto's zero platform fee policy will ensure more funds
                      for you.
                    </Text>
                  </Box>

                  <Container
                    pb={10}
                    m={5}
                    maxW="container.md"
                    margin="auto"
                    textAlign="center"
                  >
                    <Button
                      colorScheme="teal"
                      width="100%"
                      variant="solid"
                      onClick={() => {
                        handlepages({
                          page: false,
                          page2: true,
                          page3: false,
                        });
                      }}
                    >
                      Save and Continue
                    </Button>
                  </Container>
                </Stack>
              </>
            ) : pageNumbers.page2 ? (
              <>
                <Flex justifyContent={"center"} mt="10px">
                  <Image w="20px" h="20px" src={plus}></Image>
                  <Text fontSize={"13px"}>
                    Raising funds for <strong>Medical Treatment</strong> purpose
                  </Text>
                </Flex>
                <br />
                <Stack borderRadius={10} spacing={5} alignItems="center">
                <Container maxW="container.md">
                    <InputGroup>
                      <Input
                      value={data.title}
                       onChange={(e)=>setdata({...data,title:e.target.value})}
                        variant="flushed"
                        placeholder="Title for the fundraiser"
                      />
                      <Image w="20px" h="20px" src={qmark}></Image>
                    </InputGroup>
                  </Container>
                  <Container maxW="container.md">
                    <InputGroup>
                      <Input
                      value={data.name}
                       onChange={(e)=>setname(e.target.value)}
                        variant="flushed"
                        placeholder="Full name of patient"
                      />
                      <Image w="20px" h="20px" src={qmark}></Image>
                    </InputGroup>
                  </Container>
                  <Container maxW="container.md">
                    <InputGroup>
                      <Input 

                        variant="flushed"
                        placeholder="Age of the patient"
                      />
                      <Image w="20px" h="20px" src={qmark}></Image>
                    </InputGroup>
                  </Container>

                  <Container maxW="container.md" height={50}>
                    <Menu>
                      <MenuButton
                        width="100%"
                        value="What will be the funds used for?"
                        borderRadius="none"
                        borderBottom="1px solid lightgrey"
                        variant="flused"
                        as={Button}
                        rightIcon={<ChevronDownIcon />}
                      >
                        <Text textAlign="left" color="grey" fontWeight={400}>
                          Type the medical condition here{" "}
                        </Text>
                      </MenuButton>
                      <Container maxW="container.md">
                        <MenuList
                          overflowY="scroll"
                          height="30vh"
                          width="32vw"
                          direction="rtl"
                        >
                          <MenuItem value="Cancer Treatment">
                            Cancer treatment
                          </MenuItem>
                          <MenuItem value="Accident treatment">
                            Accident treatment
                          </MenuItem>
                          <MenuItem value="Liver / Kidney transplant">
                            Liver/Kidney transplant
                          </MenuItem>
                          <MenuItem value="Heart operation">
                            Heart operation
                          </MenuItem>
                          <MenuItem value="Pre-mature baby care (NICU)">
                            Pre-mature baby care (NICU)
                          </MenuItem>
                          <MenuItem value="Medicines (Ongoing treatment)">
                            Medicines (Ongoing treatment)
                          </MenuItem>
                          <MenuItem value="Memorial (Patient expired)">
                            Memorial (Patient expired)
                          </MenuItem>
                          <MenuItem value="others">others</MenuItem>
                        </MenuList>
                      </Container>
                    </Menu>
                  </Container>

                  <Container maxW="container.md">
                    <InputGroup>
                      <Input
                        variant="flushed"
                        placeholder="What is the condition of the patient now"
                      />
                      <Image w="20px" h="20px" src={qmark}></Image>
                    </InputGroup>
                  </Container>
                  <Container maxW="container.md">
                    <InputGroup style={{ zIndex: 0 }}>
                      <Input
                        variant="flushed"
                        outline="#30C9C8"
                        placeholder="Hospital Name"
                      />
                    </InputGroup>
                  </Container>
                  <Container maxW="container.md">
                    <InputGroup style={{ zIndex: 0 }}>
                      <Input
                        variant="flushed"
                        value={data.location}
                        onChange={(e)=>setdata({...data,location:e.target.value})}
                        outline="#30C9C8"
                        placeholder="Enter your city"
                      />
                    </InputGroup>
                  </Container>

                  <Container
                    pb={10}
                    m={5}
                    maxW="container.md"
                    margin="auto"
                    textAlign="center"
                  >
                    <Button
                      colorScheme="teal"
                      width="100%"
                      variant="solid"
                      onClick={() => {
                        handlepages({
                          page: false,
                          page2: false,
                          page3: true,
                        });
                      }}
                    >
                      Save and Continue
                    </Button>
                  </Container>
                </Stack>
              </>
            ) : (
              <>
                <Container maxW="container.md" textAlign="left" padding={5}>
                  <Textarea
                    padding={5}
                    borderRadius={10}
                    backgroundColor="#F5F5F5"
                    variant="flushed"
                    size="md"
                    
                    height="40vh"
                    value={`Hi ,My name is ${name} and I am raising funds for my grandmother, Manju singh who is suffering from Liver cancer adults and is undergoing treatment at AIIMS Hospital, New Delhi . The family has done all it can to collect the total amount required for the treatment but Rs.6000 more is required to pay for all the medical expenses.

As the amount required is huge, I request you to kindly contribute towards the treatment and help during this time of need. Each contribution is important!

Please help us raise this amount by clicking on the donate button and sharing this page with your friends and family.

We are grateful for your help and wishes.

Thank you.`}
                  />
                </Container>
                <Container maxW="container.md">
                  <HStack
                    borderRadius={10}
                    padding={5}
                    spacing={5}
                    background="#F5F5F5"
                  >
                    <FaSmileBeam color="yellow" />
                    <Text>
                      Don’t worry! You can skip this step for now and add the
                      story details and medical documents after submiting.
                    </Text>
                  </HStack>
                </Container>

                <Container fontSize="smaller" maxW="container.md" padding={10}>
                  <HStack spacing={2}>
                    <Checkbox />
                    <Text>
                      I agree to Ketto's Terms of Use, service agreement ( USA
                      and India ), Privacy Policy and Plans & Pricing. I
                      acknowledge and confirm that the information provided
                      above is true and correct to the best of my knowledge and
                      belief and I agree to be liable if any of the above
                      information is found to be false or misleading. I hereby
                      give my consent for sharing it with regulatory authorities
                      or disclosing it as may be required by law."
                    </Text>
                  </HStack>
                </Container>
                <Container
                  pb={10}
                  m={5}
                  maxW="container.md"
                  margin="auto"
                  textAlign="center"
                >
                  <Button
                    colorScheme="teal"
                    width="100%"
                    variant="solid"
                    onClick={handleSubmitData}
                  >
                    Submit
                  </Button>
                </Container>
              </>
            )}
          </>
        ) : pages.NGO ? (
          <>
            {pageNumbers.page ? (
              <>
                <Flex justifyContent={"center"} mt="10px">
                  <Image w="20px" h="20px" src={plus}></Image>
                  <Text fontSize={"13px"}>
                    Raising funds for <strong>NGO/Charity</strong> purpose
                  </Text>
                </Flex>
                <br />
                <Stack borderRadius={10} spacing={5} alignItems="center">
                  <Container maxW="container.md">
                    <InputGroup>
                      <Input
                        variant="flushed"
                        placeholder="How much do you want to raise"
                      />
                      <Image w="20px" h="20px" src={qmark}></Image>
                    </InputGroup>
                    <Text padding={2} fontSize="smaller">
                      Should be minimum ₹ 2000{" "}
                    </Text>
                  </Container>

                  <Container maxW="container.md">
                    <InputGroup>
                      <Input variant="flushed" placeholder="Fundraiswr Title" />
                      <Image w="20px" h="20px" src={qmark}></Image>
                    </InputGroup>
                  </Container>

                  <Container maxW="container.md">
                    <InputGroup style={{ zIndex: 0 }}>
                      <InputLeftElement children={<FaFlagUsa p={5} />} />

                      <Input
                        variant="flushed"
                        outline="#30C9C8"
                        placeholder="NGO Name"
                      />
                    </InputGroup>
                  </Container>

                  <Menu>
                    <MenuButton
                      width="100%"
                      value="What will be the funds used for?"
                      borderRadius="none"
                      borderBottom="1px solid lightgrey"
                      variant="flused"
                      as={Button}
                      rightIcon={<ChevronDownIcon />}
                    >
                      <Text textAlign="left" color="grey" fontWeight={400}>
                        How you first heard about ketto?
                      </Text>
                    </MenuButton>
                    <Container maxW="container.md">
                      <MenuList
                        overflowY="scroll"
                        height="30vh"
                        width="32vw"
                        direction="rtl"
                      >
                        <MenuItem value="Cancer Treatment">
                          Search Engine (Google,Yahoo,etc)
                        </MenuItem>
                        <MenuItem value="Accident treatment">
                          Facebook, Instagram Ad/Post
                        </MenuItem>
                        <MenuItem value="Liver / Kidney transplant">
                          Twitter Ad / Post
                        </MenuItem>
                        <MenuItem value="Heart operation">
                          YouTube Ad / Post
                        </MenuItem>
                        <MenuItem value="Pre-mature baby care (NICU)">
                          Brochure / Banner in Hospital
                        </MenuItem>
                        <MenuItem value="Medicines (Ongoing treatment)">
                          Recommended by Doctor
                        </MenuItem>
                        <MenuItem value="Memorial (Patient expired)">
                          Recommended by hospital Staff Member
                        </MenuItem>
                        <MenuItem value="others">others</MenuItem>
                      </MenuList>
                    </Container>
                  </Menu>
                  <Container maxW="container.sm">
                    <HStack
                      fontSize="smaller"
                      borderRadius={10}
                      border="1px dashed teal"
                      width="55%"
                      p={3}
                      spacing={5}
                    >
                      <Text>
                        Add fundraiser image/video
                        <br />
                        <Text color="grey">(Optional)</Text>
                      </Text>
                      <Button variant="outline" colorScheme="teal">
                        Upload
                      </Button>
                    </HStack>
                  </Container>
                  <Text fontSize="12px" color="#b4ada6" fontStyle={"italic"}>
                    You can easily make changes to your fundraiser at any time
                  </Text>
                  <Box bg="#bfefee" fontSize="14px" w="420px">
                    <Text ml="20px">
                      Ketto's zero platform fee policy will ensure more funds
                      for you.
                    </Text>
                  </Box>

                  <Container
                    pb={10}
                    m={5}
                    maxW="container.md"
                    margin="auto"
                    textAlign="center"
                  >
                    <Button
                      colorScheme="teal"
                      width="100%"
                      variant="solid"
                      onClick={() => {
                        handlepages({
                          page: false,
                          page2: true,
                          page3: false,
                        });
                      }}
                    >
                      Save and Continue
                    </Button>
                  </Container>
                </Stack>
              </>
            ) : pageNumbers.page2 ? (
              <>
                <Container>
                  <HStack spacing="auto" justifyContent={"center"} mt="10px">
                    <Text fontSize={"13px"}>Add fundraiser image / video</Text>
                    <Text>(Optional)</Text>
                  </HStack>
                </Container>
                <br />
                <Stack borderRadius={10} spacing={5} alignItems="center">
                  <Container
                    background="#EEEEEE"
                    textAlign="center"
                    height="25vh"
                    maxW="container.md"
                  >
                    <Image
                      margin="auto"
                      pt="10vh"
                      src="https://ketto.gumlet.io/assets/images/medical-fr/image-loader.jpg?w=480&dpr=1.0"
                    />
                  </Container>

                  <Container p={2} background="#EEEEEE" maxW="container.md">
                    <Button borderRadius="none" background="white">
                      Choose A file
                    </Button>
                  </Container>

                  <Container maxW="container.md">
                    <InputGroup>
                      <Input
                        variant="flushed"
                        placeholder="Enter link of the image"
                      />
                    </InputGroup>
                  </Container>
                  <Container maxW="container.md">
                    <InputGroup>
                      <Input variant="flushed" placeholder="Enter Your City" />
                      <Image w="20px" h="20px" src={qmark}></Image>
                    </InputGroup>
                  </Container>
                  <Container
                    pb={10}
                    m={5}
                    maxW="container.md"
                    margin="auto"
                    textAlign="center"
                  >
                    <Button
                      colorScheme="teal"
                      width="100%"
                      variant="solid"
                      onClick={() => {
                        handlepages({
                          page: false,
                          page2: false,
                          page3: true,
                        });
                      }}
                    >
                      Save and Continue
                    </Button>
                  </Container>
                </Stack>
              </>
            ) : (
              <>
                <Container maxW="container.md" textAlign="left" padding={5}>
                  <Textarea
                    padding={5}
                    borderRadius={10}
                    backgroundColor="#F5F5F5"
                    variant="flushed"
                    size="md"
                    height="40vh"
                    value={`Hi ,My name is ${name} and I am raising funds for my grandmother, Manju singh who is suffering from Liver cancer adults and is undergoing treatment at AIIMS Hospital, New Delhi . The family has done all it can to collect the total amount required for the treatment but Rs.6000 more is required to pay for all the medical expenses.

As the amount required is huge, I request you to kindly contribute towards the treatment and help during this time of need. Each contribution is important!

Please help us raise this amount by clicking on the donate button and sharing this page with your friends and family.

We are grateful for your help and wishes.

Thank you.`}
                  />
                </Container>
                <Container maxW="container.md">
                  <HStack
                    borderRadius={10}
                    padding={5}
                    spacing={5}
                    background="#F5F5F5"
                  >
                    <FaSmileBeam color="yellow" />
                    <Text>
                      Don’t worry! You can skip this step for now and add the
                      story details and medical documents after submiting.
                    </Text>
                  </HStack>
                </Container>

                <Container fontSize="smaller" maxW="container.md" padding={10}>
                  <HStack spacing={2}>
                    <Checkbox />
                    <Text>
                      I agree to Ketto's Terms of Use, service agreement ( USA
                      and India ), Privacy Policy and Plans & Pricing. I
                      acknowledge and confirm that the information provided
                      above is true and correct to the best of my knowledge and
                      belief and I agree to be liable if any of the above
                      information is found to be false or misleading. I hereby
                      give my consent for sharing it with regulatory authorities
                      or disclosing it as may be required by law."
                    </Text>
                  </HStack>
                </Container>
                <Container
                  pb={10}
                  m={5}
                  maxW="container.md"
                  margin="auto"
                  textAlign="center"
                >
                  <Button
                    colorScheme="teal"
                    width="100%"
                    variant="solid"
                    onClick={handleSubmitData}
                  >
                    Submit
                  </Button>
                </Container>
              </>
            )}
          </>
        ) : (
          <>
            {pageNumbers.page ? (
              <>
                <Flex justifyContent={"center"} mt="10px">
                  <Image w="20px" h="20px" src={plus}></Image>
                  <Text fontSize={"13px"}>
                    Raising funds for <strong>Others</strong> purpose
                  </Text>
                </Flex>
                <br />
                <Stack borderRadius={10} spacing={5} alignItems="center">
                  <Container maxW="container.md">
                    <InputGroup>
                      <Input
                        variant="flushed"
                        placeholder="How much do you want to raise"
                      />
                      <Image w="20px" h="20px" src={qmark}></Image>
                    </InputGroup>
                    <Text padding={2} fontSize="smaller">
                      Should be minimum ₹ 2000{" "}
                    </Text>
                  </Container>
                  <Container maxW="container.md">
                    <InputGroup style={{ zIndex: 0 }}>
                      <InputLeftElement children={<FaFlagUsa p={5} />} />

                      <Input
                        variant="flushed"
                        outline="#30C9C8"
                        placeholder="Your Mobile Number"
                      />
                    </InputGroup>
                  </Container>

                  <Container maxW="container.md" height={50}>
                    <Menu sx={{ overflow: "scroll" }}>
                      <MenuButton
                        width="100%"
                        value="What will be the funds used for?"
                        borderRadius="none"
                        borderBottom="1px solid lightgrey"
                        variant="flused"
                        as={Button}
                        rightIcon={<ChevronDownIcon />}
                      >
                        <Text textAlign="left" color="grey" fontWeight={400}>
                          Whome are you raising funds for?
                        </Text>
                      </MenuButton>
                      <Container maxW="container.md" background="white">
                        <MenuList
                          background="white"
                          overflowY="scroll"
                          height="30vh"
                          width="30vw"
                        >
                          <MenuItem>Friend</MenuItem>
                          <MenuList>
                            <MenuGroup title="Parent">
                              <MenuItem>Father</MenuItem>
                              <MenuItem>Mother</MenuItem>
                              <MenuItem>Grand Father</MenuItem>
                              <MenuItem>Grand Mother</MenuItem>
                            </MenuGroup>
                            <MenuDivider />
                            <MenuGroup title="Spouse">
                              <MenuItem>Husband</MenuItem>
                              <MenuItem>Wife</MenuItem>
                            </MenuGroup>
                            <MenuDivider />
                            <MenuGroup title="Child">
                              <MenuItem>Son</MenuItem>
                              <MenuItem>Daughter</MenuItem>
                              <MenuItem>Twins</MenuItem>
                              <MenuItem>Grandson</MenuItem>
                              <MenuItem>Granddaughter</MenuItem>
                            </MenuGroup>
                            <MenuDivider />
                            <MenuGroup title="Sibling">
                              <MenuItem>Brother</MenuItem>
                              <MenuItem>Sister</MenuItem>
                            </MenuGroup>
                            <MenuDivider />
                            <MenuGroup title="Others">
                              <MenuItem>Friend</MenuItem>
                              <MenuItem>Friend's Family</MenuItem>
                              <MenuItem>Cousin</MenuItem>
                              <MenuItem>Uncle</MenuItem>
                              <MenuItem>Aunt</MenuItem>
                              <MenuItem>Nephew</MenuItem>
                              <MenuItem>Niece</MenuItem>
                              <MenuItem>Colleague</MenuItem>
                              <MenuItem>Relative</MenuItem>
                              <MenuItem>Legal Ward</MenuItem>
                              <MenuItem>Other</MenuItem>
                            </MenuGroup>
                          </MenuList>
                        </MenuList>
                      </Container>
                    </Menu>
                  </Container>

                  <Menu>
                    <MenuButton
                      width="100%"
                      value="What will be the funds used for?"
                      borderRadius="none"
                      borderBottom="1px solid lightgrey"
                      variant="flused"
                      as={Button}
                      rightIcon={<ChevronDownIcon />}
                    >
                      <Text textAlign="left" color="grey" fontWeight={400}>
                        How you first heard about ketto?
                      </Text>
                    </MenuButton>
                    <Container maxW="container.md">
                      <MenuList
                        overflowY="scroll"
                        height="30vh"
                        width="32vw"
                        direction="rtl"
                      >
                        <MenuItem value="Cancer Treatment">
                          Search Engine (Google,Yahoo,etc)
                        </MenuItem>
                        <MenuItem value="Accident treatment">
                          Facebook, Instagram Ad/Post
                        </MenuItem>
                        <MenuItem value="Liver / Kidney transplant">
                          Twitter Ad / Post
                        </MenuItem>
                        <MenuItem value="Heart operation">
                          YouTube Ad / Post
                        </MenuItem>
                        <MenuItem value="Pre-mature baby care (NICU)">
                          Brochure / Banner in Hospital
                        </MenuItem>
                        <MenuItem value="Medicines (Ongoing treatment)">
                          Recommended by Doctor
                        </MenuItem>
                        <MenuItem value="Memorial (Patient expired)">
                          Recommended by hospital Staff Member
                        </MenuItem>
                        <MenuItem value="others">others</MenuItem>
                      </MenuList>
                    </Container>
                  </Menu>
                  <Container maxW="container.sm">
                    <HStack
                      fontSize="smaller"
                      borderRadius={10}
                      border="1px dashed teal"
                      width="55%"
                      p={3}
                      spacing={5}
                    >
                      <Text>
                        Add fundraiser image/video
                        <br />
                        <Text color="grey">(Optional)</Text>
                      </Text>
                      <Button variant="outline" colorScheme="teal">
                        Upload
                      </Button>
                    </HStack>
                  </Container>
                  <Text fontSize="12px" color="#b4ada6" fontStyle={"italic"}>
                    You can easily make changes to your fundraiser at any time
                  </Text>
                  <Box bg="#bfefee" fontSize="14px" w="420px">
                    <Text ml="20px">
                      Ketto's zero platform fee policy will ensure more funds
                      for you.
                    </Text>
                  </Box>

                  <Container
                    pb={10}
                    m={5}
                    maxW="container.md"
                    margin="auto"
                    textAlign="center"
                  >
                    <Button
                      colorScheme="teal"
                      width="100%"
                      variant="solid"
                      onClick={() => {
                        handlepages({
                          page: false,
                          page2: true,
                          page3: false,
                        });
                      }}
                    >
                      Save and Continue
                    </Button>
                  </Container>
                </Stack>
              </>
            ) : pageNumbers.page2 ? (
              <>
                <Container>
                  <HStack spacing="auto" justifyContent={"center"} mt="10px">
                    <Text fontSize={"13px"}>Add fundraiser image / video</Text>
                    <Text>(Optional)</Text>
                  </HStack>
                </Container>
                <br />
                <Stack borderRadius={10} spacing={5} alignItems="center">
                  <Container
                    background="#EEEEEE"
                    textAlign="center"
                    height="25vh"
                    maxW="container.md"
                  >
                    <Image
                      margin="auto"
                      pt="10vh"
                      src="https://ketto.gumlet.io/assets/images/medical-fr/image-loader.jpg?w=480&dpr=1.0"
                    />
                  </Container>

                  <Container p={2} background="#EEEEEE" maxW="container.md">
                    <Button borderRadius="none" background="white">
                      Choose A file
                    </Button>
                  </Container>

                  <Container maxW="container.md">
                    <InputGroup>
                      <Input
                        variant="flushed"
                        placeholder="Enter link of the image"
                      />
                    </InputGroup>
                  </Container>
                  <Container maxW="container.md">
                    <InputGroup>
                      <Input variant="flushed" placeholder="Enter Your City" />
                      <Image w="20px" h="20px" src={qmark}></Image>
                    </InputGroup>
                  </Container>
                  <Container
                    pb={10}
                    m={5}
                    maxW="container.md"
                    margin="auto"
                    textAlign="center"
                  >
                    <Button
                      colorScheme="teal"
                      width="100%"
                      variant="solid"
                      onClick={() => {
                        handlepages({
                          page: false,
                          page2: false,
                          page3: true,
                        });
                      }}
                    >
                      Save and Continue
                    </Button>
                  </Container>
                </Stack>
              </>
            ) : (
              <>
                <Container maxW="container.md" textAlign="left" padding={5}>
                  <Textarea
                    padding={5}
                    borderRadius={10}
                    backgroundColor="#F5F5F5"
                    variant="flushed"
                    size="md"
                    height="40vh"
                    value={`Hi ,My name is ${name} and I am raising funds for my grandmother, Manju singh who is suffering from Liver cancer adults and is undergoing treatment at AIIMS Hospital, New Delhi . The family has done all it can to collect the total amount required for the treatment but Rs.6000 more is required to pay for all the medical expenses.

As the amount required is huge, I request you to kindly contribute towards the treatment and help during this time of need. Each contribution is important!

Please help us raise this amount by clicking on the donate button and sharing this page with your friends and family.

We are grateful for your help and wishes.

Thank you.`}
                  />
                </Container>
                <Container maxW="container.md">
                  <HStack
                    borderRadius={10}
                    padding={5}
                    spacing={5}
                    background="#F5F5F5"
                  >
                    <FaSmileBeam color="yellow" />
                    <Text>
                      Don’t worry! You can skip this step for now and add the
                      story details and medical documents after submiting.
                    </Text>
                  </HStack>
                </Container>

                <Container fontSize="smaller" maxW="container.md" padding={10}>
                  <HStack spacing={2}>
                    <Checkbox />
                    <Text>
                      I agree to Ketto's Terms of Use, service agreement ( USA
                      and India ), Privacy Policy and Plans & Pricing. I
                      acknowledge and confirm that the information provided
                      above is true and correct to the best of my knowledge and
                      belief and I agree to be liable if any of the above
                      information is found to be false or misleading. I hereby
                      give my consent for sharing it with regulatory authorities
                      or disclosing it as may be required by law."
                    </Text>
                  </HStack>
                </Container>
                <Container
                  pb={10}
                  m={5}
                  maxW="container.md"
                  margin="auto"
                  textAlign="center"
                >
                  <Button
                    colorScheme="teal"
                    width="100%"
                    variant="solid"
                    onClick={handleSubmitData}
                  >
                    Submit
                  </Button>
                </Container>
              </>
            )}
          </>
        )}
      </Container>
    </Container>
  );
};

export default NewFundRaiser2;
