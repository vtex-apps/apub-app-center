import React from "react";
import { Link } from 'vtex.styleguide'

const Resume = (props: { photo: string, version: number, status: string, store: string[], category: string[], documentation: string}) => {
  return(
    <div className="w-20">
      <div>
        <img src={props.photo} alt="App detail photo" />
      </div>
      <h6 className="f6 near-black mv3">Última versión</h6>
      <p className="f6 gray mt0 mb7">
      {props.version}.x
      </p>
      <h6 className="f6 near-black mv3">Status</h6>
      <p className="f6 gray mt0 mb7">
        {props.status}
      </p>
      <h6 className="f6 near-black mv3">Tiendas</h6>
      <p className="f6 gray mt0 mb7">
        {props.store.join(', ')}
      </p>
      <h6 className="f6 near-black mv3">Categorias</h6>
      <p className="f6 gray mt0 mb7">
        {props.category.join(', ')}
      </p>
      <h6 className="f6 near-black mv3">Soporte</h6>
      <p>
        <Link
          href={props.documentation}
          target="_blank"
          mediumWeigth>
          Documentación
        </Link>
      </p>
    </div>
  )
}

export default Resume
