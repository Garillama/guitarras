import { useState, useEffect } from 'react'

// Páginas 13–14: comparar un efecto al montar con otro que depende de cuenta.
export default function Ejemplo() {
  const [cuenta, setCuenta] = useState(0)

  useEffect(() => {
    console.log('El componente se montó')
  }, [])

  useEffect(() => {
    console.log('El contador cambió:', cuenta)
  }, [cuenta])

  return (
    <section className="container-xl mt-5" aria-label="Ejemplo de contador">
      <h2>Contador: {cuenta}</h2>
      <div className="d-flex gap-4">
        <button
          type="button"
          className="btn btn-dark"
          onClick={() => setCuenta((actual) => actual + 1)}
        >
          Aumentar
        </button>
        <button
          type="button"
          className="btn btn-dark"
          onClick={() => setCuenta((actual) => actual - 1)}
        >
          Disminuir
        </button>
        <button
          type="button"
          className="btn btn-dark"
          onClick={() => setCuenta(0)}
        >
          Reiniciar
        </button>
      </div>
    </section>
  )
}
