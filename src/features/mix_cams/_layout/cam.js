const cams = () => {
  return (
    <div className="flex flex-col px-2">

        <div>
            <div className="flex items-center justify-between bg-tranparent py-3">
                <h1 className="ml-[5px] text-center font-medium relative top-[10px]">
                    CAM 1
                </h1>
                <button className="px-2 bg-red-700 rounded-sm text-white relative top-[7px] active:scale-[0.97]">
                    <span className="relative bottom-[1px]">
                        connect
                    </span>
                </button>
            </div>

            <div className="min-h-[150px] bg-[#0f0f0f] h-full">
            </div>
        </div>

        <div>
            <div className="flex items-center justify-between bg-tranparent py-3">
                <h1 className="ml-[5px] text-center font-medium relative top-[10px]">
                    CAM 2
                </h1>
                <button className="px-2 bg-red-700 rounded-sm text-white relative top-[7px] active:scale-[0.97]">
                    <span className="relative bottom-[1px]">
                        connect
                    </span>
                </button>
            </div>

            <div className="min-h-[150px] bg-[#0f0f0f] h-full">
            </div>
        </div>


  </div>
  )
}

export default cams