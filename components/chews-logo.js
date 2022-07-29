import { Heading } from '@chakra-ui/react'

export default function ChewsLogo({ theme, size }) {
  return (
    <Heading size={size} fontFamily='brand.logo' color={theme}>
      Chews
    </Heading>
  );
}
