import css from './PgmSwitcher.module.scss'

const PgmSwitcher = ({ title }) => {
  return (
    <button className={css.switcher}>
        { title }
    </button>
  )
}

export default PgmSwitcher