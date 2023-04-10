import Camera from "../Camera/Camera"

const Cameras = () => {
  return (
    <div className="flex flex-col px-2">

        <div>
            <Camera cameraTitle='CAM 1' />

            <Camera cameraTitle='CAM 2' />

            <Camera cameraTitle='CAM 3' />
        </div>

  </div>
  )
}

export default Cameras