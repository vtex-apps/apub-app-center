import React, { Fragment } from 'react'
import { Card, Button, Tag } from 'vtex.styleguide'
import { AppData } from '../typings/appdata'

function RenderStoreTags(stores: string[]){
  return(
    <Fragment>
      {stores.map((store) => {
          return(
            <span className="mr2">
              <Tag size="small">
                {store}
              </Tag>
            </span>
          )
        })}
    </Fragment>
  );
}

const AppCard = (props: AppData) => {
  return (
    <div className='w-100 w-third-ns pa3'>
      <Card>
        <div className='flex flex-wrap items-center mv5'>
          <span className="mr2">
            <Tag size="small">
              {props.status}
            </Tag>
          </span>
          {RenderStoreTags(props.store)}
          <span className="mr2">
            <Tag size="small">
              {props.category[0]}
            </Tag>
          </span>
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
            <p className='f7 c-muted-2'>Permite escanear y leer códigos de barras o QR de productos para dirigirte a su PDP o agregarlos al carrito.</p>
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
