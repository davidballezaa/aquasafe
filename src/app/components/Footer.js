import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="flex justify-center box-decoration-slice bg-gradient-to-r from-slate-700 to-slate-900">
            <div className="flex justify-center p-2">
                <Image
                    src="/Logo_del_ITESM.png"
                    alt="LogoITESM"
                    width="40"
                    height="10"
                />
                <div className="flex justify-center items-center text-white p-2">
                    <p>
                        Instituto Tecnológico y de Estudios Superiores de
                        Monterrey
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
