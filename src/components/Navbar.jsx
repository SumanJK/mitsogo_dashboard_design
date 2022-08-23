import {
  Avatar,
  Box,
  Button,
  Center,
  Flex,
  Icon,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { CgMenuLeft, CgSearch } from "react-icons/cg";
import { IoMdNotificationsOutline } from "react-icons/io";

import DrewAvatar from "../assets/profile-pic-02.jpg";
import AlexaAvatar from "../assets/profile-pic-06.jpg";
import EvaAvatar from "../assets/profile-pic-05.jpg";

const Navbar = () => {
  return (
    <Flex
      align="center"
      h="70px"
      w="100%"
      padding="0 20px"
      justify="space-between"
      background="#FFFFFF 0% 0% no-repeat padding-box"
      boxShadow="0px 2px 6px #0000000A"
      opacity="1"
      position="fixed"
    >
      <Flex
        className="leftNav"
        justify="space-between"
        w="30%"
        border="1px solid black"
      >
        <Center w="10%">
          <CgMenuLeft fontSize="24px" color="#7a7a7d" />
        </Center>
        <Flex color="#0000001A" align="center" w="80%">
          <Flex
            bg="transparent"
            border="none"
            variant="primary"
            padding="0"
            align="center"
          >
            <CgSearch fontSize="24px" />
          </Flex>
          <Input
            type="text"
            placeholder="Search transactions, invoices or help"
            fontSize="16px"
            color="#4D4F5C"
            border="none"
            focusBorderColor="none"
          />
        </Flex>
      </Flex>
      <Flex
        className="rightNav"
        justify="space-between"
        w="12%"
        // border="1px solid black"
      >
        <Menu>
          <MenuButton
            size="xs"
            as={Button}
            rounded={"full"}
            cursor={"pointer"}
            bg="#fff"
            _hover={{ bg: "#f0f0f0" }}
            _active={{ bg: "#f0f0f0" }}
            position="relative"
          >
            <IoMdNotificationsOutline fontSize="20px" color="#c3c3c3" />
            <Icon viewBox="0 0 200 200" color="green.400" position="absolute" top='0'>
              <path
                fill="currentColor"
                d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
              />
            </Icon>
          </MenuButton>
          <MenuList w="22rem" border="2px soli black" mt={"1rem"}>
            <MenuItem h="76px" _hover={{ bg: "#f5faff" }}>
              <Flex justify="space-between" w="100%">
                <Center w="15%">
                  <Avatar h="2.4rem" w="2.4rem" name="Drew" src={DrewAvatar} />
                </Center>
                <Box w="70%" color="#43425D" p="0 .5rem">
                  <Text
                    fontSize="14px"
                    letterSpacing="0px"
                    color="#4D4F5C"
                    fontWeight={"600"}
                  >
                    Bravid Kames
                  </Text>
                  <Text opacity="50%" fontSize="12px">
                    Assigned you on the call with Sara
                  </Text>
                </Box>
                <Box w="20%">
                  <Text opacity="50%" fontSize="12px">
                    2 min ago
                  </Text>
                </Box>
              </Flex>
            </MenuItem>
            <MenuItem h="76px" _hover={{ bg: "#f5faff" }}>
              <Flex justify="space-between" w="100%">
                <Center w="15%">
                  <Avatar
                    h="2.4rem"
                    w="2.4rem"
                    name="Alexa"
                    src={AlexaAvatar}
                  />
                </Center>
                <Box w="70%" color="#43425D" p="0 .5rem">
                  <Text
                    fontSize="14px"
                    letterSpacing="0px"
                    color="#4D4F5C"
                    fontWeight={"600"}
                  >
                    Alexa Marry
                  </Text>
                  <Text opacity="50%" fontSize="12px">
                    Marked the task New UI as done
                  </Text>
                </Box>
                <Box w="20%">
                  <Text opacity="50%" fontSize="12px">
                    5 min ago
                  </Text>
                </Box>
              </Flex>
            </MenuItem>
            <MenuItem h="76px" _hover={{ bg: "#f5faff" }}>
              <Flex justify="space-between" w="100%">
                <Center w="15%">
                  <Avatar h="2.4rem" w="2.4rem" name="Eva" src={EvaAvatar} />
                </Center>
                <Box w="70%" color="#43425D" p="0 .5rem">
                  <Text
                    fontSize="14px"
                    letterSpacing="0px"
                    color="#4D4F5C"
                    fontWeight={"600"}
                  >
                    Eva Maria
                  </Text>
                  <Text opacity="50%" fontSize="12px">
                    Added a new comment on Sales task
                  </Text>
                </Box>
                <Box w="20%">
                  <Text opacity="50%" fontSize="12px">
                    10 min ago
                  </Text>
                </Box>
              </Flex>
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  );
};

export default Navbar;
