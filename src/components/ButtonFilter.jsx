import React from 'react'
import { Box, Button } from '@chakra-ui/react'


const ButtonFilter = () => {
    return (
        <Box display='flex' justifyContent='center' mt={3} gap={1}>
            <Button colorScheme='yellow' size='xs' borderRadius='xl'>
                All
            </Button>
            <Button colorScheme='yellow' size='xs' borderRadius='xl'>
                Active
            </Button>
            <Button colorScheme='yellow' size='xs' borderRadius='xl'>
                Completed
            </Button>
        </Box >
    )
}

export default ButtonFilter