import { Box, ButtonGroup, Divider, HStack, Text } from "@chakra-ui/react";
import "@fontsource/cairo-play";
import { Helmet } from "react-helmet-async";
import { TabItem } from "../components/menuItem";
import { FiLogIn, FiUser } from "react-icons/fi";
import petsimtechworldbug from "../img/petsimtechworldbug.png";
import { useAuthUser, useIsAuthenticated } from "react-auth-kit";
import { TypedWelcome } from "../components/typing";
import jwt_decode from "jwt-decode";
import { UserJson } from "../interface/userJson";

export const Home = () => {
    const isAuthed = useIsAuthenticated();
    const authUser = useAuthUser();
    const token = authUser()!.token;
    const decoded: UserJson = jwt_decode(token);

    if (!isAuthed()) {
        return (
            <Box textAlign="center">
                <Helmet>
                    <title>Home</title>
                </Helmet>
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
                    <Text fontFamily="Cairo Play" color="white" fontSize="6xl">
                        <TypedWelcome
                            strings={[
                                "Welcome to Mvfflin",
                                "Welcome to Muffin Forum!",
                            ]}
                        />
                    </Text>
                    <Text color="gray.400" mt={-2} mb={2} fontSize="lg">
                        Register or Login to start!
                    </Text>
                    <Divider mb={5} variant="dashed" />
                    <HStack justify="center">
                        <ButtonGroup>
                            <TabItem
                                linkTo="/auth"
                                title="Register/Login"
                                icon={FiLogIn}
                            />
                        </ButtonGroup>
                    </HStack>
                </Box>
            </Box>
        );
    } else {
        return (
            <Box textAlign="center">
                <Helmet>
                    <title>Home</title>
                </Helmet>
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
                    <Text fontFamily="Cairo Play" color="white" fontSize="6xl">
                        <TypedWelcome strings={[`Hi ${decoded.username}!`]} />
                    </Text>
                    <Text color="gray.400" mt={-2} mb={2} fontSize="lg">
                        You can press account button to go to your account page
                    </Text>
                    <Divider mb={5} variant="dashed" />
                    <HStack justify="center">
                        <ButtonGroup>
                            <TabItem
                                linkTo={`/account/admin`}
                                title="Account Page"
                                icon={FiUser}
                            />
                        </ButtonGroup>
                    </HStack>
                </Box>
            </Box>
        );
    }
};
