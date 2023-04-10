import Layer from "../Layer/Layer"
import BtnLayers from "../button/BtnLayer"

const Layers = () => {
  return (
    <div className="px-2">

      <div className="bg-tranparent py-3 font-medium">
        <h1 className="text-center">
          LAYERS
        </h1>
      </div>

      <Layer title='LAYER 1' />
      <Layer title='LAYER 1' />
      <Layer title='LAYER 1' />
      <Layer title='LAYER 1' />
      <Layer title='LAYER 1' />

      <div className="flex items-center text-[14px] mt-[3px]">

        <BtnLayers title='ADD' />
        <div className="bg-transparent px-[2px]">
        </div>
        <BtnLayers title='CLEAR' />

      </div>

    </div>
  )
}

export default Layers