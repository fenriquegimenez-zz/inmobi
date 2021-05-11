import React from "react"
import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg my-3 navbar-light bg-light ">
      <div className="container-fluid">
        <Link href="/">
          <a className="navbar-brand">Inicio</a>
        </Link>
        <ul className="navbar-nav row justify-content-evenly mb-2 mb-lg-0">
          <li className="navbar-item col-4">
            <Link href="/dashboard">
              <a className="navbar-link text-decoration-none text-secondary">
                Resumen
              </a>
            </Link>
          </li>
          <li className="navbar-item col-4">
            <Link href="/receipts">
              <a className="navbar-link text-decoration-none text-secondary">
                Recibos
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
