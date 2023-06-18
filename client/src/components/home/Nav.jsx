import { useContext } from "react"
// import NavDropdown from "./NavDropdown"
import { ShoppingBagIcon } from "@heroicons/react/20/solid"
import CartContext from "@context/CartContext"
import { Link } from "react-router-dom"

const Nav = () => {
  const { cart } = useContext(CartContext)
  const cartItems = cart?.cartItems
  //   const { data: session } = useSession()

  return (
    <nav className='flex justify-between items-center w-full bg-elo sticky top-0 z-50 drop-shadow-bold h-20 mx-8'>
      <div className='max-w-[80rem] w-full mx-auto duration-500 transition-transform px-1 sm:px-8 md:px-16 py-2 flex justify-between items-center'>
        <div className='flex items-center gap-4'>
          <Link to='/' className='h-20 w-20 flex relative'>
            <img
              src='/assets/images/logo.png'
              alt='logo ELO Pokrowce'
              className='object-contain h-20 w-20'
            />
            <p className='sr-only'>ELO Pokrowce</p>
          </Link>
          {/* <ThemeSwitcher /> */}
        </div>
        {/* Desktop Navigation */}
        <div className='flex gap-2'>
          <Link
            to='/koszyk'
            className='px-3 py-2 flex flex-row items-center text-center bg-white dark:bg-neutral-900 shadow-highlight rounded-full hover:bg-neutral-100 hover:dark:bg-neutral-800'
          >
            <ShoppingBagIcon className='h-6 w-6' />
            <span className='hidden lg:inline ml-1'>Koszyk</span>
            <p className='ml-1'>
              (<b>{cartItems?.length || 0}</b>)
            </p>
          </Link>
          {/* <NavDropdown session={session} /> */}
        </div>
      </div>
    </nav>
  )
}

export default Nav
