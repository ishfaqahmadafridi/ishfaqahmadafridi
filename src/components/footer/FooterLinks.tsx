import type { FooterLinksProps } from '../interfaces/footer/footerInterface';

export default function FooterLinks({ title, links }: FooterLinksProps) {
    return (
        <div className="space-y-6">
            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-white">{title}</h3>
            <ul className="space-y-3">
                {links.map(link => (
                    <li key={link}>
                        <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors font-medium">
                            {link}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}
