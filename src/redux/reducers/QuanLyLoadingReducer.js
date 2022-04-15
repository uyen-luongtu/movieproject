import { SHOW_LOADING, HIDE_LOADING } from '../types/QuanLyLoadingType'

const initState = {
    isLoading: false
}

export const QuanLyLoadingReducer = (state = initState, action) => {
    switch (action.type) {
        case SHOW_LOADING: {

            return { ...state, isLoading: true }
        }
        case HIDE_LOADING: {
            return { ...state, isLoading: false }
        }
        default: return { ...state }
            break;
    }
}