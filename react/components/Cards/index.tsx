import React, {useState, useEffect} from 'react'
import { AppData } from '../../typings/appdata'
//import MyUsersFilter from '../Filters'
import AppCard from './AppCard'
import Header from './Header'
import {
  FilterBar,
  Checkbox
} from 'vtex.styleguide'

const auxCardList: any[] = [];

function SetCardData (setCardsList: any) {
  let app1 = {} as AppData;
  app1.id = 1;
  app1.name = "Massive price update";
  app1.photo = "https://extensions.vtexassets.com/arquivos/ids/157356-800-auto?v=637789878477770000&width=800&height=auto&aspect=true";
  app1.status = "prod";
  app1.store = ['legacy', 'io'];
  app1.category = ['solution'];
  app1.description = "Permite escanear y leer códigos de barras o QR de productos para dirigirte a su PDP o agregarlos al carrito.";  app1.url = "/admin/app/apub-app-center/:id";
  app1.url = "/admin/app/apub-app-center/:id";

  let app2 = {} as AppData;
  app2.id = 2;
  app2.name = "Product highlight by vtex-segment";
  app2.photo = "https://extensions.vtexassets.com/arquivos/ids/157356-800-auto?v=637789878477770000&width=800&height=auto&aspect=true";
  app2.status = "idea";
  app2.store = ['legacy', 'io'];
  app2.category = ['pdp', 'gallery'];
  app2.description = "Permite escanear y leer códigos de barras o QR de productos para dirigirte a su PDP o agregarlos al carrito.";
  app2.url = "/admin/app/apub-app-center/:id";

  let app3 = {} as AppData;
  app3.id = 3;
  app3.name = "Massive score update";
  app3.photo = "https://extensions.vtexassets.com/arquivos/ids/157356-800-auto?v=637789878477770000&width=800&height=auto&aspect=true";
  app3.status = "beta";
  app3.store = ['legacy', 'io'];
  app3.category = ['solution'];
  app3.description = "Permite escanear y leer códigos de barras o QR de productos para dirigirte a su PDP o agregarlos al carrito.";
  app3.url = "/admin/app/apub-app-center/:id";

  let app4 = {} as AppData;
  app4.id = 4;
  app4.name = "Massive stock update";
  app4.photo = "https://extensions.vtexassets.com/arquivos/ids/157356-800-auto?v=637789878477770000&width=800&height=auto&aspect=true";
  app4.status = "prod";
  app4.store = ['legacy', 'io'];
  app4.category = ['solution'];
  app4.description = "Permite escanear y leer códigos de barras o QR de productos para dirigirte a su PDP o agregarlos al carrito.";
  app4.url = "/admin/app/apub-app-center/:id";

  let app5 = {} as AppData;
  app5.id = 5;
  app5.name = "Tintometric";
  app5.photo = "https://extensions.vtexassets.com/arquivos/ids/157356-800-auto?v=637789878477770000&width=800&height=auto&aspect=true";
  app5.status = "prod";
  app5.store = ['io'];
  app5.category = ['admin', 'pdp'];
  app5.description = "Permite escanear y leer códigos de barras o QR de productos para dirigirte a su PDP o agregarlos al carrito.";
  app5.url = "/admin/app/apub-app-center/:id";

  let app6 = {} as AppData;
  app6.id = 6;
  app6.name = "Pharma orders admin";
  app6.photo = "https://extensions.vtexassets.com/arquivos/ids/157356-800-auto?v=637789878477770000&width=800&height=auto&aspect=true";
  app6.status = "prod";
  app6.store = ['io'];
  app6.category = ['admin'];
  app6.description = "Permite escanear y leer códigos de barras o QR de productos para dirigirte a su PDP o agregarlos al carrito.";
  app6.url = "/admin/app/apub-app-center/:id";

  let app7 = {} as AppData;
  app7.id = 7;
  app7.name = "Product availability gallery";
  app7.photo = "https://extensions.vtexassets.com/arquivos/ids/157356-800-auto?v=637789878477770000&width=800&height=auto&aspect=true";
  app7.status = "prod";
  app7.store = ['io'];
  app7.category = ['pdp', 'gallery', 'search'];
  app7.description = "Permite escanear y leer códigos de barras o QR de productos para dirigirte a su PDP o agregarlos al carrito.";
  app7.url = "/admin/app/apub-app-center/:id";

  let app8 = {} as AppData;
  app8.id = 8;
  app8.name = "Qr barcode reader";
  app8.photo = "https://extensions.vtexassets.com/arquivos/ids/157356-800-auto?v=637789878477770000&width=800&height=auto&aspect=true";
  app8.status = "prod";
  app8.store = ['io'];
  app8.category = ['admin', 'pdp'];
  app8.description = "Permite escanear y leer códigos de barras o QR de productos para dirigirte a su PDP o agregarlos al carrito.";
  app8.url = "/admin/app/apub-app-center/:id";

  let app9 = {} as AppData;
  app9.id = 9;
  app9.name = "Workspace manager";
  app9.photo = "https://extensions.vtexassets.com/arquivos/ids/157356-800-auto?v=637789878477770000&width=800&height=auto&aspect=true";
  app9.status = "prod";
  app9.store = ['io'];
  app9.category = ['admin'];
  app9.description = "Permite escanear y leer códigos de barras o QR de productos para dirigirte a su PDP o agregarlos al carrito.";
  app9.url = "/admin/app/apub-app-center/:id";

  let app10 = {} as AppData;
  app10.id = 10;
  app10.name = "Admin AB Tester";
  app10.photo = "https://extensions.vtexassets.com/arquivos/ids/157356-800-auto?v=637789878477770000&width=800&height=auto&aspect=true";
  app10.status = "prod";
  app10.store = ['io'];
  app10.category = ['admin'];
  app10.description = "Permite escanear y leer códigos de barras o QR de productos para dirigirte a su PDP o agregarlos al carrito.";
  app10.url = "/admin/app/apub-app-center/:id";

  let app11 = {} as AppData;
  app11.id = 11;
  app11.name = "Admin Ley de Gondolas Arg";
  app11.photo = "https://extensions.vtexassets.com/arquivos/ids/157356-800-auto?v=637789878477770000&width=800&height=auto&aspect=true";
  app11.status = "prod";
  app11.store = ['legacy', 'io'];
  app11.category = ['admin', 'pdp'];
  app11.description = "Permite escanear y leer códigos de barras o QR de productos para dirigirte a su PDP o agregarlos al carrito.";
  app11.url = "/admin/app/apub-app-center/:id";

  let app12 = {} as AppData;
  app12.id = 12;
  app12.name = "Vtex-logger react";
  app12.photo = "https://extensions.vtexassets.com/arquivos/ids/157356-800-auto?v=637789878477770000&width=800&height=auto&aspect=true";
  app12.status = "prod";
  app12.store = ['io'];
  app12.category = ['solution'];
  app12.description = "Permite escanear y leer códigos de barras o QR de productos para dirigirte a su PDP o agregarlos al carrito.";
  app12.url = "/admin/app/apub-app-center/:id";

  let app13 = {} as AppData;
  app13.id = 13;
  app13.name = "Speech to Text";
  app13.photo = "https://extensions.vtexassets.com/arquivos/ids/157356-800-auto?v=637789878477770000&width=800&height=auto&aspect=true";
  app13.status = "prod";
  app13.store = ['io'];
  app13.category = ['search'];
  app13.description = "Permite escanear y leer códigos de barras o QR de productos para dirigirte a su PDP o agregarlos al carrito.";
  app13.url = "/admin/app/apub-app-center/:id";

  let app14 = {} as AppData;
  app14.id = 14;
  app14.name = "Quantity on cart";
  app14.photo = "https://extensions.vtexassets.com/arquivos/ids/157356-800-auto?v=637789878477770000&width=800&height=auto&aspect=true";
  app14.status = "prod";
  app14.store = ['io'];
  app14.category = ['checkout'];
  app14.description = "Permite escanear y leer códigos de barras o QR de productos para dirigirte a su PDP o agregarlos al carrito.";
  app14.url = "/admin/app/apub-app-center/:id";

  let app15 = {} as AppData;
  app15.id = 15;
  app15.name = "Vtex-logger GraphQL";
  app15.photo = "https://extensions.vtexassets.com/arquivos/ids/157356-800-auto?v=637789878477770000&width=800&height=auto&aspect=true";
  app15.status = "prod";
  app15.store = ['io'];
  app15.category = ['solution'];
  app15.description = "Permite escanear y leer códigos de barras o QR de productos para dirigirte a su PDP o agregarlos al carrito.";
  app15.url = "/admin/app/apub-app-center/:id";


  auxCardList.push(app1);
  auxCardList.push(app2);
  auxCardList.push(app3);
  auxCardList.push(app4);
  auxCardList.push(app5);
  auxCardList.push(app6);
  auxCardList.push(app7);
  auxCardList.push(app8);
  auxCardList.push(app9);
  auxCardList.push(app10);
  auxCardList.push(app11);
  auxCardList.push(app12);
  auxCardList.push(app13);
  auxCardList.push(app14);
  auxCardList.push(app15);
  setCardsList(auxCardList)
}

function FilterCardData (setStatementsList: any) {
  const categorias = Object.keys(setStatementsList[0].object);
  console.log(categorias);
}

export default function Cards() {
  const [cardsList, setCardsList]= useState<AppData[]>([])
  useEffect(() => {
    if (cardsList.length === 0) {
      SetCardData(setCardsList);
    }
  }, [])

  // const [statementsList, setStatementsList]= useState<any[]>([])
  // useEffect(() => {
  //   if (statementsList.length !== 0) {
  //     FilterCardData(setStatementsList);
  //   }
  // }, [])

  function CategorySelectorObject({ value, onChange }: any) {
    const initialValue = {
      pdp: true,
      admin: true,
      search: true,
      gallery: true,
      solution: true,
      checkout: true,
      ...(value || {}),
    }
    const toggleValueByKey = (key: any) => {
      const newValues = {
        ...(value || initialValue),
        [key]: value ? !value[key] : false,
      }
      return newValues
    }
    return (
      <div>
        {Object.keys(initialValue).map((opt, index) => {
          return (
            <div className="mb3" key={`class-statment-object-${opt}-${index}`}>
              <Checkbox
                checked={value ? value[opt] : initialValue[opt]}
                id={`class-${opt}`}
                label={opt}
                name="class-checkbox-group"
                onChange={() => {
                  const newValue = toggleValueByKey(`${opt}`)
                  onChange(newValue)
                }}
                value={opt}
              />
            </div>
          )
        })}
      </div>
    )
  }

  function StoreSelectorObject({ value, onChange }: any) {
    const initialValue = {
      legacy: true,
      io: true,
      ...(value || {}),
    }
    const toggleValueByKey = (key: any) => {
      const newValues = {
        ...(value || initialValue),
        [key]: value ? !value[key] : false,
      }
      return newValues
    }
    return (
      <div>
        {Object.keys(initialValue).map((opt, index) => {
          return (
            <div className="mb3" key={`class-statment-object-${opt}-${index}`}>
              <Checkbox
                checked={value ? value[opt] : initialValue[opt]}
                id={`class-${opt}`}
                label={opt}
                name="class-checkbox-group"
                onChange={() => {
                  const newValue = toggleValueByKey(`${opt}`)
                  onChange(newValue)
                }}
                value={opt}
              />
            </div>
          )
        })}
      </div>
    )
  }

  function StatusSelectorObject({ value, onChange }: any) {
    const initialValue = {
      prod: true,
      beta: true,
      idea: true,
      ...(value || {}),
    }
    const toggleValueByKey = (key: any) => {
      const newValues = {
        ...(value || initialValue),
        [key]: value ? !value[key] : false,
      }
      return newValues
    }
    return (
      <div>
        {Object.keys(initialValue).map((opt, index) => {
          return (
            <div className="mb3" key={`class-statment-object-${opt}-${index}`}>
              <Checkbox
                checked={value ? value[opt] : initialValue[opt]}
                id={`class-${opt}`}
                label={opt}
                name="class-checkbox-group"
                onChange={() => {
                  const newValue = toggleValueByKey(`${opt}`)
                  onChange(newValue)
                }}
                value={opt}
              />
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <>
      <Header text="Filtros"/>
      <div className="w-100 pa3">
        <FilterBar
          alwaysVisibleFilters={['categoria', 'tienda', 'status']}
          statements={[]}
          onChangeStatements={(statements: []) => FilterCardData(statements)}
          clearAllFiltersButtonLabel="Limpiar filtros"
          options={{
            categoria: {
              label: 'Categoria',
              renderFilterLabel: (st: any) => {
                if (!st || !st.object) {
                  // you should treat empty object cases only for alwaysVisibleFilters
                  return 'Todas'
                }
                const keys = st.object ? Object.keys(st.object) : []
                const isAllTrue = !keys.some(key => !st.object[key])
                const isAllFalse = !keys.some(key => st.object[key])
                const trueKeys = keys.filter(key => st.object[key])
                let trueKeysLabel = ''
                trueKeys.forEach((key, index) => {
                  trueKeysLabel += `${key}${
                    index === trueKeys.length - 1 ? '' : ', '
                  }`
                })
                return `${
                  isAllTrue ? 'Todas' : isAllFalse ? 'Ninguna' : `${trueKeysLabel}`
                }`
              },
              verbs: [
                {
                  value: 'includes',
                  object: (props: any) => <CategorySelectorObject {...props} />,
                },
              ],
            },

            tienda: {
              label: 'Tienda',
              renderFilterLabel: (st: any) => {
                if (!st || !st.object) {
                  // you should treat empty object cases only for alwaysVisibleFilters
                  return 'Todas'
                }
                const keys = st.object ? Object.keys(st.object) : []
                const isAllTrue = !keys.some(key => !st.object[key])
                const isAllFalse = !keys.some(key => st.object[key])
                const trueKeys = keys.filter(key => st.object[key])
                let trueKeysLabel = ''
                trueKeys.forEach((key, index) => {
                  trueKeysLabel += `${key}${
                    index === trueKeys.length - 1 ? '' : ', '
                  }`
                })
                return `${
                  isAllTrue ? 'Todas' : isAllFalse ? 'Ninguna' : `${trueKeysLabel}`
                }`
              },
              verbs: [
                {
                  value: 'includes',
                  object: (props: any) => <StoreSelectorObject {...props} />,
                },
              ],
            },

            status: {
              label: 'Status',
              renderFilterLabel: (st: any) => {
                if (!st || !st.object) {
                  // you should treat empty object cases only for alwaysVisibleFilters
                  return 'Todas'
                }
                const keys = st.object ? Object.keys(st.object) : []
                const isAllTrue = !keys.some(key => !st.object[key])
                const isAllFalse = !keys.some(key => st.object[key])
                const trueKeys = keys.filter(key => st.object[key])
                let trueKeysLabel = ''
                trueKeys.forEach((key, index) => {
                  trueKeysLabel += `${key}${
                    index === trueKeys.length - 1 ? '' : ', '
                  }`
                })
                return `${
                  isAllTrue ? 'Todas' : isAllFalse ? 'Ninguna' : `${trueKeysLabel}`
                }`
              },
              verbs: [
                {
                  value: 'includes',
                  object: (props: any) => <StatusSelectorObject {...props} />,
                },
              ],
            },

          }}
        />
      </div>
      <Header text="Todas las Apps"/>
      { cardsList && <div className="flex flex-wrap">
      {cardsList.map((card) => {
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
    </div>}
    </>
  )
}
