import CameraBtn from '../button/cameraBtnConnect'
import css from './Camera.module.scss'

const Camera = ({ title }) => {
  return (
    <div>

      <div className={css.wrapper}>
        <h1 className={css.title}>
          { title }
        </h1>
        <CameraBtn title='connect' />
      </div>

      <div className={css.camera}>
      </div>

    </div>
  )
}

export default Camera