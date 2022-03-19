import officialReducer from "./Official/reducers/Reducer" ;
import {
    combineReducers
} from "redux"

const rootReducer = combineReducers ({
    official: officialReducer
})
export default  rootReducer;