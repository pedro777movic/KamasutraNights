import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const galleryImages = [
  PlaceHolderImages.find((img) => img.id === 'gallery-1'),
  PlaceHolderImages.find((img) => img.id === 'gallery-2'),
  PlaceHolderImages.find((img) => img.id === 'gallery-3'),
];

export function Gallery() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">
            Uma Experiência Visualmente Excitante
          </h2>
          <p className="max-w-[900px] text-foreground/80 text-base md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Cada detalhe do nosso app foi pensado para inspirar e guiar você em uma jornada de prazer.
          </p>
        </div>
        
        <div className="mx-auto max-w-5xl">
           <Carousel
            opts={{
              align: 'start',
            }}
            className="w-full"
          >
            <CarouselContent>
              {galleryImages.map((image, index) =>
                image ? (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                       <Image
                        src={image.imageUrl}
                        alt={image.description}
                        width={600}
                        height={400}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        data-ai-hint={image.imageHint}
                        className="rounded-lg w-full h-auto object-contain transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                  </CarouselItem>
                ) : null
              )}
            </CarouselContent>
            <CarouselPrevious className="text-foreground left-2 md:-left-12" />
            <CarouselNext className="text-foreground right-2 md:-right-12" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
