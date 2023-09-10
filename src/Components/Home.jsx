import React, { useState, useEffect } from "react";
import { Box, Text, Image, Button, Center } from "@chakra-ui/react";
import { useDispatch } from 'react-redux';
import { addAppointment } from '../redux/appointmentSlice'; 
// import date from "date-and-time";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { Type } from "./Type";
import { FcCalendar } from "react-icons/fc";
import "./Home.css";
// import History from "./History";

const Home = () => {

  const dispatch = useDispatch()
  const [allData, setAllData] = useState([]);   // whole json data stored first
  const [lawyer, setLawyer] = useState({});    // inside this store data only which modal is open

  const [loading, setLoading] = useState(false);

  const { isOpen, onOpen, onClose } = useDisclosure();   // Chakra Modal Property

  useEffect(() => {
    const getData = () => {
      setLoading(true);
      fetch(`https://easy-gold-tuna.cyclic.app/law_firms`)
        .then((res) => res.json())
        .then((data) => {
          setTimeout( () => {
            setAllData(data);
            setLoading(false);
          },1000)
        });
    };
    getData();   // function invoked
  }, []);

 
 

  function storeAppointmentData(e) {

    e.preventDefault();
    var myArr = JSON.parse(localStorage.getItem("ClientData")) || []; 

    let clientObjData = {
      clientName: document.querySelector("#name").value,
      clientEmail: document.querySelector("#email").value,
      clientPhone: document.querySelector("#phone").value,
      clientSubject: document.querySelector("#sub").value,
      clientDate: document.querySelector("#datetime").value,
      clientSlot : document.querySelector("#slotName").value,
    }

    var obj = {
      lawyerName: lawyer.emp_name,
      lawyerProff: lawyer.Speciality,
      lawyerPrice: lawyer.price,
      lawyerId: lawyer.emp_id,
      slot: 1,
      clientRecord : [],
    };

    if(clientObjData['clientName'].length <= 0) 
      alert("Please Enter Your Name First");

    else if(clientObjData['clientEmail'].length <= 0)
      alert("Please Enter Your Email Id");

    else if(clientObjData['clientPhone'].length <= 0)
      alert("Please Enter Your Phone Number");

    else if(clientObjData['clientSubject'].length <= 0)
      alert("Please Enter Your Subject");

    else if(clientObjData['clientDate'].length <= 0)
      alert("Please Select Date");

    else if(clientObjData['clientSlot'].length <= 0)
      alert("Please Select Given Slot");

    else {


      let SlotPossible = true;


  
      if(!SlotPossible) {
        alert("Appointments not available")
      }
      else if(SlotPossible)
      {
        let flag = true;
        myArr.forEach ( (el) => {

          if(el.lawyerId === obj.lawyerId)
          {
            el.slot++;                                // increase only slot
            el['clientRecord'].push(clientObjData);  // then store client data inside lawyerName
            flag = false;
          }
        })
  
        if (flag) {
          // Push the clientObjData into the clientRecord array of obj
          obj.clientRecord.push(clientObjData);
          dispatch(addAppointment(obj)); // Dispatch obj to add to the Redux store
          alert("Your Appointment is Booked.");
        }
  
       
      }

    }

  }

  const openModal = (singleData) => {
    setLawyer(singleData);
    onOpen();
  };

  return (
    <Box>
      <Box mb="9" mt={"15vh"}>
        <Type />
      </Box>

      {loading && (
        <Box>
          <Center>
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif?20170503175831"
              alt="loading_gif"
            />
          </Center>
        </Box>
      )}

      <Box>
        <Modal
          blockScrollOnMount={true}
          isCentered
          motionPreset="slideInBottom"
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <div id="parent">
                <div>
                  <h2 id="myheading">Enter Details</h2>
                  <form onSubmit={storeAppointmentData}>
                    <input
                      id="name"
                      type="text"
                      placeholder="Enter Your Name Here"
                    />
                    <input
                      id="email"
                      type="email"
                      placeholder="Enter Your Email Here"
                    />
                    <input
                      id="phone"
                      type="number"
                      placeholder="Enter Your Number Here"
                    />
                    <input
                      id="sub"
                      type="text"
                      placeholder="Enter Your Subject Here"
                    />
                    <input
                      type="date"
                      id="datetime"
                      min="2023-07-07"
                      max="2023-11-11"
                    />
                    <select id="slotName">
                      <option value="">Choose Any Slot</option>
                      <option value="09 AM to 09:30 AM">09 AM to 09:30 AM</option>
                      <option value="10:00 AM to 10:30 AM">10:00 AM to 10:30 AM</option>
                      <option value="01 PM to 1:30 PM">01 PM to 1:30 PM</option>
                      <option value="1:30 PM to 02 PM">1:30 PM to 02 PM</option>
                    </select>
                    
                    <input type="submit" value="SUBMIt" onClick={onClose} />
                  </form>
                </div>
              </div>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="red" mr={3} onClick={onClose}> Cancel </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>

      <Box w="96%" m="auto">
        {allData.map((item, index) => (
          <Box textAlign="center" fontSize={{ base: "xl", sm: "3xl", md: "4xl", lg: "4xl", xl: "4xl" }} key={item.grp_id}>
            <Text as="mark" py="1" px="2">
              {item.name}
            </Text>
            <Box className="itemBox">
              {item.employees.map((employ, index) => (
                <Box my="1" py="2" className="singleItem" key={employ.emp_id}>
                  <Image
                    className="imgstyle"
                    src={employ.image}
                    alt={employ.emp_id}
                  />
                  <Text as="b" fontSize="2xl">
                    {employ.emp_name}
                  </Text>
                  <Text fontSize="2xl">{employ.Speciality}</Text>
                  <Text fontSize="3xl">{employ.price}</Text>
                  <Button
                    onClick={() => openModal(employ)}
                    leftIcon={<FcCalendar size={26} />}
                    colorScheme="green"
                    variant="solid"
                  >
                    {" "}
                    Book Appointment{" "}
                  </Button>
                </Box>
              ))}
            </Box>
          </Box>
        ))}
      </Box>

    </Box>
  );
};

export default Home;
