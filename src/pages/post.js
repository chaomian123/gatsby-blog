import React from 'react';
import { Link } from 'gatsby';
import Layout from '../component/layout';
export default () => {
  return (
    <Layout>
      <Link to="/">首页</Link>
      &nbsp;
      <Link to="/about/">关于我</Link>
      归档&nbsp;
    </Layout>
  );
};
