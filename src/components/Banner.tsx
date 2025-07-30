import { motion } from "framer-motion";

const Banner = () => {


    return (
        <motion.div
            id="home"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="relative max-w-[1425px] h-[300px] md:h-[400px] mt-20 lg:mx-auto overflow-hidden"
            style={{ backgroundImage: "url('Recurso 5con lineas.png')" }}
        >

            <img src="banner.png" className="w-full h-full aspect-square" alt="" />
        </motion.div>
    );
};

export default Banner;
