import React, { useState } from 'react';
import { IncidentRecord } from '../types';
import { CornerFlourish, FiligreeDivider } from './OrnateFlourish';
import { ClipboardList, Send, CheckCircle2, History, AlertCircle, FilePlus2 } from 'lucide-react';

const INITIAL_INCIDENTS: IncidentRecord[] = [
  {
    id: 'INC-9901',
    timestamp: '14 mins ago',
    citizenAlias: 'Count of Unwashed Coffee Cups',
    departmentCode: 'DIR-DIY',
    description: 'Began stripping vintage dresser paint indoors using toxic citrus solvent while wearing flip-flops.',
    severity: 'Level III (Financial Shock)',
    status: 'RATIFIED AS IRREVERSIBLE',
    officialStamp: 'APPROVED',
  },
  {
    id: 'INC-9894',
    timestamp: '1 hour ago',
    citizenAlias: 'Lady In Need of Sleep',
    departmentCode: 'B-0200',
    description: 'Sent "I hope you are thriving" to an ex-partner from 2018 after watching one nostalgic movie.',
    severity: 'Level II (Acute Regret)',
    status: 'RATIFIED AS IRREVERSIBLE',
    officialStamp: 'QUESTIONABLE',
  },
  {
    id: 'INC-9882',
    timestamp: '3 hours ago',
    citizenAlias: 'Lord of Cart Abandonment',
    departmentCode: 'DIV-BUY',
    description: 'Purchased a $180 cast-iron Dutch oven solely because it was colored "Heritage French Navy".',
    severity: 'Level III (Financial Shock)',
    status: 'RATIFIED AS IRREVERSIBLE',
    officialStamp: 'APPROVED',
  },
  {
    id: 'INC-9870',
    timestamp: 'Yesterday',
    citizenAlias: 'The Perpetual Delusionist',
    departmentCode: 'CH-PROC',
    description: 'Promised four distinct clients that files would be "in their inboxes by end-of-day Friday".',
    severity: 'Level IV (Life Rerouting)',
    status: 'UNDER ARCHIVAL DENIAL',
    officialStamp: 'IRREVERSIBLE',
  },
];

export const IncidentReportingTerminal: React.FC = () => {
  const [incidents, setIncidents] = useState<IncidentRecord[]>(INITIAL_INCIDENTS);
  const [citizenAlias, setCitizenAlias] = useState('');
  const [departmentCode, setDepartmentCode] = useState('B-0200');
  const [description, setDescription] = useState('');
  const [severity, setSeverity] = useState<IncidentRecord['severity']>('Level II (Acute Regret)');
  const [lastSubmittedId, setLastSubmittedId] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!description.trim()) return;

    const newId = `INC-${Math.floor(1000 + Math.random() * 9000)}`;
    const newRecord: IncidentRecord = {
      id: newId,
      timestamp: 'Just now',
      citizenAlias: citizenAlias.trim() || 'Anonymous Regretter',
      departmentCode,
      description: description.trim(),
      severity,
      status: 'RATIFIED AS IRREVERSIBLE',
      officialStamp: 'APPROVED',
    };

    setIncidents([newRecord, ...incidents]);
    setLastSubmittedId(newId);
    setDescription('');
    setCitizenAlias('');

    setTimeout(() => {
      setLastSubmittedId(null);
    }, 6000);
  };

  return (
    <section className="relative w-full py-8 px-4 bg-[#f1e5d1] text-[#1c1917] border-b-4 border-double border-[#8b1828]">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6">
          <div className="inline-block bg-[#8b1828] text-[#fef08a] border border-[#d4af37] px-4 py-1 font-typewriter text-xs font-bold tracking-[0.25em] uppercase mb-1.5">
            SECTION V • CIVILIAN SELF-AUDIT TERMINAL
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-[#1f2937] tracking-wide">
            FORM 99-Z: VOLUNTARY DECLARATION OF FOLLY
          </h2>
          <p className="font-serif italic text-xs md:text-sm text-[#4b5563] mt-0.5">
            Pursuant to the Sovereign Transparency Accord, all disastrous personal choices must be registered for historical posterity.
          </p>
          <FiligreeDivider className="my-3" title="CIVIL INCIDENT LEDGER" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Submission Form Card (5 cols) */}
          <div className="lg:col-span-5 relative bg-[#fffdf8] border-4 border-double border-[#78350f] p-6 shadow-xl parchment-card">
            <CornerFlourish position="top-left" className="absolute top-1 left-1 w-6 h-6 text-[#78350f]" />
            <CornerFlourish position="top-right" className="absolute top-1 right-1 w-6 h-6 text-[#78350f]" />
            <CornerFlourish position="bottom-left" className="absolute bottom-1 left-1 w-6 h-6 text-[#78350f]" />
            <CornerFlourish position="bottom-right" className="absolute bottom-1 right-1 w-6 h-6 text-[#78350f]" />

            <div className="border-b-2 border-[#78350f] pb-3 mb-4 text-center">
              <span className="font-typewriter text-[10px] text-[#8b1828] font-bold tracking-widest uppercase block">
                OFFICIAL ENTRY PORTAL • FORM 99-Z
              </span>
              <h3 className="font-display font-bold text-lg text-[#1f2937]">
                Submit Personal Incident
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 font-typewriter text-xs">
              <div>
                <label className="block uppercase tracking-wider text-[#78350f] font-bold mb-1">
                  Citizen Alias / Sovereign Pseudonym:
                </label>
                <input
                  type="text"
                  value={citizenAlias}
                  onChange={(e) => setCitizenAlias(e.target.value)}
                  placeholder="e.g. Master of Late Night Cheeses"
                  maxLength={40}
                  className="w-full bg-[#fcf8f0] border border-[#78350f] p-2 text-[#1c1917] focus:outline-none focus:border-[#8b1828]"
                />
              </div>

              <div>
                <label className="block uppercase tracking-wider text-[#78350f] font-bold mb-1">
                  Responsible Ministerial Bureau:
                </label>
                <select
                  value={departmentCode}
                  onChange={(e) => setDepartmentCode(e.target.value)}
                  className="w-full bg-[#fcf8f0] border border-[#78350f] p-2 text-[#1c1917] focus:outline-none focus:border-[#8b1828] cursor-pointer"
                >
                  <option value="B-0200">Bureau of 2 AM Texts</option>
                  <option value="D-CHAT-99">Department of Regrettable Group Chats</option>
                  <option value="O-ADVICE">Office of Unsolicited Advice</option>
                  <option value="DIV-BUY">Division of Impulse Purchases</option>
                  <option value="DIR-DIY">Directorate of Ill-Advised DIY Projects</option>
                  <option value="CH-PROC">Chamber of Prolonged Procrastination</option>
                  <option value="SEC-BANGS">Sub-Secretariat of Cutting One’s Own Bangs</option>
                  <option value="HC-ALL">High Commission for Replying "All"</option>
                </select>
              </div>

              <div>
                <label className="block uppercase tracking-wider text-[#78350f] font-bold mb-1">
                  Severity of Imprudence:
                </label>
                <select
                  value={severity}
                  onChange={(e) => setSeverity(e.target.value as any)}
                  className="w-full bg-[#fcf8f0] border border-[#78350f] p-2 text-[#1c1917] focus:outline-none focus:border-[#8b1828] cursor-pointer"
                >
                  <option value="Level I (Mild Cringe)">Level I (Mild Cringe)</option>
                  <option value="Level II (Acute Regret)">Level II (Acute Regret)</option>
                  <option value="Level III (Financial Shock)">Level III (Financial Shock)</option>
                  <option value="Level IV (Life Rerouting)">Level IV (Life Rerouting)</option>
                </select>
              </div>

              <div>
                <label className="block uppercase tracking-wider text-[#78350f] font-bold mb-1">
                  Specific Blunder Description:
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={3}
                  required
                  placeholder="Detail the exact sequence of terrible choices (e.g. 'Agreed to help a distant cousin move house on a Sunday morning')..."
                  className="w-full bg-[#fcf8f0] border border-[#78350f] p-2 text-[#1c1917] focus:outline-none focus:border-[#8b1828]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 bg-[#8b1828] hover:bg-[#991b1b] text-[#fef08a] border border-[#d4af37] font-display font-bold tracking-widest uppercase cursor-pointer flex items-center justify-center gap-2 transition-colors shadow-md text-xs"
              >
                <Send className="w-3.5 h-3.5" />
                Register in Sovereign Ledger
              </button>

              <div className="text-[10px] text-[#6b7280] italic text-center">
                * By submitting, you waive all rights to dignity and rational explanation.
              </div>
            </form>

            {lastSubmittedId && (
              <div className="mt-4 p-3 border-2 border-dashed border-[#15803d] bg-[#f0fdf4] text-[#166534] font-typewriter text-xs flex items-center justify-between animate-fadeIn">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#15803d]" />
                  <span>DOCKET #{lastSubmittedId} CONFIRMED</span>
                </div>
                <span className="rubber-stamp-green text-[10px]">RECORDED</span>
              </div>
            )}
          </div>

          {/* Live Incident Ledger Feed (7 cols) */}
          <div className="lg:col-span-7 bg-[#0d1624] text-[#f8fafc] border-4 border-double border-[#d4af37] p-5 shadow-2xl">
            <div className="flex items-center justify-between border-b border-[#d4af37]/40 pb-3 mb-4">
              <div className="flex items-center gap-2">
                <History className="w-4 h-4 text-[#d4af37]" />
                <h3 className="font-display font-bold text-sm text-[#fef08a] tracking-wider uppercase">
                  Live Sovereign Register of Civil Blunders
                </h3>
              </div>
              <span className="font-typewriter text-[10px] text-[#94a3b8] uppercase">
                AUTOMATIC DISPATCH LINK ACTIVE
              </span>
            </div>

            <div className="space-y-3 max-h-[460px] overflow-y-auto pr-1">
              {incidents.map((inc) => (
                <div
                  key={inc.id}
                  className="p-3.5 bg-[#14233c] border border-[#d4af37]/50 rounded text-xs space-y-1.5 hover:border-[#fef08a] transition-colors"
                >
                  <div className="flex items-center justify-between font-typewriter text-[10px]">
                    <div className="flex items-center gap-2">
                      <span className="text-[#38bdf8] font-bold">[{inc.id}]</span>
                      <span className="text-[#fef08a] font-bold">{inc.citizenAlias}</span>
                    </div>
                    <span className="text-[#94a3b8]">{inc.timestamp}</span>
                  </div>

                  <p className="font-serif text-sm text-[#e2e8f0] leading-relaxed">
                    &ldquo;{inc.description}&rdquo;
                  </p>

                  <div className="flex flex-wrap items-center justify-between pt-1 text-[10px] font-typewriter gap-2">
                    <span className="text-[#cbd5e1] bg-[#1e3a5f] px-2 py-0.5 border border-[#3b82f6]/40">
                      Dept: {inc.departmentCode}
                    </span>
                    <span className="text-[#fca5a5]">
                      Severity: {inc.severity}
                    </span>
                    <span className="text-[#86efac] font-bold border border-[#22c55e]/40 px-1.5 py-0.5 bg-[#14532d]/40">
                      {inc.officialStamp}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 pt-3 border-t border-[#d4af37]/30 flex items-center justify-between text-[11px] font-typewriter text-[#94a3b8]">
              <span>TOTAL ACTIVE JURISDICTIONS: 1,940,820</span>
              <span className="text-[#fef08a]">LEDGER STATUS: IRREVERSIBLE</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
