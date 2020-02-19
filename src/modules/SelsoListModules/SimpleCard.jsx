import React from "react";
import styled, { css } from "styled-components";
import "./SimpleCard.scss";

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
    <div className="Card">
      <div className="Left">
        <div className="First-Top">
          <div className="First-Top-Nickname">{user.nickname}</div>
          <div className="First-Top-Age">
            '{user.age}살' <Circle color="orange">N</Circle>
          </div>

          <div className="Second-Tag">{user.tag}</div>
          <div className="Third-lastword">#{user.lastTemptingWord}</div>
        </div>
      </div>
      <div className="Right">
        <p>이미지박스</p>
      </div>
    </div>
  );
}
