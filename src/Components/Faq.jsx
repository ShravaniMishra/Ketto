import React from 'react'
import styles from "../styles/HowWorks.modules.css"
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box
  } from '@chakra-ui/react'

const Faq = () => {
  return (
    <div>
<h1 className='fq'>FAQs</h1>
<div className='line'></div>
<Accordion allowToggle>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1'  lineHeight='27px'backgroundColor='white' border='1px solid white' fontSize='17px' textAlign='left'>
        How do I raise funds?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} display='flex'>
    To Start a Fundraiser, follow the three steps:
    1.Sign up on Ketto.
    2.Fill up the form
    3.Hit Submit
      
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1'lineHeight='27px' fontSize='17px' textAlign='left'>
        Can I raise funds for a friend as well?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    Yes, you can also raise funds for a friend, a loved one or anyone in need during life's crucial moments
      
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1'lineHeight='27px' fontSize='17px' textAlign='left'>
        Does the raised amount reach the individual directly?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    With Ketto, the money you collect goes directly to the bank account associated 
    with your fundraising page. Raising money for yourself or anyone has never been easier.
      
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1'lineHeight='27px' fontSize='17px' textAlign='left'>
        Is it safe?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    Your Ketto fundraiser features the very best in secure payment encryption technology. Not only 
    are your donors online payments safe, your money 
    is stored securely until you're ready to request a withdrawal via electronic bank transfer.
      
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1'lineHeight='27px' fontSize='17px' textAlign='left'>
        What if I don't reach my goal?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    No problem. You will still receive the raised amount after the transactional processing fee.
To know more about transactional processing fee, visit: www.ketto.org/support/plans-and-pricing
      
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1'lineHeight='27px' fontSize='17px' textAlign='left'>
        I have more questions, who do I write to?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    You can write to info@ketto.org Know someone who needs funds for medical
     treatment urgently? Help them out by sharing this information with them.
     
    </AccordionPanel>
  </AccordionItem>
</Accordion>
      
    </div>
  )
}

export default Faq;

