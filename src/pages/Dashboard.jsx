import { Box, Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  const [sidebarStatus, setSidebarStatus] = useState(false);

  const toogleStatus = (value) => {
    console.log(value, "value===");
    setSidebarStatus(value);
  };

  return (
    <Flex w='100%' bg='#3C3B54'>
      <Sidebar sidebarStatus={sidebarStatus}/>
      <Box className="mainDiv" border="2px solid black" w='100%' bg='white' borderTopLeftRadius={sidebarStatus ? "40px": '0'} overflow="hidden" transition="all .4s ease">
        <Navbar toogleStatus={toogleStatus} />
        <Box
          border="2px solid blue"
          height="80rem"
          className="content"
          // w={sidebarStatus ? "80%" : "100%"}
        ></Box>
      </Box>
    </Flex>
  );
};

export default Dashboard;
