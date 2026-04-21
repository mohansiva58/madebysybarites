import React from "react";
import { motion } from "motion";

export const TextRoll = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
    return (
        <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={`inline-block ${className}`}
        >
            {children}
        </motion.span>
    );
};
