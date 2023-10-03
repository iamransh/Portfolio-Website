import { Flex, Stack, Text, Image, Button } from "@chakra-ui/react";
import img from "../assets/image.jpg";
import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import arrow from "../assets/arrow.png";

export default function HeroSection() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  const [display, setDisplay] = useState("block");

  const handelClick = () => {
    setDisplay("none");
  };

  const handelScroll = () => {
    setDisplay("none");
  };

  return (
    <Flex w="100%" className="hero" position="relative" onScroll={handelScroll}>
      <Flex
        // w={["100%", "100%", "50%"]}
        justify={"center"}
        align={"center"}
        // minW={["150px", "250px", "400px"]}
        // minH={["165px", "265px", "415px"]}
        className="image_box"
        data-aos="fade-down"
      >
        <Image
          className="hero_img"
          src={img.src}
          alt="image"
          w={["49vw", "32vw", "24vw"]}
          h={["50vw", "33vw", "25vw"]}
          borderRadius="50%"
        />
      </Flex>
      <Stack
        // w={["100%", "100%", "50%"]}
        spacing={1}
        // ml={["0px", "0px", "50px"]}
        justify={"center"}
        // align={["center", "center", "normal"]}
        className="text_box"
        data-aos="fade-up"
      >
        <Text fontWeight={"medium"} className="hello" color="rgb(85,85,85)">
          {"Hello, I'm"}
        </Text>
        <Text fontWeight={"semibold"} className="name">
          Pranav Srivastav
        </Text>
        <Text fontWeight={"semibold"} className="web" color="rgb(85,85,85)">
          Web Developer
        </Text>
        <Flex mt="15px" flexDir={["column", "row", "row"]}>
          <Button
            width="130px"
            fontSize={"15px"}
            fontWeight={"bold"}
            bg="transparent"
            border="1px solid black"
            borderRadius={"40px"}
            py="25px"
            className="button1"
            mb={["20px", "0px", "0px"]}
          >
            Download CV
          </Button>
          <Button
            width="130px"
            fontSize={"15px"}
            fontWeight={"bold"}
            bg="rgb(85,85,85)"
            color="white"
            // border="1px solid black"
            borderRadius={"40px"}
            py="25px"
            ml={["0px", "20px", "20px"]}
            className="button2"
          >
            Contact info
          </Button>
        </Flex>
        <Flex mt="15px" className="socials">
          <Image
            src={linkedin.src}
            alt="linkedin"
            w="30px"
            h="30px"
            mr="20px"
          />
          <Image src={github.src} alt="github" w="30px" h="30px" />
        </Flex>
      </Stack>
      <Image
        src={arrow.src}
        alt="arrow"
        id="arrow"
        position="absolute"
        bottom={["40px", "100px", "80px"]}
        right={["25px", "40px", "100px"]}
        w="30px"
        h="30px"
        cursor="pointer"
        display={display}
        onClick={handelClick}
      />
    </Flex>
  );
}
