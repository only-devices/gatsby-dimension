import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
// Generate a number between 0 and 10, including 10
function generateRandomInteger(max) {
  return Math.floor(Math.random() * max) + 1;
}

let orderNo = generateRandomInteger(10000000);

const SubmitPage = () => (
  <Layout>
    <div>
    <h1>Order Submitted</h1>
    <p>Thanks, great work</p>
    <p>Your order number is <span data-cs-encrypt>{orderNo}</span></p>
    <br />
    </div>
    <Link to="/page-2">Go back to the the lab</Link>
  </Layout>
)

export default SubmitPage
