import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const featuresContent = [
  {
    image: PlaceHolderImages.find((img) => img.id === 'phone-mockup-1'),
    title: 'Posições Ilustradas',
    description: 'Navegue por um guia visual com ilustrações detalhadas de cada posição.',
  },
  {
    image: PlaceHolderImages.find((img) => img.id === 'phone-mockup-2'),
    title: 'Guias Passo a Passo',
    description: 'Instruções claras e diretas para você e seu parceiro aproveitarem ao máximo.',
  },
  {
    image: PlaceHolderImages.find((img) => img.id === 'phone-mockup-3'),
    title: 'Dificuldades variadas',
    description: 'Posições com níveis de dificuldade fácil, médio e difícil.',
  },
];

export function Features() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">
              O Que Você Vai Encontrar:
            </h2>
            <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Nosso guia interativo é o seu mapa para o tesouro do prazer. Fácil de usar, direto ao ponto e incrivelmente excitante.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-5xl py-12">
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {featuresContent.map((feature, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="bg-background border-border/50 h-full">
                      <CardContent className="flex flex-col items-center justify-center gap-4 p-6 text-center">
                        {feature.image && (
                          <Image
                            src={feature.image.imageUrl}
                            alt={feature.image.description}
                            width={250}
                            height={444}
                            data-ai-hint={feature.image.imageHint}
                            className="rounded-lg object-contain"
                          />
                        )}
                        <div className='mt-4'>
                          <h3 className="text-xl font-bold text-accent">{feature.title}</h3>
                          <p className="text-sm text-muted-foreground">{feature.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="text-foreground" />
            <CarouselNext className="text-foreground" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
