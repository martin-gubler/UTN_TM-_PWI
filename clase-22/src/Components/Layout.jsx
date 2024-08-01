import React from 'react'

const Layout = (props) => {
    return (
        <div>
            <header>
                <h2>Logo</h2>
                <nav>
                    <a href=''>link 1</a>
                    <br></br>
                    <a href=''>link 2</a>
                </nav>
            </header>
            <main>
            {props.children}
            </main>


        </div>
    )
}

export default Layout