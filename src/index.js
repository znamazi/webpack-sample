import Api from './services/api'
import './assets/css/style.css'

import React from 'react'
import ReactDOM from 'react-dom'
import SampleComponent from './components/SampleComponent'

const apiInstance = new Api()
apiInstance.get()

const App = (props) => {
  return <SampleComponent />
}

ReactDOM.render(<App />, document.getElementById('root'))
