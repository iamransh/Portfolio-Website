import React from "react";
import {
  Flex,
  Stack,
  Text,
  Image,
  Button,
  Input,
  Textarea,
} from "@chakra-ui/react";

export default function Contact() {
  const handelSubmit = () => {};
  return (
    <Stack w="100%" spacing={0} px="10%" pb="50px" data-aos="zoom-in">
      <Text
        textAlign={"center"}
        fontSize={["12px", "14px", "17px"]}
        color="rgb(85,85,85)"
      >
        Get in Touch
      </Text>
      <Text textAlign={"center"} className="name" fontWeight={"bold"} mb="30px">
        Contact Me
      </Text>
      <Flex justify={"center"} w="100%">
        <Flex
          w={["100%", "80%", "60%"]}
          flexDir={["column", "column", "row"]}
          border="1px solid rgb(85,85,85)"
          borderRadius={"30px"}
          p="30px"
        >
          <Stack
            w={["100%", "100%", "50%"]}
            align={["center", "center", "normal"]}
            gap="8"
            mb={["50px", "50px", "0px"]}
            pr={["0px", "0px", "20px"]}
          >
            <Text
              fontWeight={"light"}
              fontSize={"18px"}
              textAlign={["left", "left", "left"]}
            >
              Currently working and living in Pune, Maharashtra, India.
            </Text>
            <Text fontWeight={"light"} fontSize={"18px"} w="100%">
              pranavsrivastavofficial@gmail.com
            </Text>
          </Stack>
          <Stack w={["100%", "100%", "50%"]} align={"center"}>
            <form onSubmit={handelSubmit} style={{ width: "90%" }}>
              <Stack w="100%" gap="2" align="center">
                <Input
                  name="name"
                  borderRadius={"0"}
                  borderColor={"black"}
                  placeholder="Name"
                  required
                  width={["90%", "70%", "100%"]}
                  height="35px"
                />
                <Input
                  name="Email"
                  borderRadius={"0"}
                  borderColor={"black"}
                  placeholder="Email"
                  required
                  width={["90%", "70%", "100%"]}
                  height="35px"
                />
                <Input
                  name="Subject"
                  borderRadius={"0"}
                  borderColor={"black"}
                  placeholder="Subject"
                  required
                  width={["90%", "70%", "100%"]}
                  height="35px"
                />
                <Textarea
                  name="Message"
                  borderRadius={"0"}
                  borderColor={"black"}
                  placeholder="Message"
                  required
                  width={["90%", "70%", "100%"]}
                />
                <Flex width={["90%", "70%", "100%"]} justify={"flex-end"}>
                  <Button bg="rgb(35,35,35)" color="white" className="button2">
                    Send
                  </Button>
                </Flex>
              </Stack>
            </form>
          </Stack>
        </Flex>
      </Flex>
    </Stack>
  );
}
