import React, { useState } from "react";
import Carousel from "./Carousel";
import styles from "../styles/HowWorks.modules.css";
import { CFunding } from "./CFunding";
import {
  Container,
  Center,
  Select,
  Divider,
  Menu,
  Button,
  MenuButton,
  MenuList,
  MenuItem,
  Stack,
  HStack,
  Box,
  Heading,
  Image,
  Text,
  Input,
  VStack,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons/";
import { FaFlagUsa } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { ImWhatsapp } from "react-icons/im";

const HowItWorks = () => {
  const [selectstate, setselectstate] = useState(
    "What will be the funds used for?"
  );
  return (
    <Container maxW="container.2xl" padding={10} margin="auto">
      <Heading fonSize="xl" color="teal" margin={5} textAlign="center">
        Raising Funds was never this easy. Start a <br /> fundraiser in 5
        minutes!
      </Heading>
      <Container maxW="container.xl">
        <HStack spacing="auto">
          <Stack spacing={5} margin="auto">
            <Carousel />

            <HStack
              borderRadius={10}
              boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
              spacing={14}
              textAlign="center"
            >
              <Box padding={5}>
                <Heading fontSize="28" color="#30C9C8">
                  55 Lakh+
                </Heading>
                <p>DONORS</p>
              </Box>
              <Center height="50px">
                <Divider orientation="vertical" />
              </Center>
              <Box padding={5} className="b2">
                <Heading fontSize="28" color="#30C9C8">
                  2 Lakh+{" "}
                </Heading>
                <p className="para-g">FUNDRAISERS</p>
              </Box>
              <Center height="50px">
                <Divider orientation="vertical" />
              </Center>
              <Box padding={5} className="b3">
                <Heading fontSize="28" color="#30C9C8">
                  0%
                </Heading>
                <p className="para-g">PLATFORM FEE</p>
              </Box>
            </HStack>
          </Stack>

          <Box
            boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
            padding={8}
            textAlign="center"
          >
            <Image
              margin="auto"
              src="https://ketto.gumlet.io/assets/images/how-it-works/ketto-logo.svg?w=480&dpr=1.0"
            />
            <h2 className="fon">
              We know you are in urgent need of <br />
              funds.
            </h2>
            <Text>
              Our personal fundraiser expert is waiting to get you <br />{" "}
              started!
            </Text>
            <VStack spacing={10} padding={3}>
              <InputGroup>
                <Input variant="flushed" placeholder="Name" />
                <InputRightElement children={<IoMdContact />} />
              </InputGroup>
              <InputGroup>
                <InputLeftElement children={<FaFlagUsa color="red" />} />
                <Input
                  variant="flushed"
                  outline="#30C9C8"
                  placeholder="Your Mobile Number"
                />
              </InputGroup>
              <InputGroup>
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
                    <Text textAlign="left" fontWeight={400}>
                      {" "}
                      {selectstate}
                    </Text>
                  </MenuButton>
                  <MenuList direction="rtl">
                    <MenuItem
                      onClick={(e) => setselectstate(e.target.value)}
                      value="Cancer Treatment"
                    >
                      Cancer treatment
                    </MenuItem>
                    <MenuItem
                      onClick={(e) => setselectstate(e.target.value)}
                      value="Accident treatment"
                    >
                      Accident treatment
                    </MenuItem>
                    <MenuItem
                      onClick={(e) => setselectstate(e.target.value)}
                      value="Liver / Kidney transplant"
                    >
                      Liver/Kidney transplant
                    </MenuItem>
                    <MenuItem
                      onClick={(e) => setselectstate(e.target.value)}
                      value="Heart operation"
                    >
                      Heart operation
                    </MenuItem>
                    <MenuItem
                      onClick={(e) => setselectstate(e.target.value)}
                      value="Pre-mature baby care (NICU)"
                    >
                      Pre-mature baby care (NICU)
                    </MenuItem>
                    <MenuItem
                      onClick={(e) => setselectstate(e.target.value)}
                      value="Medicines (Ongoing treatment)"
                    >
                      Medicines (Ongoing treatment)
                    </MenuItem>
                    <MenuItem
                      onClick={(e) => setselectstate(e.target.value)}
                      value="Memorial (Patient expired)"
                    >
                      Memorial (Patient expired)
                    </MenuItem>
                    <MenuItem
                      onClick={(e) => setselectstate(e.target.value)}
                      value="others"
                    >
                      others
                    </MenuItem>
                  </MenuList>
                </Menu>
              </InputGroup>
            </VStack>
            <Text fontWeight={700} fontSize="xs" color="teal" margin={5}>
              102 People started a fundraiser in last 2 days
            </Text>
            <VStack margin={5}>
              <Button
                color="#30C9C8"
                _hover={{ background: "#30C9C8", color: "white" }}
                width="100%"
                variant="outline"
              >
                GET A CALL
              </Button>
              <Button
                width="100%"
                leftIcon={<ImWhatsapp />}
                colorScheme="green"
              >
                CONNECT ON WHATSAPP
              </Button>
            </VStack>
          </Box>
        </HStack>
      </Container>
      <CFunding />
      
    </Container>
  );
};

export default HowItWorks;
