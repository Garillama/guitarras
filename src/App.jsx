import { useState, useEffect } from 'react'
import Guitar from './components/Guitar'
import Header from './components/Header'
import Footer from './components/Footer'
import Ejemplo from './components/Ejemplo'
import { db } from './data/db.js'

function App() {
  // Páginas 15–18: datos locales y estado del catálogo.
  const [data] = useState(db)
  const [cart, setCart] = useState([])

  useEffect(() => {
    console.log('Guitarras cargadas:', data)
  }, [data])

  // El efecto muestra el carrito después de que React actualiza el estado.
  useEffect(() => {
    console.log('Carrito actualizado:', cart)
  }, [cart])

  // Página 20: pasar esta función al componente hijo mediante props.
  function addToCart(item) {
    setCart((currentCart) => [...currentCart, item])
  }

  return (
    <>
      <Header />
      <Ejemplo />

      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {data.map((guitar) => (
            <Guitar
              key={guitar.id}
              guitar={guitar}
              addToCart={addToCart}
            />
          ))}
        </div>
      </main>

      <Footer />
    </>
  )
}

export default App
