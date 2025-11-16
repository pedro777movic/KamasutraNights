import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 py-6">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-6">
        <p className="text-sm text-muted-foreground">
          &copy; {currentYear} Kama Sutra Nights. Todos os direitos reservados.
        </p>
        <div className="flex gap-4">
          <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
            Termos de Serviço
          </Link>
          <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
            Política de Privacidade
          </Link>
        </div>
      </div>
    </footer>
  );
}
