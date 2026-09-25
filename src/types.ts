export interface Department {
  id: string;
  name: string;
  branch: string;
  code: string;
  latinMotto: string;
  missionStatement: string;
  incidentCount: string;
  dangerLevel: 'CRITICAL FOLLY' | 'ACUTE EMBARRASSMENT' | 'FINANCIAL HAZARD' | 'CHRONIC DELUSION' | 'CATASTROPHIC REGRET';
  icon: string;
  dossierSummary: string;
  commonOffenses: string[];
  formCode: string;
}

export interface IncidentRecord {
  id: string;
  timestamp: string;
  citizenAlias: string;
  departmentCode: string;
  description: string;
  severity: 'Level I (Mild Cringe)' | 'Level II (Acute Regret)' | 'Level III (Financial Shock)' | 'Level IV (Life Rerouting)';
  status: 'PENDING EXCUSES' | 'RATIFIED AS IRREVERSIBLE' | 'UNDER ARCHIVAL DENIAL';
  officialStamp: 'APPROVED' | 'IRREVERSIBLE' | 'QUESTIONABLE';
}

export interface TickerAnnouncement {
  code: string;
  headline: string;
  directive: string;
  urgency: 'HIGH' | 'MAXIMAL' | 'PERPETUAL';
}

export interface AppealRecord {
  docketNo: string;
  petitioner: string;
  offense: string;
  pleaBasis: string;
  penanceOffer: string;
  status: 'PENDING/DENIED';
  magistrateRemark: string;
  filedTime: string;
}
