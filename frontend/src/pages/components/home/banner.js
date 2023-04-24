import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import { Box } from '@mui/system'
import { useRouter } from 'next/router'

const Banner = () => {

 var items = [
  {
   name: "Learn to Code",
   description: "Probably the most random thing you have ever seen!"
  },
  {
   name: "Coding is Fun!",
   description: "Hello World!"
  }
 ]

 return (
  <Carousel>

   {
    items.map((item, i) => <Item key={i} item={item} />)
   }
  </Carousel>
 )


}

export default Banner


const Item = (props) => {
 const router = useRouter()
 return (
  <Paper>
   <Box m={2} pt={3}>
    <h2>{props.item.name}</h2>
    <p>{props.item.description}</p>


    <Button
     className="CheckButton"
     onClick={() => router.push('../../editor')}
    >
     Code here!
    </Button>
   </Box>
  </Paper>
 )
}