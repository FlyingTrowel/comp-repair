import { Box, Button, Card, CardBody, CardFooter, CardHeader, Center, ChakraProvider, Checkbox, CheckboxGroup, Divider, Flex, Heading, Image, NumberInput, NumberInputField, Stack, StackDivider, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import NavBar from "../Navbar/Navbar";
import { getItem } from "../../auth/imgHandler";
import { Link as ReactRouterLink } from "react-router-dom";

export default function Store(){
    const [filter, setFilter] = useState({
        Kingston: false,
        Crucial: false,
        Nvidia: false,
        AMD: false,
        Intel: false,
        min_price: 0,
        max_price: 0,
    });

    let rows = [];

    const items = getItem();


    const [filteredItems, setFilteredItems] = useState(items);

    console.log(filteredItems);

    useEffect(() => {
        setFilteredItems(items.filter(item => 
          (filter[item.brand] || Object.values(filter).every(v => !v)) && 
          (item.price >= filter.min_price && (filter.max_price === 0 || item.price <= filter.max_price))
        ));
        console.log("useeffect");
    }, [filter, items]);

    
    const handleCheck = (e) =>{
    setFilter({...filter, [e.target.name]: e.target.checked});
    }

    for (let i = 0; i < items.length; i += 3) {
        rows.push(items.slice(i, i + 3));
    }

    return(
        <ChakraProvider>
            <NavBar/>
            <Flex mt={14} justify={'center'}>
                {/*search*/}
                <Stack divider={<StackDivider/>} direction={'row'} width={'7xl'} m={12}>
                    <Stack divider={<StackDivider/>} direction={'column'} width={'2xs'} mt={16}>
                        {/*filter*/}
                        <Box>
                            <Heading size={'xs'} mb={'1.5'}>
                                Brand
                            </Heading>
                            <CheckboxGroup>
                                <Stack direction={'column'}>
                                    <Checkbox value={'Kingston'} name="Kingston" defaultChecked={filter["Kingston"] || false} onChange={handleCheck}>Kingston</Checkbox>
                                    <Checkbox value={'Crucial'} name="Crucial" defaultChecked={filter["Crucial"] || false} onChange={handleCheck}>Crucial</Checkbox>
                                    <Checkbox value={'Nvidia'} name="Nvidia" defaultChecked={filter["Nvidia"] || false} onChange={handleCheck}>Nvidia</Checkbox>
                                    <Checkbox value={'AMD'} name="AMD" defaultChecked={filter["AMD"] || false} onChange={handleCheck}>AMD</Checkbox>
                                    <Checkbox value={'Intel'} name="Intel" defaultChecked={filter["Intel"] || false} onChange={handleCheck}>Intel</Checkbox>
                                </Stack>
                            </CheckboxGroup>
                        </Box>

                        <Box>
                            <Heading size={'xs'} mb={'1.5'}>
                                Price
                            </Heading>
                            <Stack direction={'row'}>
                                <Box width={'24'}>
                                <NumberInput precision={2} step={0.2}>
                                <NumberInputField 
                                onChange={(e) => 
                                setFilter({...filter, min_price: e.target.value})}
                                value={filter['min_price']}
                                placeholder="min"/>
                                </NumberInput>
                                </Box>

                                <Divider width={12} ml={3} mt={5} mr={3}/>

                                <Box width={'24'}>
                                <NumberInput precision={2} step={0.2}>
                                <NumberInputField 
                                onChange={(e) => 
                                    setFilter({...filter, max_price: e.target.value})}
                                    value={filter['max_price']}
                                    placeholder="max"/>
                                </NumberInput>
                                </Box>

                            </Stack>
                        </Box>
                    </Stack>

                    <Stack divider={<StackDivider/>} direction={'column'} mt={12}>
                        {rows.map((rowItems, rowIndex) => (
                        <Stack key={rowIndex} divider={<StackDivider/>} direction={'row'}>
                            {rowItems.map((item, itemIndex) => {
                            // Calculate the original index
                            const originalIndex = rowIndex * 3 + itemIndex;
                            return (
                                <ReactRouterLink key={originalIndex} to={`/item/${originalIndex}`}>
                                <Card width={'200px'} height={'300px'} mx={6} shadow={'none'}>
                                    <CardBody p={0}>
                                    <Image src={item.image} boxSize={'200px'}/>
                                    <Text fontSize={'sm'}>{item.name}</Text>
                                    <Text fontSize={'md'} mt={3} color={"#307af7"}>RM{item.price}</Text>
                                    </CardBody>
                                </Card>
                                </ReactRouterLink>
                            );
                            })}
                        </Stack>
                        ))}
                    </Stack>
                </Stack>
            </Flex>
            store
        </ChakraProvider>
    );
}