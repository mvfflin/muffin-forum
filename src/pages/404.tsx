import { Box, Center, Text } from "@chakra-ui/react";
import petsimtechworldbug from "../img/petsimtechworldbug.png";
import "@fontsource/cairo-play";
import { TabItem } from "../components/menuItem";
import { FiHome } from "react-icons/fi";

export const NotFound = () => {
  return (
    <Box
      boxShadow="0 6px 18px 0 rgba(255,255,255,0.15)"
      w="100vw"
      backgroundColor="rgba(0,0,0,0.7)"
      backgroundBlendMode="darken"
      backgroundImage={petsimtechworldbug}
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      backgroundPosition="center"
      p={100}
    >
      <Center>
        <Text fontFamily="Cairo Play" color="white" fontSize="5xl">
          404 Page Not Found
          <Text textAlign="center" fontSize="lg">
            You can go back to homepage.
          </Text>
        </Text>
      </Center>
      <Center mt={5}>
        <TabItem linkTo="/" title="Home" icon={FiHome} />
      </Center>
    </Box>
  );
};
