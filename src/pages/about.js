import React from 'react';
import { Link } from 'gatsby';
import Layout from '../component/layout';
export default () => {
  return (
    <Layout>
      <Link to="/">首页</Link>
      &nbsp; 关于我 &nbsp;
      <Link to="/post/">归档</Link>
    </Layout>
  );
};
