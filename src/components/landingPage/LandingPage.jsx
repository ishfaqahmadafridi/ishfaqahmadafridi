
import WelcomeText from './WelcomeText';
import EnterButton from './EnterButton';

export default function LandingPage() {


  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-4">
      <WelcomeText />
      <EnterButton   />
    </div>
  );
}
