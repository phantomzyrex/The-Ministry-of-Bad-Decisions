import React, { useState } from 'react';
import { Department } from '../types';
import { CornerFlourish, WaxSealGraphic, FiligreeDivider } from './OrnateFlourish';
import { 
  MessageSquareWarning, 
  Users, 
  HelpCircle, 
  CreditCard, 
  Hammer, 
  Clock, 
  Scissors, 
  MailWarning, 
  Check, 
  X,
  FileCheck2,
  AlertOctagon
} from 'lucide-react';

const DEPARTMENTS: Department[] = [
  {
    id: 'dept-2am',
    name: 'Bureau of 2 AM Texts',
    branch: 'Branch of Nocturnal Regrets',
    code: 'B-0200',
    latinMotto: 'In Somno Stultitia, In Tenebris Clamor',
    missionStatement: 'Regulating unprovoked emotional dispatches and nostalgic cross-examinations between 01:45 and 04:30 AM.',
    incidentCount: '1,492,081 this fiscal quarter',
    dangerLevel: 'CRITICAL FOLLY',
    icon: 'MessageSquareWarning',
    dossierSummary: 'Maintains round-the-clock surveillance over mobile transmission towers to catalog three-paragraph opening messages beginning with "I know it has been 4 years but...".',
    commonOffenses: [
      'Sending unsanctioned acoustic guitar voice notes at 02:41 AM.',
      'Double-texting a question mark when no response occurs within 180 seconds.',
      'Claiming "autocorrect changed my entire sentence" after sobering up.',
    ],
    formCode: 'FORM 88-B (DESPERATE DISPATCH)',
  },
  {
    id: 'dept-chats',
    name: 'Department of Regrettable Group Chats',
    branch: 'Division of Multi-Party Agony',
    code: 'D-CHAT-99',
    latinMotto: 'Multi Loquuntur, Nemo Audit',
    missionStatement: 'Overseeing accidental "Wrong Chat" photo disclosures and the irreversible creation of 18-person event planning threads.',
    incidentCount: '893,420 threads open',
    dangerLevel: 'ACUTE EMBARRASSMENT',
    icon: 'Users',
    dossierSummary: 'Chartered to monitor group discussions that commence with "Who is free for a quick taco?" and disintegrate into a 300-message debate regarding dietary constraints.',
    commonOffenses: [
      'Sending an aggressive critique of someone to the group containing that exact person.',
      'Leaving a group silently during an active debate, triggering diplomatic crisis.',
      'Creating a sub-chat solely to discuss the behavior of another member in the main chat.',
    ],
    formCode: 'FORM 42-GC (GROUP CHAOS PETITION)',
  },
  {
    id: 'dept-advice',
    name: 'Office of Unsolicited Advice',
    branch: 'Executive Committee of Unearned Certainty',
    code: 'O-ADVICE',
    latinMotto: 'Nescio Sed Docebo',
    missionStatement: 'Administering authoritative dissertations upon complex subjects in which the speaker possesses negligible qualification.',
    incidentCount: '4,109,720 lectures delivered',
    dangerLevel: 'CHRONIC DELUSION',
    icon: 'HelpCircle',
    dossierSummary: 'Guarantees that no individual may endure a minor personal difficulty without a distant acquaintance explaining why cryptocurrency or drinking lemon water will resolve it.',
    commonOffenses: [
      'Beginning a monologue with "What you really should have done..."',
      'Explaining how to fix an automatic transmission after watching 40 seconds of a reel.',
      'Recommending waking up at 4:30 AM as a cure for acute clinical fatigue.',
    ],
    formCode: 'FORM 19-UNS (UNWARRANTED OPINION)',
  },
  {
    id: 'dept-impulse',
    name: 'Division of Impulse Purchases',
    branch: 'Treasury of Fiscal Misadventure',
    code: 'DIV-BUY',
    latinMotto: 'Pecunia Fugit, Paenitentia Manet',
    missionStatement: 'Authorizing immediate credit card confirmation for specialized artisanal apparatuses that shall remain in cardboard packaging indefinitely.',
    incidentCount: '$84,200,900 spent on sourdough supplies',
    dangerLevel: 'FINANCIAL HAZARD',
    icon: 'CreditCard',
    dossierSummary: 'Manages the national stockpile of unplayed banjos, unused dehydrators, unread classic literature boxed sets, and $280 hiking boots that have visited a pavement driveway once.',
    commonOffenses: [
      'Purchasing a $600 espresso machine under the belief that one will never buy café lattes again.',
      'Buying 4 pairs of identical shoes because they were marked down by 14%.',
      'Adding $35 worth of useless plastic junk to qualify for free $4.99 shipping.',
    ],
    formCode: 'FORM 303-PAY (RECKLESS CHECKOUT)',
  },
  {
    id: 'dept-diy',
    name: 'Directorate of Ill-Advised DIY Projects',
    branch: 'Ministry of Structural Jeopardy',
    code: 'DIR-DIY',
    latinMotto: 'Cur Legere Cum Possumus Frangere',
    missionStatement: 'Presiding over unauthorized domestic demolitions conducted with a standard claw hammer and unfounded self-belief.',
    incidentCount: '62,410 half-tiled bathrooms',
    dangerLevel: 'CRITICAL FOLLY',
    icon: 'Hammer',
    dossierSummary: 'Dedicated to citizens who announce on Saturday morning: "I can easily build that walnut mid-century credenza from scrap pallets in the yard."',
    commonOffenses: [
      'Declaring a wall non-load-bearing based entirely on vibes.',
      'Leaving the kitchen sink disconnected for six months while waiting for "the right copper elbow joint."',
      'Stripping a screw head into a completely smooth circular crater.',
    ],
    formCode: 'FORM 7-HAMMER (MANDATORY INSURANCE LOSS)',
  },
  {
    id: 'dept-procrastination',
    name: 'Chamber of Prolonged Procrastination',
    branch: 'Imperial Board of Tomorrow’s Burdens',
    code: 'CH-PROC',
    latinMotto: 'Cras Faciam, Hodie Dormiam',
    missionStatement: 'Enforcing the institutional postponement of 7-minute administrative errands for a mandatory minimum of 52 consecutive calendar days.',
    incidentCount: '98,000,000 emails marked unread',
    dangerLevel: 'CHRONIC DELUSION',
    icon: 'Clock',
    dossierSummary: 'Regulates the practice of cleaning the baseboards with a toothbrush rather than opening a single piece of mail from the municipal tax bureau.',
    commonOffenses: [
      'Staring at an open blank document until the deadline has officially passed.',
      'Researching the history of medieval siege weapons at 11:45 PM instead of submitting quarterly budget figures.',
      'Agreeing to "start fresh on Monday" regardless of what day of the week it is.',
    ],
    formCode: 'FORM 0-LATER (SUBMIT NEXT QUARTER)',
  },
  {
    id: 'dept-bangs',
    name: 'Sub-Secretariat of Cutting One’s Own Bangs',
    branch: 'Aesthetic Catastrophe Taskforce',
    code: 'SEC-BANGS',
    latinMotto: 'Una Scissura, Tres Menses Lacrimarum',
    missionStatement: 'Maintaining supreme jurisdiction over kitchen poultry shears deployed in dim bathroom mirrors during moments of existential stress.',
    incidentCount: '34,910 emergency beanies purchased',
    dangerLevel: 'CATASTROPHIC REGRET',
    icon: 'Scissors',
    dossierSummary: 'Governs the universal civilian delusion that a pair of $4 dull scissors and 3 minutes on Pinterest can replace four years of cosmetology school.',
    commonOffenses: [
      'Cutting the fringe while hair is soaking wet, followed by immediate horror upon drying.',
      'Attempting to "even out the left side" until eyebrows are completely exposed.',
      'Blaming the room humidity for a severe horizontal slant.',
    ],
    formCode: 'FORM 99-TRIM (HAIR DISASTER PETITION)',
  },
  {
    id: 'dept-replyall',
    name: 'High Commission for Replying "All"',
    branch: 'Bureaucratic Mass-Destruction Corps',
    code: 'HC-ALL',
    latinMotto: 'Omnibus Dico Quod Nemo Curat',
    missionStatement: 'Certifying the catastrophic broadcast of "Thanks!" or "Please remove me from this list" to 14,000 corporate employees simultaneously.',
    incidentCount: '12 corporate servers collapsed',
    dangerLevel: 'CATASTROPHIC REGRET',
    icon: 'MailWarning',
    dossierSummary: 'Oversees the rapid vaporization of productivity across global corporate enterprises through weaponized email distribution lists.',
    commonOffenses: [
      'Replying "Please unsubscribe me" to all 8,500 recipients of a company picnic invitation.',
      'Replying "All" with an unedited lunch receipt containing credit card digits.',
      'Replying "All" to ask what the original email was about.',
    ],
    formCode: 'FORM 1000-MAIL (SYSTEM OVERLOAD)',
  },
];

const renderIcon = (name: string) => {
  const props = { className: 'w-6 h-6 text-[#d4af37]' };
  switch (name) {
    case 'MessageSquareWarning': return <MessageSquareWarning {...props} />;
    case 'Users': return <Users {...props} />;
    case 'HelpCircle': return <HelpCircle {...props} />;
    case 'CreditCard': return <CreditCard {...props} />;
    case 'Hammer': return <Hammer {...props} />;
    case 'Clock': return <Clock {...props} />;
    case 'Scissors': return <Scissors {...props} />;
    case 'MailWarning': return <MailWarning {...props} />;
    default: return <AlertOctagon {...props} />;
  }
};

export const DepartmentalDirectory: React.FC = () => {
  const [selectedDept, setSelectedDept] = useState<Department | null>(null);
  const [admittedOffense, setAdmittedOffense] = useState<string | null>(null);
  const [isAffixed, setIsAffixed] = useState(false);

  const handleOpenDossier = (dept: Department) => {
    setSelectedDept(dept);
    setAdmittedOffense(null);
    setIsAffixed(false);
  };

  const handleAffixDossier = () => {
    setIsAffixed(true);
  };

  return (
    <section className="relative w-full py-8 px-4 bg-[#f4ebdc] text-[#1c1917] border-b-4 border-double border-[#8b1828]">
      {/* Subtle watermark background for this section */}
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header with Ornate Framing */}
        <div className="text-center max-w-3xl mx-auto mb-6">
          <div className="inline-block bg-[#8b1828] text-[#fef08a] border border-[#d4af37] px-4 py-1 font-typewriter text-xs font-bold tracking-[0.2em] uppercase mb-1.5 shadow-sm">
            SECTION II • IMPERIAL PORTFOLIO OF BLUNDERS
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-[#1f2937] tracking-wide">
            DEPARTMENTAL DIRECTORY &amp; DISASTER BUREAUS
          </h2>
          <p className="mt-1 font-serif text-[#4b5563] italic text-sm md:text-base">
            All governmental units below operate under statutory authority to investigate, catalog, and perpetuate regrettable civil actions.
          </p>
          <FiligreeDivider className="my-3" title="CIVIL GAZETTE DIRECTORY" />
        </div>

        {/* The 8 Ornate Department Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {DEPARTMENTS.map((dept) => {
            return (
              <div
                key={dept.id}
                onClick={() => handleOpenDossier(dept)}
                className="group relative bg-[#0f1c30] text-[#f8fafc] border-2 border-[#d4af37] p-5 shadow-lg cursor-pointer transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:border-[#fef08a] flex flex-col justify-between"
              >
                {/* Corner flourishes on each card */}
                <CornerFlourish position="top-left" className="absolute top-1 left-1 w-5 h-5 text-[#d4af37]/70 group-hover:text-[#fef08a]" />
                <CornerFlourish position="top-right" className="absolute top-1 right-1 w-5 h-5 text-[#d4af37]/70 group-hover:text-[#fef08a]" />
                <CornerFlourish position="bottom-left" className="absolute bottom-1 left-1 w-5 h-5 text-[#d4af37]/70 group-hover:text-[#fef08a]" />
                <CornerFlourish position="bottom-right" className="absolute bottom-1 right-1 w-5 h-5 text-[#d4af37]/70 group-hover:text-[#fef08a]" />

                <div>
                  {/* Top card header */}
                  <div className="flex items-center justify-between border-b border-[#d4af37]/30 pb-2 mb-3">
                    <span className="font-typewriter text-[10px] text-[#fef08a] font-bold tracking-widest uppercase">
                      {dept.code}
                    </span>
                    <span className={`text-[9px] font-typewriter px-1.5 py-0.5 border font-bold uppercase tracking-wider ${
                      dept.dangerLevel.includes('CRITICAL') || dept.dangerLevel.includes('CATASTROPHIC')
                        ? 'border-red-500/60 bg-red-950/70 text-red-300'
                        : 'border-amber-500/60 bg-amber-950/70 text-amber-200'
                    }`}>
                      {dept.dangerLevel}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-start gap-3 my-2">
                    <div className="p-2.5 rounded bg-[#1b2f52] border border-[#d4af37]/60 group-hover:border-[#fef08a] group-hover:scale-110 transition-transform">
                      {renderIcon(dept.icon)}
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-base text-[#fef08a] leading-snug group-hover:text-[#ffffff] transition-colors">
                        {dept.name}
                      </h3>
                      <p className="font-typewriter text-[10px] text-[#94a3b8] uppercase tracking-wider">
                        {dept.branch}
                      </p>
                    </div>
                  </div>

                  {/* Latin motto */}
                  <div className="font-serif italic text-xs text-[#cbd5e1] border-l-2 border-[#d4af37] pl-2 my-2 py-0.5 opacity-90">
                    &ldquo;{dept.latinMotto}&rdquo;
                  </div>

                  {/* Dry mission statement */}
                  <p className="text-xs font-serif text-[#e2e8f0] leading-relaxed mt-2 line-clamp-3">
                    {dept.missionStatement}
                  </p>
                </div>

                {/* Footer of card */}
                <div className="mt-4 pt-3 border-t border-[#d4af37]/20 flex items-center justify-between text-[11px] font-typewriter">
                  <span className="text-[#94a3b8] truncate max-w-[120px]">
                    {dept.formCode}
                  </span>
                  <span className="text-[#fef08a] group-hover:translate-x-1 transition-transform flex items-center gap-1 font-bold">
                    Inspect &rarr;
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* DEPARTMENT DOSSIER MODAL */}
      {selectedDept && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#070b12]/85 backdrop-blur-sm p-4 overflow-y-auto">
          <div className="relative w-full max-w-2xl bg-[#fdfaf3] text-[#1c1917] border-4 border-double border-[#8b1828] p-6 md:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.7)] my-8">
            {/* Corner flourishes */}
            <CornerFlourish position="top-left" className="absolute top-2 left-2 w-8 h-8 text-[#8b1828]" />
            <CornerFlourish position="top-right" className="absolute top-2 right-2 w-8 h-8 text-[#8b1828]" />
            <CornerFlourish position="bottom-left" className="absolute bottom-2 left-2 w-8 h-8 text-[#8b1828]" />
            <CornerFlourish position="bottom-right" className="absolute bottom-2 right-2 w-8 h-8 text-[#8b1828]" />

            {/* Close button */}
            <button
              onClick={() => setSelectedDept(null)}
              className="absolute top-4 right-4 text-[#8b1828] hover:text-[#000000] p-1 border border-[#8b1828] cursor-pointer"
              title="Close Dossier"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="text-center border-b-2 border-[#8b1828] pb-4">
              <span className="font-typewriter text-xs text-[#8b1828] font-bold tracking-[0.25em] uppercase">
                MINISTERIAL DOSSIER • {selectedDept.code}
              </span>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-[#1f2937] mt-1">
                {selectedDept.name}
              </h3>
              <p className="font-typewriter text-xs text-[#6b7280] uppercase tracking-wider">
                {selectedDept.branch} • {selectedDept.formCode}
              </p>
              <p className="font-serif italic text-sm text-[#8b1828] mt-1">
                &ldquo;{selectedDept.latinMotto}&rdquo;
              </p>
            </div>

            {/* Modal Body */}
            <div className="my-5 space-y-4 font-serif text-sm">
              <div className="bg-[#f5ebd9] border border-[#d4af37] p-3 rounded font-typewriter text-xs flex justify-between items-center">
                <span>ESTABLISHED BLUNDER RATE:</span>
                <span className="font-bold text-[#8b1828]">{selectedDept.incidentCount}</span>
              </div>

              <div>
                <h4 className="font-display font-bold text-xs uppercase tracking-widest text-[#8b1828]">
                  OPERATIONAL OVERVIEW &amp; DIRECTIVE:
                </h4>
                <p className="mt-1 leading-relaxed text-[#374151]">
                  {selectedDept.dossierSummary}
                </p>
              </div>

              <div>
                <h4 className="font-display font-bold text-xs uppercase tracking-widest text-[#8b1828]">
                  STANDARD CIVIL VIOLATIONS CATALOGED UNDER THIS UNIT:
                </h4>
                <ul className="mt-2 space-y-2">
                  {selectedDept.commonOffenses.map((offense, i) => (
                    <li 
                      key={i}
                      onClick={() => setAdmittedOffense(offense)}
                      className={`p-2.5 border text-xs font-typewriter cursor-pointer transition-colors flex items-start gap-2 ${
                        admittedOffense === offense
                          ? 'border-[#8b1828] bg-[#fee2e2] text-[#991b1b] font-bold'
                          : 'border-[#d4af37]/60 bg-[#fffdfa] hover:bg-[#fef9c3] text-[#1f2937]'
                      }`}
                    >
                      <span className="text-[#8b1828] font-bold">[{i + 1}]</span>
                      <span className="flex-1">{offense}</span>
                      {admittedOffense === offense && <Check className="w-4 h-4 text-[#8b1828] shrink-0" />}
                    </li>
                  ))}
                </ul>
                <div className="text-[10px] font-typewriter text-[#6b7280] mt-1 italic">
                  * Click an offense to select it for self-admission under Ministerial Statute 404.
                </div>
              </div>

              {/* Rubber Stamp Affixed Feedback */}
              {isAffixed && (
                <div className="relative p-4 border-2 border-dashed border-[#b91c1c] bg-[#fef2f2] flex items-center justify-between overflow-hidden">
                  <div>
                    <span className="font-typewriter text-xs font-bold text-[#991b1b] block uppercase">
                      OFFENSE REGISTERED WITH ARCHIVES
                    </span>
                    <p className="font-typewriter text-[11px] text-[#7f1d1d] mt-0.5">
                      Case #{Math.floor(100000 + Math.random() * 900000)} has been entered into the Perpetual Ledger of Regrets.
                    </p>
                  </div>
                  <div className="rubber-stamp text-xs animate-stamp shrink-0">
                    RATIFIED
                  </div>
                </div>
              )}
            </div>

            {/* Modal Actions */}
            <div className="pt-4 border-t-2 border-[#8b1828] flex flex-wrap items-center justify-between gap-3">
              <span className="text-[11px] font-typewriter text-[#6b7280]">
                DISCIPLINARY ACTIONS ARE STRICTLY DISALLOWED BY LAW.
              </span>
              
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setSelectedDept(null)}
                  className="px-3 py-1.5 font-display text-xs border border-[#8b1828] text-[#8b1828] hover:bg-[#8b1828] hover:text-[#ffffff] transition-colors cursor-pointer"
                >
                  Close Dossier
                </button>

                <button
                  onClick={handleAffixDossier}
                  className="px-4 py-1.5 font-display text-xs bg-[#8b1828] hover:bg-[#991b1b] text-[#fef08a] border border-[#d4af37] font-bold tracking-wider uppercase transition-colors cursor-pointer flex items-center gap-1.5 shadow-sm"
                >
                  <FileCheck2 className="w-3.5 h-3.5" />
                  Affix Formal Admission
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
