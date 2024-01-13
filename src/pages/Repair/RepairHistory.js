import { Button, ChakraProvider, Flex, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import React from "react";
import NavBar from "../Navbar/Navbar";

export default function RepairHistory(){

    const history = JSON.parse(localStorage.getItem("repairHistory"));

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
                                    Device Type
                                </Th>
                                <Th>
                                    Shipping Method
                                </Th>
                                <Th>
                                    Repair Details
                                </Th>
                            </Tr>
                        </Thead>

                        <Tbody>
                            {
                                history.map((history, index)=>(
                                    <Tr>
                                        <Td>
                                            {index+1}
                                        </Td>
                                        <Td>
                                            {history.device_type}
                                        </Td>
                                        <Td>
                                            {history.shipping}
                                        </Td>
                                        <Td>
                                            <Button onClick={() => {window.location.href = `/repair-action/${index}`}} bg={'#262626'} _hover={{bg: "#404040"}} color={'white'}>Details</Button>
                                        </Td>
                                    </Tr>
                                ))
                            }
                        </Tbody>

                    </Table>
                </TableContainer>
            </Flex>
        </ChakraProvider>
    );
}