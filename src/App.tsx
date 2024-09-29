
import './App.css'
import { MantineProvider} from '@mantine/core'
import { Dragger } from './component/dragzone';
import { OrbitingCirclesDemo } from './component/orbit';
function App() {


  return (
    <>
    <h1 className='text-center text-yellow-300 text-5xl mt-8 font-bold'>Lets try, Extract Text from your image!       
    </h1>
    <span className="flex items-center justify-center mt-4">
        {/* Example GIF */}
        <img src="/face-kawaii.gif" alt="Demo GIF" className="w-20 h-20" />
      </span>
    <span className='flex flex-col-reverse md:flex-row-reverse   items-baseline'>
    <MantineProvider>

<Dragger/>
<OrbitingCirclesDemo/>

    </MantineProvider>
    </span>
    {/* <MantineProvider>

<Dragger/>
<OrbitingCirclesDemo/>

    </MantineProvider> */}
    </>
  )
}

export default App
