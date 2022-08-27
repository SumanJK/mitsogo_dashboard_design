import { Box, Flex, Grid, GridItem, Text, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

import "./dashboard.css";

import { BsPlus } from "react-icons/bs";
import ProfileCard from "../components/ProfileCard";
import Video from "../components/Video";
import TableList from "../components/TableList";

const Dashboard = () => {
  const [sidebarStatus, setSidebarStatus] = useState(false);

  const toogleStatus = (value) => {
    console.log(value, "value===");
    setSidebarStatus(value);
  };

  return (
    <Flex
      bg="#3C3B54"
      h="100vh"
      // minW='100vw'
      w={[sidebarStatus ? "100%" : "100%"]}
      overflow="hidden"
    >
      <Sidebar sidebarStatus={sidebarStatus} />

      
      <Box
        className="mainDiv"
        // w={[sidebarStatus ? "20%" : "100%",sidebarStatus ? "100%" : "100%"]}
        bg="white"
        borderTopLeftRadius={[0, sidebarStatus ? "40px" : "0"]}
        overflow="hidden"
        transition="all .4s ease"
        minW='18rem'
        w='100%'
      >
        <Navbar toogleStatus={toogleStatus} />
        <div className="content" >
          <Box    padding={['1rem 1rem 2rem 1rem','2rem 2rem 4rem 2rem']}>
          <Flex
            className="overviewDiv"
            align="center"
            justify="space-between"
            mb="1.4rem"
            
            minW='100%'
            h={['48px']}
          >
            <Text fontWeight="600" fontSize={['16px',"20"]} color='#4D4F5C'>
              Overview
            </Text>
            <Flex
              as="button"
              bg="#6763E3"
              borderRadius={"5px"}
              h={["2.4rem",'3rem']}
              w={['7rem','8rem']}
              align="center"
              justify="space-between"
              color="white"
              px="1rem"
              // border='1px solid black'
              _hover={{ bg: "#5e59d5" }}
            >
              <Text fontSize={['14px',"16px"]} fontWeight="500">
                Add Funds
              </Text>
              <Flex
                bg="#514DDC"
                rounded="full"
                h={[".8rem","1rem"]}
                w={[".8rem","1rem"]}
                align="center"
                justify="center"
              >
                {" "}
                <BsPlus />{" "}
              </Flex>
            </Flex>
          </Flex>
          <Grid
            className="contenCardsDiv"
            templateAreas={[
                              `'profile'
                              'stats'
                              'sales'
                              'referrer'
                              'video'`,

                          `'stats sales profile'
                          // 'stats sales profile'
                          // 'stats sales profile'
                          // 'stats sales profile'
                          // 'stats sales profile'
                          // 'stats sales profile'
                          // 'referrer referrer profile'
                          'referrer referrer profile'
                          'referrer referrer video'
                          // 'referrer referrer video'
                          // 'referrer referrer video'
                          // 'referrer referrer video'

                          `,
            ]}
            gap="2rem"
            // minH="54rem"
          >
            <GridItem borderRadius="10px" overflow='hidden' area={"stats"} bg="white">
              {/* <Charts /> */}
              <Flex p='2rem' minW={['15rem','22rem']} minH={['22rem']}></Flex>
            </GridItem>
            <GridItem borderRadius="10px" overflow='hidden' bg="orange.300" area={"sales"}>
            <Flex p='2rem' minW={['15rem','22rem']} h='10rem'></Flex>
            </GridItem>
            <GridItem borderRadius="10px" overflow='hidden' bg="#fff" area={"referrer"}>
              <TableList/>
            </GridItem>
              <GridItem borderRadius="10px" overflow='hidden' bg="#fff" area={"profile"} >
                <ProfileCard />
              </GridItem>
              <GridItem borderRadius="10px" overflow='hidden' bg="white" area={"video"}  h='15rem' py='.4rem'>
                <Video/>
              </GridItem>
          </Grid>
          </Box>
        </div>
      </Box>
    </Flex>
  );
};

export default Dashboard;
