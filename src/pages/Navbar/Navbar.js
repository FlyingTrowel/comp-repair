import React from "react";
import { ChakraProvider, Flex, Box, Spacer, Menu, MenuButton, MenuList, MenuGroup, MenuItem, Link as ChakraLink} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Link as ReactRouterLink } from "react-router-dom";

import logo from '../../img/logo.png';
import cart from '../../img/cart.png';
import cartNoti from '../../img/cartNoti.png';
import { isAuth, logout } from "../../auth/token";



export default function NavBar(){


    return(
        <ChakraProvider>
            <Flex bgColor={'#121212'} height={'14'} width={'full'} p={2} position={'fixed'} top={'0'} shadow={'base'} pl={10} pr={10} align={'center'} zIndex={'sticky'}>

                <Box height={'10'} color={"#307af7"}>
                    <ReactRouterLink to={"/"}>
                    <img src={`${logo}`} alt="" style={{objectFit: 'scale-down', height: '100%',}}/>
                    </ReactRouterLink>
                </Box>

                <Box ml={10} color={'#dbbf91'}>
                    {
                        !isAuth() ? 
                        <ChakraLink as={ReactRouterLink} to={'/repair'}>
                        Repair
                        </ChakraLink>
                        :
                        <Menu colorScheme="blue">
                        <MenuButton>Repair<ChevronDownIcon/></MenuButton>
                        <MenuList bg={"#121212"}>
                            <MenuItem as={ReactRouterLink} to={'/repair'} bg={"#121212"} _hover={{bg: "#262626"}}>Repair Reservation</MenuItem>
                            <MenuItem as={ReactRouterLink} to={'/repair-history'} bg={"#121212"} _hover={{bg: "#262626"}}>Repair History</MenuItem>

                        </MenuList>
                    </Menu>
                    }
                    
                </Box>

                <Box ml={10} color={'#dbbf91'}>
                    <ChakraLink as={ReactRouterLink} to={'/store'}>
                        Store
                    </ChakraLink>
                </Box>

                <Spacer/>

                <Box color={'#dbbf91'} mr={8}>
                    <ReactRouterLink to={"/cart"}>
                    {localStorage.getItem("cart") ? 
                    <img src={`${cartNoti}`} alt="" style={{objectFit: 'scale-down', height: '25px',}}/>
                    : 
                    <img src={`${cart}`} alt="" style={{objectFit: 'scale-down', height: '25px',}}/>}
                    
                    </ReactRouterLink>
                </Box>
                <Box color={'#dbbf91'}>
                    

                    <Menu colorScheme="blue">
                        <MenuButton>{localStorage.getItem("username")? localStorage.getItem("username"): "guest"}<ChevronDownIcon/></MenuButton>
                        <MenuList bg={"#121212"}>
                            {
                                !isAuth() ?
                                <> 
                                <MenuItem as={ReactRouterLink} to={'/login'} bg={"#121212"} _hover={{bg: "#262626"}}>Login</MenuItem>
                                <MenuItem as={ReactRouterLink} to={'/signup'} bg={"#121212"} _hover={{bg: "#262626"}}>Signup</MenuItem>
                                </>
                                :
                                null
                            }
                            
                            {
                            isAuth() ? 
                            <>
                            <MenuItem onClick={()=>{
                                logout();
                                window.location.href = "/";
                            }} bg={"#121212"} _hover={{bg: "#262626"}}>Logout</MenuItem>
                            </>
                            : 
                            null}
                        </MenuList>
                    </Menu>
                </Box>
            </Flex>
        </ChakraProvider>
    )
}