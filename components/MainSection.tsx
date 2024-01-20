
export default function MainSection({children}:{children: React.ReactNode}) {

  return (
    <section className="flex-grow">
      { children }
    </section>
  );
}
