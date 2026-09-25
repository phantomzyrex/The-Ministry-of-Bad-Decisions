import React, { useState } from 'react';
import { CornerFlourish, LaurelWreath, WaxSealGraphic, FiligreeDivider } from './OrnateFlourish';
import { Award, Printer, Check, Sparkles, RefreshCw, Stamp } from 'lucide-react';

const PRESET_BLUNDERS = [
  'Cutting One’s Own Bangs with Kitchen Poultry Shears at 01:15 AM',
  'Purchasing 4 Books While Having 42 Unread Volumes Upon the Bedside Table',
  'Volunteering to Coordinate an 18-Person Destination Bachelor Gathering',
  'Sending an Acoustic Guitar Voice Memo to an Acquaintance at 02:30 AM',
  'Announcing an Unwavering Intent to Wake Up at 5:00 AM Starting Tomorrow',
  'Attempting to Assemble Swedish Particleboard Without Consulting Diagram 1',
  'Drinking Three Consecutive Double Espressos After 8:00 PM on a Tuesday',
  'Replying "All" to 4,200 Colleagues to Request Removal from the Email List',
];

const PRESET_NAMES = [
  'The Right Honourable Civilian',
  'Baron of Unopened Courier Parcels',
  'Viscount of Perpetual Snooze Alarms',
  'Grand Duchess of Online Shopping Carts',
  'Lord High Commander of Terrible Timing',
];

export const CertificateOfRecognition: React.FC = () => {
  const [recipientName, setRecipientName] = useState('The Right Honourable Civilian');
  const [blunderCategory, setBlunderCategory] = useState(PRESET_BLUNDERS[0]);
  const [isCustomBlunder, setIsCustomBlunder] = useState(false);
  const [customBlunder, setCustomBlunder] = useState('');
  const [stampKey, setStampKey] = useState(0);
  const [isPrintedNotice, setIsPrintedNotice] = useState(false);

  const activeBlunder = isCustomBlunder && customBlunder.trim() ? customBlunder : blunderCategory;

  const handlePrint = () => {
    window.print();
    setIsPrintedNotice(true);
    setTimeout(() => setIsPrintedNotice(false), 4000);
  };

  const handleRandomize = () => {
    const randomName = PRESET_NAMES[Math.floor(Math.random() * PRESET_NAMES.length)];
    const randomBlunder = PRESET_BLUNDERS[Math.floor(Math.random() * PRESET_BLUNDERS.length)];
    setRecipientName(randomName);
    setBlunderCategory(randomBlunder);
    setIsCustomBlunder(false);
    setStampKey((k) => k + 1);
  };

  return (
    <section id="certificate-section" className="relative w-full py-8 px-4 bg-[#0a1424] text-[#f7f0e1] border-b-4 border-double border-[#d4af37]">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-6">
          <div className="inline-block bg-[#8b1828] text-[#fef08a] border border-[#d4af37] px-4 py-1 font-typewriter text-xs font-bold tracking-[0.25em] uppercase mb-1.5">
            SECTION IV • IMPERIAL HONOURS &amp; DECORATIONS
          </div>
          <h2 className="text-3xl md:text-5xl font-royal font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ffe8a3] via-[#d4af37] to-[#e6c875] tracking-wide">
            CERTIFICATE OF DUBIOUS MERIT
          </h2>
          <p className="font-serif italic text-xs md:text-sm text-[#cbd5e1] mt-0.5 max-w-xl mx-auto">
            Conferred by Sovereign Warrant to Recognize Exceptional Commitment to Ill-Advised Life Choices
          </p>
          <FiligreeDivider className="my-3" title="SOVEREIGN CONFERMENT" />
        </div>

        {/* Certificate Customization Controls Panel */}
        <div className="mb-5 p-4 md:p-5 bg-[#0f2038] border-2 border-[#d4af37] text-xs font-typewriter text-[#e2e8f0] shadow-xl">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-[#d4af37]/30 pb-4 mb-4">
            <div className="flex items-center gap-2 text-sm font-display font-bold text-[#fef08a]">
              <Sparkles className="w-4 h-4 text-[#eab308]" />
              <span>MINISTERIAL SCRIBE REQUISITION FORM</span>
            </div>
            <button
              onClick={handleRandomize}
              className="px-3 py-1.5 bg-[#1b2a47] hover:bg-[#253d66] text-[#fef08a] border border-[#d4af37] cursor-pointer flex items-center gap-1.5 uppercase font-bold tracking-wider transition-colors"
            >
              <RefreshCw className="w-3.5 h-3.5" /> Randomize Citation
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Recipient Name Input */}
            <div>
              <label className="block text-[11px] uppercase tracking-wider text-[#94a3b8] mb-1 font-bold">
                Recipient Sovereign Title / Civilian Name:
              </label>
              <input
                type="text"
                value={recipientName}
                onChange={(e) => setRecipientName(e.target.value)}
                maxLength={45}
                className="w-full bg-[#070e1a] border border-[#d4af37] px-3 py-2 text-[#fef08a] font-serif text-sm focus:outline-none focus:border-[#fef08a]"
                placeholder="Enter civilian name..."
              />
            </div>

            {/* Blunder Category Select */}
            <div>
              <label className="block text-[11px] uppercase tracking-wider text-[#94a3b8] mb-1 font-bold">
                Categorical Folly / Distinguished Blunder:
              </label>
              {!isCustomBlunder ? (
                <div className="space-y-1.5">
                  <select
                    value={blunderCategory}
                    onChange={(e) => {
                      if (e.target.value === 'CUSTOM') {
                        setIsCustomBlunder(true);
                      } else {
                        setBlunderCategory(e.target.value);
                      }
                    }}
                    className="w-full bg-[#070e1a] border border-[#d4af37] px-3 py-2 text-[#fef08a] text-xs focus:outline-none focus:border-[#fef08a] cursor-pointer"
                  >
                    {PRESET_BLUNDERS.map((b, i) => (
                      <option key={i} value={b}>{b}</option>
                    ))}
                    <option value="CUSTOM">-- ENTER CUSTOM DUBIOUS DECISION --</option>
                  </select>
                </div>
              ) : (
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={customBlunder}
                    onChange={(e) => setCustomBlunder(e.target.value)}
                    maxLength={90}
                    className="w-full bg-[#070e1a] border border-[#d4af37] px-3 py-2 text-[#fef08a] text-xs focus:outline-none focus:border-[#fef08a]"
                    placeholder="Describe specific bad decision..."
                  />
                  <button
                    onClick={() => setIsCustomBlunder(false)}
                    className="px-2 py-1 bg-[#8b1828] text-[#fef08a] text-[10px] border border-[#d4af37] cursor-pointer"
                  >
                    Presets
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════════ */}
        {/* THE IMPERIAL CERTIFICATE DIPLOMA CONTAINER                    */}
        {/* ══════════════════════════════════════════════════════════════ */}
        <div 
          id="printable-certificate"
          className="relative bg-[#fffdf5] text-[#1c1917] border-[12px] border-double border-[#996515] p-6 sm:p-12 shadow-[0_25px_60px_rgba(0,0,0,0.85)] parchment-card"
        >
          {/* Ornate Gold Foil Outer Hairline */}
          <div className="border-4 border-[#b8860b]/70 p-4 sm:p-8 relative">
            
            {/* Corner Filigree Flourishes */}
            <CornerFlourish position="top-left" className="absolute top-2 left-2 w-12 h-12 text-[#b8860b]" />
            <CornerFlourish position="top-right" className="absolute top-2 right-2 w-12 h-12 text-[#b8860b]" />
            <CornerFlourish position="bottom-left" className="absolute bottom-2 left-2 w-12 h-12 text-[#b8860b]" />
            <CornerFlourish position="bottom-right" className="absolute bottom-2 right-2 w-12 h-12 text-[#b8860b]" />

            {/* Certificate Header Banner */}
            <div className="text-center relative">
              <div className="flex justify-center mb-1">
                <LaurelWreath className="w-20 h-10 text-[#b8860b]" />
              </div>

              <div className="text-xs font-display tracking-[0.35em] uppercase text-[#8b1828] font-bold">
                THE HIGH SOVEREIGN REALM OF POOR JUDGEMENT
              </div>

              <h3 className="text-2xl sm:text-4xl lg:text-5xl font-royal font-bold text-[#1f2937] tracking-wider mt-2">
                CERTIFICATE OF DUBIOUS MERIT
              </h3>

              <div className="font-typewriter text-[11px] text-[#78350f] uppercase tracking-widest mt-1">
                CONFERRED UNDER ROYAL PATENT #804-FOLLY • REGISTERED IN PERPETUITY
              </div>

              <div className="w-48 h-[2px] bg-gradient-to-r from-transparent via-[#b8860b] to-transparent mx-auto my-3" />
            </div>

            {/* Proclamation Lead */}
            <div className="text-center font-serif italic text-sm text-[#4b5563] mt-2">
              Be it known to all magistrates, kinfolk, bank managers, and concerned acquaintances that:
            </div>

            {/* Recipient Name in Regal Serif */}
            <div className="text-center my-4 py-2 border-b-2 border-dashed border-[#b8860b]/60 max-w-xl mx-auto">
              <div className="text-2xl sm:text-4xl font-royal font-bold text-[#8b1828] tracking-wide">
                {recipientName || 'The Right Honourable Civilian'}
              </div>
            </div>

            {/* Certificate Citation Text */}
            <div className="text-center font-serif text-sm sm:text-base text-[#1f2937] leading-relaxed max-w-2xl mx-auto space-y-3">
              <p>
                Has, with complete disregard for sober judgment, statistical probability, and prior historical embarrassment, distinguished themselves by committing the following unprovoked act of folly:
              </p>
              
              {/* Highlighted Blunder Box */}
              <div className="p-3 bg-[#fdf2d0] border border-[#b8860b] text-base sm:text-lg font-serif font-bold text-[#78350f] shadow-inner italic">
                &ldquo;{activeBlunder}&rdquo;
              </div>

              <p className="text-xs font-serif text-[#4b5563] italic">
                The Sovereign Ministry hereby grants sovereign immunity from ever being held sensible, practical, or financially prudent on this matter.
              </p>
            </div>

            {/* Bottom Row: Signatures, Stamp & Wax Seal */}
            <div className="mt-8 pt-6 border-t-2 border-[#b8860b]/60 flex flex-col sm:flex-row items-center justify-between gap-6 relative">
              
              {/* Official Imperial Signatory */}
              <div className="text-left order-2 sm:order-1">
                <div className="font-script text-3xl sm:text-4xl text-[#1e1309] -mb-1 transform -rotate-4 select-none">
                  Arch-Chancellor Bartholomew
                </div>
                <div className="border-t border-[#78350f] w-48 mt-1 pt-1">
                  <div className="font-display font-bold text-xs text-[#1e1309]">
                    Lord Bartholomew V. Facepalm
                  </div>
                  <div className="font-typewriter text-[9px] text-[#78350f] uppercase tracking-wider">
                    High Chancellor of Immediate Regret
                  </div>
                </div>
              </div>

              {/* Red Official Rubber Stamp */}
              <div className="order-1 sm:order-2">
                <div 
                  key={stampKey}
                  onClick={() => setStampKey((k) => k + 1)}
                  className="rubber-stamp animate-stamp cursor-pointer select-none"
                  title="Official Crown Stamp (Click to Re-Stamp)"
                >
                  <div className="text-center">
                    <div className="text-[9px] font-typewriter tracking-widest -mb-1">HER MAJESTY’S APOLOGIES</div>
                    <div className="text-sm font-display font-bold tracking-widest">CERTIFIED FOOL</div>
                    <div className="text-[8px] font-typewriter tracking-wider">STATUTE 2026-X</div>
                  </div>
                </div>
              </div>

              {/* Wax Seal Graphic */}
              <div className="order-3">
                <WaxSealGraphic 
                  text="AUTHENTIC" 
                  onClick={() => setStampKey((k) => k + 1)} 
                />
              </div>

            </div>

            {/* Latin Footer Motto */}
            <div className="mt-6 text-center text-[10px] font-serif italic text-[#78350f] tracking-widest border-t border-[#b8860b]/30 pt-2">
              • ERRARE HUMANUM EST, SED PERSISTERE DIABOLICUM •
            </div>

          </div>
        </div>

        {/* Certificate Actions Bar */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 text-xs font-display">
          <span className="font-typewriter text-[#cbd5e1] text-[11px]">
            * Ready for physical display upon refrigerator doors or framed in executive offices.
          </span>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setStampKey((k) => k + 1)}
              className="px-4 py-2 bg-[#8b1828] hover:bg-[#991b1b] text-[#fef08a] border border-[#d4af37] cursor-pointer flex items-center gap-1.5 uppercase font-bold tracking-wider transition-colors shadow-sm"
            >
              <Stamp className="w-3.5 h-3.5" /> Re-Stamp Seal
            </button>

            <button
              onClick={handlePrint}
              className="px-4 py-2 bg-[#d4af37] hover:bg-[#e5c158] text-[#1c1917] border border-[#78350f] cursor-pointer flex items-center gap-1.5 uppercase font-bold tracking-wider transition-colors shadow-md"
            >
              <Printer className="w-3.5 h-3.5" /> Print / Save Diploma
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
