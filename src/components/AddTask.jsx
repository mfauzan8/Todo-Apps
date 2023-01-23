import React from 'react'
import {
    Input,
    FormControl,
    Button
} from '@chakra-ui/react'

const AddTask = () => {
    return (
        <FormControl display='flex' alignItems='center' justifyContent='center' mt={4} >
            <Input type='text' w='80%' mr={2} />
            <Button
                colorScheme='yellow'
                type='submit'
            >
                Add Task
            </Button>
        </FormControl >
    )
}

export default AddTask