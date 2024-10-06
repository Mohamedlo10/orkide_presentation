"use client";
import Image from "next/image";
import { useState, useTransition } from "react";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "mission",
    id: "mission",
    content: (
      <div className="">
        <h3 class="text-2xl lg:leading-normal font-extrabold mb-4 text-center">Notre Mission</h3>
          <p class="text-[#ADB7BE] text-base mb-6 lg:text-base">
            Chez Orkide, notre mission est d'améliorer la qualité de l'éducation en fournissant des outils numériques accessibles et performants. Nous croyons que chaque élève mérite une éducation de qualité, et nous nous engageons à accompagner les enseignants et les administrateurs dans leur tâche quotidienne. Grâce à notre application, vous pouvez gérer facilement les inscriptions, les emplois du temps, les notes, et bien plus encore.
          </p>
      </div>
    ),
  },
  {
    title: "choix",
    id: "choix",
    content: (
      <div>
        <h3 class="text-2xl lg:leading-normal font-extrabold mb-4 text-center">Pourquoi Choisir Orkide ?</h3>
          <ul class="text-[#ADB7BE] text-base mb-6 lg:text-base">
            <li class="mb-2"><strong>Simplicité d'utilisation</strong> : Notre interface intuitive permet à tout le monde, qu'il s'agisse de personnel administratif ou d'enseignants, de naviguer facilement dans l'application, sans besoin de formation complexe.</li>
            <li class="mb-2"><strong>Accessibilité</strong> : En étant entièrement en ligne, Orkide est accessible depuis n'importe quel appareil connecté à Internet, facilitant ainsi l'accès aux informations et la communication entre tous les acteurs de l'éducation.</li>
            <li class="mb-2"><strong>Personnalisation</strong> : Chaque école est unique, et nous offrons des solutions personnalisées qui s'adaptent aux spécificités de votre établissement, vous permettant de gérer vos opérations selon vos besoins.</li>
            {/* <li class="mb-2"><strong>Support local</strong> : Basés au Sénégal, nous comprenons le contexte éducatif et culturel de notre pays. Notre équipe est toujours prête à vous offrir un support réactif et adapté à vos besoins.</li> */}
          </ul>
      </div>
    ),
  },
  {
    title: "rejoindre",
    id: "rejoindre",
    content: (
     <div>
            <h3 class="text-2xl lg:leading-normal font-extrabold mb-4 text-center">Rejoignez la Révolution Éducative</h3>
              <p class="text-[#ADB7BE] text-base  mb-6 lg:text-base">
                En choisissant Orkide, vous participez à une révolution éducative qui vise à rendre l'apprentissage plus efficace et accessible. Nous sommes là pour vous accompagner à chaque étape, en vous offrant les outils nécessaires pour transformer votre établissement scolaire.
              </p>
              <div class="text-center">
                <a href="#" class="inline-block bg-white text-[#071b2c] font-semibold py-2 px-4 rounded shadow hover:bg-gray-200 transition duration-300">
                  Découvrez notre application
                </a>
                </div>
     </div>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("choix");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white sm:h-[100vh]  flex items-center justify-center" id="about">
      <div className="md:grid md:grid-cols-2 sm:gap-8  items-center justify-center px-4 xl:gap-16 sm:py-10 xl:px-2">
        <Image src="/logo.svg" width={500} height={500} className="hidden md:block" />
        <div className="sm:pt-12 md:mt-0 text-left items-center justify-center flex flex-col h-full">
          <h2 class="text-white mb-4 text-4xl sm:text-5xl lg:text-4xl lg:leading-normal font-extrabold">À propos d'Orkide</h2>
            <p class="text-[#ADB7BE] mb-6 text-base">
              Bienvenue sur Orkide, votre solution de gestion scolaire innovante et efficace, spécialement conçue pour répondre aux besoins des établissements d'enseignement au Sénégal. Nous comprenons les défis uniques auxquels les écoles font face dans un environnement en constante évolution, et nous sommes déterminés à simplifier la gestion administrative afin que vous puissiez vous concentrer sur ce qui compte vraiment : l'éducation de vos élèves.
            </p>
          <div className="flex shadow-md items-center p-2 text-base flex-row justify-center mt-8">
            <TabButton
              selectTab={() => handleTabChange("mission")}
              active={tab === "mission"}
            >
              {" "}
              Mission{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("choix")}
              active={tab === "choix"}
            >
              {" "}
              Le bon choix{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("rejoindre")}
              active={tab === "rejoindre"}
            >
              {" "}
              Rejoindre{" "}
            </TabButton>
          </div>
          <div className="mt-8 h-[45vh]">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
