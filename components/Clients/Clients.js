import React, { useState, useEffect, useRef } from "react"
const formatThousands = require("format-thousands")

import SubmitButton from "../SubmitButton/SubmitButton"

const Clients = () => {
  const [client, setClient] = useState({})
  const [allClients, setAllClients] = useState([])
  const [name, setName] = useState("")
  const [cuota, setCuota] = useState("")
  const [id, setId] = useState("")
  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  function addClient() {
    setClient({ ...client, name, cuota, id })
  }

  function addClients() {
    if (client) setAllClients([...(allClients || []), client])
  }
  function handleSubmit(event) {
    event.preventDefault()
    if (!name || !cuota || !id) return
    addClient()
    addClients()
    console.log("all clients: ", allClients)

    setName("")
    setCuota("")
    setId("")
  }
  function handleDeleteButton(id) {
    allClients.filter(client => id !== client.id)
  }
  return (
    <div className="container">
      <div className="text-center my-2">
        <h3>Crear clientes</h3>
      </div>
      <form className="mb-3" onSubmit={handleSubmit}>
        <div className="input-group my-3">
          <input
            type="text"
            className="form-control"
            placeholder="Agregar un nuevo cliente"
            value={name}
            ref={inputRef}
            onChange={event => setName(event.target.value)}
          />
        </div>

        <div className="input-group my-3">
          <input
            type="number"
            placeholder="Monto cuota"
            className="form-control"
            value={cuota}
            onChange={event => setCuota(event.target.value)}
          />
        </div>
        <div className="input-group my-3">
          <input
            type="number"
            placeholder="identificador"
            className="form-control"
            value={id}
            onChange={event => setId(event.target.value)}
          />
        </div>

        <div className="input-group text-center d-flex justify-content-center pb-3">
          <SubmitButton onButtonClick={handleSubmit} />
        </div>
      </form>

      {allClients.length ? (
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Cliente</th>
              <th scope="col">Cuota</th>
              <th scope="col">Identificador</th>
            </tr>
          </thead>
          <tbody>
            {allClients.map(client => (
              <tr>
                <td>{client.name}</td>
                <td>{formatThousands(client.cuota)}</td>
                <td>{client.id}</td>
                <td>
                  <button
                    onClick={() => handleDeleteButton(client.id)}
                    className="btn btn-danger btn-sm"
                  >
                    Borrar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center my-5">Sin clientes</p>
      )}
    </div>
  )
}

export default Clients
