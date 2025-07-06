export default function Header() {
    return (
        <header className="mt-[50px]">
            <div className="flex justify-center items-center mb-[25px]">
                <h1 className=" mb-[25px] text-[#dddde8] text-[40px] ubuntu-medium">
                    Dmytro Stavickiy, 18
                </h1>
            </div>
            <ul className="flex justify-evenly flex-wrap gap-x-6 gap-y-2">
                <li className="text-[#8a8a8a] text-[20px] josefin-sans-regular hover:text-[#dddde8] duration-250">
                    Kyiv, Ukraine
                </li>

                <li className="text-[#8a8a8a] text-[20px] josefin-sans-regular hover:text-[#dddde8] duration-250">
                    <a href="tel:+380991846006">+380991846006</a>
                </li>

                <li className="text-[#8a8a8a] text-[20px] josefin-sans-regular hover:text-[#dddde8] duration-250">
                    <a href="mailto:dmi3midd@gmail.com">dmi3midd@gmail.com</a>
                </li>

                <li className="text-[#8a8a8a] text-[20px] josefin-sans-regular hover:text-[#dddde8] duration-250">
                    <a href="https://t.me/dmi3mid">Telegram</a>
                </li>
                
                <li className="text-[#8a8a8a] text-[20px] josefin-sans-regular hover:text-[#dddde8] duration-250">
                    <a href="https://www.instagram.com/dmi3mid?igsh=MTM5eWY0MTRoY2Vjdg==">Instagram</a>
                </li>
                
                <li className="text-[#8a8a8a] text-[20px] josefin-sans-regular hover:text-[#dddde8] duration-250">
                    <a href="https://github.com/dmi3midd">GitHub</a>
                </li>
            </ul>
        </header>
    )
}