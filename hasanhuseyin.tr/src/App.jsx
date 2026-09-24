import './App.css'
import { TypeAnimation } from 'react-type-animation'
function App() {


  return (
    <>
      <div className="bg-gray-500 min-h-screen text-white flex flex-col justify-center items-center gap-4">
        
        <TypeAnimation
          sequence={[
            '',
            3000,
            'Front-End Development Student',
            3000,
            '',
            'Front-End Development Student',
            3000,
            '',
            3000,
          ]}
          wrapper="div"
          cursor={true}
          repeat={Infinity}
          className="font-Montserrat font-light text-5xl mt-5"
        />

        <p className="font-Montserrat font-semibold text-5xl pt-5">Hasan Hüseyin</p>


      </div>
    </>
  )
}

export default App
