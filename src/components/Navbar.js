import { Flex, Text, Stack, Link, Image } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import icon from "../assets/hamburgerIcon.svg";

export default function Navbar() {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const NavBarLinks = [
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "/contact" },
  ];
  return (
    <>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bgColor={"white"}>
          <DrawerCloseButton color={"black"} />
          <DrawerBody color={"black"}>
            <Stack
              zIndex={400}
              direction="column"
              bg="white"
              as="nav"
              py={"6px"}
              fontSize={"20px"}
            >
              <Stack>
                <Link href="/">
                  <Text fontSize={"25px"} fontWeight={"semibold"}>
                    Pranav Srivastav
                  </Text>
                </Link>
              </Stack>
              <Stack w="100%">
                <Stack
                  direction="column"
                  justify={"space-evenly"}
                  align={"center"}
                >
                  {NavBarLinks.map((link, index) => (
                    <Stack key={index} my="25px">
                      <Text
                        cursor={"pointer"}
                        onClick={() => {
                          router.push(`${link.link}`);
                        }}
                        fontWeight={"medium"}
                        className={"navbar_link_drawer"}
                      >
                        {link.name}
                      </Text>
                    </Stack>
                  ))}
                </Stack>
              </Stack>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <Flex
        w="100%"
        // position="sticky"
        // top="0"
        px={["10%", "15%", "15%"]}
        py="20px"
        zIndex={100}
        data-aos="fade-down"
        align={"center"}
        bg="white"
      >
        <Flex fontWeight={"semibold"} className="logo">
          Pranav Srivastav
        </Flex>
        <Flex justify={"space-evenly"} className="links">
          {NavBarLinks.map((link, index) => (
            <Flex key={index}>
              <Text
                cursor={"pointer"}
                onClick={() => {
                  router.push(`${link.link}`);
                }}
                fontWeight={"medium"}
                fontSize={"25px"}
                className={"navbar_link"}
              >
                {link.name}
              </Text>
            </Flex>
          ))}
        </Flex>
        <Flex>
          <Image
            src={icon.src}
            onClick={onOpen}
            alt="icon"
            color={"white"}
            className="hamburgerIcon"
            w={["50px", "70px", "70px"]}
          />
        </Flex>
      </Flex>
    </>
  );
}
