import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="flex box-decoration-slice bg-gradient-to-r from-slate-700 to-slate-900 justify-centered">
            <div className="w-1/6 flex justify-center p-2">
                <Image
                    src="/Logo_del_ITESM.png"
                    alt="LogoITESM"
                    width="50"
                    height="50"
                />
            </div>
            <div className="w-5/6 flex justify-center items-center ">
                <p>
                    Instituto Tecnológico y de Estudios Superiores de Monterrey
                </p>
            </div>
        </footer>
    );
};

export default Footer;
