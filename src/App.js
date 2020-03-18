import React from 'react'
import Content from './Components/Content'
import WindowDimensionsProvider from './Components/WindowDimensionsProvider'
import data from './data.json'

const App = () => (
  <WindowDimensionsProvider>
    <Content items={data} />
  </WindowDimensionsProvider>
)

export default App
