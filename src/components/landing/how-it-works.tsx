const steps = [
    {
      title: "Adquira seu Acesso",
      description: "Escolha seu plano e receba acesso imediato a todo o conteúdo exclusivo na nossa plataforma segura."
    },
    {
      title: "Explore Sem Limites",
      description: "Navegue pelas posições, siga os guias e descubra as jornadas de prazer no seu ritmo, a qualquer hora e em qualquer lugar."
    },
    {
      title: "Transforme a Conexão",
      description: "Aplique o que aprendeu e veja a intimidade com seu parceiro(a) atingir um novo nível de cumplicidade e satisfação."
    }
  ];
  
  export function HowItWorks() {
    return (
      <section className="py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
                Veja Como Funciona na Prática
              </h2>
              <p className="max-w-[900px] text-foreground/80 text-base md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Em três passos simples, você estará no caminho para uma vida íntima mais rica e excitante.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-start gap-10 py-12 lg:grid-cols-3 lg:gap-12">
            {steps.map((step, index) => (
              <div key={index} className="grid gap-4 relative text-center md:text-left">
                 <div className="flex flex-col md:flex-row items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground flex-shrink-0">{index + 1}</div>
                  <h3 className="text-xl font-bold text-accent">{step.title}</h3>
                </div>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  