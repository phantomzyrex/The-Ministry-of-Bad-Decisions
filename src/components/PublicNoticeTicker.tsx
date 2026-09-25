import React, { useState, useEffect } from 'react';
import { Megaphone, AlertCircle, ChevronRight, Pause, Play, FileX } from 'lucide-react';
import { TickerAnnouncement } from '../types';

const ANNOUNCEMENTS: TickerAnnouncement[] = [
  {
    code: 'BULLETIN 04:19',
    headline: 'NOCTURNAL TEXT COMMUNICATION',
    directive: 'Sending unprovoked three-paragraph sentimental declarations after 02:00 AM constitutes an immediate civil misdemeanor under Statute 18.',
    urgency: 'MAXIMAL',
  },
  {
    code: 'EDICT 88-K',
    headline: 'UNPROVOKED FITNESS DECLARATIONS',
    directive: 'Announcing an intent to wake up at 5:00 AM daily for cold showers and journaling is prohibited without a verifiable history of waking before 8:45 AM.',
    urgency: 'HIGH',
  },
  {
    code: 'ORD. 331-C',
    headline: 'HARDWARE & FURNITURE ASSEMBLY',
    directive: 'Commencing assembly of Scandinavian flatpack dressers by discarding the instruction pamphlet has been awarded the Cross of Reckless Optimism.',
    urgency: 'PERPETUAL',
  },
  {
    code: 'DECREE 902',
    headline: 'SUPERMARKET ACQUISITIONS WHILE RAVENOUS',
    directive: 'Entry into pastry aisles while experiencing acute biological hunger mandates the appointment of a financial conservator.',
    urgency: 'MAXIMAL',
  },
  {
    code: 'DISPATCH 12',
    headline: 'DIGITAL GROUP CHAT EXODUS',
    directive: 'Abruptly exiting a 45-person extended family chat without ceremonial diplomatic explanation shall incur permanent conversational scrutiny.',
    urgency: 'HIGH',
  },
];

export const PublicNoticeTicker: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [appealFeedback, setAppealFeedback] = useState<string | null>(null);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % ANNOUNCEMENTS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % ANNOUNCEMENTS.length);
  };

  const handleFileObjection = () => {
    const responses = [
      'APPEAL DISMISSED: The High Ministry finds your objection entirely reasonable, which renders it strictly inadmissible under our bylaws.',
      'OBJECTION DENIED: Form 404-F must be submitted in quadruplicate on 100% lambskin parchment via carrier pigeon.',
      'EXECUTIVE OVERRULE: In accordance with Subsection 12, common sense has been declared unconstitutional on these premises.',
    ];
    const picked = responses[Math.floor(Math.random() * responses.length)];
    setAppealFeedback(picked);
    setTimeout(() => setAppealFeedback(null), 5000);
  };

  const current = ANNOUNCEMENTS[currentIndex];

  return (
    <section className="relative w-full bg-[#1e1309] border-y-2 border-[#b8860b] shadow-inner text-[#fef3c7] font-typewriter">
      <div className="max-w-7xl mx-auto px-4 py-2 flex flex-col md:flex-row items-center justify-between gap-3">
        
        {/* Ticker Lead Tag */}
        <div className="flex items-center gap-2 shrink-0 bg-[#8b1828] border border-[#d4af37] px-3 py-1 text-xs font-bold text-[#fef08a] shadow-sm uppercase tracking-wider">
          <Megaphone className="w-3.5 h-3.5 animate-pulse text-[#fbbf24]" />
          <span>OFFICIAL GAZETTE DISPATCH</span>
        </div>

        {/* Notice content */}
        <div className="flex-1 overflow-hidden min-w-0 text-left">
          <div className="flex items-center gap-2 text-xs">
            <span className="text-[#f59e0b] font-bold shrink-0">[{current.code}]</span>
            <span className="text-[#fca5a5] font-bold uppercase tracking-wider shrink-0 hidden sm:inline">
              {current.headline}:
            </span>
            <span className="text-[#f1f5f9] truncate">
              {current.directive}
            </span>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-2 shrink-0 text-xs">
          <button
            onClick={() => setIsPaused(!isPaused)}
            title={isPaused ? 'Resume ticker rotation' : 'Pause ticker rotation'}
            className="p-1 text-[#d4af37] hover:text-[#fef08a] border border-[#78350f] bg-[#0f0a05] cursor-pointer"
          >
            {isPaused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
          </button>
          <button
            onClick={handleNext}
            title="Next official bulletin"
            className="p-1 text-[#d4af37] hover:text-[#fef08a] border border-[#78350f] bg-[#0f0a05] cursor-pointer"
          >
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={handleFileObjection}
            className="px-2.5 py-1 text-[11px] bg-[#311c0f] hover:bg-[#451a03] text-[#fef08a] border border-[#d4af37]/60 cursor-pointer uppercase tracking-wider font-bold transition-colors"
          >
            File Citizen Dissent
          </button>
        </div>
      </div>

      {appealFeedback && (
        <div className="bg-[#450a0a] text-[#fca5a5] border-t border-[#ef4444] px-4 py-1.5 text-center text-xs font-typewriter flex items-center justify-center gap-2 animate-fadeIn">
          <FileX className="w-4 h-4 text-[#ef4444] shrink-0" />
          <span>{appealFeedback}</span>
        </div>
      )}
    </section>
  );
};
