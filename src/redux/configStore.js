import { applyMiddleware, combineReducers, createStore } from 'redux';
import reduxThunk from 'redux-thunk';

import { QuanLyNguoiDungReducer } from './reducers/QuanLyNguoiDungReducer'
import { QuanLyPhimReducer } from './reducers/QuanLyPhimReducer'
import { QuanLyRapReducer } from './reducers/QuanLyRapReducer'
import { QuanLyDatVeReducer } from './reducers/QuanLyDatVeReducer'
import { QuanLyLoadingReducer } from './reducers/QuanLyLoadingReducer'
import { ModalReducer } from './reducers/ModalReducer';

const rootReducer = combineReducers({
    QuanLyNguoiDungReducer,
    QuanLyPhimReducer,
    QuanLyRapReducer,
    QuanLyDatVeReducer,
    QuanLyLoadingReducer,
    ModalReducer,


})

const store = createStore(rootReducer, applyMiddleware(reduxThunk));

export default store;