import React from "react";
import { Flex, Stack, Text, Image, Button } from "@chakra-ui/react";
import react from "../assets/react2.png";
import {
  Progress,
  ProgressLabel,
  CircularProgress,
  CircularProgressLabel,
} from "@chakra-ui/progress";
import checkmark from "../assets/checkmark.png";
// import ApexCharts from "apexcharts";

export default function Skills() {
  return (
    <Stack w="100%" spacing={0} px="10%" pb="50px" data-aos="zoom-in">
      <Text
        textAlign={"center"}
        fontSize={["12px", "14px", "17px"]}
        color="rgb(85,85,85)"
      >
        Explore My
      </Text>
      <Text textAlign={"center"} className="name" fontWeight={"bold"} mb="30px">
        Skills
      </Text>
      {/* <Stack w="100%" py={["10px", "20px", "50px"]}>
        <Stack w="100%" data-aos="zoom-in">
          <Text
            fontSize={["17px", "20px", "24px"]}
            fontWeight={"medium"}
            textAlign={"center"}
          >
            Technical Skills
          </Text>
          <Flex w="100%" py="20px" flexDir={["column", "column", "row"]}>
            <Stack w={["100%", "100%", "50%"]} align={"center"}>
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
            </Stack>
            <Stack w={["100%", "100%", "50%"]} align={"center"}>
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
              <Stack w="80%" py="10px">
                <Image src={react.src} alt="react" w="40px" h="30px" />
                <Flex justify={"space-between"} w="90%">
                  <Text fontWeight={"medium"} fontSize={"18px"}>
                    Chakra UI
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
              <Stack w="80%" py="10px">
                <Image src={react.src} alt="react" w="40px" h="30px" />
                <Flex justify={"space-between"} w="80%">
                  <Text fontWeight={"medium"} fontSize={"18px"}>
                    Bootstrap
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
                <Flex justify={"space-between"} w="80%">
                  <Text fontWeight={"medium"} fontSize={"18px"}>
                    Tailwind
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
            </Stack>
          </Flex>
        </Stack>
        <Stack w="100%" data-aos="zoom-in">
          <Text
            fontSize={["17px", "20px", "24px"]}
            fontWeight={"medium"}
            textAlign={"center"}
          >
            Professional Skills
          </Text>
        </Stack>
      </Stack> */}
      <Flex
        w="100%"
        justify={["space-between"]}
        align="center"
        flexDir={["column", "column", "row"]}
      >
        <Stack
          w={["100%", "80%", "48%"]}
          py="15px"
          my="15px"
          border="1px solid rgb(85,85,85)"
          borderRadius={"30px"}
        >
          <Text
            textAlign={"center"}
            fontSize={"30px"}
            fontWeight={"semibold"}
            color="rgb(85,85,85)"
          >
            Frontend Development
          </Text>
          <Flex justify={"space-evenly"} flexWrap={"wrap"}>
            <Flex w="110px" justify={"space-between"} mx="60px" my="20px">
              <Image w="30px" h="30px" src={checkmark.src} alt="checkmark" />
              <Stack gap={0}>
                <Text fontSize={"20px"} fontWeight={"bold"}>
                  HTML
                </Text>
                <Text>Advance</Text>
              </Stack>
            </Flex>
            <Flex w="110px" justify={"space-between"} mx="60px" my="20px">
              <Image w="30px" h="30px" src={checkmark.src} alt="checkmark" />
              <Stack gap={0}>
                <Text fontSize={"20px"} fontWeight={"bold"}>
                  HTML
                </Text>
                <Text>Advance</Text>
              </Stack>
            </Flex>
            <Flex w="110px" justify={"space-between"} mx="60px" my="20px">
              <Image w="30px" h="30px" src={checkmark.src} alt="checkmark" />
              <Stack gap={0}>
                <Text fontSize={"20px"} fontWeight={"bold"}>
                  HTML
                </Text>
                <Text>Advance</Text>
              </Stack>
            </Flex>
            <Flex w="110px" justify={"space-between"} mx="60px" my="20px">
              <Image w="30px" h="30px" src={checkmark.src} alt="checkmark" />
              <Stack gap={0}>
                <Text fontSize={"20px"} fontWeight={"bold"}>
                  HTML
                </Text>
                <Text>Advance</Text>
              </Stack>
            </Flex>
            <Flex w="110px" justify={"space-between"} mx="60px" my="20px">
              <Image w="30px" h="30px" src={checkmark.src} alt="checkmark" />
              <Stack gap={0}>
                <Text fontSize={"20px"} fontWeight={"bold"}>
                  HTML
                </Text>
                <Text>Advance</Text>
              </Stack>
            </Flex>
            <Flex w="110px" justify={"space-between"} mx="60px" my="20px">
              <Image w="30px" h="30px" src={checkmark.src} alt="checkmark" />
              <Stack gap={0}>
                <Text fontSize={"20px"} fontWeight={"bold"}>
                  HTML
                </Text>
                <Text>Advance</Text>
              </Stack>
            </Flex>
          </Flex>
        </Stack>
        <Stack
          w={["100%", "80%", "48%"]}
          py="15px"
          my="15px"
          border="1px solid rgb(85,85,85)"
          borderRadius={"30px"}
        >
          <Text
            textAlign={"center"}
            fontSize={"30px"}
            fontWeight={"semibold"}
            color="rgb(85,85,85)"
          >
            Backend Development
          </Text>
          <Flex justify={"space-evenly"} flexWrap={"wrap"}>
            <Flex w="110px" justify={"space-between"} mx="60px" my="20px">
              <Image w="30px" h="30px" src={checkmark.src} alt="checkmark" />
              <Stack gap={0}>
                <Text fontSize={"20px"} fontWeight={"bold"}>
                  HTML
                </Text>
                <Text>Advance</Text>
              </Stack>
            </Flex>
            <Flex w="110px" justify={"space-between"} mx="60px" my="20px">
              <Image w="30px" h="30px" src={checkmark.src} alt="checkmark" />
              <Stack gap={0}>
                <Text fontSize={"20px"} fontWeight={"bold"}>
                  HTML
                </Text>
                <Text>Advance</Text>
              </Stack>
            </Flex>
            <Flex w="110px" justify={"space-between"} mx="60px" my="20px">
              <Image w="30px" h="30px" src={checkmark.src} alt="checkmark" />
              <Stack gap={0}>
                <Text fontSize={"20px"} fontWeight={"bold"}>
                  HTML
                </Text>
                <Text>Advance</Text>
              </Stack>
            </Flex>
            <Flex w="110px" justify={"space-between"} mx="60px" my="20px">
              <Image w="30px" h="30px" src={checkmark.src} alt="checkmark" />
              <Stack gap={0}>
                <Text fontSize={"20px"} fontWeight={"bold"}>
                  HTML
                </Text>
                <Text>Advance</Text>
              </Stack>
            </Flex>
            <Flex w="110px" justify={"space-between"} mx="60px" my="20px">
              <Image w="30px" h="30px" src={checkmark.src} alt="checkmark" />
              <Stack gap={0}>
                <Text fontSize={"20px"} fontWeight={"bold"}>
                  HTML
                </Text>
                <Text>Advance</Text>
              </Stack>
            </Flex>
            <Flex w="110px" justify={"space-between"} mx="60px" my="20px">
              <Image w="30px" h="30px" src={checkmark.src} alt="checkmark" />
              <Stack gap={0}>
                <Text fontSize={"20px"} fontWeight={"bold"}>
                  HTML
                </Text>
                <Text>Advance</Text>
              </Stack>
            </Flex>
          </Flex>
        </Stack>
      </Flex>
      <Flex
        w="100%"
        justify={["space-between"]}
        align="center"
        flexDir={["column", "column", "row"]}
      >
        <Stack
          w={["100%", "80%", "48%"]}
          py="15px"
          my="15px"
          border="1px solid rgb(85,85,85)"
          borderRadius={"30px"}
        >
          <Text
            textAlign={"center"}
            fontSize={"30px"}
            fontWeight={"semibold"}
            color="rgb(85,85,85)"
          >
            Languages
          </Text>
          <Flex justify={"space-evenly"} flexWrap={"wrap"}>
            <Flex w="110px" justify={"space-between"} mx="60px" my="20px">
              <Image w="30px" h="30px" src={checkmark.src} alt="checkmark" />
              <Stack gap={0}>
                <Text fontSize={"20px"} fontWeight={"bold"}>
                  HTML
                </Text>
                <Text>Advance</Text>
              </Stack>
            </Flex>
            <Flex w="110px" justify={"space-between"} mx="60px" my="20px">
              <Image w="30px" h="30px" src={checkmark.src} alt="checkmark" />
              <Stack gap={0}>
                <Text fontSize={"20px"} fontWeight={"bold"}>
                  HTML
                </Text>
                <Text>Advance</Text>
              </Stack>
            </Flex>
            <Flex w="110px" justify={"space-between"} mx="60px" my="20px">
              <Image w="30px" h="30px" src={checkmark.src} alt="checkmark" />
              <Stack gap={0}>
                <Text fontSize={"20px"} fontWeight={"bold"}>
                  HTML
                </Text>
                <Text>Advance</Text>
              </Stack>
            </Flex>
            <Flex w="110px" justify={"space-between"} mx="60px" my="20px">
              <Image w="30px" h="30px" src={checkmark.src} alt="checkmark" />
              <Stack gap={0}>
                <Text fontSize={"20px"} fontWeight={"bold"}>
                  HTML
                </Text>
                <Text>Advance</Text>
              </Stack>
            </Flex>
            <Flex w="110px" justify={"space-between"} mx="60px" my="20px">
              <Image w="30px" h="30px" src={checkmark.src} alt="checkmark" />
              <Stack gap={0}>
                <Text fontSize={"20px"} fontWeight={"bold"}>
                  HTML
                </Text>
                <Text>Advance</Text>
              </Stack>
            </Flex>
            <Flex w="110px" justify={"space-between"} mx="60px" my="20px">
              <Image w="30px" h="30px" src={checkmark.src} alt="checkmark" />
              <Stack gap={0}>
                <Text fontSize={"20px"} fontWeight={"bold"}>
                  HTML
                </Text>
                <Text>Advance</Text>
              </Stack>
            </Flex>
          </Flex>
        </Stack>
        <Stack
          w={["100%", "80%", "48%"]}
          py="15px"
          my="15px"
          border="1px solid rgb(85,85,85)"
          borderRadius={"30px"}
        >
          <Text
            textAlign={"center"}
            fontSize={"30px"}
            fontWeight={"semibold"}
            color="rgb(85,85,85)"
          >
            Machine Learning
          </Text>
          <Flex justify={"space-evenly"} flexWrap={"wrap"}>
            <Flex w="110px" justify={"space-between"} mx="60px" my="20px">
              <Image w="30px" h="30px" src={checkmark.src} alt="checkmark" />
              <Stack gap={0}>
                <Text fontSize={"20px"} fontWeight={"bold"}>
                  HTML
                </Text>
                <Text>Advance</Text>
              </Stack>
            </Flex>
            <Flex w="110px" justify={"space-between"} mx="60px" my="20px">
              <Image w="30px" h="30px" src={checkmark.src} alt="checkmark" />
              <Stack gap={0}>
                <Text fontSize={"20px"} fontWeight={"bold"}>
                  HTML
                </Text>
                <Text>Advance</Text>
              </Stack>
            </Flex>
            <Flex w="110px" justify={"space-between"} mx="60px" my="20px">
              <Image w="30px" h="30px" src={checkmark.src} alt="checkmark" />
              <Stack gap={0}>
                <Text fontSize={"20px"} fontWeight={"bold"}>
                  HTML
                </Text>
                <Text>Advance</Text>
              </Stack>
            </Flex>
            <Flex w="110px" justify={"space-between"} mx="60px" my="20px">
              <Image w="30px" h="30px" src={checkmark.src} alt="checkmark" />
              <Stack gap={0}>
                <Text fontSize={"20px"} fontWeight={"bold"}>
                  HTML
                </Text>
                <Text>Advance</Text>
              </Stack>
            </Flex>
            <Flex w="110px" justify={"space-between"} mx="60px" my="20px">
              <Image w="30px" h="30px" src={checkmark.src} alt="checkmark" />
              <Stack gap={0}>
                <Text fontSize={"20px"} fontWeight={"bold"}>
                  HTML
                </Text>
                <Text>Advance</Text>
              </Stack>
            </Flex>
            <Flex w="110px" justify={"space-between"} mx="60px" my="20px">
              <Image w="30px" h="30px" src={checkmark.src} alt="checkmark" />
              <Stack gap={0}>
                <Text fontSize={"20px"} fontWeight={"bold"}>
                  HTML
                </Text>
                <Text>Advance</Text>
              </Stack>
            </Flex>
          </Flex>
        </Stack>
      </Flex>
    </Stack>
  );
}
