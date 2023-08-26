import {
    Box,
    Button,
    Divider,
    FormControl,
    FormErrorIcon,
    FormErrorMessage,
    FormLabel,
    Heading,
    Input,
} from "@chakra-ui/react";
import axios from "axios";
import { useFormik } from "formik";
import { useSignIn } from "react-auth-kit";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { axiosInstance } from "../utils/axios";
import { delay } from "../utils/delayFnc";
import { setToast } from "../utils/toast";

export const LoginPage = () => {
    const signIn = useSignIn();
    const navigate = useNavigate();
    const { makeToast } = setToast();

    const loginSubmit = async () => {
        const res = await axiosInstance.post("/api/auth/login", {
            username: formik.values.username,
            password: formik.values.password,
        });
        if (res.status === 201) {
            return makeToast({
                title: "Error",
                message: "Incomplete credentials",
                status: "error",
            });
        } else if (res.status === 202) {
            return makeToast({
                title: "Error",
                message: "Username not found",
                status: "error",
            });
        } else if (res.status === 203) {
            return makeToast({
                title: "Error",
                message: "Incorrect password",
                status: "error",
            });
        } else if (res.status === 200) {
            console.log(res.data.findUser.username);
            signIn({
                token: res.data.token,
                tokenType: "Bearer",
                expiresIn: 30,
                authState: {
                    token: res.data.token,
                    username: res.data.findUser.username,
                },
            });
        }

        makeToast({
            title: "Success",
            message: "Logged In!, Redirecting to account panel...",
            status: "success",
        });
        return navigate("/account/admin");
    };

    const validSchema = yup.object({
        username: yup
            .string()
            .required("Required")
            .min(4, "Username must have atl 4 chars")
            .max(20, "Username can only have 20 max chars"),
        password: yup
            .string()
            .required("Required")
            .min(7, "Password must have atl 7 chars"),
    });

    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
        },
        validateOnBlur: true,
        validationSchema: validSchema,
        onSubmit: loginSubmit,
    });

    return (
        <Box
            boxShadow="0 6px 18px 0 rgba(0,0,0,0.6)"
            w="50em"
            p={10}
            rounded={10}
            textColor="white"
            backgroundColor="gray.900"
        >
            <Heading>Login To Existing Account</Heading>
            <Divider my={7} borderColor="gray.700" />

            <form onSubmit={formik.handleSubmit}>
                <FormControl
                    isInvalid={formik.errors.username as unknown as boolean}
                >
                    <FormLabel>Username</FormLabel>
                    <Input
                        p={5}
                        variant="flushed"
                        borderColor="gray.900"
                        placeholder="Username..."
                        name="username"
                        value={formik.values.username}
                        onChange={formik.handleChange}
                    />
                    <FormErrorMessage>
                        <FormErrorIcon />
                        {formik.errors.username}
                    </FormErrorMessage>
                </FormControl>

                <FormControl
                    isInvalid={formik.errors.password as unknown as boolean}
                    mt={3}
                >
                    <FormLabel>Password</FormLabel>
                    <Input
                        type={"password"}
                        p={5}
                        variant="flushed"
                        borderColor="gray.900"
                        placeholder="Your password..."
                        name="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                    />
                    <FormErrorMessage>
                        <FormErrorIcon />
                        {formik.errors.password}
                    </FormErrorMessage>
                </FormControl>
                <Button mt={6} w="100%" type="submit" colorScheme="facebook">
                    Submit
                </Button>
            </form>
        </Box>
    );
};
