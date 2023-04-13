import css from './BtnStatusbar.module.scss'

const StatusbarBtn = ({ title }) => {
  return (
    <button className={css.btn}>
        <span className={css.text}>
          { title }
        </span>
    </button>
  )
}

export default StatusbarBtn