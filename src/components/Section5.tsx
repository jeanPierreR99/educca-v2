import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const Section5 = () => {
    return (
        <div className="text-center relative bg-gradient-to-b from-green-700 via-green-600 to-green-500">
            <motion.h4
                initial={{ opacity: 0, y: 40, x: 40 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl pt-10 text-yellow-400 font-bold max-w-2xl mx-auto"
            >
                LINEAS DE DE ACCIÓN
            </motion.h4>

            <motion.h5
                initial={{ opacity: 0, y: 40, x: 40 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-lg md:text-xl text-white max-w-2xl mx-auto mt-2 px-4 md:px-0"
            >
                Este año 2025 el programa EDUCCA viene creciendo y fortaleciendo a la población de Tambopata cumpliendo metas
            </motion.h5>

            <div className='grid grid-cols-1 md:px-10 py-20 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-10 px-4'>
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className='bg-white shadow-lg rounded-xl p-4 text-left'
                >
                    <p className='bg-yellow-400 text-green-700 p-2 rounded-md font-bold text-sm mb-2'>
                        Educación Ambiental Escolar
                    </p>
                    <p className='text-gray-500 text-sm leading-relaxed text-center'>
                        Orientada a construcción, culturas y modos de vida sostenible en el ámbito formal, a través de la formación de Promotores Ambientales Escolares (PAE).
                    </p>
                </motion.div>

                {[
                    {
                        icon: "Recurso 12con lineas.png",
                        value: "338",
                        label: "PAE formados"
                    },
                    {
                        icon: "Recurso 8con lineas.png",
                        value: "20",
                        label: "Docentes capacitados"
                    },
                    {
                        icon: "Recurso 9con lineas.png",
                        value: "25",
                        label: "Eventos realizados"
                    },
                    {
                        icon: "Recurso 10con lineas.png",
                        value: "42",
                        label: "Escuelas principales"
                    }
                ].map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 * (i + 1) }}
                        viewport={{ once: true }}
                        className='flex items-center justify-center flex-col text-white'
                    >
                        <img
                            src={item.icon}
                            className='h-24 w-24 md:h-28 md:w-28 m-auto border-2 border-dashed border-yellow-400 p-4 rounded-3xl'
                            alt=""
                        />
                        <p className='font-bold text-yellow-400 text-xl mt-2'>{item.value}</p>
                        <p className='text-sm'>{item.label}</p>
                    </motion.div>
                ))}
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-2 overflow-hidden bg-white relative'>
                <img src="Recurso 18con lineas.png" className='w-full hidden lg:block h-full absolute ' alt="" />
                <img src="Recurso 33patter.png" className='absolute left-0 top-0 w-full h-full opacity-2' alt="" />

                <div className='relative'>
                    <motion.img initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }} src="Recurso 13con lineas.png" className='w-full h-full' alt="" />
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className='space-y-4 py-4 relative px-4 lg:px-0'>
                    <p className='p-2 bg-yellow-400 text-green-600 font-bold'>Educación Ambiental Comunitaria</p>
                    <p className='text-md text-left text-gray-400'>Promueve valores ambientales para mejorar
                        la calidad de vida de las personas, a través del
                        diseño e implementación de espacios públicos
                        que educan ambientalmente.</p>
                    <ul className='space-y-4 text-sm text-gray-400'>
                        <p className='flex text-left gap-2'><Check className='rounded-full bg-yellow-400 h-6 shrink-0 p-1 text-white w-6' />Diseño e implementación de espacios públicos que educan
                            ambientalmente</p>
                        <p className='flex text-left gap-2'><Check className='rounded-full bg-yellow-400 h-6 shrink-0 p-1 text-white w-6' />Diseño e implementación de campañas informativas y eventos</p>
                        <p className='flex text-left gap-2'><Check className='rounded-full bg-yellow-400 h-6 shrink-0 p-1 text-white w-6' />Formación de promotores ambientales juveniles - PAJ
                        </p>
                        <p className='flex text-left gap-2'><Check className='rounded-full bg-yellow-400 h-6 shrink-0 p-1 text-white w-6' />Formación de promotores ambientales comunitarios - PAC
                        </p>
                    </ul>
                </motion.div>
                <div className='flex gap-4 relative md:py-10'>
                    <div>
                        <motion.img
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            src="Recurso 35patter.png" alt=""
                            className='hover:-rotate-45 duration-400'
                            />
                    </div>
                    <div className=' flex flex-col gap-4'>
                        <motion.img
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            src="Recurso 36patter.png" alt=""
                            className='hover:-rotate-45 duration-400'
                            />
                        <motion.img
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            src="Recurso 37patter.png" alt=""
                            className='hover:-rotate-45 duration-400'
                            />

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Section5;
