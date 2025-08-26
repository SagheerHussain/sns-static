import { Breadcrumbs, Typography } from '@mui/material'
import React from 'react'
import { IoHome } from 'react-icons/io5'
import { Link } from 'react-router-dom'

const BreadCrumb = ({ color = "text-white", title = "Home", category, page }) => {
    return (
        <>
            <Breadcrumbs aria-label="breadcrumb" className={`${color}`} separator="›">
                <Link underline="hover" className={`${color}`} href="/">
                    <span className='flex items-center'><IoHome className={`mb-1 ${color} me-2`} /> {title}</span>
                </Link>
                <Link
                    underline="hover"
                    className={`${color}`}
                    href="/material-ui/getting-started/installation/"
                >
                    {page}
                </Link>
                {category && <Typography className={`${color}`}>{category}</Typography>}
            </Breadcrumbs>
        </>
    )
}

export default BreadCrumb
