import { Box, Button, FormControl, Input, Stack } from '@chakra-ui/react';
import { Text } from '@chakra-ui/layout';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import image from "./Image/agri.jpg"

const Login = () => {
    let [user,setUser]=useState("");
    let [password,SetPassword]=useState("");

    let navigate=useNavigate();


let hardCodedUser="Radha";
let hardCodedPassword="Radha@797";



    let handleSubmit=(e)=>{
        e.preventDefault();
       if(user===hardCodedUser && password===hardCodedPassword){
        localStorage.setItem("user",user);
        localStorage.setItem("password",password);
        alert("login successful");
        navigate("/portfolio")
       }
       else{
        console.log("login");
        navigate("/")
       }
    }
  return (
    
        <Box border="2px solid" bg={`url(${image})`} bgSize="cover" bgPosition="center" bgRepeat="no-repeat" h="100vh"  display="flex" justifyContent="center" alignContent="center"  >
              <FormControl border="2px solid" action="" display="flex" justifyContent="center" alignItems="center" flexDirection="column"  focusColor="white.200" bg={`url(${image})`} bgSize="contain" bgPosition="center" bgRepeat="no-repeat"   >
                  <Stack spacing={4} border="2px solid" w="25vw" display="flex"  justifyContent="center"  alignContent="center" borderRadius="10"  >
                        <Text color="black" fontWeight="bold">Login Form</Text>
                        <Input type="text" id='user' name='user' placeholder='enter your name' onChange={(e)=>{setUser(e.target.value)}} size="md" w="20vw" css={{'::placeholder':{color:'white'}}} />
                        <Input type="password" name='password' id='password' placeholder='password' onChange={(e)=>{SetPassword(e.target.value)}} size="md"  w="20vw" css={{'::placeholder':{color:'white'}}}/>
                        <Button onClick={handleSubmit} vw="20vw" bg="skyblue">Login</Button>
                   </Stack>
             </FormControl>
       </Box>
  )
}

export default Login