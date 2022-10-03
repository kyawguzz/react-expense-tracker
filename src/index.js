import React from 'react'
import ReactDOM from 'react-dom'
import App from './App';
import './index.css'
import { SpeechProvider } from '@speechly/react-client';
import {Provider} from './context/context'


ReactDOM.render(
    <SpeechProvider appId="ad49fc4e-913d-4607-9249-426612f0e74d" language="en-US">
         <Provider>
      <App />
    </Provider>
    </SpeechProvider>,
document.getElementById('root'),);
