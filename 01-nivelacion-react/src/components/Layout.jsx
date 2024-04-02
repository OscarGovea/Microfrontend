import React from 'react'

const Layout = ({children}) => {

    return (
        <>
            <header><h1>01 - React nivelation</h1></header>

            <main>
                {children}
            </main>

            <footer style={{marginTop:"60px"}}>
                &copy; Oscar Govea KSP- {new Date().getFullYear()}
            </footer>
        </>
    )
}

export default Layout