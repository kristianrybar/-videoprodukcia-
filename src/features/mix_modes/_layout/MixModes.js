import BtnMode from "../button/BtnMode"
import css from './MixModes.module.scss'

const MixModes = () => {
  return (
    <div className={css.wrapper}>

      <h1 className={css.title}>
        MIXER MODES
      </h1>
      
      <div className={css.buttonsWrapper}>

        <div className={css.box}>
          <BtnMode title='PREVIEW' />
          <BtnMode title='DIRECT CUT' />
        </div>

        <div className={css.box}>
          <BtnMode title='COMNO' />
          <BtnMode title='CRO' />
        </div>

        <div className={css.box}>
          <BtnMode title='POM DIRECT' />
          <BtnMode title='TRANSITION' />
        </div>

        <div className={css.box}>
          <BtnMode title='TRANSITION SETTINGS' /> 
        </div>

        <div className={css.box}>
          <BtnMode title='TRANSITION' />
          <BtnMode title='UNLOCK' />
        </div>

      </div> 

    </div>
  )
}

export default MixModes