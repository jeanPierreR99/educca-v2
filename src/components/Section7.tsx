import { motion } from 'framer-motion';

const images = [
    "Recurso 20con lineas.png",
    "Recurso 21con lineas.png",
    "Recurso 22con lineas.png",
    "Recurso 23con lineas.png"
];

const Section7 = () => {
    return (
        <div className="text-center relative">
            {/* Título principal */}
            <motion.h4
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl pt-10 text-green-600 font-bold max-w-2xl mx-auto"
            >
                ANUNCIO DE EVENTOS
            </motion.h4>

            {/* Subtítulo */}
            <motion.h5
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mt-2 px-4 md:px-0"
            >
                Este año 2025 el programa EDUCCA viene realizando eventos y campañas de educación ambiental
            </motion.h5>

            {/* Galería de imágenes animadas */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 px-10 py-10 relative overflow-hidden 2xl:overflow-visible'>
                <img src="Recurso 19con lineas.png" className='absolute h-full hidden lg:block md:w-80 -left-24' alt="" />
                <img src="Recurso 19con lineas.png" className='absolute h-full hidden lg:block md:w-80 -right-24 rotate-40' alt="" />

                {images.map((src, i) => (
                    <motion.img
                        key={i}
                        src={src}
                        alt={`evento-${i}`}
                        className="w-full h-full object-cover rounded-md hover:scale-105 relative transition-transform duration-300"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: i * 0.2 }}
                        viewport={{ once: true }}
                    />
                ))}
            </div>
        </div>
    );
};

export default Section7;
