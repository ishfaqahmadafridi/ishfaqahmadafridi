import React from 'react';
import FooterHelp from './FooterHelp';
import FooterLinks from './FooterLinks';
import FooterSocial from './FooterSocial';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <FooterHelp />
        <FooterLinks title="Customer Service" links={['Contact Us', 'Delivery & Orders', 'Returns & Exchanges', 'Privacy Policy']} />
        <FooterLinks title="Company" links={['About Us', 'Careers', 'Store Addresses']} />
        <FooterSocial />
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-gray-800 text-center text-[10px] font-black uppercase tracking-[0.3em] text-gray-500">
        © 2026 Antigravity - Premium Agentic Experience
      </div>
    </footer>
  );
}
