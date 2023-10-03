import React from "react";
import { Flex, Stack, Text, Image, Button } from "@chakra-ui/react";
import img from "../assets/image.jpg";

export default function About() {
  return (
    <Stack w="100%" spacing={0} px="10%" pb="50px">
      <Text
        textAlign={"center"}
        fontSize={["12px", "14px", "17px"]}
        color="rgb(85,85,85)"
      >
        Get To Know More
      </Text>
      <Text textAlign={"center"} className="name" fontWeight={"bold"}>
        About Me
      </Text>
      <Flex py={["10px", "20px", "50px"]} className="about">
        <Flex className="about_img_box">
          <Image
            src={img.src}
            alt="img"
            borderRadius={"30px"}
            filter="grayscale(100%)"
            className="about_img"
          />
        </Flex>
        <Stack justify={"center"}>
          <Flex
            justify={["space-evenly"]}
            align="center"
            py="30px"
            flexDir={["column", "column", "row"]}
          >
            <Stack
              w={["100%", "80%", "45%"]}
              align={"center"}
              py="20px"
              border="1px solid rgb(85,85,85)"
              borderRadius={"30px"}
              minW="200px"
              mb={["20px", "20px", "0px"]}
            >
              <Text fontSize={"25px"} fontWeight={"semibold"}>
                Experience
              </Text>
              <Text fontSize={"18px"} color="rgb(85,85,85)">
                10+ Projects
              </Text>
              <Text fontSize={"18px"} color="rgb(85,85,85)">
                Web Development
              </Text>
            </Stack>
            <Stack
              w={["100%", "80%", "45%"]}
              align={"center"}
              py="20px"
              border="1px solid rgb(85,85,85)"
              borderRadius={"30px"}
              minW="200px"
            >
              <Text fontSize={"25px"} fontWeight={"semibold"}>
                Education
              </Text>
              <Text fontSize={"18px"} color="rgb(85,85,85)">
                B.Tech CSE(AIML)
              </Text>
              <Text fontSize={"18px"} color="rgb(85,85,85)">
                Galgotias University
              </Text>
            </Stack>
          </Flex>
          <Text fontSize={"20px"} color="rgb(85,85,85)">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequuntur, alias cumque a iusto vitae praesentium nulla animi
            corrupti sapiente, eos veniam vel, corporis at molestiae in omnis
            expedita ipsam quod?
          </Text>
        </Stack>
      </Flex>
    </Stack>
  );
}
