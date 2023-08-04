import {
    Box,
    Button,
    Center,
    Divider,
    FormControl,
    FormErrorIcon,
    FormErrorMessage,
    FormLabel,
    Heading,
    Input,
    Tag,
    TagLabel,
} from "@chakra-ui/react";

import { useFormik } from "formik";
import { useState } from "react";
import { InfoIcon } from "@chakra-ui/icons";
import * as yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { delay } from "../utils/delayFnc";
import { useSignIn } from "react-auth-kit";
import { setToast } from "../utils/toast";

export const RegisterPage = () => {
    const navigate = useNavigate();
    const [error, setError] = useState<string | null>(null);
    const signIn = useSignIn();
    const { makeToast } = setToast();

    const beforeRegist = async () => {
        const res = await axios("/api/auth/register", {
            method: "POST",
            data: {
                username: formik.values.username,
                email: formik.values.email,
                password: formik.values.password,
            },
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
                message: "Username already used!",
                status: "error",
            });
        } else if (res.status === 203) {
            return makeToast({
                title: "Error",
                message: "Email already used!",
                status: "error",
            });
        } else if (res.status === 200) {
            formik.resetForm();
            makeToast({
                title: "Success",
                message:
                    "Successfully registered!, redirecting to account panel...",
                status: "success",
            });
            signIn({
                token: res.data.token,
                expiresIn: 30,
                tokenType: "Bearer",
                authState: {
                    token: res.data.token,
                    username: res.data.username,
                },
            });

            await delay(2000);
            return navigate("/account/admin");
        }
    };

    const validSchema = yup.object({
        username: yup
            .string()
            .required("Required")
            .min(4, "Username must have atl 4 chars")
            .max(20, "Username can only have 20 max chars"),
        email: yup.string().required("Required").email("Email isnt valid"),
        password: yup
            .string()
            .required("Required")
            .min(7, "Password must have atl 7 chars"),
    });

    const formik = useFormik({
        initialValues: {
            username: "",
            email: "",
            password: "",
        },
        validateOnBlur: true,
        validationSchema: validSchema,
        onSubmit: beforeRegist,
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
            <Heading>Register New Account</Heading>
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
                    isInvalid={formik.errors.email as unknown as boolean}
                    mt={3}
                >
                    <FormLabel>Email</FormLabel>
                    <Input
                        p={5}
                        variant="flushed"
                        borderColor="gray.900"
                        placeholder="uremail@example"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                    />
                    <FormErrorMessage>
                        <FormErrorIcon />
                        {formik.errors.email}
                    </FormErrorMessage>
                </FormControl>
                <FormControl
                    isInvalid={formik.errors.password as unknown as boolean}
                    mt={3}
                >
                    <FormLabel>Password</FormLabel>
                    <Input
                        p={5}
                        variant="flushed"
                        borderColor="gray.900"
                        placeholder="stronGpassword#123"
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
