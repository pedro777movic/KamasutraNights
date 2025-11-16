import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function FinalCTA() {
  return (
    <section className="py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter text-primary sm:text-4xl md:text-5xl">
            Sua Próxima Noite Inesquecível Começa Agora.
          </h2>
          <p className="mt-4 text-base md:text-lg text-foreground/80">
            Não espere mais para transformar sua intimidade. O acesso é imediato e o prazer, infinito.
          </p>
          <div className="mt-8">
            <Button
              asChild
              size="lg"
              className="rounded-full px-10 py-6 text-base md:px-16 md:py-8 md:text-xl font-bold shadow-[0_0_30px] shadow-primary/60 transition-transform duration-300 hover:scale-105"
            >
              <Link href="#pricing">Sim, Eu Quero Transformar Minhas Noites!</Link>
            </Button>
            <p className="mt-4 text-sm text-muted-foreground">
              Compra 100% segura. Garantia de 7 dias.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
