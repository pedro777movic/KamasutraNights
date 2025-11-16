import { Quote } from 'lucide-react';

export function InspirationalQuote() {
  return (
    <section className="bg-card py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <Quote className="mx-auto h-10 w-10 md:h-12 md:w-12 text-primary" />
          <h2 className="font-headline mt-4 text-2xl md:text-3xl font-bold tracking-tighter text-accent sm:text-4xl">
            A Arte do Kama Sutra
          </h2>
          <p className="mt-4 text-sm md:text-base text-foreground/70">
            "O Kama Sutra traz um conjunto de regras sobre a prática do amor, segundo os princípios da filosofia indiana, que eleva o sexo a uma experiência sexual magnífica. Ele envolve todos os cinco sentidos, a mente e a alma, ensinando a desenvolver o erotismo e a sensualidade em cada detalhe, desde as posições, que vão de simples a acrobáticas, até a criação de um ambiente com velas, aromas e músicas, transformando cada encontro em um ritual de prazer."
          </p>
        </div>
      </div>
    </section>
  );
}
