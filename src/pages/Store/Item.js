import { Box, Button, Card, ChakraProvider, Flex, Heading, Image, Stack, StackDivider, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useParams } from "react-router";
import NavBar from "../Navbar/Navbar";
import { getSingleItem } from "../../auth/imgHandler";
import cart from '../../img/cart.png';
import { addToCart } from "../../auth/token";


export default function Item(){
    let {id} = useParams();

    const [item, setItem] = useState(getSingleItem(id));

    const handleCartClick = () =>{
        console.log(id);
        addToCart(id);

        window.location.href = '/store'
    }

    return(
        <ChakraProvider>
            <NavBar/>
            <Flex mt={14} justify={'center'}>
                <Card m={16} width={'5xl'} shadow={'dark-lg'} height={'lg'}>
                <Stack divider={<StackDivider/>} direction={'row'}>
                    <Box>
                    <Image src={item?.image} width={'lg'}/>
                    </Box>

                    <Stack px={8} py={20} width={'lg'} direction={'column'}>
                        <Heading size={'md'}>{item?.name}</Heading>

                        <Box mt={5}>
                            <Text>
                            {item?.brand}

                            </Text>
                        </Box>

                        <Box mt={24}>
                            <Heading size={'lg'} color={'#307af7'}>
                            RM{item?.price}

                            </Heading>
                        </Box>

                        <Box mt={1}>
                            <Button rightIcon={<Cart/>} bg={'#262626'} _hover={{bg: "#404040"}} color={'white'} onClick={handleCartClick}>
                                Add to cart
                            </Button>
                        </Box>
                    </Stack>
                </Stack>
                </Card>
            </Flex>
        </ChakraProvider>
    )
}

function Cart(){

    return(
        <>                    
        <img src={`${cart}`} alt="" style={{objectFit: 'scale-down', height: '25px',}}/>
        </>
    )
}