"use client";

import { motion } from 'framer-motion';
import ContactForm from '@/components/Contact/ContactForm';

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4 py-8"
    >
      <motion.div
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2 }}
        className="max-w-2xl mx-auto"
      >
        <h1 className="text-3xl font-bold text-center mb-8 dark:text-white">
          İletişim
        </h1>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <ContactForm />
        </div>
      </motion.div>
    </motion.div>
  );
} 