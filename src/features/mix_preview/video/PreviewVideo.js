const PreviewVideo = ({ title }) => {
  return (
    <div className="flex flex-col h-full">

      <div className="bg-tranparent py-3">
        <h1 className="text-center font-medium">
          { title }
        </h1>
      </div>

      <div className="bg-[#0f0f0f] h-full">
      </div>

    </div>
  )
}

export default PreviewVideo