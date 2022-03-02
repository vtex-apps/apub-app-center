import React from 'react'
import { Card, Button, Tag } from 'vtex.styleguide'
import { AppData } from '../typings/appdata'

const AppCard = (props: AppData) => {
  return (
    <div className='w-100 w-third-ns pa3'>
      <Card>
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
              <h3 className='f5 fw5 near-black mb1 mt0'>
                {props.name}
              </h3>
            </div>
          </div>

          <div className='flex flex-wrap items-center mv5'>
            <span className="mr4 mt2">
              <Tag size="small">
                {props.status}
              </Tag>
            </span>
            <span className="mr4 mt2">
              <Tag size="small">
                {props.store[0]}
              </Tag>
            </span>
            <span className="mr4 mt2">
              <Tag size="small">
                {props.store[1]}
              </Tag>
            </span>


            <span className="mr4 mt2">
              <Tag size="small">
                {props.category[0]}
              </Tag>
            </span>
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
