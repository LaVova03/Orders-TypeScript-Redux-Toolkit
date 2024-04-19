import React from "react";
import * as ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import AppRouter from "./router";
import { store } from "./store/store";

import { I18nextProvider } from "react-i18next";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslation from "./i18/en.json";
import ruTranslation from "./i18/ru.json";

const userLanguage = navigator.language.split("-")[0];

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslation },
    ru: { translation: ruTranslation },
  },
  lng: userLanguage,
  fallbackLng: "ru",
  debug: true,
  interpolation: {
    escapeValue: false,
  },
});

const rootElement = document.getElementById("root");
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);

  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <I18nextProvider i18n={i18n}>
          <AppRouter />
        </I18nextProvider>
      </Provider>
    </React.StrictMode>
  );
} else {
  console.error("Root element not found!");
}
