import Guitar from './components/Guitar'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />

      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {Array.from({ length: 12 }, (_, index) => {
            const number = String(index + 1).padStart(2, '0')

            return (
              <Guitar
                key={number}
                image={`/img/guitarra_${number}.jpg`}
                price={299}
              />
            )
          })}
        </div>
      </main>

      <Footer />
    </>
  )
}

export default App
