const statusbar = () => {
  return (
    <div className="fixed bottom-0 inset-x-0 z-[999]">
      <div className="flex items-center justify-between bg-[#231f20] py-[5px] px-[15px] text-white">
        <p className="text-[#cfcfcf]">
          <span>
            <code>status: fulfilled, result: connected</code>
          </span>         
        </p>
        <button className="px-2 bg-red-700 rounded-sm">
          <span className="relative bottom-[1px]">
            connect
          </span>
        </button>
      </div>
    </div>
  )
}

export default statusbar