import React, { FC } from 'react'
import { FormattedMessage } from 'react-intl'
import { Layout, PageBlock, PageHeader } from 'vtex.styleguide'
import { useRuntime } from 'vtex.render-runtime'

import './styles/styles.global.css'

const AppDetail: FC<Props> = ({ params }) => {
  const { navigate } = useRuntime();
  return (
    <Layout
      pageHeader={
        <PageHeader title={<FormattedMessage id="apub-app-center.details" />}
        linkLabel="APUB App Center"
        onLinkClick={() => {
          navigate({to: `/admin/app/apub-app-center`})
        }}
        />
      }
    >
      <PageBlock variation="full">
        <div>
          Params: <pre>{JSON.stringify(params, null, 2)}</pre>
        </div>
      </PageBlock>
    </Layout>
  )
}

interface Props {
  params: any
}

export default AppDetail
