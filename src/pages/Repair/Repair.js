import { Box, Button, Card, CardBody, CardHeader, Center, ChakraProvider, Checkbox, CheckboxGroup, Flex, Heading, Select, Stack, StackDivider } from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import NavBar from "../Navbar/Navbar";
import { removeTempRepair, tempRepair } from "../../auth/token";

export default function Repair(){

    removeTempRepair();

    const [formData, setFormData] = useState({
        device_type: "",
        general: false,
        upgrade: false,
        reformat: false,
        battery: false,
        shipping: ''

    });

    const batteryBox = useRef(null);

    const [isDisabled, setIsDisabled] = useState(false);

    const [defaultCheckbox, setDefaultCheckbox] = useState(false);
    

    const handleSelectDevice = (e)=>{
        setFormData({
            ...formData,
            device_type: e.target.value,
        });

        if(e.target.value === 'Laptop'){
            setIsDisabled(false);
        }
        else if(e.target.value === 'PC'){
            setIsDisabled(true);
            if(formData['battery'] === true){
                batteryBox.current.focus();
                batteryBox.current.click();
            }
        }
    }

    const handleCheck = (e)=>{
        setFormData({...formData, [e.target.name]: e.target.checked});
    };

    const handleSubmit = (e)=>{
        e.preventDefault();

        const checkboxValues = ["general", "upgrade", "reformat", "battery"].map(item => formData[item]);
        if (!checkboxValues.some(value => value)) {
            alert("Please select at least one service option.");
        } else {
            console.log(formData);
            tempRepair(formData);
            window.location.href = '/repair-confirm';        
        }
        

    };
    
    return (
        <ChakraProvider>
            <NavBar/>
            
            <Flex mt={14} justify={'center'}>
                <Card m={16} width={'md'} shadow={'dark-lg'}>
                    <CardHeader>
                        <Center>
                        <Heading size={'md'}>Device details</Heading>
                        </Center>
                    </CardHeader>

                    <CardBody>
                        <form onSubmit={handleSubmit}>
                        <Stack divider={<StackDivider/>} spacing={4}>
                            <Box>
                                <Heading size={'xs'} mb={1.5}>
                                    Device Type
                                </Heading>
                                <Select placeholder="Device type"
                                isRequired 
                                onChange={handleSelectDevice}>
                                    <option value={'Laptop'}>Laptop</option>
                                    <option value={'PC'}>Personal computer (PC)</option>
                                </Select>
                            </Box>

                            <Box>
                                <Heading size={'xs'} mb={1.5}>
                                    Service option
                                </Heading>
                                <CheckboxGroup defaultValue={defaultCheckbox}>
                                    <Stack direction={'row'}>
                                        <Stack direction={'column'}>
                                            <Checkbox value={'general'} name="general" defaultChecked={formData["general"] || false} onChange={handleCheck}>General maintenance</Checkbox>
                                            <Checkbox value={'upgrade'} name="upgrade" checked={formData["upgrade"] || false} onChange={handleCheck}>Upgrade spec</Checkbox>
                                        </Stack>
                                        <Stack direction={'column'}>
                                            <Checkbox value={'reformat'} name="reformat" checked={formData["reformat"] || false} onChange={handleCheck}>Reformat</Checkbox>
                                            <Checkbox value={'battery'} name="battery" checked={formData["battery"] || false} onChange={handleCheck} isDisabled={isDisabled} ref={batteryBox}>Replace battery</Checkbox>
                                        </Stack>
                                    </Stack>
                                </CheckboxGroup>
                            </Box>
                            
                            <Box>
                                <Heading size={'xs'} mb={1.5}>
                                    Shipping option
                                </Heading>
                                <Select placeholder="Shipping option" 
                                isRequired
                                onChange={
                                    (e)=>{
                                        setFormData({
                                            ...formData,
                                            shipping: e.target.value
                                        });
                                    }
                                }>
                                    <option value={'Postage'}>Postage</option>
                                    <option value={'Dropoff'}>Dropoff</option>
                                </Select>
                            </Box>

                            <Button type="submit">Submit</Button>
                        </Stack>
                        </form>
                    </CardBody>
                </Card>
            </Flex>
        </ChakraProvider>
    );
}