// actions/questionnaireActions.js
export const SET_CURRENT_QUESTION_INDEX = 'SET_CURRENT_QUESTION_INDEX';
export const SUBMIT_QUESTIONNAIRE_SUCCESS = 'SUBMIT_QUESTIONNAIRE_SUCCESS';
export const SUBMIT_QUESTIONNAIRE_FAILURE = 'SUBMIT_QUESTIONNAIRE_FAILURE';

export const setCurrentQuestionIndex = (index) => ({
  type: SET_CURRENT_QUESTION_INDEX,
  payload: index
});

export const submitQuestionnaireSuccess = () => ({
  type: SUBMIT_QUESTIONNAIRE_SUCCESS
});

export const submitQuestionnaireFailure = (error) => ({
  type: SUBMIT_QUESTIONNAIRE_FAILURE,
  payload: error
});

export const submitQuestionnaire = (formData) => {
  return async (dispatch) => {
    try {
      const response = await fetch('/api/questionnaire/submit', {
        method: 'POST',
        body: formData
      });
      if (response.ok) {
        dispatch(submitQuestionnaireSuccess());
      } else {
        const error = await response.json();
        dispatch(submitQuestionnaireFailure(error));
      }
    } catch (error) {
      console.error(error);
      dispatch(submitQuestionnaireFailure('Internal server error'));
    }
  };
};
