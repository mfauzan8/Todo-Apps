import React from 'react'
import { CardBody, Heading, Stack, StackDivider, Box, Text, Checkbox, IconButton } from '@chakra-ui/react'
import { MdDeleteForever } from 'react-icons/md'

const ListTask = () => {
    return (
        <CardBody>
            <Stack divider={<StackDivider />} spacing='3'>
                <Box display='flex' alignItems='center' justifyContent='space-between' ml={2} mr={2}>
                    <Checkbox colorScheme='orange' defaultChecked pt={2}>
                        <Text fontSize='sm' textTransform='capitalize'>
                            View a summary of all your clients over the last month.
                        </Text>
                    </Checkbox>
                    <IconButton
                        colorScheme='red'
                        size='xs'
                        fontSize='md'
                        icon={<MdDeleteForever />}
                    />
                </Box>
                <Box display='flex' alignItems='center' justifyContent='space-between' ml={2} mr={2}>
                    <Checkbox colorScheme='orange' defaultChecked pt={2}>
                        <Text fontSize='sm' textTransform='capitalize'>
                            View a summary of all your clients over the last month.
                        </Text>
                    </Checkbox>
                    <IconButton
                        colorScheme='red'
                        size='xs'
                        fontSize='md'
                        icon={<MdDeleteForever />}
                    />
                </Box>
            </Stack>
        </CardBody>
    )
}

export default ListTask