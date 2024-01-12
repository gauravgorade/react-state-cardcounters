import React, { useState } from 'react';
import { Box, Heading, Button, Container, Badge } from '@chakra-ui/react';

const Home = () => {
  const [value, setValue] = useState(0);

  const handleValueChange = (action) => {
    if (action === "inc") {
      setValue((prevValue) => prevValue + 1);
    } else if (action === "dec") {
      setValue((prevValue) => prevValue - 1);
    } else if (action === "byvalue") {
      setValue((prevValue) => prevValue += 10);
    }
  };

  return (
    <Container maxW='container.sm'>
      <Box mt={8} border='1px' borderColor='gray.200' p='6' rounded='md'>
        <Heading as="h2" size="xl" m={2}>
          Without redux
        </Heading>
        <Heading as="h2" size="xl" m={2}>
          <Badge variant='outline' colorScheme='green' fontSize={'xxl'}>
            {value}
          </Badge>
        </Heading>
        <Button onClick={() => handleValueChange("inc")} colorScheme="teal" size="md" m={2}>
          INCREMENT
        </Button>
        <Button onClick={() => handleValueChange("dec")} colorScheme="orange" size="md" m={2}>
          DECREMENT
        </Button>
        <Button onClick={() => handleValueChange("byvalue")} colorScheme="blue" size="md" m={2}>
          INCREMENT BY 10
        </Button>
      </Box>

    </Container>

  );
};

export default Home;
