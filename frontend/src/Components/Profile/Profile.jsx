import { Avatar, Stack, Container , Text}  from '@mantine/core'
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
    <Text> ID   : {dummy.id}</Text>
</Stack>
   </Container>
 )
}
