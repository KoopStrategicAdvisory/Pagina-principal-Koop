import React from 'react';
import { Link } from 'react-router-dom';

const DEFAULT_QUICK_LINKS = [
  { label: 'Inicio', to: '/#inicio' },
  { label: 'Áreas de práctica', to: '/#areas' },
  { label: 'Nuestra visión', to: '/#vision' },
  { label: 'Contacto', to: '/#contacto' },
];

const DEFAULT_MINI_LINKS = [
  { label: 'Política de privacidad', href: '/privacidad' },
  { label: 'Términos y condiciones', href: 'terminos.html' },
];

const DEFAULT_BACK_TO_TOP = { label: 'Volver arriba ↑', href: '#inicio' };

const DEFAULT_SOCIAL_LINKS = [
  { label: 'Instagram', href: 'https://www.instagram.com/kooplawyers/', icon: InstagramIcon },
  { label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61579034631401', icon: FacebookIcon },
  { label: 'TikTok', href: 'https://www.tiktok.com/@koopstrategicadvisory', icon: TikTokIcon },
];

const DEFAULT_SIMPLE_RIGHT_LINKS = [
  { label: 'Política de Privacidad', href: '/privacidad' },
];

const FooterLink = ({ item, className }) => {
  if (!item) return null;
  const { label, to, href, target, rel } = item;
  if (!label) return null;
  if (to) {
    return (
      <Link to={to} className={className}>
        {label}
      </Link>
    );
  }
  return (
    <a href={href} className={className} target={target} rel={target ? rel || 'noopener' : rel}>
      {label}
    </a>
  );
};

function WhatsappIcon() {
  return (
    <svg className="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.52 3.48A11.78 11.78 0 0 0 12.04 0C5.5 0 .2 5.3.2 11.84c0 2.08.55 4.1 1.6 5.9L0 24l6.43-1.67a11.75 11.75 0 0 0 5.6 1.43h.01c6.54 0 11.84-5.3 11.84-11.84 0-3.16-1.23-6.12-3.36-8.44ZM12.04 21.3a9.4 9.4 0 0 1-4.8-1.33l-.35-.21-3.81.99 1.02-3.73-.24-.38a9.4 9.4 0 1 1 8.18 4.66Zm5.46-7.06c-.3-.15-1.77-.87-2.04-.97-.27-.1-.46-.15-.65.15-.19.3-.75.97-.92 1.17-.17.2-.33.23-.62.08-.3-.15-1.24-.46-2.36-1.46-.87-.77-1.46-1.72-1.63-2.07-.17-.35-.02-.46.13-.62.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.53-.08-.15-.62-1.49-.87-2.04-.23-.5-.47-.43-.65-.44h-.55c-.2 0-.53.08-.8.38-.27.3-1.05 1.02-1.05 2.48s1.08 2.88 1.24 3.08c.15.2 2.13 3.26 5.16 4.33.72.25 1.26.4 1.69.51.72.18 1.37.16 1.88.1.57-.07 1.77-.73 2.01-1.44.24-.71.24-1.31.17-1.44-.07-.13-.27-.2-.56-.35Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg className="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20 4H4a2 2 0 0 0-2 2v.2l10 5.9L22 6.2V6a2 2 0 0 0-2-2Zm0 4.1-8 4.8-8-4.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1Z" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg className="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg className="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6.6 10.8c1.2 2.3 3.2 4.3 5.5 5.5l1.8-1.8c.3-.3.8-.4 1.1-.2 1 .3 2 .5 3 .5.6 0 1 .4 1 .9V20c0 .6-.4 1-1 1C9.9 21 3 14.1 3 5c0-.6.4-1 1-1h3.3c.5 0 .9.4.9 1 0 1 .2 2 .5 3 .1.4 0 .8-.3 1.1l-1.8 1.7Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg className="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm8.75 2a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg className="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22 12.07C22 6.48 17.52 2 11.93 2 6.48 2 2 6.48 2 12.07c0 4.99 3.66 9.13 8.44 9.93v-7.03H7.9v-2.9h2.54v-2.21c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.24.19 2.24.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34V22c4.78-.8 8.44-4.94 8.44-9.93z" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg className="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.75 2a6.5 6.5 0 0 0 6.5 6.5h.25V6a4.5 4.5 0 0 1-4.5-4.5H12.75v13a2.75 2.75 0 1 1-2.75-2.75 2.75 2.75 0 0 1 1.25.29V8.75a6.5 6.5 0 1 0 5.25 6.36V9.77a8.01 8.01 0 0 1-4.75-2.27V2h-1.75z" />
    </svg>
  );
}

export default function SiteFooter({
  variant = 'marketing',
  brandName = 'KOOP STRATEGIC ADVISORY',
  brandCopy,
  ctaHeading,
  whatsappHref,
  emailHref,
  serviceTitle = 'Servicios',
  serviceLinks = [],
  quickLinks = DEFAULT_QUICK_LINKS,
  phoneNumber = '+57 (313) 721 38 78',
  phoneHref = 'tel:+573137213878',
  contactEmail = 'direccionjuridicakoop@hotmail.com',
  contactEmailHref = 'mailto:direccionjuridicakoop@hotmail.com',
  locationLabel = 'Bogotá D.C., Colombia',
  miniLinks = DEFAULT_MINI_LINKS,
  backToTop = DEFAULT_BACK_TO_TOP,
  socialLinks = DEFAULT_SOCIAL_LINKS,
  simpleLeftText = 'Creado por Koop Strategic Advisory',
  simpleRightLinks = DEFAULT_SIMPLE_RIGHT_LINKS,
}) {
  const currentYear = new Date().getFullYear();

  if (variant === 'simple') {
    return (
      <footer className="site-footer">
        <div className="footer-container">
          <div className="footer-left">© {currentYear} {simpleLeftText}</div>
          <div className="footer-right">
            {simpleRightLinks.map((link) => (
              <FooterLink key={link.label} item={link} />
            ))}
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer>
      <div className="footer-divider" aria-hidden="true"></div>

      <div className="footer-top">
        <div className="footer-brand">
          <div className="footer-logo">
            <div className="brand-text">{brandName}</div>
          </div>
          {brandCopy && (<p className="footer-copy">{brandCopy}</p>)}
          <div className="footer-cta">
            <h4>{ctaHeading}</h4>
            <div className="btns">
              {whatsappHref && (
                <a className="btn btn-whatsapp" href={whatsappHref} target="_blank" rel="noopener">
                  <WhatsappIcon />
                  WhatsApp
                </a>
              )}
              {emailHref && (
                <a className="btn btn-mail" href={emailHref}>
                  <MailIcon />
                  Escríbenos
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="footer-col">
          <h5>Enlaces rápidos</h5>
          <ul className="footer-list">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <FooterLink item={link} />
              </li>
            ))}
          </ul>
        </div>

        {serviceLinks.length > 0 && (
          <div className="footer-col">
            <h5>{serviceTitle}</h5>
            <ul className="footer-list">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <FooterLink item={link} />
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="footer-col">
          <h5>Contacto</h5>
          <div className="footer-contact">
            <div className="item">
              <LocationIcon />
              <span>{locationLabel}</span>
            </div>
            <div className="item">
              <PhoneIcon />
              <span>
                <a
                  href={phoneHref}
                  style={{ color: '#cfe0ff', textDecoration: 'none' }}
                >
                  {phoneNumber}
                </a>
              </span>
            </div>
            <div className="item">
              <MailIcon />
              <span>
                <a
                  href={contactEmailHref}
                  style={{ color: '#cfe0ff', textDecoration: 'none' }}
                >
                  {contactEmail}
                </a>
              </span>
            </div>
          </div>

          <div className="footer-social" aria-label="Redes sociales">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                aria-label={link.label}
                href={link.href}
                target="_blank"
                rel="noopener"
                title={link.label}
              >
                {link.icon && <link.icon />}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mini-footer">
        <div className="wrap">
          <div>© {currentYear} Koop Strategic Advisory. Todos los derechos reservados.</div>
          <div className="mini-links">
            {miniLinks.map((link) => (
              <FooterLink key={link.label} item={link} />
            ))}
            {backToTop && <FooterLink key={backToTop.label} item={backToTop} />}
          </div>
        </div>
      </div>
    </footer>
  );
}
