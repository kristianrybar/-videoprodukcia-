import Layers from '../../mix_layers/_layout/Layers'
import Preview from '../../mix_preview/_layout/Preview'
import MixModes from '../../mix_modes/_layout/MixModes'
import Pgm from '../../mix_pgms/_layout/Pgm.js'
import Cameras from '../../mix_cams/_layout/Cameras'
import css from './MixerGui.module.scss'

const MixerGui = () => {
  return (
    <div className={`${css.wrapper} ${css.basicGrid}`}> 
      <Layers />  
      <Preview />
      <MixModes />  
      <Pgm />
      <Cameras />    
    </div>
  )
}

export default MixerGui