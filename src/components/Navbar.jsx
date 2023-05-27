import React from 'react'
import '../style.css'
export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-danger">
                <div className="container-fluid">
                    <a className="navbar-brand text-light" href="#">React Todo App</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    {/* <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item ">
                                <a className="nav-link text-light" aria-current="page" href="#">Home</a>
                            </li>
                            
                        
                        </ul>
                    </div> */}
                </div>
            </nav>
        </div>
    )
}
