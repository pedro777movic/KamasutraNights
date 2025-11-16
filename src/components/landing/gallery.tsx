import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const galleryImages = [
  PlaceHolderImages.find((img) => img.id === 'gallery-1'),
  PlaceHolderImages.find((img) => img.id === 'gallery-2'),
  PlaceHolderImages.find((img) => img.id === 'gallery-3'),
  PlaceHolderImages.find((img) => img.id === 'gallery-4'),
];

export function Gallery() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">
            Uma Experiência Visualmente Deslumbrante
          </h2>
          <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Cada detalhe do nosso app foi pensado para inspirar e guiar você em uma jornada de prazer.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
          {galleryImages.map((image, index) =>
            image ? (
              <div key={index} className="relative aspect-square">
                <Image
                  src={image.imageUrl}
                  alt={image.description}
                  fill
                  data-ai-hint={image.imageHint}
                  className="rounded-lg object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            ) : null
          )}
        </div>
      </div>
    </section>
  );
}
