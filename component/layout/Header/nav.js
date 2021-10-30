import { Router } from 'next/router'
import React from 'react'
import { Nav } from 'react-bootstrap'
const Navvv = Nav.Link;

function Navss( {name} ) {
    const names = name
    return (
        <Navvv > {names} </Navvv>
    )
}

export default Navss
