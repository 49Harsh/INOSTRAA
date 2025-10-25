'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MessageCircle, X } from 'lucide-react';

interface ContactInfo {
    phone: string;
    email: string;
    whatsapp: string;
}

interface StickyContactWidgetProps {
    contactInfo?: ContactInfo;
}

const StickyContactWidget: React.FC<StickyContactWidgetProps> = ({
    contactInfo = {
        phone: '+91 8097476088',
        email: 'contact@inostraatechnologies.com',
        whatsapp: '+91 8097476088'
    }
}) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handlePhoneClick = () => {
        window.open(`tel:${contactInfo.phone}`, '_self');
    };

    const handleEmailClick = () => {
        window.open(`mailto:${contactInfo.email}`, '_self');
    };

    const handleWhatsAppClick = () => {
        const whatsappNumber = contactInfo.whatsapp.replace(/[^0-9]/g, '');
        window.open(`https://wa.me/${whatsappNumber}`, '_blank');
    };

    const contactItems = [
        {
            icon: MessageCircle,
            label: 'WhatsApp',
            onClick: handleWhatsAppClick,
            color: 'from-green-500 to-green-600',
            hoverColor: 'hover:shadow-green-500/25'
        },
        {
            icon: Phone,
            label: 'Call',
            onClick: handlePhoneClick,
            color: 'from-blue-500 to-blue-600',
            hoverColor: 'hover:shadow-blue-500/25'
        },
        {
            icon: Mail,
            label: 'Email',
            onClick: handleEmailClick,
            color: 'from-purple-500 to-purple-600',
            hoverColor: 'hover:shadow-purple-500/25'
        }
    ];

    return (
        <div className="fixed bottom-6 right-6 z-50">
            <div className="relative">
                {/* Contact Items */}
                <AnimatePresence>
                    {isExpanded && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute bottom-16 right-0 space-y-3"
                        >
                            {contactItems.map((item, index) => (
                                <motion.button
                                    key={item.label}
                                    initial={{ opacity: 0, scale: 0, y: 20 }}
                                    animate={{
                                        opacity: 1,
                                        scale: 1,
                                        y: 0,
                                        transition: { delay: index * 0.1 }
                                    }}
                                    exit={{
                                        opacity: 0,
                                        scale: 0,
                                        y: 20,
                                        transition: { delay: (contactItems.length - 1 - index) * 0.05 }
                                    }}
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={item.onClick}
                                    className={`
                    flex items-center justify-center w-12 h-12 
                    bg-gradient-to-r ${item.color} 
                    rounded-full shadow-lg ${item.hoverColor}
                    transition-all duration-300 group
                  `}
                                >
                                    <item.icon size={20} className="text-white" />

                                    {/* Tooltip */}
                                    <div className="absolute right-14 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                                        <div className="bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                                            {item.label}
                                        </div>
                                        <div className="absolute top-1/2 left-full transform -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
                                    </div>
                                </motion.button>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Main Toggle Button */}
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="
            flex items-center justify-center w-14 h-14 
            bg-gradient-to-r from-emerald-500 to-purple-600 
            rounded-full shadow-lg hover:shadow-xl 
            transition-all duration-300 relative overflow-hidden
          "
                >
                    {/* Animated Background */}
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-purple-600 to-emerald-500"
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                    />

                    {/* Icon */}
                    <motion.div
                        animate={{ rotate: isExpanded ? 45 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="relative z-10"
                    >
                        {isExpanded ? (
                            <X size={24} className="text-white" />
                        ) : (
                            <div className="flex items-center justify-center">
                                {/* Three dots when closed */}
                                <div className="flex space-x-1">
                                    <motion.div
                                        className="w-1.5 h-1.5 bg-white rounded-full"
                                        animate={{ scale: [1, 1.2, 1] }}
                                        transition={{ duration: 1, repeat: Infinity, delay: 0 }}
                                    />
                                    <motion.div
                                        className="w-1.5 h-1.5 bg-white rounded-full"
                                        animate={{ scale: [1, 1.2, 1] }}
                                        transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                                    />
                                    <motion.div
                                        className="w-1.5 h-1.5 bg-white rounded-full"
                                        animate={{ scale: [1, 1.2, 1] }}
                                        transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
                                    />
                                </div>
                            </div>
                        )}
                    </motion.div>

                    {/* Ripple Effect */}
                    <motion.div
                        className="absolute inset-0 bg-white/20 rounded-full"
                        initial={{ scale: 0, opacity: 0 }}
                        whileHover={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                    />
                </motion.button>

                {/* Pulse Animation */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-purple-600 rounded-full -z-10"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                />
            </div>
        </div>
    );
};

export default StickyContactWidget;