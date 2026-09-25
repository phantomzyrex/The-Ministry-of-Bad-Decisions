import React, { useState } from 'react';
import { CornerFlourish, WaxSealGraphic, FiligreeDivider } from './OrnateFlourish';
import { Archive, Search, X, Calendar, Clock, Stamp, FileText, CheckCircle2, ChevronRight, Filter } from 'lucide-react';

export interface ArchivalPressRelease {
  id: string;
  dispatchNo: string;
  date: string;
  timestamp: string;
  category: 'All' | 'Nocturnal' | 'Domestic' | 'Fiscal' | 'Social' | 'Aesthetic';
  title: string;
  kicker: string;
  summary: string;
  bodyParagraphs: string[];
  statutoryReference: string;
  signatory: string;
  signatoryRole: string;
  approvalStamp: {
    status: 'APPROVED & RATIFIED' | 'IRREVERSIBLE' | 'HISTORIC FOLLY' | 'PERPETUAL REGRET' | 'ARCHIVALLY CERTIFIED';
    timestamp: string;
    officer: string;
    docketRef: string;
  };
}

export const ARCHIVE_RELEASES: ArchivalPressRelease[] = [
  {
    id: 'pr-5am',
    dispatchNo: 'DISP-1742-WAKE',
    date: '25th September, 2026',
    timestamp: '2026-09-25 04:14:02 UTC',
    category: 'Nocturnal',
    title: "CONCERNING THE UNPROVOKED CIVILIAN PROCLAMATION THAT ONE SHALL 'COMMENCE RISING AT 05:00 AM DAILY FOR COLD PLUNGES' WITHOUT HISTORICAL PRECEDENT",
    kicker: 'OFFICIAL SOVEREIGN PROCLAMATION • STATUTE 918-B',
    summary: 'A citizen with zero historical precedent of waking before 8:45 AM announced an uncompromising intent to adopt an extreme monastic dawn routine starting tomorrow morning.',
    bodyParagraphs: [
      "1. FINDINGS OF FACT: On the evening of yesterday, at approximately 23:42 hours, an ordinary citizen—having accomplished negligible physical exertion during the preceding seventy-two hours—did deliberately broadcast to three associates and an algorithmic social feed that they intended to 'completely overhaul all earthly habits starting tomorrow morning at 05:00 AM sharp.'",
      "2. STATISTICAL INFEASIBILITY: The Imperial Directorate of Cognitive Audits has concluded that the aforementioned civilian has not voluntarily witnessed a sunrise in a sober state since August 2017. The probability of sustained compliance beyond 05:14 AM is calculated at precisely 0.0003%.",
      "3. SOVEREIGN DISPOSITION: Pursuant to the Delusional Aspirations Act of 1884, the Ministry hereby decrees that hitting the 'Snooze' button seven (7) consecutive times until 08:35 AM shall not constitute a moral failing, but rather an internationally recognized act of biological sanity.",
      "4. OFFICIAL DIRECTIVE: All purchased journals, specialized hydration flasks, and unread stoic philosophy paperbacks shall be impounded to the bedside drawer until the year 2029.",
    ],
    statutoryReference: 'Codified under Sovereign Decree §410 (Unwarranted Optimism In The Evening)',
    signatory: 'Arch-Commissioner Thaddeus V. Sleepmore',
    signatoryRole: 'Director-General of Perpetual Fatigue & False Dawns',
    approvalStamp: {
      status: 'APPROVED & RATIFIED',
      timestamp: '2026-09-25 04:14:02',
      officer: 'INSPECTOR SLEEPMORE #84',
      docketRef: 'DKT-1742-WAKE',
    },
  },
  {
    id: 'pr-casual-drink',
    dispatchNo: 'DISP-002-TUESDAY',
    date: '24th September, 2026',
    timestamp: '2026-09-24 23:58:45 UTC',
    category: 'Nocturnal',
    title: "REGARDING THE FATAL AND FRAUDULENT ASSERTION: 'I AM MERELY STEPPING OUT FOR ONE QUICK CASUAL BEVERAGE ON A TUESDAY EVENING'",
    kicker: 'OFFICIAL SOVEREIGN PROCLAMATION • STATUTE 210-C',
    summary: 'An individual sworn to return home prior to 19:00 hours was documented at 23:40 hours ordering loaded truffle fries and discussing 14th-century treaty law.',
    bodyParagraphs: [
      "1. PRELIMINARY INQUIRY: It has come to the attention of the High Council that a civilian entered a licensed public house at 18:15 hours with the explicit, sworn declaration: 'I will be departed before seven o\'clock, as I have an urgent operational synchronization at dawn.'",
      "2. PROGRESSION OF CHAOS: By 22:30 hours, the civilian was observed actively ordering a platter of salted fried root vegetables, discussing complex geopolitical disputes with a completely unacquainted patron, and humming karaoke selections.",
      "3. MINISTERIAL JUDGMENT: Under the Tuesday Folly Ordinance, the phrase 'just one' is hereby legally defined as an admission of temporary insanity. No civilian shall be entitled to plead surprise when Wednesday morning arrives with the acoustic resonance of a jackhammer.",
    ],
    statutoryReference: 'Codified under Liquid Misadventure Protocol 99-T',
    signatory: 'Lady Beatrice von Oversleep',
    signatoryRole: 'Secretary of Weeknight Delinquency',
    approvalStamp: {
      status: 'IRREVERSIBLE',
      timestamp: '2026-09-24 23:58:45',
      officer: 'MAGISTRATE OVERSLEEP #02',
      docketRef: 'DKT-002-TUES',
    },
  },
  {
    id: 'pr-ikea',
    dispatchNo: 'DISP-841-ALLENKEY',
    date: '22nd September, 2026',
    timestamp: '2026-09-22 17:33:10 UTC',
    category: 'Domestic',
    title: "UPON THE ARROGANT REFUSAL TO PERUSE THE PICTORIAL ASSEMBLY INSTRUCTIONS FOR A THREE-DRAWER BIRCH CHEST",
    kicker: 'OFFICIAL SOVEREIGN PROCLAMATION • STATUTE 014-F',
    summary: 'A citizen discarded the manufacturer diagram booklet, resulting in four reversed structural crossbeams and eleven leftover critical metal dowels.',
    bodyParagraphs: [
      "1. EVENT CHRONOLOGY: A civilian, armed solely with a stripped 4mm hexagonal wrench and sheer masculine or domestic obstinacy, commenced assembly of Swedish particleboard furniture while loudly proclaiming: 'It is simply common sense; only simpletons need diagrams.'",
      "2. FORENSIC INSPECTION: Four hours post-commencement, Panel B has been inserted backward, the central structural cam-locks are shattered, and an ominous plastic bag containing eleven leftover wooden dowels remains unclaimed upon the rug.",
      "3. CIVIL REMEDY: The Ministry officially bestows upon the resulting trapezoidal and wobbling monstrosity the title of 'Avant-Garde Architectural Statement.'",
    ],
    statutoryReference: 'Codified under Domestic Hubris Code 72-B',
    signatory: 'Baron Leopold von Stripped-Screw',
    signatoryRole: 'Grand Marshal of Incompetent Carpentry',
    approvalStamp: {
      status: 'HISTORIC FOLLY',
      timestamp: '2026-09-22 17:33:10',
      officer: 'BARON VON STRIPPED #11',
      docketRef: 'DKT-841-IKEA',
    },
  },
  {
    id: 'pr-podcast',
    dispatchNo: 'DISP-609-MIC',
    date: '12th August, 2026',
    timestamp: '2026-08-12 14:20:00 UTC',
    category: 'Social',
    title: "MANDATORY GAZETTE NOTICE REGARDING TWO COWORKERS WHO PURCHASED DUAL CONDENSER MICROPHONES TO 'JUST CHAT ABOUT RANDOM STUFF'",
    kicker: 'OFFICIAL SOVEREIGN PROCLAMATION • STATUTE 404-POD',
    summary: 'Two individuals with unremarkable opinions invested $420 in acoustic dampening foam to record an episode entitled "Episode 1: The Intro & We Talk Movies."',
    bodyParagraphs: [
      "1. INVESTIGATIVE SUMMARY: Two men of moderate eloquence did deliberately procure broadcast-grade peripheral apparatus with the declared objective of 'dropping weekly audio knowledge.'",
      "2. AUDIENCE METRICS: Episode 1 achieved seven total streams, four of which were executed by the petitioner's immediate maternal grandmother.",
      "3. COURT ORDER: The podcast name 'Just Two Dudes Rambling' is hereby retired to the Crypt of Abandoned Audio Ambitions.",
    ],
    statutoryReference: 'Codified under Audio Delusion Accord §18',
    signatory: 'Sir Reginald Soundboard',
    signatoryRole: 'Chief Custodian of Unsolicited Monologues',
    approvalStamp: {
      status: 'PERPETUAL REGRET',
      timestamp: '2026-08-12 14:20:00',
      officer: 'REGISTRAR SOUNDBOARD #9',
      docketRef: 'DKT-609-MIC',
    },
  },
  {
    id: 'pr-sourdough',
    dispatchNo: 'DISP-314-YEAST',
    date: '04th May, 2026',
    timestamp: '2026-05-04 11:05:42 UTC',
    category: 'Fiscal',
    title: "SANCTIONING THE PURCHASE OF A $140 PROOFING BASKET FOR A FERMENTATION STARTER THAT DIED THREE DAYS LATER",
    kicker: 'OFFICIAL SOVEREIGN PROCLAMATION • STATUTE 088-CRUST',
    summary: 'An earnest civilian named their yeast starter "Dough-lilah" before completely forgetting to feed it for three weeks, leaving behind grey vinegar sludge.',
    bodyParagraphs: [
      "1. BIOLOGICAL DISASTER: What commenced as a noble pastoral fantasy disintegrated when the petitioner departed for a four-day holiday, abandoning the culture in an airtight pantry cupboard.",
      "2. TREASURY AUDIT: Total capital outlay on specialty unbleached rye, proofing linen, and a ceramic baker: $289.40. Total loaves rendered edible: zero.",
      "3. MINISTERIAL IMMUNITY: The jar may now be disposed of in secrecy without social condemnation.",
    ],
    statutoryReference: 'Codified under Artisanal Overreach Ordinance 12',
    signatory: 'Countess Clarissa von Moldy-Jar',
    signatoryRole: 'Minister of Abandoned Hobbies',
    approvalStamp: {
      status: 'ARCHIVALLY CERTIFIED',
      timestamp: '2026-05-04 11:05:42',
      officer: 'COUNTESS CLARISSA #07',
      docketRef: 'DKT-314-YEAST',
    },
  },
  {
    id: 'pr-bangs-1999',
    dispatchNo: 'DISP-1999-FRIDGE',
    date: '31st December, 1999',
    timestamp: '1999-12-31 23:48:19 UTC',
    category: 'Aesthetic',
    title: "HISTORIC MILLENNIUM DECREE: CUTTING A RETRO FRINGE TWELVE MINUTES PRIOR TO A MAJOR SOCIAL GATHERING",
    kicker: 'IMPERIAL CENTURY EDICT • STATUTE 000-SHEAR',
    summary: 'An emergency decree ratified at the close of the 20th century regarding immediate bathroom scissor remorse prior to midnight celebrations.',
    bodyParagraphs: [
      "1. HISTORICAL ARCHIVE NOTE: Minutes prior to the rollover of the Gregorian calendar to the year 2000, a petitioner severed hair 4 centimetres above the eyebrows.",
      "2. FORENSIC VERDICT: The resulting blunt trapezoid could not be remedied with hair gel, bobby pins, or emotional fortitude.",
      "3. CENTURY-SPANNING RECORD: Placed in permanent state storage as a warning to all subsequent generations.",
    ],
    statutoryReference: 'Codified under Aesthetic Catastrophe Archive 01',
    signatory: 'Arch-Chancellor Bartholomew V. Facepalm',
    signatoryRole: 'High Chancellor of Immediate Regret',
    approvalStamp: {
      status: 'HISTORIC FOLLY',
      timestamp: '1999-12-31 23:48:19',
      officer: 'FACEPALM EXECUTIVE #01',
      docketRef: 'DKT-1999-Y2K',
    },
  },
];

interface PressReleaseArchiveModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectRelease: (release: ArchivalPressRelease) => void;
}

export const PressReleaseArchiveModal: React.FC<PressReleaseArchiveModalProps> = ({
  isOpen,
  onClose,
  onSelectRelease,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Nocturnal' | 'Domestic' | 'Fiscal' | 'Social' | 'Aesthetic'>('All');
  const [previewRelease, setPreviewRelease] = useState<ArchivalPressRelease | null>(null);

  if (!isOpen) return null;

  const filteredReleases = ARCHIVE_RELEASES.filter((item) => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = 
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.dispatchNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.signatory.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const categories: Array<'All' | 'Nocturnal' | 'Domestic' | 'Fiscal' | 'Social' | 'Aesthetic'> = [
    'All', 'Nocturnal', 'Domestic', 'Fiscal', 'Social', 'Aesthetic'
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#050914]/90 backdrop-blur-md p-3 sm:p-6 overflow-y-auto">
      <div className="relative w-full max-w-5xl bg-[#fdfaf3] text-[#1c1917] border-4 border-double border-[#8b1828] shadow-[0_25px_60px_rgba(0,0,0,0.85)] parchment-card my-auto max-h-[92vh] flex flex-col">
        
        {/* Corner Flourishes */}
        <CornerFlourish position="top-left" className="absolute top-2 left-2 w-8 h-8 text-[#8b1828]" />
        <CornerFlourish position="top-right" className="absolute top-2 right-2 w-8 h-8 text-[#8b1828]" />
        <CornerFlourish position="bottom-left" className="absolute bottom-2 left-2 w-8 h-8 text-[#8b1828]" />
        <CornerFlourish position="bottom-right" className="absolute bottom-2 right-2 w-8 h-8 text-[#8b1828]" />

        {/* Modal Header */}
        <div className="p-5 sm:p-6 border-b-2 border-[#8b1828] bg-gradient-to-r from-[#f7ebd7] via-[#fffbf2] to-[#f7ebd7] relative shrink-0">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 border border-[#8b1828] text-[#8b1828] hover:bg-[#8b1828] hover:text-white transition-colors cursor-pointer"
            title="Close Sovereign Vault"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="text-center max-w-2xl mx-auto">
            <span className="font-typewriter text-[10px] sm:text-xs text-[#8b1828] font-bold tracking-[0.25em] uppercase block">
              OFFICIAL SOVEREIGN GAZETTE • SUB-BASEMENT ARCHIVES
            </span>
            <h3 className="text-2xl sm:text-3xl font-royal font-bold text-[#1f2937] mt-1 flex items-center justify-center gap-2">
              <Archive className="w-6 h-6 text-[#8b1828]" />
              The Central Vault of Past Decrees
            </h3>
            <p className="font-serif italic text-xs sm:text-sm text-[#573d23] mt-1">
              Historical Catalogue of Ratified Blunders, Municipal Faux-Pas &amp; Documented Misadventures (1742–2026)
            </p>
          </div>

          {/* Search & Category Filter Controls */}
          <div className="mt-4 pt-4 border-t border-[#8b1828]/20 flex flex-col sm:flex-row items-center justify-between gap-3 font-typewriter text-xs">
            {/* Search Input */}
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-[#78350f] absolute left-2.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search archive dockets or keywords..."
                className="w-full bg-[#fffdf8] border border-[#78350f] pl-8 pr-3 py-1.5 text-xs text-[#1c1917] focus:outline-none focus:border-[#8b1828]"
              />
            </div>

            {/* Category Filter Buttons */}
            <div className="flex flex-wrap items-center gap-1.5 w-full sm:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-2 py-1 text-[10px] uppercase font-bold border cursor-pointer transition-colors ${
                    selectedCategory === cat
                      ? 'bg-[#8b1828] text-[#fef08a] border-[#8b1828]'
                      : 'bg-[#fcf7ee] text-[#78350f] border-[#d4af37] hover:bg-[#faeed6]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-4 flex-1">
          {filteredReleases.length === 0 ? (
            <div className="text-center py-12 font-serif text-[#78350f] space-y-2">
              <Archive className="w-10 h-10 mx-auto opacity-40" />
              <p className="text-base italic">No historical blunders matching your query were discovered in this drawer.</p>
              <button
                onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }}
                className="px-3 py-1 text-xs bg-[#8b1828] text-white border border-[#d4af37] font-display uppercase tracking-wider cursor-pointer"
              >
                Reset Search Filters
              </button>
            </div>
          ) : (
            filteredReleases.map((item) => (
              <div
                key={item.id}
                className="relative bg-[#fffdf8] border-2 border-[#d4af37] p-4 sm:p-5 shadow-md hover:border-[#8b1828] transition-all hover:shadow-lg parchment-card flex flex-col md:flex-row items-start md:items-center justify-between gap-4 group"
              >
                {/* Left: Dispatch metadata & Title */}
                <div className="space-y-1.5 flex-1 min-w-0 pr-2">
                  <div className="flex flex-wrap items-center gap-2 text-[10px] font-typewriter text-[#78350f]">
                    <span className="font-bold text-[#8b1828] bg-[#fee2e2] px-1.5 py-0.5 border border-[#ef4444]/40">
                      [{item.dispatchNo}]
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-[#78350f]" /> {item.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1 text-[#475569]">
                      <Clock className="w-3 h-3 text-[#64748b]" /> {item.timestamp}
                    </span>
                    <span className="ml-auto text-[9px] uppercase tracking-wider font-bold bg-[#f1f5f9] px-2 py-0.5 border border-slate-300">
                      Category: {item.category}
                    </span>
                  </div>

                  <h4 className="font-royal font-bold text-sm sm:text-base text-[#1f2937] leading-snug group-hover:text-[#8b1828] transition-colors">
                    {item.title}
                  </h4>

                  <p className="font-serif text-xs text-[#4b5563] leading-relaxed line-clamp-2">
                    {item.summary}
                  </p>

                  <div className="text-[10px] font-typewriter text-[#78350f] italic pt-1">
                    Signatory: {item.signatory} ({item.signatoryRole})
                  </div>
                </div>

                {/* Right: The Timestamped Approval Stamp */}
                <div className="shrink-0 flex flex-col items-center sm:items-end w-full md:w-auto pt-2 md:pt-0 border-t md:border-t-0 border-[#d4af37]/30">
                  
                  {/* Visual Rubber Stamp Container */}
                  <div className="border-3 border-dashed border-[#b91c1c] bg-[#fef2f2]/80 p-2.5 text-center min-w-[210px] transform -rotate-2 group-hover:rotate-0 transition-transform shadow-xs">
                    <div className="flex items-center justify-center gap-1 text-[8px] font-typewriter text-[#991b1b] uppercase tracking-widest -mb-0.5">
                      <Stamp className="w-2.5 h-2.5" />
                      OFFICIAL CROWN AUDIT
                    </div>
                    
                    <div className="font-display font-black text-xs sm:text-sm text-[#b91c1c] tracking-wider uppercase">
                      {item.approvalStamp.status}
                    </div>

                    <div className="mt-1 pt-1 border-t border-[#b91c1c]/40 font-typewriter text-[9px] text-[#7f1d1d] space-y-0.5">
                      <div className="font-bold flex items-center justify-between">
                        <span>STAMPED:</span>
                        <span className="font-mono">{item.approvalStamp.timestamp}</span>
                      </div>
                      <div className="flex items-center justify-between text-[8px] text-[#991b1b]">
                        <span>REF: {item.approvalStamp.docketRef}</span>
                        <span>BY: {item.approvalStamp.officer}</span>
                      </div>
                    </div>
                  </div>

                  {/* Action: Select / Load this decree */}
                  <button
                    onClick={() => {
                      onSelectRelease(item);
                      onClose();
                    }}
                    className="mt-3 w-full md:w-auto px-3 py-1.5 bg-[#8b1828] hover:bg-[#991b1b] text-[#fef08a] border border-[#d4af37] font-display font-bold text-[10px] tracking-wider uppercase cursor-pointer flex items-center justify-center gap-1.5 transition-colors shadow-sm"
                  >
                    <FileText className="w-3 h-3" />
                    Load Into Gazette Reader &rarr;
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-3 sm:p-4 border-t-2 border-[#8b1828] bg-[#f7eedc] flex flex-col sm:flex-row items-center justify-between gap-2 text-[10px] sm:text-xs font-typewriter text-[#78350f] shrink-0">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#15803d]" />
            <span>ALL {ARCHIVE_RELEASES.length} SOVEREIGN ANNOUNCEMENTS DIGITALLY PRESERVED UNDER PATENT 1742-ARC</span>
          </div>
          <button
            onClick={onClose}
            className="px-3 py-1 bg-[#26170d] hover:bg-[#3d2314] text-[#fef08a] border border-[#78350f] font-bold uppercase cursor-pointer"
          >
            Close Vault
          </button>
        </div>

      </div>
    </div>
  );
};
