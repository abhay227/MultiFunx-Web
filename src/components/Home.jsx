import React from 'react'
import "./Home.css"
import { Link } from 'react-router-dom'
const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <div className="link-wrapper">
                <div>
                    <Link to="/Counter">
                        Counter
                    </Link>
                </div>
                <div>
                    <Link to="/Shopping">
                        Shopping
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home