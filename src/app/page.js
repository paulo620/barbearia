"use client";
import { useState } from "react";
import Image from "next/image";
import { BsSun, BsMoon } from "react-icons/bs";
import estilos from "./page.module.css";

export default function Home() {
  const [alterarPagina, setAlterarPagina] = useState(false);

  function trocarTemaPagina() {
    setAlterarPagina(!alterarPagina);
  }
  return (
    <div className={alterarPagina ? estilos.dark_mode : estilos.light_mode}>
      <header className={estilos.header}>
        <div className={estilos.logo}>
          <Image  src="/barbearia.png" alt="Logo" width={100} height={100} />
          <button className={estilos.temaButton} onClick={trocarTemaPagina}>
            {alterarPagina ? <BsSun /> : <BsMoon />}
          </button>
        </div>
      </header>
      <main className={estilos.main}>
        <div className={estilos.container_banner}></div>
        <div className={estilos.container_texto}>
          <h1>Bem-vindo à Barber Shop</h1>
          <h2>Nossa barbearia sempre oferece profissionais de qualidade e estamos prontos para lidar com suas maiores expectativas.
          </h2>
          <p>Nossos serviços são dedicados ao seu sucesso pessoal. Aqui temos uma equipe premiada que demonstrou o talento de mestres barbeiros em vários concursos de estilo. Deixe nosso barbeiro ser seu estilista pessoal e você nunca ficará desapontado.
          </p>
          <p className={estilos.assinatura}>S. Kelly</p>
        </div>
      </main>
    </div>
  );
}
