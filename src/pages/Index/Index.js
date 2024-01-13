import React, { useRef } from "react";
import NavBar from "../Navbar/Navbar";
import { Box, Button, Card, ChakraProvider, Divider, Flex, Heading, Image, ListItem, Stack, UnorderedList } from "@chakra-ui/react";
import compImage from '../../img/compIndex.webp'

function Index(){

    const scrollRef1 = useRef(null);

    const scrollRef2 = useRef(null);


    const handleSendNowClick = () =>{
        window.location.href = "/repair";
    }

    const handleOptionsClick = ()=>{
        scrollRef1.current?.scrollIntoView({behavior: 'smooth'});
    }

    const handleDIYClick = ()=>{
        scrollRef2.current?.scrollIntoView({behavior: 'smooth'});
    }
    

    return (
        <ChakraProvider>
        <NavBar/>
        <Flex mt={64} id="repairBox" justify={'center'} align={'center'}>
            <Card width={'full'} p={12} bg={'#262626'} align={'center'} color={'white'} mb={'15rem'}>
                <Heading>
                    Want to send your laptop for repair?
                </Heading>
                <Box mt={8}>
                    <Button onClick={handleSendNowClick} mr={6}>
                        Send Now
                    </Button>
                    <Button onClick={handleOptionsClick}>
                        Options
                    </Button>
                </Box>
            </Card>
        </Flex>

        <Box opacity={0} ref={scrollRef1}></Box>

        <Flex justify={'center'}>
            <Card width={'full'} bg={'#262626'} color={'white'} py={6} mt={'15rem'} mb={'20rem'}>
                <Stack direction={'row'}>
                <Heading p={24}>
                    Service Available
                </Heading>
                <Divider orientation="vertical"/>
                <UnorderedList p={12} spacing={5}>
                    <ListItem>
                        General maintenance
                    </ListItem>
                    <ListItem>
                        Upgrade system spec
                    </ListItem>
                    <ListItem>
                        Reformat
                    </ListItem>
                    <ListItem>
                        Change battery
                    </ListItem>
                </UnorderedList>
                </Stack>

                <Flex align={'center'} justify={'center'} mt={6}>
                    <Button onClick={handleDIYClick}>
                        Do it Yourself
                    </Button>
                </Flex>
            </Card>
        </Flex>

        <Box opacity={0} ref={scrollRef2}></Box>

        <Flex>
            <Card width={'full'} bg={'#262626'} color={'white'} mt={'20rem'} py={6}>
                <Stack direction={'row'}>
                    <Box>
                        bunch of images
                    </Box>
                    <Divider orientation="vertical"/>
                    <Box>
                        Click here basterd
                    </Box>
                </Stack>
            </Card>
        </Flex>
        </ChakraProvider>
    );
}

export default Index;