import WelcomeText from './WelcomeText';
import EnterButton from './EnterButton';
import { useEffect } from 'react';
import api from '../../api/client';
import ScrollReveal from '../layout/ScrollReveal';

export default function LandingPage() {
    useEffect(() => {
        // Log view_landing activity
        api.post('/activity/log/', { activity_type: 'view_landing' })
           .catch(err => console.error('Failed to log landing view', err));
    }, []);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-4">
            <ScrollReveal animation="fade-up">
                <WelcomeText />
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={500}>
                <EnterButton />
            </ScrollReveal>
        </div>
    );
}
