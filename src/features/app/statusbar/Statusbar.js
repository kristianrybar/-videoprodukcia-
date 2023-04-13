import BtnStatusbar from "./button/BtnStatusbar"
import css from './Statusbar.module.scss'

const Statusbar = () => {
  return (
    <div className={css.wrapper}>
      <p>
        <code>status: fulfilled, result: connected</code>      
      </p>
      <BtnStatusbar title='connect' />
    </div>
  )
}

export default Statusbar