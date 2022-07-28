import { Button, ButtonProps, Flex, useColorModeValue } from '@chakra-ui/react';


export default function ClickMe({ButtonProps}) {

  return (
    
      <Button
        {...ButtonProps}
        px={8}
        bg={'#FD2B46'}
        color={'white'}
        rounded={'md'}
        _hover={{
          transform: 'translateY(-2px)',
          boxShadow: 'lg',
        }}
        >
        Click Me
      </Button>
  );
}

/*brand: {
    'primary-color': '#FD2B46',
    'light-color': '#FFFFFF',
    'dark-color': '#32373B',
  }*/