import css from './Layer.module.scss'

const Layer = ({ title }) => {
  return (
    <div className={css.layer}>
      <h3 className={css.text}>
        { title }
      </h3> 
    </div>
  )
}

export default Layer