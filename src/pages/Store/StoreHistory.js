import React from "react";
import NavBar from "../Navbar/Navbar";
import { ChakraProvider, Flex, Button, Image, Table, TableContainer, Tbody, Td, Th, Thead, Tr  } from "@chakra-ui/react";
import { getItem } from "../../auth/imgHandler";

export default function StoreHistory(){
    const history = JSON.parse(localStorage.getItem("history"));
    const items = getItem();


    return(
        <ChakraProvider>
            <NavBar/>
            <Flex mt={14} justify={'center'}>
            <TableContainer mt={32}>
                    <Table variant={'striped'} width={'3xl'} m={16} shadow={'dark-lg'} rounded={'md'}>
                        <Thead>
                            <Tr>
                                <Th width={'10%'}>
                                    No.
                                </Th>
                                <Th>
                                    Image
                                </Th>
                                <Th>
                                    Name
                                </Th>
                            </Tr>
                        </Thead>

                        <Tbody>
                            {
                                history?.map((item, index)=>(
                                    <Tr>
                                        <Td>
                                            {index+1}
                                        </Td>
                                        <Td>
                                            {items[item].image ? 
                                             <Image src={items[item]?.image}/>
                                             : null}
                                        </Td>
                                        <Td>
                                            {items[item].name? items[item].name : null}
                                        </Td>
                                    </Tr>
                                ))
                            }
                        </Tbody>

                    </Table>
                </TableContainer>
            </Flex>
        </ChakraProvider>
    )
}