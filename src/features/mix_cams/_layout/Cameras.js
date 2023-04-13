import Camera from "../Camera/Camera"
import css from './Cameras.module.scss'

const Cameras = () => {
  return (
    <div className={css.wrapper}>
      <div>
        <Camera cameraTitle='CAM 1' />

        <Camera cameraTitle='CAM 2' />

        <Camera cameraTitle='CAM 3' />
      </div>
  </div>
  )
}

export default Cameras