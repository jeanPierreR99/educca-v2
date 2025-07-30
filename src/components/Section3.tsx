import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import PromoterModal from "./PromotorModal";

const data = [
    {
        name: "Promotor Ambiental Escolar",
        img: "Recurso 34con lineas.png",
        content: [
            "Capacitación en reciclaje",
            "Campañas escolares",
            "Charlas de sensibilización",
        ],
    },
    {
        name: "Promotor Ambiental Juvenil",
        img: "Recurso 35con lineas.png",
        content: [
            "Voluntariado en campañas",
            "Educación ambiental",
            "Ferias juveniles",
        ],
    },
    {
        name: "Promotor Ambiental Comunitario",
        img: "Recurso 33con lineas.png",
        content: [
            "Talleres comunitarios",
            "Limpiezas públicas",
            "Reforestación barrial",
        ],
    },
];

const Section3 = () => {
    const [selected, setSelected] = useState<null | number>(null);

    return (
        <div className="text-center py-20 md:p-20 relative">
            <h1 className='absolute hidden lg:block top-6/12 translate-y-[-50%] font-bold rotate-90 text-7xl -left-40 text-gray-300 opacity-20'>VOLUNTARIO</h1>
            <h1 className='absolute hidden lg:block top-6/12 translate-y-[-50%] font-bold rotate-90 text-7xl -right-40 text-gray-300 opacity-20'>AMBIENTAL</h1>
            <motion.h4
                initial={{ opacity: 0, y: 40, x: 40 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl text-green-600 font-bold max-w-2xl mx-auto"
            >
                NUESTROS PROMOTORES AMBIENTALES
            </motion.h4>

            <motion.h5
                initial={{ opacity: 0, y: 40, x: 40 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-xl text-gray-400 max-w-2xl mx-auto px-4 md:px-0"
            >
                Únete a nuestra red de agentes de cambio ambiental
            </motion.h5>


            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-10">
                {data.map((item, index) => (
                    <motion.div
                        key={index}
                        onClick={() => setSelected(index)}
                        initial={{ opacity: 0, y: 40, x: 40 }}
                        whileInView={{ opacity: 1, y: 0, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className="cursor-pointer"
                    >
                        <div className='relative blur-xs hover:blur-none duration-400 flex items-center justify-center group overflow-hidden py-14'>
                            <img src="Recurso 5con lineas.png" className='h-70 bottom-0 absolute -z-10 left-[50%] translate-x-[-54%]' alt="" />
                            <img src={item.img} className='h-90 -mb-14 group-hover:scale-115 duration-400' alt="" />
                        </div>
                        <p className="text-green-600 text-lg mt-2">{item.name}</p>
                        <p className="flex items-center justify-center text-green-600"><ChevronDown /></p>
                    </motion.div>
                ))}
            </div>

            {selected !== null && (
                <PromoterModal
                    open={true}
                    onClose={() => setSelected(null)}
                    title={data[selected].name}
                    items={data[selected].content}
                />
            )}
        </div>
    );
};

export default Section3;
