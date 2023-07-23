import { useToast } from "@chakra-ui/react";

interface ToastProps {
    message: string;
    status: "error" | "info" | "success" | "warning";
    title: "Error" | "Info" | "Success" | "Warning";
}

export const setToast = () => {
    const toast = useToast();

    const makeToast = ({ title, message, status }: ToastProps) => {
        return toast({
            title: title,
            description: message,
            status: status,
            isClosable: true,
            duration: 3000,
            position: "top-right",
        });
    };

    return { makeToast };
};
