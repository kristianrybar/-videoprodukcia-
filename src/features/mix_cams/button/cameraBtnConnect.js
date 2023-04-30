import css from './cameraBtnConnect.module.scss'

const cameraBtnConnect = ({title}) => {
  return (
    <button className={css.btn}>
        <span className={css.text}>
            {title}
        </span>
    </button>
  )
}

export default cameraBtnConnect