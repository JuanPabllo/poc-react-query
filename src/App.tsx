import React, { useState } from 'react';
import './App.css';
import ProductDetail from './pages/Products/Detail';
import ProductList from './pages/Products/List';

function App() {
  const [productsId, setProductsId] = useState<number | null>(null);

  const onProductDetail = (id: number) => {
    setProductsId(id);
  };

  const onBackList = () => {
    setProductsId(null);
  };
  return (
    <div className="App">
      {productsId !== null ? (
        <ProductDetail id={productsId} onBack={onBackList} />
      ) : (
        <ProductList onProductDetail={onProductDetail} />
      )}
    </div>
  );
}

export default App;
