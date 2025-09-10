import Header from "./components/Header";

import Card from "./components/Card";

import Section from "./components/Section";

export default function Home() {
  return (
    <main>
     <Header />

      {/* sección de presentaciones de helado */}

      <div className="card-container">
      <Section title="Presentaciones de Helado">
        <Card 
          image="/descarga ensalda(1).jpeg" 
          title="Ensalada de frutas" 
          price="$20.000" 
        />
        <Card 
          image="/descargafresas(1).jpeg" 
          title="Fresas con crema" 
          price="$12.000" 
        />
        <Card 
          image="/descargabanana.jpeg" 
          title="Banana split" 
          price="$15.000" 
        />
        <Card 
          image="/imageswafles.jpeg" 
          title="Wafles" 
          price="$18.000" 
        />
      </Section>

      <Section title="Sabores De Helado">
        <Card 
          image="/menta.jpg" 
          title="Menta" 
          price="$1.200 extra" 
        />
        <Card 
          image="/cafe.jpg" 
          title="Cafe" 
          price="$1.200 extra" 
        />
        <Card 
          image="/caramelo.jpeg" 
          title="Caramelo" 
          price="$1.200 extra" 
        />
        <Card 
          image="/oreo.jpeg" 
          title="Oreo" 
          price="$1.200 extra" 
        />
        <Card 
          image="/fresa.jpeg" 
          title="Fresa" 
          price="$1.200 extra" 
        />
        <Card 
          image="/chocolate.jpeg" 
          title="Chocolate" 
          price="$1.200 extra" 
        />
        <Card 
          image="/vainilla.jpeg" 
          title="Vainilla" 
          price="$1.200 extra" 
        />
        <Card 
          image="/vainillac.jpg" 
          title="Vainilla chips" 
          price="$1.200 extra" 
        />
      </Section>

      <Section title="Toppings">
        <Card 
          image="/zucaritas.jpeg" 
          title="Zucaritas" 
          price="$800 extra" 
        />
        <Card 
          image="/arrozinflado.jpeg" 
          title="Arroz inflado" 
          price="$800 extra" 
        />
        <Card 
          image="/chispitascolores.jpeg" 
          title="Chispas de colores" 
          price="$800 extra" 
        />
        <Card 
          image="/chispaschocolate.jpeg" 
          title="Chsipas de chocolate" 
          price="$800 extra" 
        />
        
        </Section>


        <Section title="Sobre Nosotros">
          <title><h2>Somos nosotros</h2></title>
        </Section>
      </div>
    </main>
  );
}
