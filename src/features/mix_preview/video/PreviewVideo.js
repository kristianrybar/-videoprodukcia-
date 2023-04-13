import css from './PreviewVideo.module.scss'

const PreviewVideo = ({ title }) => {
  return (
    <div className={css.wrapper}>
 
      <h1 className={css.title}>
        { title }
      </h1>

      <div className={css.video}>
      </div>
      
    </div>
  )
}

export default PreviewVideo