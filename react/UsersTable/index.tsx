import React, { Component } from 'react'
import { AppData } from '../typings/appdata'
import AppCard from './AppCard'


const arrCardData: AppData[] = [];

function SetCardData () {
  let app1 = {} as AppData;
  app1.id = 1;
  app1.name = "Massive price update";
  app1.photo = "https://extensions.vtexassets.com/arquivos/ids/157356-800-auto?v=637789878477770000&width=800&height=auto&aspect=true";
  app1.status = "prod";
  app1.store = ['legacy', 'io'];
  app1.category = ['prices'];
  app1.description = "Permite escanear y leer códigos de barras o QR de productos para dirigirte a su PDP o agregarlos al carrito.";  app1.url = "/admin/app/apub-app-center/:id";
  app1.url = "/admin/app/apub-app-center/:id";

  let app2 = {} as AppData;
  app2.id = 2;
  app2.name = "Product highlight by vtex-segment";
  app2.photo = "https://extensions.vtexassets.com/arquivos/ids/157356-800-auto?v=637789878477770000&width=800&height=auto&aspect=true";
  app2.status = "idea";
  app2.store = ['legacy', 'io'];
  app2.category = ['pdp'];
  app2.description = "Permite escanear y leer códigos de barras o QR de productos para dirigirte a su PDP o agregarlos al carrito.";
  app2.url = "/admin/app/apub-app-center/:id";

  let app3 = {} as AppData;
  app3.id = 3;
  app3.name = "Massive score update";
  app3.photo = "https://extensions.vtexassets.com/arquivos/ids/157356-800-auto?v=637789878477770000&width=800&height=auto&aspect=true";
  app3.status = "beta";
  app3.store = ['legacy', 'io'];
  app3.category = ['catalog'];
  app3.description = "Permite escanear y leer códigos de barras o QR de productos para dirigirte a su PDP o agregarlos al carrito.";
  app3.url = "/admin/app/apub-app-center/:id";

  // let app4 = {} as AppData;
  // app4.id = 4;
  // app4.name = "Massive stock update";
  // app4.photo = "https://extensions.vtexassets.com/arquivos/ids/157356-800-auto?v=637789878477770000&width=800&height=auto&aspect=true";
  // app4.status = "prod";
  // app4.store = ['legacy', 'io'];
  // app4.category = ['admin', 'checkout'];
  // app4.description = "Permite escanear y leer códigos de barras o QR de productos para dirigirte a su PDP o agregarlos al carrito.";
  // app4.url = "/admin/app/apub-app-center/:id";

  // let app5 = {} as AppData;
  // app5.id = 5;
  // app5.name = "Tintometric";
  // app5.photo = "https://extensions.vtexassets.com/arquivos/ids/157356-800-auto?v=637789878477770000&width=800&height=auto&aspect=true";
  // app5.status = "prod";
  // app5.store = ['io'];
  // app5.category = ['admin', 'checkout'];
  // app5.description = "Permite escanear y leer códigos de barras o QR de productos para dirigirte a su PDP o agregarlos al carrito.";
  // app5.url = "/admin/app/apub-app-center/:id";

  // let app6 = {} as AppData;
  // app6.id = 6;
  // app6.name = "Pharma orders admin";
  // app6.photo = "https://extensions.vtexassets.com/arquivos/ids/157356-800-auto?v=637789878477770000&width=800&height=auto&aspect=true";
  // app6.status = "prod";
  // app6.store = ['legacy', 'io'];
  // app6.category = ['admin', 'checkout'];
  // app6.description = "Permite escanear y leer códigos de barras o QR de productos para dirigirte a su PDP o agregarlos al carrito.";
  // app6.url = "/admin/app/apub-app-center/:id";

  // let app7 = {} as AppData;
  // app7.id = 7;
  // app7.name = "Product availability gallery";
  // app7.photo = "https://extensions.vtexassets.com/arquivos/ids/157356-800-auto?v=637789878477770000&width=800&height=auto&aspect=true";
  // app7.status = "prod";
  // app7.store = ['legacy', 'io'];
  // app7.category = ['admin', 'checkout'];
  // app7.description = "Permite escanear y leer códigos de barras o QR de productos para dirigirte a su PDP o agregarlos al carrito.";
  // app7.url = "/admin/app/apub-app-center/:id";

  // let app8 = {} as AppData;
  // app8.id = 8;
  // app8.name = "Qr barcode reader";
  // app8.photo = "https://extensions.vtexassets.com/arquivos/ids/157356-800-auto?v=637789878477770000&width=800&height=auto&aspect=true";
  // app8.status = "prod";
  // app8.store = ['pdp'];
  // app8.category = ['admin', 'checkout'];
  // app8.description = "Permite escanear y leer códigos de barras o QR de productos para dirigirte a su PDP o agregarlos al carrito.";
  // app8.url = "/admin/app/apub-app-center/:id";

  // let app9 = {} as AppData;
  // app9.id = 9;
  // app9.name = "Workspace manager";
  // app9.photo = "https://extensions.vtexassets.com/arquivos/ids/157356-800-auto?v=637789878477770000&width=800&height=auto&aspect=true";
  // app9.status = "prod";
  // app9.store = ['legacy', 'io'];
  // app9.category = ['admin', 'checkout'];
  // app9.description = "Permite escanear y leer códigos de barras o QR de productos para dirigirte a su PDP o agregarlos al carrito.";
  // app9.url = "/admin/app/apub-app-center/:id";

  // let app10 = {} as AppData;
  // app10.id = 10;
  // app10.name = "Admin AB Tester";
  // app10.photo = "https://extensions.vtexassets.com/arquivos/ids/157356-800-auto?v=637789878477770000&width=800&height=auto&aspect=true";
  // app10.status = "prod";
  // app10.store = ['legacy', 'io'];
  // app10.category = ['admin'];
  // app10.description = "Permite escanear y leer códigos de barras o QR de productos para dirigirte a su PDP o agregarlos al carrito.";
  // app10.url = "/admin/app/apub-app-center/:id";

  // let app11 = {} as AppData;
  // app11.id = 11;
  // app11.name = "Admin Ley de Gondolas Arg";
  // app11.photo = "https://extensions.vtexassets.com/arquivos/ids/157356-800-auto?v=637789878477770000&width=800&height=auto&aspect=true";
  // app11.status = "prod";
  // app11.store = ['legacy', 'io'];
  // app11.category = ['admin', 'checkout'];
  // app11.description = "Permite escanear y leer códigos de barras o QR de productos para dirigirte a su PDP o agregarlos al carrito.";
  // app11.url = "/admin/app/apub-app-center/:id";

  // let app12 = {} as AppData;
  // app12.id = 12;
  // app12.name = "Vtex-logger react";
  // app12.photo = "https://extensions.vtexassets.com/arquivos/ids/157356-800-auto?v=637789878477770000&width=800&height=auto&aspect=true";
  // app12.status = "prod";
  // app12.store = ['legacy', 'io'];
  // app12.category = ['admin', 'checkout'];
  // app12.description = "Permite escanear y leer códigos de barras o QR de productos para dirigirte a su PDP o agregarlos al carrito.";
  // app12.url = "/admin/app/apub-app-center/:id";

  // let app13 = {} as AppData;
  // app13.id = 13;
  // app13.name = "Speech to Text";
  // app13.photo = "https://extensions.vtexassets.com/arquivos/ids/157356-800-auto?v=637789878477770000&width=800&height=auto&aspect=true";
  // app13.status = "prod";
  // app13.store = ['legacy', 'io'];
  // app13.category = ['admin', 'checkout'];
  // app13.description = "Permite escanear y leer códigos de barras o QR de productos para dirigirte a su PDP o agregarlos al carrito.";
  // app13.url = "/admin/app/apub-app-center/:id";

  // let app14 = {} as AppData;
  // app14.id = 14;
  // app14.name = "Quantity on cart";
  // app14.photo = "https://extensions.vtexassets.com/arquivos/ids/157356-800-auto?v=637789878477770000&width=800&height=auto&aspect=true";
  // app14.status = "prod";
  // app14.store = ['legacy', 'io'];
  // app14.category = ['admin', 'checkout'];
  // app14.description = "Permite escanear y leer códigos de barras o QR de productos para dirigirte a su PDP o agregarlos al carrito.";
  // app14.url = "/admin/app/apub-app-center/:id";

  // let app15 = {} as AppData;
  // app15.id = 15;
  // app15.name = "Vtex-logger GraphQL";
  // app15.photo = "https://extensions.vtexassets.com/arquivos/ids/157356-800-auto?v=637789878477770000&width=800&height=auto&aspect=true";
  // app15.status = "prod";
  // app15.store = ['legacy', 'io'];
  // app15.category = ['admin', 'checkout'];
  // app15.description = "Permite escanear y leer códigos de barras o QR de productos para dirigirte a su PDP o agregarlos al carrito.";
  // app15.url = "/admin/app/apub-app-center/:id";


  arrCardData.push(app1);
  arrCardData.push(app2);
  arrCardData.push(app3);
  // arrCardData.push(app4);
  // arrCardData.push(app5);
  // arrCardData.push(app6);
  // arrCardData.push(app7);
  // arrCardData.push(app8);
  // arrCardData.push(app9);
  // arrCardData.push(app10);
  // arrCardData.push(app11);
  // arrCardData.push(app12);
  // arrCardData.push(app13);
  // arrCardData.push(app14);
  // arrCardData.push(app15);
}

function RenderCards () {
  SetCardData();
  return(
    <div className="flex flex-wrap">
        {arrCardData.map((card) => {
          return(<AppCard
            key={card.id}
            id={card.id}
            name={card.name}
            photo={card.photo}
            status={card.status}
            store={card.store}
            category={card.category}
            description={card.description}
            url={card.url}/>)
        })}
    </div>
  );
}

class UsersTable extends Component {
  public render() {
    return (
      <div>
        {RenderCards()}
      </div>
    )
  }
}

export default (UsersTable)
