import LetterGlitch from './components/reactbits/LetterGlitch/LetterGlitch';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative h-min-screen w-full flex justify-center">
      <div className="fixed inset-0 -z-10">
        <img className="w-full h-full object-cover" src="src/assets/images/bg.jpg" alt="" />
        {/* <LetterGlitch
          glitchSpeed={100}
          outerVignette={false}
          glitchColors={['#414243', '#575757', '#737374']}
        /> */}
      </div>
      {/* <div id='lg' className="w-[80%] mt-[100px] mb-[100px] rounded-[50px] backdrop-blur-[4px] p-[50px] bg-[#161616]/10"> */}
      <div id='img' className="w-[80%] mt-[100px] mb-[100px] rounded-[50px] backdrop-blur-[8px] p-[50px] bg-[#161616]/0">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  )
}