import React, { useState } from 'react';
import royalSealImg from '../assets/images/ministry_royal_seal_1790355456837.jpg';
import { CornerFlourish, LaurelWreath } from './OrnateFlourish';
import { AlertTriangle, Award, FileQuestion, Volume2, ShieldCheck, Printer, History } from 'lucide-react';

interface HeaderMastheadProps {
  onReopenSecurityAudit: () => void;
  onJumpToCertificate: () => void;
  onJumpToAppeals: () => void;
  onJumpToHistorical: () => void;
  onApplyPageStamp: () => void;
  onPrintPage: () => void;
}

export const HeaderMasthead: React.FC<HeaderMastheadProps> = ({
  onReopenSecurityAudit,
  onJumpToCertificate,
  onJumpToAppeals,
  onJumpToHistorical,
  onApplyPageStamp,
  onPrintPage,
}) => {
  const [alarmActive, setAlarmActive] = useState(false);
  const [alarmMessage, setAlarmMessage] = useState<string | null>(null);

  const triggerAlarm = () => {
    setAlarmActive(true);
    setAlarmMessage('CIVIL DEFENSE SIREN SOUNDED: CITIZEN DETECTED CONTEMPLATING RESPONSIBLE BUDGETING');
    setTimeout(() => {
      setAlarmActive(false);
      setAlarmMessage(null);
    }, 4500);
  };

  return (
    <header className="relative w-full z-20">
      {/* 1. TOP URGENT GOVERNMENT HAZARD RIBBON */}
      <div className="w-full bg-[#8b1828] text-[#fef08a] border-b-2 border-[#d4af37] px-4 py-1.5 flex items-center justify-between shadow-md text-xs font-typewriter tracking-wider">
        <div className="flex items-center gap-2 overflow-hidden whitespace-nowrap">
          <span className="bg-[#450a0a] text-[#f87171] border border-[#ef4444] px-1.5 py-0.5 font-bold animate-pulse text-[10px]">
            URGENT EDICT #492-X
          </span>
          <span className="font-bold uppercase tracking-widest truncate">
            GOVERNMENT NOTICE — READ IMMEDIATELY — CIVIL PENALTY FOR SOBER RECONSIDERATION APPLIES
          </span>
        </div>
        <div className="hidden lg:flex items-center gap-4 shrink-0 text-[11px] text-[#fde047]">
          <span>SOVEREIGN JURISDICTION: GLOBAL FOLLY</span>
          <span>•</span>
          <button 
            onClick={onReopenSecurityAudit}
            className="hover:underline flex items-center gap-1 cursor-pointer"
          >
            <ShieldCheck className="w-3 h-3" /> Security Clearance: LEVEL ∞
          </button>
        </div>
      </div>

      {/* Alarm Banner if triggered */}
      {alarmActive && (
        <div className="w-full bg-[#dc2626] text-white py-2 px-4 text-center font-typewriter text-xs font-bold tracking-widest animate-bounce border-y-2 border-yellow-300">
          ⚠️ {alarmMessage} ⚠️
        </div>
      )}

      {/* 2. MAIN GRAND MASTHEAD PANEL */}
      <div className="relative bg-gradient-to-b from-[#0a1628] via-[#0f2342] to-[#0a1628] text-[#f7f0e1] border-b-4 border-double border-[#d4af37] px-4 py-8 md:py-10 shadow-2xl overflow-hidden">
        {/* Subtle diagonal background grid */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

        {/* Corner Flourishes */}
        <CornerFlourish position="top-left" className="absolute top-3 left-3 w-12 h-12 text-[#d4af37]" />
        <CornerFlourish position="top-right" className="absolute top-3 right-3 w-12 h-12 text-[#d4af37]" />
        <CornerFlourish position="bottom-left" className="absolute bottom-3 left-3 w-12 h-12 text-[#d4af37]" />
        <CornerFlourish position="bottom-right" className="absolute bottom-3 right-3 w-12 h-12 text-[#d4af37]" />

        <div className="max-w-6xl mx-auto flex flex-col items-center text-center relative z-10">
          
          {/* Top Imperial Sub-Kicker */}
          <div className="flex items-center gap-3 text-xs md:text-sm font-display tracking-[0.25em] uppercase text-[#d4af37] font-bold mb-2">
            <span>⚜ THE HIGH COUNCIL OF CHRONIC MISJUDGEMENT ⚜</span>
          </div>

          {/* Large Center Sovereign Seal */}
          <div className="relative my-2 group cursor-pointer" title="Imperial Seal of Folly — Click to inspect">
            <div className="absolute -inset-3 rounded-full bg-gradient-to-r from-[#d4af37] via-[#f59e0b] to-[#b45309] opacity-30 blur-md group-hover:opacity-60 transition-opacity" />
            <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full border-4 border-double border-[#d4af37] p-1.5 bg-[#070e1a] shadow-[0_0_25px_rgba(212,175,55,0.45)]">
              <img
                src={royalSealImg}
                alt="Imperial Seal of The Ministry of Bad Decisions"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover rounded-full filter contrast-125 brightness-95 group-hover:rotate-12 transition-transform duration-700"
              />
              {/* Rotating Latin ribbon simulation */}
              <div className="absolute inset-0 rounded-full border border-dashed border-[#d4af37]/60 pointer-events-none animate-[spin_60s_linear_infinite]" />
            </div>

            {/* Latin motto label directly under seal */}
            <div className="mt-2.5 inline-block bg-[#1b2a47] border border-[#d4af37] px-4 py-1 text-[11px] md:text-xs font-serif italic text-[#fef08a] shadow-md tracking-wider">
              &ldquo;Errare Humanum Est, Sed Persistere Diabolicum&rdquo;
            </div>
            <div className="text-[10px] font-typewriter text-[#94a3b8] uppercase tracking-widest mt-0.5">
              (To err is human, but to persist is diabolical)
            </div>
          </div>

          {/* Ministry Sovereign Title */}
          <h1 className="mt-4 text-3xl sm:text-5xl lg:text-6xl font-royal font-black tracking-wide text-transparent bg-clip-text bg-gradient-to-b from-[#fff6d6] via-[#e5c158] to-[#996515] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] leading-tight">
            THE MINISTRY OF BAD DECISIONS
          </h1>

          {/* Royal Tagline & Legal Establishment */}
          <p className="mt-2 text-sm sm:text-base font-serif italic text-[#e2d5bd] max-w-2xl text-balance">
            Serving Your Worst Instincts Since 1742 &bull; The Sole Sovereign Authority Overseeing Impulsive Purchases, Unhinged Late-Night Dispatches, and Unwarranted Optimism.
          </p>

          {/* Dual Stamped Ribbons / Imperial Badges */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            <div className="border border-[#b91c1c] bg-[#8b1828]/30 px-3 py-1 font-typewriter text-xs text-[#fca5a5] flex items-center gap-1.5 uppercase tracking-wider shadow-inner">
              <AlertTriangle className="w-3.5 h-3.5 text-[#ef4444]" />
              GAZETTED PERPETUAL DISASTER
            </div>
            <div className="border border-[#d4af37] bg-[#78350f]/30 px-3 py-1 font-typewriter text-xs text-[#fde047] flex items-center gap-1.5 uppercase tracking-wider shadow-inner">
              <Award className="w-3.5 h-3.5 text-[#eab308]" />
              CHARTERED UNDER CROWN PATENT 884-Z
            </div>
            <div className="border border-[#15803d] bg-[#14532d]/30 px-3 py-1 font-typewriter text-xs text-[#86efac] flex items-center gap-1.5 uppercase tracking-wider shadow-inner">
              <span className="w-2 h-2 rounded-full bg-[#22c55e] inline-block animate-ping" />
              STATUS: IRREVERSIBLE
            </div>
          </div>

          {/* 3. FUNCTIONAL UTILITY TOOLBAR */}
          <div className="mt-6 pt-4 border-t border-[#d4af37]/30 w-full max-w-3xl flex flex-wrap items-center justify-between gap-2 text-xs font-display">
            <div className="flex items-center gap-2">
              <button
                onClick={triggerAlarm}
                className="px-3 py-1.5 bg-[#8b1828] hover:bg-[#991b1b] text-[#fef08a] border border-[#d4af37] font-bold tracking-wider uppercase cursor-pointer flex items-center gap-1.5 transition-colors shadow-sm"
              >
                <Volume2 className="w-3.5 h-3.5" />
                Sound Regret Alarm
              </button>

              <button
                onClick={onApplyPageStamp}
                className="px-3 py-1.5 bg-[#1e293b] hover:bg-[#334155] text-[#e2e8f0] border border-[#d4af37] font-bold tracking-wider uppercase cursor-pointer flex items-center gap-1.5 transition-colors shadow-sm"
              >
                Affix Stamp of Folly
              </button>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={onJumpToHistorical}
                className="px-3 py-1.5 bg-[#1b2a47] hover:bg-[#253d66] text-[#fef08a] border border-[#d4af37] font-bold tracking-wider uppercase cursor-pointer flex items-center gap-1.5 transition-colors shadow-sm"
              >
                <History className="w-3.5 h-3.5 text-[#fbbf24]" />
                Historical Archives
              </button>

              <button
                onClick={onJumpToAppeals}
                className="px-3 py-1.5 bg-[#450a0a] hover:bg-[#5c0d0d] text-[#fca5a5] border border-[#ef4444] font-bold tracking-wider uppercase cursor-pointer flex items-center gap-1.5 transition-colors shadow-sm"
              >
                <AlertTriangle className="w-3.5 h-3.5 text-[#ef4444]" />
                Unauthorized Appeals
              </button>

              <button
                onClick={onJumpToCertificate}
                className="px-3 py-1.5 bg-[#d4af37] hover:bg-[#e5c158] text-[#1c1917] border border-[#78350f] font-bold tracking-wider uppercase cursor-pointer flex items-center gap-1.5 transition-colors shadow-sm"
              >
                <Award className="w-3.5 h-3.5" />
                Claim Royal Certificate
              </button>

              <button
                onClick={onPrintPage}
                title="Print Official Decree"
                className="px-3 py-1.5 bg-[#0f172a] hover:bg-[#1e293b] text-[#cbd5e1] border border-[#64748b] font-mono cursor-pointer flex items-center gap-1.5 transition-colors"
              >
                <Printer className="w-3.5 h-3.5" />
                Print Gazette
              </button>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
};
