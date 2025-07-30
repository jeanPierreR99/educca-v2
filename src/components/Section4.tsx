import { motion } from 'framer-motion';

const Section4 = () => {
    return (
        <div className='text-center px-4'>
            <motion.h4
                initial={{ opacity: 0, y: 40, x: 40 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl text-green-600 font-bold max-w-2xl mx-auto"
            >
                RETOS AMBIENTALES Y ÁREAS DE ACCIÓN
            </motion.h4>

            <motion.h5
                initial={{ opacity: 0, y: 40, x: 40 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-lg md:text-xl text-gray-400 mt-2 max-w-2xl mx-auto px-4 md:px-0"
            >
                Tambopata enfrenta desafíos ambientales cruciales que requieren nuestra atención
                y acción inmediata para asegurar un futuro sostenible
            </motion.h5>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 lg:p-20 py-10 relative'>
                <img src="Recurso 33patter.png" className='absolute left-0 top-0 w-full h-full opacity-2' alt="" />

                {/* Columna de Retos Ambientales */}
                <div className='space-y-6 relative z-10'>
                    <p className='bg-green-600 mx-auto w-fit text-white p-2 font-bold rounded-md px-4'>
                        RETOS AMBIENTALES
                    </p>

                    {[
                        {
                            title: 'PERDIDA DE DIVERSIDAD BIOLÓGICA',
                            desc: 'Promovemos la protección y restauración de ecosistemas, reforestación y prevención de la degradación de hábitat'
                        },
                        {
                            title: 'DETERIORO DE LA CALIDAD AMBIENTAL',
                            desc: 'Desarrollamos sistemas eficaces de segregación y recolección para minimizar el impacto ambiental, mejorar la calidad de agua y promover una economía circular sostenible'
                        }
                    ].map((r, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40, x: 40 }}
                            whileInView={{ opacity: 1, y: 0, x: 0 }}
                            transition={{ duration: 0.6, delay: i * 0.2 }}
                            viewport={{ once: true }}
                            className='relative hover:scale-105 duration-300'
                        >
                            <img src="Recurso 7con lineas.png" className='absolute -left-16 -top-12 w-32 md:w-40' alt="" />
                            <p className='bg-green-600 shadow-lg text-white p-2 font-bold rounded-md px-6 md:px-10'>
                                {r.title}
                            </p>
                            <div className='bg-white shadow-lg p-4 rounded-b-2xl mx-3'>
                                <p className='text-gray-400 text-sm md:text-base'>{r.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Columnas de Áreas de Acción */}
                <div className='space-y-6 col-span-1 lg:col-span-2 relative z-10'>
                    <p className='bg-green-600 mx-auto w-fit text-white p-2 font-bold rounded-md px-4'>
                        AREAS CLAVES DE ACCIÓN
                    </p>

                    <div className='flex flex-col md:flex-row gap-10 justify-center'>
                        {[
                            {
                                title: 'SENSIBILIZACIÓN Y EDUCACIÓN AMBIENTAL',
                                desc: 'Fomentamos la conciencia y participación ciudadana a través de campañas masivas, capacitaciones y talleres que empoderan a la comunidad para adoptar prácticas amigables'
                            },
                            {
                                title: 'GESTIÓN INTEGRAL DE RESIDUOS SOLIDOS',
                                desc: 'Desarrollamos sistemas eficaces de segregación y recolección para minimizar el impacto ambiental, mejorar la calidad de agua y promover una economía circular sostenible'
                            }
                        ].map((a, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40, x: 40 }}
                                whileInView={{ opacity: 1, y: 0, x: 0 }}
                                transition={{ duration: 0.6, delay: i * 0.2 }}
                                viewport={{ once: true }}
                                className='relative w-full md:w-6/12 hover:scale-105 duration-300'
                            >
                                <img src="Recurso 7con lineas.png" className='absolute -left-16 -top-12 w-32 md:w-40' alt="" />
                                <p className='bg-green-600 shadow-lg text-white p-2 font-bold rounded-md px-6 md:px-10'>
                                    {a.title}
                                </p>
                                <div className='bg-white shadow-lg p-4 rounded-b-2xl mx-3'>
                                    <p className='text-gray-400 text-sm md:text-base'>{a.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 40, x: 40 }}
                        whileInView={{ opacity: 1, y: 0, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                        className='relative w-full md:w-6/12 mx-auto hover:scale-105 duration-300'
                    >
                        <img src="Recurso 7con lineas.png" className='absolute -left-16 -top-12 w-32 md:w-40' alt="" />
                        <p className='bg-green-600 shadow-lg text-white p-2 font-bold rounded-md px-6 md:px-10'>
                            CONSERVACIÓN DE LA BIODIVERSIDAD Y LOS ECOSISTEMAS
                        </p>
                        <div className='bg-white shadow-lg p-4 rounded-b-2xl mx-3'>
                            <p className='text-gray-400 text-sm md:text-base'>
                                Promovemos la protección y restauración de ecosistemas, reforestación y prevención de la degradación de hábitat
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Section4;
