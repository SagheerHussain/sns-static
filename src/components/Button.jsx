import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({
    link="",
    label,
    Icon = null,
    href = '/',
    className = '',
    bgColor = "bg-[radial-gradient(circle,_rgba(26,8,152,1)_0%,_rgba(24,12,75,1)_64%)]",
    color = 'hover:text-white',
    ...props
}) => {
    return (
        <>
            <Link to={link}>
                <button className={`${className} after:${bgColor} ${color} `} {...props}>
                    {label}
                </button>
            </Link>
        </>
    )
}

export default Button
