import PgmSwitcher from "../switcher/PgmSwitcher"
import PgmsVideo from "../video/PgmsVideo"
import css from './Pgm.module.scss'

const Pgm = () => {
  return (
    <div className={css.wrapper}>

      <div className={css.switchers}>
        <PgmSwitcher title='PGM-1' />
        <PgmSwitcher title='PGM-2' />
      </div>

      <PgmsVideo />

    </div>
  )
}

export default Pgm