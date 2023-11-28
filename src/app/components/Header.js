import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
    return (
        <header className="flex justify-center box-decoration-slice bg-gradient-to-r from-slate-700 to-slate-900">
            <div className="w-1/6 flex justify-center items-center ">
                <Image
                    src="/AquaSafeLogoTransparentBackground.png"
                    alt="LogoAquaSafe"
                    width="120"
                    height="120"
                />
                <p className="font-bold text-5xl text-justify">AquaSafe</p>
            </div>

            <div className="w-3/6">
                <nav className="flex justify-center">
                    <ul className="flex justify-center space-x-4 p-5 m-3">
                        <li>
                            <Link
                                className="flex space-x-1 rounded-lg p-2 box-decoration-slice bg-gradient-to-r from-slate-600 to-slate-700 text-white"
                                href="/"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                                    />
                                </svg>
                                <div>Home</div>
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="flex space-x-1 rounded-lg p-2 box-decoration-slice bg-gradient-to-r from-slate-600 to-slate-700 text-white"
                                href="/about"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
                                    />
                                </svg>
                                <div>About</div>
                            </Link>
                        </li>
                    </ul>
                    <div></div>
                </nav>
            </div>
            <div className="w-1/6"></div>
        </header>
    );
};

export default Header;
