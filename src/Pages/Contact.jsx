import { Container, Text } from "@chakra-ui/react";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { SiLinkedin } from "react-icons/si";
import { TfiEmail } from "react-icons/tfi";
import { Button, Center, Stack } from "@chakra-ui/react";
const Contact = () => {
  const handleLinkedin = () => {
    window.open(`https://www.linkedin.com/in/dharmik-puri-goswami-b27272262/`);
  };
  const handleGithub = () => {
    window.open(`https://github.com/dharmikpuri`);
  };
  // const handleEmail=()=>{
  //   window.open()
  // }
  // const handleCall=()=>{
  //   window.open()
  // }
  return (
    <div id="contact" style={{ height: "400px" }}>
      <Container maxW={"4xl"} marginTop={50}>
        <Text
          as={"span"}
          fontSize={"4xl"}
          fontWeight={"bold"}
          position={"relative"}
          _after={{
            content: "''",
            width: "full",
            height: "30%",
            position: "absolute",
            bottom: 1,
            left: 0,
            bg: "red.400",
            zIndex: -1,
          }}
        >
          CONTACT
        </Text>
        <Center p={8}>
          <Stack spacing={8} align={"center"} maxW={"md"} w={"full"}>
            {/* Facebook */}
            <Button
              w={"full"}
              colorScheme={"facebook"}
              leftIcon={<SiLinkedin />}
              onClick={handleLinkedin}
            >
              <Center>
                <Text id="contact-linkedin">Connect with Linkedin</Text>
              </Center>
            </Button>

            {/* Google */}
            <Button
              w={"full"}
              variant={"outline"}
              leftIcon={<FaGithub />}
              onClick={handleGithub}
            >
              <Center>
                <Text id="contact-github">Connect with Github</Text>
              </Center>
            </Button>

            {/* LinkedIn */}
            <Button
              w={"full"}
              colorScheme={"messenger"}
              leftIcon={<TfiEmail />}
            >
              <Center>
                <Text id="contact-email">dharmikpuri2004@gmail.com</Text>
              </Center>
            </Button>

            {/* Messenger */}
            <Button
              w={"full"}
              colorScheme={"messenger"}
              leftIcon={<FiPhoneCall />}
            >
              <Center>
                <Text id="contact-phone">+91 9664396057</Text>
              </Center>
            </Button>
          </Stack>
        </Center>
      </Container>
    </div>
  );
};

export default Contact;