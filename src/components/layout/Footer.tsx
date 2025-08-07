const Footer = () => {
    return (
        <footer className="relative bg-gradient-to-br from-white-100 via-white to-white-100 text-gray-800  mt-20 border-t border-gray-200 ">
            <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
                {/* Logo y descripción */}
                <div className="flex flex-col gap-4">
                    <img
                        src="/tambopata_logo_verde.webp"
                        alt="Logo Municipalidad de Tambopata"
                        className="h-20 w-8/12 mx-auto md:w-auto"
                    />
                </div>

                {/* Enlaces rápidos */}
                <div>
                    <h4 className="text-lg font-semibold mb-4">Enlaces útiles</h4>
                    <ul className="space-y-2 text-sm">
                        <li><a href="https://portal.munitambopata.gob.pe/" className="hover:underline">Municipaldiad de tambopata</a></li>
                        <li><a href="https://procompite.appmunitambopata.com/" className="hover:underline">Procompite</a></li>
                        <li><a href="#" className="hover:underline">Proinnova</a></li>
                        <li><a href="https://www.transparencia.gob.pe/" className="hover:underline">gob.pe</a></li>
                        <li><a href="https://ivp.appmunitambopata.com/" className="hover:underline">Ivp</a></li>
                    </ul>
                </div>

                {/* Información de contacto */}
                <div>
                    <h4 className="text-lg font-semibold mb-4">Contacto</h4>
                    <ul className="space-y-3 text-sm">
                        <li>
                            <span className="font-medium">Dirección:</span><br />
                            Jr. LORETO #161  – Puerto Maldonado
                        </li>
                        <li>
                            <span className="font-medium">Teléfono:</span><br />
                            969726898, 990664885
                        </li>
                        <li>
                            <span className="font-medium">Correo electrónico:</span><br />
                            <a href="mailto:informes@tambopata.gob.pe" className="text-blue-700  hover:underline">
                                informes.tambopata.gop.pe
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Mapa embebido */}
                <div>
                    <h4 className="text-lg font-semibold mb-4">Ubicación</h4>
                    <iframe
                        title="Ubicación Municipalidad Tambopata"
                        src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d839.729330009995!2d-69.17536645076666!3d-12.594832349289103!3m2!1i1024!2i768!4f13.1!5e1!3m2!1ses!2spe!4v1754311647979!5m2!1ses!2spe"
                        width="100%"
                        height="200"
                        loading="lazy"
                        className="shadow-lg"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>

            {/* Pie de página */}
            <div className="bg-blue-500 text-center py-4 text-xs text-white ">
                © {new Date().getFullYear()} Municipalidad de Tambopata. Todos los derechos reservados.
            </div>
        </footer>
    );
};

export default Footer;
