import React, { useState } from 'react';
import { CornerFlourish, WaxSealGraphic, FiligreeDivider } from './OrnateFlourish';
import { AppealRecord } from '../types';
import { 
  Gavel, 
  Scale, 
  AlertTriangle, 
  Search, 
  FileX2, 
  Check, 
  HelpCircle, 
  Clock, 
  Send,
  ShieldX
} from 'lucide-react';

const INITIAL_APPEALS: AppealRecord[] = [
  {
    docketNo: 'APP-1742-01',
    petitioner: 'The Slanted Bangs Baron',
    offense: 'Severed own fringe with kitchen shears at 01:15 AM following an emotional television drama.',
    pleaBasis: 'The illumination in the lavatory was deceptive, and the scissors appeared sharper than they were.',
    penanceOffer: 'Pledges to wear an oversized knit beanie through the humid months of July and August.',
    status: 'PENDING/DENIED',
    magistrateRemark: 'Hair growth is governed by biological cell division, over which this court possesses no jurisdiction. DENIED in perpetuity.',
    filedTime: '2 hours ago',
  },
  {
    docketNo: 'APP-1742-02',
    petitioner: 'Lady of the Unopened Dutch Oven',
    offense: 'Expended $240 upon enamelled cast-iron cookware under the belief it would transform her into a French matron.',
    pleaBasis: 'The cookware was on sale at 18% off, and the colorway was named "Normandy Fog".',
    penanceOffer: 'Will heat a tin of tinned beans in the vessel at least once per fiscal calendar year.',
    status: 'PENDING/DENIED',
    magistrateRemark: 'Fiscal recklessness disguised as culinary ambition is an imperial cornerstone. PARDON WITHHELD.',
    filedTime: '5 hours ago',
  },
  {
    docketNo: 'APP-1742-03',
    petitioner: 'Viscount of Nocturnal Dispatches',
    offense: 'Transmitted three unsanctioned sentimental paragraphs to an ex-partner at 02:44 AM.',
    pleaBasis: 'Petitioner was listening to Fleetwood Mac on high-fidelity headphones while mildly dehydrated.',
    penanceOffer: 'Agrees to surrender mobile cellular apparatus to an armed sentry at 22:00 hours nightly.',
    status: 'PENDING/DENIED',
    magistrateRemark: 'Evidence reviewed. The phrase "I just wonder if you remember that diner" cannot be legally un-sent. DENIED.',
    filedTime: 'Yesterday',
  },
  {
    docketNo: 'APP-1742-04',
    petitioner: 'Grand Duke of Corporate Reply-All',
    offense: 'Broadcast "Thanks for the update, please remove me" to 4,800 worldwide enterprise staff.',
    pleaBasis: 'The "Reply" and "Reply All" toggles were separated by a distance of only 4 millimetres on screen.',
    penanceOffer: 'Will write "I shall read email headers" 500 times in standard black fountain pen.',
    status: 'PENDING/DENIED',
    magistrateRemark: 'IT infrastructure damage classified as irreparable. PENDING review until year 2490, effectively DENIED.',
    filedTime: '3 days ago',
  },
];

const PRESET_GROUNDS = [
  'I was emotionally compromised by an indie folk playlist.',
  'The digital merchant declared: "Only 1 item remaining at this promotional price."',
  'My close companions nodded with unwarranted enthusiasm when I suggested it.',
  'It looked entirely straightforward in the 28-second video demonstration.',
  'Mercury was in apparent retrograde motion across my birth chart.',
  'I had not consumed adequate protein during the previous six hours.',
];

const PRESET_PENANCES = [
  'I shall stare solemnly at my ceiling for 45 uninterrupted minutes.',
  'I shall delete all digital marketplace applications for a period of 6 hours.',
  'I will admit to three acquaintances that I am not, in fact, "handy around the house".',
  'I shall refrain from offering unsolicited life advice for 48 consecutive hours.',
];

export const UnauthorizedAppeals: React.FC = () => {
  const [appeals, setAppeals] = useState<AppealRecord[]>(INITIAL_APPEALS);
  const [petitioner, setPetitioner] = useState('');
  const [offense, setOffense] = useState('');
  const [pleaBasis, setPleaBasis] = useState(PRESET_GROUNDS[0]);
  const [isCustomPlea, setIsCustomPlea] = useState(false);
  const [customPlea, setCustomPlea] = useState('');
  const [penanceOffer, setPenanceOffer] = useState(PRESET_PENANCES[0]);
  const [acknowledgedDenial, setAcknowledgedDenial] = useState(false);

  // Submission state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [justSubmittedDocket, setJustSubmittedDocket] = useState<AppealRecord | null>(null);

  // Status Lookup Tool
  const [lookupDocket, setLookupDocket] = useState('');
  const [lookupResult, setLookupResult] = useState<string | null>(null);
  const [isSearchingLookup, setIsSearchingLookup] = useState(false);

  const activePlea = isCustomPlea && customPlea.trim() ? customPlea : pleaBasis;

  const handleLookup = (e: React.FormEvent) => {
    e.preventDefault();
    if (!lookupDocket.trim()) return;

    setIsSearchingLookup(true);
    setLookupResult(null);

    setTimeout(() => {
      setIsSearchingLookup(false);
      setLookupResult(lookupDocket.trim());
    }, 700);
  };

  const handleSubmitAppeal = (e: React.FormEvent) => {
    e.preventDefault();
    if (!offense.trim()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      const newDocket = `APP-2026-${Math.floor(1000 + Math.random() * 9000)}`;
      const remarks = [
        'Petitioner\'s plea reviewed by the Tribunal. Regret is acknowledged, but absolution remains contrary to Ministerial charter. RULING: PENDING/DENIED.',
        'The Arch-Magistrate sighed deeply and placed this docket directly into the unmonitored sub-basement archive. RULING: PENDING/DENIED.',
        'Extenuating circumstances classified as "laughably avoidable." The petition has been permanently stamped PENDING/DENIED.',
        'Common sense was available at zero financial cost prior to the event. Appeal remanded to eternity. RULING: PENDING/DENIED.',
      ];
      const randomRemark = remarks[Math.floor(Math.random() * remarks.length)];

      const newRecord: AppealRecord = {
        docketNo: newDocket,
        petitioner: petitioner.trim() || 'Desperate Citizen',
        offense: offense.trim(),
        pleaBasis: activePlea,
        penanceOffer,
        status: 'PENDING/DENIED',
        magistrateRemark: randomRemark,
        filedTime: 'Just now',
      };

      setAppeals([newRecord, ...appeals]);
      setJustSubmittedDocket(newRecord);
      setIsSubmitting(false);

      // Reset form fields
      setOffense('');
      setPetitioner('');
      setAcknowledgedDenial(false);
    }, 1200);
  };

  return (
    <section id="unauthorized-appeals-section" className="relative w-full py-8 px-4 bg-[#111927] text-[#f7f0e1] border-b-4 border-double border-[#d4af37]">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-5">
          <div className="inline-block bg-[#8b1828] text-[#fef08a] border border-[#d4af37] px-4 py-1 font-typewriter text-xs font-bold tracking-[0.25em] uppercase mb-1.5">
            SECTION VI • HIGH TRIBUNAL OF UNAUTHORIZED APPEALS
          </div>
          <h2 className="text-3xl md:text-5xl font-royal font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ffe599] via-[#d4af37] to-[#e6c875] tracking-wide">
            THE SOVEREIGN COURT OF FUTILE PARDONS
          </h2>
          <p className="font-serif italic text-xs md:text-sm text-[#cbd5e1] mt-1">
            Petitions for Clemency, Remission of Regret &amp; Official Erasure of Ill-Advised Life Choices
          </p>
          <div className="text-[11px] font-typewriter text-[#94a3b8] mt-0.5 tracking-wider">
            LEGAL MOTTO: &ldquo;Appellatio Vana Est, Poena Perpetua Manet&rdquo; (Appealing is Vain, the Embarrassment Endures)
          </div>
          <FiligreeDivider className="my-3" title="FORM 000-VOID: APPLICATION FOR PARDON" />
        </div>

        {/* ══════════════════════════════════════════════════════════════ */}
        {/* PERMANENT MASTER STATUS INDICATOR BANNER                      */}
        {/* ══════════════════════════════════════════════════════════════ */}
        <div className="mb-6 bg-[#1e293b]/90 border-4 border-double border-[#b91c1c] p-4 md:p-5 shadow-[0_0_30px_rgba(185,28,28,0.35)] relative overflow-hidden">
          {/* Subtle background striping */}
          <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(185,28,28,0.06)_25%,transparent_25%,transparent_50%,rgba(185,28,28,0.06)_50%,rgba(185,28,28,0.06)_75%,transparent_75%,transparent)] bg-[length:24px_24px] pointer-events-none" />

          <div className="relative flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-[#450a0a] border-2 border-[#ef4444] rounded text-[#f87171] shrink-0">
                <Gavel className="w-8 h-8 animate-pulse" />
              </div>
              <div>
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <span className="font-typewriter text-[11px] font-bold text-[#fca5a5] uppercase tracking-widest">
                    IMPERIAL CLEMENCY STATUS MONITOR
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[#ef4444] animate-ping" />
                </div>
                <div className="text-xs font-serif text-[#e2e8f0] mt-0.5">
                  Universal statutory disposition across all citizen petitions, appeals, and grovelling excuses:
                </div>
              </div>
            </div>

            {/* MANDATORY STATUS INDICATOR: ALWAYS SHOWS PENDING/DENIED */}
            <div className="flex flex-col items-center md:items-end">
              <div className="flex items-center gap-2 border-2 border-[#b91c1c] bg-[#450a0a] px-4 py-2 shadow-inner">
                <ShieldX className="w-5 h-5 text-[#ef4444] shrink-0" />
                <span className="font-typewriter text-xs text-[#fca5a5] uppercase tracking-wider font-bold">
                  STATUS:
                </span>
                <span className="font-display font-black text-base sm:text-xl text-[#fef08a] tracking-widest drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                  PENDING/DENIED
                </span>
              </div>
              <span className="text-[10px] font-typewriter text-[#94a3b8] mt-1 italic tracking-wider">
                * Estimated deliberative resolution: 412 Business Years
              </span>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════════ */}
        {/* TWO-COLUMN GRID: FORM (LEFT) & STATUS VERIFIER/LIST (RIGHT)    */}
        {/* ══════════════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: THE PARDON PETITION FORM (7 Cols) */}
          <div className="lg:col-span-7 bg-[#fffdf8] text-[#1c1917] border-4 border-double border-[#78350f] p-6 sm:p-8 shadow-2xl parchment-card relative">
            <CornerFlourish position="top-left" className="absolute top-2 left-2 w-8 h-8 text-[#78350f]" />
            <CornerFlourish position="top-right" className="absolute top-2 right-2 w-8 h-8 text-[#78350f]" />
            <CornerFlourish position="bottom-left" className="absolute bottom-2 left-2 w-8 h-8 text-[#78350f]" />
            <CornerFlourish position="bottom-right" className="absolute bottom-2 right-2 w-8 h-8 text-[#78350f]" />

            <div className="border-b-2 border-[#78350f] pb-3 mb-6 text-center">
              <span className="font-typewriter text-[11px] text-[#8b1828] font-bold tracking-[0.25em] uppercase block">
                OFFICIAL REQUISITION FOR EXECUTIVE MERCY
              </span>
              <h3 className="text-xl sm:text-2xl font-royal font-bold text-[#1f2937] mt-1">
                Form 000-VOID: Petition for Pardon
              </h3>
              <p className="font-serif italic text-xs text-[#573d23] mt-0.5">
                Complete all disclosures below. Falsification of guilt will result in mandatory assignment of further disastrous impulses.
              </p>
            </div>

            <form onSubmit={handleSubmitAppeal} className="space-y-4 font-typewriter text-xs">
              
              {/* Petitioner Name */}
              <div>
                <label className="block uppercase tracking-wider text-[#78350f] font-bold mb-1">
                  1. Petitioner Alias / Title of Contrition:
                </label>
                <input
                  type="text"
                  value={petitioner}
                  onChange={(e) => setPetitioner(e.target.value)}
                  placeholder="e.g. Master of Midnight Air Fryer Recipes"
                  maxLength={50}
                  className="w-full bg-[#fcf8f0] border border-[#78350f] p-2.5 text-[#1c1917] font-serif focus:outline-none focus:border-[#8b1828]"
                />
              </div>

              {/* The Offense */}
              <div>
                <label className="block uppercase tracking-wider text-[#78350f] font-bold mb-1">
                  2. Nature of the Bad Decision Demanding Pardon:
                </label>
                <textarea
                  value={offense}
                  onChange={(e) => setOffense(e.target.value)}
                  rows={2}
                  required
                  placeholder="Specify the exact blunder (e.g. 'Agreed to join an 11-person shared spreadsheet for a weekend cabin rental')..."
                  className="w-full bg-[#fcf8f0] border border-[#78350f] p-2.5 text-[#1c1917] focus:outline-none focus:border-[#8b1828]"
                />
              </div>

              {/* Grounds for Clemency / Excuse */}
              <div>
                <label className="block uppercase tracking-wider text-[#78350f] font-bold mb-1">
                  3. Alleged Grounds for Clemency / Flawed Rationale:
                </label>
                {!isCustomPlea ? (
                  <div className="space-y-1.5">
                    <select
                      value={pleaBasis}
                      onChange={(e) => {
                        if (e.target.value === 'CUSTOM') {
                          setIsCustomPlea(true);
                        } else {
                          setPleaBasis(e.target.value);
                        }
                      }}
                      className="w-full bg-[#fcf8f0] border border-[#78350f] p-2 text-[#1c1917] focus:outline-none focus:border-[#8b1828] cursor-pointer"
                    >
                      {PRESET_GROUNDS.map((g, i) => (
                        <option key={i} value={g}>{g}</option>
                      ))}
                      <option value="CUSTOM">-- ENTER BESPOKE DECEPTIVE EXCUSE --</option>
                    </select>
                  </div>
                ) : (
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={customPlea}
                      onChange={(e) => setCustomPlea(e.target.value)}
                      placeholder="Detail unique justification..."
                      className="w-full bg-[#fcf8f0] border border-[#78350f] p-2 text-[#1c1917] focus:outline-none focus:border-[#8b1828]"
                    />
                    <button
                      type="button"
                      onClick={() => setIsCustomPlea(false)}
                      className="px-2 py-1 bg-[#8b1828] text-[#fef08a] text-[10px] border border-[#d4af37] cursor-pointer whitespace-nowrap"
                    >
                      Standard Excuses
                    </button>
                  </div>
                )}
              </div>

              {/* Proposed Penance */}
              <div>
                <label className="block uppercase tracking-wider text-[#78350f] font-bold mb-1">
                  4. Offer of Voluntary Civil Penance:
                </label>
                <select
                  value={penanceOffer}
                  onChange={(e) => setPenanceOffer(e.target.value)}
                  className="w-full bg-[#fcf8f0] border border-[#78350f] p-2 text-[#1c1917] focus:outline-none focus:border-[#8b1828] cursor-pointer"
                >
                  {PRESET_PENANCES.map((p, i) => (
                    <option key={i} value={p}>{p}</option>
                  ))}
                </select>
              </div>

              {/* Form Projected Status Indicator Box */}
              <div className="p-3 bg-[#fdf2d0] border border-[#b8860b] flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-[#78350f] font-bold block uppercase tracking-wider">
                    STATUTORY ADJUDICATION PROJECTION:
                  </span>
                  <span className="text-[11px] font-serif italic text-[#451a03]">
                    Under Decree 00-VOID, initial review and final verdict are concurrent.
                  </span>
                </div>
                <div className="text-right">
                  <span className="inline-block px-2.5 py-1 bg-[#8b1828] text-[#fef08a] border border-[#d4af37] font-display font-bold text-xs tracking-wider">
                    PENDING/DENIED
                  </span>
                </div>
              </div>

              {/* Mandatory Satirical Acknowledgment */}
              <div className="pt-1">
                <label className="flex items-start gap-2.5 cursor-pointer text-[11px] font-serif text-[#374151]">
                  <input
                    type="checkbox"
                    checked={acknowledgedDenial}
                    onChange={(e) => setAcknowledgedDenial(e.target.checked)}
                    required
                    className="mt-0.5 w-4 h-4 accent-[#8b1828] cursor-pointer shrink-0"
                  />
                  <span>
                    I solemnly swear that I fully anticipate this pardon being summarily rejected, and agree that the status of this petition shall remain forever <strong>PENDING/DENIED</strong> regardless of legal precedent or emotional tears.
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-[#8b1828] hover:bg-[#991b1b] text-[#fef08a] border border-[#d4af37] font-display font-bold tracking-widest uppercase cursor-pointer flex items-center justify-center gap-2 transition-all shadow-md text-xs sm:text-sm disabled:opacity-60"
              >
                {isSubmitting ? (
                  <>
                    <Scale className="w-4 h-4 animate-spin text-[#fef08a]" />
                    <span>DELIBERATING PARDON (RESULT: DENIED)...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 text-[#fef08a]" />
                    <span>LODGE APPEAL WITH THE SUPREME TRIBUNAL</span>
                  </>
                )}
              </button>

            </form>

            {/* Just Submitted Feedback Stamp Notice */}
            {justSubmittedDocket && (
              <div className="mt-6 p-4 border-4 border-double border-[#b91c1c] bg-[#fef2f2] text-[#991b1b] relative overflow-hidden animate-fadeIn">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div>
                    <span className="font-typewriter text-[11px] font-bold uppercase tracking-widest block text-[#7f1d1d]">
                      DOCKET #{justSubmittedDocket.docketNo} REGISTERED
                    </span>
                    <p className="font-serif text-xs text-[#1c1917] mt-1">
                      {justSubmittedDocket.magistrateRemark}
                    </p>
                  </div>
                  
                  {/* The Rubber Stamp */}
                  <div className="rubber-stamp animate-stamp shrink-0">
                    <div className="text-[8px] font-typewriter -mb-1 text-center">TRIBUNAL ORDER</div>
                    <div className="text-xs sm:text-sm font-display font-black tracking-widest text-center">
                      PENDING/DENIED
                    </div>
                  </div>
                </div>
              </div>
            )}

          </div>

          {/* RIGHT: DOCKET STATUS VERIFIER & RECENT APPEALS (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* 1. DOCKET STATUS VERIFIER TOOL */}
            <div className="bg-[#0f1f38] border-2 border-[#d4af37] p-5 shadow-xl text-xs font-typewriter text-[#e2e8f0]">
              <div className="flex items-center gap-2 border-b border-[#d4af37]/30 pb-2 mb-3">
                <Search className="w-4 h-4 text-[#d4af37]" />
                <h4 className="font-display font-bold text-sm text-[#fef08a] uppercase tracking-wider">
                  Docket Status Verifier
                </h4>
              </div>

              <p className="font-serif text-xs text-[#cbd5e1] mb-3 leading-relaxed">
                Enter any official docket identification or civilian case code to cross-reference with the Central Ledger of Denials:
              </p>

              <form onSubmit={handleLookup} className="flex gap-2">
                <input
                  type="text"
                  value={lookupDocket}
                  onChange={(e) => setLookupDocket(e.target.value)}
                  placeholder="e.g. APP-1742-01"
                  className="flex-1 bg-[#070e1a] border border-[#d4af37] px-2.5 py-1.5 text-xs text-[#fef08a] focus:outline-none focus:border-[#fef08a]"
                />
                <button
                  type="submit"
                  disabled={isSearchingLookup}
                  className="px-3 py-1.5 bg-[#8b1828] hover:bg-[#991b1b] text-[#fef08a] border border-[#d4af37] font-bold uppercase tracking-wider cursor-pointer transition-colors"
                >
                  {isSearchingLookup ? 'Scanning...' : 'Verify'}
                </button>
              </form>

              {/* Status Verification Result Card */}
              {lookupResult && (
                <div className="mt-4 p-3 bg-[#0a1424] border-2 border-[#ef4444] rounded text-left space-y-2 animate-fadeIn">
                  <div className="flex items-center justify-between border-b border-[#ef4444]/40 pb-1 text-[10px]">
                    <span className="text-[#38bdf8] font-bold">CASE: {lookupResult.toUpperCase()}</span>
                    <span className="text-[#ef4444] font-bold">COURT RECORD: ARCHIVED</span>
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <span className="text-[#cbd5e1] text-[11px] font-serif">Official Finding:</span>
                    <span className="px-2 py-0.5 bg-[#450a0a] text-[#f87171] border border-[#ef4444] font-display font-black text-xs tracking-wider">
                      PENDING/DENIED
                    </span>
                  </div>

                  <p className="text-[11px] font-serif italic text-[#94a3b8] leading-tight pt-1">
                    &ldquo;Under Statute 88, this appeal has been permanently lodged between contemplation and outright dismissal. Do not resubmit.&rdquo;
                  </p>
                </div>
              )}
            </div>

            {/* 2. RECENT DISMISSED PETITIONS LEDGER */}
            <div className="bg-[#0f1f38] border-2 border-[#d4af37] p-5 shadow-xl text-xs font-typewriter text-[#e2e8f0]">
              <div className="flex items-center justify-between border-b border-[#d4af37]/30 pb-2 mb-3">
                <div className="flex items-center gap-2">
                  <FileX2 className="w-4 h-4 text-[#ef4444]" />
                  <h4 className="font-display font-bold text-sm text-[#fef08a] uppercase tracking-wider">
                    Recent Petitions Docket
                  </h4>
                </div>
                <span className="text-[10px] text-[#94a3b8]">CLEMENCY RATE: 0.00%</span>
              </div>

              <div className="space-y-3 max-h-[380px] overflow-y-auto pr-1">
                {appeals.map((item) => (
                  <div 
                    key={item.docketNo}
                    className="p-3 bg-[#091322] border border-[#d4af37]/40 hover:border-[#fef08a] transition-colors space-y-2"
                  >
                    <div className="flex items-center justify-between text-[10px]">
                      <span className="text-[#38bdf8] font-bold">[{item.docketNo}]</span>
                      <span className="text-[#94a3b8]">{item.filedTime}</span>
                    </div>

                    <div className="font-serif font-bold text-xs text-[#fef08a]">
                      {item.petitioner}
                    </div>

                    <p className="font-serif text-[11px] text-[#cbd5e1] leading-relaxed italic">
                      &ldquo;{item.offense}&rdquo;
                    </p>

                    <div className="flex items-center justify-between pt-1 border-t border-[#d4af37]/20 text-[10px]">
                      <span className="text-[#94a3b8] truncate max-w-[120px]">
                        Excuse: {item.pleaBasis.slice(0, 24)}...
                      </span>
                      {/* PROMINENT STATUS INDICATOR ALWAYS SHOWS PENDING/DENIED */}
                      <span className="px-1.5 py-0.5 bg-[#450a0a] text-[#fca5a5] border border-[#ef4444] font-display font-bold text-[9px] tracking-wider uppercase">
                        {item.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-3 pt-2 border-t border-[#d4af37]/30 text-center text-[10px] text-[#94a3b8] italic">
                * All rulings rendered under the Infallibility of Dubious Choices Act.
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
