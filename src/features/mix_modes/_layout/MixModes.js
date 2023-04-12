import BtnMode from "../button/BtnMode"

const MixModes = () => {
  return (
    <div className="flex flex-col px-2 text-[#525252] h-full max-h-[300px]">

      <div className="bg-tranparent py-3">
        <h1 className="text-center font-medium">
          MIXER MODES
        </h1>
      </div>

      <div className="flex flex-col h-full">

        <div className="flex items-center text-[12px] h-full mb-[2px]">
          <BtnMode title='PREVIEW' />
          <BtnMode title='DIRECT CUT' />
        </div>

        <div className="flex items-center text-[12px] h-full mb-[2px]">
          <BtnMode title='COMNO' />
          <BtnMode title='CRO' />
        </div>

        <div className="flex items-center text-[12px] h-full mb-[2px]">
          <BtnMode title='POM DIRECT' />
          <BtnMode title='TRANSITION' />
        </div>

        <div className="flex items-center text-[12px] h-full mb-[2px]">
          <BtnMode title='TRANSITION SETTINGS' /> 
        </div>

        <div className="flex items-center text-[12px] h-full">
          <BtnMode title='TRANSITION' />
          <BtnMode title='UNLOCK' />
        </div>

      </div> 

    </div>
  )
}

export default MixModes