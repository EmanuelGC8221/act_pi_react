// components/Section.tsx
type SectionProps = {
  title: string;
  children: React.ReactNode;
};

export default function Section({ title, children }: SectionProps) {
  return (
    <section className="py-10 px-6">
      <h2 className="text-2xl font-bold text-center mb-6">{title}</h2>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {children}
      </div>
    </section>
  );
}
