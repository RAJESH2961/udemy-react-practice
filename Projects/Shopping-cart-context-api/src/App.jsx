// App.jsx
import { useState } from 'react';
import Header from './components/Header.jsx';
import Shop from './components/Shop.jsx';
import { DUMMY_PRODUCTS } from './dummy-products.js';
import Product from './components/Product.jsx';
import { CartContext } from './store/shopping-cart-context.jsx';

function App() {
  const [shoppingCart, setShoppingCart] = useState({ items: [] });

  function handleAddItemToCart(id) {
    setShoppingCart((prev) => {
      const updatedItems = [...prev.items];
      const index = updatedItems.findIndex((item) => item.id === id);
      const existingItem = updatedItems[index];

      if (existingItem) {
        updatedItems[index] = { ...existingItem, quantity: existingItem.quantity + 1 };
      } else {
        const product = DUMMY_PRODUCTS.find((p) => p.id === id);
        updatedItems.push({
          id: id,
          name: product.title,
          price: product.price,
          quantity: 1,
        });
      }

      return { items: updatedItems };
    });
  }

  function updateItemQuantity(productId, amount) {
    setShoppingCart((prev) => {
      const updatedItems = [...prev.items];
      const index = updatedItems.findIndex((item) => item.id === productId);
      const updatedItem = { ...updatedItems[index] };

      updatedItem.quantity += amount;

      if (updatedItem.quantity <= 0) {
        updatedItems.splice(index, 1);
      } else {
        updatedItems[index] = updatedItem;
      }

      return { items: updatedItems };
    });
  }

  const ctxValue = {
    items: shoppingCart.items,
    addItemToCart: handleAddItemToCart,
    updateItemQuantity, // ✅ consistent name
  };

  return (
    <CartContext.Provider value={ctxValue}>
      <Header />
      <Shop>
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            <Product {...product} />
          </li>
        ))}
      </Shop>
    </CartContext.Provider>
  );
}

export default App;
