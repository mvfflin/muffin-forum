import { Home } from "./pages/home";
import { Navigator } from "./components/navbar";
import {
    Center,
    ChakraProvider,
    ColorModeScript,
    ThemeConfig,
    extendTheme,
} from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom/dist";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { NotFound } from "./pages/404";
import { Users } from "./pages/users";
import { AuthProvider, RequireAuth } from "react-auth-kit";
import { AccountPage } from "./pages/account";
import "./App.css";
import { ViewUser } from "./pages/user";
import { AuthPage } from "./pages/auth";

function App() {
    const config: ThemeConfig = {
        initialColorMode: "light",
        useSystemColorMode: false,
    };

    const theme = extendTheme({ config });

    return (
        <HelmetProvider>
            <Helmet>
                <title>muffin forum</title>
            </Helmet>
            <AuthProvider authType="cookie" authName="_auth">
                <ChakraProvider theme={theme}>
                    <ColorModeScript initialColorMode="light" />
                    <Navigator />
                    <Center mt={250}>
                        <BrowserRouter>
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route
                                    path="/account/admin"
                                    element={
                                        <RequireAuth loginPath="/auth">
                                            <AccountPage />
                                        </RequireAuth>
                                    }
                                />
                                <Route
                                    path="/users/:username"
                                    element={<ViewUser />}
                                />
                                <Route path="/users" element={<Users />} />
                                <Route path="/auth" element={<AuthPage />} />
                                <Route path="*" element={<NotFound />} />
                            </Routes>
                        </BrowserRouter>
                    </Center>
                </ChakraProvider>
            </AuthProvider>
        </HelmetProvider>
    );
}

export default App;
