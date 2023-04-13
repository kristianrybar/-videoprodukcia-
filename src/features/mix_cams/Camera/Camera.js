import CameraBtn from '../button/BtnCamera'
import css from './Camera.module.scss'

const Camera = ({ cameraTitle }) => {
  return (
    <div>

      <div className={css.wrapper}>
        <h1 className={css.title}>
          { cameraTitle }
        </h1>
        <CameraBtn title='connect' />
      </div>

      <div className={css.camera}>
      </div>

    </div>
  )
}

export default Camera