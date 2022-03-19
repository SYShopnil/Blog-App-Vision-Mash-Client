import {
    createStore,
    applyMiddleware,
    compose
} from 'redux'
import thunk from "redux-thunk";
let composeEnhancers = compose;
if (typeof window !== 'undefined') {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}
import root from "./index";
const store = createStore (
    root,
    composeEnhancers (applyMiddleware (thunk))
)
export default store