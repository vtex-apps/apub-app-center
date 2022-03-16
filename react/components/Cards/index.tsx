import React, {useState, useEffect} from 'react'
import { AppData } from '../../typings/appdata'
import AppCard from './AppCard'
import Header from './Header'
import {
  FilterBar,
  Checkbox
} from 'vtex.styleguide'
import MockedData from '../../data/mockedData'

interface CardFilter {
  category: string[],
  store: string[],
  status: string[]
}

let auxCardList: any[] = [];
let cardFilter: CardFilter = { category: [], store: [], status: []};

const SetCardData = (setCardsList: any) => {
  auxCardList = MockedData.GetData();
  setCardsList(auxCardList)
}

const FilterCardData = (statementList : any) => {
  let cardsId: any[] = [];
  FillCardFilter(statementList);
  let listToFilter = auxCardList;

  if(cardFilter.category.length > 0){
    listToFilter.forEach((c: AppData) => {
      cardFilter.category.forEach(cat => {
        let hasCategory = c.category.includes(cat);
        if(hasCategory){
          if(!cardsId.includes(c.id)){
            cardsId.push(c.id)
          }
        }
      })
    })
  }

  if(cardsId.length > 0){
    listToFilter = listToFilter.filter(c => cardsId.includes(c.id));

    cardsId = [];
  }

  if(cardFilter.store.length > 0){
    listToFilter.forEach((c: AppData) => {
      cardFilter.store.forEach(st => {
        let hasStore = c.store.includes(st);
        if(hasStore){
          if(!cardsId.includes(c.id)){
            cardsId.push(c.id)
          }
        }
      })
    })
  }

  if(cardsId.length > 0){
    listToFilter = listToFilter.filter(c => cardsId.includes(c.id));

    cardsId = [];
  }

  if(cardFilter.status.length > 0){
    listToFilter.forEach((c: AppData) => {
      cardFilter.status.forEach(sta => {
        let hasStatus = c.status.includes(sta);
        if(hasStatus){
          if(!cardsId.includes(c.id)){
            cardsId.push(c.id)
          }
        }
      })
    })
  }

  if(cardsId.length > 0){
    listToFilter = listToFilter.filter(c => cardsId.includes(c.id));

    cardsId = [];
  }

  return listToFilter;
}

const FillCardFilter = (statementList: any[]) => {
  statementList.forEach(s => {
    let filteredStatements = GetSelectedStatements(s.object);
    let statements = ConvertStatementsToStringArray(s.object);

    let isCategory = IsCategoryFilter(statements);
    let isStore = IsStoreFilter(statements);
    let isStatus = IsStatusFilter(statements);

    if(isCategory){
      cardFilter.category = filteredStatements;
    }

    if(isStore){
      cardFilter.store = filteredStatements;
    }

    if(isStatus){
      cardFilter.status = filteredStatements;
    }
  })

  console.log(cardFilter);
}

const IsCategoryFilter = (statementList: string[]) => {
  return statementList.includes("pdp");
}

const IsStoreFilter = (statementList: string[]) => {
  return statementList.includes("legacy");
}

const IsStatusFilter = (statementList: string[]) => {
  return statementList.includes("prod");
}

const ConvertStatementsToStringArray = (statements: any) => {
  let keys = Object.keys(statements);

  return keys;
}

const GetSelectedStatements = (statements: any) => {
  let keys = Object.keys(statements);
  let values = Object.values(statements);
  let filteredStatements = [];

  for(var i = 0; i < keys.length; i++){
    if(values[i] == true){
      filteredStatements.push(keys[i]);
    }
  }

  return filteredStatements;
}

const CategorySelectorObject = ({ value, onChange }: any) => {
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

const StoreSelectorObject = ({ value, onChange }: any) => {
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

const StatusSelectorObject = ({ value, onChange }: any) => {
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

export default function Cards() {

  const [cardsList, setCardsList]= useState<AppData[]>([])
  useEffect(() => {
    if (cardsList.length === 0) {
      SetCardData(setCardsList);
    } else {
      console.log("Salgo del if que renderiza cards al principio");
    }
  }, [])

  const [statementsList, setStatementsList] = useState();
  useEffect(() => {
    if (statementsList) {
      let list = FilterCardData(statementsList);
      setFilterCardsList(list);
    } else {
      console.log("Salgo del if que filtra las cards cuando hay filtros");
    }

    if (cardsList.length > 0 && !statementsList){
      setFilterCardsList(cardsList);
    } else {
      console.log("Salgo cuando no hay filtros y la lista no esta vacia");
    }
  }, [statementsList, cardsList])

  const [filterCardsList, setFilterCardsList] = useState<AppData[]>();

  return (
    <>
      <Header text="Filtros"/>
      <div className="ma3 pa3 mb2 ba br2 b--muted-4">

        <FilterBar
          alwaysVisibleFilters={['categoria', 'tienda', 'status']}
          statements={statementsList}
          onChangeStatements={(statement: any) => setStatementsList(statement)}
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
      {filterCardsList &&
      <div className="flex flex-wrap">
        {}
        {filterCardsList.map((card) => {
          return(<AppCard
            key={card.id}
            id={card.id}
            name={card.name}
            photo={card.photo}
            status={card.status}
            store={card.store}
            category={card.category}
            description={card.description}
            documentation={card.documentation}
            download={card.download}
            version={card.version}
            overview={card.overview}
            feature={card.feature}
            screenshot={card.screenshot}
            workspace={card.workspace}
            video={card.video}
            requirements={card.requirements}
            tutorial={card.tutorial}
            assets={card.assets}
            github={card.github}
            />)
        })}
    </div>}
    </>
  )
}
