import React, { useState, useCallback } from 'react';
import './App.css';

interface Plague {
  id: number;
  name: string;
  emoji?: string;
  icon?: React.ReactNode;
  color: string;
}

const RedRiver = () => (
  <svg viewBox="0 0 80 56" className="plague-svg">
    <rect width="80" height="56" fill="#c8f0c8" rx="6"/>
    <rect x="0" y="0" width="80" height="14" fill="#7ec87e"/>
    <rect x="0" y="42" width="80" height="14" fill="#7ec87e"/>
    <rect x="0" y="14" width="80" height="28" fill="#e74c3c"/>
    <path d="M0,22 Q8,18 16,22 Q24,26 32,22 Q40,18 48,22 Q56,26 64,22 Q72,18 80,22" stroke="#fff" strokeWidth="2.5" fill="none" strokeOpacity="0.6"/>
    <path d="M0,30 Q8,26 16,30 Q24,34 32,30 Q40,26 48,30 Q56,34 64,30 Q72,26 80,30" stroke="#fff" strokeWidth="2.5" fill="none" strokeOpacity="0.6"/>
    <path d="M0,38 Q8,34 16,38 Q24,42 32,38 Q40,34 48,38 Q56,42 64,38 Q72,34 80,38" stroke="#fff" strokeWidth="2.5" fill="none" strokeOpacity="0.6"/>
  </svg>
);

const ScratchingKid = () => (
  <svg viewBox="0 0 80 80" className="plague-svg">
    <rect x="28" y="52" width="24" height="22" rx="4" fill="#4fc3f7"/>
    <rect x="35" y="48" width="10" height="8" fill="#FDBCB4"/>
    <circle cx="40" cy="34" r="20" fill="#FDBCB4"/>
    <path d="M20,30 Q21,12 40,13 Q59,12 60,30 Q58,18 40,17 Q22,18 20,30Z" fill="#8B4513"/>
    <path d="M31,31 Q34,29 37,31" stroke="#333" strokeWidth="2" fill="none" strokeLinecap="round"/>
    <path d="M43,31 Q46,29 49,31" stroke="#333" strokeWidth="2" fill="none" strokeLinecap="round"/>
    <path d="M33,42 Q37,40 40,41 Q43,40 47,42" stroke="#a0522d" strokeWidth="2" fill="none" strokeLinecap="round"/>
    <path d="M55,30 Q65,18 68,24 Q66,28 60,26" stroke="#FDBCB4" strokeWidth="6" fill="none" strokeLinecap="round"/>
    <line x1="62" y1="20" x2="65" y2="16" stroke="#FDBCB4" strokeWidth="3" strokeLinecap="round"/>
    <line x1="65" y1="22" x2="69" y2="19" stroke="#FDBCB4" strokeWidth="3" strokeLinecap="round"/>
    <line x1="55" y1="22" x2="59" y2="26" stroke="#e74c3c" strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="57" y1="19" x2="61" y2="23" stroke="#e74c3c" strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="53" y1="25" x2="57" y2="29" stroke="#e74c3c" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const HailCloud = () => (
  <svg viewBox="0 0 80 68" className="plague-svg">
    <rect width="80" height="68" fill="#c9e8f8" rx="6"/>
    <ellipse cx="40" cy="24" rx="26" ry="14" fill="#ecf0f1"/>
    <ellipse cx="22" cy="28" rx="14" ry="10" fill="#ecf0f1"/>
    <ellipse cx="58" cy="28" rx="14" ry="10" fill="#ecf0f1"/>
    <line x1="24" y1="36" x2="24" y2="41" stroke="#90bcd4" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="24" cy="45" r="4" fill="white" stroke="#90bcd4" strokeWidth="1.5"/>
    <line x1="40" y1="38" x2="40" y2="43" stroke="#90bcd4" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="40" cy="47" r="4" fill="white" stroke="#90bcd4" strokeWidth="1.5"/>
    <line x1="56" y1="36" x2="56" y2="41" stroke="#90bcd4" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="56" cy="45" r="4" fill="white" stroke="#90bcd4" strokeWidth="1.5"/>
    <line x1="16" y1="48" x2="16" y2="52" stroke="#90bcd4" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="16" cy="56" r="3" fill="white" stroke="#90bcd4" strokeWidth="1.5"/>
    <line x1="64" y1="48" x2="64" y2="52" stroke="#90bcd4" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="64" cy="56" r="3" fill="white" stroke="#90bcd4" strokeWidth="1.5"/>
    <line x1="32" y1="52" x2="32" y2="55" stroke="#90bcd4" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="32" cy="59" r="3" fill="white" stroke="#90bcd4" strokeWidth="1.5"/>
    <line x1="50" y1="52" x2="50" y2="55" stroke="#90bcd4" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="50" cy="59" r="3" fill="white" stroke="#90bcd4" strokeWidth="1.5"/>
  </svg>
);

const ScreamingEgyptian = () => (
  <svg viewBox="0 0 80 90" className="plague-svg">
    <rect width="80" height="90" fill="#f0d9a0" rx="6"/>
    <path d="M28,8 Q40,4 52,8 L56,32 L40,38 L24,32 Z" fill="#1a6b9a"/>
    <line x1="34" y1="10" x2="30" y2="34" stroke="#f5c842" strokeWidth="2"/>
    <line x1="40" y1="8"  x2="40" y2="36" stroke="#f5c842" strokeWidth="2"/>
    <line x1="46" y1="10" x2="50" y2="34" stroke="#f5c842" strokeWidth="2"/>
    <ellipse cx="40" cy="36" rx="16" ry="17" fill="#d4a57a"/>
    <path d="M30,27 Q34,23 38,26" stroke="#6b4226" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
    <path d="M42,26 Q46,23 50,27" stroke="#6b4226" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
    <ellipse cx="34" cy="32" rx="4" ry="4.5" fill="white"/>
    <ellipse cx="46" cy="32" rx="4" ry="4.5" fill="white"/>
    <circle cx="34" cy="33" r="2.2" fill="#333"/>
    <circle cx="46" cy="33" r="2.2" fill="#333"/>
    <ellipse cx="40" cy="46" rx="7" ry="6" fill="#3a1000"/>
    <path d="M33,43 Q40,41 47,43" stroke="#c07050" strokeWidth="1" fill="none"/>
    <rect x="26" y="52" width="28" height="32" rx="4" fill="#e8c86a"/>
    <path d="M26,60 Q40,67 54,60" stroke="#1a6b9a" strokeWidth="3" fill="none"/>
    <path d="M26,62 Q14,54 10,46" stroke="#d4a57a" strokeWidth="7" fill="none" strokeLinecap="round"/>
    <path d="M54,62 Q66,54 70,46" stroke="#d4a57a" strokeWidth="7" fill="none" strokeLinecap="round"/>
    <text x="5"  y="36" fontSize="14" fill="#e74c3c" fontWeight="bold">!</text>
    <text x="67" y="36" fontSize="14" fill="#e74c3c" fontWeight="bold">!</text>
  </svg>
);

const SickCow = () => (
  <svg viewBox="0 0 90 72" className="plague-svg">
    <rect width="90" height="72" fill="#e8f5e9" rx="6"/>
    <ellipse cx="42" cy="50" rx="30" ry="17" fill="white" stroke="#ccc" strokeWidth="1.5"/>
    <ellipse cx="36" cy="46" rx="8" ry="6" fill="#555"/>
    <ellipse cx="52" cy="54" rx="6" ry="5" fill="#555"/>
    <rect x="20" y="61" width="7" height="11" rx="3" fill="white" stroke="#ccc" strokeWidth="1.5"/>
    <rect x="32" y="63" width="7" height="9"  rx="3" fill="white" stroke="#ccc" strokeWidth="1.5"/>
    <rect x="48" y="63" width="7" height="9"  rx="3" fill="white" stroke="#ccc" strokeWidth="1.5"/>
    <rect x="60" y="61" width="7" height="11" rx="3" fill="white" stroke="#ccc" strokeWidth="1.5"/>
    <rect x="62" y="34" width="13" height="20" rx="6" fill="white" stroke="#ccc" strokeWidth="1.5"/>
    <ellipse cx="73" cy="26" rx="14" ry="12" fill="white" stroke="#ccc" strokeWidth="1.5"/>
    <ellipse cx="61" cy="19" rx="5" ry="7" fill="white" stroke="#ccc" strokeWidth="1.5"/>
    <ellipse cx="85" cy="19" rx="5" ry="7" fill="white" stroke="#ccc" strokeWidth="1.5"/>
    <path d="M63,14 Q58,6 55,8"  stroke="#d4a843" strokeWidth="3" fill="none" strokeLinecap="round"/>
    <path d="M83,14 Q88,6 91,8"  stroke="#d4a843" strokeWidth="3" fill="none" strokeLinecap="round"/>
    <line x1="66" y1="21" x2="70" y2="25" stroke="#666" strokeWidth="2" strokeLinecap="round"/>
    <line x1="70" y1="21" x2="66" y2="25" stroke="#666" strokeWidth="2" strokeLinecap="round"/>
    <line x1="76" y1="21" x2="80" y2="25" stroke="#666" strokeWidth="2" strokeLinecap="round"/>
    <line x1="80" y1="21" x2="76" y2="25" stroke="#666" strokeWidth="2" strokeLinecap="round"/>
    <rect x="75" y="30" width="4" height="14" rx="2" fill="white" stroke="#e74c3c" strokeWidth="1.5"/>
    <circle cx="77" cy="44" r="4" fill="#e74c3c"/>
    <rect x="76" y="32" width="2" height="8" rx="1" fill="#e74c3c"/>
  </svg>
);

const BoilsHand = () => (
  <svg viewBox="0 0 70 82" className="plague-svg">
    <rect width="70" height="82" fill="#fff3e0" rx="6"/>
    <path d="M14,58 Q11,42 17,30 Q21,18 28,20 L42,20 Q49,18 53,30 Q59,42 56,58 Q52,70 35,72 Q18,70 14,58Z" fill="#FDBCB4" stroke="#e0a090" strokeWidth="1.5"/>
    <rect x="17" y="8"  width="9"  height="16" rx="4.5" fill="#FDBCB4" stroke="#e0a090" strokeWidth="1.5"/>
    <rect x="28" y="4"  width="9"  height="18" rx="4.5" fill="#FDBCB4" stroke="#e0a090" strokeWidth="1.5"/>
    <rect x="39" y="6"  width="9"  height="17" rx="4.5" fill="#FDBCB4" stroke="#e0a090" strokeWidth="1.5"/>
    <rect x="49" y="12" width="8"  height="15" rx="4"   fill="#FDBCB4" stroke="#e0a090" strokeWidth="1.5"/>
    <path d="M12,44 Q5,38 7,28 Q9,22 16,26 L17,42Z" fill="#FDBCB4" stroke="#e0a090" strokeWidth="1.5"/>
    <circle cx="28" cy="52" r="6.5" fill="#e74c3c" opacity="0.9"/>
    <circle cx="28" cy="52" r="3"   fill="#ff8a80"/>
    <circle cx="43" cy="46" r="5.5" fill="#e74c3c" opacity="0.9"/>
    <circle cx="43" cy="46" r="2.5" fill="#ff8a80"/>
    <circle cx="35" cy="62" r="5.5" fill="#e74c3c" opacity="0.9"/>
    <circle cx="35" cy="62" r="2.5" fill="#ff8a80"/>
    <circle cx="21" cy="38" r="4.5" fill="#e74c3c" opacity="0.9"/>
    <circle cx="21" cy="38" r="2"   fill="#ff8a80"/>
    <circle cx="49" cy="57" r="4.5" fill="#e74c3c" opacity="0.9"/>
    <circle cx="49" cy="57" r="2"   fill="#ff8a80"/>
  </svg>
);

const DarkEgyptian = () => (
  <svg viewBox="0 0 80 90" className="plague-svg">
    <rect width="80" height="90" fill="#12122a" rx="6"/>
    <circle cx="12" cy="10" r="1.2" fill="white" opacity="0.5"/>
    <circle cx="66" cy="7"  r="1.5" fill="white" opacity="0.4"/>
    <circle cx="72" cy="22" r="1"   fill="white" opacity="0.5"/>
    <circle cx="8"  cy="28" r="1"   fill="white" opacity="0.3"/>
    <circle cx="55" cy="14" r="1"   fill="white" opacity="0.4"/>
    <path d="M36,18 Q46,14 50,20 L48,38 L36,38 Z" fill="#22224a"/>
    <ellipse cx="40" cy="34" rx="12" ry="13" fill="#22224a"/>
    <path d="M30,46 L26,84 L54,84 L50,46 Z" fill="#22224a"/>
    <path d="M30,58 Q18,56 10,54" stroke="#22224a" strokeWidth="8" fill="none" strokeLinecap="round"/>
    <circle cx="10" cy="54" r="5" fill="#f5c842" opacity="0.18"/>
    <circle cx="10" cy="54" r="3" fill="#f5c842" opacity="0.12"/>
    <text x="56" y="34" fontSize="20" fill="#f5c842" fontWeight="bold" opacity="0.55">?</text>
  </svg>
);

const PLAGUES: Plague[] = [
  { id: 1,  name: 'דָּם',              icon: <RedRiver/>,          color: '#e74c3c' },
  { id: 2,  name: 'צְפַרְדֵּעַ',        emoji: '🐸',                color: '#27ae60' },
  { id: 3,  name: 'כִּנִּים',           icon: <ScratchingKid/>,     color: '#8e44ad' },
  { id: 4,  name: 'עָרוֹב',            emoji: '🦁',                 color: '#e67e22' },
  { id: 5,  name: 'דֶּבֶר',            icon: <SickCow/>,            color: '#795548' },
  { id: 6,  name: 'שְׁחִין',           icon: <BoilsHand/>,          color: '#e91e63' },
  { id: 7,  name: 'בָּרָד',            icon: <HailCloud/>,          color: '#2980b9' },
  { id: 8,  name: 'אַרְבֶּה',          emoji: '🦗',                 color: '#2ecc71' },
  { id: 9,  name: 'חֹשֶׁךְ',           icon: <DarkEgyptian/>,       color: '#34495e' },
  { id: 10, name: 'מַכַּת בְּכוֹרוֹת', icon: <ScreamingEgyptian/>,  color: '#f39c12' },
];

function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

type Slots = (Plague | null)[];
type Selection = { plague: Plague; from: 'bank' | number } | null;

export default function App() {
  const [bank, setBank]       = useState<Plague[]>(() => shuffleArray(PLAGUES));
  const [slots, setSlots]     = useState<Slots>(Array(10).fill(null));
  const [dragging, setDragging] = useState<Selection>(null);
  const [selected, setSelected] = useState<Selection>(null);
  const [completed, setCompleted] = useState(false);
  const [checked, setChecked]   = useState(false);

  const allFilled = slots.every(s => s !== null);

  /* ── core move ── */
  const movePlague = useCallback((plague: Plague, from: 'bank' | number, toSlot: number) => {
    const newBank  = [...bank];
    const newSlots = [...slots];
    const displaced = newSlots[toSlot];

    newSlots[toSlot] = plague;

    if (from === 'bank') {
      const idx = newBank.findIndex(p => p.id === plague.id);
      if (idx !== -1) newBank.splice(idx, 1);
      if (displaced) newBank.push(displaced);
    } else {
      newSlots[from as number] = displaced;
    }

    setBank(newBank);
    setSlots(newSlots);
    setChecked(false);
  }, [bank, slots]);

  const returnToBank = useCallback((plague: Plague, fromSlot: number) => {
    const newSlots = [...slots];
    newSlots[fromSlot] = null;
    setBank(prev => [...prev, plague]);
    setSlots(newSlots);
    setChecked(false);
  }, [slots]);

  /* ── DRAG (desktop) ── */
  const onDragStartBank = useCallback((plague: Plague) => {
    setDragging({ plague, from: 'bank' });
    setSelected(null);
  }, []);

  const onDragStartSlot = useCallback((plague: Plague, idx: number) => {
    setDragging({ plague, from: idx });
    setSelected(null);
  }, []);

  const onDropSlot = useCallback((e: React.DragEvent, slotIdx: number) => {
    e.preventDefault();
    if (!dragging) return;
    movePlague(dragging.plague, dragging.from, slotIdx);
    setDragging(null);
  }, [dragging, movePlague]);

  const onDropBank = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    if (!dragging || dragging.from === 'bank') { setDragging(null); return; }
    returnToBank(dragging.plague, dragging.from as number);
    setDragging(null);
  }, [dragging, returnToBank]);

  const onDragOver = useCallback((e: React.DragEvent) => e.preventDefault(), []);

  /* ── TAP / CLICK (mobile + desktop) ── */
  const handleCardClick = useCallback((e: React.MouseEvent, plague: Plague, from: 'bank' | number) => {
    e.stopPropagation();
    if (selected) {
      if (selected.plague.id === plague.id && selected.from === from) {
        setSelected(null); // deselect
      } else if (from !== 'bank') {
        movePlague(selected.plague, selected.from, from as number); // swap into slot
        setSelected(null);
      } else {
        setSelected({ plague, from }); // switch selection to bank card
      }
    } else {
      setSelected({ plague, from });
    }
  }, [selected, movePlague]);

  const handleSlotClick = useCallback((slotIdx: number) => {
    if (!selected) return;
    movePlague(selected.plague, selected.from, slotIdx);
    setSelected(null);
  }, [selected, movePlague]);

  const handleBankAreaClick = useCallback(() => {
    if (!selected) return;
    if (selected.from === 'bank') {
      setSelected(null);
    } else {
      returnToBank(selected.plague, selected.from as number);
      setSelected(null);
    }
  }, [selected, returnToBank]);

  /* ── check & reset ── */
  const checkAnswer = useCallback(() => {
    setChecked(true);
    if (slots.every((s, i) => s?.id === i + 1)) setCompleted(true);
  }, [slots]);

  const reset = useCallback(() => {
    setBank(shuffleArray(PLAGUES));
    setSlots(Array(10).fill(null));
    setCompleted(false);
    setChecked(false);
    setDragging(null);
    setSelected(null);
  }, []);

  const slotStatus = (idx: number): 'correct' | 'wrong' | '' => {
    if (!checked) return '';
    const s = slots[idx];
    if (!s) return '';
    return s.id === idx + 1 ? 'correct' : 'wrong';
  };

  const isSelected = (plague: Plague, from: 'bank' | number) =>
    selected?.plague.id === plague.id && selected?.from === from;

  return (
    <div className="app" dir="rtl">
      <header className="header">
        <h1>🏺 עשר המכות 🏺</h1>
        <p>גרור או לחץ כדי להעביר כרטיסייה למספר הנכון</p>
      </header>

      {completed && (
        <div className="success-overlay">
          <div className="success-box">
            <div className="success-emoji">🎉</div>
            <h2>כל הכבוד!</h2>
            <p>סידרת את עשר המכות בסדר הנכון!</p>
            <button className="btn-reset" onClick={reset}>שחק שוב</button>
          </div>
        </div>
      )}

      {/* ── BANK ── */}
      <div
        className={`bank${selected ? ' bank-active' : ''}`}
        onDragOver={onDragOver}
        onDrop={onDropBank}
        onClick={handleBankAreaClick}
      >
        {bank.map(plague => (
          <div
            key={plague.id}
            className={`card${isSelected(plague, 'bank') ? ' card-selected' : ''}`}
            style={{ '--card-color': plague.color } as React.CSSProperties}
            draggable
            onDragStart={() => onDragStartBank(plague)}
            onClick={(e) => handleCardClick(e, plague, 'bank')}
          >
            <span className="card-icon">{plague.icon ?? plague.emoji}</span>
            <span className="card-name">{plague.name}</span>
          </div>
        ))}
        {bank.length === 0 && (
          <p className="bank-empty">כל הכרטיסיות הוצבו ✓</p>
        )}
      </div>

      {/* ── NUMBER AXIS ── */}
      <div className="axis-wrapper">
        <div className="axis">
          {slots.map((slotPlague, i) => (
            <div
              key={i}
              className={`slot${slotPlague ? ' filled' : ''}${slotStatus(i) ? ' ' + slotStatus(i) : ''}${!slotPlague && selected ? ' slot-ready' : ''}`}
              onDragOver={onDragOver}
              onDrop={(e) => onDropSlot(e, i)}
              onClick={() => handleSlotClick(i)}
            >
              {slotPlague ? (
                <div
                  className={`card card-in-slot${isSelected(slotPlague, i) ? ' card-selected' : ''}`}
                  style={{ '--card-color': slotPlague.color } as React.CSSProperties}
                  draggable
                  onDragStart={() => onDragStartSlot(slotPlague, i)}
                  onClick={(e) => handleCardClick(e, slotPlague, i)}
                >
                  <span className="card-icon">{slotPlague.icon ?? slotPlague.emoji}</span>
                  <span className="card-name">{slotPlague.name}</span>
                  {checked && (
                    <span className="slot-mark">
                      {slotPlague.id === i + 1 ? '✓' : '✗'}
                    </span>
                  )}
                </div>
              ) : (
                <div className="slot-placeholder" />
              )}
              <div className="slot-number">{i + 1}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── ACTIONS ── */}
      <div className="actions">
        {allFilled && !completed && (
          <button className="btn-check" onClick={checkAnswer}>
            בדוק תשובה ✔
          </button>
        )}
        <button className="btn-reset" onClick={reset}>התחל מחדש</button>
      </div>

      {checked && !completed && (
        <p className="hint-text">
          יש {slots.filter((s, i) => s && s.id !== i + 1).length} מכות במקום הלא נכון — נסה שוב!
        </p>
      )}
    </div>
  );
}
