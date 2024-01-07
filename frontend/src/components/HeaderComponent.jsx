import React, { Component } from 'react'
import '../css/page.css'

class HeaderComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        return (
            <div>
                <header>
                    <nav className="navbar">
                        <div>
                            <a href="/users" className="navbar-brand">Puskesmas Bahagia</a>
                        </div>
                    </nav>
                </header>
            </div>
        )
    }
}

export default HeaderComponent
