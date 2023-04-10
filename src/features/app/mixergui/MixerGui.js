import Layers from '../../mix_layers/_layout/Layers'
import Preview from '../../mix_preview/_layout/Preview'
import MixModes from '../../mix_modes/_layout/MixModes'
import Pgm from '../../mix_pgms/_layout/Pgm.js'
import Cameras from '../../mix_cams/_layout/Cameras'

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
          <MixModes />  
        </div>

        <div className='col-span-3 max-h-[300px]'>
          <Pgm />
        </div>

        <div className='col-span-2'>
          <Cameras />
        </div>
        
      </div>

    </div>
  )
}

export default mixergui