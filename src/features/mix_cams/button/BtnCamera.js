import css from './BtnCamera.module.scss'

const BtnCamera = ({title}) => {
  return (
    <button className={css.btn}>
        <span className={css.text}>
            {title}
        </span>
    </button>
  )
}

export default BtnCamera