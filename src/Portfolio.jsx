import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { axiosInstance } from './helper/axiosInstance';
import { Box, Flex, Image, IconButton,Button,Link} from '@chakra-ui/react';
import { Text } from '@chakra-ui/layout';
import imag from "./Image/ae2549d3-a6ca-482e-9818-60958694797d.jpeg"
import {CiPhone, CiLinkedin} from "react-icons/ci"
import { MdOutlineMail} from "react-icons/md"
import { SiGithub} from "react-icons/si"



const Portfolio = () => {
    let [state,setState]=useState([]);
    let navigate=useNavigate();

    let handleLogout=()=>{
      if(window.confirm("Do you want to Logout")){
        localStorage.removeItem("user");
        localStorage.removeItem("password");
        alert("logout successful")
       navigate("/")
      }
      
    }
    
    useEffect(()=>{
      async  function details(){
        let {data}=await axiosInstance.get("/");
        setState(data)
        }
        details()
        
    },[])


    
  return (
<Box   bg="black"  overflowX="hidden"   h="100vh" >{state.map((e)=>{return(
    <Box mt="10" ml="10" mr="10"  vh="80vh">
       <Box  display="flex" justifyContent="end"  vh="5vh" >
      <Button  onClick={handleLogout}  color="blue">Logout</Button>
      </Box>

 <Box  mt="2" vh="75vh">
   <Box display="flex" justifyContent="center" w="90vw"  mt="2"  v="60vh">
      <Box    w="60vw"  >

        <Text fontSize="3xl" fontWeight="semibold">Welcome,I am</Text>
        <Text fontSize="5xl" fontWeight="bold" bgGradient="linear(to-r, cyan.400, purple.600, blue.500)" bgClip="text" >{e.name}</Text><br />
        <Text fontSize=".5xl" >{e.aboutMe.description}</Text>
     </Box >
     <Box  h="40vh"  justifyContent="start" >
       <Image  borderRadius="60%" w="150px" h="200px" mt="5" mr="5" src={imag}/>
     </Box>
    </Box><br />

      Project: <Link color="blue" href={e.aboutMe.href}>{e.aboutMe.Project}</Link><br /><br />
      Project Description:<br/><br/>
      <Text ml="85px">{e.aboutMe.ProjectDes}</Text>

 </Box><br />
   <Box  bg="#525252"  h="10vh" mt="7">
      <Text>Contact :</Text>

       <Flex  justifyContent="space-around">
         <Box><IconButton icon={<CiPhone/>} borderRadius="full" color="white" ></IconButton>   {e.Contact.number}</Box>        
         <Box><IconButton icon={<MdOutlineMail/>} borderRadius="full" color="white" ></IconButton><Link href={`mailto:${e.Contact.email}`} color="blue">Email</Link></Box>
         <Box><IconButton icon={<SiGithub/>} borderRadius="full" color="white" ></IconButton><Link href={e.Contact.Github} color="blue">GitHub</Link></Box>
         <Box><IconButton icon={<CiLinkedin/>} borderRadius="full" color="white" ></IconButton><Link href={e.Contact.linkedin} color="blue">Linkedin</Link></Box>

      </Flex>
  </Box>
 </Box>
  )})}
     
</Box>
    
  )
}

export default Portfolio