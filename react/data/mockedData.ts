import { AppData } from '../typings/appdata'

const MockedData = {

  GetData: () => {
    let mockedDataList: AppData[] = [];

    let app1 = {} as AppData;
    app1.id = 1;
    app1.name = "Massive price update";
    app1.photo = "https://extensions.vtexassets.com/arquivos/ids/157174/image-b925968a706f46f29cc8ed06633a6f95.jpg?v=637680032654000000";
    app1.status = "prod";
    app1.store = ['legacy', 'io'];
    app1.category = ['solution'];
    app1.description = "Permite escanear y leer códigos de barras o QR de productos para dirigirte a su PDP o agregarlos al carrito."
    app1.documentation = "https://vtex.io/docs/app/vtexarg.massive-price-update@1.x";
    app1.download = "";
    app1.version = 1;

    let app2 = {} as AppData;
    app2.id = 2;
    app2.name = "Product highlight by vtex-segment";
    app2.photo = "https://dev--vtexarg.myvtex.com/_v/public/assets/v1/published/vtexarg.product-highlight-by-vtex-segment@0.3.2/public/metadata/images/icon.png";
    app2.status = "idea";
    app2.store = ['legacy', 'io'];
    app2.category = ['pdp', 'gallery'];
    app2.description = "Permite escanear y leer códigos de barras o QR de productos para dirigirte a su PDP o agregarlos al carrito.";
    app2.documentation = "https://vtex.io/docs/app/vtexarg.product-highlight-by-vtex-segment@0.3.2/";
    app2.download = "";
    app2.version = 0;

    let app3 = {} as AppData;
    app3.id = 3;
    app3.name = "Massive score update";
    app3.photo = "https://dev--vtexarg.myvtex.com/_v/public/assets/v1/published/vtexarg.massive-score-update@3.1.1/public/metadata/images/icon.png";
    app3.status = "beta";
    app3.store = ['legacy', 'io'];
    app3.category = ['solution'];
    app3.description = "Permite escanear y leer códigos de barras o QR de productos para dirigirte a su PDP o agregarlos al carrito.";
    app3.documentation = "https://vtex.io/docs/app/vtexarg.massive-score-update@3.1.1/";
    app3.download = "";
    app3.version = 3;

    let app4 = {} as AppData;
    app4.id = 4;
    app4.name = "Massive stock update";
    app4.photo = "https://extensions.vtexassets.com/arquivos/ids/157172-800-auto?v=637678529445200000&width=800&height=auto&aspect=true";
    app4.status = "prod";
    app4.store = ['legacy', 'io'];
    app4.category = ['solution'];
    app4.description = "Permite escanear y leer códigos de barras o QR de productos para dirigirte a su PDP o agregarlos al carrito.";
    app4.documentation = "https://vtex.io/docs/app/vtexarg.massive-stock-update@2.x/";
    app4.download = "";
    app4.version = 2;

    let app5 = {} as AppData;
    app5.id = 5;
    app5.name = "Tintometric";
    app5.photo = "https://extensions.vtexassets.com/arquivos/ids/157290/image-809fc5c05bdd4e6ab0c6a07ff3106191.jpg?v=637741542193970000";
    app5.status = "prod";
    app5.store = ['io'];
    app5.category = ['admin', 'pdp'];
    app5.description = "Permite escanear y leer códigos de barras o QR de productos para dirigirte a su PDP o agregarlos al carrito.";
    app5.documentation = "https://vtex.io/docs/app/vtexarg.tintometric@3.x/";
    app5.download = "";
    app5.version = 3;

    let app6 = {} as AppData;
    app6.id = 6;
    app6.name = "Pharma orders admin";
    app6.photo = "https://extensions.vtexassets.com/arquivos/ids/157356-800-auto?v=637789878477770000&width=800&height=auto&aspect=true";
    app6.status = "prod";
    app6.store = ['io'];
    app6.category = ['admin'];
    app6.description = "Permite escanear y leer códigos de barras o QR de productos para dirigirte a su PDP o agregarlos al carrito.";
    app6.documentation = "https://vtex.io/docs/app/vtexarg.pharma-orders-admin@0.1.4/";
    app6.download = "";
    app6.version = 0;

    let app7 = {} as AppData;
    app7.id = 7;
    app7.name = "Product availability gallery";
    app7.photo = "https://extensions.vtexassets.com/arquivos/ids/157356-800-auto?v=637789878477770000&width=800&height=auto&aspect=true";
    app7.status = "prod";
    app7.store = ['io'];
    app7.category = ['pdp', 'gallery', 'search'];
    app7.description = "Permite escanear y leer códigos de barras o QR de productos para dirigirte a su PDP o agregarlos al carrito.";
    app7.documentation = "https://vtex.io/docs/app/vtexarg.product-availability-gallery@1.1.2/";
    app7.download = "";
    app7.version = 1;

    let app8 = {} as AppData;
    app8.id = 8;
    app8.name = "QR & Barcode Reader";
    app8.photo = "https://extensions.vtexassets.com/arquivos/ids/157356-800-auto?v=637789878477770000&width=800&height=auto&aspect=true";
    app8.status = "prod";
    app8.store = ['io'];
    app8.category = ['admin', 'pdp'];
    app8.description = "Permite escanear y leer códigos de barras o QR de productos para dirigirte a su PDP o agregarlos al carrito.";
    app8.documentation = "https://vtex.io/docs/app/vtexarg.qr-barcode-reader@1.x/";
    app8.download = "";
    app8.version = 1;

    let app9 = {} as AppData;
    app9.id = 9;
    app9.name = "Workspace manager";
    app9.photo = "https://extensions.vtexassets.com/arquivos/ids/157197/image-4974b0ca908a447bb3bbb55156f2496b.jpg?v=637693051293400000";
    app9.status = "prod";
    app9.store = ['io'];
    app9.category = ['admin'];
    app9.description = "Permite escanear y leer códigos de barras o QR de productos para dirigirte a su PDP o agregarlos al carrito.";
    app9.documentation = "https://vtex.io/docs/app/vtexarg.workspace-manager@2.x/";
    app9.download = "";
    app9.version = 2;

    let app10 = {} as AppData;
    app10.id = 10;
    app10.name = "Admin AB Tester";
    app10.photo = "https://dev--vtexarg.myvtex.com/_v/public/assets/v1/published/vtexarg.abtester@1.0.4/public/metadata/images/icon.png";
    app10.status = "prod";
    app10.store = ['io'];
    app10.category = ['admin'];
    app10.description = "Permite escanear y leer códigos de barras o QR de productos para dirigirte a su PDP o agregarlos al carrito.";
    app10.documentation = "https://vtex.io/docs/app/vtexarg.abtester@1.0.7/";
    app10.download = "";
    app10.version = 1;

    let app11 = {} as AppData;
    app11.id = 11;
    app11.name = "Admin Ley de Gondolas Arg";
    app11.photo = "https://extensions.vtexassets.com/arquivos/ids/157356-800-auto?v=637789878477770000&width=800&height=auto&aspect=true";
    app11.status = "prod";
    app11.store = ['legacy', 'io'];
    app11.category = ['admin', 'pdp'];
    app11.description = "Permite escanear y leer códigos de barras o QR de productos para dirigirte a su PDP o agregarlos al carrito.";
    app11.documentation = "https://vtex.io/docs/app/vtexarg.admin-ley-gondolas-arg@0.2.0/";
    app11.download = "";
    app11.version = 0;

    let app12 = {} as AppData;
    app12.id = 12;
    app12.name = "Vtex-logger react";
    app12.photo = "https://extensions.vtexassets.com/arquivos/ids/157356-800-auto?v=637789878477770000&width=800&height=auto&aspect=true";
    app12.status = "prod";
    app12.store = ['io'];
    app12.category = ['solution'];
    app12.description = "Permite escanear y leer códigos de barras o QR de productos para dirigirte a su PDP o agregarlos al carrito.";
    app12.documentation = "https://vtex.io/docs/app/vtex.vtex-logger-react@1.0.1/";
    app12.download = "";
    app12.version = 1;

    let app13 = {} as AppData;
    app13.id = 13;
    app13.name = "Speech to Text";
    app13.photo = "https://extensions.vtexassets.com/arquivos/ids/157152/image-a7036d42ff77459ebe575750e2d40871.jpg?v=637644004825600000";
    app13.status = "prod";
    app13.store = ['io'];
    app13.category = ['search'];
    app13.description = "Permite escanear y leer códigos de barras o QR de productos para dirigirte a su PDP o agregarlos al carrito.";
    app13.documentation = "https://developers.vtex.com/vtex-developer-docs/docs/vtexarg-speech-to-text";
    app13.download = "";
    app13.version = 1;

    let app14 = {} as AppData;
    app14.id = 14;
    app14.name = "Quantity on cart";
    app14.photo = "https://extensions.vtexassets.com/arquivos/ids/157188/image-ec75452634b8492f9bd015432f654e42.jpg?v=637692310251370000";
    app14.status = "prod";
    app14.store = ['io'];
    app14.category = ['checkout'];
    app14.description = "Permite escanear y leer códigos de barras o QR de productos para dirigirte a su PDP o agregarlos al carrito.";
    app14.documentation = "https://vtex.io/docs/app/vtexarg.quantity-on-cart@2.2.7/";
    app14.download = "";
    app14.version = 2;

    let app15 = {} as AppData;
    app15.id = 15;
    app15.name = "Vtex-logger GraphQL";
    app15.photo = "https://extensions.vtexassets.com/arquivos/ids/157356-800-auto?v=637789878477770000&width=800&height=auto&aspect=true";
    app15.status = "prod";
    app15.store = ['io'];
    app15.category = ['solution'];
    app15.description = "Permite escanear y leer códigos de barras o QR de productos para dirigirte a su PDP o agregarlos al carrito.";
    app15.documentation = "https://vtex.io/docs/app/vtex.vtex-logger-graphql@0.2.0/";
    app15.download = "";
    app15.version = 0;

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
