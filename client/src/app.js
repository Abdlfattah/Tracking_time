import React from 'react';

import Tracker from './components/tracker/'
import TrackedTime from './components/tracked_time'


const App = () => {
    return (
        <div>
            <Tracker/>
            <TrackedTime/>
        </div>
    );
};

export default App;