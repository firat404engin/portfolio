"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import CryptoTicker from '../Finance/CryptoTicker';
import { FaEnvelope, FaFileAlt } from 'react-icons/fa';
import { RiSparkling2Fill } from 'react-icons/ri';

const Hero = () => {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center justify-center py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="mb-6 w-full">
              <CryptoTicker />
            </div>
            
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, type: "spring", bounce: 0.3 }}
              className="space-y-6"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 relative">
                <span className="absolute -inset-1 blur-2xl bg-gradient-to-r from-emerald-600/30 to-teal-500/30 animate-pulse"></span>
                Merhaba, ben{' '}
                <span className="relative inline-block">
                  <span className="absolute -inset-1 blur bg-gradient-to-r from-emerald-600 to-teal-500 opacity-30 group-hover:opacity-100 transition-opacity"></span>
                  <span className="relative bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-600 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                    Fırat Engin
                  </span>
                </span>
              </h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed relative backdrop-blur-sm p-6 rounded-2xl bg-white/50 dark:bg-gray-900/50 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50"
              >
                <span className="absolute -inset-1 blur-2xl bg-gradient-to-r from-emerald-600/10 to-teal-500/10"></span>
                <span className="relative">
                  Karmaşık problemleri, basit, şık ve kullanıcı dostu çözümlere dönüştürüyorum. 
                  <span className="font-medium text-emerald-600 dark:text-emerald-400"> Tıpkı bir Ayvalık tostu gibi: </span> 
                  doyurucu, lezzetli ve akılda kalıcı işler üretmeye odaklıyım! 
                  <span className="block mt-2 italic text-gray-500 dark:text-gray-400">
                    (Bu kişisel sitem, biraz fantezi, biraz da kodlamaya dair tutkumun karışımı. 
                    <span className="inline-block animate-bounce">🚀</span> Tadı damağınızda kalacak!)
                  </span>
                </span>
              </motion.p>

              <style jsx global>{`
                @keyframes gradient {
                  0% { background-position: 0% 50%; }
                  50% { background-position: 100% 50%; }
                  100% { background-position: 0% 50%; }
                }
                .animate-gradient {
                  animation: gradient 8s linear infinite;
                }
              `}</style>

              <div className="flex flex-wrap gap-6 pt-8">
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-500 text-white px-8 py-3 rounded-xl hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-emerald-500/25"
                >
                  <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></span>
                  <span className="relative flex items-center gap-2">
                    <FaEnvelope className="w-5 h-5 animate-pulse" />
                    <span>İletişime Geç</span>
                    <RiSparkling2Fill className="w-4 h-4 text-yellow-300 animate-bounce" />
                  </span>
                </motion.a>
                
                <motion.a
                  href="https://drive.google.com/file/d/1HHsPboeE67aU3dFxe4DyPZhYiN1bI2H-/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative flex items-center gap-2 border-2 border-emerald-600 dark:border-emerald-500 text-emerald-600 dark:text-emerald-500 px-8 py-3 rounded-xl hover:text-white transition-all duration-300"
                >
                  <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity -z-10"></span>
                  <span className="relative flex items-center gap-2">
                    <FaFileAlt className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                    <span>CV'yi İncele</span>
                    <RiSparkling2Fill className="w-4 h-4 text-emerald-500 group-hover:text-yellow-300 group-hover:animate-bounce transition-colors" />
                  </span>
                </motion.a>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, type: "spring", bounce: 0.3 }}
            className="flex justify-center items-center"
          >
            <div className="relative w-[450px] h-[450px] md:w-[600px] md:h-[600px]">
              <Image
                src="https://i.hizliresim.com/ljdgion.png"
                alt="Fırat Engin"
                fill
                className="object-contain"
                priority
                sizes="(max-width: 768px) 450px, 600px"
                unoptimized
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
