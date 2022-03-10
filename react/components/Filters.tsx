import React from 'react'
import {
  FilterBar,
  Checkbox
} from 'vtex.styleguide'

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

export default class MyUsersFilter extends React.Component {
  constructor(props: any) {
    super(props)
    this.state = { statements: [] }
  }

  render() {
    const {
      statements,
    }: any = this.state
    return (
      <FilterBar
        alwaysVisibleFilters={['categoria']}
        statements={statements}
        onChangeStatements={(statements: []) => this.setState({ statements })}
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
                label: 'incluye',
                value: 'includes',
                object: (props: any) => <CategorySelectorObject {...props} />,
              },
            ],
          },

        }}
      />
    )
  }
}
;<MyUsersFilter />
