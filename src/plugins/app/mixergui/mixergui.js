import Layers from '../../mixer/layers'
import Preview from '../../previews/preview'
import Modes from '../../mixer/modes'


const mixergui = () => {
  return (
    <div className="relative top-[70px] h-[100vh] bg-[#303030] text-[#a6a6a6]">
      <div className="grid grid-cols-12 w-[50%]">
        <div className='col-span-3'>
          <Layers />  
        </div>
        <div className='col-span-6'>
          <Preview />
        </div>
        <div className='col-span-3'>
          <Modes />  
        </div>
        
          
      </div>
    </div>
  )
}

export default mixergui