import React from 'react'
import { Card, Button } from 'vtex.styleguide'
import { AppData } from '../typings/appdata'

const AppCard = (props: AppData) => {
  return (
    <div style={{ padding: '80px' }}>
      <Card noPadding>
        <h3 className="pl6 pr6 pt6">{props.name}</h3>
        <img
          width="100%"
          src="https://careers.vtex.com/assets/media/perspectives03.jpg"
          alt="AppIcon"
        />
        <Button>Ver más</Button>
      </Card>
    </div>
  )
}

export default AppCard
