import React from 'react'
import { Outlet, Link } from "react-router-dom";
export default function Navbar() {
  return (
    <>
    <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Navbar</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link active" aria-current="page" to="/Home">Home</Link>
              <Link className="nav-link" to="/About">About</Link>
            </div>
          </div>
        </div>
    </nav>
    <Outlet/>
    </>
  )
}
