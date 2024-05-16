import { createRoot } from 'react-dom/client';
import React from 'react';
import styles from './index.module.less';

const App = () =>  {

  return (
    <div className={styles.xxx}>
      
    </div>
  );
}

const container = document.body;
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);