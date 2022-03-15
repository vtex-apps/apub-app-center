import React, { FC, useEffect, useState } from 'react'
import { FormattedMessage } from 'react-intl'
import { Divider, Layout, PageBlock, PageHeader } from 'vtex.styleguide'
import AppTabs from './components/Detail/AppTabs'
import { useRuntime } from 'vtex.render-runtime'
import { AppData } from './typings/appdata'
import MockedData from './data/mockedData'

import './styles/styles.global.css'

const AppDetail: FC<Props> = ({ params }) => {
  const { navigate } = useRuntime();
  const [appInfo, setAppInfo] = useState<AppData>();
  useEffect(() => {
    if (!appInfo){
      let apps = MockedData.GetData();
      let app = apps.filter(x => x.id == params.id)[0];
      setAppInfo(app);
    }
  }, [])

  return (
    <Layout
      pageHeader={
        <PageHeader
        title={<FormattedMessage id="apub-app-center.details" />}
        linkLabel="APUB App Center"
        onLinkClick={() => {
          navigate({to: `/admin/app/apub-app-center`})
        }}
        />
      }
    >
      <PageBlock variation="full">
        <div className="flex">
          <div className="w-20">
            <p className="f6 gray ma0">
              Version: 0.1.2x
            </p>
            <div>
              Params: <pre>{JSON.stringify(params, null, 2)}</pre>
              Nombre: {appInfo?.name}
            </div>
          </div>
          <div
            style={{ flexGrow: 1 }}
            className="flex items-stretch w-10 justify-center">
            <Divider orientation="vertical" />
          </div>
          <AppTabs/>
        </div>
      </PageBlock>
    </Layout>
  )
}

interface Props {
  params: any
}

export default AppDetail
