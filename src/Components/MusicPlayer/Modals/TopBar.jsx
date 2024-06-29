import React from "react";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Flex, Space } from "antd";
import "./topbar.css";
const TopBar = () => {
  // const [value, setValue] = React.useState("horizontal");
  return (
    <>
      <Flex>
        <Space align="center" size={"small"}>
          <Avatar
            size={{ xs: 24, sm: 32, md: 40, lg: 50, xl: 50, xxl: 55 }}
            icon={<UserOutlined />}
            className="profile"
          />
          {/* <h2>User Name</h2> */}
        </Space>
      </Flex>
    </>
  );
};

export default TopBar;
