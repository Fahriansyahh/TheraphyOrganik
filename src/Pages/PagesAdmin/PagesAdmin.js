import React from 'react'
import { NavbarAdmin } from '../../Components/Molekul'
import { ListTheraphyCreate, GetListTheraphy } from '../../Components/Atom/Atom'
const PagesAdmin = () => {
    return (
        <>
            <NavbarAdmin />
            <ListTheraphyCreate />
            <GetListTheraphy />
        </>

    )
}

export default PagesAdmin