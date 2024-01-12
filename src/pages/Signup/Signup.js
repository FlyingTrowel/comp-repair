import React from "react";
import NavBar from "../Navbar/Navbar";
import { Box, ChakraProvider } from "@chakra-ui/react";


function Signup (){

    return (
        <ChakraProvider>
        <NavBar/>
        <Box mt={14}>
            Signup
        </Box>
        </ChakraProvider>
    );
}

export default Signup;