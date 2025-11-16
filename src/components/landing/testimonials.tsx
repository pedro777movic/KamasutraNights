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

const testimonials = [
  {
    name: 'Juliana P.',
    avatar: PlaceHolderImages.find((img) => img.id === 'testimonial-1'),
    quote: "Minha vida sexual era boa, mas agora é... extraordinária! O guia mudou completamente a forma como eu e meu marido nos conectamos. É como uma redescoberta.",
  },
  {
    name: 'Carla S.',
    avatar: PlaceHolderImages.find((img) => img.id === 'testimonial-2'),
    quote: "Eu tinha vergonha de sugerir coisas novas. O Kama Sutra Nights me deu a confiança e as 'ferramentas' para explorar fantasias que eu nem sabia que tinha. Recomendo demais!",
  },
  {
    name: 'Fernanda L.',
    avatar: PlaceHolderImages.find((img) => img.id === 'testimonial-3'),
    quote: "Achei que seria só sobre posições, mas é muito mais. É sobre intimidade, conversa e prazer mútuo. Salvou meu relacionamento da rotina.",
  },
];

export function Testimonials() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-card">
      <div className="container mx-auto grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight font-headline">
            Elas experimentaram e se apaixonaram
          </h2>
          <p className="mx-auto max-w-[600px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Veja o que nossas clientes estão dizendo sobre a transformação em suas vidas íntimas.
          </p>
        </div>
        <div className="w-full max-w-4xl">
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2">
                  <div className="p-4">
                    <Card className="bg-background border-none pt-6">
                      <CardContent className="space-y-4">
                        <p className="text-lg italic text-foreground/90">"{testimonial.quote}"</p>
                        <div className="flex items-center justify-center gap-4">
                          {testimonial.avatar && (
                            <Image
                              src={testimonial.avatar.imageUrl}
                              alt={`Avatar of ${testimonial.name}`}
                              width={48}
                              height={48}
                              data-ai-hint={testimonial.avatar.imageHint}
                              className="rounded-full"
                            />
                          )}
                          <p className="font-bold text-accent">{testimonial.name}</p>
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
