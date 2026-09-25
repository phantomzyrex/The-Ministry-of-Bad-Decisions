import React, { useState } from 'react';
import { CornerFlourish, WaxSealGraphic, FiligreeDivider } from './OrnateFlourish';
import { Stamp, Check, FileText, Download, Share2, Archive, Calendar, Clock, Sparkles } from 'lucide-react';
import { PressReleaseArchiveModal, ARCHIVE_RELEASES, ArchivalPressRelease } from './PressReleaseArchiveModal';

export const OfficialPressRelease: React.FC = () => {
  const [activeRelease, setActiveRelease] = useState<ArchivalPressRelease>(ARCHIVE_RELEASES[0]);
  const [stampKey, setStampKey] = useState(0);
  const [copiedNotice, setCopiedNotice] = useState(false);
  const [isArchiveModalOpen, setIsArchiveModalOpen] = useState(false);

  const handleReStamp = () => {
    setStampKey((k) => k + 1);
  };

  const handleCopyDecree = () => {
    const textToCopy = `${activeRelease.title}\n\n${activeRelease.bodyParagraphs.join('\n\n')}\n\n— Issued by ${activeRelease.signatory}, ${activeRelease.signatoryRole}\n— Official Stamp: ${activeRelease.approvalStamp.status} at ${activeRelease.approvalStamp.timestamp}`;
    navigator.clipboard?.writeText(textToCopy);
    setCopiedNotice(true);
    setTimeout(() => setCopiedNotice(false), 3000);
  };

  const handleSelectFromArchive = (release: ArchivalPressRelease) => {
    setActiveRelease(release);
    setStampKey((k) => k + 1);
  };

  return (
    <section className="relative w-full py-8 px-4 bg-[#140c06] text-[#f7f0e1] border-b-4 border-double border-[#d4af37]">
      
      {/* Archive Modal for Past Announcements */}
      <PressReleaseArchiveModal 
        isOpen={isArchiveModalOpen}
        onClose={() => setIsArchiveModalOpen(false)}
        onSelectRelease={handleSelectFromArchive}
      />

      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-5">
          <div className="inline-block bg-[#8b1828] text-[#fef08a] border border-[#d4af37] px-4 py-1 font-typewriter text-xs font-bold tracking-[0.25em] uppercase mb-1.5">
            SECTION III • GAZETTE EXTRAORDINARY
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ffe599] via-[#d4af37] to-[#e6c875] tracking-wide">
            OFFICIAL MINISTERIAL PRESS RELEASES
          </h2>
          <p className="font-serif italic text-xs md:text-sm text-[#cbd5e1] mt-0.5">
            Binding Sovereign Decrees Ratified for Permanent Civilian Non-Compliance
          </p>

          {/* Quick Selectors & Open Archive Action */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
            {ARCHIVE_RELEASES.slice(0, 3).map((pr) => (
              <button
                key={pr.id}
                onClick={() => {
                  setActiveRelease(pr);
                  setStampKey((k) => k + 1);
                }}
                className={`px-3 py-1.5 text-xs font-typewriter tracking-wider uppercase border transition-all cursor-pointer ${
                  activeRelease.id === pr.id
                    ? 'bg-[#8b1828] text-[#fef08a] border-[#d4af37] font-bold shadow-md'
                    : 'bg-[#26170d] text-[#cbd5e1] border-[#78350f] hover:bg-[#382214]'
                }`}
              >
                {pr.id === 'pr-5am' ? '5 AM Wake-Up Edict' : pr.id === 'pr-casual-drink' ? 'Tuesday Beverage Debacle' : 'IKEA Hubris Accord'}
              </button>
            ))}

            {/* Prominent Archive Modal Trigger Button */}
            <button
              onClick={() => setIsArchiveModalOpen(true)}
              className="px-3.5 py-1.5 bg-[#450a0a] hover:bg-[#661010] text-[#fde047] border-2 border-[#d4af37] font-display font-bold text-xs tracking-wider uppercase cursor-pointer flex items-center gap-2 shadow-md transition-transform hover:scale-105"
            >
              <Archive className="w-3.5 h-3.5 text-[#fbbf24]" />
              <span>Browse Gazette Archives (1742–2026)</span>
              <span className="bg-[#78350f] text-[#fef08a] px-1.5 py-0.2 rounded-xs text-[10px] border border-[#d4af37]/60">
                {ARCHIVE_RELEASES.length} Decrees
              </span>
            </button>
          </div>
        </div>

        {/* The Official Formatted Parchment Decree Card */}
        <div className="relative bg-[#fbf6ec] text-[#1c1917] border-8 border-double border-[#78350f] p-6 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] parchment-card">
          
          {/* Corner Flourishes in Deep Burgundy */}
          <CornerFlourish position="top-left" className="absolute top-2 left-2 w-10 h-10 text-[#78350f]" />
          <CornerFlourish position="top-right" className="absolute top-2 right-2 w-10 h-10 text-[#78350f]" />
          <CornerFlourish position="bottom-left" className="absolute bottom-2 left-2 w-10 h-10 text-[#78350f]" />
          <CornerFlourish position="bottom-right" className="absolute bottom-2 right-2 w-10 h-10 text-[#78350f]" />

          {/* Inner hairline border */}
          <div className="border border-[#78350f]/40 p-4 sm:p-8 relative">
            
            {/* Decree Header */}
            <div className="text-center border-b-2 border-[#78350f] pb-4 mb-6">
              <div className="flex flex-wrap items-center justify-between text-[11px] font-typewriter text-[#78350f] font-bold uppercase tracking-widest gap-2 mb-1">
                <span>{activeRelease.dispatchNo}</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3 text-[#8b1828]" />
                  TIMESTAMP: {activeRelease.timestamp}
                </span>
                <span>{activeRelease.date}</span>
              </div>
              <div className="text-xs font-display tracking-[0.3em] uppercase text-[#8b1828] font-bold mt-2">
                {activeRelease.kicker}
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-royal font-bold text-[#1f2937] mt-3 leading-snug">
                {activeRelease.title}
              </h3>
            </div>

            {/* Decree Body Text */}
            <div className="space-y-4 font-serif text-sm sm:text-base leading-relaxed text-[#2c1d11]">
              {activeRelease.bodyParagraphs.map((para, i) => (
                <p key={i} className="text-justify font-serif text-[#1e1309] leading-relaxed">
                  {para}
                </p>
              ))}
            </div>

            {/* Statutory Reference Footnote */}
            <div className="mt-8 pt-4 border-t border-[#78350f]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-typewriter text-[#573d23]">
              <span className="italic">{activeRelease.statutoryReference}</span>
              <span className="font-bold flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-[#b45309]" />
                IMPERIAL VAULT REFERENCE: {activeRelease.approvalStamp.docketRef}
              </span>
            </div>

            {/* Signatures & Timestamped Rubber Approval Stamp */}
            <div className="mt-8 pt-6 border-t-2 border-double border-[#78350f] flex flex-col sm:flex-row items-center justify-between gap-6 relative">
              
              {/* Signatory */}
              <div className="text-left">
                <div className="font-script text-3xl sm:text-4xl text-[#1e1309] -mb-1 transform -rotate-3 select-none">
                  {activeRelease.signatory.replace('Arch-Commissioner ', '').replace('Baron ', '').replace('Lady ', '').replace('Sir ', '').replace('Countess ', '')}
                </div>
                <div className="border-t border-[#78350f] w-48 mt-1 pt-1">
                  <div className="font-display font-bold text-xs text-[#1e1309]">
                    {activeRelease.signatory}
                  </div>
                  <div className="font-typewriter text-[10px] text-[#78350f] uppercase tracking-wider">
                    {activeRelease.signatoryRole}
                  </div>
                </div>
              </div>

              {/* Timestamped Red Animated Rubber Stamp */}
              <div 
                key={stampKey}
                onClick={handleReStamp}
                className="rubber-stamp animate-stamp cursor-pointer select-none hover:scale-105 transition-transform"
                title="Official Timestamped Crown Stamp (Click to Re-Stamp)"
              >
                <div className="text-center space-y-0.5">
                  <div className="text-[9px] font-typewriter tracking-widest text-[#7f1d1d] uppercase -mb-0.5">
                    HER MAJESTY&apos;S GAZETTE
                  </div>
                  <div className="text-xs sm:text-sm font-black font-display tracking-widest text-[#991b1b]">
                    {activeRelease.approvalStamp.status}
                  </div>
                  <div className="text-[9px] font-typewriter tracking-tight font-mono text-[#b91c1c] border-t border-[#b91c1c]/40 pt-0.5">
                    STAMPED: {activeRelease.approvalStamp.timestamp}
                  </div>
                  <div className="text-[8px] font-typewriter tracking-tighter text-[#7f1d1d]">
                    BY: {activeRelease.approvalStamp.officer}
                  </div>
                </div>
              </div>

              {/* Wax Seal Graphic */}
              <div className="hidden sm:block">
                <WaxSealGraphic text="ARCHIVE" onClick={handleReStamp} />
              </div>

            </div>

          </div>

          {/* Interactive Bar below decree */}
          <div className="mt-6 flex flex-wrap items-center justify-between gap-3 pt-2 text-xs font-display">
            <span className="text-[#78350f] font-typewriter text-[11px]">
              * Click the timestamped red stamp or wax seal to re-enact the official sovereign ratification ritual.
            </span>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsArchiveModalOpen(true)}
                className="px-3 py-1.5 bg-[#78350f] hover:bg-[#8d3e12] text-[#fef08a] border border-[#d4af37] cursor-pointer flex items-center gap-1.5 uppercase font-bold tracking-wider transition-colors shadow-sm"
              >
                <Archive className="w-3.5 h-3.5" /> Open Vault
              </button>

              <button
                onClick={handleReStamp}
                className="px-3 py-1.5 bg-[#8b1828] hover:bg-[#991b1b] text-[#fef08a] border border-[#d4af37] cursor-pointer flex items-center gap-1.5 uppercase font-bold tracking-wider transition-colors shadow-sm"
              >
                <Stamp className="w-3.5 h-3.5" /> Re-Stamp
              </button>

              <button
                onClick={handleCopyDecree}
                className="px-3 py-1.5 bg-[#26170d] hover:bg-[#382214] text-[#fef3c7] border border-[#78350f] cursor-pointer flex items-center gap-1.5 uppercase font-bold tracking-wider transition-colors"
              >
                {copiedNotice ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Share2 className="w-3.5 h-3.5" />}
                {copiedNotice ? 'Decree Copied!' : 'Copy Proclamation'}
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
