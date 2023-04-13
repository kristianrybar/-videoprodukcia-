import css from './BtnMode.module.scss'

const BtnMode = ({ title }) => {
  return (
    <div className={css.btn}>
      <h3 className={css.text}>
        { title }
      </h3>
    </div>
  )
}

export default BtnMode