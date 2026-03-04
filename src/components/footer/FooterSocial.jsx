import React from 'react';
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

export default function FooterSocial() {
    const icons = [<FaInstagram />, <FaFacebook />, <FaTwitter />];
    return (
        <div className="space-y-6">
            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-white">Follow Us</h3>
            <div className="flex gap-4">
                {icons.map((icon, idx) => (
                    <a key={idx} href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-xl hover:bg-white hover:text-black transition-all duration-300">
                        {icon}
                    </a>
                ))}
            </div>
        </div>
    );
}
