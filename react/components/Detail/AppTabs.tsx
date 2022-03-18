import React, { useState } from 'react'
// import { FormattedMessage } from 'react-intl'
import { Tabs, Tab, Button, Link } from 'vtex.styleguide'

const Check = (
  <svg className="vtex__icon-check" width="20" height="20" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" fill="none">
    <path d="M10.8 4.4L9.4 3L5.4 7L3.4 5L2 6.4L5.4 9.8L10.8 4.4Z" fill="currentColor">
    </path>
  </svg>
)

const RenderGetAppButton = ( appStore: string ) => {
  return(
    <>
    {
      appStore == null || appStore == '' ?
      (
        <div className="w-30"></div>
      )
      :
      (
        <div className="w-30">
          <Button variation="primary" href={appStore} target="_blank">
            Descarga la App
          </Button>
        </div>
      )
    }
    </>
  )
}

const RenderAppFeatures = ( features: string[] ) => {
  return(
    (features.map(feature =>{
      return(
        <div className="gray flex ma0">
          {Check}
          <p className="f6 gray ma2">
            {feature}
          </p>
        </div>
      )
    }))
  )
}

const RenderAppRequirements = ( requirements: string[] ) => {
  return(
    (requirements.map(requirement =>{
      return(
        <li>
          <p className="f6 gray ma0">
          {requirement}
          </p>
        </li>
      )
    }))
  )
}

const RenderAppTutorial = ( tutorials: string[] ) => {
  return(
    (tutorials.map(tutorial =>{
      return(
        <li>
          <p className="f6 ma0">
          {tutorial}
          </p>
        </li>
      )
    }))
  )
}

const RenderAppAssets = ( assets: string[] ) => {
  return(
    (assets.map(asset =>{
      return(
        <p className="f6 gray ma0">
          <Link
            href=""
            target="_blank"
            mediumWeigth>
            {asset}
          </Link>
        </p>
      )
    }))
  )
}

const AppTabs = (props: {
  name: string,
  download: string,
  overview: string,
  feature: string[],
  screenshot: string,
  workspace: string,
  video: string,
  requirements: string[],
  tutorial: string[],
  assets: string[],
  github: string
}) => {
  const [currentTab, setCurrentTab] = useState<Number>(1);
  return (
    <div className="w-80">

      <div className='flex mb9'>

        <div className="w-70">
          <h2 className="ma3"> {props.name} </h2>
        </div>

        {RenderGetAppButton(props.download)}

      </div>

      <Tabs fullWidth>
        <Tab

          label="Resumen"
          active={currentTab == 1}
          onClick={() => setCurrentTab(1)}>

          <p className="f9 mt8 mb5">Overview</p>
          <p className="f6 gray ma0">
            {props.overview}
          </p>

          <p className="f9 mt8 mb5">Features</p>
          <div className='ph6 pv3'>

            {RenderAppFeatures(props.feature)}

          </div>


          <p className="f9 mt8 mb5">Screenshots</p>
          <img src={props.screenshot} alt="App detail photo" />

        </Tab>

        <Tab
          label="Demo"
          active={currentTab === 2}
          onClick={() => setCurrentTab(2)}>
          <p className="f9 mt8 mb5">Entorno</p>
          <p className="f6 gray ma0">
            {props.workspace}
          </p>
          <p className="f9 mt8 mb5">Video</p>
          <p className="f6 gray ma0">
            {props.video}
          </p>
        </Tab>

        <Tab
          label="Tutorial"
          active={currentTab === 3}
          onClick={() => setCurrentTab(3)}>
          <p className="f9 mt8 mb5">Requisitos</p>
          <ul>
            {RenderAppRequirements(props.requirements)}
          </ul>

          <p className="f9 mt8 mb5">Paso a Paso</p>

          <ol>
            {RenderAppTutorial(props.requirements)}
          </ol>

          <p className="f9 mt8 mb5">Descargar Assets</p>

          <div>
            {RenderAppAssets(props.assets)}
          </div>

          <p className="f9 mt8 mb5">Links de Ayuda</p>
          <p className="f6 gray ma0">
            <Link
              href="https://vtex.slack.com/archives/C017JF73XCH"
              target="_blank"
              mediumWeigth>
              Canal de Slack APUB First Party Apps
            </Link>
          </p>
          <p className="f6 gray ma0">
            <Link
              href={props.github}
              target="_blank"
              mediumWeigth>
              Repo de Github
            </Link>
          </p>
        </Tab>
      </Tabs>

  </div>
  )
}

export default AppTabs
