import { BrowserRouter} from 'react-router-dom'
import Mainlayout from './layout/Mainlayout'
import ScrollToTop from './components/ScrollToTop'

function App() {

  return (
    <>
    <BrowserRouter>
    <ScrollToTop/>
      <Mainlayout/>
    </BrowserRouter>
    </>
  )
}

export default App
