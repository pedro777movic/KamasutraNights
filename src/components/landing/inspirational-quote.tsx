import { Quote } from 'lucide-react';

export function InspirationalQuote() {
  return (
    <section className="bg-card py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <Quote className="mx-auto h-12 w-12 text-primary" />
          <h2 className="font-headline mt-4 text-3xl font-bold tracking-tighter text-accent sm:text-4xl">
            A Arte do Kama Sutra
          </h2>
          <p className="mt-4 text-lg italic text-foreground/80">
            "A união de duas almas em um só corpo, a dança dos sentidos que transcende o físico e celebra a vida na sua forma mais pura."
          </p>
        </div>
      </div>
    </section>
  );
}
