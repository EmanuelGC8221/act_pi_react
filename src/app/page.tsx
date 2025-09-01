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
          image="https://images.unsplash.com/photo-1565958011702-44e7b4dc30e9" 
          title="Helado de Vainilla" 
          price="$5.000" 
        />
        <Card 
          image="https://images.unsplash.com/photo-1590080876437-54e5e5f6b4cb" 
          title="Helado de Chocolate" 
          price="$6.000" 
        />
        <Card 
          image="https" 
          title="Helado de Fresa" 
          price="$5.500" 
        />
      </Section>

      <Section title="Sabores De Helado">
        <Card 
          image="https://images.unsplash.com/photo-1589712186148-d6aa1eb3e2dd" 
          title="Menta" 
          price="$1.200 extra" 
        />
        <Card 
          image="https://images.unsplash.com/photo-1589712239691-09c8c0f6ed8b" 
          title="Café" 
          price="$1.500 extra" 
        />
        <Card 
          image="https://images.unsplash.com/photo-1604909053641-708582fa57d8" 
          title="Caramelooo" 
          price="$700" 
        />
        <Card 
          image="https://images.unsplash.com/photo-1623428187969-5b8a73e0b5c6" 
          title="Oreo triturada" 
          price="$800" 
        />
      </Section>

      <Section title="Toppings">
        <Card 
          image="https://images.unsplash.com/photo-1497034825429-c343d7c6a68f" 
          title="Fresa" 
          price="$1.000 extra" 
        />
        <Card 
          image="https://images.unsplash.com/photo-1590080876437-54e5e5f6b4cb" 
          title="Chispas de chocolate" 
          price="$500" 
        />
        </Section>

        <Section title="Sobre Nosotros">
          <title><h2>Somos nosotros</h2></title>
        </Section>
      </div>
    </main>
  );
}
