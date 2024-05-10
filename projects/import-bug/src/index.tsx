import {createRoot } from 'react-dom/client';
import React from 'react';
import { Button, message } from 'antd';
const antd = require('antd');

const App = () =>  {
  const onClick = () => {
    let msg = 'antd@4';
    if (antd.theme) {
      msg = 'antd@5';
    }
    message.success(msg);
  };

  return (
    <Button onClick={onClick}>
      点击我
    </Button>
  );
}

const container = document.body;
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);