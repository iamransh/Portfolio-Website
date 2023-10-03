import React from "react";
import { Flex, Stack, Text, Image, Button } from "@chakra-ui/react";
import react from "../assets/react2.png";
import {
  Progress,
  ProgressLabel,
  CircularProgress,
  CircularProgressLabel,
} from "@chakra-ui/progress";

export default function Skills() {
  return (
    <Stack w="100%" spacing={0} px="10%" pb="50px">
      <Text
        textAlign={"center"}
        fontSize={["12px", "14px", "17px"]}
        color="rgb(85,85,85)"
      >
        Explore My
      </Text>
      <Text textAlign={"center"} className="name" fontWeight={"bold"}>
        Skills
      </Text>
      <Stack w="100%" py={["10px", "20px", "50px"]}>
        <Stack w="100%">
          <Text
            fontSize={["17px", "20px", "24px"]}
            fontWeight={"medium"}
            textAlign={"center"}
          >
            Technical Skills
          </Text>
          <Flex w="100%" py="20px">
            <Stack w="50%" align={"center"}>
              <Stack w="80%" py="10px">
                <Image src={react.src} alt="react" w="40px" h="30px" />
                <Flex justify={"space-between"} w="60%">
                  <Text fontWeight={"medium"} fontSize={"18px"}>
                    React
                  </Text>
                  <Text fontWeight={"medium"}>60%</Text>
                </Flex>
                <Progress
                  value={60}
                  sx={{ alignSelf: "stretch" }}
                  size="xs"
                  // color="black"
                  colorScheme="gray"
                  hasStripe
                  isAnimated
                />
              </Stack>
              <Stack w="80%" py="10px">
                <Image src={react.src} alt="react" w="40px" h="30px" />
                <Flex justify={"space-between"} w="50%">
                  <Text fontWeight={"medium"} fontSize={"18px"}>
                    Node js
                  </Text>
                  <Text fontWeight={"medium"}>50%</Text>
                </Flex>
                <Progress
                  value={50}
                  sx={{ alignSelf: "stretch" }}
                  size="xs"
                  // color="black"
                  colorScheme="gray"
                  hasStripe
                  isAnimated
                />
              </Stack>
              <Stack w="80%" py="10px">
                <Image src={react.src} alt="react" w="40px" h="30px" />
                <Flex justify={"space-between"} w="60%">
                  <Text fontWeight={"medium"} fontSize={"18px"}>
                    Express js
                  </Text>
                  <Text fontWeight={"medium"}>60%</Text>
                </Flex>
                <Progress
                  value={60}
                  sx={{ alignSelf: "stretch" }}
                  size="xs"
                  // color="black"
                  colorScheme="gray"
                  hasStripe
                  isAnimated
                />
              </Stack>
              <Stack w="80%" py="10px">
                <Image src={react.src} alt="react" w="40px" h="30px" />
                <Flex justify={"space-between"} w="70%">
                  <Text fontWeight={"medium"} fontSize={"18px"}>
                    Mongo DB
                  </Text>
                  <Text fontWeight={"medium"}>70%</Text>
                </Flex>
                <Progress
                  value={70}
                  sx={{ alignSelf: "stretch" }}
                  size="xs"
                  // color="black"
                  colorScheme="gray"
                  hasStripe
                  isAnimated
                />
              </Stack>
            </Stack>
            <Stack w="50%" align={"center"}>
              <Stack w="80%" py="10px">
                <Image src={react.src} alt="react" w="40px" h="30px" />
                <Flex justify={"space-between"} w="70%">
                  <Text fontWeight={"medium"} fontSize={"18px"}>
                    Javascript
                  </Text>
                  <Text fontWeight={"medium"}>70%</Text>
                </Flex>
                <Progress
                  value={70}
                  sx={{ alignSelf: "stretch" }}
                  size="xs"
                  // color="black"
                  colorScheme="gray"
                  hasStripe
                  isAnimated
                />
              </Stack>
              <Stack w="80%" py="10px">
                <Image src={react.src} alt="react" w="40px" h="30px" />
                <Flex justify={"space-between"} w="80%">
                  <Text fontWeight={"medium"} fontSize={"18px"}>
                    CSS
                  </Text>
                  <Text fontWeight={"medium"}>80%</Text>
                </Flex>
                <Progress
                  value={80}
                  sx={{ alignSelf: "stretch" }}
                  size="xs"
                  // color="black"
                  colorScheme="gray"
                  hasStripe
                  isAnimated
                />
              </Stack>
              <Stack w="80%" py="10px">
                <Image src={react.src} alt="react" w="40px" h="30px" />
                <Flex justify={"space-between"} w="90%">
                  <Text fontWeight={"medium"} fontSize={"18px"}>
                    HTML
                  </Text>
                  <Text fontWeight={"medium"}>90%</Text>
                </Flex>
                <Progress
                  value={90}
                  sx={{ alignSelf: "stretch" }}
                  size="xs"
                  // color="black"
                  colorScheme="gray"
                  hasStripe
                  isAnimated
                />
              </Stack>
            </Stack>
          </Flex>
        </Stack>
        <Stack w="100%">
          <Text
            fontSize={["17px", "20px", "24px"]}
            fontWeight={"medium"}
            textAlign={"center"}
          >
            Professional Skills
          </Text>
        </Stack>
      </Stack>
    </Stack>
  );
}
