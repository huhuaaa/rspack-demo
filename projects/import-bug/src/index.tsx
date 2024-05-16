import {createRoot } from 'react-dom/client';
import React from 'react';
import { loadLocale } from './locale';
import _ from 'lodash';

const a = _.cloneDeep({});
console.log(a);

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