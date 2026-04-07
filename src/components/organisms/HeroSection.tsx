import Button from '@/components/atoms/Button';
import reactLogo from '@/assets/react.svg';
import viteLogo from '@/assets/vite.svg';
import heroImg from '@/assets/hero.png';

interface HeroSectionProps {
  count: number;
  onIncrement: () => void;
}

const HeroSection = ({ count, onIncrement }: HeroSectionProps) => {
  return (
    <section id="center">
      <div className="hero">
        <img src={heroImg} className="base" width="170" height="179" alt="" />
        <img src={reactLogo} className="framework" alt="React logo" />
        <img src={viteLogo} className="vite" alt="Vite logo" />
      </div>
      <div>
        <h1>Get started</h1>
        <p>
          Edit <code>src/App.tsx</code> and save to test <code>HMR</code>
        </p>
      </div>
      <Button onClick={onIncrement}>Count is {count}</Button>
    </section>
  );
};

export default HeroSection;
