import React from 'react'
import { Card, CardHeader, Heading, Container } from '@chakra-ui/react'
import { GoChecklist } from 'react-icons/go'
import AddTask from '../components/AddTask'
import ListTask from '../components/ListTask'
import ButtonFilter from '../components/ButtonFilter'

const TodoPage = () => {
    return (
        <Container maxW='3xl' pt={4} >
            <Card bg='white' h='95vh'>
                <CardHeader mt={3}>
                    <Heading size='xl' color='#F4DB03' display='flex' alignItems='center' justifyContent='center' ><GoChecklist color='#EDA209' size={50} /> ToDo Apps</Heading>
                </CardHeader>

                <AddTask />
                <ButtonFilter />
                <ListTask />

            </Card>
        </Container >)
}

export default TodoPage