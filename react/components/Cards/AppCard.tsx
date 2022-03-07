import React from 'react'
import { Button, Tag } from 'vtex.styleguide'
import CardDiv from './CardDiv';
import { AppData } from '../../typings/appdata'

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
    <div className="mb2">
      <span className="mr2">
        {GetStatusTagByColor(appStatus)}
      </span>
    </div>
  )
}

function RenderStoreTags(appStatus: string, stores: string[]){
  return(
    <div className="mb2">
      {stores.map((store, i) => {
        if (appStatus == "idea"){
          return(
            <span key={"span-" + store + i} className="mr2 mb2">
              <Tag size="small" variation="low">
                {store}
              </Tag>
            </span>
          )
        } else {
          return(
            <span key={"span-" + store + i} className="mr2 mb2">
              <Tag size="small">
                {store}
              </Tag>
            </span>
          )
        }
      })}
    </div>
  );
}

function RenderCategoryTags(appStatus: string, categories: string []){
  return(
    <div className="mb2">
      {categories.map((category, i) =>{
        if (appStatus == "idea"){
          return(
            <span key={"span-" + category + i} className="mr2 mb2">
              <Tag size="small" variation="low">
                {category}
              </Tag>
            </span>
          )
        } else {
          return(
            <span key={"span-" + category + i} className="mr2 mb2">
              <Tag size="small" bgColor="#134CD8">
                {category}
              </Tag>
            </span>
          )
        }
      })}
    </div>
  )
}

const AppCard = (props: AppData) => {
  return (
    <div className='w-100 w-third-ns pa3' key={"card-" + props.id}>
      <CardDiv>
        <div className='flex flex-wrap items-center mv5'>
          {RenderStatusTag(props.status)}
          {RenderStoreTags(props.status, props.store)}
          {RenderCategoryTags(props.status, props.category)}
        </div>
        <div className='flex flex-column'>
          <a className="link" href={props.url}>
            <div className='flex'>
                <div className="image-size mr4">
                  <img
                    className='mw-100 mh-100'
                    src={props.photo}
                    alt="AppIcon"
                  />
                </div>
                <div className="card-div-name mr4">
                  <h3 className='f5 fw5 near-black mv3'>
                    {props.name}
                  </h3>
                </div>
            </div>
          </a>
          <div>
            <p className='f7 c-muted-2'>
              {props.description}
            </p>
          </div>
          <div className='flex justify-end items-center'>
            <Button variation="secondary" size="small" href={props.url}>
              Ver más
            </Button>
          </div>
        </div>
      </CardDiv>
    </div>
  )
}

export default AppCard
