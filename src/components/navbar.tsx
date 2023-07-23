import {
  Button,
  ButtonGroup,
  Flex,
  HStack,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import "@fontsource/cairo-play";
import { useEffect, useState } from "react";
import { useAuthUser, useIsAuthenticated, useSignOut } from "react-auth-kit";
import { FiHome, FiUser, FiSettings } from "react-icons/fi";
import { TabItem } from "./menuItem";
import { useNavigate } from "react-router-dom";

export const Navigator = () => {
  const authUser = useAuthUser();
  const isAuthed = useIsAuthenticated();
  const signOut = useSignOut();

  const realSignOut = () => {
    signOut();
    window.location.reload();
  };

  return (
    <Flex
      justify="center"
      top="0"
      w="100%"
      backgroundColor="rgb(11, 11, 40)"
      h="70px"
    >
      <Link href="/" _hover={{ textDecor: "none" }}>
        <Flex p={3}>
          <Text
            fontFamily="Cairo Play"
            fontWeight={800}
            fontSize="3xl"
            color="white"
          >
            muffin forum
          </Text>
        </Flex>
      </Link>

      <Flex ml="30px">
        <HStack>
          <ButtonGroup justifyContent="space-between">
            <TabItem icon={FiHome} linkTo="/" title="Home" />
            <TabItem icon={FiUser} linkTo="/users" title="Users" />
            <Flex>
              <Menu>
                <MenuButton
                  as={Button}
                  ml={3}
                  colorScheme="facebook"
                  leftIcon={<FiSettings />}
                >
                  Account
                </MenuButton>
                <MenuList>
                  {!isAuthed() ? (
                    <Link href="/auth" _hover={{ textDecor: "none" }}>
                      <MenuItem>Register/Login</MenuItem>
                    </Link>
                  ) : (
                    <>
                      <Link
                        href="/account/admin"
                        _hover={{ textDecor: "none" }}
                      >
                        <MenuItem>Account Page</MenuItem>
                      </Link>
                      <MenuItem onClick={() => realSignOut()}>Logout</MenuItem>
                    </>
                  )}
                </MenuList>
              </Menu>
            </Flex>
          </ButtonGroup>
        </HStack>
      </Flex>
    </Flex>
  );
};
