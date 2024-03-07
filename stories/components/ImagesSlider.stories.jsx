// eslint-disable-next-line no-unused-vars
import { ImagesSlider } from '../../src/components';
import { motion } from "framer-motion";
// import { cn } from "../../src/utils/cn";

const TestComp = () => {
    const images = [
    "https://images.unsplash.com/photo-1485433592409-9018e83a1f0d?q=80&w=1814&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1483982258113-b72862e6cff6?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1482189349482-3defd547e0e9?q=80&w=2848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];
  return (
    <ImagesSlider className="h-[1080px]" images={images}>
        <motion.div
            initial={{
            opacity: 0,
            y: -80,
            }}
            animate={{
            opacity: 1,
            y: 0,
            }}
            transition={{
            duration: 0.3,
            }}
            className="z-50 flex flex-col justify-center items-center"
        >
            <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
            The hero section slideshow <br /> nobody asked for
            </motion.p>
            <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
            <span>Join now →</span>
            <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
            </button>
        </motion.div>
        </ImagesSlider>
    );
}

/** @type {import('@storybook/react').Meta} */
export default {
    title: 'Aceternity/ImagesSlider',
    component: ImagesSlider,
    // render: () => { return <CardTest/> },
    // tags: ["autodocs"],
};

/** @type {import('@storybook/react').StoryObj} */
export const Primary = {
    render: () => { return <TestComp/> },
};

