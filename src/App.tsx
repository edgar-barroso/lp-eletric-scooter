import Background from "./components/Background";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Footer from "./components/Footer";
import OrientationPrompt from "./components/OrientationPrompt";
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import ScooterModel from './components/ScooterModel';
import { motion } from 'framer-motion';
import { colors } from './theme/colors';
import { useMobileView } from './hooks/useBreakpoint';

function App() {
  const isMobile = useMobileView();

  return (
    <div className="h-screen flex flex-col max-h-screen max-w-screen overflow-hidden relative">
      <OrientationPrompt />
      <Header />
      {!isMobile && <SideBar />}
      <Background />
      <Footer />
      
      <main className={isMobile ? "flex flex-col h-full" : ""}>
        {/* Text Content */}
        <motion.div 
          initial={{ x: isMobile ? 0 : -100, y: isMobile ? 50 : 0, opacity: 0 }}
          animate={{ x: 0, y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className={
            isMobile 
              ? "flex-1 flex flex-col justify-center items-center text-center px-6 pt-20 pb-8 z-10"
              : "absolute top-1/2 left-20 -translate-y-1/2 z-10"
          }
          style={{ color: colors.text.primary }}
        >
          <motion.h1 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className={
              isMobile 
                ? "text-2xl font-semibold tracking-[0.1em] mb-4 uppercase"
                : "text-4xl font-semibold tracking-[0.15em] mb-6 uppercase"
            }
          >
            Let's ride the{" "}
            <motion.span 
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.9, type: "spring" }}
              className={isMobile ? "text-5xl block" : "text-8xl block"}
            >
              FUTURE
            </motion.span>
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className={
              isMobile 
                ? "text-sm tracking-wide mb-6 uppercase leading-relaxed"
                : "text-lg tracking-wide mb-10 uppercase"
            }
          >
            Simple and sleek design to make your ride easy{isMobile ? "" : <br/>} 
            {isMobile && <br/>}
            Make your journey fast and easy
          </motion.p>
          <motion.button 
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.3, type: "spring", stiffness: 200 }}
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 15px 40px rgba(0,0,0,0.3)",
              y: -5
            }}
            whileTap={{ scale: 0.95 }}
            className={
              isMobile 
                ? "font-bold text-base px-6 py-3 rounded-xl cursor-pointer shadow-lg"
                : "font-bold text-lg px-8 py-3 rounded-xl cursor-pointer shadow-lg"
            }
            style={{
              background: `linear-gradient(to bottom, ${colors.button.from}, ${colors.button.to})`
            }}
          >
            PRE-ORDER
          </motion.button>
        </motion.div>

        {/* 3D Model */}
        <motion.div 
          initial={{ 
            x: isMobile ? 0 : 100, 
            y: isMobile ? 50 : 0, 
            opacity: 0, 
            scale: isMobile ? 0.8 : 1 
          }}
          animate={{ x: 0, y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.6, type: "spring" }}
          className={
            isMobile 
              ? "flex-1 relative min-h-[300px]"
              : "absolute right-0 top-1/2 -translate-y-1/2 w-[900px] h-screen"
          }
        >
          <Canvas 
            camera={{ 
              position: isMobile ? [4, 2, 4] : [3.5, 1.5, 3.5], 
              fov: isMobile ? 60 : 50 
            }}
          >
            <ambientLight intensity={0.5} />
            <spotLight 
              position={[10, 10, 10]} 
              angle={0.3} 
              penumbra={1} 
              intensity={isMobile ? 1.5 : 2} 
              castShadow 
            />
            <pointLight position={[-10, -10, -10]} intensity={0.5} />
            <ScooterModel isMobile={isMobile} />
            <Environment preset="sunset" />
          </Canvas>
        </motion.div>
      </main>
    </div>
  );
}

export default App;
