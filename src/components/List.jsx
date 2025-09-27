export default function List({ techs }) {
    return (
        <ul className="flex flex-wrap gap-x-2 gap-y-2 sm:gap-x-3 sm:gap-y-3 md:gap-x-4 md:gap-y-4 mt-4">
            {techs.map((tech, index) => (
                <li
                    key={index}
                    className="flex justify-center items-center 
                    px-3 py-2 
                    sm:px-4 sm:py-3 
                    md:px-5 md:py-4 
                    rounded-[20px] 
                    backdrop-blur-[5px] 
                  bg-[#5b5d64]/20 
                  text-[#dddde8] 
                    text-[14px] sm:text-[16px] md:text-[20px] 
                    ubuntu-medium 
                  hover:bg-[#7f818b]/30 
                    duration-200"
                >
                    {tech}
                </li>
            ))}
        </ul>

    )
}