"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section className="lg:py-14">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-3xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fccc2c] to-[#e19421]">
             ORKIDE
            </span>
           
            <br></br>
            <TypeAnimation
              sequence={[
                "Emploi du temps",
                1000,
                "Finance",
                1000,
                "Bulletin",
                1000,
                "Gestion du personel",
                1000,
                "Messagerie",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
            {/*  <br></br>
             <span className="text-white mb-4 text-2xl sm:text-3xl lg:text-7xl lg:leading-normal font-extrabold">la gestion scolaire réinventée</span> */}
          </h1>
         
          <p className="text-[#ADB7BE] text-base sm:mt-0 mt-8 sm:text-lg mb-6 lg:text-xl ">
          Orkide : Votre application de gestion scolaire tout-en-un qui vous aide à suivre les présences, gérer les emplois du temps, créer des bulletins, et bien d'autres fonctionnalités essentielles.
          </p>
          <div className="px-3 pt-4 sm:pt-0 sm:px-0">
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-[#fccc2c] to-[#e19421] hover:bg-slate-200 text-white"
            >
              Contactez-nous
            </Link>
            <Link
              href="/#projects"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-[#fccc2c] to-[#e19421] hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-white text-[#b47619] font-bold hover:bg-slate-800 rounded-full px-5 py-2">
                Demo
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 sm:place-self-end place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full flex sm:justify-end justify-center items-center mt-16 sm:mt-0 w-[200px] h-[200px] lg:w-[500px] lg:h-[500px] relative">
            <Image
              src="/logo.svg"
              alt="Orkide image"
              // className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={350}
              height={350}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
