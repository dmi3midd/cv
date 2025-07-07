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
                <p className="w-[95%] p-[25px] rounded-[25px] backdrop-blur-[5px] bg-[#4B4B4B]/15 text-[#dddde8] text-[25px] josefin-sans-medium">
                    {t("about.content")}
                </p>
            </div>
            {/*Tech stack*/}
            <div className="mt-[75px]">
                <h2 className="w-[95%] mb-[15px] pb-[15px] border-b-4 text-[#dddde8] text-[35px] ubuntu-medium">
                    {t("tech-stack.title")}                   
                </h2>
                <div className="w-[95%] p-[25px] pt-[5px] rounded-[25px] backdrop-blur-[5px] bg-[#4B4B4B]/15">
                    <List techs={['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express', 'Mongo', 'React', 'TypeScript', 'Tailwind', 'Electron', 'Jest', 'C#']}/>
                </div>
            </div>
            {/*Pet projects*/}
            <div className="mt-[75px]">
                <h2 className="w-[95%] mb-[15px] pb-[15px] border-b-4 text-[#dddde8] text-[35px] ubuntu-medium">
                    {t("pet-projects.title")}                    
                </h2>
                
                <div className="w-[95%] p-[25px] rounded-[25px] backdrop-blur-[5px] bg-[#4B4B4B]/15">
                    <div className="flex items-center">
                        <h3 className="text-[#dddde8] text-[30px] ubuntu-medium">{t("pet-projects.pw-manager")}</h3>
                        <p className="ml-[20px] mr-[20px] text-[#dddde8] text-[30px] ubuntu-light">|</p>
                        <a className="text-[#4B4B4B] text-[18px] ubuntu-medium hover:text-[#5F5E5E] duration-200" href="https://github.com/dmi3midd/pwmanag">GitHub</a>
                    </div>
                    <List techs={['HTML', 'CSS', 'JavaScript', 'Node.js', 'React', 'Tailwind', 'Electron']}/>
                </div>

                <div className="w-[95%] mt-[25px] p-[25px] rounded-[25px] backdrop-blur-[5px] bg-[#4B4B4B]/15">
                    <div className="flex items-center">
                        <h3 className="text-[#dddde8] text-[30px] ubuntu-medium">{t("pet-projects.loggers")}</h3>
                        <p className="ml-[20px] mr-[20px] text-[#dddde8] text-[30px] ubuntu-light">|</p>
                        <a className="text-[#4B4B4B] text-[18px] ubuntu-medium hover:text-[#5F5E5E] duration-200" href="">GitHub</a>
                    </div>
                    <List techs={['JavaScript', 'Node.js', 'TypeScript', 'Telegram API']} />
                </div>

                <div className="w-[95%] mt-[25px] p-[25px] rounded-[25px] backdrop-blur-[5px] bg-[#4B4B4B]/15">
                    <div className="flex items-center">
                        <h3 className="text-[#dddde8] text-[30px] ubuntu-medium">{t("pet-projects.spotify-api")}</h3>
                        <p className="ml-[20px] mr-[20px] text-[#dddde8] text-[30px] ubuntu-light">|</p>
                        <a className="text-[#4B4B4B] text-[18px] ubuntu-medium hover:text-[#5F5E5E] duration-200" href="">GitHub</a>
                    </div>
                    <List techs={['TypeScript', 'Node.js', 'Spotify API']} />
                </div>

                <div className="w-[95%] mt-[25px] p-[25px] rounded-[25px] backdrop-blur-[5px] bg-[#4B4B4B]/15">
                    <div className="flex items-center">
                        <h3 className="text-[#dddde8] text-[30px] ubuntu-medium">{t("pet-projects.music-player")}</h3>
                        <p className="ml-[20px] mr-[20px] text-[#dddde8] text-[30px] ubuntu-light">|</p>
                        <a className="text-[#4B4B4B] text-[18px] ubuntu-medium hover:text-[#5F5E5E] duration-200" href="">GitHub</a>
                    </div>
                    <List techs={['HTML', 'CSS', 'TypeScript/JavaScript', 'Node.js', 'React', 'Tailwind', 'Electron', 'Spotify API']}/>
                </div>

                <div className="w-[95%] mt-[25px] p-[25px] rounded-[25px] backdrop-blur-[5px] bg-[#4B4B4B]/15">
                    <div className="flex items-center">
                        <h3 className="text-[#dddde8] text-[30px] ubuntu-medium">{t("pet-projects.doc-analyz")}</h3>
                        <p className="ml-[20px] mr-[20px] text-[#dddde8] text-[30px] ubuntu-light">|</p>
                        <a className="text-[#4B4B4B] text-[18px] ubuntu-medium hover:text-[#5F5E5E] duration-200" href="">GitHub</a>
                    </div>
                    <List techs={['C#']} />
                </div>
            </div>
            {/*Education*/}
            <div className="mt-[75px]">
                <h2 className="w-[95%] mb-[15px] pb-[15px] border-b-4 text-[#dddde8] text-[35px] ubuntu-medium">
                    {t("education.title")}
                </h2>
                <p className="w-[95%] p-[25px] rounded-[25px] backdrop-blur-[5px] bg-[#4B4B4B]/15 text-[#dddde8] text-[25px] josefin-sans-medium">
                    {t("education.content")}
                </p>
            </div>

        </main>
    )
}