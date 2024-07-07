import React from "react";
import { Card } from "antd";
const Song = () => {
  return (
    <>
      <div
        className=" m-3
    "
      >
        <Card
          className="m-3"
          hoverable
          style={{ width: 240 }}
          cover={
            <img
              alt="example"
              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            />
          }
        >
          <a href="">this is card content</a>
        </Card>
      </div>
    </>
  );
};

export default Song;
