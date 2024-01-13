import { Box, Button, Card, CardBody, CardHeader, Center, ChakraProvider, Checkbox, CheckboxGroup, Flex, Heading, Input, Stack, StackDivider, Text } from "@chakra-ui/react";
import React from "react";
import NavBar from "../Navbar/Navbar";
import { useParams } from "react-router";

export default function RepairAction(){

    let {id} = useParams();

    const repair = JSON.parse(localStorage.getItem("repairHistory"));

    return(
        <ChakraProvider>
            <NavBar/>
            <Flex mt={14} justify={'center'}>
                <Card m={16} width={'3xl'} shadow={'dark-lg'}>
                    <CardHeader>
                        <Center>
                            <Heading size={'md'}>
                                Repair details
                            </Heading>
                        </Center>
                    </CardHeader>

                    <CardBody>
                        <Stack divider={<StackDivider/>} spacing={4} direction={'row'}>
                            <Box>
                                <Heading size={'sm'} mb={1.5}>
                                    Information
                                </Heading>

                                <Stack divider={<StackDivider/>} spacing={4}>
                                <Box>
                                    <Heading size={'xs'} mb={1.5}>
                                        Device Type
                                    </Heading>
                                    <Input isDisabled={'true'} value={repair[id].device_type}/>
                                </Box>

                                <Box>
                                    <Heading size={'xs'} mb={1.5}>
                                        Service Option
                                    </Heading>
                                    <CheckboxGroup>
                                    <Stack direction={'row'}>
                                        <Stack direction={'column'}>
                                            <Checkbox defaultChecked={repair[id].general} isDisabled>General maintenance</Checkbox>
                                            <Checkbox defaultChecked={repair[id].upgrade} isDisabled>Upgrade spec</Checkbox>
                                        </Stack>
                                        <Stack direction={'column'}>
                                            <Checkbox defaultChecked={repair[id].reformat} isDisabled>Reformat</Checkbox>
                                            <Checkbox defaultChecked={repair[id].battery} isDisabled>Replace battery</Checkbox>
                                        </Stack>
                                    </Stack>
                                </CheckboxGroup>
                                </Box>

                                <Box>
                                    <Heading size={'xs'} mb={1.5}>
                                        Shipping option
                                    </Heading>
                                    <Input isDisabled={'true'} value={repair[id].shipping}/>
                                </Box>
                            </Stack>
                            </Box>

                            <Box>
                                <Heading size={'sm'} mb={1.5}>
                                    Shipping details
                                </Heading>
                                <Text mb={2}>
                                    {(repair[id].shipping === "postage") 
                                    ?
                                    "Please ship to the following address: "
                                    :
                                    "Please drop off your device at the following address: "
                                    }
                                </Text>
                                <Text>
                                    No 1. Alamat Kedai<br/>
                                    Lorong Banyak Kedai<br/>
                                    02600 Arau<br/>
                                    Perlis
                                </Text>
                                
                                <Center mt={16}>
                                <Button onClick={() => {window.location.href = '/repair-history'}}>
                                    Confirm
                                </Button>
                                </Center>
                                
                            </Box>
                        </Stack>
                    </CardBody>
                </Card>
            </Flex>
        </ChakraProvider>
    )
}