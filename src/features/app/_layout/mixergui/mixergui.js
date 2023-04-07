import Layers from '../../../mix_layers/_layout/layers'
import Preview from '../../../mix_preview/_layout/preview'
import Modes from '../../../mix_modes/_layout/modes'
import Pgm from '../../../mix_pgms/_layout/pgm.js'
import Cams from '../../../mix_cams/_layout/cam'

const mixergui = () => {
  return (
    <div className="relative top-[70px] h-[100vh] bg-[#303030] text-[#a6a6a6] px-1">
      <div className="grid grid-cols-12">

        <div className='col-span-2 max-h-[300px]'>
          <Layers />  
        </div>

        <div className='col-span-3 max-h-[300px]'>
          <Preview />
        </div>

        <div className='col-span-2 max-h-[300px]'>
          <Modes />  
        </div>

        <div className='col-span-3 max-h-[300px]'>
          <Pgm />
        </div>

        <div className='col-span-2'>
          <Cams />
        </div>
        
      </div>

    </div>
  )
}

export default mixergui