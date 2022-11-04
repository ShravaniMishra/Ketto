import { VStack,ListItem,Divider,Container,Box,List,Button } from "@chakra-ui/react"
import { useEffect, useState } from "react"


export const Filter=({onChange})=>{
    const [filter,setFilter]=useState("") 

    useEffect(()=>{
        onChange(filter)
        // console.log(filter)
    },[filter])
    return  <List height="100%" spacing={3} background="#F5F5F5"  width="20%" padding={5}  marginTop={10} marginRight={10} >
       <ListItem fontWeight={700}>CATEGORY</ListItem>
             <Divider />
       <ListItem color={filter=="all"?"#30C9C8":"black"} cursor="pointer" onClick={()=>setFilter("all")} >All Categories</ListItem>
        <ListItem color={filter=="education"?"#30C9C8":"black"}cursor="pointer"onClick={()=>setFilter("education")} >Education</ListItem>
        <ListItem color={filter=="medical"?"#30C9C8":"black"}cursor="pointer"onClick={()=>setFilter("medical")} >Medical</ListItem>
        <ListItem color={filter=="Women_girls"?"#30C9C8":"black"}cursor="pointer"onClick={()=>setFilter("Women_girls")} >Women & Girls</ListItem>
        <ListItem color={filter=="animals"?"#30C9C8":"black"}cursor="pointer" onClick={()=>setFilter("animals")} >Animals</ListItem>
        <ListItem color={filter=="creative"?"#30C9C8":"black"}cursor="pointer" onClick={()=>setFilter("creative")} >Creative</ListItem>
        <ListItem color={filter=="food_&_hunger"?"#30C9C8":"black"}cursor="pointer" onClick={()=>setFilter("food_&_hunger")} >Food & Hunger</ListItem>
        <ListItem color={filter=="environment"?"#30C9C8":"black"}cursor="pointer" onClick={()=>setFilter("environment")} >Environment</ListItem>
        <ListItem color={filter=="children"?"#30C9C8":"black"}cursor="pointer" onClick={()=>setFilter("children")} >Children</ListItem>
        <ListItem color={filter=="memorial"?"#30C9C8":"black"}cursor="pointer" onClick={()=>setFilter("memorial")} >Memorial</ListItem>
        <ListItem color={filter=="community_development"?"#30C9C8":"black"}cursor="pointer" onClick={()=>setFilter("community_development")}  >Community Development</ListItem>
        <ListItem color={filter=="others"?"#30C9C8":"black"} cursor="pointer" onClick={()=>setFilter("others")} fontWeight={700} >Others</ListItem>
        <Divider/>
        <ListItem><Button width="100%" variant="solid" background="#30C9C8" color="white" _hover={{background:"teal"}}>Start a Fundraiser</Button></ListItem>
        </List>
     
}