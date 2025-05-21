import { useState } from 'react'
import '../App.css'
import { Button } from '../components/Button'
import { Card } from '../components/Card'
import { CreateContentModal } from '../components/CreateContentModal'
import { PlusIcon } from '../icons/PlusIcon'
import { ShareIcon } from '../icons/ShareIcon'
import { Sidebar } from '../components/Sidebar'

export function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false)
  return (
    <div>
      <Sidebar/>

    <div className='p-4 ml-72 min-h-screen bg-gray-100'> 
    <CreateContentModal open={modalOpen} onClose={()=>{
      setModalOpen(false);
    }} />
    <div className="flex justify-end gap-4">
      <Button varient='secondary'text='Share Brain' startIcon={<ShareIcon/>}/>
      <Button onClick={()=>{
        setModalOpen(true)
      }} varient='primary'text='Add Content' startIcon={<PlusIcon/>}/>
      </div>
      <div className="flex gap-4">
      <Card title="RAin post" type='twitter' link='https://x.com/shydev69/status/1925201350310207833'/>
        
      <Card title="youtube post" type='youtube' link='https://www.youtube.com/watch?v=fxtTaw-zQrQ'/>
      </div>
    </div>
        </div>
  )
}

