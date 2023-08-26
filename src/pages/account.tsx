import {
  Avatar,
  Box,
  Button,
  Center,
  HStack,
  Tag,
  TagLabel,
  Text,
  Textarea,
  Tooltip,
  Modal,
  ModalOverlay,
  ModalHeader,
  useDisclosure,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  Image,
  ModalFooter,
  VStack,
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
import { axiosInstance } from "../utils/axios";

export const AccountPage = () => {
  const authUser = useAuthUser();
  const [userData, setUserData] = useState<UserJson | null>(null);
  const { makeToast } = setToast();
  const [descValue, setDescValue] = useState<string>("");
  const [image, setImage] = useState<any>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const token = authUser()!.token;
  const decoded: UserJson = jwt_decode(token);

  useEffect(() => {
    const getUserData = async () => {
      const res = await axiosInstance.get(`/api/users/user/`, {
        params: { id: decoded.id },
      });
      const json = await res.data;
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

  const convertToBase64 = (e: any) => {
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      console.log(reader.result);
      setImage(reader.result);
    };
    reader.onerror = (error) => {
      console.log(`Error converting image: ${error}`);
      makeToast({
        title: "Error",
        message: "Error converting image!",
        status: "error",
      });
    };
    onOpen();
  };

  const changeAvatar = async () => {
    try {
      const res = await axiosInstance.patch(
        `/api/account/admin/change-avatar`,
        {
          id: decoded.id,
          base64: image,
        }
      );

      const resStatus = res.status;
      console.log(resStatus);
      if (resStatus == 202) {
        makeToast({
          title: "Error",
          message: "Something wrong! please contact mvfflin.",
          status: "error",
        });
      } else if (resStatus == 201) {
        makeToast({
          title: "Error",
          message: "No image file attached",
          status: "error",
        });
      } else if (resStatus == 200) {
        makeToast({
          title: "Success",
          message: "Avatar successfully changed!",
          status: "success",
        });
        window.location = window.location;
      }
    } catch (e) {
      console.log(e);
      makeToast({
        title: "Error",
        message:
          "File size too big or something wrong has happened, please try another image or contact mvfflin.",
        status: "error",
      });
    }
  };

  const removeImage = () => {
    setImage(null);
    onClose();
  };

  const changeDesc = async () => {
    try {
      const response = await axiosInstance(
        `/api/account/admin/change-description`,
        {
          method: "PATCH",
          data: {
            description: descValue,
            id: decoded.id,
          },
        }
      );

      const resStatus = response.status;

      if (response.status == 200) {
        makeToast({
          title: "Success",
          message: "Description changed successfully!",
          status: "success",
        });
        window.location = window.location;
      } else if (resStatus == 201) {
        makeToast({
          title: "Error",
          message: "Description cannot be empty!",
          status: "error",
        });
      }
    } catch (e) {
      console.log(e);
      makeToast({
        title: "Error",
        message: "Something's wrong! please contact mvfflin.",
        status: "error",
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>{decoded.username}'s Account Panel</title>
      </Helmet>

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent h={"auto"}>
          <ModalHeader>Avatar Preview</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Center>
              <Avatar src={image} borderRadius={"50%"} size="2xl" />
            </Center>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme={"facebook"} mr="3" onClick={changeAvatar}>
              Change Avatar
            </Button>
            <Button onClick={removeImage} colorScheme="red">
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

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
          <Avatar
            size={"xl"}
            name={userData?.username}
            src={userData?.avatarUrl}
          />
          <input
            type={"file"}
            style={{ display: "none" }}
            accept="image/*"
            id="inputFile"
            onChange={convertToBase64}
          />
          <label htmlFor="inputFile">
            <Button mt={5} as="span" cursor={"pointer"} colorScheme="facebook">
              Change Avatar
            </Button>
          </label>
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
                          : badge.badgename === "Friend"
                          ? "blue"
                          : badge.badgename === "Admin"
                          ? "green"
                          : "gray"
                      }
                      variant="solid"
                      size="lg"
                      mx={1}
                      key={badge.badgename}
                    >
                      <TagLabel>{badge.badgename}</TagLabel>
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
            {userData?.desc != "" ? userData?.desc : "No Description set."}
          </Text>
          <Text my={"20px"}>Edit description</Text>

          <Center>
            <VStack gap={3}>
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
                onClick={changeDesc}
              >
                Submit
              </Button>
            </VStack>
          </Center>
        </Center>
      </Box>
    </>
  );
};
