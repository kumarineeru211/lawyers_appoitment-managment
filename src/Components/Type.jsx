import React from "react";
import { Box, Text } from "@chakra-ui/react";

import Typewriter from "typewriter-effect";

export const Type = () => {
  return (
    <Box>
      <Text textAlign='center' fontSize={{ base: "xl", sm: "3xl", md: "4xl", lg: "6xl", xl: "6xl" }}>
      <Typewriter
        options={{
          strings: ["Hello, Welcome To My Dashboard"],
          autoStart: true,
          loop: true,
          deleteSpeed: 100,
        }}
      />
      </Text>
    </Box>
  );
};
