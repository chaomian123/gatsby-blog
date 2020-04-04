import React from 'react';
import { Global, css } from '@emotion/core';

const Layout = ({ children }) => (
  <>
    <Global styles={css``} />
    <header>我的博客</header>
    <main>{children}</main>
  </>
);

export default Layout;
