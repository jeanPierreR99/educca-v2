import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import PromoterModal from "./PromotorModal";

const StudentTable = () => {
    const students = [
        {
            id: '01',
            name: 'MARYORI SAYURI GARCIA JARA',
            gender: 'F',
            school: 'SAN ISIDRO',
            age: 11,
            grade: '6°',
            level: 'PRIMARIA',
        },
        {
            id: '02',
            name: 'AIXA LUCIANA BALAREZO VERA',
            gender: 'F',
            school: 'SAN ISIDRO',
            age: 11,
            grade: '6°',
            level: 'PRIMARIA',
        },
        {
            id: '03',
            name: 'LUANA PAMELA SEDANO BARRIONUEVO',
            gender: 'F',
            school: 'SAN ISIDRO',
            age: 13,
            grade: '2°',
            level: 'SECUNDARIA',
        },
        {
            id: '04',
            name: 'ADRIANO ESTEBAN ROSEMBERG FERNANDEZ',
            gender: 'M',
            school: 'SAN ISIDRO',
            age: 14,
            grade: '3°',
            level: 'SECUNDARIA',
        },
        {
            id: '05',
            name: 'MARIO GABRIEL RUBINA HINOJOSA',
            gender: 'M',
            school: 'SAN ISIDRO',
            age: 14,
            grade: '3°',
            level: 'SECUNDARIA',
        },
    ];
    return (
        <div className="p-4">
            <div className="overflow-x-auto">
                <table className="min-w-full border border-green-300 divide-y divide-green-200 shadow-md rounded-lg">
                    <thead className="bg-green-100">
                        <tr>
                            <th className="px-4 py-2 text-left text-sm font-semibold text-green-700">N°</th>
                            <th className="px-4 py-2 text-left text-sm font-semibold text-green-700">Nombres y Apellidos</th>
                            <th className="px-4 py-2 text-left text-sm font-semibold text-green-700">Sexo</th>
                            <th className="px-4 py-2 text-left text-sm font-semibold text-green-700">Institución Educativa</th>
                            <th className="px-4 py-2 text-left text-sm font-semibold text-green-700">Edad</th>
                            <th className="px-4 py-2 text-left text-sm font-semibold text-green-700">Grado</th>
                            <th className="px-4 py-2 text-left text-sm font-semibold text-green-700">Nivel</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-green-100">
                        {students.map((student) => (
                            <tr key={student.id}>
                                <td className="px-4 py-2 text-sm text-green-800">{student.id}</td>
                                <td className="px-4 py-2 text-sm text-green-800">{student.name}</td>
                                <td className="px-4 py-2 text-sm text-green-800">{student.gender}</td>
                                <td className="px-4 py-2 text-sm text-green-800">{student.school}</td>
                                <td className="px-4 py-2 text-sm text-green-800">{student.age}</td>
                                <td className="px-4 py-2 text-sm text-green-800">{student.grade}</td>
                                <td className="px-4 py-2 text-sm text-green-800">{student.level}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="flex justify-end mt-4">
                <a href="/doc/escolares.pdf" target="_blank" className="p-2 bg-blue-500 text-white rounded-md shadow-lg hover:bg-blue-600 transition-colors">Ver toda la lista</a></div>
        </div>
    );
}

const JuvenilTable = () => {
    const participants = [
        {
            id: '01',
            name: 'ANGELA DANUSKA RUIZ ROBLES',
            gender: 'F',
            origin: 'EESPP NUESTRA SEÑORA DEL ROSARIO',
            email: 'angelaruizrobles6@gmail.com',
            phone: '948 374 982',
        },
        {
            id: '02',
            name: 'NICOL MELANI CANAL RAMÍREZ',
            gender: 'F',
            origin: 'UNAMAD',
            email: 'canalmelany893@gmail.com',
            phone: '989563582',
        },
        {
            id: '03',
            name: 'MAGALY VANESSA MAMANI QUISPE',
            gender: 'F',
            origin: 'UNAMAD',
            email: 'mmamaniq21-1if@unamad.edu.pe',
            phone: '916916758',
        },
        {
            id: '04',
            name: 'SILVIA STEFANY LIURKA FLORES LLERENA',
            gender: 'F',
            origin: 'UNAMAD',
            email: 'sfloresl21-1if@unamad.edu.pe',
            phone: '900229382',
        },
        {
            id: '05',
            name: 'HEYDI LOURDES HUAMÁN RIVERA',
            gender: 'F',
            origin: 'UNAMAD',
            email: 'heydilourdes09@gmail.com',
            phone: '937368756',
        },
    ];
    return (
        <div className="p-4">
            <div className="overflow-x-auto">
                <table className="min-w-full border border-green-300 divide-y divide-green-200 shadow-md rounded-lg">
                    <thead className="bg-green-100">
                        <tr>
                            <th className="px-4 py-2 text-left text-sm font-semibold text-green-700">N°</th>
                            <th className="px-4 py-2 text-left text-sm font-semibold text-green-700">Nombres y Apellidos</th>
                            <th className="px-4 py-2 text-left text-sm font-semibold text-green-700">Sexo</th>
                            <th className="px-4 py-2 text-left text-sm font-semibold text-green-700">
                                Procedencia
                                <br />
                                <span className="text-xs font-normal">(universidad, instituto, etc.)</span>
                            </th>
                            <th className="px-4 py-2 text-left text-sm font-semibold text-green-700">Correo electrónico</th>
                            <th className="px-4 py-2 text-left text-sm font-semibold text-green-700">Número de teléfono</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-green-100">
                        {participants.map((p) => (
                            <tr key={p.id}>
                                <td className="px-4 py-2 text-sm text-green-800">{p.id}</td>
                                <td className="px-4 py-2 text-sm text-green-800">{p.name}</td>
                                <td className="px-4 py-2 text-sm text-green-800">{p.gender}</td>
                                <td className="px-4 py-2 text-sm text-green-800">{p.origin}</td>
                                <td className="px-4 py-2 text-sm text-blue-700 underline">{p.email}</td>
                                <td className="px-4 py-2 text-sm text-green-800">{p.phone}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="flex justify-end mt-4">
                <a href="/doc/juveniles.pdf" target="_blank" className="p-2 bg-blue-500 text-white rounded-md shadow-lg hover:bg-blue-600 transition-colors">Ver toda la lista</a></div>
        </div>
    );
}
const ComunitarioTable = () => {
    const participants = [
        {
            id: '01',
            name: 'JOSE FERNANDO HUAYTA TUPA',
            gender: 'M',
            origin: 'INDEPENDIENTE',
            email: 'huayta_jf@hotmail.com',
            phone: '928549593',
        },
        {
            id: '02',
            name: 'MIRIAN DARLIZ MAMANI CCAMA',
            gender: 'F',
            origin: 'INDEPENDIENTE',
            email: 'md.darliz@gmail.com',
            phone: '961767535',
        },
        {
            id: '03',
            name: 'LEYLA MADELEINE DURAN TORRES',
            gender: 'M',
            origin: 'TALLER DE MUJERES DE LAS HERMANAS DOMINICAS DE PEM',
            email: '',
            phone: '966781568',
        },
        {
            id: '04',
            name: 'YAKELIN ROCIO LIMA LAURA',
            gender: 'F',
            origin: 'UNAMAD',
            email: 'rociolimalaura2802@gmail.com',
            phone: '944016929',
        },
        {
            id: '05',
            name: 'EVELIN LIZBETH SANTOS CCORIMANYA',
            gender: 'F',
            origin: 'ADMININSTRACIÓN DE EMPRESAS TÉCNICO',
            email: 'evelinlizbethsantosccorimanya@gmail.com',
            phone: '991042276',
        },
    ];

    return (
        <div className="p-4">
            <div className="overflow-x-auto">
                <table className="min-w-full border border-green-300 divide-y divide-green-200 shadow-md rounded-lg">
                    <thead className="bg-green-100">
                        <tr>
                            <th className="px-4 py-2 text-left text-sm font-semibold text-green-700">N°</th>
                            <th className="px-4 py-2 text-left text-sm font-semibold text-green-700">Nombres y Apellidos</th>
                            <th className="px-4 py-2 text-left text-sm font-semibold text-green-700">Sexo</th>
                            <th className="px-4 py-2 text-left text-sm font-semibold text-green-700">
                                Procedencia
                                <br />
                                <span className="text-xs font-normal">(universidad, instituto, etc.)</span>
                            </th>
                            <th className="px-4 py-2 text-left text-sm font-semibold text-green-700">Correo electrónico</th>
                            <th className="px-4 py-2 text-left text-sm font-semibold text-green-700">Número de teléfono</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-green-100">
                        {participants.map((p) => (
                            <tr key={p.id}>
                                <td className="px-4 py-2 text-sm text-green-800">{p.id}</td>
                                <td className="px-4 py-2 text-sm text-green-800">{p.name}</td>
                                <td className="px-4 py-2 text-sm text-green-800">{p.gender}</td>
                                <td className="px-4 py-2 text-sm text-green-800">{p.origin}</td>
                                <td className="px-4 py-2 text-sm text-blue-700 underline">
                                    {p.email || <span className="text-gray-400 italic">No disponible</span>}
                                </td>
                                <td className="px-4 py-2 text-sm text-green-800">{p.phone}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="flex justify-end mt-4">
                <a href="/doc/comunitarios.pdf" target="_blank" className="p-2 bg-blue-500 text-white rounded-md shadow-lg hover:bg-blue-600 transition-colors">
                    Ver toda la lista
                </a>
            </div>
        </div>
    );
};



const data = [
    {
        name: "Promotor Ambiental Escolar",
        img: "Recurso 34con lineas.png",
        content: <StudentTable />,
    },
    {
        name: "Promotor Ambiental Juvenil",
        img: "Recurso 35con lineas.png",
        content: <JuvenilTable />,
    },
    {
        name: "Promotor Ambiental Comunitario",
        img: "Recurso 33con lineas.png",
        content: <ComunitarioTable />,

    },
];

const Section3 = () => {
    const [selected, setSelected] = useState<null | number>(null);

    return (
        <div id="promotors" className="text-center py-20 md:p-20 relative">
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
                    content={data[selected].content}
                />
            )}
        </div>
    );
};

export default Section3;
