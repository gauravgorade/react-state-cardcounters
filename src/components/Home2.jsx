import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Heading, Button, Badge, Container } from '@chakra-ui/react';

const Home2 = () => {
  const dispatch = useDispatch();
  const { count: cardcount } = useSelector((state) => state.cardcount);

  const add = () => {
    dispatch({
      type: 'increment',
    });
  };

  const sub = () => {
    dispatch({
      type: 'decrement',
    });
  };

  const addByValue = (v) => {
    dispatch({
      type: 'incrementByValue',
      payload: v,
    });
  };

  return (

    <Container maxW='container.sm' >
   <Box mt={8} border='1px' borderColor='gray.200' p='6' rounded='md'  >
      <Heading as="h2" size="xl" m={2}>
        With redux
      </Heading>
      <Heading as="h2" size="xl" m={2}>
        <Badge variant='outline' colorScheme='green' fontSize={'xxl'}>
          {cardcount}
        </Badge>
      </Heading>
      <Button onClick={add} colorScheme="teal" size="md" m={2}>
        INCREMENT
      </Button>
      <Button onClick={sub} colorScheme="orange" size="md" m={2}>
        DECREMENT
      </Button>
      <Button onClick={() => addByValue(10)} colorScheme="blue" size="md" m={2}>
        INCREMENT BY 10
      </Button>
    </Box>
  </Container>


    
  );
};

export default Home2;
