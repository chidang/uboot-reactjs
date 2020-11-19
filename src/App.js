import React from 'react';
import Dashboard from './hoc/Layout/Dashboard';
import Routes from './routes/Routes';

const App = () => (
    <div>
      <Dashboard>
        <Routes />
      </Dashboard>
    </div>
);

export default App;