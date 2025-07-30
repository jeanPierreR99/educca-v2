import { motion } from "framer-motion";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    RadialBarChart,
    RadialBar,
    PolarAngleAxis,
} from 'recharts';

const data = [
    {
        name: "Docentes Capacitados",
        meta: 20,
        avance: 75,
        mujeres: 47,
        varones: 28
    },
    {
        name: "Promotores Escolares (PAE)",
        meta: 200,
        avance: 338,
        mujeres: 197,
        varones: 141
    },
    {
        name: "Promotores Juveniles (PAJ)",
        meta: 20,
        avance: 27,
        muujeres: 19,
        varones: 8
    },
    {
        name: "Promotores Comunitarios (PAC)",
        meta: 20,
        avance: 20,
        muujeres: 14,
        varones: 6
    },
    {
        name: "Eventos Sensibilización",
        meta: 50,
        avance: 25,
        mujeres: null,
        varones: null
    },
    {
        name: "Espacios Educativos",
        meta: 10,
        avance: 12,
        mujeres: null,
        varones: null
    },
    {
        name: "Personas en Campañas",
        meta: 200,
        avance: 445,
        mujeres: null,
        varones: null
    }
];

const radialData = [
    {
        name: 'Avance Total',
        value: 85,
        fill: '#1F87C8',
    },
];

const Section6 = () => {
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
                METAS 2025 Y AVANCE ACTUAL
            </motion.h4>

            {/* Subtítulo */}
            <motion.h5
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mt-2 px-4 md:px-0"
            >
                Este año 2025 el programa EDUCCA viene creciendo y fortaleciendo a la población de tambopata cumpliendo metas
            </motion.h5>

            <div className="px-4 lg:px-0 bg-gray-100 p-4 mt-10">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 p-2">
                    {/* Gráfico de Barras */}
                    <div className="col-span-1 lg:col-span-4 h-[300px] sm:h-[400px]">
                        <div className="bg-white rounded-xl w-full h-full p-2">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart
                                    data={data}
                                    margin={{ top: 20, right: 20, left: 0, bottom: 0 }}
                                >
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis fontSize={11} dataKey="name" interval={2} tickLine={false} />
                                    <YAxis axisLine={false} fontSize={12} />
                                    <Tooltip />
                                    <Legend />
                                    <Bar dataKey="meta" fill="#1F87C8" />
                                    <Bar dataKey="avance" fill="#82ca9d" />
                                    <Bar dataKey="varones" fill="#ffc658" />
                                    <Bar dataKey="mujeres" fill="#ff7f7f" />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    {/* Logo y Radial Chart */}
                    <div className="col-span-1 flex flex-col items-center gap-4">
                        <img src="logo.png" className="bg-white p-2 rounded-lg w-full h-20 object-contain md:h-auto" alt="Logo" />
                        <div className="bg-white h-60 md:h-auto p-4 rounded-xl w-full aspect-square flex items-center justify-center">
                            <ResponsiveContainer width="100%" height="100%">
                                <RadialBarChart
                                    cx="50%"
                                    cy="50%"
                                    innerRadius="70%"
                                    outerRadius="100%"
                                    barSize={16}
                                    data={radialData}
                                    startAngle={90}
                                    endAngle={-270}
                                >
                                    <PolarAngleAxis
                                        type="number"
                                        domain={[0, 100]}
                                        angleAxisId={0}
                                        tick={false}
                                    />
                                    <RadialBar
                                        background
                                        dataKey="value"
                                    />
                                    <text
                                        x="50%"
                                        y="50%"
                                        textAnchor="middle"
                                        dominantBaseline="middle"
                                        className="text-2xl fill-gray-400 font-bold"
                                    >
                                        85%
                                    </text>
                                    <text
                                        x="50%"
                                        y="60%"
                                        textAnchor="middle"
                                        dominantBaseline="middle"
                                        className="text-xs fill-gray-400 font-bold"
                                    >
                                        Avance actual
                                    </text>
                                </RadialBarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>

                {/* Nota */}
                <p className="text-[#1F87C8] text-left p-2 mx-4 bg-blue-100 border-l-4 border-blue-400 mt-4 text-sm md:text-base">
                    Nota: Los porcentajes de avance superiores al 100% indican que ya se ha superado la meta establecida para el año 2025 en esa categoría. Los datos de “Mujeres” y “Varones” se muestran cuando están disponibles para la categoría conseguido.
                </p>
            </div>
        </div>
    );
};

export default Section6;
