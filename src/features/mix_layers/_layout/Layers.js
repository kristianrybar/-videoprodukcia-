import Layer from "../Layer/Layer"
import BtnLayers from "../button/BtnLayer"
import css from "./Layers.module.scss"

const Layers = () => {
  return (
    <div className={css.wrapper}>

      <div className={css.title}>
        <h1 className={css.text}>
          LAYERS
        </h1>
      </div>

      <Layer title='LAYER 1' />
      <Layer title='LAYER 2' />
      <Layer title='LAYER 3' />
      <Layer title='LAYER 4' />
      <Layer title='LAYER 5' />

      <div className={css.buttons}>

        <BtnLayers title='ADD' />
          <div className={css.space}>
          </div>
        <BtnLayers title='CLEAR' />

      </div>

    </div>
  )
}

export default Layers