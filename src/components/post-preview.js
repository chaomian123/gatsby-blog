import React from 'react';
import {Link} from 'gatsby';

const postPreview = ({ post }) => (
  <article>
    <h3><Link to={post.slug}>{post.title}</Link></h3>
    <p>{post.excerpt}</p>
    <Link to={post.slug}>阅读全文...</Link>
  </article>
)

export default postPreview;