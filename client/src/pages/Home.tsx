import Banner from '../components/Banner/Banner'
import LookAround from '../components/LookAround/LookAround'

const Home = () => {
  return (
    <>
    <Banner />
    <div className='largeCard rounded-lg w-screenWidthLargeCard bg-white mx-auto -mt-sizeXl py-sizeXxl px-sizeXxl'>
      <LookAround />
    </div>
    </>

  )
}

export default Home