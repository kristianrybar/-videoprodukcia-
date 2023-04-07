const modes = () => {
  return (
    <div className="flex flex-col px-2 text-[#525252] h-full">

      <div className="bg-tranparent py-3">
        <h1 className="text-center font-medium">
          MIXER MODES
        </h1>
      </div>

      <div className="flex flex-col h-full">

        <div className="flex items-center text-[12px] h-full mb-[2px]">
          <div className="bg-[#141414] w-full h-full mr-[1px]">
            <h3 className="relative top-[60%] text-center">
              PREVIEW
            </h3>
          </div>
            
          <div className="bg-[#141414] w-full h-full ml-[1px]">
            <h3 className="relative top-[60%] text-center">
              DIRECT CUT
            </h3>
          </div>
        </div>

        <div className="flex items-center text-[12px] h-full mb-[2px]">
          <div className="bg-[#141414] w-full h-full mr-[1px]">
            <h3 className="relative top-[60%] text-center">
              COMNO
            </h3>
          </div>
            
          <div className="bg-[#141414] w-full h-full ml-[1px]">
            <h3 className="relative top-[60%] text-center">
              CRO
            </h3>
          </div>
        </div>

        <div className="flex items-center text-[12px] h-full mb-[2px]">
          <div className="bg-[#141414] w-full h-full mr-[1px]">
            <h3 className="relative top-[60%] text-center">
              POM DIRECT
            </h3>
          </div>
            
          <div className="bg-[#141414] w-full h-full ml-[1px]">
            <h3 className="relative top-[60%] text-center">
              TRANSITION
            </h3>
          </div>
        </div>

        <div className="flex items-center text-[12px] h-full mb-[2px]">
          <div className="bg-[#141414] w-full h-full">
            <h3 className="relative top-[60%] text-center">
              TRANSITION SETTINGS
            </h3>
          </div>
        </div>

        <div className="flex items-center text-[12px] h-full">
          <div className="bg-[#141414] w-full h-full mr-[1px]">
            <h3 className="relative top-[60%] text-center">
              TRANSITION
            </h3>
          </div>
            
          <div className="bg-[#141414] w-full h-full ml-[1px]">
            <h3 className="relative top-[60%] text-center">
              UNLOCK
            </h3>
          </div>
        </div>

      </div> 

    </div>
  )
}

export default modes