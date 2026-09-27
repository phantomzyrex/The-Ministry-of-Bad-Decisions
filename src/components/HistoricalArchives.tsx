import React, { useState } from 'react';
import { HistoricalBlunderRecord } from '../types';
import { CornerFlourish, FiligreeDivider, WaxSealGraphic } from './OrnateFlourish';
import { 
  FileText, 
  Sparkles, 
  Search, 
  Eye, 
  EyeOff, 
  Stamp, 
  Printer, 
  Copy, 
  Check, 
  FolderArchive, 
  Calendar, 
  User, 
  ShieldAlert, 
  History, 
  RotateCw,
  Clock
} from 'lucide-react';

const PRE_SEEDED_HISTORICAL_RECORDS: HistoricalBlunderRecord[] = [
  {
    id: 'hist-rome-44bc',
    caseFileNo: 'DKT-ROME-44BC',
    dateOrEra: '15th March, 44 BC (Late Antiquity)',
    historicalFigureOrGroup: 'Gaius Julius Caesar & The Senate Planning Committee',
    title: 'THE DISMISSED CALENDAR NOTIFICATION INCIDENT',
    classificationLevel: 'TOP REGRET',
    redactedText: 'On the morning of the Ides, the Consul was handed ████████ parchment scroll explicitly warning that ████████ senators were concealing ████████ beneath their togas. The Consul remarked: "It is probably just ████████ wishing to discuss aqueduct taxation," and proceeded to the Theatre of Pompey without ████████ bodyguards.',
    unredactedText: 'On the morning of the Ides, the Consul was handed an urgent handwritten parchment scroll explicitly warning that thirty-eight disgruntled senators were concealing pointed iron daggers beneath their togas. The Consul remarked: "It is probably just Publius wishing to discuss aqueduct taxation," and proceeded to the Theatre of Pompey without his imperial Germanic bodyguards.',
    historicalContext: 'Foundational case study in dismissing urgent push notifications and calendar event warnings in the Mediterranean theater.',
    officialMinisterialRuling: 'RATIFIED AS IRREVERSIBLE FOLLY. Citizens are reminded that ignoring urgent reminders never results in a tranquil afternoon.',
    archivalOfficer: 'Curator Marcus Aurelius Facepalm',
  },
  {
    id: 'hist-troy-1184bc',
    caseFileNo: 'DKT-TROY-1184BC',
    dateOrEra: '12th Century BC (Aegean Bronze Age)',
    historicalFigureOrGroup: 'The Trojan Municipal Customs and Quarantine Authority',
    title: 'THE UNVETTED WOODEN EQUINE RECEPTION PROTOCOL',
    classificationLevel: 'CLASSIFIED ∞',
    redactedText: 'The City Council observed a colossal ████████ pine wooden quadruped abandoned outside the Skaian gates by ████████ Greek armada. Priest Laocoön screamed: "Do not bring ████████ inside!" Council promptly voted ████████ to 1 to haul the horse inside because "it makes for splendid ████████ city square decor."',
    unredactedText: 'The City Council observed a colossal seventy-foot hollow pine wooden quadruped abandoned outside the Skaian gates by the departing Greek armada. Priest Laocoön screamed: "Do not bring this suspicious effigy inside!" Council promptly voted 14 to 1 to haul the horse inside because "it makes for splendid rustic aesthetic city square decor."',
    historicalContext: 'Demonstrates the hazards of accepting unverified courier deliveries without checking parcel contents.',
    officialMinisterialRuling: 'SOVEREIGN CLASSIFICATION: CATASTROPHIC REGRET. The Council is awarded the Bronze Laurel of Terminal Gullibility.',
    archivalOfficer: 'Chief Inspector Priam Regrettus',
  },
  {
    id: 'hist-crecy-1346',
    caseFileNo: 'DKT-MED-1346',
    dateOrEra: '26th August, 1346 (Hundred Years War)',
    historicalFigureOrGroup: 'The Genoese Mercenary Crossbow Detachment',
    title: 'THE WET BOWSTRING PRECIPITATION MISADVENTURE',
    classificationLevel: 'EYES ONLY',
    redactedText: 'Preceding the clash at Crécy, a sudden thunderstorm soaked the field. The English archers detached and concealed their bowstrings in ████████. The Genoese commander declared: "Water is merely ████████ for Italian hemp." Upon drawing bows, strings went completely slack like ████████ noodles, causing the king to shout ████████ and order his own cavalry to trample them.',
    unredactedText: 'Preceding the clash at Crécy, a sudden thunderstorm soaked the field. The English archers detached and concealed their bowstrings inside dry woolen caps. The Genoese commander declared: "Water is merely refreshing tonic for Italian hemp." Upon drawing bows, strings went completely slack like overboiled spaghetti noodles, causing the French king to shout treasonous expletives and order his own cavalry to trample them.',
    historicalContext: 'Classic failure to consult meteorological radar prior to commencing strategic operations.',
    officialMinisterialRuling: 'MANDATORY LESSON IN FABRIC HYGROSCOPY. Crossbowmen exempted from all future outdoor gatherings.',
    archivalOfficer: 'Master Scribe Alistair Wet-Feather',
  },
  {
    id: 'hist-vict-1888',
    caseFileNo: 'DKT-VICT-1888',
    dateOrEra: 'November 1888 (High Victorian London)',
    historicalFigureOrGroup: 'The Royal Society of Polar Haberdashery',
    title: 'THE 40-POUND VELVET TOP HAT ARCTIC EXPEDITION',
    classificationLevel: 'EYES ONLY',
    redactedText: 'Expedition Commander Sir Humphrey ████████ embarked upon the Northwest Passage equipped with 14 crates of ████████ and 62 beaver-felt top hats. When crew complained of frostbite, Sir Humphrey declared: "A gentleman in ████████ is impervious to ████████ degrees below zero." All sledges sank within ████████ yards.',
    unredactedText: 'Expedition Commander Sir Humphrey Chutney-Smythe embarked upon the Northwest Passage equipped with 14 crates of lavender marmalade and 62 beaver-felt top hats. When crew complained of frostbite, Sir Humphrey declared: "A gentleman in proper tailored haberdashery is impervious to forty-eight degrees below zero." All sledges sank within eighty yards.',
    historicalContext: 'Severe prioritization of sartorial superiority over thermal physics in the Canadian archipelago.',
    officialMinisterialRuling: 'ARCHIVALLY SEALED. Form 102 (Frozen Dignity) applied with sovereign prejudice.',
    archivalOfficer: 'Arch-Archivist Lord Percival Shiver',
  },
  {
    id: 'hist-marathon-1904',
    caseFileNo: 'DKT-OLYMP-1904',
    dateOrEra: '30th August, 1904 (St. Louis Summer Olympics)',
    historicalFigureOrGroup: 'The Men\'s Olympic Marathon Medical Board',
    title: 'THE RAT POISON & BRANDY ATHLETIC TONIC TRIAL',
    classificationLevel: 'ULTRA-SECRET',
    redactedText: 'During the 90-degree marathon on dusty dirt roads, competitor Thomas Hicks collapsed at mile 19. His trainers administered a cocktail of raw egg whites, ████████ milligrams of strychnine (rat poison), and several tumblers of ████████ cognac. Hicks hallucinated that he was a ████████, staggered across the finish line, and immediately required ████████ physicians to prevent organ failure.',
    unredactedText: 'During the 90-degree marathon on dusty dirt roads, competitor Thomas Hicks collapsed at mile 19. His trainers administered a cocktail of raw egg whites, two milligrams of strychnine (rat poison), and several tumblers of French cognac. Hicks hallucinated that he was a celestial mechanical locomotive, staggered across the finish line, and immediately required four physicians to prevent total organ failure.',
    historicalContext: 'Early sports medicine experiment proving that rodent extermination chemicals are poor substitutes for water.',
    officialMinisterialRuling: 'GOLD MEDAL SUSTAINED. Trainers appointed to the Ministry of Creative Malpractice.',
    archivalOfficer: 'Surgeon General Barnaby Twitch',
  },
  {
    id: 'hist-comp-1976',
    caseFileNo: 'DKT-COMP-1976',
    dateOrEra: 'April 1976 (Silicon Valley Early Era)',
    historicalFigureOrGroup: 'The Anonymous Investor Who Sold 10% For An Inflatable Boat',
    title: 'THE TEN-PERCENT EQUITY EXCHANGE FOR WATERCRAFT',
    classificationLevel: 'ULTRA-SECRET',
    redactedText: 'Founding investor traded his 10% stake in ████████ Garage Computer Venture for ████████ dollars and a used rubber ████████. Present-day valuation of surrendered shares: $████████ billion. Petitioner currently operates ████████ rental shop in Reno, Nevada.',
    unredactedText: 'Founding investor traded his 10% stake in two-man Garage Computer Venture for eight hundred dollars and a used rubber inflatable dinghy. Present-day valuation of surrendered shares: $340 billion. Petitioner currently operates an unlicensed paddleboat rental shop in Reno, Nevada.',
    historicalContext: 'Statutory milestone in premature fiscal divestment and acute prospective remorse.',
    officialMinisterialRuling: 'PETITION FOR RETROACTIVE CORRECTION DENIED. Status perpetually PENDING/DENIED.',
    archivalOfficer: 'Comptroller General Walter Cashless',
  },
];

const HISTORICAL_ERAS = [
  'All Historical Eras',
  'Ancient Antiquity (Rome, Troy, Egypt, Greece)',
  'The Middle Ages & Renaissance',
  'Victorian & Industrial Misadventures',
  '20th Century & Early Computing',
];

export const HistoricalArchives: React.FC = () => {
  const [records, setRecords] = useState<HistoricalBlunderRecord[]>(PRE_SEEDED_HISTORICAL_RECORDS);
  const [selectedRecordId, setSelectedRecordId] = useState<string>(PRE_SEEDED_HISTORICAL_RECORDS[0].id);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedEra, setSelectedEra] = useState('All Historical Eras');
  const [isDeclassifiedView, setIsDeclassifiedView] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [customKeyword, setCustomKeyword] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const selectedRecord = records.find((r) => r.id === selectedRecordId) || records[0];

  const filteredRecords = records.filter((r) => {
    const matchesSearch = 
      r.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.historicalFigureOrGroup.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.caseFileNo.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.dateOrEra.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesEra = 
      selectedEra === 'All Historical Eras' ||
      (selectedEra.includes('Ancient') && (r.dateOrEra.includes('BC') || r.dateOrEra.includes('Antiquity'))) ||
      (selectedEra.includes('Middle') && (r.dateOrEra.includes('1346') || r.dateOrEra.includes('Century') || r.dateOrEra.includes('War'))) ||
      (selectedEra.includes('Victorian') && (r.dateOrEra.includes('Victorian') || r.dateOrEra.includes('1888') || r.dateOrEra.includes('1904'))) ||
      (selectedEra.includes('20th') && (r.dateOrEra.includes('1976') || r.dateOrEra.includes('1904') || r.dateOrEra.includes('20th')));

    return matchesSearch && matchesEra;
  });

  const handleGenerateRecord = async () => {
    setIsGenerating(true);
    try {
      const response = await fetch('/api/generate-historical-record', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          era: selectedEra,
          customKeyword: customKeyword.trim() || undefined,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to summon historical record');
      }

      const newRecord: HistoricalBlunderRecord = await response.json();
      setRecords([newRecord, ...records]);
      setSelectedRecordId(newRecord.id);
      setCustomKeyword('');
    } catch (err) {
      console.error('Error querying historical blunder generator:', err);
      // Fallback local generated record if fetch failed
      const fallbackId = `local-${Date.now()}`;
      const emergencyRecord: HistoricalBlunderRecord = {
        id: fallbackId,
        caseFileNo: `DKT-EMERG-${Math.floor(1000 + Math.random() * 9000)}`,
        dateOrEra: 'Circa 1620 (Jacobean Epoch)',
        historicalFigureOrGroup: 'The Guild of Overconfident Navigators',
        title: 'THE DISCARDED MAGNETIC COMPASS COMPLAINT',
        classificationLevel: 'CLASSIFIED ∞',
        redactedText: 'Ship captain threw the ████████ navigational lodestone overboard, asserting: "A true sailor of ████████ navigates solely by smell and ████████." Vessel discovered three weeks later lodged firmly in ████████ duck pond.',
        unredactedText: 'Ship captain threw the brass-encased navigational lodestone overboard, asserting: "A true sailor of the Crown navigates solely by smell and intuition." Vessel discovered three weeks later lodged firmly in a provincial duck pond.',
        historicalContext: 'Arrogant refusal of instrument telemetry in favor of personal hubris.',
        officialMinisterialRuling: 'RATIFIED AS REVERSED NAVIGATION. Captain awarded honorary title of Duck Pond Admiral.',
        archivalOfficer: 'Chief Scribe Theobald Compass-Loser',
        isCustomGenerated: true,
      };
      setRecords([emergencyRecord, ...records]);
      setSelectedRecordId(emergencyRecord.id);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleCopy = (rec: HistoricalBlunderRecord) => {
    const text = `[THE MINISTRY OF BAD DECISIONS - HISTORICAL DOSSIER]\nCase File: ${rec.caseFileNo}\nTitle: ${rec.title}\nEra: ${rec.dateOrEra}\nFigure: ${rec.historicalFigureOrGroup}\n\nTEXT:\n${isDeclassifiedView ? rec.unredactedText : rec.redactedText}\n\nRuling: ${rec.officialMinisterialRuling}`;
    navigator.clipboard?.writeText(text);
    setCopiedId(rec.id);
    setTimeout(() => setCopiedId(null), 3000);
  };

  const renderRedactedSpans = (text: string) => {
    // Splits on the block characters ████████ or [REDACTED]
    const parts = text.split(/(████████|\[REDACTED\])/g);
    return parts.map((part, i) => {
      if (part === '████████' || part === '[REDACTED]') {
        return (
          <span
            key={i}
            className="inline-block bg-[#111] text-transparent select-none px-1.5 py-0.5 mx-0.5 rounded-xs transition-colors hover:bg-[#333] hover:text-[#fff] cursor-help font-mono"
            title="TOP SECRET REDACTION • Hover or toggle 'Declassify' to view unredacted truth"
          >
            REDACTED
          </span>
        );
      }
      return <span key={i}>{part}</span>;
    });
  };

  return (
    <section id="historical-archives-section" className="relative w-full py-8 px-4 bg-[#120d08] text-[#f7f0e1] border-b-4 border-double border-[#d4af37]">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6">
          <div className="inline-block bg-[#8b1828] text-[#fef08a] border border-[#d4af37] px-4 py-1 font-typewriter text-xs font-bold tracking-[0.25em] uppercase mb-1.5">
            SECTION VII • DECLASSIFIED ANCIENT CATASTROPHES
          </div>
          <h2 className="text-3xl md:text-5xl font-royal font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ffe599] via-[#d4af37] to-[#e6c875] tracking-wide">
            HISTORICAL BLUNDER ARCHIVES
          </h2>
          <p className="font-serif italic text-xs md:text-sm text-[#cbd5e1] mt-1">
            Redacted Sovereign Intelligence Regarding Humanity&apos;s Most Pompous and Avoidable Historical Misjudgments
          </p>
          <FiligreeDivider className="my-3" title="RESTRICTED TYPEWRITER DOSSIERS" />
        </div>

        {/* ══════════════════════════════════════════════════════════════ */}
        {/* TOP INTERACTIVE COMMAND BAR: AI GENERATOR & SEARCH            */}
        {/* ══════════════════════════════════════════════════════════════ */}
        <div className="mb-6 p-4 bg-[#1a1209] border-2 border-[#d4af37] shadow-xl text-xs font-typewriter text-[#fef08a]">
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
            
            {/* AI Generator Controls */}
            <div className="flex-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
              <select
                value={selectedEra}
                onChange={(e) => setSelectedEra(e.target.value)}
                className="bg-[#0b0805] border border-[#d4af37] px-3 py-2 text-[#fef08a] text-xs focus:outline-none focus:border-[#fde047] cursor-pointer"
              >
                {HISTORICAL_ERAS.map((era) => (
                  <option key={era} value={era}>{era}</option>
                ))}
              </select>

              <input
                type="text"
                value={customKeyword}
                onChange={(e) => setCustomKeyword(e.target.value)}
                placeholder="Optional motif (e.g. Emperor, Armor, Hat, Boat)..."
                maxLength={40}
                className="flex-1 bg-[#0b0805] border border-[#d4af37] px-3 py-2 text-[#fef08a] text-xs focus:outline-none focus:border-[#fde047]"
              />

              <button
                onClick={handleGenerateRecord}
                disabled={isGenerating}
                className="px-4 py-2 bg-[#8b1828] hover:bg-[#a11b30] text-[#fef08a] border border-[#d4af37] font-display font-bold uppercase tracking-wider cursor-pointer flex items-center justify-center gap-2 shadow-md transition-all disabled:opacity-50 shrink-0"
              >
                {isGenerating ? (
                  <>
                    <RotateCw className="w-3.5 h-3.5 animate-spin text-[#fbbf24]" />
                    <span>Transcribing Teletype...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-3.5 h-3.5 text-[#fbbf24]" />
                    <span>Declassify New Blunder (AI)</span>
                  </>
                )}
              </button>
            </div>

            {/* Redaction Toggle Mode */}
            <div className="flex items-center justify-end gap-2 border-t lg:border-t-0 pt-2 lg:pt-0 border-[#d4af37]/30">
              <button
                onClick={() => setIsDeclassifiedView(!isDeclassifiedView)}
                className={`px-3 py-2 font-display font-bold text-xs uppercase tracking-wider border cursor-pointer flex items-center gap-1.5 transition-colors ${
                  isDeclassifiedView
                    ? 'bg-[#15803d] text-white border-green-400'
                    : 'bg-[#311c0f] text-[#fde047] border-[#d4af37]'
                }`}
                title="Toggle between Black-Bar Censored and Unredacted Plaintext"
              >
                {isDeclassifiedView ? (
                  <>
                    <EyeOff className="w-3.5 h-3.5" />
                    <span>Show Redactions</span>
                  </>
                ) : (
                  <>
                    <Eye className="w-3.5 h-3.5" />
                    <span>Declassify / Unredact</span>
                  </>
                )}
              </button>
            </div>

          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════════ */}
        {/* TWO-COLUMN DOCUMENT INTERFACE: DOSSIER LIST & VINTAGE SHEET   */}
        {/* ══════════════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* LEFT: ARCHIVE DOCKET INDEX (4 Cols) */}
          <div className="lg:col-span-4 bg-[#18110a] border-2 border-[#d4af37] p-4 shadow-xl">
            <div className="flex items-center justify-between border-b border-[#d4af37]/40 pb-2 mb-3">
              <div className="flex items-center gap-2">
                <FolderArchive className="w-4 h-4 text-[#d4af37]" />
                <h3 className="font-display font-bold text-xs text-[#fef08a] uppercase tracking-wider">
                  Dossier Index
                </h3>
              </div>
              <span className="font-typewriter text-[10px] text-[#94a3b8]">
                {filteredRecords.length} Files Found
              </span>
            </div>

            {/* Search Input for Archives */}
            <div className="relative mb-3">
              <Search className="w-3.5 h-3.5 text-[#94a3b8] absolute left-2.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search archive dockets..."
                className="w-full bg-[#0a0704] border border-[#78350f] pl-8 pr-2 py-1.5 text-xs text-[#fef08a] font-typewriter focus:outline-none focus:border-[#d4af37]"
              />
            </div>

            {/* List of Historical Files */}
            <div className="space-y-2 max-h-[500px] overflow-y-auto pr-1">
              {filteredRecords.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedRecordId(item.id)}
                  className={`p-2.5 border text-left cursor-pointer transition-all ${
                    selectedRecordId === item.id
                      ? 'bg-[#3d181e] border-[#ef4444] text-[#fff]'
                      : 'bg-[#0f0b07] border-[#78350f]/60 hover:border-[#d4af37] text-[#cbd5e1]'
                  }`}
                >
                  <div className="flex items-center justify-between font-typewriter text-[9px] mb-1">
                    <span className="font-bold text-[#38bdf8]">[{item.caseFileNo}]</span>
                    <span className={`px-1 py-0.2 border text-[8px] font-bold ${
                      item.classificationLevel.includes('CLASSIFIED') || item.classificationLevel.includes('TOP')
                        ? 'border-red-500 bg-red-950 text-red-300'
                        : 'border-yellow-500 bg-yellow-950 text-yellow-300'
                    }`}>
                      {item.classificationLevel}
                    </span>
                  </div>

                  <h4 className="font-royal font-bold text-xs leading-snug line-clamp-2">
                    {item.title}
                  </h4>

                  <div className="mt-1 flex items-center justify-between text-[9px] font-typewriter text-[#94a3b8]">
                    <span className="truncate max-w-[130px]">{item.dateOrEra}</span>
                    {item.isCustomGenerated && (
                      <span className="text-[#fde047] font-bold text-[8px] uppercase">
                        AI DECLASSIFIED
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: THE VINTAGE TYPEWRITER DOCUMENT CANVAS (8 Cols) */}
          <div className="lg:col-span-8 relative">
            
            {/* Manila Folder Tab */}
            <div className="inline-block bg-[#e8dcba] border-t-2 border-x-2 border-[#78350f] px-5 py-1 text-[11px] font-typewriter font-bold text-[#451a03] uppercase tracking-widest rounded-t-sm shadow-sm">
              CLASSIFIED DOSSIER FILE: {selectedRecord.caseFileNo}
            </div>

            {/* Vintage Typewriter Sheet */}
            <div className="relative bg-[#faf4e6] text-[#1c1917] border-4 border-double border-[#78350f] p-6 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.85)] font-typewriter parchment-card overflow-hidden">
              
              {/* Paperclip Graphic in top-right */}
              <div className="absolute top-2 right-6 pointer-events-none select-none opacity-85">
                <svg width="24" height="60" viewBox="0 0 24 60" fill="none">
                  <path
                    d="M8 8 V45 C8 49 16 49 16 45 V12 C16 6 4 6 4 12 V50 C4 56 20 56 20 50 V18"
                    stroke="#555"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              {/* Corner Flourishes */}
              <CornerFlourish position="top-left" className="absolute top-2 left-2 w-8 h-8 text-[#78350f]/60" />
              <CornerFlourish position="bottom-left" className="absolute bottom-2 left-2 w-8 h-8 text-[#78350f]/60" />
              <CornerFlourish position="bottom-right" className="absolute bottom-2 right-2 w-8 h-8 text-[#78350f]/60" />

              {/* Header Stamp Lockup */}
              <div className="border-b-2 border-[#78350f] pb-4 mb-6">
                <div className="flex flex-wrap items-center justify-between gap-2 text-[10px] text-[#78350f] font-bold uppercase tracking-wider mb-2">
                  <span>CENTRAL HISTORICAL CATASTROPHE REGISTRY</span>
                  <span>RECORD ID: {selectedRecord.id}</span>
                </div>

                {/* Stamped Classification Banner */}
                <div className="inline-block border-2 border-[#b91c1c] text-[#b91c1c] px-3 py-0.5 text-xs font-bold tracking-widest uppercase mb-3 transform -rotate-1 bg-[#fee2e2]/40">
                  ⚠️ {selectedRecord.classificationLevel} — EYES ONLY FOR MINISTRY SCRIBES
                </div>

                <h3 className="font-royal font-bold text-xl sm:text-2xl text-[#1f2937] leading-snug">
                  {selectedRecord.title}
                </h3>

                <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs pt-2 border-t border-[#78350f]/30 text-[#451a03]">
                  <div>
                    <span className="font-bold text-[#78350f]">HISTORICAL ERA:</span> {selectedRecord.dateOrEra}
                  </div>
                  <div>
                    <span className="font-bold text-[#78350f]">SUBJECT(S):</span> {selectedRecord.historicalFigureOrGroup}
                  </div>
                </div>
              </div>

              {/* Body: Redacted Typewriter Text */}
              <div className="space-y-4 text-xs sm:text-sm leading-relaxed text-[#1c1917] bg-[#f7eed9] p-4 sm:p-5 border border-[#78350f]/40 relative">
                
                <div className="text-[10px] font-bold tracking-wider text-[#78350f] uppercase border-b border-[#78350f]/20 pb-1 mb-2 flex items-center justify-between">
                  <span>EXECUTIVE DECLASSIFIED TRANSCRIPT:</span>
                  <span className="text-[9px] text-[#991b1b]">
                    {isDeclassifiedView ? 'STATUS: UNREDACTED (CLEAR)' : 'STATUS: CENSORED (BLACK BARS ACTIVE)'}
                  </span>
                </div>

                <p className="font-typewriter text-justify leading-loose">
                  {isDeclassifiedView ? selectedRecord.unredactedText : renderRedactedSpans(selectedRecord.redactedText)}
                </p>

                {/* Historical Context Box */}
                <div className="mt-4 pt-3 border-t border-[#78350f]/30 text-xs italic text-[#4b5563]">
                  <strong>Curatorial Note:</strong> {selectedRecord.historicalContext}
                </div>
              </div>

              {/* Official Ministerial Ruling & Red Rubber Stamp */}
              <div className="mt-6 pt-4 border-t-2 border-[#78350f] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                
                {/* Ruling text */}
                <div className="flex-1 space-y-1">
                  <span className="text-[10px] font-bold text-[#8b1828] uppercase tracking-wider block">
                    MINISTERIAL ADJUDICATION &amp; STATUTORY PENALTY:
                  </span>
                  <p className="text-xs font-serif text-[#1e1309] leading-snug">
                    {selectedRecord.officialMinisterialRuling}
                  </p>
                  <div className="text-[10px] text-[#6b7280] pt-1">
                    Archived by: {selectedRecord.archivalOfficer}
                  </div>
                </div>

                {/* Stamped Red Seal */}
                <div className="shrink-0">
                  <div className="rubber-stamp text-center transform -rotate-3 text-[10px] sm:text-xs">
                    <div>SOVEREIGN CROWN</div>
                    <div className="font-bold font-display tracking-widest">IRREVOCABLE</div>
                    <div className="text-[8px] font-mono">CODE: 1742-HIST</div>
                  </div>
                </div>

              </div>

              {/* Document Action Buttons */}
              <div className="mt-6 pt-3 border-t border-[#78350f]/30 flex flex-wrap items-center justify-between gap-2 text-xs">
                <span className="text-[10px] text-[#78350f] italic">
                  * Hover over black bars or toggle &apos;Declassify&apos; to expose historical folly.
                </span>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleCopy(selectedRecord)}
                    className="px-3 py-1.5 bg-[#26170d] hover:bg-[#382214] text-[#fef08a] border border-[#78350f] font-bold uppercase tracking-wider cursor-pointer flex items-center gap-1.5 transition-colors"
                  >
                    {copiedId === selectedRecord.id ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-green-400" />
                        <span>Dossier Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Dossier</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={() => window.print()}
                    className="px-3 py-1.5 bg-[#8b1828] hover:bg-[#a11b30] text-[#fef08a] border border-[#d4af37] font-bold uppercase tracking-wider cursor-pointer flex items-center gap-1.5 transition-colors shadow-sm"
                  >
                    <Printer className="w-3.5 h-3.5" />
                    <span>Print Dossier</span>
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
