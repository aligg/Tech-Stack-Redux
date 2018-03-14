import React from 'react'
import { View } from 'react-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers'

const App = () => {
  return (
  <Provider store= { createStore(reducers) } >
    <View />
  </Provider>
  )
}

export default App

/* The provider tag works with the store. 
the store actually holds application state. 
The purpose of the provider is to translate data in the store for react 
- it's communication glue with react.

lecture "more on redux boilerplate"
* created a store and passed it to provider,
* create reducer and pass it to the store
*/
