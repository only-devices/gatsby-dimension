import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const SecondPage = () => (
  <Layout>
    <h1>Welcome heading! (no masking)</h1>
    <p data-cs-encrypt>This is a paragraph. (data-cs-encrypt)</p>
    <div>
      <form action="/submit">
        <label for="fname">First name:</label>
        <input type="text" id="fname" name="fname" data-cs-encrypt />
        <input type="submit" value="Submit" />
      </form>
    </div>
    <div class='contains-PII'>
      Div starts here.
      <p data-cs-mask><br />A paragraph within said div. (data-cs-mask)</p>
      <img src="https://content.sportslogos.net/logos/53/75/full/6509_seattle_mariners-alternate-2015.png" width="400" alt="something" data-cs-encrypt />
    </div>

    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
