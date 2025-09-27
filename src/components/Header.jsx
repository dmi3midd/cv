import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function Header() {
    const { i18n, t } = useTranslation();
    const [lang, setLang] = useState('en');
    const changeLang = (newLang) => {
        setLang(newLang);
        i18n.changeLanguage(newLang);
    };
    const selected = "backdrop-blur-[5px] bg-[#5b5d64]/20"
    return (
        <header className="mt-[40px]">
            <div className="flex justify-end w-[95%]">
                <div onClick={() => changeLang('en')} className={`flex justify-center items-center pl-[8px] pr-[8px] pt-[7px] rounded-[8px] hover:backdrop-blur-[5px] hover:bg-[#5b5d64]/20 duration-200 ${lang === 'en' && selected}`}>
                    <p className="text-[#dddde8] text-[20px] josefin-sans-medium">EN</p>
                </div>
                <p className="ml-[15px] mr-[15px] text-[#dddde8] text-[28px] ubuntu-light">|</p>
                <div onClick={() => changeLang('ua')} className={`flex justify-center items-center pl-[8px] pr-[8px] pt-[7px] rounded-[8px] hover:backdrop-blur-[5px] hover:bg-[#5b5d64]/20 duration-200 ${lang === 'ua' && selected}`}>
                    <p className="text-[#dddde8] text-[20px] josefin-sans-medium">UA</p>
                </div>
            </div>
            <div className="flex justify-center items-center w-full mb-[25px]">
                {/* Адаптивний розмір для заголовка */}
                <h1 className="mb-[25px] text-[#dddde8] text-3xl md:text-[40px] ubuntu-medium">
                    {t("name")}, 18
                </h1>
            </div>

            {/* Оновлений адаптивний список */}
            <ul className="flex flex-col items-center gap-y-4 md:flex-row md:flex-wrap md:justify-evenly md:gap-x-6 md:gap-y-2">
                <li className="text-[#8a8a8a] text-base md:text-[20px] josefin-sans-regular hover:text-[#dddde8] duration-250">
                    {t("location")}
                </li>

                <li className="text-[#8a8a8a] text-base md:text-[20px] josefin-sans-regular hover:text-[#dddde8] duration-250">
                    <a href="mailto:dmi3midd@gmail.com">dmi3midd@gmail.com</a>
                </li>

                <li className="text-[#8a8a8a] text-base md:text-[20px] josefin-sans-regular hover:text-[#dddde8] duration-250">
                    <a href="https://t.me/dmi3mid">Telegram</a>
                </li>

                <li className="text-[#8a8a8a] text-base md:text-[20px] josefin-sans-regular hover:text-[#dddde8] duration-250">
                    <a href="https://www.instagram.com/dmi3mid?igsh=MTM5eWY0MTRoY2Vjdg==">Instagram</a>
                </li>

                <li className="text-[#8a8a8a] text-base md:text-[20px] josefin-sans-regular hover:text-[#dddde8] duration-250">
                    <a href="https://github.com/dmi3midd">GitHub</a>
                </li>
            </ul>
        </header>
    )
}