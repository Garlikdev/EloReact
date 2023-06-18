import Categories from "@components/home/Categories"

const Home = () => {
  return (
    <>
      <main className='pt-4 w-full max-w-[80rem] h-[calc(100%-64px)] px-1 sm:px-8 md:px-16'>
        <section className='w-full flex items-center justify-center flex-col'>
          <div className='relative w-full aspect-video'>
            <img
              src='/assets/images/banerhome.webp'
              alt='baner styl i wygoda'
              className='object-contain rounded-xl'
            />
          </div>
          <Categories />
        </section>
      </main>
    </>
  )
}

export default Home
