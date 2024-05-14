import {createRoot } from 'react-dom/client';
import React from 'react';
import { loadLocale } from './locale';
try {
  const lodash = require('lodash');
} catch(e) {

}

const locale: Record<string, string> = loadLocale('en-US');

const App = () =>  {

  return (
    <div>
      {
        locale?.['hello']
      }
    </div>
  );
}

const container = document.body;
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);