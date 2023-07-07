import { extendTheme } from "@chakra-ui/react";
import { sizes } from "./size";
import { colors } from "./color";

export const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: true,
  },
  sizes,
  fonts: {
    heading: `'Barlow Semi Condensed', sans-serif`,
    handWritten: "Philosopher",
    bodySerif: "Bender",
    body: `Asap`,
    basic: `'Barlow Semi Condensed', sans-serif`,
  },
  colors: colors,
});
