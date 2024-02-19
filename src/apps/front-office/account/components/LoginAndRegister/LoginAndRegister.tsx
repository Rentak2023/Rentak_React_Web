import  { useEffect, useState } from "react";
import { Tabs } from "@mantine/core";
import { trans } from "@mongez/localization";
import Login from "./Login";
import Register from "./Register";
import Layout from "../Layout";
import user from "../../user";
import { navigateTo } from "@mongez/react-router";

const LoginAndRegister = () => {
  const [activeTab, setActiveTab] = useState("first");
  useEffect(() => {
    if(user.isLoggedIn()){
      navigateTo("/")
    }
  }, []);
  return (
    <Layout>
      <Tabs defaultValue="login">
        <Tabs.List>
          <Tabs.Tab value="login">{trans("login")}</Tabs.Tab>
          <Tabs.Tab value="signup">{trans("signup")}</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="login">
          <Login />
        </Tabs.Panel>
        <Tabs.Panel value="signup">
          <Register />
        </Tabs.Panel>
      </Tabs>
    </Layout>
  );
};

export default LoginAndRegister;
