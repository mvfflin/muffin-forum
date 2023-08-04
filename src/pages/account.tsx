import {
    Avatar,
    Box,
    Button,
    Center,
    HStack,
    Heading,
    Tag,
    TagLabel,
    Text,
    Textarea,
    Tooltip,
} from "@chakra-ui/react";
import { useAuthUser, useIsAuthenticated } from "react-auth-kit";
import "@fontsource/inter";
import { useEffect, useState } from "react";
import axios from "axios";
import { BadgesType, UserJson } from "../interface/userJson";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { setToast } from "../utils/toast";
import jwt_decode from "jwt-decode";

export const AccountPage = () => {
    const authUser = useAuthUser();
    const [userData, setUserData] = useState<UserJson | null>(null);
    const { makeToast } = setToast();
    const [descValue, setDescValue] = useState<string>("");

    const token = authUser()!.token;
    const decoded: UserJson = jwt_decode(token);

    useEffect(() => {
        const getUserData = async () => {
            const res = await axios.get(
                `http://localhost:1231/api/users/user/`,
                {
                    params: { id: decoded.id },
                }
            );
            const json = await res.data;
            console.log(json);
            if (res.status === 201) {
                return setUserData(null);
            } else if (res.status === 203) {
                return setUserData(null);
            } else {
                return setUserData(json);
            }
        };
        getUserData();
    }, []);

    let handleDescInputChange = (e: any) => {
        let value = e.target.value;
        setDescValue(value);
    };

    const changeDesc = async () => {
        const response = await axios(
            `/api/account/admin/${decoded.id}/changedescription`,
            {
                method: "PATCH",
                data: {
                    description: descValue,
                },
            }
        );

        const resStatus = response.status;
        console.log(resStatus);

        if (response.status == 200) {
            makeToast({
                title: "Success",
                message: "Description changed successfully!",
                status: "success",
            });
        }
    };

    const testSubmit = () => {
        makeToast({ title: "Success", message: descValue, status: "success" });
        window.location;
    };

    return (
        <>
            <Helmet>
                <title>{decoded.username}'s Account Panel</title>
            </Helmet>

            <Box
                p={10}
                w="700px"
                h="auto"
                backgroundColor="gray.900"
                rounded={10}
                boxShadow="0 6px 18px 0 rgba(255,255,255,0.15)"
                my={"100px"}
                mx={20}
                py={"50px"}
            >
                <Center fontFamily="Inter" color="white" flexDir="column">
                    <Avatar size={"xl"} name={userData?.username} />
                    <Text fontSize="4xl" color="white" mt={5} mb={3}>
                        {userData?.username}
                    </Text>
                    <Text fontSize="lg">Your Badges</Text>
                    <HStack mt={3}>
                        {userData?.badges !== null ? (
                            userData?.badges.map((badge: BadgesType) => {
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
                                                badge.badgename === "Founder"
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
                        )}
                    </HStack>

                    <Text my={"15px"} fontSize={"lg"}>
                        User description
                    </Text>
                    <Text p={2} px={10} bgColor={"black"}>
                        {userData?.desc != ""
                            ? userData?.desc
                            : "No Description set."}
                    </Text>
                    <Text my={"20px"}>Edit description</Text>
                    <form onSubmit={changeDesc}>
                        <Textarea
                            value={descValue}
                            onChange={handleDescInputChange}
                            minHeight={"110px"}
                            resize={"none"}
                        ></Textarea>
                        <Button
                            w={"full"}
                            my={5}
                            colorScheme="facebook"
                            type="submit"
                        >
                            Submit
                        </Button>
                    </form>
                </Center>
            </Box>
        </>
    );
};
