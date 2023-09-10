import React from 'react';
import { Box, Center, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
// import { FaBeer } from 'react-icons/fa';

const Navbar = () => {
  const linkes = [
    {
      path : '/', 
      title : "Home",
    },
    {
      path : '/appointment', 
      title : "Appointment",
    },
    {
      path : '/history', 
      title : "History",
    }
  ]
  return (
    <Box position='fixed' top={0} zIndex={1} bg='#031265' w='100%' p={4} color='white' justifyContent={'center'}>
      <Center>
        {
          linkes.map((link) => {
            return (
              <Text key={link.path} px='5' fontSize='lg' as="b" _hover={{ color: "tomato", cursor: "pointer" }}>
                <Link to = {link.path}> {link.title} </Link>
              </Text>
              
            )
          })
        }

        </Center>
</Box>
  )
}

export default Navbar


// Link to="/"> Home </Link>
//         <Link to="/appointment"> Appointment </Link>
//         <Link to="/test"> Test </Link>

