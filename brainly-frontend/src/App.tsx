import './App.css'
import { Button } from './components/Button'
import { Card } from './components/Card'
import { CreateContentModal } from './components/createContentModal'
import { PlusIcon } from './icons/Plusicon'
import { ShareIcon } from './icons/ShareIcon'

function App() {

  return (
    <div className='p-4'> 
    <CreateContentModal open={true} opacity-60/>
    <div className="flex justify-end gap-4">
      <Button varient='secondary'text='Share Brain' startIcon={<ShareIcon/>}/>
      <Button varient='primary'text='Add Content' startIcon={<PlusIcon/>}/>
      </div>
      <div className="flex gap-4">
      <Card title="RAin post" type='twitter' link='https://x.com/shydev69/status/1925201350310207833'/>
        
      <Card title="youtube post" type='youtube' link='https://www.youtube.com/watch?v=fxtTaw-zQrQ'/>
      </div>
    </div>
  )
}

export default App
