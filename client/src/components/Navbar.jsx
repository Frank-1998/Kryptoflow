
import React from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import logo from '../../images/logo.png';


const NavbarItem = ({ title, classProps }) => {
  return(
    <li className={`mx-4 cursor-pointer ${classProps}`}>
      {title}
    </li>
  )

}

const Navbar = () => {
  {/* close toggle menu on start on mobile  */}
  const [toggleMenu, setToggleMenu] = React.useState(false)


  return(
    <nav className = 'w-full flex md:justify-center justify-between items-center p4'>
      <div className = "md:flex-[0.5] flex-initial justify-center items-center">
        <img src={logo} alt='logo' className = "w-32 cursor-pointer"></img>
      </div>
      <ul className='text-white md:flex hidden list-none flex-row justify-between items-center flex-initial'>
        {["Market", "Exchange", "Tutorials", "Wallets"].map((item, index) => (
          <NavbarItem key={item + index} title={item}></NavbarItem>
        ))}
        <li className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-point hover:bg-[#2546bd]">
          Login
        </li>
      </ul>
      <div className='flex relative'>
        {toggleMenu
          ? <AiOutlineClose fontSize={28}className='text-white md:hidden cursro-pointer' onClick={() => setToggleMenu(false)}/>
          : <HiMenuAlt4 fontSize={28} className='text-white md:hidden cursro-pointer' onClick={() => setToggleMenu(true)}/>
        }
        {toggleMenu && (
          <ul
            className='z-10 fixed top-0 -right-2 p-5 w-3/4 h-screen shadow-2xl md:hidden list-none
              flex flex-col justify-start rounded-md blue-glassmorphism text-white animate-slide-in items-end
          '
          >
            <li className='text-xl w-full my-2' >
              <AiOutlineClose onClick={() => setToggleMenu(false)}  />
              {["Market", "Exchange", "Tutorials", "Wallets"].map((item, index) => (
                <NavbarItem key={item + index} title={item} classProps='my-2 text-lg'></NavbarItem>
              ))}

            </li>
          </ul>
        )}
      </div>
    </nav>

  );
}

export default Navbar;
