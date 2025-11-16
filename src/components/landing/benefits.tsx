import { Check } from 'lucide-react';

const benefits = [
  'Explore novas dimensões de prazer.',
  'Aumente a intimidade e a conexão com seu parceiro.',
  'Redescubra sua sensualidade e autoconfiança.',
  'Aprenda técnicas milenares adaptadas para a vida moderna.',
];

export function Benefits() {
  return (
    <section className="bg-background py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl">
          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start space-x-4">
                <div className="mt-1 flex-shrink-0">
                  <Check className="h-6 w-6 text-primary" />
                </div>
                <p className="text-lg text-foreground/90">{benefit}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
