import { GoogleGenAI, Type } from '@google/genai';

const FALLBACK_BLUNDERS = [
  {
    caseFileNo: 'DKT-ROME-44BC',
    dateOrEra: '15th March, 44 BC (Late Antiquity)',
    historicalFigureOrGroup: 'Gaius Julius Caesar & The Senate Planning Committee',
    title: 'THE DISMISSED CALENDAR NOTIFICATION INCIDENT',
    classificationLevel: 'TOP REGRET',
    redactedText: 'On the morning of the Ides, the Consul was handed ████████ parchment scroll explicitly warning that ████████ senators were concealing ████████ beneath their togas. The Consul remarked: "It is probably just ████████ wishing to discuss aqueduct taxation," and proceeded to the Theatre of Pompey without ████████ bodyguards.',
    unredactedText: 'On the morning of the Ides, the Consul was handed an urgent handwritten parchment scroll explicitly warning that thirty-eight disgruntled senators were concealing pointed iron daggers beneath their togas. The Consul remarked: "It is probably just Publius wishing to discuss aqueduct taxation," and proceeded to the Theatre of Pompey without his imperial Germanic bodyguards.',
    historicalContext: 'Demonstrates catastrophic dismissal of push notifications and calendar event warnings in the Mediterranean theater.',
    officialMinisterialRuling: 'RATIFIED AS IRREVERSIBLE FOLLY. Citizens are reminded that ignoring urgent reminders never results in a tranquil afternoon.',
    archivalOfficer: 'Curator Marcus Aurelius Facepalm',
  },
  {
    caseFileNo: 'DKT-TROY-1184BC',
    dateOrEra: '12th Century BC (Aegean Bronze Age)',
    historicalFigureOrGroup: 'The Trojan Municipal Customs and Quarantine Authority',
    title: 'THE UNVETTED WOODEN EQUINE RECEPTION PROTOCOL',
    classificationLevel: 'CLASSIFIED ∞',
    redactedText: 'The City Council observed a colossal ████████ pine wooden quadruped abandoned outside the Skaian gates by ████████ Greek armada. Priest Laocoön screamed: "Do not bring ████████ inside!" Council promptly voted ████████ to 1 to haul the horse inside because "it makes for splendid ████████ city square decor."',
    unredactedText: 'The City Council observed a colossal seventy-foot hollow pine wooden quadruped abandoned outside the Skaian gates by the departing Greek armada. Priest Laocoön screamed: "Do not bring this suspicious effigy inside!" Council promptly voted 14 to 1 to haul the horse inside because "it makes for splendid rustic aesthetic city square decor."',
    historicalContext: 'Foundational case study in accepting unverified courier deliveries without checking parcel contents.',
    officialMinisterialRuling: 'SOVEREIGN CLASSIFICATION: CATASTROPHIC REGRET. The Council is awarded the Bronze Laurel of Terminal Gullibility.',
    archivalOfficer: 'Chief Inspector Priam Regrettus',
  },
  {
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
    caseFileNo: 'DKT-VICT-1888',
    dateOrEra: 'November 1888 (High Victorian London)',
    historicalFigureOrGroup: 'The Royal Society of Ill-Advised Polar Haberdashery',
    title: 'THE 40-POUND VELVET TOP HAT ARCTIC EXPEDITION',
    classificationLevel: 'EYES ONLY',
    redactedText: 'Expedition Commander Sir Humphrey ████████ embarked upon the Northwest Passage equipped with 14 crates of ████████ and 62 beaver-felt top hats. When crew complained of frostbite, Sir Humphrey declared: "A gentleman in ████████ is impervious to ████████ degrees below zero." All sledges sank within ████████ yards.',
    unredactedText: 'Expedition Commander Sir Humphrey Chutney-Smythe embarked upon the Northwest Passage equipped with 14 crates of lavender marmalade and 62 beaver-felt top hats. When crew complained of frostbite, Sir Humphrey declared: "A gentleman in proper tailored haberdashery is impervious to forty-eight degrees below zero." All sledges sank within eighty yards.',
    historicalContext: 'Severe prioritization of sartorial superiority over thermal physics in the Canadian archipelago.',
    officialMinisterialRuling: 'ARCHIVALLY SEALED. Form 102 (Frozen Dignity) applied with sovereign prejudice.',
    archivalOfficer: 'Arch-Archivist Lord Percival Shiver',
  },
  {
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

export default async function handler(req: any, res: any) {
  // Set CORS headers for Vercel deployment
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Parse body if it came as string
  let body = req.body;
  if (typeof body === 'string') {
    try {
      body = JSON.parse(body);
    } catch {
      body = {};
    }
  }

  const { era, prompt, customKeyword } = body || {};

  const apiKey = process.env.GEMINI_API_KEY;
  if (apiKey) {
    try {
      const aiClient = new GoogleGenAI({
        apiKey,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          },
        },
      });

      const systemInstruction = `You are the Grand High Archivist for "The Ministry of Bad Decisions" — a satirical sovereign government registry for historical catastrophes and foolish life choices.
Your duty is to generate an absurd, hilarious, deadpan bureaucratic report about a real or fictional historical blunder.
The tone must be dry, pompous, self-important, and legalistic (19th-century royal government gazette meets declassified dossier).

CRITICAL FORMAT RULES:
1. "redactedText": Must contain 3 to 6 instances of black-bar redactions written explicitly as "████████" (e.g. "The King ate ████████ and declared war on ████████").
2. "unredactedText": The exact same paragraph but with the redacted text unmasked (revealing the petty or absurd truth).
3. "caseFileNo": Formatted like "DKT-ERA-YEAR" (e.g. "DKT-MED-1348").
4. "classificationLevel": Must be one of: "ULTRA-SECRET", "TOP REGRET", "CLASSIFIED ∞", "EYES ONLY".
5. Keep it family-friendly, witty, satirical, and focused on absurd decisions (e.g., building a moat of gravy, refusing to read instructions, wearing full armor while swimming, trading gold for cheese).`;

      const userPrompt = `Generate a classified historical blunder record.
Era/Theme preference: ${era || 'Any historical era from Bronze Age to Y2K'}
Specific motif/keywords: ${customKeyword || prompt || 'An unprovoked, pompous, and completely avoidable decision'}

Return valid JSON conforming to the requested schema.`;

      const response = await aiClient.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: userPrompt,
        config: {
          systemInstruction,
          responseMimeType: 'application/json',
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              caseFileNo: { type: Type.STRING },
              dateOrEra: { type: Type.STRING },
              historicalFigureOrGroup: { type: Type.STRING },
              title: { type: Type.STRING },
              classificationLevel: {
                type: Type.STRING,
                enum: ['ULTRA-SECRET', 'TOP REGRET', 'CLASSIFIED ∞', 'EYES ONLY'],
              },
              redactedText: { type: Type.STRING },
              unredactedText: { type: Type.STRING },
              historicalContext: { type: Type.STRING },
              officialMinisterialRuling: { type: Type.STRING },
              archivalOfficer: { type: Type.STRING },
            },
            required: [
              'caseFileNo',
              'dateOrEra',
              'historicalFigureOrGroup',
              'title',
              'classificationLevel',
              'redactedText',
              'unredactedText',
              'historicalContext',
              'officialMinisterialRuling',
              'archivalOfficer',
            ],
          },
        },
      });

      const parsed = JSON.parse(response.text?.trim() || '{}');
      if (parsed.title && parsed.redactedText) {
        return res.status(200).json({
          ...parsed,
          id: `ai-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
          isCustomGenerated: true,
        });
      }
    } catch (err) {
      console.warn('Vercel serverless Gemini call failed or quota reached; falling back:', err);
    }
  }

  // Fallback to procedural records
  const randomFallback = FALLBACK_BLUNDERS[Math.floor(Math.random() * FALLBACK_BLUNDERS.length)];
  return res.status(200).json({
    ...randomFallback,
    id: `fb-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
    isCustomGenerated: true,
  });
}
