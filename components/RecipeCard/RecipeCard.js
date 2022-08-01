import {
    Badge,
    Button,
    Center,
    Flex,
    Heading,
    Image,
    Link,
    Stack,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { recipeData } from '../../libs/recipes/recipes';
import MainButton from '../MainButton';
import { StarIcon } from '@chakra-ui/icons';
import { useEffect, useRef } from 'react';
  
  export default function SocialProfileWithImageHorizontal() {


    return (
      <Center py={6} padding={2}>
        <Stack
        borderColor={'brand.primary'}
          borderWidth="2px"
         
          w={{ sm: '100%', md: '540px' }}
          height={{ sm: '476px', md: '20rem' }}
          direction={{ base: 'row' }}
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'2xl'}
          padding={2}>
          <Flex flex={1}>
            <Image
              objectFit="contain"
              boxSize="100%"
              src={recipeData[0].recipe.images.THUMBNAIL.url}
            />
          </Flex>
          <Stack
            flex={1}
            flexDirection="column"
            justifyContent="center"
            alignItems="left"
            p={1}
            pt={2}
            fontSize={'10px'}
            >
            <Heading fontSize={'12px'} fontFamily={'body'}>
              Lindsey James
            </Heading>
            <Text
              color={useColorModeValue('gray.700', 'gray.400')}
              height={'30%'}
              overflow={'hidden'}
              text-overflow={'ellipsis'}
              >
              Actress, musician, songwriter and artist. PM for work inquires or
              Actress, musician, songwriter and artist. PM for work inquires or
            </Text>
            <Stack
              mt={'2rem'}
              direction={'row'}
              padding={2}
              justifyContent={'space-between'}
              alignItems={'center'}>
               <MainButton
        borderWidthRecipe={"0px"}
          buttonWidth="25%"
          buttonSize="sm"
          buttonText={<StarIcon/>}
          colorMode="dark"
           />
             <MainButton
          borderWidthRecipe={"0px"}
          buttonWidth="75%"
          buttonSize="sm"
          buttonText="View Recipe"
          colorMode="dark" />
            </Stack>
          </Stack>
        </Stack>
      </Center>
    );
  }