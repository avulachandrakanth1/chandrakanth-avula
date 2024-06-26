import { Flex } from '@chakra-ui/react';
import React from 'react';
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs"
import { BiPhoneCall } from "react-icons/bi"
import { SiGmail } from "react-icons/si"


const SocialMedia = () => {
    return (
        <Flex fontSize={'4xl'} className='contactIcons' position={'relative'} bottom={5} w={['60vw','20vw','20vw','20vw']}>
           <a href="https://www.linkedin.com/in/chandrakant1/</Flex>"> <BsLinkedin color='#0072ae'/> </a>
           <a href="https://github.com/avulachandrakanth1"> <BsGithub color='white'/> </a>
           <a href="tel:9553251408"> <BiPhoneCall color='green'/> </a>
           <a href="https://github.com/avulachandrakanth1"> <SiGmail color='red'/> </a>
        </Flex>
    );
}

export default SocialMedia;
