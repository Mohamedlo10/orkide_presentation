"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
  
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";
  
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };
  
    try {
      const response = await fetch(endpoint, options);
  
      // Vérifiez si la réponse est ok (status 200-299)
      if (!response.ok) {
        const errorData = await response.json(); // Essaye de parser le JSON de l'erreur
        throw new Error(errorData.error || "Erreur lors de l'envoi du message.");
      }
  
      const resData = await response.json();
      console.log("Message envoyé avec succès :", resData);
      setEmailSubmitted(true);
    } catch (error) {
      console.error("Erreur lors de l'envoi du message :", error);
      // Gérer l'erreur d'une manière appropriée (ex. afficher un message à l'utilisateur)
    }
  };
  

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 md:py-24 py-16 md:gap-4 gap-12 md:h-[100vh] md:px-0 px-2 md:items-end justify-center sm:relative "
    >
      <div className="md:z-10">
        <h5 className="text-xl font-bold text-white my-2">
        Découvrez Nos Solutions
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}

Nous vous invitons à découvrir comment ORKIDE peut transformer votre expérience ! Nos solutions sont conçues pour répondre à vos besoins spécifiques et vous aider à atteindre vos objectifs.

N'attendez plus pour profiter des avantages que nous offrons. Si vous avez des questions ou souhaitez en savoir plus sur nos produits, n'hésitez pas à nous contacter. Nous sommes là pour vous accompagner et vous aider à tirer le meilleur parti de notre application.

Rejoignez-nous dès aujourd'hui et faites le premier pas vers une gestion scolaire simplifiée et efficace !
        </p>  
        <div className="socials flex flex-row gap-2">
          <Link href="github.com">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="linkedin.com">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>
      <div>
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">
            Email sent successfully!
          </p>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-white block mb-2 text-sm font-medium"
              >
                Votre Mail
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="jacob@google.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-white block text-sm mb-2 font-medium"
              >
                Objet
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Object du message"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Ecrire..."
              />
            </div>
            <button
              type="submit"
              className="bg-[#e2931b] hover:bg-[#e19421] text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Envoyer un message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
