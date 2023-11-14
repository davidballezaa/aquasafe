import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="border-2 border-rose-500 flex items-end box-decoration-slice bg-gradient-to-r from-slate-700 to-slate-900">
      <Image
        src="/AquaSafeLogoTransparentBackground.png"
        alt="LogoAquaSafe"
        width="64"
        height="100"
        />
    </footer>
  );
};

export default Footer;
