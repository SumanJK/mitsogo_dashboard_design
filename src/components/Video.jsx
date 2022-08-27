import { Box, Center, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { BsFillPlayFill } from "react-icons/bs";

const Video = () => {
  return (
    <Box p=" .6rem 1rem" color="#4D4F5C" h="100%">
      <Flex align="center" justify="space-between" h="10%" mb="2%">
        <Text>Product Video</Text>
        <BiDotsVerticalRounded fontSize="20px" color="#A4AFB7" />
      </Flex>
      <Flex
        w="100%"
        h="85%"
        align="center"
        justify="center"
        borderRadius="8px"
        position="relative"
        role="group"
        cursor="pointer"
        overflow="hidden"
      >
        <Image
          w="100%"
          h="100%"
          src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          transition="all .3s ease"
          _groupHover={{
            filter: "brightness(80%)",
            transition: 'all .4s ease'
          }}
        />
        <Flex
          zIndex={"200"}
          position="absolute"
          align="center"
          justify="center"
          bg="#ffffff3f"
          w="3.5rem"
          h="3.5rem"
          borderRadius="50%"
          transition="all .3s ease"
          _groupHover={{ transform: "scale(1.08)", transition: "all .3s ease" }}
        ></Flex>
        <Center
          position="absolute"
          h="3rem"
          w="3rem"
          bg="white"
          color="#A4AFB7"
          borderRadius="50%"
        >
          <BsFillPlayFill fontSize="24px" />
        </Center>
      </Flex>
    </Box>
  );
};

export default Video;
