import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

const Section1 = () => {
    return (
        <div id="about" className="flex relative flex-col md:flex-row gap-6 md:gap-10 lg:px-36 py-10 bg-gray-50">
            <h1 className='absolute hidden lg:block top-6/12 translate-y-[-50%] font-bold rotate-90 text-7xl -left-40 text-gray-300 opacity-20'>TAMBOPATA</h1>
            <h1 className='absolute hidden lg:block top-6/12 translate-y-[-50%] font-bold rotate-90 text-7xl -right-40 text-gray-300 opacity-20'>RECICLEMOS</h1>

            <motion.img
                className="w-full md:w-[400px]"
                src="s1.png"
                alt=""
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            />
            <motion.div
                className="space-y-8 font-light text-lg text-gray-400 py-10 px-4 lg:px-0"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
            >
                <h4 className="text-4xl text-green-600 font-bold">¿QUIENES SOMOS?</h4>
                <p>
                    <strong className="text-green-600">EDUCCA</strong> es un programa ambiental de educación y cultura ciudadana,
                    promovido por la <strong className="text-green-600">Municipalidad Provincial de Tambopata</strong>, con el fin de
                    construir una ciudadanía ambientalmente responsable y comprometida
                    con el cuidado del entorno.
                </p>

                <div className="flex flex-col md:flex-row gap-10 mt-20">
                    <motion.div
                        className="flex flex-col gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="flex gap-2 bg-white shadow-lg p-2 justify-center items-center text-green-600 font-bold">
                            <Check className="h-5 w-5 shrink-0 bg-amber-400 rounded-full text-white" /> Misión
                        </h2>
                        <p className="text-center">
                            Ser el referente en educación ambiental a nivel regional,
                            logrando una ciudadania comprometida con el desarrollosostenible de
                            Tambopata.
                        </p>
                    </motion.div>

                    <motion.div
                        className="flex flex-col gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="flex gap-2 bg-white shadow-lg p-2 justify-center items-center text-green-600 font-bold">
                            <Check className="h-5 w-5 shrink-0 bg-amber-400 rounded-full text-white" /> Visión
                        </h2>
                        <p className="text-center">
                            Promover una cultura ambiental sostenible en Tambopata a través
                            de la educación, participación ciudadana y gestión de proyectos
                            ambientales.
                        </p>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

export default Section1;
