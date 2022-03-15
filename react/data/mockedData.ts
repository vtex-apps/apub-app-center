import { AppData } from '../typings/appdata'

const MockedData = {

  GetData: () => {
    let mockedDataList: AppData[] = [];

    let app1 = {} as AppData;
    app1.id = 1;
    app1.name = "Massive price update";
    app1.photo = "https://extensions.vtexassets.com/arquivos/ids/157356-800-auto?v=637789878477770000&width=800&height=auto&aspect=true";
    app1.status = "prod";
    app1.store = ['legacy', 'io'];
    app1.category = ['solution'];
    app1.description = "Permite escanear y leer códigos de barras o QR de productos para dirigirte a su PDP o agregarlos al carrito."

    let app2 = {} as AppData;
    app2.id = 2;
    app2.name = "Product highlight by vtex-segment";
    app2.photo = "https://extensions.vtexassets.com/arquivos/ids/157356-800-auto?v=637789878477770000&width=800&height=auto&aspect=true";
    app2.status = "idea";
    app2.store = ['legacy', 'io'];
    app2.category = ['pdp', 'gallery'];
    app2.description = "Permite escanear y leer códigos de barras o QR de productos para dirigirte a su PDP o agregarlos al carrito.";

    let app3 = {} as AppData;
    app3.id = 3;
    app3.name = "Massive score update";
    app3.photo = "https://extensions.vtexassets.com/arquivos/ids/157356-800-auto?v=637789878477770000&width=800&height=auto&aspect=true";
    app3.status = "beta";
    app3.store = ['legacy', 'io'];
    app3.category = ['solution'];
    app3.description = "Permite escanear y leer códigos de barras o QR de productos para dirigirte a su PDP o agregarlos al carrito.";

    let app4 = {} as AppData;
    app4.id = 4;
    app4.name = "Massive stock update";
    app4.photo = "https://extensions.vtexassets.com/arquivos/ids/157356-800-auto?v=637789878477770000&width=800&height=auto&aspect=true";
    app4.status = "prod";
    app4.store = ['legacy', 'io'];
    app4.category = ['solution'];
    app4.description = "Permite escanear y leer códigos de barras o QR de productos para dirigirte a su PDP o agregarlos al carrito.";

    let app5 = {} as AppData;
    app5.id = 5;
    app5.name = "Tintometric";
    app5.photo = "https://extensions.vtexassets.com/arquivos/ids/157356-800-auto?v=637789878477770000&width=800&height=auto&aspect=true";
    app5.status = "prod";
    app5.store = ['io'];
    app5.category = ['admin', 'pdp'];
    app5.description = "Permite escanear y leer códigos de barras o QR de productos para dirigirte a su PDP o agregarlos al carrito.";

    let app6 = {} as AppData;
    app6.id = 6;
    app6.name = "Pharma orders admin";
    app6.photo = "https://extensions.vtexassets.com/arquivos/ids/157356-800-auto?v=637789878477770000&width=800&height=auto&aspect=true";
    app6.status = "prod";
    app6.store = ['io'];
    app6.category = ['admin'];
    app6.description = "Permite escanear y leer códigos de barras o QR de productos para dirigirte a su PDP o agregarlos al carrito.";

    let app7 = {} as AppData;
    app7.id = 7;
    app7.name = "Product availability gallery";
    app7.photo = "https://extensions.vtexassets.com/arquivos/ids/157356-800-auto?v=637789878477770000&width=800&height=auto&aspect=true";
    app7.status = "prod";
    app7.store = ['io'];
    app7.category = ['pdp', 'gallery', 'search'];
    app7.description = "Permite escanear y leer códigos de barras o QR de productos para dirigirte a su PDP o agregarlos al carrito.";

    let app8 = {} as AppData;
    app8.id = 8;
    app8.name = "Qr barcode reader";
    app8.photo = "https://extensions.vtexassets.com/arquivos/ids/157356-800-auto?v=637789878477770000&width=800&height=auto&aspect=true";
    app8.status = "prod";
    app8.store = ['io'];
    app8.category = ['admin', 'pdp'];
    app8.description = "Permite escanear y leer códigos de barras o QR de productos para dirigirte a su PDP o agregarlos al carrito.";

    let app9 = {} as AppData;
    app9.id = 9;
    app9.name = "Workspace manager";
    app9.photo = "https://extensions.vtexassets.com/arquivos/ids/157356-800-auto?v=637789878477770000&width=800&height=auto&aspect=true";
    app9.status = "prod";
    app9.store = ['io'];
    app9.category = ['admin'];
    app9.description = "Permite escanear y leer códigos de barras o QR de productos para dirigirte a su PDP o agregarlos al carrito.";

    let app10 = {} as AppData;
    app10.id = 10;
    app10.name = "Admin AB Tester";
    app10.photo = "https://extensions.vtexassets.com/arquivos/ids/157356-800-auto?v=637789878477770000&width=800&height=auto&aspect=true";
    app10.status = "prod";
    app10.store = ['io'];
    app10.category = ['admin'];
    app10.description = "Permite escanear y leer códigos de barras o QR de productos para dirigirte a su PDP o agregarlos al carrito.";


    let app11 = {} as AppData;
    app11.id = 11;
    app11.name = "Admin Ley de Gondolas Arg";
    app11.photo = "https://extensions.vtexassets.com/arquivos/ids/157356-800-auto?v=637789878477770000&width=800&height=auto&aspect=true";
    app11.status = "prod";
    app11.store = ['legacy', 'io'];
    app11.category = ['admin', 'pdp'];
    app11.description = "Permite escanear y leer códigos de barras o QR de productos para dirigirte a su PDP o agregarlos al carrito.";


    let app12 = {} as AppData;
    app12.id = 12;
    app12.name = "Vtex-logger react";
    app12.photo = "https://extensions.vtexassets.com/arquivos/ids/157356-800-auto?v=637789878477770000&width=800&height=auto&aspect=true";
    app12.status = "prod";
    app12.store = ['io'];
    app12.category = ['solution'];
    app12.description = "Permite escanear y leer códigos de barras o QR de productos para dirigirte a su PDP o agregarlos al carrito.";


    let app13 = {} as AppData;
    app13.id = 13;
    app13.name = "Speech to Text";
    app13.photo = "https://extensions.vtexassets.com/arquivos/ids/157356-800-auto?v=637789878477770000&width=800&height=auto&aspect=true";
    app13.status = "prod";
    app13.store = ['io'];
    app13.category = ['search'];
    app13.description = "Permite escanear y leer códigos de barras o QR de productos para dirigirte a su PDP o agregarlos al carrito.";


    let app14 = {} as AppData;
    app14.id = 14;
    app14.name = "Quantity on cart";
    app14.photo = "https://extensions.vtexassets.com/arquivos/ids/157356-800-auto?v=637789878477770000&width=800&height=auto&aspect=true";
    app14.status = "prod";
    app14.store = ['io'];
    app14.category = ['checkout'];
    app14.description = "Permite escanear y leer códigos de barras o QR de productos para dirigirte a su PDP o agregarlos al carrito.";


    let app15 = {} as AppData;
    app15.id = 15;
    app15.name = "Vtex-logger GraphQL";
    app15.photo = "https://extensions.vtexassets.com/arquivos/ids/157356-800-auto?v=637789878477770000&width=800&height=auto&aspect=true";
    app15.status = "prod";
    app15.store = ['io'];
    app15.category = ['solution'];
    app15.description = "Permite escanear y leer códigos de barras o QR de productos para dirigirte a su PDP o agregarlos al carrito.";



    mockedDataList.push(app1);
    mockedDataList.push(app2);
    mockedDataList.push(app3);
    mockedDataList.push(app4);
    mockedDataList.push(app5);
    mockedDataList.push(app6);
    mockedDataList.push(app7);
    mockedDataList.push(app8);
    mockedDataList.push(app9);
    mockedDataList.push(app10);
    mockedDataList.push(app11);
    mockedDataList.push(app12);
    mockedDataList.push(app13);
    mockedDataList.push(app14);
    mockedDataList.push(app15);

    return mockedDataList;
  }

}

export default MockedData
