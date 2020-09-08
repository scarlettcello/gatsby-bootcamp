import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Head from '../components/head';

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About" />
      <h1>This is about me.</h1>
      <h2>Bio</h2>
      <p>I was born and grew up in Seoul, Korea.</p>
      <p>Want to keep in touch? <Link to="/contact">Click here</Link></p>
    </Layout>
  )
}

export default AboutPage;