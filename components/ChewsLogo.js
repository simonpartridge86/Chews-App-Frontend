// CHEWSLOGO COMPONENT - used to add Chews Logo to navbar and login pages

/*
Prop Notes:
 - size = pick an option for font size out of "4xl" | "3xl" | "2xl" | "xl" | "lg" | "md" | "sm" | "xs"
 - theme = text colour for logo - I reccomend using 'brand.primary', 'brand.dark', 'brand.light', and other cutom colours
 - fontFamily = use a custom font typeface
*/

import { Heading } from "@chakra-ui/react";

export default function ChewsLogo({ theme, size }) {
  return (
    <Heading size={size} fontFamily="brand.logo" color={theme}>
      Chews
    </Heading>
  );
}
