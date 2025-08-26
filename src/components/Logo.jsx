import { useMediaQuery } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Logo = ({
    src = "",
    className = "",
    ...props
}) => {

    const matches = useMediaQuery('(max-width:385px)');

    return (
        <>
            <Link to={`/`}>
                <img src={src} alt={src} className={`${className} max-w-full sm:w-[220px] md:w-[250px] ${matches ? "w-[140px]" : "w-[200px]"}`} {...props} />
            </Link>
        </>
    )
}

export default Logo
