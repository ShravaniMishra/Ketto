import React from 'react'
import { Container, HStack ,Image,Stack,Text,VStack} from '@chakra-ui/react/'
import { useNavigate } from 'react-router-dom';
export const SearchResultCard = ({title,mainImg,raisedBy,OnClick}) => {
  let paramtitle = title.split(" ").join("");
  const navigate = useNavigate();
  const handleClick=()=>{
     
    navigate(`/crowdfunding/fundraisers/${paramtitle}`)
  }
  return (
    <Container cursor="pointer"  maxW="container.xl" onClick={handleClick}>
        <HStack spacing={10} margin={5} >
            <Image width="100px" src={mainImg}/>
           <Stack>
           <Text color="#30C9C8">{title}</Text>
            <Text marginLeft={40}> by {raisedBy}</Text>
           </Stack>

        </HStack>
        
    </Container>
    
  )
}
 