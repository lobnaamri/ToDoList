import React from 'react';
import ReactDOM from 'react-dom';

//Import App component 

import App from './components/App'

 
export default App;

if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}
