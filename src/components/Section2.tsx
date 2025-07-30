import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

const Section2 = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-20 px-4 bg-gray-50'>
            <motion.div
                className='space-y-6 text-lg font-light text-gray-400 py-10'
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <h4 className='text-green-600 text-center text-4xl font-bold bg-white shadow-lg'>NUESTROS OBJETIVOS</h4>
                <p className='shadow-lg text-green-600 text-xl w-fit p-2 bg-white font-bold'>Objetivo General</p>
                <p className=''>Promover la conciencia ambiental y la participación activa de la población
                    para impulsar una gestión sostenible de residuos y recursos, contribuyendo
                    a comunidades sostenibles lideradas por la Municipalidad Provincial de
                    Tambopata.</p>
                <p className='shadow-lg text-green-600 text-xl w-fit p-2 bg-white font-bold'>Objetivo Específico</p>
                <p className='flex gap-2 items-start'>
                    <Check className="h-5 w-5 shrink-0 bg-amber-400 rounded-full text-white" /> Visión
                    Incrementar la participación ciudadana en la conservación de la biodiversidad
                    y la segregación de residuos.
                </p>
                <p className='flex gap-2 items-start'>
                    <Check className="h-5 w-5 shrink-0 bg-amber-400 rounded-full text-white" /> mplementar medidas de protección a travez de proyectos de reforestación
                    ambientales y mejora en la gestión de residuos sólidos.
                </p>
                <p className='flex gap-2 items-start'>
                    <Check className="h-5 w-5 shrink-0 bg-amber-400 rounded-full text-white" /> Realizar capacitaciones, talleres y eventos para sensibilizar a la comunidad
                    sobre protección de la biodiversidad y la mejora de la calidad ambiental.
                </p>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <img src="Recurso 3con lineas.png" className='w-full h-full' alt="" />
            </motion.div>
        </div>
    );
};

export default Section2;
