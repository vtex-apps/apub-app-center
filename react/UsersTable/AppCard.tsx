import React from 'react'
import { Card, Button, Tag } from 'vtex.styleguide'
import { AppData } from '../typings/appdata'

function GetStatusTagByColor(appStatus: string){
  switch(appStatus) {
    case 'prod':
      return (
        <Tag size="small" type="success">
          {appStatus}
        </Tag>
    );
    case 'beta':
      return (
        <Tag size="small" type="warning">
          {appStatus}
        </Tag>
    );
    default:
      return (
        <Tag size="small" variation="low">
          {appStatus}
        </Tag>
    );
  }
}

function RenderStatusTag (appStatus: string) {
  return(
    <span className="mr3">
      {GetStatusTagByColor(appStatus)}
    </span>
  )
}

function RenderStoreTags(stores: string[]){
  return(
    <div>
      {stores.map((store, i) => {
          return(
            <span key={"span-" + store + i} className="mr3">
              <Tag size="small">
                {store}
              </Tag>
            </span>
          )
        })}
    </div>
  );
}

const AppCard = (props: AppData) => {
  return (
    <div className='w-100 w-third-ns pa3' key={"card-" + props.id}>
      <Card>
        <div className='flex flex-wrap items-center mv5'>
          {RenderStatusTag(props.status)}
          {RenderStoreTags(props.store)}
          {/* <span className="mr3">
            <Tag size="small">
              {props.category[0]}
            </Tag>
          </span> */}
        </div>
        <div className='flex flex-column'>
          <div className='flex'>
            <div className="image-size mr4">
              <img
                className='mw-100 mh-100'
                src={props.photo}
                alt="AppIcon"
              />
            </div>
            <div style={{ width: 'calc(100% - 75px)' }}>
              <h3 className='f5 fw5 near-black mv3'>
                {props.name}
              </h3>
            </div>
          </div>
          <div>
            <p className='f7 c-muted-2'>
              {props.description}
            </p>
          </div>
          <div className='flex justify-end items-center'>
            <Button variation="secondary" size="small">
              Ver más
            </Button>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default AppCard
