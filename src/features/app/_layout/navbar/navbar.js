import logo from './assets/logo-dark.svg'

const navbar = () => {
  return (
    <header className="bg-[#231f20] fixed inset-x-0 top-0 text-white py-[20px] z-[999]">
        <div className="flex items-center justify-start px-[15px]">
            <a className='block w-[180px] mr-[50px] ml-[3%]' href="#">
                <img src={logo} alt="logo" />
            </a>
            <ul className='flex items-center relative top-[4px] text-base text-[#FAFAFA]'>
                <a className='p-[3px] mr-[30px] hover:text-[red] transition' href="#">
                    <li>HOME</li>    
                </a>
                <a className='p-[3px] mr-[30px] hover:text-[red] transition' href="#">
                    <li>CALENDAR</li>    
                </a>
                <a className='p-[3px] mr-[30px] hover:text-[red] transition' href="#">
                    <li>DATA</li>    
                </a>
                <a className='p-[3px] hover:text-[red] transition' href="#">
                    <li>STUDIO</li>    
                </a>
            </ul>
        </div>
    </header>
  )
}

export default navbar