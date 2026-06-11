import { siteConfig, navLinks } from "@/lib/constants/site";

export default function Footer() {
  return (
    <footer className="bg-bg text-light/80 pt-16 pb-8 border-t border-line">
      <div className="container max-w-[1440px]">
        <div className="grid gap-10 md:grid-cols-4 mb-12">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-widewide text-light mb-4">
              Sobre Andrea
            </p>
            <ul className="space-y-2.5 text-[14px]">
              <li><a href="#sobre-mi" className="hover:text-light transition-colors">Bio</a></li>
              <li><a href="#pensamiento" className="hover:text-light transition-colors">Método</a></li>
              <li><a href="#trabajemos" className="hover:text-light transition-colors">Servicios</a></li>
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-bold uppercase tracking-widewide text-light mb-4">
              Contenido
            </p>
            <ul className="space-y-2.5 text-[14px]">
              <li><a href="#libros" className="hover:text-light transition-colors">Libros</a></li>
              <li><a href="#charlas" className="hover:text-light transition-colors">Charlas</a></li>
              <li><a href="https://www.infobae.com/autor/andrea-churba/" target="_blank" rel="noopener" className="hover:text-light transition-colors">Columnas</a></li>
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-bold uppercase tracking-widewide text-light mb-4">
              Comunidad
            </p>
            <ul className="space-y-2.5 text-[14px]">
              <li><a href={siteConfig.social.linkedin} target="_blank" rel="noopener" className="hover:text-light transition-colors">LinkedIn</a></li>
              <li><a href={siteConfig.social.instagram} target="_blank" rel="noopener" className="hover:text-light transition-colors">Instagram</a></li>
              <li><a href={siteConfig.social.youtube} target="_blank" rel="noopener" className="hover:text-light transition-colors">YouTube</a></li>
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-bold uppercase tracking-widewide text-light mb-4">
              Contacto
            </p>
            <a href={`mailto:${siteConfig.email}`} className="block text-[14px] hover:text-light transition-colors break-all mb-2">
              {siteConfig.email}
            </a>
            <a href={`https://wa.me/${siteConfig.whatsappNumber}`} target="_blank" rel="noopener" className="block text-[14px] hover:text-light transition-colors mb-3">
              WhatsApp directo
            </a>
            <p className="text-[14px] text-light/60">Buenos Aires, Argentina</p>
          </div>
        </div>

        <div className="pt-6 border-t border-line flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-[12px] text-light/50">
          <p>© {new Date().getFullYear()} Andrea Churba · Todos los derechos reservados</p>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-light transition-colors">Privacidad</a>
            <a href="#" className="hover:text-light transition-colors">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
