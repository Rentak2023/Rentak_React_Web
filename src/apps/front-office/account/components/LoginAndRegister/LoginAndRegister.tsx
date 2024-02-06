import React, { useState } from "react";
import { Card, Wrapper } from "./style";
import { Container } from "apps/front-office/design-system/components/Grids";
import { Tabs } from "@mantine/core";
import { trans } from "@mongez/localization";
import Login from "./Login";
import Register from "./Register";
import Layout from "../Layout";

const LoginAndRegister = () => {
  const [activeTab, setActiveTab] = useState("first");

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
