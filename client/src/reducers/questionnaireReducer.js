// reducers/questionnaireReducer.js
import { SET_CURRENT_QUESTION_INDEX, SUBMIT_QUESTIONNAIRE_SUCCESS, SUBMIT_QUESTIONNAIRE_FAILURE } from '../actions/questionnaireActions';

const initialState = {
  questions: [],
  currentQuestionIndex: 1,
  formData: {},
  error: null
};

const questionnaireReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_QUESTION_INDEX:
      return {
        ...state,
        currentQuestionIndex: action.payload
      };
    case SUBMIT_QUESTIONNAIRE_SUCCESS:
      return {
        ...state,
        currentQuestionIndex: 1,
        formData: {},
        error: null
      };
    case SUBMIT_QUESTIONNAIRE_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default questionnaireReducer;
