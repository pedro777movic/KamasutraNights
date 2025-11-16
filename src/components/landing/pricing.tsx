import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Check } from 'lucide-react';
import { PURCHASE_LINK } from '@/lib/config';
import Link from 'next/link';

const includedFeatures = [
  'Acesso vitalício ao app',
  'Mais de 100 posições ilustradas',
  'Guias passo a passo detalhados',
  'Jornadas de prazer temáticas',
  'Atualizações de conteúdo regulares',
  'Suporte exclusivo para dúvidas',
];

export function Pricing() {
  return (
    <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto max-w-3xl px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">
              Acesso Imediato ao Prazer
            </h2>
            <p className="max-w-[900px] text-foreground/80 text-base md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Um único investimento para uma vida inteira de prazer e conexão.
            </p>
        </div>

        <Card className="border-primary/50 shadow-[0_0_30px] shadow-primary/30 rounded-2xl">
          <CardContent className="p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6 text-center md:text-left">
                <h3 className="text-2xl font-bold font-headline text-accent">Acesso Vitalício</h3>
                <div className="flex items-baseline justify-center md:justify-start gap-2">
                  <span className="text-4xl font-bold tracking-tighter">R$47</span>
                  <span className="text-lg text-muted-foreground line-through">R$97</span>
                </div>
                 <p className="text-sm text-muted-foreground">Pagamento único. Acesso para sempre.</p>
                <Button
                  asChild
                  size="lg"
                  className="w-full rounded-full text-base md:text-lg font-bold shadow-[0_0_20px] shadow-primary/50 transition-transform duration-300 hover:scale-105"
                >
                  <Link href={PURCHASE_LINK} target="_blank">Quero Acesso Imediato</Link>
                </Button>
              </div>
              <div className="space-y-4">
                <ul className="grid gap-3 text-left">
                  {includedFeatures.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <Check className="h-5 w-5 flex-shrink-0 text-primary" />
                      <span className="text-sm md:text-base text-foreground/90">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
        <p className="mt-6 text-center text-sm text-muted-foreground">
          Compra 100% segura. Você tem 7 dias de garantia incondicional.
        </p>
      </div>
    </section>
  );
}
