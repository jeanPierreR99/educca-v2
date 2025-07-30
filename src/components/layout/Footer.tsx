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
                        <li><a href="https://educca.appmunitambopata.com/" className="hover:underline">Educca</a></li>
                    </ul>
                </div>

                {/* Información de contacto */}
                <div>
                    <h4 className="text-lg font-semibold mb-4">Contacto</h4>
                    <ul className="space-y-3 text-sm">
                        <li>
                            <span className="font-medium">Dirección:</span><br />
                            Jr. CHIMICUAS esquina con Jr. MANCO INCA S/N  – Puerto Maldonado
                        </li>
                        <li>
                            <span className="font-medium">Teléfono:</span><br />
                            969726898, 990664885
                        </li>
                        <li>
                            <span className="font-medium">Correo electrónico:</span><br />
                            <a href="mailto:informes@tambopata.gob.pe" className="text-blue-700  hover:underline">
                                educca.tambopata@gmail.com
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Mapa embebido */}
                <div>
                    <h4 className="text-lg font-semibold mb-4">Ubicación</h4>
                    <iframe
                        title="Ubicación Municipalidad Tambopata"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.040309758467!2d-69.1876919852381!3d-12.593342090988753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915c5c266b6f1663%3A0x239c80b0b8a346ec!2sMunicipalidad%20Provincial%20de%20Tambopata!5e0!3m2!1ses!2spe!4v1650034345603!5m2!1ses!2spe"
                        width="100%"
                        height="200"
                        loading="lazy"
                        className="rounded-lg shadow"
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
