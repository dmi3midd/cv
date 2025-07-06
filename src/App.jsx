import LetterGlitch from './components/reactbits/LetterGlitch/LetterGlitch';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative h-min-screen w-min-screen flex justify-center">
      <div className="fixed inset-0">
        {/* <img src="src\assets\Images\bg.jpg" alt="" /> */}
        <LetterGlitch
          glitchSpeed={100}
          outerVignette={false}
          glitchColors={['#414243', '#575757', '#737374']}
        />
      </div>
      <div className="w-[80%] mt-[100px] mb-[100px] rounded-[50px] backdrop-blur-[5px] p-[50px] bg-[#1b1b21]/30">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  )
}