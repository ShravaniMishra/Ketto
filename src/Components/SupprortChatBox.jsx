import { ArrowRightIcon, ChatIcon, ChevronDownIcon, QuestionIcon } from "@chakra-ui/icons";
import { Box, Button, HStack, Image, Input, Stack, Text, Textarea } from "@chakra-ui/react";
import React, { useState } from "react";

const SupprortChatBox = () => {
    const [chatbox, setchatbox] = useState(false);
  return (
    <div style={{zIndex:999}}>
      <Button
        onClick={() => {
          setchatbox(true);
        }}
        _hover={{ backgroundColor: "teal" }}
        borderRadius={20}
        backgroundColor="#30C9C8"
        color="white"
        padding={5}
        leftIcon={<ChatIcon />}
        position="fixed"
        margin={20}
        right={0}
        bottom={0}
      >
        Support
      </Button>

      {!chatbox ? null : (
        <Box>
          {/* marginTop={-400} */}
          <Button
            position="fixed"
            top={1}
            m={"3rem"}
            right={0}
            onClick={() => {
              setchatbox(false);
            }}
            color="white"
            background="#33C7ED"
            height={10}
            width={10}
            borderRadius="50%"
            fontSize={32}
          >
            {<ChevronDownIcon />}
          </Button>
          <Box
            boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
            borderRadius={10}
            background="white"
            width="20rem"
            height="30rem"
            position="fixed"
            bottom={0}
            right={0}
            margin={10}
          >
            <Box
              borderTopRadius={10}
              borderBottomRadius="50%"
              backgroundColor="#33C7ED"
              width="100%"
              height="25%"
            >
              <HStack padding={20}>
                <Image
                  background="white"
                  borderRadius="50%"
                  width={50}
                  src="https://i.pinimg.com/originals/c9/69/c8/c969c875e5c52acf3c446cd3e3b15ad6.png"
                />
                <Text fontSize={28} color="white">
                  Chat with us now!
                </Text>
              </HStack>
            </Box>
            <Box padding={5} marginTop={10}>
              <Stack>
                <Input
                  outline={false}
                  outlineColor="#30C9C8"
                  background="#F5F5F5"
                  placeholder="Enter Your name (Required)"
                />
                <Input
                  outline={false}
                  outlineColor="#30C9C8"
                  background="#F5F5F5"
                  placeholder="Enter your email address (Required)"
                />
                <Input
                  outline={false}
                  outlineColor="#30C9C8"
                  background="#F5F5F5"
                  placeholder="Enter Your phone number (Required)"
                />
                <Textarea
                  outline={false}
                  outlineColor="#30C9C8"
                  background="#F5F5F5"
                  height={100}
                  placeholder="Type Your message and hit Enter"
                />
                <Button
                  colorScheme="green"
                  onClick={() => {
                    alert("Thank you, We are happy to help");
                  }}
                  rightIcon={<ArrowRightIcon />}
                >
                  Connect Now
                </Button>
              </Stack>
            </Box>
            <HStack margin={5} spacing="auto">
              <Button leftIcon={<ChatIcon />} color="#33C7ED" variant="ghost">
                Conversation
              </Button>
              <Button variant="ghost" leftIcon={<QuestionIcon />}>
                FAQs
              </Button>
            </HStack>
          </Box>
        </Box>
      )}
    </div>
  );
};

export default SupprortChatBox;
