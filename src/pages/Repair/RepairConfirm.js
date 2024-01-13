import { Box, Button, Card, CardBody, CardHeader, Center, ChakraProvider, Checkbox, CheckboxGroup, Flex, Heading, Input, Stack, StackDivider } from "@chakra-ui/react";
import React from "react";
import NavBar from "../Navbar/Navbar";
import { saveRepair } from "../../auth/token";

export default function RepairConfirm(){

    let tempRepair = "";
    let isDisabled = false;
    try{
        tempRepair = JSON.parse(localStorage.getItem("tempRepair"));
        console.log(tempRepair);
        isDisabled = (tempRepair.device_type === "PC") ? true : false;
        console.log(isDisabled);
    }catch{
        console.log("tempRepair doesnt exist");
    }

    const handleSubmit = (e) =>{
        e.preventDefault();

        console.log(tempRepair);
        
        saveRepair();

        const repairHistory = JSON.parse(localStorage.getItem("repairHistory"));

        console.log(repairHistory);


        const lastIndexRepair = repairHistory.length - 1;
        console.log(lastIndexRepair);

        window.location.href = `/repair-action/${lastIndexRepair}`;
    }

    const handleCancel = () =>{
        window.location.href = '/repair';
    }

    return (
        <ChakraProvider>
            <NavBar/>
            <Flex mt={14} justify={'center'}>
                <Card m={16} width={'md'} shadow={'dark-lg'}>
                    <CardHeader>
                        <Center>
                        <Heading size={'md'}>
                            Repair Confirmation
                        </Heading>
                        </Center>
                    </CardHeader>

                    <CardBody>
                        <form onSubmit={handleSubmit}>
                            <Stack divider={<StackDivider/>} spacing={4}>
                                <Box>
                                    <Heading size={'xs'} mb={1.5}>
                                        Device Type
                                    </Heading>
                                    <Input isDisabled={'true'} value={tempRepair.device_type}/>
                                </Box>

                                <Box>
                                    <Heading size={'xs'} mb={1.5}>
                                        Service Option
                                    </Heading>
                                    <CheckboxGroup>
                                    <Stack direction={'row'}>
                                        <Stack direction={'column'}>
                                            <Checkbox defaultChecked={tempRepair.general} isDisabled>General maintenance</Checkbox>
                                            <Checkbox defaultChecked={tempRepair.upgrade} isDisabled>Upgrade spec</Checkbox>
                                        </Stack>
                                        <Stack direction={'column'}>
                                            <Checkbox defaultChecked={tempRepair.reformat} isDisabled>Reformat</Checkbox>
                                            <Checkbox defaultChecked={tempRepair.battery} isDisabled>Replace battery</Checkbox>
                                        </Stack>
                                    </Stack>
                                </CheckboxGroup>
                                </Box>

                                <Box>
                                    <Heading size={'xs'} mb={1.5}>
                                        Shipping option
                                    </Heading>
                                    <Input isDisabled={'true'} value={tempRepair.shipping}/>
                                </Box>

                                <Center>
                                <Stack direction={'row'} spacing={16}>
                                <Button type="submit">Confirm</Button>
                                <Button onClick={handleCancel}>Cancel</Button>
                                </Stack>
                                </Center>

                            </Stack>
                        </form>
                    </CardBody>
                </Card>
            </Flex>
        </ChakraProvider>
    );
}