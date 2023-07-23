import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { RegisterPage } from "../components/register";
import { LoginPage } from "../components/login";
import { useIsAuthenticated } from "react-auth-kit";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const AuthPage = () => {
  const isAuthed = useIsAuthenticated();
  const navigate = useNavigate();

  if (!isAuthed()) {
    return (
      <Box>
        <Tabs
          size="lg"
          isFitted
          colorScheme="linkedin"
          variant="soft-rounded"
          textColor="white"
          borderColor="gray.900"
        >
          <TabList gap={3}>
            <Tab>Register</Tab>
            <Tab>Login</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <RegisterPage />
            </TabPanel>
            <TabPanel>
              <LoginPage />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    );
  } else {
    useEffect(() => {
      return navigate("/account/admin");
    }, []);

    return <Box></Box>;
  }
};
