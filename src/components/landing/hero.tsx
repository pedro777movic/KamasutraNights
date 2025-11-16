import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Hero() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-main-image');

  return (
    <section className="relative py-16 md:py-32">
      <div
        aria-hidden="true"
        className="absolute inset-0 top-0 -z-10 h-full w-full bg-background"
      >
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_800px_at_50%_200px,#e91e6222,transparent)]"></div>
      </div>
      <div className="container mx-auto px-4 text-center md:px-6">
        <div className="flex flex-col items-center space-y-6 md:space-y-8">
          <div className="space-y-4 md:space-y-6">
            <h1 className="font-headline text-4xl font-black tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Transforme suas noites em <span className="text-primary">puro prazer.</span>
            </h1>
            <p className="max-w-[700px] mx-auto text-base md:text-xl text-foreground/80">
              Desvende os segredos do Kama Sutra em nosso app com mais de 100 posições ilustradas e transforme suas noites em
              experiências inesquecíveis de puro êxtase e conexão profunda.
            </p>
          </div>
          <Button
            asChild
            size="lg"
            className="rounded-full px-10 py-6 text-base md:px-12 md:py-7 md:text-lg font-bold shadow-[0_0_20px] shadow-primary/50 transition-transform duration-300 hover:scale-105"
          >
            <Link href="#pricing">Quero Sentir Agora</Link>
          </Button>

          {heroImage && (
            <div className="relative mt-8 w-full max-w-lg mx-auto">
              <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                width={0}
                height={0}
                sizes="100vw"
                data-ai-hint={heroImage.imageHint}
                className="rounded-lg object-contain w-auto h-auto mx-auto shadow-2xl shadow-primary/20"
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
