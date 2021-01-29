import fakeRestProvider from 'ra-data-fakerest';
// import { cacheDataProviderProxy } from 'react-admin';
import data from './db';

const dataProvider = fakeRestProvider(data);

export default dataProvider; //cacheDataProviderProxy(dataProvider);

