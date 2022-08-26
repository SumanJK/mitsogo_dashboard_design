import { Box, Button, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

import './dashboard.css'

import { BsPlus } from "react-icons/bs";

const Dashboard = () => {
  const [sidebarStatus, setSidebarStatus] = useState(false);

  const toogleStatus = (value) => {
    console.log(value, "value===");
    setSidebarStatus(value);
  };

  return (
    <Flex w="100%" bg="#3C3B54" minH="100vh">
      <Sidebar sidebarStatus={sidebarStatus} />
      <Box
        className="mainDiv"
        w="100%"
        bg="white"
        borderTopLeftRadius={sidebarStatus ? "40px" : "0"}
        overflow="hidden"
        transition="all .4s ease"
      >
        <Navbar toogleStatus={toogleStatus} />
        <div className="content"  >
          <Flex
            className="overviewDiv"
            align="center"
            justify="space-between"
            pb="1.4rem"
            border="2px solid red"
          >
            <Text fontWeight="600" fontSize="20">
              Overview
            </Text>
            <Flex
              as="button"
              bg="#6763E3"
              borderRadius={"5px"}
              h="48px"
              align="center"
              justify="space-between"
              w="160px"
              color="white"
              px="1rem"
              _hover={{ bg: "#5e59d5" }}
            >
              <Text fontSize="16" fontWeight="500">
                Add Funds
              </Text>
              <Flex
                bg="#514DDC"
                rounded="full"
                h="1rem"
                w="1rem"
                align="center"
                justify="center"
              >
                {" "}
                <BsPlus />{" "}
              </Flex>
            </Flex>
          </Flex>
          <Grid className="contenCardsDiv" border="1px solid black"
            templateAreas={[`'profile'
                              'stats'
                              'sales'
                              'referrer'
                              'video'`,

                          `'stats sales profile'
                          'stats sales profile'
                          'stats sales profile'
                          'referrer referrer profile'
                          'referrer referrer video'
                          'referrer referrer video'
                          `]}
            gap='2rem'
            h='50rem'
          >
            <GridItem  bg='orange.300' area={'stats'}>1</GridItem>
            <GridItem  bg='orange.300' area={'sales'}>2</GridItem>
            <GridItem  bg='orange.300' area={'profile'}>3</GridItem>
            <GridItem  bg='orange.300' area={'referrer'}>4</GridItem>
            <GridItem  bg='orange.300' area={'video'}>5</GridItem>
          </Grid>
        </div>
      </Box>
    </Flex>
  );
};

export default Dashboard;
