import { Box, Button, Container, HStackm,Image,Text,HStack } from "@chakra-ui/react"
import { useState } from "react"
import { BiChevronDown, BiChevronUp } from "react-icons/bi"
const fakeData=[
    {
        name:"Creative Seva",
        money:"£ 10,880"
    },
    {
        name:"Tauseef",
        money:"₹ 25,000"
       
    },{
        name: "Prattabiraman Tc",
        money:"₹ 14,000"
    },{
        name: "Grazewal Singh",
        money:"₹ 10,000"
    },

    {
        name:"Lister Charitable Trust",
        money:"$ 6,250"
    },{
        name:"Saurya Simha Velagapudi",
       money:"$ 5,000"
    },{
        name:"Well Wisher",
        money:"$ 5,000" 
    }
]
export const ShowMoreData=({showalllist})=>{
    const [showall,setshowall]=useState(false)
    return <Box padding={5}>
            <Box>
                 {fakeData.map((el,index)=>{
                    if(!showall&&index>=2&&!showalllist){
                        return
                    }
                    return <HStack cursor="pointer" spacing="auto" padding={5}>

                    <HStack spacing={2}>
                        <Image borderRadius={50} width={10} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScXyoZXpAWph9Vnu9_ZpWgNmn20W4hlBOn-5dLmFQuww8zSfnhRRNQW7B0RRuApO_PFwg&usqp=CAU"/>
                        <Text  fontSize={16}>{el.name}</Text>
                    </HStack>
                    <Text color='#30C9C8' fontSize={16}fontWeight={700}>{el.money}</Text>
                </HStack> 
                 })}
            </Box>

            {showalllist? null: <Container textAlign="center">
                      <Button onClick={()=>{setshowall(!showall)}} _hover={{background:"white"}} color= '#30C9C8'variant="ghost" rightIcon= {showall?<BiChevronUp/>:<BiChevronDown/>} >{showall?"Show less": "Show more"}</Button>
            </Container>}
        
    </Box>
}