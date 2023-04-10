const StatusbarBtn = ({ title }) => {
  return (
    <button className="px-2 bg-red-700 rounded-sm active:scale-[0.97]">
        <span className="relative bottom-[1px]">
            { title }
        </span>
  </button>
  )
}

export default StatusbarBtn