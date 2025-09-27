import { useTranslation } from 'react-i18next';
import List from "./List";

export default function Main() {
    const { i18n, t } = useTranslation();
    return (
        <main className="mt-[75px]">

            {/*About*/}
            <div>
                <h2 className="w-[95%] mb-[15px] pb-[15px] border-b-4 text-[#dddde8] text-[35px] ubuntu-medium">
                    {t("about.title")}
                </h2>
                <p className="w-[95%] p-[25px] rounded-[25px] backdrop-blur-[5px] bg-[#4B4B4B]/15 text-[#dddde8] text-base sm:text-[15px] md:text-[25px] duration-500 josefin-sans-medium">
                    {t("about.content")}
                </p>
            </div>

            {/*Tech stack*/}
            <div className="mt-[75px]">
                <h2 className="w-[95%] mb-[15px] pb-[15px] border-b-4 text-[#dddde8] text-[35px] ubuntu-medium">
                    {t("tech-stack.title")}
                </h2>
                <div className="max-w-[95%] p-[25px] pt-[5px] rounded-[25px] backdrop-blur-[5px] bg-[#4B4B4B]/15">
                    <List techs={['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express', 'Mongo', 'React', 'TypeScript', 'Tailwind']} />
                </div>
            </div>

            {/*Pet projects*/}
            <div className="mt-16 md:mt-[75px]">
                <h2 className="w-[95%] mb-[15px] pb-[15px] border-b-4 text-[#dddde8] text-[35px] ubuntu-medium">
                    {t("pet-projects.title")}
                </h2>

                <div className="w-[95%] mt-6 p-4 md:p-[25px] rounded-[25px] backdrop-blur-[5px] bg-[#4B4B4B]/15">
                    <div className="flex flex-col items-start gap-2 md:flex-row md:items-center md:gap-0">
                        <h3 className="text-[#dddde8] text-xl md:text-[30px] ubuntu-medium">{t("pet-projects.supchat")}</h3>
                        <p className="hidden md:block ml-[20px] mr-[20px] text-[#dddde8] text-[30px] ubuntu-light">|</p>
                        <a className="text-[#4B4B4B] text-base md:text-[18px] ubuntu-medium hover:text-[#5F5E5E] duration-200" href="https://github.com/dmi3midd/Supchatmini">GitHub</a>
                    </div>
                    <List techs={['JavaScript', 'TypeScript', 'Node.js', 'Express', 'WebSockets', 'Mongo + mongoose', 'React', 'Tailwind', 'Zustand', 'Telegram API']} />
                </div>

                <div className="w-[95%] mt-6 p-4 md:p-[25px] rounded-[25px] backdrop-blur-[5px] bg-[#4B4B4B]/15">
                    <div className="flex flex-col items-start gap-2 md:flex-row md:items-center md:gap-0">
                        <h3 className="text-[#dddde8] text-xl md:text-[30px] ubuntu-medium">{t("pet-projects.desktop-pw-manag")}</h3>
                        <p className="hidden md:block ml-[20px] mr-[20px] text-[#dddde8] text-[30px] ubuntu-light">|</p>
                        <a className="text-[#4B4B4B] text-base md:text-[18px] ubuntu-medium hover:text-[#5F5E5E] duration-200" href="https://github.com/dmi3midd/pwmanag">GitHub</a>
                    </div>
                    <List techs={['JavaScript', 'Node.js', 'React', 'Tailwind', 'Electron']} />
                </div>

                <div className='w-[95%] mt-6 p-4 md:p-[25px] rounded-[25px] backdrop-blur-[5px] bg-[#4B4B4B]/15'>
                    <div className="flex flex-col items-start gap-2 md:flex-row md:items-center md:gap-0">
                        <h3 className="text-[#dddde8] text-xl md:text-[30px] ubuntu-medium">{t("pet-projects.npm")}</h3>
                        <p className="hidden md:block ml-[20px] mr-[20px] text-[#dddde8] text-[30px] ubuntu-light">|</p>
                        <a className="text-[#4B4B4B] text-lg md:text-[20px] ubuntu-medium hover:text-[#5F5E5E] duration-200" href="https://www.npmjs.com/~dmi3mid">npm</a>
                    </div>

                    <div className="w-full mt-6 p-4 md:p-[25px] rounded-[25px] backdrop-blur-[5px] bg-[#4B4B4B]/5">
                        <div className="flex flex-col items-start gap-2 md:flex-row md:items-center md:gap-0">
                            <h3 className="text-[#dddde8] text-lg md:text-[25px] ubuntu-medium">{t("pet-projects.logger")}</h3>
                            <p className="hidden md:block ml-[20px] mr-[20px] text-[#dddde8] text-[25px] ubuntu-light">|</p>
                            <a className="text-[#4B4B4B] text-base md:text-[20px] ubuntu-medium hover:text-[#5F5E5E] duration-200" href="https://github.com/dmi3midd/extLogger">GitHub</a>
                        </div>
                        <List techs={['TypeScript', 'Node.js', 'Telegram API']} />
                    </div>

                    <div className="w-full mt-6 p-4 md:p-[25px] rounded-[25px] backdrop-blur-[5px] bg-[#4B4B4B]/5">
                        <div className="flex flex-col items-start gap-2 md:flex-row md:items-center md:gap-0">
                            <h3 className="text-[#dddde8] text-lg md:text-[25px] ubuntu-medium">{t("pet-projects.spotify-api")}</h3>
                            <p className="hidden md:block ml-[20px] mr-[20px] text-[#dddde8] text-[25px] ubuntu-light">|</p>
                            <a className="text-[#4B4B4B] text-base md:text-[20px] ubuntu-medium hover:text-[#5F5E5E] duration-200" href="https://github.com/dmi3midd/simple-spotify-api">GitHub</a>
                        </div>
                        <List techs={['TypeScript', 'Node.js', 'Spotify API']} />
                    </div>

                    <div className="w-full mt-6 p-4 md:p-[25px] rounded-[25px] backdrop-blur-[5px] bg-[#4B4B4B]/5">
                        <div className="flex flex-col items-start gap-2 md:flex-row md:items-center md:gap-0">
                            <h3 className="text-[#dddde8] text-lg md:text-[25px] ubuntu-medium">{t("pet-projects.vernam")}</h3>
                            <p className="hidden md:block ml-[20px] mr-[20px] text-[#dddde8] text-[25px] ubuntu-light">|</p>
                            <a className="text-[#4B4B4B] text-base md:text-[20px] ubuntu-medium hover:text-[#5F5E5E] duration-200" href="https://github.com/dmi3midd/vernam">GitHub</a>
                        </div>
                        <List techs={['TypeScript', 'Node.js']} />
                    </div>
                </div>
            </div>

            {/*Education*/}
            <div className="mt-[75px]">
                <h2 className="w-[95%] mb-[15px] pb-[15px] border-b-4 text-[#dddde8] text-[35px] ubuntu-medium">
                    {t("education.title")}
                </h2>
                <p className="w-[95%] p-[25px] rounded-[25px] backdrop-blur-[5px] bg-[#4B4B4B]/15 text-[#dddde8] text-base sm:text-[15px] md:text-[25px] duration-500 josefin-sans-medium">
                    {t("education.content")}
                </p>
            </div>

        </main>
    )
}