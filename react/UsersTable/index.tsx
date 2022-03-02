import React, { Component } from 'react'
// import {
//   FilterBar,
//   Checkbox
// } from 'vtex.styleguide'
import { withRuntimeContext } from 'vtex.render-runtime'
import { AppData } from '../typings/appdata'
import AppCard from './AppCard'

interface Props {
  runtime: any
}

const arrCardData: AppData[] = [];

function SetCardData () {
  let app1 = {} as AppData;
  app1.id = 1;
  app1.name = "Massive price update";
  app1.photo = "https://extensions.vtexassets.com/arquivos/ids/157356-800-auto?v=637789878477770000&width=800&height=auto&aspect=true";
  app1.status = "produccion";
  app1.store = ['vtex io', 'legacy'];
  app1.category = ['admin', 'checkout'];
  app1.url = "/apub-app-center";

  let app2 = {} as AppData;
  app2.id = 2;
  app2.name = "Product highlight by vtex-segment";
  app2.photo = "https://extensions.vtexassets.com/arquivos/ids/157356-800-auto?v=637789878477770000&width=800&height=auto&aspect=true";
  app2.status = "idea";
  app2.store = ['vtex io', 'legacy'];
  app2.category = ['admin', 'checkout'];
  app2.url = "/apub-app-center";

  let app3 = {} as AppData;
  app3.id = 3;
  app3.name = "Massive score update";
  app3.photo = "https://extensions.vtexassets.com/arquivos/ids/157356-800-auto?v=637789878477770000&width=800&height=auto&aspect=true";
  app3.status = "produccion";
  app3.store = ['vtex io', 'legacy'];
  app3.category = ['admin', 'checkout'];
  app3.url = "/apub-app-center";

  let app4 = {} as AppData;
  app4.id = 4;
  app4.name = "Massive stock update";
  app4.photo = "https://extensions.vtexassets.com/arquivos/ids/157356-800-auto?v=637789878477770000&width=800&height=auto&aspect=true";
  app4.status = "produccion";
  app4.store = ['vtex io', 'legacy'];
  app4.category = ['admin', 'checkout'];
  app4.url = "/apub-app-center";

  let app5 = {} as AppData;
  app5.id = 5;
  app5.name = "Tintometric";
  app5.photo = "https://extensions.vtexassets.com/arquivos/ids/157356-800-auto?v=637789878477770000&width=800&height=auto&aspect=true";
  app5.status = "produccion";
  app5.store = ['vtex io', 'legacy'];
  app5.category = ['admin', 'checkout'];
  app5.url = "/apub-app-center";

  let app6 = {} as AppData;
  app6.id = 6;
  app6.name = "Pharma orders admin";
  app6.photo = "https://extensions.vtexassets.com/arquivos/ids/157356-800-auto?v=637789878477770000&width=800&height=auto&aspect=true";
  app6.status = "produccion";
  app6.store = ['vtex io', 'legacy'];
  app6.category = ['admin', 'checkout'];
  app6.url = "/apub-app-center";

  let app7 = {} as AppData;
  app7.id = 7;
  app7.name = "Product availability gallery";
  app7.photo = "https://extensions.vtexassets.com/arquivos/ids/157356-800-auto?v=637789878477770000&width=800&height=auto&aspect=true";
  app7.status = "produccion";
  app7.store = ['vtex io', 'legacy'];
  app7.category = ['admin', 'checkout'];
  app7.url = "/apub-app-center";

  let app8 = {} as AppData;
  app8.id = 8;
  app8.name = "Qr barcode reader";
  app8.photo = "https://extensions.vtexassets.com/arquivos/ids/157356-800-auto?v=637789878477770000&width=800&height=auto&aspect=true";
  app8.status = "produccion";
  app8.store = ['vtex io', 'legacy'];
  app8.category = ['admin', 'checkout'];
  app8.url = "/apub-app-center";

  let app9 = {} as AppData;
  app9.id = 9;
  app9.name = "Workspace manager";
  app9.photo = "https://extensions.vtexassets.com/arquivos/ids/157356-800-auto?v=637789878477770000&width=800&height=auto&aspect=true";
  app9.status = "produccion";
  app9.store = ['vtex io', 'legacy'];
  app9.category = ['admin', 'checkout'];
  app9.url = "/apub-app-center";

  let app10 = {} as AppData;
  app10.id = 10;
  app10.name = "Admin AB Tester";
  app10.photo = "https://extensions.vtexassets.com/arquivos/ids/157356-800-auto?v=637789878477770000&width=800&height=auto&aspect=true";
  app10.status = "produccion";
  app10.store = ['vtex io', 'legacy'];
  app10.category = ['admin', 'checkout'];
  app10.url = "/apub-app-center";

  let app11 = {} as AppData;
  app11.id = 11;
  app11.name = "Admin Ley de Gondolas Arg";
  app11.photo = "https://extensions.vtexassets.com/arquivos/ids/157356-800-auto?v=637789878477770000&width=800&height=auto&aspect=true";
  app11.status = "produccion";
  app11.store = ['vtex io', 'legacy'];
  app11.category = ['admin', 'checkout'];
  app11.url = "/apub-app-center";

  let app12 = {} as AppData;
  app12.id = 12;
  app12.name = "Vtex-logger react";
  app12.photo = "https://extensions.vtexassets.com/arquivos/ids/157356-800-auto?v=637789878477770000&width=800&height=auto&aspect=true";
  app12.status = "produccion";
  app12.store = ['vtex io', 'legacy'];
  app12.category = ['admin', 'checkout'];
  app12.url = "/apub-app-center";

  let app13 = {} as AppData;
  app13.id = 13;
  app13.name = "Speech to Text";
  app13.photo = "https://extensions.vtexassets.com/arquivos/ids/157356-800-auto?v=637789878477770000&width=800&height=auto&aspect=true";
  app13.status = "produccion";
  app13.store = ['vtex io', 'legacy'];
  app13.category = ['admin', 'checkout'];
  app13.url = "/apub-app-center";

  let app14 = {} as AppData;
  app14.id = 14;
  app14.name = "Quantity on cart";
  app14.photo = "https://extensions.vtexassets.com/arquivos/ids/157356-800-auto?v=637789878477770000&width=800&height=auto&aspect=true";
  app14.status = "produccion";
  app14.store = ['vtex io', 'legacy'];
  app14.category = ['admin', 'checkout'];
  app14.url = "/apub-app-center";

  let app15 = {} as AppData;
  app15.id = 15;
  app15.name = "Vtex-logger GraphQL";
  app15.photo = "https://extensions.vtexassets.com/arquivos/ids/157356-800-auto?v=637789878477770000&width=800&height=auto&aspect=true";
  app15.status = "produccion";
  app15.store = ['vtex io', 'legacy'];
  app15.category = ['admin', 'checkout'];
  app15.url = "/apub-app-center";


  arrCardData.push(app1);
  arrCardData.push(app2);
  arrCardData.push(app3);
  arrCardData.push(app4);
  arrCardData.push(app5);
  arrCardData.push(app6);
  arrCardData.push(app7);
  arrCardData.push(app8);
  arrCardData.push(app9);
  arrCardData.push(app10);
  arrCardData.push(app11);
  arrCardData.push(app12);
  arrCardData.push(app13);
  arrCardData.push(app14);
  arrCardData.push(app15);
}

function RenderCards () {
  SetCardData();

  return(
    <div className="flex flex-wrap">
        {arrCardData.map((el) => {
          return(<AppCard
            id={el.id}
            name={el.name}
            photo={el.photo}
            status={el.status}
            store={el.store}
            category={el.category}
            url={el.url}/>)
        })}
    </div>
  );
}

// function StatusSelectorObject({ value, onChange }: any) {
//   const initialValue = {
//     beta: false,
//     producción: false,
//     idea: false,
//     ...(value || {}),
//   }
//   const toggleValueByKey = (key: any) => {
//     const newValues = {
//       ...(value || initialValue),
//       [key]: value ? !value[key] : false,
//     }
//     return newValues
//   }
//   return (
//     <div>
//       {Object.keys(initialValue).map((opt, index) => {
//         return (
//           <div className="mb3" key={`class-statment-object-${opt}-${index}`}>
//             <Checkbox
//               checked={value ? value[opt] : initialValue[opt]}
//               id={`class-${opt}`}
//               label={opt}
//               name="class-checkbox-group"
//               onChange={() => {
//                 const newValue = toggleValueByKey(`${opt}`)
//                 onChange(newValue)
//               }}
//               value={opt}
//             />
//           </div>
//         )
//       })}
//     </div>
//   )
// }

class UsersTable extends Component<Props> {
  constructor(props: any) {
    super(props)
    this.state = {
      searchValue: null,
      filterStatements: [],
    }
  }


  public render() {
    // const {
    //   filterStatements,
    // }: any = this.state
    // const {
    //   runtime: { navigate },
    // } = this.props

    return (
      <div>
        {/* <FilterBar
          onRowClick={({ rowData }: any) =>
            navigate({
              page: 'admin.app.apub-app-center',
              params: { id: rowData.id },
            })
          }
          filters={{
          alwaysVisibleFilters: ['status', 'tienda', 'categoria'],
          statements: filterStatements,
          onChangeStatements: (newStatements: string) =>
            this.setState({ filterStatements: newStatements }),
          clearAllFiltersButtonLabel: 'Clear Filters',
          options: {
            status: {
              label: 'Status',
              renderFilterLabel: (st: any) => {
                if (!st || !st.object) {
                  // you should treat empty object cases only for alwaysVisibleFilters
                  return 'All'
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
                  isAllTrue ? 'All' : isAllFalse ? 'None' : `${trueKeysLabel}`
                }`
              },
              verbs: [
                {
                  label: 'includes',
                  value: 'includes',
                  object: (props: any) => <StatusSelectorObject {...props} />,
                },
              ],
            },
            tienda: {
              label: 'tienda',
              renderFilterLabel: (st: any) => {
                if (!st || !st.object) {
                  // you should treat empty object cases only for alwaysVisibleFilters
                  return 'All'
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
                  isAllTrue ? 'All' : isAllFalse ? 'None' : `${trueKeysLabel}`
                }`
              },
              verbs: [
                {
                  label: 'includes',
                  value: 'includes',
                  object: (props: any) => <StatusSelectorObject {...props} />,
                },
              ],
            },
            categoria: {
              label: 'categoria',
              renderFilterLabel: (st: any) => {
                if (!st || !st.object) {
                  // you should treat empty object cases only for alwaysVisibleFilters
                  return 'All'
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
                  isAllTrue ? 'All' : isAllFalse ? 'None' : `${trueKeysLabel}`
                }`
              },
              verbs: [
                {
                  label: 'includes',
                  value: 'includes',
                  object: (props: any) => <StatusSelectorObject {...props} />,
                },
              ],
            }
            }
          }}
        /> */}
        {RenderCards()}
      </div>
    )
  }
}

export default withRuntimeContext(UsersTable)
