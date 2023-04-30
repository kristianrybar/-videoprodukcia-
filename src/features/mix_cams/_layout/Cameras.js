import Camera from "../Camera/Camera"
import css from './Cameras.module.scss'

const Cameras = () => {
  return (
    <div className={css.wrapper}>
      <div>
        <Camera title='CAM 1' />

        <Camera title='CAM 2' />

        <Camera title='CAM 3' />
      </div>
  </div>
  )
}

export default Cameras