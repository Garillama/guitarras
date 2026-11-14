import { useState, useEffect } from 'react'
import Guitar from './components/Guitar'
import Header from './components/Header'
import Footer from './components/Footer'
import { db } from './data/db.js'

function App() {
  const [auth, setAuth] = useState(true)

  if (auth) {
    console.log(auth)
    console.log(db)
    setAuth(false)
  }

  function registrar() {
    setAuth(true)
    alert('Registrando usuario...')
  }

  return (
    <>
      <Header />

      <main className="container-xl mt-5">
        <h2 onClick={registrar} className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {db.map((guitar) => (
            <Guitar
              key={guitar.id}
              image={`/img/${guitar.image}.jpg`}
              name={guitar.name}
              description={guitar.description}
              price={guitar.price}
            />
          ))}
        </div>
      </main>

      <Footer />
    </>
  )
}

export default App
