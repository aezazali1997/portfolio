import React from 'react'
import { IData } from '@interfaces'
/* refinments of modals about objects */
type Props = {
  class: {
    name: string
    comment: string
    const: {
      name: string
      variables: {
        birthDay: string
        age: string
        hobby: string
        personality: string
      }
    }

    method1: {
      name: string
      fields: IData[]
    }

    method2: {
      name: string
      exp: {
        company: string
        skills: string[]
        time: string
      }
    }
    method3: {
      name: string
      edu: {
        university: string
        degree: string
        city: string
        started: string
        graduated: string
      }
    }
  }
}
const defaultValue: Props = {
  class: {
    name: '',
    comment: '',
    const: {
      name: '',
      variables: {
        birthDay: '',
        age: '',
        hobby: '',
        personality: '',
      },
    },
    method1: {
      name: '',
      fields: [
        {
          name: '',
          values: [],
        },
      ],
    },

    method2: {
      name: '',
      exp: {
        company: '',
        skills: [],
        time: '',
      },
    },
    method3: {
      name: '',
      edu: {
        university: '',
        degree: '',
        city: '',
        graduated: '',
        started: '',
      },
    },
  },
}
const AppContext = React.createContext<Props>(defaultValue)
export default AppContext
