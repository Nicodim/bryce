import React from 'react'
import { Link } from 'react-router-dom'
import './Page1.css'

const Page1 = () => {

    const tabs = [
        { label: "Firste", path: "/first/firstTab" },
        { label: "Second", path: "/first/secondTab" },
        { label: "Third", path: "/first/thirdTab" }
    ];

    const elements = tabs.map((item) => {   
        return (
            <div className="tab-wrapper">
                <Link className="tab-item btn btn-success" to={item.path}>  {item.label} </Link>
            </div>
        )

    })

    return (
        <div className="page-container">
            <ul className="flex-page d-flex justify-content-between">
            {elements}
            </ul>
        </div>
    )
}

export default Page1;