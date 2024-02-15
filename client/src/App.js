// App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Questionnaire from './Components/Questionnaire';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Questionnaire />
      </div>
    </Provider>
  );
}

export default App;
