import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

export default function FooterSocial() {
    const icons = [<FaInstagram key="ig" />, <FaFacebook key="fb" />, <FaTwitter key="tw" />];
    return (
        <div className="space-y-6">
            <h3 className="text-sm font-black uppercase tracking-[0.3em] text-foreground">Follow Us</h3>
            <div className="flex gap-4">
                {icons.map((icon, idx) => (
                    <a key={idx} href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-xl hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                        {icon}
                    </a>
                ))}
            </div>
        </div>
    );
}
