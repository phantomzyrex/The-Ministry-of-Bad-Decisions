import React, { useState, useEffect, useRef, useMemo } from 'react';
import { ARCHIVE_RELEASES, ArchivalPressRelease } from './PressReleaseArchiveModal';
import { PRE_SEEDED_HISTORICAL_RECORDS } from './HistoricalArchives';
import { DEPARTMENTS } from './DepartmentalDirectory';
import { HistoricalBlunderRecord, Department } from '../types';
import { 
  Search, 
  X, 
  FileText, 
  History, 
  Building2, 
  ArrowRight, 
  Sparkles, 
  Filter,
  AlertTriangle,
  Clock,
  Stamp,
  ExternalLink
} from 'lucide-react';

export type SearchCategoryFilter = 'all' | 'gazette' | 'historical' | 'directory';

export interface SearchResultItem {
  id: string;
  category: 'gazette' | 'historical' | 'directory';
  categoryLabel: string;
  code: string;
  title: string;
  subtitle: string;
  snippet: string;
  badge?: string;
  badgeColor?: string;
}

interface GlobalSearchBarProps {
  onSelectGazette?: (id: string) => void;
  onSelectHistorical?: (id: string) => void;
  onSelectDepartment?: (id: string) => void;
  className?: string;
}

export const GlobalSearchBar: React.FC<GlobalSearchBarProps> = ({
  onSelectGazette,
  onSelectHistorical,
  onSelectDepartment,
  className = '',
}) => {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<SearchCategoryFilter>('all');
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Global keyboard shortcut to focus search: Ctrl+K, Cmd+K, or pressing '/' when not in input
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        inputRef.current?.focus();
        setIsOpen(true);
      } else if (e.key === '/' && document.activeElement !== inputRef.current && !['INPUT', 'TEXTAREA'].includes((document.activeElement?.tagName || ''))) {
        e.preventDefault();
        inputRef.current?.focus();
        setIsOpen(true);
      } else if (e.key === 'Escape') {
        setIsOpen(false);
        inputRef.current?.blur();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Compile search results from all 3 registers
  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    const list: SearchResultItem[] = [];

    // 1. Official Gazette
    ARCHIVE_RELEASES.forEach((pr) => {
      const fullText = `${pr.title} ${pr.summary} ${pr.dispatchNo} ${pr.statutoryReference} ${pr.signatory} ${pr.category} ${pr.bodyParagraphs.join(' ')}`.toLowerCase();
      if (!q || fullText.includes(q)) {
        list.push({
          id: pr.id,
          category: 'gazette',
          categoryLabel: 'Official Gazette',
          code: pr.dispatchNo,
          title: pr.title,
          subtitle: `${pr.date} • Signatory: ${pr.signatory}`,
          snippet: pr.summary,
          badge: pr.approvalStamp.status,
          badgeColor: 'border-red-500 bg-red-950/80 text-red-200',
        });
      }
    });

    // 2. Historical Archives
    PRE_SEEDED_HISTORICAL_RECORDS.forEach((rec) => {
      const fullText = `${rec.title} ${rec.caseFileNo} ${rec.dateOrEra} ${rec.historicalFigureOrGroup} ${rec.historicalContext} ${rec.unredactedText} ${rec.officialMinisterialRuling}`.toLowerCase();
      if (!q || fullText.includes(q)) {
        list.push({
          id: rec.id,
          category: 'historical',
          categoryLabel: 'Historical Archives',
          code: rec.caseFileNo,
          title: rec.title,
          subtitle: `${rec.dateOrEra} • ${rec.historicalFigureOrGroup}`,
          snippet: rec.historicalContext,
          badge: rec.classificationLevel,
          badgeColor: 'border-amber-500 bg-amber-950/80 text-amber-200',
        });
      }
    });

    // 3. Departmental Directory
    DEPARTMENTS.forEach((dept) => {
      const fullText = `${dept.name} ${dept.code} ${dept.branch} ${dept.latinMotto} ${dept.missionStatement} ${dept.dossierSummary} ${dept.commonOffenses.join(' ')}`.toLowerCase();
      if (!q || fullText.includes(q)) {
        list.push({
          id: dept.id,
          category: 'directory',
          categoryLabel: 'Disaster Directory',
          code: dept.code,
          title: dept.name,
          subtitle: `${dept.branch} • Motto: "${dept.latinMotto}"`,
          snippet: dept.missionStatement,
          badge: dept.dangerLevel,
          badgeColor: 'border-orange-500 bg-orange-950/80 text-orange-200',
        });
      }
    });

    // Filter by active category if selected
    if (activeCategory !== 'all') {
      return list.filter((item) => item.category === activeCategory);
    }

    return list;
  }, [query, activeCategory]);

  const handleSelectResult = (item: SearchResultItem) => {
    setIsOpen(false);

    if (item.category === 'gazette') {
      if (onSelectGazette) {
        onSelectGazette(item.id);
      } else {
        const el = document.getElementById('official-press-release-section');
        el?.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (item.category === 'historical') {
      if (onSelectHistorical) {
        onSelectHistorical(item.id);
      } else {
        const el = document.getElementById('historical-archives-section');
        el?.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (item.category === 'directory') {
      if (onSelectDepartment) {
        onSelectDepartment(item.id);
      } else {
        const el = document.getElementById('departmental-directory-section');
        el?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const highlightMatch = (text: string, highlight: string) => {
    if (!highlight.trim()) return text;
    const parts = text.split(new RegExp(`(${highlight.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi'));
    return parts.map((part, i) =>
      part.toLowerCase() === highlight.toLowerCase() ? (
        <mark key={i} className="bg-[#fbbf24] text-[#1e1309] font-bold px-0.5 rounded-xs">
          {part}
        </mark>
      ) : (
        part
      )
    );
  };

  const totalGazetteCount = ARCHIVE_RELEASES.length;
  const totalHistoricalCount = PRE_SEEDED_HISTORICAL_RECORDS.length;
  const totalDirectoryCount = DEPARTMENTS.length;
  const totalRecords = totalGazetteCount + totalHistoricalCount + totalDirectoryCount;

  return (
    <div ref={searchContainerRef} className={`relative w-full max-w-2xl mx-auto ${className}`}>
      
      {/* ── Search Input Box ── */}
      <div className="relative group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-[#d4af37] via-[#f59e0b] to-[#8b1828] rounded-sm opacity-60 group-hover:opacity-100 transition duration-300 blur-xs" />
        
        <div className="relative flex items-center bg-[#070e1a] border-2 border-[#d4af37] shadow-[0_4px_20px_rgba(0,0,0,0.6)]">
          <div className="pl-3.5 pr-2 py-2 flex items-center pointer-events-none text-[#d4af37]">
            <Search className="w-4 h-4 md:w-5 md:h-5 animate-pulse" />
          </div>

          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setIsOpen(true);
            }}
            onFocus={() => setIsOpen(true)}
            placeholder="Search Sovereign Gazette, Historical Archives, &amp; Disaster Directory..."
            className="w-full bg-transparent py-2.5 pr-20 text-xs md:text-sm font-typewriter text-[#fef08a] placeholder-[#94a3b8] focus:outline-none"
          />

          {/* Quick Clear or Keyboard Shortcut Helper */}
          <div className="pr-3 flex items-center gap-1.5 shrink-0">
            {query ? (
              <button
                type="button"
                onClick={() => {
                  setQuery('');
                  inputRef.current?.focus();
                }}
                className="p-1 text-[#94a3b8] hover:text-[#fef08a] cursor-pointer"
                title="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            ) : (
              <div className="hidden sm:flex items-center gap-1 font-mono text-[10px] text-[#d4af37] bg-[#14233c] border border-[#d4af37]/40 px-1.5 py-0.5 rounded-xs select-none">
                <span>⌘K</span>
                <span className="text-[#94a3b8]">or</span>
                <span>/</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ── Search Results Dropdown Overlay ── */}
      {isOpen && (
        <div className="absolute left-0 right-0 top-full mt-2 z-50 bg-[#0f172a] text-[#f8fafc] border-2 border-[#d4af37] shadow-[0_20px_60px_rgba(0,0,0,0.9)] rounded-sm overflow-hidden animate-in fade-in slide-in-from-top-2 duration-150">
          
          {/* Header Bar with Filter Tabs */}
          <div className="p-2.5 sm:p-3 bg-[#1e293b] border-b border-[#d4af37]/40 flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-1.5 text-[11px] font-typewriter text-[#fde047] font-bold uppercase tracking-wider">
              <Filter className="w-3.5 h-3.5 text-[#fbbf24]" />
              <span>Sovereign Registry Search</span>
              <span className="text-[#94a3b8] font-normal">({results.length} found)</span>
            </div>

            {/* Category Filter Chips */}
            <div className="flex items-center gap-1 text-[10px] font-typewriter">
              <button
                type="button"
                onClick={() => setActiveCategory('all')}
                className={`px-2 py-0.5 border cursor-pointer transition-colors ${
                  activeCategory === 'all'
                    ? 'bg-[#d4af37] text-[#0f172a] border-[#d4af37] font-bold'
                    : 'bg-[#0f172a] text-[#cbd5e1] border-[#475569] hover:border-[#d4af37]'
                }`}
              >
                All ({totalRecords})
              </button>

              <button
                type="button"
                onClick={() => setActiveCategory('gazette')}
                className={`px-2 py-0.5 border cursor-pointer transition-colors flex items-center gap-1 ${
                  activeCategory === 'gazette'
                    ? 'bg-[#8b1828] text-[#fef08a] border-[#ef4444] font-bold'
                    : 'bg-[#0f172a] text-[#cbd5e1] border-[#475569] hover:border-[#ef4444]'
                }`}
              >
                <FileText className="w-2.5 h-2.5" /> Gazette ({totalGazetteCount})
              </button>

              <button
                type="button"
                onClick={() => setActiveCategory('historical')}
                className={`px-2 py-0.5 border cursor-pointer transition-colors flex items-center gap-1 ${
                  activeCategory === 'historical'
                    ? 'bg-[#1b2a47] text-[#fde047] border-[#38bdf8] font-bold'
                    : 'bg-[#0f172a] text-[#cbd5e1] border-[#475569] hover:border-[#38bdf8]'
                }`}
              >
                <History className="w-2.5 h-2.5" /> Historical ({totalHistoricalCount})
              </button>

              <button
                type="button"
                onClick={() => setActiveCategory('directory')}
                className={`px-2 py-0.5 border cursor-pointer transition-colors flex items-center gap-1 ${
                  activeCategory === 'directory'
                    ? 'bg-[#78350f] text-[#fef08a] border-[#f59e0b] font-bold'
                    : 'bg-[#0f172a] text-[#cbd5e1] border-[#475569] hover:border-[#f59e0b]'
                }`}
              >
                <Building2 className="w-2.5 h-2.5" /> Directory ({totalDirectoryCount})
              </button>
            </div>
          </div>

          {/* Results List */}
          <div className="max-h-[380px] overflow-y-auto divide-y divide-[#334155]/60 bg-[#090e17]">
            {results.length === 0 ? (
              <div className="p-8 text-center font-serif text-[#94a3b8] space-y-3">
                <AlertTriangle className="w-8 h-8 text-[#f59e0b] mx-auto opacity-70" />
                <div className="text-sm font-typewriter text-[#fef08a]">
                  No official misadventures or decrees matching &ldquo;{query}&rdquo;
                </div>
                <p className="text-xs text-[#94a3b8] italic max-w-md mx-auto">
                  The Ministry records only ratified blunders. Try searching for &ldquo;2 AM Texts&rdquo;, &ldquo;Caesar&rdquo;, &ldquo;Bangs&rdquo;, &ldquo;IKEA&rdquo;, &ldquo;Trojan Horse&rdquo;, or &ldquo;Impulse Buy&rdquo;.
                </p>
                <div className="pt-2 flex flex-wrap items-center justify-center gap-1.5 text-[11px] font-typewriter">
                  {['2 AM', 'Caesar', 'Bangs', 'IKEA', 'Trojan', 'Advice'].map((tag) => (
                    <button
                      key={tag}
                      type="button"
                      onClick={() => setQuery(tag)}
                      className="px-2 py-0.5 bg-[#1e293b] hover:bg-[#334155] text-[#fde047] border border-[#d4af37]/40 cursor-pointer"
                    >
                      &ldquo;{tag}&rdquo;
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              results.map((item) => (
                <div
                  key={`${item.category}-${item.id}`}
                  onClick={() => handleSelectResult(item)}
                  className="p-3 sm:p-4 hover:bg-[#162238] transition-colors cursor-pointer flex items-start justify-between gap-3 group text-left"
                >
                  <div className="flex-1 min-w-0 space-y-1">
                    {/* Header meta */}
                    <div className="flex flex-wrap items-center gap-2 text-[10px] font-typewriter">
                      <span className={`px-1.5 py-0.2 border uppercase font-bold flex items-center gap-1 ${
                        item.category === 'gazette'
                          ? 'border-red-400 bg-red-950/80 text-red-300'
                          : item.category === 'historical'
                          ? 'border-sky-400 bg-sky-950/80 text-sky-300'
                          : 'border-amber-400 bg-amber-950/80 text-amber-300'
                      }`}>
                        {item.category === 'gazette' && <FileText className="w-2.5 h-2.5" />}
                        {item.category === 'historical' && <History className="w-2.5 h-2.5" />}
                        {item.category === 'directory' && <Building2 className="w-2.5 h-2.5" />}
                        {item.categoryLabel}
                      </span>

                      <span className="font-mono text-[#38bdf8] font-bold">[{item.code}]</span>

                      {item.badge && (
                        <span className={`px-1.5 py-0.2 border text-[9px] font-bold uppercase ${item.badgeColor || 'border-slate-500 bg-slate-900 text-slate-300'}`}>
                          {item.badge}
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h4 className="font-royal font-bold text-xs sm:text-sm text-[#f8fafc] group-hover:text-[#fde047] transition-colors leading-snug">
                      {highlightMatch(item.title, query)}
                    </h4>

                    {/* Subtitle */}
                    <div className="text-[10px] font-typewriter text-[#94a3b8] italic">
                      {item.subtitle}
                    </div>

                    {/* Snippet */}
                    <p className="text-xs font-serif text-[#cbd5e1] line-clamp-2 leading-relaxed">
                      {highlightMatch(item.snippet, query)}
                    </p>
                  </div>

                  {/* Jump Arrow */}
                  <div className="shrink-0 flex items-center gap-1 text-[11px] font-typewriter text-[#d4af37] group-hover:text-[#fde047] pt-1">
                    <span className="hidden sm:inline text-[10px] uppercase font-bold">View Record</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Bar */}
          <div className="p-2 sm:p-2.5 bg-[#0b111c] border-t border-[#d4af37]/40 flex items-center justify-between text-[10px] font-typewriter text-[#94a3b8]">
            <div className="flex items-center gap-2">
              <Sparkles className="w-3 h-3 text-[#d4af37]" />
              <span>Press <strong className="text-[#fde047]">Enter</strong> or click to navigate directly to the sovereign docket.</span>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="text-[#cbd5e1] hover:text-[#fff] underline cursor-pointer"
            >
              Close [Esc]
            </button>
          </div>

        </div>
      )}

    </div>
  );
};
