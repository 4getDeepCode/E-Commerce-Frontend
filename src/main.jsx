//Component imports

import App from './App.jsx';
import store from './Redux/store.js';

//CSS imports

import './index.css';

//Library imports
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';



createRoot(document.getElementById('root')).render(

    <Provider store={store}>

        <BrowserRouter>
            <App />
            <Toaster />
        </BrowserRouter>

    </Provider>



)