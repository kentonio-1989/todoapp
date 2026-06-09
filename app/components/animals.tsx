'use client';

import { useId } from 'react';

interface IconProps {
  size?: number;
  className?: string;
}

export function LionIcon({ size = 60, className }: IconProps) {
  const id = useId();
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className}>
      <defs>
        <radialGradient id={`${id}-mane`} cx="50%" cy="65%" r="55%">
          <stop offset="0%" stopColor="#C8821A"/>
          <stop offset="100%" stopColor="#6B3A08"/>
        </radialGradient>
        <radialGradient id={`${id}-face`} cx="50%" cy="25%" r="70%">
          <stop offset="0%" stopColor="#F8E090"/>
          <stop offset="100%" stopColor="#D4A030"/>
        </radialGradient>
      </defs>
      <circle cx="50" cy="58" r="41" fill={`url(#${id}-mane)`}/>
      <polygon points="25,40 19,16 40,30" fill="#A06818"/>
      <polygon points="75,40 81,16 60,30" fill="#A06818"/>
      <polygon points="27,38 22,20 38,30" fill="#F0B0A0"/>
      <polygon points="73,38 78,20 62,30" fill="#F0B0A0"/>
      <ellipse cx="50" cy="50" rx="26" ry="25" fill={`url(#${id}-face)`}/>
      <path d="M35 41 Q40 38 45 40" stroke="#C89020" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
      <path d="M55 40 Q60 38 65 41" stroke="#C89020" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
      <ellipse cx="40" cy="46" rx="6" ry="5" fill="#7AAD28"/>
      <ellipse cx="60" cy="46" rx="6" ry="5" fill="#7AAD28"/>
      <ellipse cx="40" cy="46" rx="3" ry="4.5" fill="#181818"/>
      <ellipse cx="60" cy="46" rx="3" ry="4.5" fill="#181818"/>
      <circle cx="41.5" cy="43.5" r="1.3" fill="white"/>
      <circle cx="61.5" cy="43.5" r="1.3" fill="white"/>
      <ellipse cx="50" cy="58" rx="13" ry="9" fill="#F0CA60" opacity="0.65"/>
      <path d="M47,54 Q50,52 53,54 L51.5,57 Q50,58.5 48.5,57 Z" fill="#C86060"/>
      <line x1="50" y1="57" x2="50" y2="59" stroke="#B05050" strokeWidth="1.2"/>
      <path d="M44,59.5 Q50,64 56,59.5" stroke="#A04040" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      <line x1="22" y1="55" x2="40" y2="57" stroke="#D4B030" strokeWidth="0.9" opacity="0.75"/>
      <line x1="22" y1="59.5" x2="40" y2="59" stroke="#D4B030" strokeWidth="0.9" opacity="0.75"/>
      <line x1="60" y1="57" x2="78" y2="55" stroke="#D4B030" strokeWidth="0.9" opacity="0.75"/>
      <line x1="60" y1="59" x2="78" y2="59.5" stroke="#D4B030" strokeWidth="0.9" opacity="0.75"/>
    </svg>
  );
}

export function DogIcon({ size = 40, className }: IconProps) {
  const id = useId();
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className}>
      <defs>
        <radialGradient id={`${id}-fur`} cx="50%" cy="30%" r="65%">
          <stop offset="0%" stopColor="#F0C06A"/>
          <stop offset="100%" stopColor="#B87020"/>
        </radialGradient>
        <radialGradient id={`${id}-muz`} cx="50%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#FFFFF5"/>
          <stop offset="100%" stopColor="#E0D8B8"/>
        </radialGradient>
      </defs>
      <ellipse cx="22" cy="56" rx="16" ry="22" fill="#A86818" transform="rotate(-8 22 56)"/>
      <ellipse cx="78" cy="56" rx="16" ry="22" fill="#A86818" transform="rotate(8 78 56)"/>
      <ellipse cx="50" cy="53" rx="30" ry="28" fill={`url(#${id}-fur)`}/>
      <ellipse cx="50" cy="65" rx="17" ry="13" fill={`url(#${id}-muz)`}/>
      <ellipse cx="50" cy="58" rx="7" ry="5.5" fill="#222"/>
      <ellipse cx="50" cy="57" rx="5" ry="3.5" fill="#383838"/>
      <circle cx="53" cy="56" r="1.5" fill="white" opacity="0.55"/>
      <circle cx="37" cy="47" r="7" fill="#6A3810"/>
      <circle cx="63" cy="47" r="7" fill="#6A3810"/>
      <circle cx="37" cy="47" r="5" fill="#251008"/>
      <circle cx="63" cy="47" r="5" fill="#251008"/>
      <circle cx="39" cy="44.5" r="2" fill="white"/>
      <circle cx="65" cy="44.5" r="2" fill="white"/>
      <path d="M30 40 Q37 37 44 40" stroke="#9A6018" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <path d="M56 40 Q63 37 70 40" stroke="#9A6018" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <path d="M43 68 Q50 72 57 68" stroke="#888" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
    </svg>
  );
}

export function FrogIcon({ size = 40, className }: IconProps) {
  const id = useId();
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className}>
      <defs>
        <radialGradient id={`${id}-body`} cx="50%" cy="35%" r="60%">
          <stop offset="0%" stopColor="#70D048"/>
          <stop offset="100%" stopColor="#2A7018"/>
        </radialGradient>
        <radialGradient id={`${id}-eye`} cx="40%" cy="35%" r="60%">
          <stop offset="0%" stopColor="#F8E040"/>
          <stop offset="100%" stopColor="#C8A010"/>
        </radialGradient>
      </defs>
      <circle cx="32" cy="32" r="15" fill="#2A7018"/>
      <circle cx="68" cy="32" r="15" fill="#2A7018"/>
      <circle cx="32" cy="32" r="12" fill={`url(#${id}-eye)`}/>
      <circle cx="68" cy="32" r="12" fill={`url(#${id}-eye)`}/>
      <ellipse cx="32" cy="32" rx="5" ry="9" fill="#181818"/>
      <ellipse cx="68" cy="32" rx="5" ry="9" fill="#181818"/>
      <circle cx="35" cy="28" r="2" fill="white"/>
      <circle cx="71" cy="28" r="2" fill="white"/>
      <ellipse cx="50" cy="64" rx="34" ry="28" fill={`url(#${id}-body)`}/>
      <ellipse cx="50" cy="70" rx="21" ry="15" fill="#A8E870" opacity="0.55"/>
      <circle cx="44" cy="50" r="2.5" fill="#2A7018"/>
      <circle cx="56" cy="50" r="2.5" fill="#2A7018"/>
      <path d="M30 62 Q50 76 70 62" stroke="#2A7018" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <circle cx="20" cy="88" r="5" fill="#2A7018"/>
      <circle cx="29" cy="91" r="5" fill="#2A7018"/>
      <circle cx="71" cy="91" r="5" fill="#2A7018"/>
      <circle cx="80" cy="88" r="5" fill="#2A7018"/>
    </svg>
  );
}

export function WolfIcon({ size = 40, className }: IconProps) {
  const id = useId();
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className}>
      <defs>
        <radialGradient id={`${id}-fur`} cx="50%" cy="25%" r="65%">
          <stop offset="0%" stopColor="#B8C0C8"/>
          <stop offset="100%" stopColor="#485060"/>
        </radialGradient>
        <radialGradient id={`${id}-muz`} cx="50%" cy="35%" r="60%">
          <stop offset="0%" stopColor="#F2F2EA"/>
          <stop offset="100%" stopColor="#D0D0C0"/>
        </radialGradient>
      </defs>
      <polygon points="23,46 14,10 42,30" fill="#687080"/>
      <polygon points="77,46 86,10 58,30" fill="#687080"/>
      <polygon points="25,44 18,14 40,30" fill="#F0C0C0"/>
      <polygon points="75,44 82,14 60,30" fill="#F0C0C0"/>
      <ellipse cx="50" cy="57" rx="30" ry="27" fill={`url(#${id}-fur)`}/>
      <ellipse cx="50" cy="66" rx="18" ry="14" fill={`url(#${id}-muz)`}/>
      <ellipse cx="38" cy="51" rx="7" ry="6" fill="#C8A010"/>
      <ellipse cx="62" cy="51" rx="7" ry="6" fill="#C8A010"/>
      <ellipse cx="38" cy="51" rx="3.5" ry="5.5" fill="#181818"/>
      <ellipse cx="62" cy="51" rx="3.5" ry="5.5" fill="#181818"/>
      <circle cx="40" cy="48.5" r="1.5" fill="white"/>
      <circle cx="64" cy="48.5" r="1.5" fill="white"/>
      <ellipse cx="50" cy="60" rx="6.5" ry="5" fill="#282828"/>
      <ellipse cx="50" cy="59" rx="4.5" ry="3" fill="#383838"/>
      <circle cx="52.5" cy="58" r="1.2" fill="white" opacity="0.45"/>
      <line x1="50" y1="64" x2="50" y2="66" stroke="#404040" strokeWidth="1.5"/>
      <path d="M42 67 Q50 72 58 67" stroke="#404040" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
    </svg>
  );
}

export function FoxIcon({ size = 40, className }: IconProps) {
  const id = useId();
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className}>
      <defs>
        <radialGradient id={`${id}-fur`} cx="50%" cy="25%" r="65%">
          <stop offset="0%" stopColor="#F08830"/>
          <stop offset="100%" stopColor="#A84010"/>
        </radialGradient>
        <radialGradient id={`${id}-muz`} cx="50%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#FFFFF5"/>
          <stop offset="100%" stopColor="#ECE8D8"/>
        </radialGradient>
      </defs>
      <polygon points="21,46 10,4 44,30" fill="#C05010"/>
      <polygon points="79,46 90,4 56,30" fill="#C05010"/>
      <polygon points="24,44 15,10 42,30" fill="#F0D0B0"/>
      <polygon points="76,44 85,10 58,30" fill="#F0D0B0"/>
      <ellipse cx="50" cy="57" rx="30" ry="26" fill={`url(#${id}-fur)`}/>
      <ellipse cx="50" cy="66" rx="16" ry="13" fill={`url(#${id}-muz)`}/>
      <ellipse cx="38" cy="51" rx="6.5" ry="5.5" fill="#D07818"/>
      <ellipse cx="62" cy="51" rx="6.5" ry="5.5" fill="#D07818"/>
      <ellipse cx="38" cy="51" rx="3" ry="5" fill="#181818"/>
      <ellipse cx="62" cy="51" rx="3" ry="5" fill="#181818"/>
      <circle cx="39.5" cy="48.5" r="1.3" fill="white"/>
      <circle cx="63.5" cy="48.5" r="1.3" fill="white"/>
      <ellipse cx="50" cy="61" rx="5" ry="4" fill="#181818"/>
      <circle cx="52" cy="60" r="1" fill="white" opacity="0.4"/>
      <line x1="50" y1="64.5" x2="50" y2="66.5" stroke="#666" strokeWidth="1.5"/>
      <path d="M43 67 Q50 71.5 57 67" stroke="#666" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
    </svg>
  );
}

export function CatIcon({ size = 40, className }: IconProps) {
  const id = useId();
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className}>
      <defs>
        <radialGradient id={`${id}-fur`} cx="50%" cy="28%" r="65%">
          <stop offset="0%" stopColor="#F0A858"/>
          <stop offset="100%" stopColor="#B87028"/>
        </radialGradient>
      </defs>
      <polygon points="23,46 16,12 44,34" fill="#D08030"/>
      <polygon points="77,46 84,12 56,34" fill="#D08030"/>
      <polygon points="25,44 20,16 42,33" fill="#F0B0B0"/>
      <polygon points="75,44 80,16 58,33" fill="#F0B0B0"/>
      <circle cx="50" cy="57" r="30" fill={`url(#${id}-fur)`}/>
      <path d="M41 37 Q50 33 59 37" stroke="#C07828" strokeWidth="2.2" fill="none" strokeLinecap="round"/>
      <path d="M39 41.5 Q50 37.5 61 41.5" stroke="#C07828" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
      <ellipse cx="38" cy="53" rx="7" ry="6" fill="#68B030"/>
      <ellipse cx="62" cy="53" rx="7" ry="6" fill="#68B030"/>
      <ellipse cx="38" cy="53" rx="2.5" ry="5.5" fill="#181818"/>
      <ellipse cx="62" cy="53" rx="2.5" ry="5.5" fill="#181818"/>
      <circle cx="39.5" cy="50.5" r="1.5" fill="white"/>
      <circle cx="63.5" cy="50.5" r="1.5" fill="white"/>
      <ellipse cx="50" cy="64" rx="11" ry="8" fill="#F8E8D0" opacity="0.7"/>
      <path d="M47.5,60 Q50,58.5 52.5,60 L51,62.5 Q50,63.5 49,62.5 Z" fill="#E06888"/>
      <line x1="50" y1="62.5" x2="50" y2="64" stroke="#D06070" strokeWidth="1"/>
      <path d="M43 65 Q50 69 57 65" stroke="#D06070" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      <line x1="20" y1="61" x2="40" y2="63" stroke="#D09040" strokeWidth="0.8" opacity="0.7"/>
      <line x1="20" y1="65" x2="40" y2="65" stroke="#D09040" strokeWidth="0.8" opacity="0.7"/>
      <line x1="60" y1="63" x2="80" y2="61" stroke="#D09040" strokeWidth="0.8" opacity="0.7"/>
      <line x1="60" y1="65" x2="80" y2="65" stroke="#D09040" strokeWidth="0.8" opacity="0.7"/>
    </svg>
  );
}

export function PawIcon({ size = 20, className }: IconProps) {
  const id = useId();
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className}>
      <defs>
        <radialGradient id={`${id}-pad`} cx="50%" cy="40%" r="55%">
          <stop offset="0%" stopColor="#E09878"/>
          <stop offset="100%" stopColor="#B86848"/>
        </radialGradient>
      </defs>
      <ellipse cx="22" cy="28" rx="11" ry="13" fill={`url(#${id}-pad)`}/>
      <ellipse cx="44" cy="20" rx="11" ry="13" fill={`url(#${id}-pad)`}/>
      <ellipse cx="66" cy="20" rx="11" ry="13" fill={`url(#${id}-pad)`}/>
      <ellipse cx="88" cy="28" rx="11" ry="13" fill={`url(#${id}-pad)`}/>
      <ellipse cx="55" cy="64" rx="30" ry="24" fill={`url(#${id}-pad)`}/>
      <ellipse cx="55" cy="66" rx="22" ry="17" fill="#C87858" opacity="0.35"/>
    </svg>
  );
}
