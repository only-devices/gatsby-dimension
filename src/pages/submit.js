import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const SubmitPage = () => (
  <Layout>
    <h1>Form Submitted</h1>
    <p>Thanks, great work</p>
    <Link to="/page-2">Go back to the the lab</Link>
  </Layout>
)

export default SubmitPage
