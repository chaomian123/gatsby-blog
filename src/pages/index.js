import React from 'react';
import usePosts from '../hooks/usePosts';


import Layout from '../components/layout';
export default () => {
  const posts = usePosts();
  return (
    <Layout>
      {posts.map(post => (
        <pre>{JSON.stringify(post, null, 2)}</pre>
      ))}
    </Layout>
  );
};
