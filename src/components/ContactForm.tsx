import { motion } from 'framer-motion';

const ContactForm = () => {
    return (
        <section id="contact" className="bg-gray-50 mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                {/* Imagen izquierda */}
                <motion.div
                    className="hidden md:block"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                >
                    <img
                        src="Recurso 34patter.png"
                        alt="Persona contactando"
                        className="w-full h-auto object-fill max-h-[700px]"
                    />
                </motion.div>

                {/* Formulario */}
                <motion.div
                    className="md:p-8 p-4 w-full"
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl font-bold text-green-600 mb-6">Contáctanos</h2>
                    <form className="space-y-5">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Nombres completos</label>
                            <input
                                type="text"
                                name="name"
                                required
                                className="mt-1 block w-full bg-gray-200 p-2 rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                                placeholder="Ej: Juan Pérez"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Correo electrónico</label>
                            <input
                                type="email"
                                name="email"
                                required
                                className="mt-1 block w-full p-2 bg-gray-200 rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                                placeholder="Ej: juanperez@gmail.com"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Celular</label>
                            <input
                                type="tel"
                                name="phone"
                                pattern="[0-9]{9}"
                                required
                                className="mt-1 block w-full bg-gray-200 p-2 rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                                placeholder="Ej: 987654321"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Mensaje</label>
                            <textarea
                                name="message"
                                rows={4}
                                required
                                className="mt-1 block w-full rounded-md p-2 bg-gray-200 border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                                placeholder="Escribe tu mensaje aquí..."
                            ></textarea>
                        </div>

                        <motion.button
                            type="submit"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.97 }}
                            className="w-full bg-green-600 text-white py-2 rounded-md font-medium hover:bg-green-700 transition duration-300"
                        >
                            Enviar mensaje
                        </motion.button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactForm;
