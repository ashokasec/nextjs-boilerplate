"use client"

import { ReactNode } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

interface TransitionPageProps {
    children: ReactNode;
    className?: any;
}

const FadeInPage: React.FC<TransitionPageProps> = ({ children, ...props }) => {
    return (
        <AnimatePresence mode='wait'>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25, ease: 'easeInOut' }}
                {...props}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
};

export default FadeInPage;
