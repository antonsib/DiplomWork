import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserStore from './store/UserStore'
import ProductStore from './store/ProductStore'
import SalesStore from "./store/SalesStore";
export const Context = createContext(null)
console.log(process.env.REACT_APP_API_URL)
const root = ReactDOM.createRoot(document.getElementById('root'))//объявляем корневой элемент
root.render(
    <Context.Provider value={{//применяем контекст
        user: new UserStore(),
        product: new ProductStore(),
        salesStore: new SalesStore(),
    }}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
    </Context.Provider>
);




