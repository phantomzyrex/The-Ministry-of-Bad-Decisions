import React from 'react';
import { WaxSealGraphic } from './OrnateFlourish';
import { ShieldAlert, Scale, Scroll, ChevronUp, PhoneCall, ExternalLink } from 'lucide-react';

export const OfficialFooter: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full bg-[#070d18] text-[#cbd5e1] border-t-4 border-double border-[#d4af37] py-6 px-4 font-serif">
      <div className="max-w-6xl mx-auto space-y-5">
        
        {/* Top Strip: Quick Directory Jumper & Emergency Line */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-[#d4af37]/30 text-xs font-typewriter">
          <div className="flex items-center gap-2 text-[#fef08a]">
            <PhoneCall className="w-3.5 h-3.5 text-[#ef4444]" />
            <span className="font-bold">CIVIL CRISIS DESK:</span>
            <span className="text-[#fca5a5]">1-800-WHY-DID-I</span>
            <span className="text-[#94a3b8] hidden sm:inline">(Hours: 02:00 – 04:30 AM Only)</span>
          </div>

          <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-[11px] text-[#d4af37]">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
              className="hover:text-[#fef08a] hover:underline cursor-pointer"
            >
              Masthead
            </button>
            <span>•</span>
            <button 
              onClick={() => scrollTo('certificate-section')} 
              className="hover:text-[#fef08a] hover:underline cursor-pointer"
            >
              Honours Diploma
            </button>
            <span>•</span>
            <button 
              onClick={() => scrollTo('unauthorized-appeals-section')} 
              className="hover:text-[#fef08a] hover:underline cursor-pointer text-[#f87171]"
            >
              Appeals Tribunal
            </button>
            <span>•</span>
            <button 
              onClick={scrollToTop} 
              className="hover:text-[#fef08a] flex items-center gap-0.5 text-[#fef08a] font-bold cursor-pointer ml-1"
            >
              <ChevronUp className="w-3.5 h-3.5" /> Return to Top
            </button>
          </div>
        </div>

        {/* Compact Middle Grid: Seals Strip + Disclaimers */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-stretch text-xs">
          
          {/* Seals lockup */}
          <div className="md:col-span-1 p-3 bg-[#0a1424] border border-[#d4af37]/40 flex flex-col justify-between text-center">
            <span className="text-[10px] font-display font-bold uppercase tracking-wider text-[#d4af37]">
              Sovereign Registry Seals
            </span>
            <div className="flex items-center justify-center gap-2 my-1">
              <WaxSealGraphic className="w-12 h-12" text="FOLLY" />
              <WaxSealGraphic className="w-12 h-12" text="DENIED" />
            </div>
            <div className="text-[9px] font-typewriter text-[#94a3b8] uppercase">
              Chartered 1742 • Class ∞
            </div>
          </div>

          {/* Statutory Immunity */}
          <div className="p-3 bg-[#0a1424] border border-[#d4af37]/30 space-y-1">
            <div className="flex items-center gap-1.5 text-[#fef08a] font-display font-bold text-[11px] uppercase tracking-wider">
              <Scale className="w-3 h-3 text-[#d4af37]" />
              Statutory Immunity
            </div>
            <p className="text-[11px] text-[#94a3b8] leading-snug">
              Under §904 of the Sovereign Folly Code, the Crown assumes zero civil liability for bruised egos, midnight online checkouts, or crooked IKEA bookshelves.
            </p>
          </div>

          {/* Classification Warning */}
          <div className="p-3 bg-[#0a1424] border border-[#d4af37]/30 space-y-1">
            <div className="flex items-center gap-1.5 text-[#fef08a] font-display font-bold text-[11px] uppercase tracking-wider">
              <ShieldAlert className="w-3 h-3 text-[#ef4444]" />
              Classification: Level ∞
            </div>
            <p className="text-[11px] text-[#94a3b8] leading-snug">
              Accessing this registry during salaried hours is officially deemed performance of state duties under the Procrastination Act of 1999.
            </p>
          </div>

          {/* Guilt Cookie Policy */}
          <div className="p-3 bg-[#0a1424] border border-[#d4af37]/30 space-y-1">
            <div className="flex items-center gap-1.5 text-[#fef08a] font-display font-bold text-[11px] uppercase tracking-wider">
              <Scroll className="w-3 h-3 text-[#10b981]" />
              Regret Cookie Policy
            </div>
            <p className="text-[11px] text-[#94a3b8] leading-snug">
              Metaphysical guilt cookies deposited in the user&apos;s conscience cannot be cleared via incognito tabs or insincere promises to improve.
            </p>
          </div>

        </div>

        {/* Compact Copyright & Latin Decree Line */}
        <div className="pt-2 border-t border-[#d4af37]/30 flex flex-col sm:flex-row items-center justify-between gap-2 text-[10px] font-typewriter text-[#64748b]">
          <div className="text-center sm:text-left">
            <span className="text-[#cbd5e1] font-bold">
              &copy; 1684 &ndash; 2026 THE HIGH MINISTRY OF BAD DECISIONS.
            </span>
            <span className="ml-1 text-[#94a3b8] hidden md:inline">
              All Rights Reserved. Appeals remain perpetually PENDING/DENIED.
            </span>
          </div>

          <div className="text-[#d4af37] font-serif italic text-xs tracking-wider">
            &ldquo;Errare Humanum Est, Sed Persistere Diabolicum&rdquo;
          </div>
        </div>

      </div>
    </footer>
  );
};
