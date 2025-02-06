import { StrictMode } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createRoot } from 'react-dom/client'

import Form from './Components/Form.jsx'
import { Provider } from 'react-redux';
import { store } from './Store/Store.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>

    <Form />
    </Provider>
  </StrictMode>,
)
