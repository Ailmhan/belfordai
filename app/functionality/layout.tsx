import React from "react";

export default function FunctionalityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="w-full max-w-screen-xl px-4">{children}</div>
    </section>
  );
}
