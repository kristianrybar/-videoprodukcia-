import CameraBtn from "../button/BtnCamera"

const Camera = ({ cameraTitle }) => {
  return (
    <div>

      <div className="flex items-center justify-between bg-tranparent py-3">
        <h1 className="ml-[5px] text-center font-medium relative top-[10px]">
          { cameraTitle }
        </h1>
        <CameraBtn title='connect' />
      </div>

      <div className="min-h-[150px] bg-[#0f0f0f] h-full">
      </div>

    </div>
  )
}

export default Camera