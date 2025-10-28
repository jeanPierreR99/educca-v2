import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useCallback, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Autoplay from "embla-carousel-autoplay";

const slides = [
  {
    title: "SEPTIMO ECOTRUEQUE",
    mainImage:
      "https://portal.munitambopata.gob.pe/storage/2025/educca/1761659903101-832255926.jpeg",
    middleImages: [
      "https://portal.munitambopata.gob.pe/storage/2025/educca/1761659903104-976384467.jpeg",
      "https://portal.munitambopata.gob.pe/storage/2025/educca/1761659903105-107254650.jpeg",
      "https://portal.munitambopata.gob.pe/storage/2025/educca/1761659903107-159415935.jpeg",
    ],
    stats: { participantes: 150, reciclados: 70, horas: 100 },
  },
  {
    title: "SENSIBLIZACIÓN I.E. MARCELINO CHAMPAGNAT",
    mainImage:
      "https://portal.munitambopata.gob.pe/storage/2025/educca/1761659866661-141259334.jpg",
    middleImages: [
      "https://portal.munitambopata.gob.pe/storage/2025/educca/1761659866663-575921258.JPG",
      "https://portal.munitambopata.gob.pe/storage/2025/educca/1761659866686-851732424.JPG",
      "https://portal.munitambopata.gob.pe/storage/2025/educca/1761659866736-299420002.JPG",
    ],
    stats: { participantes: 150, reciclados: 70, horas: 100 },
  },
  {
    title: "SENSIBILIZACION I.E. TRILCE",
    mainImage:
      "https://portal.munitambopata.gob.pe/storage/2025/educca/1761659837474-751145839.jpeg",
    middleImages: [
      "https://portal.munitambopata.gob.pe/storage/2025/educca/1761659837478-526010579.jpeg",
      "https://portal.munitambopata.gob.pe/storage/2025/educca/1761659837481-980159609.jpeg",
      "https://portal.munitambopata.gob.pe/storage/2025/educca/1761659837484-852210480.jpeg",
    ],
    stats: { participantes: 43, reciclados: 70, horas: 60 },
  },
  {
    title: "SENSIBILIZACION I.E. IPAR KALLPA",
    mainImage:
      "https://portal.munitambopata.gob.pe/storage/2025/educca/1761659812337-446573624.jpeg",
    middleImages: [
      "https://portal.munitambopata.gob.pe/storage/2025/educca/1761659812339-166543014.jpeg",
      "https://portal.munitambopata.gob.pe/storage/2025/educca/1761659812339-961498580.jpeg",
      "https://portal.munitambopata.gob.pe/storage/2025/educca/1761659812344-178921812.jpeg",
    ],
    stats: { participantes: 150, reciclados: 70, horas: 100 },
  },
  {
    title: "SENSIBILIZACION I.E. I. HUERTO INFANTIL (PADRES)",
    mainImage:
      "https://portal.munitambopata.gob.pe/storage/2025/educca/1761659725209-55536641.jpeg",
    middleImages: [
      "https://portal.munitambopata.gob.pe/storage/2025/educca/1761659725210-539945305.jpeg",
      "https://portal.munitambopata.gob.pe/storage/2025/educca/1761659725210-107810572.jpeg",
      "https://portal.munitambopata.gob.pe/storage/2025/educca/1761659725211-318217129.jpeg",
    ],
    stats: { participantes: 150, reciclados: 70, horas: 100 },
  },
];

const Section8 = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center" },
    [Autoplay({ delay: 4000, stopOnInteraction: false })] // 👈 autoplay cada 4s
  );
  const [selectedIndex, setSelectedIndex] = useState(0);
  const navigate = useNavigate();

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

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
        CAMPAÑAS
      </motion.h4>

      {/* Subtítulo */}
      <motion.h5
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
        className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mt-2 px-4 md:px-0"
      >
        Este año 2025 el programa EDUCCA viene realizando eventos y campañas de
        educación ambiental
      </motion.h5>

      <div
        className="overflow-hidden relative mt-10 px-2 md:px-0"
        ref={emblaRef}
      >
        <div className="flex touch-pan-x mx-[-1rem]">
          {slides.map((item, idx) => (
            <div key={idx} className="min-w-full md:min-w-6/12 px-4">
              <div className="rounded-lg overflow-hidden h-auto">
                <div className="bg-green-600 text-white p-2 text-sm">
                  <p className="font-bold">{item.title}</p>
                </div>
                <img
                  src={item.mainImage}
                  alt={`obra-${idx}`}
                  className="w-full object-cover h-[250px] hover:scale-105 duration-400"
                />
                <div className="grid grid-cols-3 gap-2 py-2">
                  {item.middleImages.map((i, index) => (
                    <img
                      key={index}
                      src={i}
                      className="w-full h-45 object-cover hover:scale-105 duration-400 rounded-lg"
                      alt=""
                    />
                  ))}
                </div>
                <div className="bg-gray-100 flex gap-2 items-center lg:px-20 justify-between p-2 text-gray-400">
                  <div className="flex items-center gap-2">
                    <div>
                      <p className="font-bold text-2xl">
                        {item.stats.participantes}
                      </p>
                      <p className="text-xs">Participantes</p>
                    </div>
                    <img
                      src="Recurso 30con lineas.png"
                      className="w-9 h-8"
                      alt=""
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <div>
                      <p className="font-bold text-2xl">
                        {item.stats.reciclados}
                      </p>
                      <p className="text-xs">Reciclado</p>
                    </div>
                    <img
                      src="Recurso 29con lineas.png"
                      className="w-9 h-8"
                      alt=""
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <div>
                      <p className="font-bold text-2xl">{item.stats.horas}</p>
                      <p className="text-xs">Horas</p>
                    </div>
                    <img
                      src="Recurso 28con lineas.png"
                      className="w-8 h-8"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Botones de navegación */}
        <button
          onClick={scrollPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white text-green-800 p-2 rounded-full shadow"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={scrollNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white text-green-800 p-2 rounded-full shadow"
        >
          <ChevronRight />
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`h-3 w-3 rounded-full ${
              index === selectedIndex ? "bg-blue-300" : "bg-gray-200"
            }`}
          />
        ))}
      </div>

      {/* Botón Ver Galería */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => navigate("/gallery")}
        className="mt-10 mb-12 inline-flex font-bold items-center gap-2 bg-green-600 text-white px-6 py-2  rounded-md shadow-lg hover:bg-green-700 transition-all"
      >
        Ver toda la galería
      </motion.button>
    </div>
  );
};

export default Section8;
