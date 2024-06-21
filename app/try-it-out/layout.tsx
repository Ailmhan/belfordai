export default function TryItOutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center gap-24 py-2 md:py-2">
      <div className="inline-block max-w-4xl text-center justify-center">
        {children}
      </div>
    </section>
  );
}
