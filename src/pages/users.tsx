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
import "@fontsource/exo";
import { BadgesType, UserJson, UserJsonFix } from "../interface/userJson";
import { FiUser } from "react-icons/fi";
import { axiosInstance } from "../utils/axios";
import { setToast } from "../utils/toast";

export const Users = () => {
  const [users, setAllUsers] = useState<
    UserJsonFix | UserJson[] | undefined | null
  >(null);
  const [searchInput, setQuery] = useState<string>("");
  const { makeToast } = setToast();

  useEffect(() => {
    const fetchRes = async () => {
      try {
        const res = await axiosInstance("/api/users/", {
          method: "GET",
          params: {
            search: searchInput,
          },
        });
        const json = res.data;
        if (res.status === 201) {
          return setAllUsers(null);
        } else if (res.status === 200) {
          return setAllUsers(json);
        }
      } catch (error) {
        console.log(error);
        return makeToast({
          title: "Error",
          message: "Failed to fetch users!",
          status: "error",
        });
      }
    };
    fetchRes();
  }, [searchInput]);

  return (
    <>
      <Helmet>
        <title>Users</title>
      </Helmet>
      <VStack>
        <Text my={0} mx={3} fontWeight={"bold"} fontSize={"xl"} color={"white"}>
          Search
        </Text>
        <Center>
          <Input
            mb={10}
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
                      <Tooltip label={`Go to see ${user.username}'s profile`}>
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
                    <Tooltip mt={2} hasArrow label={user.username}>
                      <Avatar
                        cursor="pointer"
                        mt={-8}
                        mb={2}
                        size="lg"
                        src={user.avatarUrl}
                        name={user.username}
                        // onclick go to user view page
                      />
                    </Tooltip>

                    <Text color="white" fontSize="2xl">
                      {user.username}
                    </Text>

                    <Text color="white">Badges</Text>
                    {user.badges.length !== 0 ? (
                      user.badges.map((badge: BadgesType) => {
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
                                  : badge.badgename === "Friend"
                                  ? "blue"
                                  : badge.badgename === "Admin"
                                  ? "green"
                                  : "gray"
                              }
                              variant="solid"
                              size="lg"
                              mx={1}
                              mt={3}
                              key={badge.badgename}
                            >
                              <TagLabel>{badge.badgename}</TagLabel>
                            </Tag>
                          </Tooltip>
                        );
                      })
                    ) : (
                      <Text color="white">No Badges</Text>
                    )}
                    <Text my={3} color="white">
                      User description
                    </Text>
                    <Box p={5} backgroundColor="blue.700" rounded={5}>
                      <Text color="white">
                        {user.desc !== "" ? user.desc : "No Description"}
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
