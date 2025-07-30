import useEmblaCarousel from 'embla-carousel-react'
import { useEffect, useCallback, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'

const slides = [
    {
        mainImage: "Recurso 24con lineas.png",
        middleImages: [
            "Recurso 25con lineas.png",
            "Recurso 26con lineas.png",
            "Recurso 27con lineas.png"
        ],
        stats:
        {
            participantes: 150,
            reciclados: 150,
            horas: 150
        },
    },
    {
        mainImage: "Recurso 24con lineas.png",
        middleImages: [
            "Recurso 25con lineas.png",
            "Recurso 26con lineas.png",
            "Recurso 27con lineas.png"
        ],
        stats:
        {
            participantes: 150,
            reciclados: 150,
            horas: 150
        },
    },
    {
        mainImage: "Recurso 24con lineas.png",
        middleImages: [
            "Recurso 25con lineas.png",
            "Recurso 26con lineas.png",
            "Recurso 27con lineas.png"
        ],
        stats:
        {
            participantes: 150,
            reciclados: 150,
            horas: 150
        },
    },
    {
        mainImage: "Recurso 24con lineas.png",
        middleImages: [
            "Recurso 25con lineas.png",
            "Recurso 26con lineas.png",
            "Recurso 27con lineas.png"
        ],
        stats:
        {
            participantes: 120,
            reciclados: 10,
            horas: 50
        },
    },
]


const Section8 = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
    const [selectedIndex, setSelectedIndex] = useState(0)

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

    const onSelect = useCallback(() => {
        if (!emblaApi) return
        setSelectedIndex(emblaApi.selectedScrollSnap())
    }, [emblaApi])

    useEffect(() => {
        if (!emblaApi) return
        emblaApi.on('select', onSelect)
        onSelect()
    }, [emblaApi, onSelect])

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
                Este año 2025 el programa EDUCCA viene realizando eventos y campañas de educación ambiental
            </motion.h5>

            <div className="overflow-hidden relative mt-10 px-2 md:px-0" ref={emblaRef}>
                <div className="flex touch-pan-x mx-[-1rem]">
                    {slides.map((item, idx) => (
                        <div
                            key={idx}
                            className="min-w-full md:min-w-6/12 px-4"
                        >
                            <div className='rounded-lg overflow-hidden h-auto'>
                                <div className='bg-green-600 text-white p-2 text-sm'>
                                    <p className='font-bold'>Campaña de Reciclaje julio 2025</p>
                                    <p className='text-xs'>Campaña Ecotrueque para la recolección de residuos reciclables</p>
                                </div>
                                <img
                                    src={item.mainImage}
                                    alt={`obra-${idx}`}
                                    className="w-full object-cover h-[250px] hover:scale-105 duration-400"
                                />
                                <div className='grid grid-cols-3 gap-2 mt-2'>
                                    <img src="Recurso 25con lineas.png" className='w-full h-full hover:scale-105 duration-400 rounded-lg' alt="" />
                                    <img src="Recurso 26con lineas.png" className='w-full h-full hover:scale-105 duration-400 rounded-lg' alt="" />
                                    <img src="Recurso 27con lineas.png" className='w-full h-full hover:scale-105 duration-400 rounded-lg' alt="" />
                                </div>
                                <div className='bg-gray-100 flex gap-2 items-center lg:px-20 justify-between p-2 text-gray-400'>
                                    <div className='flex items-center gap-2'>
                                        <div>
                                            <p className='font-bold text-2xl'>{item.stats.participantes}</p>
                                            <p className='text-xs'>Participantes</p>
                                        </div>
                                        <img src="Recurso 30con lineas.png" className='w-9 h-8' alt="" />

                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <div>
                                            <p className='font-bold text-2xl'>{item.stats.reciclados}</p>
                                            <p className='text-xs'>Reciclado</p>
                                        </div>
                                        <img src="Recurso 29con lineas.png" className='w-9 h-8' alt="" />

                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <div>
                                            <p className='font-bold text-2xl'>{item.stats.horas}</p>
                                            <p className='text-xs'>Horas</p>
                                        </div>
                                        <img src="Recurso 28con lineas.png" className='w-8 h-8' alt="" />

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
                        className={`h-3 w-3 rounded-full ${index === selectedIndex ? 'bg-blue-300' : 'bg-gray-200'}`}
                    />
                ))}
            </div>
        </div>
    )
}

export default Section8
