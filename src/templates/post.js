import  React from 'react'
import Layout from '../components/layout'
import { css } from '@emotion/core'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx';

export const query = graphql `
  query($slug: String!) {
    mdx(frontmatter: {slug: {eq: $slug}}) {
      frontmatter {
        title
        author
      }
      body
    }
  }
`
const postTemplate = ({ data : { mdx : post}}) => (
  <Layout>
    <h1>{post.frontmatter.title}</h1>
    <p css={css`
      font-size: 0.75rem;
    `}>Posted by {post.frontmatter.author}</p>
    <MDXRenderer>{post.body}</MDXRenderer>
  </Layout>
)

export default postTemplate
