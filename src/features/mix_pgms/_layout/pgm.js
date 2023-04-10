import PgmSwitcher from "../switcher/PgmSwitcher"
import PgmsVideo from "../video/PgmsVideo"

const Pgm = () => {
  return (
    <div className="flex flex-col h-full">

        <div className="bg-tranparent font-medium">
          <PgmSwitcher title='PGM-1' />
          <PgmSwitcher title='PGM-2' />
        </div>

        <PgmsVideo />

    </div>
  )
}

export default Pgm