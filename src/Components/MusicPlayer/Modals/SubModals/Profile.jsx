import { Modal, Button, Form, Input } from "antd";
import React, { useContext, useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { PlayerContext } from "../../../Context/PlayerContext";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

const Profile = ({ onClose }) => {
  const { setUsername, updateProfile } = useContext(PlayerContext);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [file, setFile] = useState(null);
  const [isImageReady, setImageReady] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewImage(reader.result);
        setImageReady(true);
      };
      reader.readAsDataURL(file);
      setFile(file);
    }
  };

  const onFinish = async (values) => {
    const { name, password } = values.user;
    setUsername(name);
    localStorage.setItem("username", name);
    localStorage.setItem("password", btoa(password));
    if (previewImage && isImageReady) {
      localStorage.setItem("profileImage", previewImage);
      console.log("Image successfully saved to localStorage.");
    } else {
      console.log("No image to save.");
    }
    updateProfile(name, previewImage);
    onClose();
  };

  return (
    <Modal visible={true} onCancel={onClose} footer={null}>
      {previewOpen && (
        <Modal
          visible={previewOpen}
          footer={null}
          onCancel={() => setPreviewOpen(false)}
        >
          <img src={previewImage} alt="Preview" />
        </Modal>
      )}
      <Form
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
      >
        <Form.Item label="Upload Image">
          <input type="file" accept="image/*" onChange={handleFileChange} />
          {previewImage && (
            <img
              src={previewImage}
              alt="Preview"
              style={{ width: "100%", marginTop: 8 }}
            />
          )}
        </Form.Item>
        <Form.Item
          name={["user", "name"]}
          label="Username"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="password"
          label="Password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button
            type="primary"
            htmlType="submit"
            disabled={!isImageReady && file}
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default Profile;
