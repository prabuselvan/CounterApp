import React from 'react';

const NavBar = ({totalCounters})=> {

    // Stateless functional component
    console.log('NavBar Rendered');
        return (
         
            <div>
                <nav className="navbar navbar-light bg-light">
                    <a className="navbar-brand" href="£"> NavBar 
                        <span className="badge badge-pill badge-secondary">
                            {totalCounters}
                        </span>
                    </a>
                </nav>
            </div>
        )
    }

export default NavBar;

