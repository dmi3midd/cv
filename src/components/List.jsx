export default function List({ techs }) {
    return (
        <ul className="flex flex-wrap gap-x-4 gap-y-2 mt-[20px]">
            {techs.map((tech, index) => (
                <li key={index} className="flex justify-center items-center pl-[20px] pr-[20px] pt-[15px] pb-[15px] rounded-[20px] backdrop-blur-[5px] bg-[#5b5d64]/20 text-[#dddde8] text-[20px] ubuntu-medium hover:bg-[#7f818b]/30 duration-200">
                    {tech}
                </li>
            ))}
        </ul>
    )
}