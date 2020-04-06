import React from 'react';
import usePosts from '../hooks/usePosts';
import PostPreview from '../components/post-preview';

import Layout from '../components/layout';
export default () => {
  const posts = usePosts();
  return (
    <Layout>
      {posts.map(post => (
        <PostPreview key={post.slug} post={post}/>
      ))}
    </Layout>
  );
};
