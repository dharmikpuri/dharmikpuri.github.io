import { Container, Text } from "@chakra-ui/react";
import React from "react";
import ProjectCard from "../Components/ProjectCard";
import { IoLogoJavascript } from "react-icons/io";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiNetlify } from 'react-icons/si'
import { SiChakraui } from 'react-icons/si'
import { SiReact } from 'react-icons/si'
// import yaatra from "../Components/Images/yaatra.jpeg";
// import beauty from '../Components/Images/beauty.jpeg'
// import shoping from '../Components/Images/shoping.jpeg'
// import glamour from '../Components/Images/glamour.jpeg'
import lenskart from "../Components/Images/lenskart.jpg"
import booking from "../Components/Images/booking.jpg"
import nordStrom from "../Components/Images/nordStrom.jpg"
// import lenskart from "../Components/Images/lenskart.jpeg"
import Github from "../Components/Github";
import GithubStreak from "../Components/GithubStreak";
import GithubStateCard from "../Components/GithubStateCard";
import GithubLanguage from "../Components/GithubLanguage";
const Projects = () => {
  return (
    <>
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
          PROJECTS
        </Text>
        <ProjectCard
          title="LensKart.com"
          discription="LensKart is basically an eyecare website with provide sunglasses , eyeglasses and blu-computer glasses at affordable prices"
          jsIcon={IoLogoJavascript}
          htmlIcon={SiHtml5}
          cssIcon={SiCss3}
          githubUrl="https://github.com/dharmikpuri/LensKart-Clone"
          netlifyUrl="https://eyecare-dharmikpuri.vercel.app/"
          banner={lenskart}
        />
        <ProjectCard 
          title="NordStrom.com"
          discription="Nordstrom is an Fashion website for Men's/Women's which sells various types of fashion Products"
          jsIcon={IoLogoJavascript}
          htmlIcon={SiHtml5}
          cssIcon={SiCss3}
          githubUrl="https://github.com/dharmikpuri/curved-lock-2854"
          netlifyUrl="https://nordstrom-five.vercel.app/"
          banner={nordStrom}
        />
        <ProjectCard  
          title="Booking.com"
          discription="Mbooking.com provides online reservation services. We act as an intermediary (agent) between guests who want to make an accommodation reservation and your hotel, property or temporary/vacation rental"
          jsIcon={SiReact}
          htmlIcon={SiChakraui}
          cssIcon={SiNetlify}
          githubUrl="https://github.com/Subham0629/crowded-push-1335"
          netlifyUrl="https://mbooking.vercel.app/"
          banner={booking}
        />
        <ProjectCard 
          title="Booking.com"
          discription="Mbooking.com provides online reservation services. We act as an intermediary (agent) between guests who want to make an accommodation reservation and your hotel, property or temporary/vacation rental"
          jsIcon={SiReact}
          htmlIcon={SiChakraui}
          cssIcon={SiNetlify}
          githubUrl="https://github.com/Subham0629/crowded-push-1335"
          netlifyUrl="https://mbooking.vercel.app/"
          banner={booking}
        />
        <Github/>
        <GithubStreak/>
        <GithubStateCard/>
       </Container>
      <GithubLanguage/>
     </>
  );
};

export default Projects;