import axios from 'axios';
import {configureStore} from '@reduxjs/toolkit';

import * as api from './config';
import { themeReducer } from './features/theme/theme-slice';
import { controlsReducer } from './features/controls/controls-slice';
import { countriesReducer } from './features/countries/countries-slice';
import { detailReducer } from './features/details/detail-slice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    controls: controlsReducer,
    countries: countriesReducer,
    details: detailReducer
  },
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    thunk: {
      extraArgument: {
        client: axios,
        api
      }
    },
    serializableCheck: false // проверки дерева состояний на наличия несериализуемых значений Promise, Symbol etc..
  })
});