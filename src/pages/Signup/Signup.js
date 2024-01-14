import { Box, Card, CardBody, CardHeader, ChakraProvider, Flex, FormControl, Heading, Input, Stack, Text, Link as ChakraLink, Center, Button, useToast, IconButton, useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, DrawerFooter} from "@chakra-ui/react";
import React, { useState } from "react";
import NavBar from "../Navbar/Navbar";
import { Link as ReactRouterLink } from "react-router-dom";
import {createAccount, isTempRepair} from '../../auth/token';
import { InfoIcon } from "@chakra-ui/icons";
import users from '../../auth/users.json'

function Signup(){

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const [isLoading, setIsLoading] = useState(false);

    const toast = useToast();

    const btnRef = React.useRef(); 

    const handleSubmit = (e) =>{
        e.preventDefault();
        setIsLoading(true);

        console.log(formData);
        createAccount(formData);

        if(false){

            isTempRepair() ? window.location.href = '/repair-confirm' : window.location.href = '/';
        }
        else{
            console.log("wrong password or username");
            toast({
                title: 'Error.',
                description: "Wrong username or password",
                status: 'error',
                duration: 9000,
                isClosable: true,
            });
            setIsLoading(false);

        }
    }

    return (
        <ChakraProvider>
            <NavBar/>
            <Flex  align={'center'} justify={'center'} mt={32} p={12}>
                <Box id="loginBox">
                    <Card width={'md'} shadow={'base'} bgColor={'#333333'}>
                        <CardHeader color={'#dbbf91'}>
                            <Center>
                            <Heading size={'md'}>
                            Signup
                            </Heading>
                            </Center>
                        </CardHeader>

                        <CardBody>
                            <form onSubmit={handleSubmit}>
                                <FormControl id="username">
                                <Text ml={2} mb={2} color={'white'}>Username</Text>
                                <Input
                                    borderColor={'#8c8c8c'}
                                    size="md"
                                    bgColor={'white'} 
                                    rounded={'md'}
                                    mb={5}
                                    placeholder="Username"
                                    required
                                    value={formData.username}
                                    onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                                />
                                </FormControl>

                                <FormControl id="password">
                                <Text ml={2} mb={2} color={'white'}>Username</Text>
                                <Input
                                    borderColor={'#8c8c8c'}
                                    type="password"
                                    size="md"
                                    bgColor={'white'} 
                                    rounded={'md'}
                                    mb={5}
                                    placeholder="Password"
                                    required
                                    value={formData.password}
                                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                />
                                </FormControl>

                                <Box mb={2} color={'white'}>
                                    <ChakraLink as={ReactRouterLink} to='/login' ml={2}>
                                    Want to login instead?
                                    </ChakraLink>
                                </Box>
                                <Center>
                                <Button mb={0.5} rounded={'3xl'} size="md" type="submit" colorScheme="blackAlpha" isLoading={isLoading} color={'#dbbf91'}>
                                Signup
                                </Button>
                                </Center>
                            </form>
                        </CardBody>
                    </Card>
                </Box>
            </Flex>

        </ChakraProvider>
    );
}

export default Signup;