import React, { useState, useEffect } from 'react';
import { Stamp, Check, X, Sparkles } from 'lucide-react';

interface PlacedStamp {
  id: number;
  x: number;
  y: number;
  text: string;
  color: 'red' | 'green' | 'gold';
  rotation: number;
}

const STAMP_OPTIONS = [
  { label: 'PENDING/DENIED', text: 'PENDING/DENIED', color: 'red' as const },
  { label: 'APPROVED', text: 'APPROVED', color: 'red' as const },
  { label: 'PEAK DELUSION', text: 'PEAK DELUSION', color: 'red' as const },
  { label: 'SEALED IN IGNORANCE', text: 'SEALED IN IGNORANCE', color: 'red' as const },
  { label: 'IRREVERSIBLE', text: 'IRREVERSIBLE', color: 'red' as const },
  { label: 'SOVEREIGN PARDON', text: 'SOVEREIGN PARDON', color: 'green' as const },
];

export const InteractiveRubberStamper: React.FC = () => {
  const [selectedStamp, setSelectedStamp] = useState(STAMP_OPTIONS[0]);
  const [isStampingMode, setIsStampingMode] = useState(false);
  const [placedStamps, setPlacedStamps] = useState<PlacedStamp[]>([]);

  // When stamping mode is active, clicking the document places a stamp
  useEffect(() => {
    if (!isStampingMode) return;

    const handleDocumentClick = (e: MouseEvent) => {
      // Don't place stamp if clicking the stamping tool toolbar itself
      const target = e.target as HTMLElement;
      if (target.closest('#stamp-dock-toolbar')) return;

      const randomRot = Math.floor(Math.random() * 26) - 13;
      const newStamp: PlacedStamp = {
        id: Date.now() + Math.random(),
        x: e.pageX,
        y: e.pageY,
        text: selectedStamp.text,
        color: selectedStamp.color,
        rotation: randomRot,
      };

      setPlacedStamps((prev) => [...prev.slice(-18), newStamp]); // Keep up to 20 stamps
    };

    document.addEventListener('click', handleDocumentClick);
    return () => document.removeEventListener('click', handleDocumentClick);
  }, [isStampingMode, selectedStamp]);

  return (
    <>
      {/* Render all placed stamps across document */}
      {placedStamps.map((s) => (
        <div
          key={s.id}
          style={{
            position: 'absolute',
            top: s.y,
            left: s.x,
            transform: `translate(-50%, -50%) rotate(${s.rotation}deg)`,
            pointerEvents: 'none',
            zIndex: 40,
          }}
          className={`animate-stamp select-none ${
            s.color === 'green' ? 'rubber-stamp-green' : 'rubber-stamp'
          }`}
        >
          <div className="text-center font-display font-black text-xs md:text-sm tracking-widest uppercase">
            {s.text}
          </div>
          <div className="text-[8px] font-typewriter tracking-tighter text-center -mt-0.5">
            CROWN SEC. 1742
          </div>
        </div>
      ))}

      {/* Floating Stamping Tool Dock */}
      <div 
        id="stamp-dock-toolbar"
        className="fixed bottom-4 right-4 z-40 bg-[#0f1f38] text-[#fef08a] border-2 border-[#d4af37] p-2.5 shadow-[0_10px_30px_rgba(0,0,0,0.8)] font-typewriter text-xs"
      >
        <div className="flex items-center gap-2 mb-1.5 pb-1 border-b border-[#d4af37]/30">
          <Stamp className="w-3.5 h-3.5 text-[#d4af37]" />
          <span className="font-display font-bold text-[11px] text-[#fef08a] tracking-wider uppercase">
            Imperial Rubber Stamper
          </span>
          <button
            onClick={() => setIsStampingMode(!isStampingMode)}
            className={`ml-auto px-2 py-0.5 text-[10px] font-bold border transition-colors cursor-pointer ${
              isStampingMode 
                ? 'bg-[#15803d] text-white border-green-400' 
                : 'bg-[#8b1828] text-[#fef08a] border-[#d4af37]'
            }`}
          >
            {isStampingMode ? 'STAMPING ACTIVE (CLICK ANYWHERE)' : 'ENABLE STAMPER'}
          </button>
        </div>

        {isStampingMode && (
          <div className="flex flex-wrap items-center gap-1 mt-1 max-w-xs">
            {STAMP_OPTIONS.map((opt) => (
              <button
                key={opt.text}
                onClick={() => setSelectedStamp(opt)}
                className={`px-1.5 py-0.5 text-[9px] border cursor-pointer font-bold ${
                  selectedStamp.text === opt.text
                    ? 'bg-[#d4af37] text-[#1c1917] border-[#fff6d6]'
                    : 'bg-[#1c2d4a] text-[#cbd5e1] border-[#78350f]'
                }`}
              >
                {opt.label}
              </button>
            ))}
            {placedStamps.length > 0 && (
              <button
                onClick={() => setPlacedStamps([])}
                className="px-1.5 py-0.5 text-[9px] bg-[#331111] text-[#fca5a5] border border-red-800 cursor-pointer ml-auto"
                title="Wipe stamped ink"
              >
                Clear Ink
              </button>
            )}
          </div>
        )}
      </div>
    </>
  );
};
