import './App.css'
import { Button } from './components/ui/Button'
import { PlusIcon } from './icons/PlusIcon'

function App() {
  return (
    <>
    <Button startIcon={<PlusIcon/>} size='md' varient='secondary' text='share Brain' />
    <Button size='md' varient='primary' text='Add content' />
    </>
  )
}

export default App
