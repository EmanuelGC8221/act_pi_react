
import "./Section.css"; 

type SectionProps = {
  title: string;
  children: React.ReactNode;
};

export default function Section({ title, children }: SectionProps) {
  return (
    <section className="section">
      <div className="section-box">
        <h2 className="section-title">{title}</h2>
        <div className="section-grid">
          {children}
        </div>
      </div>
    </section>
  );
}
