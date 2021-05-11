import React, { useState, useEffect } from "react"
const formatThousands = require("format-thousands")

import SubmitButton from "../SubmitButton/SubmitButton"

const Clients = () => {
  const [client, setClient] = useState({})
  const [allClients, setAllClients] = useState([])
  const [name, setName] = useState("")
  const [cuota, setCuota] = useState("")
  const [id, setId] = useState("")

  function handleSubmit(event) {
    event.preventDefault()
    if (!name || !cuota || !id) return
    setClient({ ...client, name, cuota, id })
    if (client) setAllClients([...(allClients || []), client])
    console.log("all clients: ", allClients)

    setName("")
    setCuota("")
    setId("")
  }
  function handleDeleteButton(id) {
    allClients.filter(cl => id !== cl.id)
  }
  return (
    <div className="container">
      <form className="mb-3" onSubmit={handleSubmit}>
        <div className="input-group my-3">
          <input
            type="text"
            className="form-control"
            placeholder="Agregar un nuevo cliente"
            value={name}
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
      <div className="text-center my-2">
        <h3>Clientes</h3>
      </div>
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
            {allClients.map(cli => (
              <tr>
                <td>{cli.name}</td>
                <td>{formatThousands(cli.cuota)}</td>
                <td>{cli.id}</td>
                <td>
                  <button
                    onClick={() => handleDeleteButton(cli.id)}
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
