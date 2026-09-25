import React from 'react';

export const CornerFlourish: React.FC<{ className?: string; position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' }> = ({ className = 'w-8 h-8 text-[#d4af37]', position }) => {
  let transform = '';
  if (position === 'top-right') transform = 'scale-x-[-1]';
  if (position === 'bottom-left') transform = 'scale-y-[-1]';
  if (position === 'bottom-right') transform = 'scale-[-1]';

  return (
    <svg viewBox="0 0 40 40" fill="currentColor" className={`${className} ${transform} pointer-events-none select-none`} aria-hidden="true">
      <path d="M2 2h14c0 3.3-2.7 6-6 6H6v4c0 3.3-2.7 6-6 6V2h2z" fillOpacity="0.25" />
      <path d="M0 0v20c0-1.1.9-2 2-2h4c4.4 0 8-3.6 8-8V6c0-1.1.9-2 2-2h4c1.1 0 2-.9 2-2V0H0zm2 2h16v1c0 2.2-1.8 4-4 4h-4c-2.2 0-4 1.8-4 4v4c0 2.2-1.8 4-4 4H1V2h1z" />
      <circle cx="8" cy="8" r="2.5" />
      <circle cx="16" cy="3" r="1.5" />
      <circle cx="3" cy="16" r="1.5" />
      <path d="M28 2c-3 0-6 2-7 5 3 0 5 2 5 5 0 2-1 4-3 5 4 0 7-3 7-7 0-4-1-6-2-8z" opacity="0.6" />
    </svg>
  );
};

export const LaurelWreath: React.FC<{ className?: string }> = ({ className = 'w-16 h-16 text-[#d4af37]' }) => (
  <svg viewBox="0 0 100 60" fill="currentColor" className={`${className} pointer-events-none`} aria-hidden="true">
    {/* Left branch */}
    <path d="M50 55 C 30 50, 10 35, 15 10 C 20 8, 25 15, 23 22 C 26 14, 32 18, 30 27 C 34 20, 42 24, 39 34 C 44 28, 48 34, 46 42 Z" opacity="0.85" />
    {/* Right branch */}
    <path d="M50 55 C 70 50, 90 35, 85 10 C 80 8, 75 15, 77 22 C 74 14, 68 18, 70 27 C 66 20, 58 24, 61 34 C 56 28, 52 34, 54 42 Z" opacity="0.85" />
    {/* Ribbon tie */}
    <path d="M46 54 Q 50 58 54 54 Q 50 51 46 54 Z M44 55 Q 38 60 42 64 M56 55 Q 62 60 58 64" stroke="currentColor" strokeWidth="2" fill="none" />
  </svg>
);

export const FiligreeDivider: React.FC<{ className?: string; title?: string }> = ({ className = 'my-6', title }) => (
  <div className={`flex items-center justify-center gap-3 ${className}`} aria-hidden="true">
    <div className="flex-1 h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-[#d4af37]" />
    <div className="flex items-center gap-1.5 text-[#b8860b] select-none">
      <span className="text-xs">✦</span>
      <span className="text-sm font-serif">❖</span>
      {title && <span className="text-xs font-display tracking-widest uppercase font-bold text-[#8b1828] px-2">{title}</span>}
      <span className="text-sm font-serif">❖</span>
      <span className="text-xs">✦</span>
    </div>
    <div className="flex-1 h-[2px] bg-gradient-to-l from-transparent via-[#d4af37] to-[#d4af37]" />
  </div>
);

export const WaxSealGraphic: React.FC<{ className?: string; text?: string; onClick?: () => void }> = ({ 
  className = 'w-24 h-24', 
  text = 'RATIFIED',
  onClick 
}) => {
  return (
    <div 
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      title="Official Royal Wax Seal"
      className={`${className} relative flex items-center justify-center cursor-pointer select-none transition-transform active:scale-95 hover:rotate-3 group`}
    >
      {/* Outer irregular wax drip SVG */}
      <svg viewBox="0 0 120 120" className="w-full h-full drop-shadow-[0_8px_16px_rgba(139,24,40,0.65)]" fill="none">
        <path
          d="M60 4 C85 2, 105 15, 114 36 C122 55, 115 85, 98 104 C82 120, 48 118, 25 108 C5 97, -2 74, 5 48 C11 25, 36 6, 60 4 Z"
          fill="#8b1828"
        />
        <path
          d="M60 9 C82 7, 98 18, 105 38 C112 55, 106 80, 91 97 C76 111, 46 110, 28 101 C12 91, 5 72, 11 50 C17 30, 39 12, 60 9 Z"
          fill="#991b1b"
        />
        {/* Embossed inner circle */}
        <circle cx="60" cy="60" r="42" fill="#7f1d1d" stroke="#b91c1c" strokeWidth="2.5" />
        <circle cx="60" cy="60" r="37" fill="#691111" stroke="#fca5a5" strokeWidth="1" strokeDasharray="3 2" opacity="0.6" />
        {/* Crown & Motto Icon in center */}
        <path
          d="M48 50 L52 64 L60 56 L68 64 L72 50 L70 70 L50 70 Z"
          fill="#fef08a"
          opacity="0.9"
        />
        <circle cx="48" cy="48" r="2.5" fill="#fef08a" />
        <circle cx="60" cy="45" r="2.5" fill="#fef08a" />
        <circle cx="72" cy="48" r="2.5" fill="#fef08a" />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        <span className="text-[9px] font-display uppercase tracking-widest text-[#fef08a] font-bold mt-7 drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]">
          {text}
        </span>
      </div>
    </div>
  );
};
