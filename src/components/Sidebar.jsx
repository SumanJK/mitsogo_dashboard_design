import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

import logo from "../assets/acmeLogo.svg";
import inbox from "../assets/inbox.svg";
import list from "../assets/list.svg";
import stat from "../assets/stat.svg";
import setting from "../assets/setting.svg";
import home from "../assets/home.svg";

const Sidebar = ({ sidebarStatus }) => {
  return (
    <Box
      className="sidebar"
      w={sidebarStatus ? "16%" : "0"}
      bg="#43425D"
      transition="all .4s ease"
      color="white"
    >
      <Flex align="center" h="70px" w="100%" px="1.2rem" bg="#3C3B54">
        <Image src={logo} width="50%" />
      </Flex>

      <Box>
        <Flex
          h="54px"
          align="center"
          px="1rem"
          _hover={{ bg: "#3C3B54" }}
          _active={{ borderLeft: "3px solid #fff" }}
          cursor="pointer"
        >
          <Image w="10%" src={home} />
          <Text px=".8rem">Home</Text>
        </Flex>
        <Flex
          h="54px"
          align="center"
          px="1rem"
          _hover={{ bg: "#3C3B54" }}
          _active={{ borderLeft: "3px solid #fff" }}
          cursor="pointer"
        >
          <Image w="10%" src={stat} />
          <Text px=".8rem">Dashboard</Text>
        </Flex>
        <Flex
          h="54px"
          align="center"
          px="1rem"
          _hover={{ bg: "#3C3B54" }}
          _active={{ borderLeft: "3px solid #fff" }}
          cursor="pointer"
        >
          <Image w="10%" src={inbox} />
          <Text px=".8rem">Inbox</Text>
        </Flex>
        <Flex
          h="54px"
          align="center"
          px="1rem"
          _hover={{ bg: "#3C3B54" }}
          _active={{ borderLeft: "3px solid #fff" }}
          cursor="pointer"
        >
          <Image w="10%" src={list} />
          <Text px=".8rem">Products</Text>
        </Flex>
        <Flex
          h="54px"
          align="center"
          px="1rem"
          _hover={{ bg: "#3C3B54" }}
          _active={{ borderLeft: "3px solid #fff" }}
          cursor="pointer"
        >
          <Image w="10%" src={setting} />
          <Text px=".8rem">Admin</Text>
        </Flex>
      </Box>
    </Box>
  );
};

export default Sidebar;
