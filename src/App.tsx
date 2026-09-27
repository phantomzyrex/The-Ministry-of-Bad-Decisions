import React, { useState } from 'react';
import { SecurityIntroModal } from './components/SecurityIntroModal';
import { HeaderMasthead } from './components/HeaderMasthead';
import { PublicNoticeTicker } from './components/PublicNoticeTicker';
import { DepartmentalDirectory } from './components/DepartmentalDirectory';
import { OfficialPressRelease } from './components/OfficialPressRelease';
import { CertificateOfRecognition } from './components/CertificateOfRecognition';
import { IncidentReportingTerminal } from './components/IncidentReportingTerminal';
import { UnauthorizedAppeals } from './components/UnauthorizedAppeals';
import { HistoricalArchives } from './components/HistoricalArchives';
import { OfficialFooter } from './components/OfficialFooter';
import { InteractiveRubberStamper } from './components/InteractiveRubberStamper';
import { CornerFlourish, LaurelWreath, FiligreeDivider } from './components/OrnateFlourish';

export default function App() {
  const [showSecurityAudit, setShowSecurityAudit] = useState(false);
  const [initialStampVisible, setInitialStampVisible] = useState(true);

  const handleJumpToCertificate = () => {
    const el = document.getElementById('certificate-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleJumpToAppeals = () => {
    const el = document.getElementById('unauthorized-appeals-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleJumpToHistorical = () => {
    const el = document.getElementById('historical-archives-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleApplyPageStamp = () => {
    setInitialStampVisible(false);
    setTimeout(() => {
      setInitialStampVisible(true);
    }, 100);
  };

  const handlePrintPage = () => {
    window.print();
  };

  return (
    <div className="min-h-screen parchment-bg watermark-pattern text-[#1c1917] flex flex-col relative selection:bg-[#8b1828] selection:text-[#fef08a] overflow-x-hidden w-full max-w-full">
      
      {/* Interactive Rubber Stamper Tool Floating Dock */}
      <InteractiveRubberStamper />

      {/* Security Clearance Loading Protocol Modal */}
      <SecurityIntroModal 
        isOpen={showSecurityAudit} 
        onClose={() => setShowSecurityAudit(false)} 
      />

      {/* Page Load Animated Initial Stamp (Floating in corner on desktop) */}
      {initialStampVisible && (
        <div 
          onClick={handleApplyPageStamp}
          className="fixed top-16 right-4 md:right-10 z-30 cursor-pointer pointer-events-auto"
          title="Click to re-stamp Sovereign Approval"
        >
          <div className="rubber-stamp animate-stamp bg-[#fdf8ee]/80 backdrop-blur-xs shadow-lg">
            <div className="text-[9px] font-typewriter tracking-widest -mb-1 text-center">SOVEREIGN SEAL</div>
            <div className="text-xs md:text-sm font-display font-black tracking-widest text-center">CLASSIFIED ∞</div>
            <div className="text-[8px] font-typewriter tracking-wider text-center">NO APPEAL PERMITTED</div>
          </div>
        </div>
      )}

      {/* 1. Grand Masthead & Top Government Ribbon */}
      <HeaderMasthead 
        onReopenSecurityAudit={() => setShowSecurityAudit(true)}
        onJumpToCertificate={handleJumpToCertificate}
        onJumpToAppeals={handleJumpToAppeals}
        onJumpToHistorical={handleJumpToHistorical}
        onApplyPageStamp={handleApplyPageStamp}
        onPrintPage={handlePrintPage}
      />

      {/* 2. Public Notice Scrolling/Static Ticker */}
      <PublicNoticeTicker />

      {/* Main Content Sections */}
      <main className="flex-1 w-full">
        {/* Section II: Departmental Directory Grid */}
        <DepartmentalDirectory />

        {/* Section III: Official Gazette & Stamped Press Release */}
        <OfficialPressRelease />

        {/* Section IV: Certificate of Dubious Merit (Diploma Award) */}
        <CertificateOfRecognition />

        {/* Section V: Form 99-Z Citizen Self-Reporting Ledger */}
        <IncidentReportingTerminal />

        {/* Section VI: Unauthorized Appeals & Sovereign Clemency Tribunal */}
        <UnauthorizedAppeals />

        {/* Section VII: Historical Blunder Archives (AI Redacted Teletype) */}
        <HistoricalArchives />
      </main>

      {/* 3. Official Dense Disclaimers & Department Seals Footer */}
      <OfficialFooter />

    </div>
  );
}
