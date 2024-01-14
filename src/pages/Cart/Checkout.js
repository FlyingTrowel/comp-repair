import { Card, CardBody, CardHeader, Center, ChakraProvider, Flex, Heading, Spinner, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import NavBar from "../Navbar/Navbar";
import { useParams } from "react-router";

export default function Checkout(){
    const {id} = useParams();
    const [isLoading, setIsLoading] = useState(true);

    let cart = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : null;
    let history = localStorage.getItem("history") ? JSON.parse(localStorage.getItem("history")) : null;
    history.push(Number(id));


    useEffect(() => {

        cart = cart.filter(item => item !== Number(id));

        localStorage.setItem("cart", JSON.stringify(cart));
        localStorage.setItem("history", JSON.stringify(history));


        const timer = setTimeout(() => {
          setIsLoading(false);
          window.location.href = '/store-history';  // Redirect after 5 seconds
        }, 5000);  // 5 seconds
    
        return () => clearTimeout(timer);  // Clean up on component unmount
      }, []);

    
    return(
        <ChakraProvider>
            <NavBar/>
            <Flex mt={14} justify={'center'}>
            <Card m={16} width={'md'} shadow={'dark-lg'}>
                <CardHeader>
                    <Center>
                    <Heading size={'md'} color={'green'}>
                        Payment Success
                    </Heading>
                    </Center>
                </CardHeader>
                <CardBody>
                <Center>
                {isLoading ? <Spinner size={'xl'}/> : <Text>Your payment has been processed.</Text>}
                </Center>
            </CardBody>
            </Card>
            </Flex>
        </ChakraProvider>
    )
}