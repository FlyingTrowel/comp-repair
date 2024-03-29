import { Button, Card, ChakraProvider, Flex, Image, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import React from "react";
import NavBar from "../Navbar/Navbar";
import { getItem } from "../../auth/imgHandler";

function Cart (){

    const items = getItem();

    let cart = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : null;
    
    if(!cart)
        cart = localStorage.getItem("tempCart") ? JSON.parse(localStorage.getItem("tempCart")) : null;


    const handleCheckoutClick = (id)=>{
        window.location.href = `/checkout/${Number(id)}`
    }

    return (
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
                                <Th>
                                    Checkout
                                </Th>
                            </Tr>
                        </Thead>

                        <Tbody>
                            {
                                cart?.map((item, index)=>(
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
                                        <Td>
                                            <Button onClick={()=> handleCheckoutClick(item)} bg={'#262626'} _hover={{bg: "#404040"}} color={'white'}>Checkout</Button>
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

export default Cart;