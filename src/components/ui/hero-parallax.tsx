import React from "react";
import {
    motion,
    useScroll,
    useTransform,
    useSpring,
    MotionValue,
} from "framer-motion";


export const HeroParallax = ({
    portfolio,
    isClick,
}: {
    portfolio: {
        _id: Number;
        category: string;
        title: string;
        src: string;
    }[];
    isClick: Boolean
}) => {
    const firstRow = portfolio.slice(0, 5);
    const secondRow = portfolio.slice(5, 10);
    const thirdRow = portfolio.reverse().slice(0, 5);
    const ref = React.useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

    const translateX = useSpring(
        useTransform(scrollYProgress, [0, 1], [0, 1000]),
        springConfig
    );
    const translateXReverse = useSpring(
        useTransform(scrollYProgress, [0, 1], [0, -1000]),
        springConfig
    );
    const rotateX = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [15, 0]),
        springConfig
    );
    const opacity = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
        springConfig
    );
    const rotateZ = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [20, 0]),
        springConfig
    );
    const translateY = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [-500, 500]),
        springConfig
    );
    return (
        <div
            ref={ref}
            className={`${isClick ? "h-screen" : "h-[2300px]"} py-40 overflow-hidden bg-[#000]  flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]`}
        >
            <Header />

            <motion.div
                style={{
                    rotateX,
                    rotateZ,
                    translateY,
                    opacity,
                }}
                className=""
            >
                <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
                    {firstRow.map((port) => (
                        <ProductCard
                            portfolio={port}
                            translate={translateX}
                        // key={port._id}
                        />
                    ))}
                </motion.div>
                <motion.div className="flex flex-row  mb-20 space-x-20 ">
                    {secondRow.map((product) => (
                        <ProductCard
                            portfolio={product}
                            translate={translateXReverse}
                        // key={product._id}
                        />
                    ))}
                </motion.div>
                <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
                    {thirdRow.map((product) => (
                        <ProductCard
                            portfolio={product}
                            translate={translateX}
                        // key={product._id}
                        />
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
};

export const Header = () => {
    return (
        <div className="absolute h-[80vh] z-[9] mx-auto px-4 w-full left-0 flex items-center justify-center flex-col text-center">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white">
                About Skynet Silicon
            </h1>
            <p className="max-w-[1000px] text-xl md:text-2xl lg:text-4xl mx-auto mt-8 text-white">
                Skynet has a digital heart and a technological mind.
            </p>
        </div>
    );
};

export const ProductCard = ({
    portfolio,
    translate,
}: {
    portfolio: {
        _id: Number;
        src: string;
        title: string;
        category: string;
    };
    translate: MotionValue<number>;
}) => {
    return (
        <motion.div
            style={{
                x: translate,
            }}
            whileHover={{
                y: -20,
            }}
            // key={portfolio._id}
            className="group/product h-96 w-[30rem] relative flex-shrink-0"
        >
            <img
                src={`${portfolio.src}`}
                className="object-cover object-left-top absolute inset-0 h-[600px] w-[600px] rounded-[10px]"
                alt={portfolio.title}
                loading="lazy"
            />
            <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
            <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
                {portfolio.title}
            </h2>
        </motion.div>
    );
};
