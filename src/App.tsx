
import './App.css'
import { MantineProvider} from '@mantine/core'
import { Dragger } from './component/dragzone';

function App() {


  return (
    <>
    <MantineProvider>
<Dragger/>

    </MantineProvider>
    </>
  )
}

export default App
