import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import TextTransitionComponent from "./TextTransitionComponent"

export default function Categories() {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch("http://localhost:3001/api/categories")
        const data = await res.json()
        setCategories(data)
        console.log(data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchCategories()
  }, [])

  if (!categories.length) return null

  return (
    <section className='py-4 mx-auto w-full flex justify-center items-center flex-col gap-4'>
      <h1 className='font-bold py-4 text-4xl sm:text-5xl text-center drop-shadow-lg'>
        Jakie
        <span className='orange_gradient text-center'>
          <TextTransitionComponent />
        </span>
        dziś wybierasz?
      </h1>

      <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full justify-center'>
        {categories?.map((category) => (
          <Link
            to={`/c/${category.slug}`}
            key={category.id}
            className='group items-center justify-center flex rounded-xl bg-neutral-100 dark:bg-neutral-800 shadow-highlight relative sm:hover:scale-105 hover:shadow-xl transition-transform duration-150 overflow-hidden'
          >
            <div className='flex items-center justify-center gap-5'>
              <div className='flex-1 flex items-center justify-center gap-3 cursor-pointer'>
                <img
                  key={category.id}
                  src={category.image}
                  alt={category.name}
                  className='object-contain h-32 w-32 md:h-64 md:w-64 duration-300 ease-in-out group-hover:scale-95 p-4'
                />
                <div className='flex flex-col absolute items-center justify-center text-center mx-auto'>
                  <h3 className='font-inter text-white drop-shadow-bold text-lg md:text-2xl font-black duration-300 ease-in-out group-hover:scale-110'>
                    {category.name}
                  </h3>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
