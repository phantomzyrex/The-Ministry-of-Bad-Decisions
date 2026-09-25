import React, { useState, useEffect } from 'react';
import { ShieldAlert, CheckCircle2, Lock } from 'lucide-react';
import { CornerFlourish } from './OrnateFlourish';

interface SecurityIntroModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SecurityIntroModal: React.FC<SecurityIntroModalProps> = ({ isOpen, onClose }) => {
  const [stepIndex, setStepIndex] = useState(0);
  const [progress, setProgress] = useState(15);

  const steps = [
    'CONNECTING TO CENTRAL CATASTROPHE REGISTRY (PARCHMENT LINK 9.6K)...',
    'INTERROGATING BROWSER SESSION FOR UNCHECKED SHOPPING CARTS...',
    'SCANNING DRAFT REPLIES TO DANGEROUS TEXT CORRESPONDENCE (02:14 AM)...',
    'CALCULATING CIVILIAN RESISTANCE TO BAD ADVICE: 3.8% (CRITICAL DEFICIT)...',
    'EXECUTIVE SOVEREIGN EXCLUSION VERIFIED: PROCEED WITH REGRET.',
  ];

  useEffect(() => {
    if (!isOpen) return;
    setStepIndex(0);
    setProgress(20);

    const interval = setInterval(() => {
      setStepIndex((prev) => {
        if (prev < steps.length - 1) {
          setProgress((p) => Math.min(100, p + 22));
          return prev + 1;
        } else {
          clearInterval(interval);
          setTimeout(() => {
            onClose();
          }, 600);
          return prev;
        }
      });
    }, 550);

    return () => clearInterval(interval);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#070b12]/90 backdrop-blur-md p-4">
      <div className="relative w-full max-w-xl bg-[#0d1624] text-[#d4af37] border-4 border-double border-[#d4af37] p-8 shadow-[0_0_50px_rgba(212,175,55,0.3)]">
        {/* Corner Flourishes */}
        <CornerFlourish position="top-left" className="absolute top-2 left-2 w-8 h-8 text-[#d4af37]" />
        <CornerFlourish position="top-right" className="absolute top-2 right-2 w-8 h-8 text-[#d4af37]" />
        <CornerFlourish position="bottom-left" className="absolute bottom-2 left-2 w-8 h-8 text-[#d4af37]" />
        <CornerFlourish position="bottom-right" className="absolute bottom-2 right-2 w-8 h-8 text-[#d4af37]" />

        <div className="text-center space-y-4">
          <div className="inline-flex p-3 rounded-full bg-[#1b2a47] border border-[#d4af37]/40 shadow-inner">
            <Lock className="w-8 h-8 text-[#d4af37] animate-pulse" />
          </div>

          <div className="border-b border-[#d4af37]/30 pb-3">
            <div className="text-[11px] font-typewriter tracking-[0.3em] uppercase text-[#fca5a5]">
              [RESTRICTED ACCESS • SECTION 194-A]
            </div>
            <h2 className="text-2xl font-display font-bold text-[#fef3c7] tracking-wider mt-1">
              THE SOVEREIGN MINISTRY OF BAD DECISIONS
            </h2>
            <p className="text-xs font-typewriter text-[#94a3b8] mt-1">
              AUTOMATED SECURITY CLEARANCE & COGNITIVE AUDIT PROTOCOL
            </p>
          </div>

          {/* Terminal log output */}
          <div className="bg-[#05080f] border border-[#d4af37]/30 p-4 rounded text-left font-typewriter text-xs space-y-2 min-h-[140px] text-[#e2e8f0]">
            {steps.slice(0, stepIndex + 1).map((text, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <span className="text-[#38bdf8] select-none">&gt;&gt;</span>
                <span className={idx === stepIndex ? 'text-[#fef08a] font-bold' : 'text-[#94a3b8]'}>
                  {text}
                </span>
                {idx < stepIndex && (
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#22c55e] inline ml-auto shrink-0 mt-0.5" />
                )}
              </div>
            ))}
          </div>

          {/* Progress bar */}
          <div className="space-y-1">
            <div className="flex justify-between text-[11px] font-typewriter text-[#cbd5e1]">
              <span>CLEARANCE ENFORCEMENT</span>
              <span>{Math.min(100, progress)}%</span>
            </div>
            <div className="w-full h-2.5 bg-[#05080f] border border-[#d4af37]/50 p-0.5">
              <div 
                className="h-full bg-gradient-to-r from-[#991b1b] via-[#d4af37] to-[#15803d] transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <div className="pt-2 flex justify-between items-center">
            <span className="text-[10px] font-typewriter text-[#94a3b8] flex items-center gap-1">
              <ShieldAlert className="w-3.5 h-3.5 text-[#fbbf24]" /> CLASSIFICATION: LEVEL ∞ UNTOUCHABLE
            </span>
            <button
              onClick={onClose}
              className="px-4 py-1.5 text-xs font-display uppercase tracking-widest bg-[#8b1828] hover:bg-[#a11b30] text-[#fef3c7] border border-[#d4af37] cursor-pointer transition-colors shadow-sm"
            >
              Bypass Clearance Protocol &rarr;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
