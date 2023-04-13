import css from './BtnLayer.module.scss'

const BtnLayers = ({title}) => {
  return (
    <div className={css.btn}>
      <h3 className={css.text}>
        {title}
      </h3>
    </div>
  )
}

export default BtnLayers