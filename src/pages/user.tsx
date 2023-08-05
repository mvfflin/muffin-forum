import {
    Avatar,
    Box,
    Button,
    Center,
    Flex,
    HStack,
    Tag,
    TagLabel,
    Text,
    Tooltip,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BadgesType, UserJson } from "../interface/userJson";
import { setToast } from "../utils/toast";

export const ViewUser = () => {
    const { username } = useParams();
    const [error, setError] = useState<string>("");
    const [user, setUserData] = useState<UserJson | null>(null);
    const { makeToast } = setToast();

    useEffect(() => {
        const getUserData = async () => {
            const res = await axios(`http://localhost:1231/api/users/user`, {
                method: "GET",
                params: { username: username },
            });
            const userData = await res.data;
            if (res.status === 201) {
                setUserData(null);
                setError("Can't find that user.");
                return makeToast({
                    title: "Error",
                    message: error,
                    status: "error",
                });
            } else if (res.status === 202) {
                setUserData(null);
                setError("Unknown error, contact mvfflin");
                return makeToast({
                    title: "Error",
                    message: error,
                    status: "error",
                });
            } else {
                console.log(userData);
                setError("");
                return setUserData(userData);
            }
        };
        getUserData();
    }, []);

    return (
        <Flex>
            <Box
                textColor={"white"}
                p={10}
                w="700px"
                h="55vh"
                backgroundColor="gray.900"
                rounded={10}
                boxShadow="0 6px 18px 0 rgba(255,255,255,0.15)"
            >
                <Center fontFamily="Inter" color="white" flexDir="column">
                    {user != null ? (
                        <>
                            {" "}
                            <Avatar
                                size={"xl"}
                                name={user?.username}
                                src={user?.avatarUrl}
                            />
                            <Text fontSize="4xl" color="white" mt={5} mb={3}>
                                {user?.username}
                            </Text>
                            <Text fontSize="lg">User Badges</Text>
                            <HStack mt={3}>
                                {user?.badges !== null ? (
                                    user?.badges.map((badge: BadgesType) => {
                                        return (
                                            <Tooltip
                                                key={badge.badgename}
                                                cursor="pointer"
                                                hasArrow
                                                label={badge.badgedesc}
                                                textColor="black"
                                                bg="white"
                                                mt={1}
                                            >
                                                <Tag
                                                    cursor="pointer"
                                                    colorScheme={
                                                        badge.badgename ===
                                                        "Founder"
                                                            ? "facebook"
                                                            : badge.badgename ===
                                                              "Friend"
                                                            ? "blue"
                                                            : badge.badgename ===
                                                              "Admin"
                                                            ? "green"
                                                            : "gray"
                                                    }
                                                    variant="solid"
                                                    size="lg"
                                                    mx={1}
                                                    key={badge.badgename}
                                                >
                                                    <TagLabel>
                                                        {badge.badgename}
                                                    </TagLabel>
                                                </Tag>
                                            </Tooltip>
                                        );
                                    })
                                ) : (
                                    <Text fontSize="md">No Badges</Text>
                                )}{" "}
                            </HStack>
                            <Text mt={4}>Description</Text>
                            <Text
                                mt={3}
                                padding={5}
                                bgColor={"gray.700"}
                                borderRadius={5}
                            >
                                {user.desc != "" ? user.desc : "No Description"}
                            </Text>
                        </>
                    ) : (
                        <>
                            <Text mt={50} fontSize={"50px"}>
                                User not found :c
                            </Text>
                            <Button
                                onClick={() => {
                                    window.location.href = "/users";
                                }}
                            >
                                Go back
                            </Button>
                        </>
                    )}
                </Center>
            </Box>
        </Flex>
    );
};
