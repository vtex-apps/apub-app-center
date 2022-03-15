import React, { useState } from 'react'
import { FormattedMessage } from 'react-intl'
import { Tabs, Tab, Button } from 'vtex.styleguide'

const AppTabs = () => {
  const [currentTab, setCurrentTab] = useState<Number>(1);

  return (
    <div className="w-80">

    <div className='flex mb8'>

      <div className="w-70">
        <h2 className="ma3"> {<FormattedMessage id="apub-app-center.details" />} </h2>
      </div>

      <div className="w-30">
        <Button variation="primary" href="http://vtex.com" target="_blank">
          Descarga la App
        </Button>
      </div>

    </div>

    <Tabs fullWidth>
      <Tab
        label="Resumen"
        active={currentTab == 1}
        onClick={() => setCurrentTab(1)}>
        <p>Content for the accounts.</p>
        <p className="f6 gray ma0">
          In Cards, your customer is given autonomy to manage credit cards
          related to his account, and can add, remove or edit credit card data.
        </p>
      </Tab>
      <Tab
        label="Demo"
        active={currentTab === 2}
        onClick={() => setCurrentTab(2)}>
        <p>Content for the invoices.</p>
        <p className="f6 gray ma0">
          In Cards, your customer is given autonomy to manage credit cards
          related to his account, and can add, remove or edit credit card data.
        </p>
      </Tab>
      <Tab
        label="Tutorial"
        active={currentTab === 3}
        onClick={() => setCurrentTab(3)}>
        <p>Content for settings.</p>
        <p className="f6 gray ma0">
          In Cards, your customer is given autonomy to manage credit cards
          related to his account, and can add, remove or edit credit card data.
        </p>
      </Tab>
    </Tabs>

  </div>
  )
}

export default AppTabs
