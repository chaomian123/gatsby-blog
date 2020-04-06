import React from 'react';
import { Global, css } from '@emotion/core';
import Headers from './header';
import Helmet from 'react-helmet';
import useSiteMetadata from '../hooks/use-sitemetadata'
const Layout = ({ children }) => {
  const { title, description} = useSiteMetadata()

  return (
    <>
    <Global styles={css`
      * {
        box-sizing: border-box;
        margin: 0;
      } 
    `} />
    <Helmet>
      <html lang="zh-cn"/>
      <title>{title}</title>
      <meta name="description" content={description}/>
    </Helmet>
   <Headers/>
    <main
      css={css`
       width: 800px;
       padding-top: 60px;
       margin: 0 auto;
       background-size: initial;
       & h2 {
        font-family: 'Merriweather', sans-serif;
        font-size: 55px;
        line-height: 80px;
        color: #5d5c5c;
        font-weight: 700;
        font-style: normal;
       }
       & p {
        font-family: 'Merriweather', sans-serif;
        font-size: 16px;
        line-height: 32px;
        color: #5d5c5c;
        font-weight: 400;
        margin-bottom: 25px
       }
      `}
    >{children}</main>
  </>
  )
 
};
export default Layout;
