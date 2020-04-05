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
       
      `}
    >{children}</main>
  </>
  )
 
};
export default Layout;
