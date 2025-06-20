import {
  Box,
  Center,
  Flex,
  Grid,
  GridItem,
  Select,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

import "./dashboard.css";

import { BsPlus } from "react-icons/bs";
import ProfileCard from "../components/ProfileCard";
import Video from "../components/Video";
import TableList from "../components/TableList";
import AreaChart from "../components/AreaChart";
import PieChart from "../components/PieChart";

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
      w={[sidebarStatus ? "100%" : "100%"]}
      overflow="hidden"
    >
      <Sidebar sidebarStatus={sidebarStatus} />

      <Box
        className="mainDiv"
        bg="white"
        borderTopLeftRadius={[0, sidebarStatus ? "40px" : "0"]}
        overflow="hidden"
        transition="all .4s ease"
        minW="18rem"
        w="100%"
      >
        <Navbar toogleStatus={toogleStatus} />
        <div className="content">
          <Box padding={["1rem 1rem 2rem 1rem", "2rem 2rem 4rem 2rem"]}>
            <Flex
              className="overviewDiv"
              align="center"
              justify="space-between"
              mb="1.4rem"
              minW="100%"
              h={["48px"]}
            >
              <Text fontWeight="600" fontSize={["16px", "20"]} color="#4D4F5C">
                Overview
              </Text>
              <Flex
                as="button"
                bg="#6763E3"
                borderRadius={"5px"}
                h={["2.4rem", "3rem"]}
                w={["7rem", "8rem"]}
                align="center"
                justify="space-between"
                color="white"
                px="1rem"
                // border='1px solid black'
                _hover={{ bg: "#5e59d5" }}
              >
                <Text fontSize={["14px", "16px"]} fontWeight="500">
                  Add Funds
                </Text>
                <Flex
                  bg="#514DDC"
                  rounded="full"
                  h={[".8rem", "1rem"]}
                  w={[".8rem", "1rem"]}
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
                          'referrer referrer profile'
                          'referrer referrer video'

                          `,
              ]}
              gap="2rem"
              color="#4D4F5C"
              // minH="54rem"
            >
              <GridItem
                borderRadius="10px"
                overflow="hidden"
                area={"stats"}
                h={["16rem", "22rem"]}
                p="1rem 0"
                bg="white"
              >
                <Flex h="100%" w="100%" p="0" direction="column" align="center">
                  <Flex justify="space-between" w="100%" px="1.4rem" mb="1rem">
                    <Text>Statistics</Text>
                    <Select
                      placeholder="Last 6 months"
                      w={["45%", "35%"]}
                      variant="unstyled"
                      fontSize="14px"
                    >
                      <option value="1">Last 1 year</option>
                      <option value="5">Last 5 years</option>
                      <option value="10">Last 10 years</option>
                    </Select>
                  </Flex>
                  <Center w="100%" h="20rem">
                    <AreaChart />
                  </Center>
                </Flex>
              </GridItem>
              <GridItem
                borderRadius="10px"
                overflow="hidden"
                h={["16rem", "22rem"]}
                p="1rem 0"
                bg="white"
                area={"sales"}
              >
                <Flex h="100%" w="100%" direction="column" align="center">
                  <Text px="1rem" w="100%" textAlign="left">
                    Sales Distribution
                  </Text>
                  <Center w="100%" h="18rem">
                    <PieChart />
                  </Center>
                </Flex>
              </GridItem>
              <GridItem
                borderRadius="10px"
                overflow="hidden"
                bg="#fff"
                area={"referrer"}
              >
                <TableList />
              </GridItem>
              <GridItem
                borderRadius="10px"
                overflow="hidden"
                bg="#fff"
                area={"profile"}
              >
                <ProfileCard />
              </GridItem>
              <GridItem
                borderRadius="10px"
                overflow="hidden"
                bg="white"
                area={"video"}
                h="15rem"
                py=".4rem"
              >
                <Video />
              </GridItem>
            </Grid>
          </Box>
        </div>
      </Box>
    </Flex>
  );
};

export default Dashboard;
