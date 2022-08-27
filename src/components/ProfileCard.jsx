import {
  Avatar,
  Box,
  Center,
  Divider,
  Flex,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";


import { HiPencil } from "react-icons/hi";
import { BiDotsVerticalRounded } from "react-icons/bi";

import DrewAvatar from "../assets/profile-pic-03.jpg";
import BavidAvatar from "../assets/profile-pic-02.jpg";
import LavidAvatar from "../assets/profile-pic-04.jpg";


import profilePic from "../assets/profile-pic-01.jpg";
import twitterLogo from "../assets/twitter.svg";
import facebookLogo from "../assets/facebook.svg";
import linkedInLogo from "../assets/linkedIn.svg";
import whatsappLogo from "../assets/whatsapp.svg";

const ProfileCard = () => {
  return (
    <Box  color="#4D4F5C" >
      <Box  py='1.4rem '> 
        <Flex h="80px" justify="center">
          <Box w="80px" position="relative" >
            <Avatar size='sm' src={profilePic} w="100%" h="100%" />
            <Center
              position="absolute"
              bg="#6763E3"
              h="1.4rem"
              w="1.4rem"
              bottom="0"
              right="0"
              borderRadius="50%"
              // border="2px solid white"
            >
              <HiPencil color="#fff" fontSize="12px" />
            </Center>
          </Box>
        </Flex>
        <VStack justify="center" w="100%" my='.6rem' gap='.4rem' >
          <Text fontWeight="700" fontSize="16px">
            Nick Herasimenka
          </Text>
          <Text fontWeight="500" fontSize="14px" color="#A4AFB7">
            United States
          </Text>
          <Flex w='100%' justify="center">
            <Flex color="#A4AFB7" align="center" justify="space-between"  w='8rem'>
              <Image transition='all .3s ease' cursor='pointer' _hover={{transform:'scale(1.14)', transition:'all .3s ease'}} w='15%' h='80%' src={twitterLogo}/>
              <Image transition='all .3s ease' cursor='pointer' _hover={{transform:'scale(1.14)', transition:'all .3s ease'}} w='15%' h='80%' src={facebookLogo}/>
              <Image transition='all .3s ease' cursor='pointer' _hover={{transform:'scale(1.14)', transition:'all .3s ease'}} w='15%' h='80%' src={linkedInLogo}/>
              <Image transition='all .3s ease' cursor='pointer' _hover={{transform:'scale(1.14)', transition:'all .3s ease'}} w='15%' h='80%' src={whatsappLogo}/>
            </Flex>
          </Flex>
        </VStack>
      </Box>
      <Divider w='85%' margin='auto'/>
      <Box m='1.4rem 1.4rem' >
        <Flex align='center' justify='space-between'  >
          <Text>Our Users</Text>
          <BiDotsVerticalRounded fontSize='20px' color="#A4AFB7"/>
        </Flex>
        <VStack  mt='2rem' gap={'.5rem'} >
          <Flex w='100%' >
            <Flex w='15%'>
              <Center>
                <Avatar size='sm' src={DrewAvatar}/>
              </Center>
            </Flex>
              <Box w='80%'  textAlign='left'>
                <Text fontWeight='600' fontSize='14'>Drew James</Text>
                <Flex justify='space-between' color='#A4AFB7'>
                  <Text fontSize='12px'>United States</Text>
                  <Text fontSize='12px'>Mobile: 9937903731</Text>
                </Flex>
              </Box>
          </Flex>
          <Flex w='100%' align='center' >
            <Flex w='15%'>
              <Center>
                <Avatar size='sm' src={BavidAvatar}/>
              </Center>
            </Flex>
              <Box w='80%'  textAlign='left'>
                <Text fontWeight='600' fontSize='14'>Bavid Kames</Text>
                <Flex justify='space-between' color='#A4AFB7'>
                  <Text fontSize='12px'>United States</Text>
                  <Text fontSize='12px'>Mobile: 9937903731</Text>
                </Flex>
              </Box>
          </Flex>
          <Flex w='100%' >
            <Flex w='15%'>
              <Center>
                <Avatar size='sm' src={LavidAvatar}/>
              </Center>
            </Flex>
              <Box w='80%'  textAlign='left'>
                <Text fontWeight='600' fontSize='14'>Lavid Emes</Text>
                <Flex justify='space-between' color='#A4AFB7'>
                  <Text fontSize='12px'>United States</Text>
                  <Text fontSize='12px'>Mobile: 9937903731</Text>
                </Flex>
              </Box>
          </Flex>
        </VStack>
      </Box>
    </Box>
  );
};

export default ProfileCard;
