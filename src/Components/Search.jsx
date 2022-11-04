import React, { useEffect } from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,VStack,Divider,
    DrawerCloseButton,Button,Input,Container,HStack,Icon,Box,Link
  } from '@chakra-ui/react'
import {Search2Icon,DeleteIcon} from "@chakra-ui/icons"
import { useDisclosure } from '@chakra-ui/react'
import { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
// import { getdata} from "../Redux/AppReducer/app.actions"
import { getdata } from '../Redux/Search/app.actions'
import { SearchResultCard } from './SearchResultCard'
import { changeloadin } from '../Redux/AppReducer/app.actions'
const Search = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const dispatch=useDispatch()
    
    const [value,setvalue]=useState("")
    const [suggestion,setSuggestion]=useState([])
   const data=useSelector((state)=>state.searchReducer.funds)
  //  const loadingState=useSelector((state)=>state.AppReducer.loadingState)

  const [hide,sethide]=useState(false)
   
    useEffect(()=>{

            dispatch(getdata())
            dispatch(changeloadin(false))
        if(!value){
            setSuggestion([])
        }else{
            let newlistofsuggestions = data?.filter((item)=> item.title?.toLowerCase().indexOf(value)!==-1?true:false).map((item)=>item);
        
            setSuggestion(newlistofsuggestions)
        }
      
    },[value])
 
     
    
  return (
    <>
      <Button fontWeight={400} leftIcon={<Search2Icon/>} variant="unstyled" onClick={onOpen}>
       Search
      </Button>

      <Drawer placement="top"  onClose={onClose} isOpen={isOpen}>
       <DrawerOverlay />
        <DrawerContent >
        <Container maxW='container.xl' borderBottom=".5px solid grey" >
          <DrawerHeader border="none" borderBottomWidth='1px' fontSize={16} color="#30C9C8">SEARCH KETTO</DrawerHeader>
          <DrawerBody>
            <HStack>
                <Icon color="#30C9C8" as={Search2Icon} fontSize={20} marginRight={2}/>
                <Input value={value} fontSize={24} size="lg" variant='unstyled' placeholder='Search by fundraisers, fundraiser creator, beneficiary or NGOs'onChange={(e)=>{setvalue(e.target.value)}} />
                {value&&<Icon cursor="pointer" color="#30C9C8" as={DeleteIcon} fontSize={20} onClick={()=>setvalue("")}/>}
            </HStack >
           
          </DrawerBody>
          </Container>
 
          <Box margin="auto" >
            <Container margin={5}>
                    {suggestion.length===0&&value&& <p>Sorry, no results found</p>}

            </Container>
          </Box>
            
        <Container  maxW="container.xl" >
            
                {suggestion?.map((el,index)=>{
                    if(index<3){
                        return <SearchResultCard OnClick={(value)=>{sethide(value)}} key={el.id} {...el}/>
                    }
                   
                })}
           
        </Container>
           
          <Box backgroundColor="#F5F5F5" marginTop={10} minH="16">
             <Container maxW="container.xl" marginTop={4}>
                <Link color="#30C9C8">Click here</Link> to view fundraisers you have supported on Ketto
             </Container>
         </Box>
        </DrawerContent>
        
      </Drawer>
      </>
  )
}

export default Search

