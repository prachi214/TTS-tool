
import './App.css'
import { MantineProvider} from '@mantine/core'
import { Drager } from './component/dragzone';

function App() {


  return (
    <>
    <MantineProvider>
<Drager/>

    </MantineProvider>
    </>
  )
}

export default App
