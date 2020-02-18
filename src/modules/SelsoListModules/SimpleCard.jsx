import React from "react";
import styled, { css } from "styled-components";

export default function SimpleCard({ user }) {
  console.log(user);

  const Circle = styled.div`
    width: 1rem;
    height: 1rem;
    background: ${props => props.color || "black"};
    border-radius: 50%;
    float: right;
    margin: 0 auto;
    font-size: 0.7rem;
    margin-top: 5px;
    margin-left: 15px;
    text-align: center;
  `;

  return (
    <div
      style={{
        width: "375px",
        height: "135px",
        "font-size": "16px",
        border: "2px solid",
        marginBottom: "5px"
      }}
    >
      <div
        className="left"
        style={{
          width: "260px",
          height: "130px",
          float: "left",
          paddingTop: "15px"
        }}
      >
        <div className="First-Top">
          <div
            style={{
              width: "135px",
              float: "left",
              paddingLeft: "15px",
              paddingRight: "15px"
            }}
          >
            {user.nickname}
          </div>
          <div
            style={{
              "border-left": "1px solid",
              float: "right",
              paddingRight: "5px",
              paddingLeft: "15px"
            }}
          >
            {}'{user.age}살' <Circle color="orange">N</Circle>
          </div>

          <div
            className="Second-Tag"
            style={{
              color: "blue",
              fontSize: "10px",
              clear: "both",
              paddingLeft: "15px"
            }}
          >
            {user.tag}
          </div>
          <div
            className="Third-lastword"
            style={{ fontSize: "14px", clear: "both", paddingLeft: "15px" }}
          >
            #{user.lastTemptingWord}
          </div>
        </div>
      </div>
      <div
        className="right"
        style={{
          border: "2px solid",
          float: "left",
          margin: "10px",
          width: "90px",
          height: "90px"
        }}
      >
        <p>이미지박스</p>
      </div>
    </div>
  );
}
