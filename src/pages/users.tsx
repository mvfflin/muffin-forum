import {
    Avatar,
    Box,
    Button,
    Flex,
    Icon,
    Text,
    Wrap,
    Tooltip,
    Tag,
    TagLabel,
    ScaleFade,
    Fade,
    Slide,
    Spinner,
    VStack,
    Input,
    Center,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import skinnybeautiful from "../img/skinnybeautiful.png";
import "@fontsource/exo";
import { BadgesType, UserJson, UserJsonFix } from "../interface/userJson";
import { FiUser } from "react-icons/fi";

export const Users = () => {
    const [users, setUsers] = useState<
        UserJsonFix | UserJson[] | undefined | null
    >(null);
    const [searchInput, setQuery] = useState<string>("");
    const checkSearchInput = () => {
        if (!searchInput) {
            return false;
        }
        return true;
    };

    useEffect(() => {
        const fetchRes = async () => {
            const res = await axios("http://localhost:1231/api/users/", {
                method: "GET",
            });
            const json = res.data;
            console.log(json);
            if (res.status === 201) {
                return setUsers(null);
            } else if (res.status === 200) {
                console.log(json);
                return setUsers(json);
            }
        };
        const searchUser = users?.filter((user: UserJson) =>
            user.username.toLowerCase().includes(searchInput.toLowerCase())
        );
        if (searchInput == "") {
            fetchRes();
        } else if (searchUser === undefined && searchInput != "") {
            setUsers(null);
        }

        console.log(searchUser);
        return setUsers(searchUser);
    }, [searchInput]);

    return (
        <>
            <Helmet>
                <title>Users</title>
            </Helmet>
            <VStack>
                <Center mb={10}>
                    <Input
                        onChange={(e: any) => {
                            setQuery(e.target.value);
                        }}
                    />
                </Center>
                <Wrap w="90vw" spacing={10} justify="center">
                    {users !== null ? (
                        users?.map((user: UserJson) => {
                            return (
                                <ScaleFade key={user.username} in>
                                    <Box
                                        minW={400}
                                        fontFamily="Exo"
                                        key={user.id}
                                        boxShadow="0 6px 18px 0 rgba(255,255,255,0.15)"
                                        textAlign="center"
                                        rounded="5"
                                        p={5}
                                        backgroundColor="blue.900"
                                    >
                                        <Flex justify="flex-end">
                                            <Tooltip
                                                label={`Go to see ${user.username}'s profile`}
                                            >
                                                <Button
                                                    as="a"
                                                    target="_self"
                                                    href={`/users/${user.username}`}
                                                    colorScheme="facebook"
                                                    w={2}
                                                    h={10}
                                                >
                                                    <Icon as={FiUser} />
                                                </Button>
                                            </Tooltip>
                                        </Flex>
                                        <Tooltip
                                            mt={2}
                                            hasArrow
                                            label={user.username}
                                        >
                                            <Avatar
                                                cursor="pointer"
                                                mt={-8}
                                                mb={2}
                                                size="lg"
                                                src={skinnybeautiful}
                                                name={user.username}
                                                // onclick go to user view page
                                            />
                                        </Tooltip>

                                        <Text color="white" fontSize="2xl">
                                            {user.username}
                                        </Text>

                                        <Text color="white">Badges</Text>
                                        {user.badges.length !== 0 ? (
                                            user.badges.map(
                                                (badge: BadgesType) => {
                                                    return (
                                                        <Tooltip
                                                            key={
                                                                badge.badgename
                                                            }
                                                            cursor="pointer"
                                                            hasArrow
                                                            label={
                                                                badge.badgedesc
                                                            }
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
                                                                mt={3}
                                                                key={
                                                                    badge.badgename
                                                                }
                                                            >
                                                                <TagLabel>
                                                                    {
                                                                        badge.badgename
                                                                    }
                                                                </TagLabel>
                                                            </Tag>
                                                        </Tooltip>
                                                    );
                                                }
                                            )
                                        ) : (
                                            <Text color="white">No Badges</Text>
                                        )}
                                        <Text my={3} color="white">
                                            User description
                                        </Text>
                                        <Box
                                            p={5}
                                            backgroundColor="blue.700"
                                            rounded={5}
                                        >
                                            <Text color="white">
                                                {user.desc !== ""
                                                    ? user.desc
                                                    : "No Description"}
                                            </Text>
                                        </Box>
                                    </Box>
                                </ScaleFade>
                            );
                        })
                    ) : (
                        <Text color="white">No Users</Text>
                    )}
                </Wrap>
            </VStack>
        </>
    );
};
