import { applyMiddleware, createStore, combineReducers } from 'redux';
import {thunk} from 'redux-thunk';
import questionnaireReducer from './reducers/questionnaireReducer';

const rootReducer = combineReducers({
  questionnaire: questionnaireReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
