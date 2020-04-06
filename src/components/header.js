import React from 'react';
import {Link} from 'gatsby'
import { css } from '@emotion/core';
import styled from '@emotion/styled';

const NavLink = styled(Link)`
    padding: 0 50px;
    color: #5d5c5c;
    text-decoration: none;
    &:hover {
      color: #ccc;
    }
`
const Header = () => (
  <header>
      <div
        css={css`
        margin: 0 auto;
        width: 100%;
        display: flex;
        justify-content: center;
        height: 50px;
        line-height: 50px;
        background: #f8f8f8;
        `}
        >
          <NavLink to="/">首页</NavLink>
          {/* <NavLink to="/about">关于我</NavLink> */}
          <NavLink to="/list">归档</NavLink>
          <NavLink to="/contact">联系我</NavLink>
        </div>
        <div css={css`
          background: url("https://static.tumblr.com/c2ca24d36168f0aa4f089b62c2f9b757/negrna7/bpqojxain/tumblr_static_33qfyglfxg6ckogc0o84ogko0.png");
          background-size: cover;
          min-height: 440px;
          background-position-y: -155px;
          background-repeat: space;
        `}>
      
          <div css={css`
            padding-top: 110px;
          `} >
            <h1 css={css`
              font-family: 'Bookmania', serif;
              font-size: 130px;
              line-height: 80px;
              color: #fff;
              font-weight: 900;
              font-style: normal;
              text-align: center;
              text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
            `}>write</h1>
          </div>
          <div css={css`
            padding-top: 40px;
          `}>
            <h6 css={css`
              font-size: 16px;
              text-align: center;
              font-weight: 400;
              color: #fff;
              text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
              letter-spacing: 0px;
            `}>如果有风，我心里的单词卡就会轻轻地翻动</h6>
          </div>
        </div>   
    </header>   
)
export default Header;