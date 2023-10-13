import React from "react";
import { Flex, Stack, Text, Image, Button } from "@chakra-ui/react";
import img from "../assets/project-3.png";

export default function Projects() {
  return (
    <Stack w="100%" spacing={0} px="10%" pb="50px" data-aos="zoom-in">
      <Text
        textAlign={"center"}
        fontSize={["12px", "14px", "17px"]}
        color="rgb(85,85,85)"
        className="about"
      >
        Browse My Recent
      </Text>
      <Text textAlign={"center"} className="name" fontWeight={"bold"} mb="30px">
        Projects
      </Text>
      <Flex flexWrap={"wrap"}>
        <Stack
          align="center"
          flex="1"
          p="1.5rem"
          mx="15px"
          mb="20px"
          minW={["200px", "300px", "300px"]}
          border="1px solid rgb(85,85,85)"
          borderRadius={"30px"}
          gap={5}
        >
          <Image src={img.src} alt="image" borderRadius={"30px"} />
          <Text fontSize={"20px"} fontWeight={"bold"}>
            Project One
          </Text>
          <Flex
            w="220px"
            justify={"space-between"}
            align={"center"}
            flexDir={["column", "row", "row"]}
          >
            <Button
              width="100px"
              fontSize={"15px"}
              fontWeight={"bold"}
              bg="transparent"
              border="1px solid black"
              borderRadius={"40px"}
              py="20px"
              className="button1"
              mb={["10px", "0px", "0px"]}
            >
              Github
            </Button>
            <Button
              width="100px"
              fontSize={"15px"}
              fontWeight={"bold"}
              bg="transparent"
              border="1px solid black"
              borderRadius={"40px"}
              py="20px"
              className="button1"
              mb={["10px", "0px", "0px"]}
            >
              Live Demo
            </Button>
          </Flex>
        </Stack>
        <Stack
          align="center"
          flex="1"
          p="1.5rem"
          mx="15px"
          mb="20px"
          minW={["200px", "300px", "300px"]}
          border="1px solid rgb(85,85,85)"
          borderRadius={"30px"}
          gap={5}
        >
          <Image src={img.src} alt="image" borderRadius={"30px"} />
          <Text fontSize={"20px"} fontWeight={"bold"}>
            Project Two
          </Text>
          <Flex
            w="220px"
            justify={"space-between"}
            align={"center"}
            flexDir={["column", "row", "row"]}
          >
            <Button
              width="100px"
              fontSize={"15px"}
              fontWeight={"bold"}
              bg="transparent"
              border="1px solid black"
              borderRadius={"40px"}
              py="20px"
              className="button1"
              mb={["10px", "0px", "0px"]}
            >
              Github
            </Button>
            <Button
              width="100px"
              fontSize={"15px"}
              fontWeight={"bold"}
              bg="transparent"
              border="1px solid black"
              borderRadius={"40px"}
              py="20px"
              className="button1"
              mb={["10px", "0px", "0px"]}
            >
              Live Demo
            </Button>
          </Flex>
        </Stack>
        <Stack
          align="center"
          flex="1"
          p="1.5rem"
          mx="15px"
          mb="20px"
          minW={["200px", "300px", "300px"]}
          border="1px solid rgb(85,85,85)"
          borderRadius={"30px"}
          gap={5}
        >
          <Image src={img.src} alt="image" borderRadius={"30px"} />
          <Text fontSize={"20px"} fontWeight={"bold"}>
            Project Three
          </Text>
          <Flex
            w="220px"
            justify={"space-between"}
            align={"center"}
            flexDir={["column", "row", "row"]}
          >
            <Button
              width="100px"
              fontSize={"15px"}
              fontWeight={"bold"}
              bg="transparent"
              border="1px solid black"
              borderRadius={"40px"}
              py="20px"
              className="button1"
              mb={["10px", "0px", "0px"]}
            >
              Github
            </Button>
            <Button
              width="100px"
              fontSize={"15px"}
              fontWeight={"bold"}
              bg="transparent"
              border="1px solid black"
              borderRadius={"40px"}
              py="20px"
              className="button1"
              mb={["10px", "0px", "0px"]}
            >
              Live Demo
            </Button>
          </Flex>
        </Stack>
      </Flex>
    </Stack>
  );
}
