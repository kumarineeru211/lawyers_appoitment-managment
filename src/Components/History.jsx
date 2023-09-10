import React, { useState }  from 'react';
import { Box, Text } from '@chakra-ui/react';
import "./History.css";
import DisplayFun from './DisplayFun';
import { useSelector } from 'react-redux';




const History = () => {
  const appointments = useSelector((state) => state.appointments); 

  // let myValue = JSON.parse(localStorage.getItem("ClientData")) || [];  // value fetch from locally

  let [data, setData] = useState(appointments)   // then store in state


  function handleSalarySort() {

    let selected = document.querySelector("#sortSalary").value;

    if(selected === "htl") {
      const sorted = [...data].sort( (a,b) => {
        return parseInt(b.lawyerPrice)-parseInt(a.lawyerPrice);
      })
      setData(sorted);
    }

    else if(selected === "lth") {
      const sorted = [...data].sort( (a,b) => {
        return parseInt(a.lawyerPrice)-parseInt(b.lawyerPrice);
      })
      setData(sorted);
    }

    else if(selected === "") {
      const sorted = [...data]
      setData(sorted);
    }

    <DisplayFun data={data}/>
  
  }

  return (

    <Box mt='80px' p={10} >

      <Box mb={3}>
        <select id="sortSalary" onChange={handleSalarySort}>
            <option value="">Sort by Lawyers Salary</option>
            <option value="htl">High to Low</option>
            <option value="lth">Low to High</option>
        </select>
      </Box>

      {
        data.length === 0  && <Text textAlign='center' fontSize='40px'> History is Empty </Text> 
      }

      {
        <DisplayFun data={data} />
      }

    </Box>
  )
}

export default History


