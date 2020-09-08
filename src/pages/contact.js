import React from 'react';
import Layout from '../components/layout';
import Head from '../components/head';

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact me</h1>
      <p>Email: scarlettcello@gmail.com</p>
      <p><a href="https://github.com/scarlettcello" target="_blank">github</a></p>
    </Layout>
  )
}

export default ContactPage;