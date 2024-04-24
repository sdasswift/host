
import React from 'react';
import ReactDOM from 'react-dom/client';
import App1 from 'app2/App';
import App2 from 'app3/App';
import { BrowserRouter as Router } from 'react-router-dom';
import MainLayout from './main-layout';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <Router>
      <MainLayout>
        <App1 />
        <App2 />
      </MainLayout>
    </Router>
  </React.StrictMode>,
);
