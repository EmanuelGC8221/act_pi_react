"use client";

import React, { useState } from "react";
import styles from "./Header.module.css";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      {/* Logo + título */}
      <div className={styles.logo}>
        <img src="/logo_frio_delirio.png" alt="logoFrioDelirio" />
        <span className={styles.title}>Frío Delirio</span>
      </div>

      {/* Menú */}
      <nav className={`${styles.menu} ${open ? styles.show : ""}`}>
        <a href="#Sabores">Sabores</a>
        <a href="#presentaciones">Presentaciones</a>
        <a href="#Topics">Topics</a>
        <a href="#sobre-nosotros">Sobre Nosotros</a>
      </nav>

      {/* Botón hamburguesa */}
      <button
        className={styles.hamburger}
        onClick={() => setOpen(!open)}
        aria-label="Abrir menú"
      >
        ≣
      </button>
    </header>
  );
}
