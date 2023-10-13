import React from "react";
import { Flex, Stack, Text, Image, Button } from "@chakra-ui/react";
import img from "../assets/image.jpg";
import education from "../assets/education.png";
import experience from "../assets/experience.png";
import arrow from "../assets/arrow.png";

export default function About() {
  return (
    <Stack w="100%" spacing={0} px="10%" pb="50px" data-aos="zoom-in">
      <Text
        textAlign={"center"}
        fontSize={["12px", "14px", "17px"]}
        color="rgb(85,85,85)"
        className="about"
      >
        Get To Know More
      </Text>
      <Text textAlign={"center"} className="name" fontWeight={"bold"}>
        About Me
      </Text>
      <Flex py={["10px", "20px", "50px"]} className="aboutme">
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
            py="20px"
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
              <Image src={experience.src} alt="experience" w="50px" h="50px" />
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
              <Image src={education.src} alt="education" w="50px" h="50px" />
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
      <Image
        src={arrow.src}
        alt="arrow"
        position="absolute"
        bottom={["40px", "100px", "30px"]}
        right={["25px", "40px", "100px"]}
        w="30px"
        h="30px"
        display={["none", "none", "block"]}
        // data-aos="fade-left"
      />
    </Stack>
  );
}
