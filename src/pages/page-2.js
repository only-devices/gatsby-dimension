import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const SecondPage = () => (
  <Layout>
    <h1>Welcome heading! (no masking)</h1>
    <p data-cs-encrypt>This is a paragraph. | attribute="data-cs-encrypt"</p>
    <div>
      <form action="/submit">
        <label for="firstName">First name: (field below has data-cs-encrypt)</label>
        <input type="text" id="firstName-input" name="firstName" data-cs-encrypt />
        <input type="submit" value="Submit" />
      </form>
    </div>
    <div class="contains-PII">
      Div starts here. | class="contains-PII"
      <p data-cs-mask><br />A paragraph within said div. | attribute=['data-cs-mask']</p>
    </div>
    <div>
      -------- No masking here! --------
    </div>
    <br/>
    <div>
      <img src="https://content.sportslogos.net/logos/53/75/full/6509_seattle_mariners-alternate-2015.png" width="200" alt="something" class="contains-PII" />
    </div>
    <div>
      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
)

export default SecondPage
