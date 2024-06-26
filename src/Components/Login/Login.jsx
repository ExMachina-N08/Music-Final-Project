import React from "react";

import "./login.css";
import { SpotifyFilled } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, ConfigProvider } from "antd";

const Login = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
    localStorage.setItem("userData", JSON.stringify(values));
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <div className="login-div">
        <SpotifyFilled style={{ fontSize: 60 }} />
        <h1>Log in to Music Apps </h1>
        <Form
          name="normal-login"
          variant="filled"
          className="login-form"
          layout="vertical"
          // labelCol={{
          //   span: 8,
          // }}
          wrapperCol={{
            span: 24,
          }}
          style={{
            maxWidth: 700,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
            />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              // offset: 0,
              span: 6,
            }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item
          // wrapperCol={{
          //   offset: 8,
          //   span: 16,
          // }}
          >
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              style={{ fontSize: 22 }}
            >
              <Link to="/app">Login</Link>
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default Login;
