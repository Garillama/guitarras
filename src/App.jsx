import { useState, useEffect } from 'react';
import { db } from './data/db.js';

import Ejemplo from './components/Ejemplo.jsx';
import Header from './components/Header.jsx';
import Guitar from './components/Guitar.jsx';
import Footer from './components/Footer.jsx';

function initialCart() {
  const localStorageCart = localStorage.getItem('cart');

  return localStorageCart
    ? JSON.parse(localStorageCart)
    : [];
}

function App() {
  const MAX_QUANTITY = 5;
  const MIN_QUANTITY = 1;
  const [data] = useState(db);
  const [cart, setCart] = useState(initialCart);


// Mostrar el contenido del carrito
useEffect(() => {
  console.log('Carrito de compras:', cart);
}, [cart]);

useEffect(() => {
  localStorage.setItem('cart', JSON.stringify(cart));
}, [cart]);

// Agregar productos
function addToCart(item) {
  setCart(prevCart => {
    const existGuitar = prevCart.findIndex(
      guitar => guitar.id === item.id
    );

    if (existGuitar >= 0) {
      return prevCart.map(guitar =>
        guitar.id === item.id &&
        guitar.quantity < MAX_QUANTITY
          ? { ...guitar, quantity: guitar.quantity + 1 }
          : guitar
      );
    }

    return [...prevCart, { ...item, quantity: 1 }];
  });
}

function removeFromCart(id) {
  setCart(prevCart =>
    prevCart.filter(guitar => guitar.id !== id)
  );
}

function increaseQuantity(id) {
  setCart(prevCart =>
    prevCart.map(guitar => {
      if (
        guitar.id === id &&
        guitar.quantity < MAX_QUANTITY
      ) {
        return {
          ...guitar,
          quantity: guitar.quantity + 1
        };
      }

      return guitar;
    })
  );
}

function decreaseQuantity(id) {
  setCart(prevCart =>
    prevCart.map(guitar => {
      if (
        guitar.id === id &&
        guitar.quantity > MIN_QUANTITY
      ) {
        return {
          ...guitar,
          quantity: guitar.quantity - 1
        };
      }

      return guitar;
    })
  );
}

function clearCart() {
  setCart([]);
}

  return (
    <>
      <Header
        cart={cart}
        removeFromCart={removeFromCart}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        clearCart={clearCart}
      />

      <main className="container-xl mt-5">
        <h2 className="text-center">
          Nuestra Colección
        </h2>

        <div className="row mt-5">
          {data.map((guitar) => (
            <Guitar
              key={guitar.id}
              guitar={guitar}
              addToCart={addToCart}
            />
          ))}
        </div>

        <Ejemplo />
      </main>

      <Footer />
    </>
  );
}

export default App;

