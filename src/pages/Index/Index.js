import React from "react";
import NavBar from "../Navbar/Navbar";
import { Box, ChakraProvider } from "@chakra-ui/react";

function Index(){

    return (
        <ChakraProvider>
        <NavBar/>
        <Box mt={14}>
            Index
        </Box>
        </ChakraProvider>
    );
}

export default Index;