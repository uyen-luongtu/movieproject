import { Fragment } from "react"
import { OPEN_MODALFORM } from "../types/ModalType"

const initState = {
    Component: <p>AAA</p>,

}
export const ModalReducer = (state = initState, action) => {
    switch (action.type) {
        case OPEN_MODALFORM: {
            return { ...state, Component: action.Component }
        }
        default: return { ...state }
            break
    }
}