
import { useCountdown } from '../hooks/useCountdown';

export const Counter = () => {
  const { days, hours, minutes, seconds } = useCountdown('2026-05-23T00:00:00');

  const TimeUnit = ({ value, label }: { value: number, label: string }) => (
    <div className="flex flex-col items-center px-4">
      <span className="font-serif text-4xl md:text-5xl text-v-text italic">
        {value < 10 ? `0${value}` : value}
      </span>
      <span className="font-sans text-[10px] uppercase tracking-widest text-v-accent mt-1">
        {label}
      </span>
    </div>
  );

  return (
    <div className="py-12 bg-v-bg/50 border-y border-v-border my-10">
      <p className="font-sans text-[10px] uppercase tracking-[0.3em] mb-6 text-center text-v-text/60">
        Faltan solo...
      </p>
      <div className="flex justify-center items-center divide-x divide-v-border">
        <TimeUnit value={days} label="Días" />
        <TimeUnit value={hours} label="Horas" />
        <TimeUnit value={minutes} label="Minutos" />
        <TimeUnit value={seconds} label="Segundos" />
      </div>
    </div>
  );
};