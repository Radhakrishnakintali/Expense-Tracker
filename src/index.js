import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './redux/store';
import i18next from './services/i18n';
// import i18n from "i18next";
// import { initReactI18next } from "react-i18next";
// import LanguageDetector from 'i18next-browser-languagedetector';
// import HttpApi from 'i18next-http-backend';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'flag-icon-css/css/flag-icons.min.css';



// i18n
//   .use(initReactI18next) // passes i18n down to react-i18next
//   .use(LanguageDetector)
//   .use(HttpApi)
//   .init({
//     supportedLngs: ['en', 'fr', 'ar'],
//     // the translations
//     // (tip move them in a JSON file and import them,
//     // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
//     fallbackLng: "en",
//     detection:{
//       order: ['htmlTag', 'cookie', 'localStorage', 'path', 'subdomain'],
//       caches: ['cookie']
//     },
//     backend: {
//       loadPath: '/assets/locales/{{lng}}/translation.json'
//     },
//     react: {useSuspense: false},
//     interpolation: {
//       escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
//     }
//   });

console.log('i18next', i18next) // if I uncomment this, it works on test server

ReactDOM.render(
  
    <React.StrictMode>
      <Provider store={store}>
      <App />
      </Provider>
    </React.StrictMode>
  ,
  document.getElementById('root')
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
