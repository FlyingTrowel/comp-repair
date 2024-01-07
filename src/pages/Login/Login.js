import { Box, ChakraProvider } from "@chakra-ui/react";
import React from "react";
import NavBar from "../Navbar/Navbar";

function Login(){

    return (
        <ChakraProvider>
            <NavBar/>
            <Box mt={14}>
            login
            </Box>
        </ChakraProvider>
    );
}

export default Login;