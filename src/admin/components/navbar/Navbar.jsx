import { Button, Menu, MenuItem } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { IoMenu } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import "../dashboard.css"

const Navbar = () => {

  const [token, setToken] = useState("");
  const [user, setUser] = useState(null);

  // Navigate
  const navigate = useNavigate();

  useEffect(() => {
    const getUserDetails = async () => {
      const token = sessionStorage.getItem("token");
      setToken(token);
      try {
        const response = await fetch("https://skynetsilicon-website-backend.vercel.app/api/auth/user", {
          method: "GET",
          headers: { "Content-Type": "application/json", "Authorization": `${token}` }
        })
        const { user } = await response.json();
        setUser(user);
      } catch (error) {

      }
    }
    getUserDetails();
  }, []);

  // Logout
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  }
  const handleLogout = () => {
    setAnchorEl(null);
    sessionStorage.removeItem("token");
    setTimeout(() => {
      window.location.href = "/login"
    }, 500);
  };

  return (
    <>
      <nav id='navbar' className='bg-zinc-950 lg:w-[75vw] xl:w-[80vw] 2xl:w-[85vw] lg:h-[10vh] xl:h-[7vh] flex items-center'>
        <div className="container-fluid py-3 px-4">
          <div className="navbar_content flex justify-between items-center">
            <div className="navbar_menu ">
              <IoMenu className='text-3xl text-[#fff]' />
            </div>

            <Button
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            >
              <div className="profile_menu_icon w-[30px] h-[30px] bg-[#fff] rounded-full flex items-center justify-center me-2">
                <span className='text-sky-500 font-semibold text-lg'>{user?.username[0].toUpperCase()}</span>
              </div>
              <span className='text-white'>{user?.username}</span>
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
              className='navbar-dropdown-menu'
            >
              <MenuItem onClick={handleLogout} className='w-full'>Logout</MenuItem>
            </Menu>

          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
