import React from "react";
import styles from "./Crowd.module.css";
import { Text, Container, HStack } from "@chakra-ui/react";

export const CVideo = ({ data }) => {

  const { src, message1, message2 } = data;
  return (
    <>
      <Container maxW="container.2xl" marginTop={10} m={"auto"}>
        <HStack spacing={10}>
          <div className={styles.videodiv}>
            <iframe style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", padding: "10x" }} src={src} frameborder="0" title={"Video"}></iframe>
          </div>
          <div className={styles.rightarea}>
            <Text fontSize={28} paddingBottom={2}>{message1}</Text >
            <Text>{message2}</Text>
          </div>
        </HStack>
      </Container>
    </>
  )
}
