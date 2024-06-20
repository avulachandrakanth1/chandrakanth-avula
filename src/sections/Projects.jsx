import { Box, Grid, Text } from "@chakra-ui/react";
import React from "react";
import GitCalender from "../components/GitCalender/GitCalender";
import Stats from "../components/Statistics/Stats";
import ProjectCard from "../components/Card/ProjectCard";
import wipro from '../utils/Urja-Benefits.jpg'
import carlsberg from '../utils/carlsberg (1).png'

// const projects = [
//   {
//     id:1,
//     image: myntra,
//   }
// ]

const Projects = () => {
  return (
    <Box pb={"2rem"} bg={"#110c11"} id="projects">
      <Text
        fontSize={"2rem"}
        fontWeight={650}
        textAlign={"center"}
        color={"white"}
        pt={"1rem"}
      >
        Here are my works
      </Text>
      <Box pb={3} bg={"black"}>
        <Grid
          p={"1rem"}
          templateColumns={[
            "repeat(1,1fr)",
            "repeat(2,1fr)",
            "repeat(3,1fr)",
            "repeat(3,1fr)",
          ]}
          rowGap={["1rem", "1rem", "1rem"]}
          justifyContent={"center"}
          alignContent={"center"}
          w={"90vw"}
          // h={['none',"80vh"]}
          m={"auto"}
          mt={"2rem"}
        >
          <ProjectCard url={wipro} title={'Wipro URJA'} descp={''} techStack={["Angular", "Ionic", "TypeScript", "Bootstrap"]} />
          {/* descp={'Participated in a user engagement program enabling points collection via QR code scans and activities like quizzes and image uploads. Points were redeemable for cashback rewards. User login was via mobile number.'} */}
          <ProjectCard url={carlsberg} title={'Carlsberg'} descp={''} techStack={["Angular", "TypeScript","Bootstrap"]} />
        </Grid>
        <GitCalender />
        {/* <Calender/> */}
        <Stats />
      </Box>
    </Box>
  );
};

export default Projects;
