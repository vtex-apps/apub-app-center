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
  app1.name = "App1";
  app1.photo = "/photo.jpg";
  app1.status = "produccion";
  app1.store = ['vtex', 'legacy'];
  app1.category = ['admin', 'checkout'];

  let app2 = {} as AppData;
  app2.id = 2;
  app2.name = "App2";
  app2.photo = "/photo.jpg";
  app2.status = "produccion";
  app2.store = ['vtex', 'legacy'];
  app2.category = ['admin', 'checkout'];

  let app3 = {} as AppData;
  app3.id = 3;
  app3.name = "App3";
  app3.photo = "/photo.jpg";
  app3.status = "produccion";
  app3.store = ['vtex', 'legacy'];
  app3.category = ['admin', 'checkout'];


  arrCardData.push(app1);
  arrCardData.push(app2);
  arrCardData.push(app3);
}

function RenderCards () {
  SetCardData();

  return(
    <div className="row">
      <div className="col-md-4">
        {arrCardData.map((el) => {
          return(<AppCard id={el.id} name={el.name} photo={el.photo} status={el.status} store={el.store} category={el.category} />)
        })}
      </div>
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
