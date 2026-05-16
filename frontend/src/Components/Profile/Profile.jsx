/*import { Avatar, Stack, Container , Text}  from '@mantine/core'
import React from 'react'


export default function Profile() {


   const dummy = {
       name: "Sai Kiran",
       email: "rsaikiran1330@gmail.com",
       id: "2310030437",
       avatar: "https://avatars.githubusercontent.com/u/1234567890?v=4"
   }


 return (
   <Container size={"md"} >
    <Stack
      h={300}
      bg="var(--mantine-color-body)"
      align ="Center"
      justify="center"
      gap="md"
      >

    <Avatar color="blue" radius="xl">SK</Avatar>
    <Text> {dummy.name}</Text>
    <Text> {dummy.email}</Text>
    <Text> ID : {dummy.id}</Text>
</Stack>
   </Container>
 )
}
*/
import { Avatar, Container, Text, Stack } from '@mantine/core'
import React, { useEffect, useState } from 'react'
import Service from '../../utils/http'


export default function Profile() {
   const service = new Service()
   const [data , setData ] = useState(null)
   const getProfile = async ()=>{
       const response = await service.get("user/me");
       setData(response)
   }
   useEffect( ()=>{
       getProfile()
   } , [] )

   return (<Container size={"md"}  >
       <Stack


           h={300}
           bg="var(--mantine-color-body)"
           align="center"
           justify="center"
           gap="md"
       >
           <Avatar src={data?.avatar} size="xl" alt="it's me" />
           <Text  c='black' fw={700}> {data?.name}</Text>
           <Text> {data?._id}</Text>
           <Text> {data?.email}</Text>
       </Stack>


   </Container>)
}
// https://url-shortener-bootcamp.onrender.com/url/shortener