import React from 'react'
import '../style.css'
export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-danger ">
                <div className="container-fluid">
                    <a className="navbar-brand text-light" href="#">React Todo App</a>
                   
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
