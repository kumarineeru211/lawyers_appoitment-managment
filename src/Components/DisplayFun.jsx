import React  from 'react';
import { Box, Text, Stack } from '@chakra-ui/react';


const DisplayFun = ({data}) => {
  

  return (
    <Box>
      {data.map((item, index) => (
        <Box textAlign="center" key={item.lawyerId} w="96%" m="auto">
          <Text
            textAlign="center"
            fontSize={{ base: "xl", sm: "xl", md: "2xl", lg: "3xl", xl: "4xl" }}
            as="mark"
            py="1"
            px="2"
          >
            {" "}
            {item.lawyerName} - {item.lawyerProff} - {item.lawyerPrice}{" "}
          </Text>
          <Box className="historyItemBox">
            {item.clientRecord?.map((elem, index) => (
              <Stack
                spacing={2}
                my="1"
                p="4"
                textAlign="left"
                className="historysingleItem"
                key={index}
              >
                console.log("items",item)
                <Text as="b" fontSize="xl">
                  Name: {elem.clientName.toUpperCase()}{" "}
                </Text>
                <Text fontSize="md">
                  Email: {elem.clientEmail.toLowerCase()}{" "}
                </Text>
                <Text fontSize="md">Phone: {elem.clientPhone} </Text>
                <Text fontSize="md">
                  Subject: {elem.clientSubject.toLowerCase()}{" "}
                </Text>
                <Box display="flex">
                  <Text as="b" color="green" fontSize="xl">
                    Date:{" "}
                  </Text>
                  <Text as="b" color="tomato" fontSize="xl" ml={3}>
                    {elem.clientDate}
                  </Text>
                </Box>
                <Box display="flex">
                  <Text as="b" color="green" fontSize="xl">
                    Time:{" "}
                  </Text>
                  <Text as="b" color="tomato" fontSize="xl" ml={3}>
                    {elem.clientSlot}
                  </Text>
                </Box>
                
              </Stack>
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  );
}

export default DisplayFun
