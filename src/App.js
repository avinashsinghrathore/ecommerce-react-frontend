import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import { ProductList } from './features/product-list/ProductList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ProductList />
      </header>
    </div>
  );
}

export default App;
