import List from "./List";

export default function Main() {
    return (
        <main className="mt-[75px]">
            <div>
                <h2 className="w-[95%] mb-[15px] pb-[15px] border-b-4 text-[#dddde8] text-[35px] ubuntu-medium">
                    About
                </h2>
                <p className="w-[95%] p-[25px] rounded-[25px] backdrop-blur-[5px] bg-[#4B4B4B]/20 text-[#dddde8] text-[25px] josefin-sans-medium">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Delectus molestias facilis corrupti recusandae quidem animi consectetur cum natus tempore? 
                    Quae totam quod maiores tempora delectus, eum, ducimus voluptates cupiditate architecto 
                    numquam possimus ipsum neque necessitatibus nam laborum nesciunt porro eius?
                </p>
            </div>
            
            <div className="mt-[75px]">
                <h2 className="w-[95%] mb-[15px] pb-[15px] border-b-4 text-[#dddde8] text-[35px] ubuntu-medium">
                    Tech stack                    
                </h2>
                <div className="w-[95%] p-[25px] pt-[5px] rounded-[25px] backdrop-blur-[5px] bg-[#4B4B4B]/20">
                    <List techs={['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express', 'Mongo', 'React', 'TypeScript', 'Tailwind', 'Electron', 'Jest', 'C#']}/>
                </div>
            </div>

            <div className="mt-[75px]">
                <h2 className="w-[95%] mb-[15px] pb-[15px] border-b-4 text-[#dddde8] text-[35px] ubuntu-medium">
                    Pet projects                    
                </h2>
                
                <div className="w-[95%] p-[25px] rounded-[25px] backdrop-blur-[5px] bg-[#4B4B4B]/20">
                    <div className="flex items-center">
                        <h3 className="text-[#dddde8] text-[30px] ubuntu-medium">Passwords manager</h3>
                        <p className="ml-[20px] mr-[20px] text-[#dddde8] text-[30px] ubuntu-light">|</p>
                        <a className="text-[#4B4B4B] text-[18px] ubuntu-medium hover:text-[#5F5E5E] duration-200" href="">link on repo</a>
                    </div>
                    <List techs={['HTML', 'CSS', 'JavaScript', 'Node.js', 'React', 'Tailwind', 'Electron']}/>
                </div>

                <div className="w-[95%] mt-[25px] p-[25px] rounded-[25px] backdrop-blur-[5px] bg-[#4B4B4B]/20">
                    <div className="flex items-center">
                        <h3 className="text-[#dddde8] text-[30px] ubuntu-medium">Loggers</h3>
                        <p className="ml-[20px] mr-[20px] text-[#dddde8] text-[30px] ubuntu-light">|</p>
                        <a className="text-[#4B4B4B] text-[18px] ubuntu-medium hover:text-[#5F5E5E] duration-200" href="">Telegram logger repo</a>
                        <p className="ml-[20px] mr-[20px] text-[#dddde8] text-[30px] ubuntu-light">|</p>
                        <a className="text-[#4B4B4B] text-[18px] ubuntu-medium hover:text-[#5F5E5E] duration-200" href="">File logger repo</a>
                        <p className="ml-[20px] mr-[20px] text-[#dddde8] text-[30px] ubuntu-light">|</p>
                        <a className="text-[#4B4B4B] text-[18px] ubuntu-medium hover:text-[#5F5E5E] duration-200" href="">File logger in ts repo</a>
                    </div>
                    <List techs={['JavaScript', 'Node.js', 'TypeScript', 'Telegram API']} />
                </div>

                <div className="w-[95%] mt-[25px] p-[25px] rounded-[25px] backdrop-blur-[5px] bg-[#4B4B4B]/20">
                    <div className="flex items-center">
                        <h3 className="text-[#dddde8] text-[30px] ubuntu-medium">Library for Spotify API</h3>
                        <p className="ml-[20px] mr-[20px] text-[#dddde8] text-[30px] ubuntu-light">|</p>
                        <a className="text-[#4B4B4B] text-[18px] ubuntu-medium hover:text-[#5F5E5E] duration-200" href="">link on repo</a>
                    </div>
                    <List techs={['TypeScript', 'Node.js', 'Spotify API']} />
                </div>

                <div className="w-[95%] mt-[25px] p-[25px] rounded-[25px] backdrop-blur-[5px] bg-[#4B4B4B]/20">
                    <div className="flex items-center">
                        <h3 className="text-[#dddde8] text-[30px] ubuntu-medium">Music player</h3>
                        <p className="ml-[20px] mr-[20px] text-[#dddde8] text-[30px] ubuntu-light">|</p>
                        <a className="text-[#4B4B4B] text-[18px] ubuntu-medium hover:text-[#5F5E5E] duration-200" href="">link on repo</a>
                    </div>
                    <List techs={['HTML', 'CSS', 'TypeScript/JavaScript', 'Node.js', 'React', 'Tailwind', 'Electron', 'Spotify API']}/>
                </div>

                <div className="w-[95%] mt-[25px] p-[25px] rounded-[25px] backdrop-blur-[5px] bg-[#4B4B4B]/20">
                    <div className="flex items-center">
                        <h3 className="text-[#dddde8] text-[30px] ubuntu-medium">Document analyzator</h3>
                        <p className="ml-[20px] mr-[20px] text-[#dddde8] text-[30px] ubuntu-light">|</p>
                        <a className="text-[#4B4B4B] text-[18px] ubuntu-medium hover:text-[#5F5E5E] duration-200" href="">link on repo</a>
                    </div>
                    <List techs={['C#']} />
                </div>
            </div>

            <div className="mt-[75px]">
                <h2 className="w-[95%] mb-[15px] pb-[15px] border-b-4 text-[#dddde8] text-[35px] ubuntu-medium">
                    Education
                </h2>
                <p className="w-[95%] p-[25px] rounded-[25px] backdrop-blur-[5px] bg-[#4B4B4B]/20 text-[#dddde8] text-[25px] josefin-sans-medium">
                    2nd course. National Technical University of Ukraine “Igor Sikorsky Kyiv Polytechnic Institute”. <br/>
                    Faculty of Applied Mathematics. Department of Computer Systems Software. <br/>
                    121 Software engineering. <br/> English level - B1 Intermediate.
                </p>
            </div>

        </main>
    )
}