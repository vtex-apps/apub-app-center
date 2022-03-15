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
      <div className="bg-muted-5 pa8">
        <PageBlock variation="aside">
        <div>
          Params: <pre>{JSON.stringify(params, null, 2)}</pre>
        </div>
        </PageBlock>
      </div>
    </Layout>
  )
}

interface Props {
  params: any
}

export default AppDetail
