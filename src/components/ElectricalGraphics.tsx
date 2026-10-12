import React, { useState } from 'react';

// Indian Modular Concealed Switchboard & MCB Box (Pristine modern work)
export const ConcealedWiringGraphic: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => {
  return (
    <svg viewBox="0 0 600 450" className={`bg-slate-900 rounded-lg select-none ${className}`} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="wallTexture" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1e293b" />
          <stop offset="100%" stopColor="#0f172a" />
        </linearGradient>
        <linearGradient id="copperColor" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#b45309" />
        </linearGradient>
      </defs>

      {/* Wall Plaster Background */}
      <rect x="0" y="0" width="600" height="450" fill="url(#wallTexture)" />

      {/* Embedded PVC Conduit Pipes in Plaster */}
      <path d="M 120 0 L 120 70 Q 120 90 140 90 L 220 90" stroke="#f59e0b" strokeWidth="8" fill="none" opacity="0.4" />
      <path d="M 320 0 L 320 90" stroke="#38bdf8" strokeWidth="8" fill="none" opacity="0.4" />
      <path d="M 460 0 L 460 70 Q 460 90 440 90 L 360 90" stroke="#ef4444" strokeWidth="8" fill="none" opacity="0.4" />

      {/* 8-Way Modular MCB Distribution Board (Left side) */}
      <rect x="50" y="80" width="220" height="280" rx="10" fill="#0b1329" stroke="#334155" strokeWidth="2.5" />
      <rect x="65" y="95" width="190" height="35" rx="4" fill="#020617" />
      <text x="75" y="117" fill="#f8fafc" fontSize="11" fontWeight="bold">HAVELLS 8-WAY SPN DB</text>
      <text x="210" y="117" fill="#10b981" fontSize="9" fontFamily="monospace">415V/240V</text>

      {/* 40A 30mA RCCB Main Isolator */}
      <rect x="70" y="145" width="55" height="75" rx="3" fill="#1e293b" stroke="#475569" strokeWidth="1" />
      <rect x="78" y="155" width="40" height="20" rx="2" fill="#020617" />
      <text x="98" y="169" fill="#f8fafc" fontSize="8" textAnchor="middle" fontWeight="bold">40A RCCB</text>
      <circle cx="88" cy="195" r="5" fill="#f59e0b" />
      <text x="98" y="198" fill="#cbd5e1" fontSize="7">TEST</text>
      <rect x="110" y="185" width="10" height="25" rx="2" fill="#ef4444" />

      {/* Row of SP MCBs (B10, B16, C20 for AC) */}
      {[
        { code: 'B10', label: 'LIGHT', color: '#10b981' },
        { code: 'B16', label: 'POWER', color: '#10b981' },
        { code: 'C20', label: 'AC 1.5T', color: '#38bdf8' },
      ].map((mcb, idx) => {
        const x = 135 + idx * 40;
        return (
          <g key={idx}>
            <rect x={x} y="145" width="34" height="75" rx="3" fill="#1e293b" stroke="#475569" strokeWidth="1" />
            <rect x={x + 5} y="155" width="24" height="18" rx="2" fill="#020617" />
            <text x={x + 17} y="168" fill="#f8fafc" fontSize="8" textAnchor="middle">{mcb.code}</text>
            <rect x={x + 12} y="185" width="10" height="25" rx="2" fill={mcb.color} />
            <text x={x + 17} y="215" fill="#94a3b8" fontSize="7" textAnchor="middle">{mcb.label}</text>
          </g>
        );
      })}

      {/* Neat Wiring Busbars & Neutral Bar */}
      <path d="M 75 240 L 245 240" stroke="#94a3b8" strokeWidth="4" />
      <path d="M 75 270 L 245 270" stroke="#16a34a" strokeWidth="3" />
      <text x="75" y="295" fill="#16a34a" fontSize="9" fontWeight="bold">CHEMICAL EARTHING OK</text>
      <text x="75" y="315" fill="#94a3b8" fontSize="8">Polycab FR Copper Wiring</text>
      <rect x="75" y="325" width="170" height="22" rx="3" fill="#10b981/20" stroke="#10b981" />
      <text x="160" y="340" fill="#10b981" fontSize="9" fontWeight="bold" textAnchor="middle">100% SHOCK PROOF PROTECTED</text>

      {/* 8-Module Roma Modular Switchboard (Right side) */}
      <rect x="310" y="110" width="240" height="210" rx="12" fill="#ffffff" stroke="#cbd5e1" strokeWidth="4" />
      <rect x="325" y="125" width="210" height="180" rx="8" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1.5" />

      {/* Fan Electronic Regulator */}
      <rect x="340" y="140" width="45" height="65" rx="4" fill="#ffffff" stroke="#cbd5e1" />
      <circle cx="362" cy="172" r="16" fill="#0f172a" />
      <circle cx="362" cy="172" r="6" fill="#f59e0b" />
      <text x="362" y="198" fill="#64748b" fontSize="7" textAnchor="middle">FAN 1-5</text>

      {/* Row of Modular Switches with Red Indicator Dot */}
      {[0, 1, 2].map((i) => {
        const x = 395 + i * 42;
        return (
          <g key={i}>
            <rect x={x} y="140" width="34" height="65" rx="3" fill="#ffffff" stroke="#cbd5e1" />
            <rect x={x + 4} y="148" width="26" height="34" rx="2" fill="#f1f5f9" />
            <circle cx={x + 17} cy="154" r="2" fill="#ef4444" />
            <text x={x + 17} y="196" fill="#64748b" fontSize="7" textAnchor="middle">
              {i === 0 ? 'LIGHT 1' : i === 1 ? 'LIGHT 2' : 'TUBE'}
            </text>
          </g>
        );
      })}

      {/* 16A Heavy Power Socket with Switch (for Geyser / Mixer / Iron) */}
      <rect x="340" y="215" width="75" height="75" rx="4" fill="#ffffff" stroke="#cbd5e1" />
      {/* 3-Pin Receptacle */}
      <circle cx="377" cy="242" r="6" fill="#020617" />
      <circle cx="367" cy="262" r="4.5" fill="#020617" />
      <circle cx="387" cy="262" r="4.5" fill="#020617" />
      <text x="377" y="282" fill="#64748b" fontSize="7" textAnchor="middle">16A HEAVY</text>

      <rect x="425" y="215" width="38" height="75" rx="3" fill="#ffffff" stroke="#cbd5e1" />
      <rect x="429" y="225" width="30" height="40" rx="2" fill="#f1f5f9" />
      <circle cx="444" cy="233" r="2.5" fill="#ef4444" />
      <text x="444" y="282" fill="#64748b" fontSize="7" textAnchor="middle">ON/OFF</text>

      {/* Brand Sign */}
      <text x="480" y="340" fill="#f59e0b" fontSize="10" fontWeight="bold">ANCHOR ROMA</text>
      <text x="480" y="355" fill="#94a3b8" fontSize="8">MODULAR BOARD</text>
    </svg>
  );
};

// Indian Agricultural Borewell Motor Starter Panel Graphic
export const BorewellStarterGraphic: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => {
  return (
    <svg viewBox="0 0 600 450" className={`bg-slate-900 rounded-lg select-none ${className}`} xmlns="http://www.w3.org/2000/svg">
      {/* Farm Shivar & Shed Texture */}
      <rect x="0" y="0" width="600" height="450" fill="#0b1712" />

      {/* Heavy Weatherproof Metal Starter Box (L&T Green / Gray) */}
      <rect x="100" y="40" width="400" height="370" rx="12" fill="#1c2e24" stroke="#34d399" strokeWidth="2.5" />
      {/* Box Title Bar */}
      <rect x="120" y="55" width="360" height="45" rx="4" fill="#0d1f15" stroke="#234e38" />
      <text x="300" y="78" fill="#34d399" fontSize="13" fontWeight="bold" textAnchor="middle">
        L&T MK1 3-PHASE SUBMERSIBLE STARTER
      </text>
      <text x="300" y="93" fill="#a7f3d0" fontSize="8" textAnchor="middle" fontFamily="monospace">
        शेती बोरवेल व विहीर मोटर पॅनेल · 7.5 HP TO 15 HP
      </text>

      {/* Dual Round Analog Meters (Voltmeter & Ammeter) */}
      {/* Voltmeter (0 - 500V) */}
      <g transform="translate(145, 120)">
        <circle cx="50" cy="50" r="42" fill="#020617" stroke="#475569" strokeWidth="2" />
        <circle cx="50" cy="50" r="36" fill="#f8fafc" />
        <text x="50" y="40" fill="#020617" fontSize="12" fontWeight="bold" textAnchor="middle">V</text>
        <path d="M 28 62 A 30 30 0 0 1 72 62" stroke="#64748b" strokeWidth="2" fill="none" />
        <line x1="50" y1="50" x2="62" y2="28" stroke="#ef4444" strokeWidth="2" />
        <circle cx="50" cy="50" r="4" fill="#020617" />
        <text x="50" y="80" fill="#020617" fontSize="7" textAnchor="middle" fontWeight="bold">415 VOLT</text>
      </g>

      {/* Ammeter (0 - 30A) */}
      <g transform="translate(355, 120)">
        <circle cx="50" cy="50" r="42" fill="#020617" stroke="#475569" strokeWidth="2" />
        <circle cx="50" cy="50" r="36" fill="#f8fafc" />
        <text x="50" y="40" fill="#020617" fontSize="12" fontWeight="bold" textAnchor="middle">A</text>
        <path d="M 28 62 A 30 30 0 0 1 72 62" stroke="#64748b" strokeWidth="2" fill="none" />
        <line x1="50" y1="50" x2="58" y2="30" stroke="#ef4444" strokeWidth="2" />
        <circle cx="50" cy="50" r="4" fill="#020617" />
        <text x="50" y="80" fill="#020617" fontSize="7" textAnchor="middle" fontWeight="bold">14.5 AMP</text>
      </g>

      {/* Three Phase Indicator Lights (R - Y - B) */}
      <g transform="translate(260, 130)">
        <circle cx="20" cy="20" r="10" fill="#ef4444" stroke="#fca5a5" strokeWidth="1.5" />
        <text x="20" y="40" fill="#fca5a5" fontSize="8" textAnchor="middle" fontWeight="bold">R</text>
        <circle cx="40" cy="20" r="10" fill="#eab308" stroke="#fef08a" strokeWidth="1.5" />
        <text x="40" y="40" fill="#fef08a" fontSize="8" textAnchor="middle" fontWeight="bold">Y</text>
        <circle cx="60" cy="20" r="10" fill="#3b82f6" stroke="#bfdbfe" strokeWidth="1.5" />
        <text x="60" y="40" fill="#bfdbfe" fontSize="8" textAnchor="middle" fontWeight="bold">B</text>
      </g>

      {/* L&T Heavy Push Buttons (Green START, Red STOP) */}
      <g transform="translate(180, 230)">
        {/* START Button */}
        <circle cx="40" cy="40" r="28" fill="#052e16" stroke="#16a34a" strokeWidth="3" />
        <circle cx="40" cy="40" r="20" fill="#15803d" />
        <text x="40" y="45" fill="#ffffff" fontSize="9" fontWeight="black" textAnchor="middle">START</text>
        <text x="40" y="80" fill="#86efac" fontSize="8" textAnchor="middle">सुरू करा</text>

        {/* STOP Button */}
        <circle cx="160" cy="40" r="28" fill="#450a0a" stroke="#dc2626" strokeWidth="3" />
        <circle cx="160" cy="40" r="20" fill="#b91c1c" />
        <text x="160" y="45" fill="#ffffff" fontSize="9" fontWeight="black" textAnchor="middle">STOP</text>
        <text x="160" y="80" fill="#fca5a5" fontSize="8" textAnchor="middle">बंद करा</text>
      </g>

      {/* Electronic Auto-Switch Unit (Bottom Left) */}
      <rect x="130" y="325" width="160" height="65" rx="4" fill="#05150d" stroke="#22c55e" strokeWidth="1.5" />
      <text x="140" y="342" fill="#22c55e" fontSize="9" fontWeight="bold">ELECTRONIC AUTO-SWITCH</text>
      <circle cx="145" cy="355" r="4" fill="#22c55e" />
      <text x="155" y="358" fill="#86efac" fontSize="8">ऑटो मोड चालू (AUTO ON)</text>
      <circle cx="145" cy="372" r="4" fill="#f59e0b" />
      <text x="155" y="375" fill="#fde68a" fontSize="8">१ मिनिट टायमर सेव्ह</text>

      {/* Single-Phasing Preventer & Capacitor Note (Bottom Right) */}
      <rect x="310" y="325" width="165" height="65" rx="4" fill="#05150d" stroke="#38bdf8" strokeWidth="1.5" />
      <text x="320" y="342" fill="#38bdf8" fontSize="9" fontWeight="bold">SINGLE-PHASING PREVENTER</text>
      <text x="320" y="358" fill="#cbd5e1" fontSize="8">मोटर एका फेजवर चालत नाही</text>
      <text x="320" y="374" fill="#eab308" fontSize="8">५ KVAR ऑईल कॅपॅसिटर जोडणी</text>
    </svg>
  );
};

// Indian Home Inverter & Tall Tubular Battery Graphic
export const InverterBatteryGraphic: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => {
  return (
    <svg viewBox="0 0 600 450" className={`bg-slate-900 rounded-lg select-none ${className}`} xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="600" height="450" fill="#0a0f1d" />

      {/* Trolley / Floor Stand */}
      <rect x="120" y="375" width="360" height="25" rx="4" fill="#1e293b" stroke="#334155" />
      <circle cx="150" cy="405" r="8" fill="#020617" stroke="#475569" />
      <circle cx="450" cy="405" r="8" fill="#020617" stroke="#475569" />

      {/* Tall Tubular Heavy Battery (Luminous / Exide style) */}
      <rect x="140" y="190" width="320" height="185" rx="8" fill="#020617" stroke="#475569" strokeWidth="2" />
      {/* Battery Faceplate */}
      <rect x="155" y="205" width="290" height="155" rx="4" fill="#0b172a" />
      
      {/* 6 Acid Level Float Vent Plugs */}
      {[0, 1, 2, 3, 4, 5].map((i) => {
        const x = 175 + i * 44;
        return (
          <g key={i}>
            <rect x={x} y="195" width="20" height="18" rx="3" fill="#e2e8f0" stroke="#94a3b8" />
            <line x1={x + 10} y1="195" x2={x + 10} y2="182" stroke="#ef4444" strokeWidth="2.5" />
            <circle cx={x + 10} cy="180" r="3" fill="#10b981" />
          </g>
        );
      })}

      <text x="300" y="255" fill="#f8fafc" fontSize="16" fontWeight="bold" textAnchor="middle">
        150 Ah TALL TUBULAR BATTERY
      </text>
      <text x="300" y="275" fill="#38bdf8" fontSize="11" textAnchor="middle" fontFamily="monospace">
        36 MONTHS WARRANTY · HEAVY DUTY
      </text>
      <text x="300" y="300" fill="#a7f3d0" fontSize="10" textAnchor="middle">
        ५ ते ६ तास अखंड बॅकअप (पंखा + टीव्ही + दिवे)
      </text>

      {/* Pure Sine Wave Inverter (Mounted on Top) */}
      <rect x="170" y="60" width="260" height="110" rx="8" fill="#0f172a" stroke="#38bdf8" strokeWidth="2" />
      <rect x="185" y="75" width="230" height="80" rx="4" fill="#020617" />
      
      <text x="200" y="98" fill="#f8fafc" fontSize="12" fontWeight="bold">LUMINOUS 900 VA</text>
      <text x="200" y="114" fill="#38bdf8" fontSize="8" fontFamily="monospace">PURE SINE WAVE INVERTER</text>

      {/* Digital LED Display */}
      <rect x="330" y="85" width="75" height="35" rx="3" fill="#0b1a2e" stroke="#1e3a5f" />
      <text x="367" y="100" fill="#10b981" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="monospace">100%</text>
      <text x="367" y="112" fill="#38bdf8" fontSize="7" textAnchor="middle">MAINS ON</text>

      {/* Heavy DC Cables (Red & Black) with Copper Lugs */}
      <path d="M 190 170 Q 150 180 160 215" stroke="#ef4444" strokeWidth="8" fill="none" />
      <path d="M 410 170 Q 450 180 440 215" stroke="#000000" strokeWidth="8" fill="none" />

      {/* Changeover Switch Callout Box */}
      <g transform="translate(455, 75)">
        <rect x="0" y="0" width="130" height="80" rx="6" fill="#0b172a" stroke="#f59e0b" strokeWidth="1.5" />
        <text x="10" y="20" fill="#f59e0b" fontSize="9" fontWeight="bold">BYPASS CHANGEOVER</text>
        <circle cx="30" cy="45" r="16" fill="#020617" stroke="#64748b" />
        <line x1="30" y1="45" x2="38" y2="35" stroke="#f59e0b" strokeWidth="3" />
        <text x="55" y="45" fill="#f8fafc" fontSize="8">१: इन्व्हर्टर</text>
        <text x="55" y="58" fill="#cbd5e1" fontSize="8">२: महावितरण मेन</text>
      </g>
    </svg>
  );
};

// Motor & Ceiling Fan Rewinding Graphic
export const MotorRewindingGraphic: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => {
  return (
    <svg viewBox="0 0 600 450" className={`bg-slate-900 rounded-lg select-none ${className}`} xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="600" height="450" fill="#080d1a" />

      {/* Workshop Stator Core Outer Shell */}
      <circle cx="300" cy="225" r="160" fill="#1e293b" stroke="#475569" strokeWidth="4" />
      <circle cx="300" cy="225" r="120" fill="#0b1329" stroke="#64748b" strokeWidth="2" />
      <circle cx="300" cy="225" r="60" fill="#020617" stroke="#334155" strokeWidth="2" />

      {/* 24 Stator Slots with Bright Copper Windings */}
      {[...Array(16)].map((_, i) => {
        const angle = (i * 360) / 16;
        const rad = (angle * Math.PI) / 180;
        const x1 = 300 + Math.cos(rad) * 65;
        const y1 = 225 + Math.sin(rad) * 65;
        const x2 = 300 + Math.cos(rad) * 115;
        const y2 = 225 + Math.sin(rad) * 115;
        return (
          <g key={i}>
            <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#f59e0b" strokeWidth="9" strokeLinecap="round" />
            <circle cx={x2} cy={y2} r="5" fill="#b45309" />
          </g>
        );
      })}

      {/* Center Shaft & Bearing */}
      <circle cx="300" cy="225" r="30" fill="#94a3b8" stroke="#475569" strokeWidth="3" />
      <circle cx="300" cy="225" r="14" fill="#020617" />
      <text x="300" y="229" fill="#f8fafc" fontSize="8" fontWeight="bold" textAnchor="middle">SKF 6204</text>

      {/* Specification Badges */}
      <g transform="translate(30, 40)">
        <rect x="0" y="0" width="165" height="90" rx="6" fill="#0f172a" stroke="#f59e0b" strokeWidth="1.5" />
        <text x="12" y="22" fill="#f59e0b" fontSize="10" fontWeight="bold">१००% तांब्याची वायर</text>
        <text x="12" y="40" fill="#f8fafc" fontSize="12" fontWeight="bold">Pure EC Grade Copper</text>
        <text x="12" y="58" fill="#cbd5e1" fontSize="9">सुपर एनामल्ड २२/२४ गेज</text>
        <text x="12" y="74" fill="#10b981" fontSize="9">वॉटरप्रूफ क्लास-एफ इन्सुलेशन</text>
      </g>

      <g transform="translate(405, 40)">
        <rect x="0" y="0" width="165" height="90" rx="6" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" />
        <text x="12" y="22" fill="#38bdf8" fontSize="10" fontWeight="bold">ओरिजिनल बेरिंग व वॉर्निश</text>
        <text x="12" y="40" fill="#f8fafc" fontSize="12" fontWeight="bold">SKF Heavy Duty</text>
        <text x="12" y="58" fill="#cbd5e1" fontSize="9">हाय-स्पीड रोटर बॅलन्सिंग</text>
        <text x="12" y="74" fill="#10b981" fontSize="9">पूर्ण टेस्टिंग व वॉरंटी</text>
      </g>
    </svg>
  );
};

// 3-Phase Flour Mill (Atta Chakki) & Workshop Power Graphic
export const ThreePhaseGraphic: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => {
  return (
    <svg viewBox="0 0 600 450" className={`bg-slate-900 rounded-lg select-none ${className}`} xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="600" height="450" fill="#0f172a" />

      {/* Industrial Wall & 63A TPN Main Switch Box */}
      <rect x="80" y="50" width="200" height="260" rx="6" fill="#1e293b" stroke="#94a3b8" strokeWidth="2" />
      <rect x="95" y="65" width="170" height="40" fill="#0f172a" />
      <text x="180" y="88" fill="#f8fafc" fontSize="11" fontWeight="bold" textAnchor="middle">63A 415V TPN MAIN</text>
      <text x="180" y="100" fill="#eab308" fontSize="8" textAnchor="middle">महावितरण ३-फेज मीटरनंतर</text>

      {/* Heavy Steel Throw Handle */}
      <rect x="250" y="140" width="40" height="80" rx="4" fill="#dc2626" stroke="#991b1b" />
      <circle cx="270" cy="155" r="8" fill="#7f1d1d" />
      <text x="270" y="195" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle">ON</text>

      {/* R-Y-B Phase Lamps */}
      <circle cx="125" cy="140" r="10" fill="#ef4444" stroke="#fca5a5" />
      <text x="125" y="165" fill="#fca5a5" fontSize="8" textAnchor="middle">R</text>
      <circle cx="155" cy="140" r="10" fill="#eab308" stroke="#fef08a" />
      <text x="155" y="165" fill="#fef08a" fontSize="8" textAnchor="middle">Y</text>
      <circle cx="185" cy="140" r="10" fill="#3b82f6" stroke="#bfdbfe" />
      <text x="185" y="165" fill="#bfdbfe" fontSize="8" textAnchor="middle">B</text>

      {/* Star-Delta Starter (Right side for 10 HP Flour Mill) */}
      <rect x="330" y="50" width="200" height="260" rx="8" fill="#1c2e24" stroke="#34d399" strokeWidth="2" />
      <rect x="345" y="65" width="170" height="40" fill="#0d1f15" />
      <text x="430" y="88" fill="#34d399" fontSize="11" fontWeight="bold" textAnchor="middle">L&T STAR-DELTA</text>
      <text x="430" y="100" fill="#a7f3d0" fontSize="8" textAnchor="middle">१० एचपी गिरणी मोटर कंट्रोल</text>

      {/* Star & Delta Indicator Relays */}
      <rect x="355" y="130" width="70" height="50" rx="3" fill="#020617" stroke="#475569" />
      <text x="390" y="152" fill="#38bdf8" fontSize="9" fontWeight="bold" textAnchor="middle">STAR</text>
      <text x="390" y="168" fill="#94a3b8" fontSize="7" textAnchor="middle">STARTING</text>

      <rect x="435" y="130" width="70" height="50" rx="3" fill="#020617" stroke="#475569" />
      <text x="470" y="152" fill="#10b981" fontSize="9" fontWeight="bold" textAnchor="middle">DELTA</text>
      <text x="470" y="168" fill="#94a3b8" fontSize="7" textAnchor="middle">RUNNING</text>

      {/* Dual Earthing Copper Leads */}
      <path d="M 180 310 L 180 390 L 400 390" stroke="#b45309" strokeWidth="5" fill="none" />
      <rect x="180" y="380" width="240" height="40" rx="4" fill="#020617" stroke="#f59e0b" />
      <text x="300" y="405" fill="#f59e0b" fontSize="10" fontWeight="bold" textAnchor="middle">
        दुहेरी रासायनिक कॉपर अर्थिंग (DUAL EARTH PIT)
      </text>
    </svg>
  );
};

// Commercial Shop & Showroom Lighting Graphic
export const CommercialShopGraphic: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => {
  return (
    <svg viewBox="0 0 600 450" className={`bg-slate-950 rounded-lg select-none ${className}`} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="shopWarmCone" cx="50%" cy="0%" r="90%">
          <stop offset="0%" stopColor="#fef08a" stopOpacity="0.8" />
          <stop offset="60%" stopColor="#fef08a" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#fef08a" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Ceiling Track Rail */}
      <rect x="0" y="25" width="600" height="15" fill="#1e293b" />
      <line x1="0" y1="32" x2="600" y2="32" stroke="#f59e0b" strokeWidth="2" />

      {/* 4 COB Warm Track Spotlights with Cones */}
      {[100, 230, 360, 490].map((x, i) => (
        <g key={i}>
          <rect x={x - 14} y="38" width="28" height="22" rx="4" fill="#020617" stroke="#475569" />
          <polygon points={`${x - 8},60 ${x - 70},260 ${x + 70},260 ${x + 8},60`} fill="url(#shopWarmCone)" />
        </g>
      ))}

      {/* Showroom Display Display Counters */}
      <rect x="80" y="260" width="440" height="140" rx="6" fill="#0f172a" stroke="#334155" />
      <rect x="95" y="275" width="410" height="110" rx="4" fill="#1e293b" />

      <text x="300" y="325" fill="#f8fafc" fontSize="14" fontWeight="bold" textAnchor="middle">
        दुकान व शोरूम एलईडी प्रकाशयोजना
      </text>
      <text x="300" y="348" fill="#fde047" fontSize="10" textAnchor="middle">
        3000K WARM WHITE COB TRACK LIGHTS · HIGH CRI
      </text>
      <text x="300" y="370" fill="#94a3b8" fontSize="9" textAnchor="middle">
        एसी व बिलिंग काउंटरसाठी स्वतंत्र एमसीबी सर्किट
      </text>
    </svg>
  );
};

// Dangerous Old Burnt Wooden Switchboard (Before state in India)
export const HazardousOldBoardGraphic: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => {
  return (
    <svg viewBox="0 0 600 450" className={`bg-stone-950 rounded-lg select-none ${className}`} xmlns="http://www.w3.org/2000/svg">
      {/* Old Cracked Wall Plaster */}
      <rect x="0" y="0" width="600" height="450" fill="#292524" />
      <path d="M 60 40 Q 140 120 100 240" stroke="#1c1917" strokeWidth="3" fill="none" />
      <path d="M 480 80 Q 520 200 450 320" stroke="#1c1917" strokeWidth="4" fill="none" />

      {/* Weathered Wooden Switchboard (जुना लाकडी बोर्ड) */}
      <rect x="90" y="60" width="420" height="320" rx="4" fill="#442a17" stroke="#78350f" strokeWidth="6" />

      {/* Scorch Marks & Soot from Short Circuit */}
      <ellipse cx="260" cy="180" rx="80" ry="50" fill="#0c0a09" opacity="0.85" />
      <circle cx="260" cy="180" r="25" fill="#000000" />

      {/* Loose dangling untidy aluminum wires */}
      <path d="M 120 40 Q 140 180 230 190" stroke="#525252" strokeWidth="4" fill="none" />
      <path d="M 280 40 Q 240 160 270 210" stroke="#7f1d1d" strokeWidth="4" fill="none" />
      <path d="M 420 40 Q 380 180 320 220" stroke="#1c1917" strokeWidth="5" fill="none" />
      <path d="M 230 240 Q 180 330 140 370" stroke="#44403c" strokeWidth="3" fill="none" />

      {/* Porcelain Rewireable Kit-Kat Fuses (जुने किट-कॅट फ्युज) */}
      {[
        { x: 140, y: 120, blown: true },
        { x: 210, y: 120, blown: false },
        { x: 280, y: 120, blown: true },
      ].map((fuse, i) => (
        <g key={i}>
          <rect x={fuse.x} y={fuse.y} width="50" height="85" rx="3" fill="#e7e5e4" stroke="#78716c" strokeWidth="2" />
          <rect x={fuse.x + 8} y={fuse.y + 12} width="34" height="60" rx="2" fill="#d6d3d1" />
          {fuse.blown ? (
            <text x={fuse.x + 25} y={fuse.y + 48} fill="#ef4444" fontSize="8" fontWeight="bold" textAnchor="middle">
              जळालेला
            </text>
          ) : (
            <line x1={fuse.x + 25} y1={fuse.y + 20} x2={fuse.x + 25} y2={fuse.y + 65} stroke="#ca8a04" strokeWidth="2" />
          )}
        </g>
      ))}

      {/* Old Broken Bakelite Tumbler Switches */}
      {[
        { x: 360, y: 130, broken: true },
        { x: 420, y: 130, broken: false },
        { x: 360, y: 220, broken: false },
        { x: 420, y: 220, broken: true },
      ].map((sw, idx) => (
        <g key={idx}>
          <circle cx={sw.x + 20} cy={sw.y + 20} r="22" fill="#1c1917" stroke="#44403c" strokeWidth="2" />
          <circle cx={sw.x + 20} cy={sw.y + 20} r="12" fill={sw.broken ? '#7f1d1d' : '#292524'} />
        </g>
      ))}

      {/* Warning Notice Banner */}
      <rect x="120" y="320" width="360" height="45" rx="4" fill="#450a0a" stroke="#dc2626" strokeWidth="1.5" />
      <text x="300" y="338" fill="#fecaca" fontSize="10" fontWeight="bold" textAnchor="middle">
        शॉर्ट सर्किट व आगीचा मोठा धोका! (धोकादायक जुना बोर्ड)
      </text>
      <text x="300" y="352" fill="#fca5a5" fontSize="8" textAnchor="middle">
        ओपन फ्युज वायर · अल्युमिनियम वायर्सचे स्पार्किंग · अर्थिंगचा अभाव
      </text>
    </svg>
  );
};

// Interactive Before / After Slider for Indian Switchboard Transformation
export const BeforeAfterSlider: React.FC<{ lang?: 'mr' | 'en' }> = ({ lang = 'mr' }) => {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.max(5, Math.min(rect.width - 5, e.clientX - rect.left));
    setSliderPos((x / rect.width) * 100);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const touch = e.touches[0];
    const x = Math.max(5, Math.min(rect.width - 5, touch.clientX - rect.left));
    setSliderPos((x / rect.width) * 100);
  };

  return (
    <div className="flex flex-col gap-3">
      <div 
        className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-2xl cursor-ew-resize select-none"
        onMouseMove={handleMouseMove}
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onTouchMove={handleTouchMove}
      >
        {/* Background Layer: Modern Work (AFTER) */}
        <div className="absolute inset-0 w-full h-full">
          <ConcealedWiringGraphic className="w-full h-full object-cover" />
          <div className="absolute top-4 right-4 bg-emerald-950/90 border border-emerald-500/50 backdrop-blur-xs px-3 py-1.5 rounded-lg text-xs font-semibold text-emerald-400">
            {lang === 'mr' ? 'नंतर: मॉड्युलर बोर्ड व सेफ एमसीबी' : 'AFTER: Modular Board & Safe MCB'}
          </div>
        </div>

        {/* Foreground Layer (Clipped): Dangerous Old Board (BEFORE) */}
        <div 
          className="absolute inset-0 h-full overflow-hidden"
          style={{ width: `${sliderPos}%` }}
        >
          <div className="absolute inset-0 w-[600px] h-full" style={{ width: '100%', minWidth: '100%' }}>
            <HazardousOldBoardGraphic className="w-full h-full object-cover" />
          </div>
          <div className="absolute top-4 left-4 bg-rose-950/90 border border-rose-500/50 backdrop-blur-xs px-3 py-1.5 rounded-lg text-xs font-semibold text-rose-400">
            {lang === 'mr' ? 'आधी: जुना जळका लाकडी बोर्ड' : 'BEFORE: Dangerous Burnt Wooden Board'}
          </div>
        </div>

        {/* Divider Bar */}
        <div 
          className="absolute top-0 bottom-0 w-1 bg-amber-400 shadow-[0_0_12px_rgba(251,191,36,0.8)] z-20 cursor-ew-resize flex items-center justify-center"
          style={{ left: `${sliderPos}%` }}
        >
          <div className="w-8 h-8 rounded-full bg-slate-900 border-2 border-amber-400 flex items-center justify-center shadow-lg -translate-x-3.5">
            <svg className="w-4 h-4 text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="m9 18-6-6 6-6M15 6l6 6-6 6" />
            </svg>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between text-xs text-slate-400 px-1 font-sans">
        <span>
          {lang === 'mr' ? 'स्लायडर डावीकडे-उजवीकडे ओढून कामातील बदल पहा' : 'Drag slider left and right to inspect transformation'}
        </span>
        <span className="font-mono text-amber-400 font-semibold">
          {lang === 'mr' ? 'श्री सद्गुरु इलेक्ट्रिकल्स, बीड' : 'Shree Sadguru Electricals, Beed'}
        </span>
      </div>
    </div>
  );
};

// Water Motor & Automatic Float Switch Graphic
export const WaterMotorGraphic: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => {
  return (
    <svg viewBox="0 0 600 450" className={`bg-slate-900 rounded-lg select-none ${className}`} xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="600" height="450" fill="#07101e" />

      {/* Monoblock Pump (Left Bottom) */}
      <rect x="60" y="240" width="220" height="150" rx="14" fill="#0f172a" stroke="#38bdf8" strokeWidth="2.5" />
      <circle cx="170" cy="315" r="55" fill="#1e293b" stroke="#64748b" strokeWidth="3" />
      <circle cx="170" cy="315" r="30" fill="#020617" />
      <circle cx="170" cy="315" r="10" fill="#38bdf8" />

      {/* Pump Flanges and Pipes */}
      <rect x="150" y="190" width="40" height="50" fill="#475569" rx="3" />
      <path d="M 170 190 L 170 100 Q 170 80 190 80 L 370 80" stroke="#0ea5e9" strokeWidth="12" fill="none" />

      {/* Pump Specs Text */}
      <text x="170" y="270" fill="#f8fafc" fontSize="13" fontWeight="bold" textAnchor="middle">0.5 HP MONOBLOCK</text>
      <text x="170" y="380" fill="#38bdf8" fontSize="10" textAnchor="middle">घरगुती पाण्याचा पंप फिटिंग ₹ २००</text>

      {/* Overhead Rooftop Tank (Right) */}
      <rect x="370" y="60" width="180" height="230" rx="16" fill="#1e293b" stroke="#38bdf8" strokeWidth="3" />
      <rect x="390" y="80" width="140" height="190" rx="10" fill="#0c1f38" />

      {/* Water Fill in Tank */}
      <rect x="390" y="140" width="140" height="130" rx="4" fill="#0284c7" opacity="0.6" />
      <path d="M 390 140 Q 425 130 460 140 T 530 140" stroke="#38bdf8" strokeWidth="3" fill="none" />

      {/* Auto Float Switch Sensor inside Tank */}
      <circle cx="460" cy="170" r="14" fill="#f59e0b" stroke="#d97706" strokeWidth="2" />
      <path d="M 460 170 L 460 60 L 220 60 L 220 240" stroke="#eab308" strokeWidth="4" strokeDasharray="6 4" fill="none" />
      <rect x="420" y="200" width="80" height="24" rx="4" fill="#020617" stroke="#eab308" />
      <text x="460" y="216" fill="#eab308" fontSize="8" fontWeight="bold" textAnchor="middle">ऑटो फ्लोट स्विच</text>

      {/* Feature Badge */}
      <g transform="translate(60, 400)">
        <rect x="0" y="0" width="480" height="40" rx="6" fill="#020617" stroke="#10b981" />
        <text x="240" y="24" fill="#10b981" fontSize="11" fontWeight="bold" textAnchor="middle">
          टाकी भरताच मोटर आपोआप बंद • १००% पाणी व विजेची बचत
        </text>
      </g>
    </svg>
  );
};

// Home Chemical & Copper Earthing Graphic
export const HomeEarthingGraphic: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => {
  return (
    <svg viewBox="0 0 600 450" className={`bg-slate-900 rounded-lg select-none ${className}`} xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="600" height="450" fill="#080f1a" />

      {/* Ground Layer (Earth cross-section) */}
      <rect x="50" y="180" width="500" height="230" rx="10" fill="#1c1917" stroke="#44403c" strokeWidth="2" />
      <text x="70" y="210" fill="#78716c" fontSize="12" fontWeight="bold">जमीन / अंगण खड्डा (EARTH PIT)</text>

      {/* Chemical Compound Layer */}
      <rect x="220" y="190" width="160" height="210" rx="6" fill="#292524" stroke="#d97706" strokeWidth="1.5" />
      <text x="300" y="225" fill="#f59e0b" fontSize="10" fontWeight="bold" textAnchor="middle">केमिकल पावडर (BENTONITE)</text>

      {/* Heavy Copper Earth Pipe / Electrode */}
      <rect x="290" y="120" width="20" height="260" rx="4" fill="#b45309" stroke="#f59e0b" strokeWidth="2" />
      <text x="300" y="320" fill="#ffffff" fontSize="9" fontWeight="bold" transform="rotate(-90 300 320)" textAnchor="middle">
        COPPER EARTH PIPE
      </text>

      {/* Green Earth Wire Running to Home Switchboard */}
      <path d="M 300 120 L 300 60 L 120 60 L 120 120" stroke="#16a34a" strokeWidth="8" fill="none" />
      <circle cx="300" cy="120" r="10" fill="#15803d" stroke="#fef08a" strokeWidth="2" />
      <text x="210" y="50" fill="#22c55e" fontSize="12" fontWeight="bold">सुरक्षित अर्थिंग वायर (GREEN)</text>

      {/* Home Socket & Zero Shock Indicator */}
      <rect x="60" y="110" width="130" height="60" rx="8" fill="#020617" stroke="#16a34a" strokeWidth="2" />
      <circle cx="100" cy="140" r="6" fill="#16a34a" />
      <circle cx="130" cy="140" r="6" fill="#16a34a" />
      <circle cx="115" cy="125" r="8" fill="#22c55e" />
      <text x="125" y="162" fill="#22c55e" fontSize="8" fontWeight="bold">शॉक फ्री सॉकेट</text>

      {/* Safe Reading Badge */}
      <g transform="translate(400, 70)">
        <rect x="0" y="0" width="150" height="90" rx="8" fill="#020617" stroke="#10b981" strokeWidth="2" />
        <text x="75" y="25" fill="#10b981" fontSize="10" fontWeight="bold" textAnchor="middle">EARTH RESISTANCE</text>
        <text x="75" y="55" fill="#f8fafc" fontSize="22" fontWeight="bold" textAnchor="middle">1.4 Ω</text>
        <text x="75" y="75" fill="#38bdf8" fontSize="9" textAnchor="middle">१००% शॉक सुरक्षित</text>
      </g>

      {/* Pricing Pill */}
      <g transform="translate(60, 400)">
        <rect x="0" y="0" width="480" height="38" rx="6" fill="#020617" stroke="#f59e0b" />
        <text x="240" y="24" fill="#f59e0b" fontSize="11" fontWeight="bold" textAnchor="middle">
          घरगुती अर्थिंग मजुरी फक्त ₹ ५५० • कुलर, फ्रिज व गिझरचा शॉक पूर्णपणे बंद
        </text>
      </g>
    </svg>
  );
};

// Home Repair Graphic (Ceiling Fan & Bathroom Geyser Fitting)
export const HomeRepairGraphic: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => {
  return (
    <svg viewBox="0 0 600 450" className={`bg-slate-900 rounded-lg select-none ${className}`} xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="600" height="450" fill="#0b1329" />

      {/* Ceiling Plane with Fan Rod */}
      <rect x="0" y="0" width="600" height="30" fill="#020617" />
      <rect x="195" y="30" width="10" height="70" fill="#475569" />
      <ellipse cx="200" cy="115" rx="35" ry="18" fill="#1e293b" stroke="#f59e0b" strokeWidth="2" />

      {/* Ceiling Fan Blades */}
      <ellipse cx="120" cy="120" rx="65" ry="12" fill="#334155" transform="rotate(-15 120 120)" />
      <ellipse cx="280" cy="120" rx="65" ry="12" fill="#334155" transform="rotate(15 280 120)" />
      <ellipse cx="200" cy="155" rx="14" ry="45" fill="#334155" />
      <circle cx="200" cy="115" r="10" fill="#020617" />
      <text x="200" y="195" fill="#f8fafc" fontSize="11" fontWeight="bold" textAnchor="middle">
        सीलिंग फॅन फिटिंग ₹ १०० - ₹ १२०
      </text>

      {/* Bathroom 25L Storage Geyser (Right Side) */}
      <rect x="360" y="60" width="160" height="230" rx="35" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="3" />
      <rect x="385" y="85" width="110" height="180" rx="20" fill="#f1f5f9" />
      
      {/* Geyser Temperature Dial & Lights */}
      <circle cx="440" cy="150" r="22" fill="#020617" />
      <circle cx="440" cy="150" r="12" fill="#f59e0b" />
      <circle cx="425" cy="190" r="5" fill="#10b981" />
      <text x="435" y="193" fill="#10b981" fontSize="8" fontWeight="bold">POWER</text>
      <circle cx="425" cy="210" r="5" fill="#ef4444" />
      <text x="435" y="213" fill="#ef4444" fontSize="8" fontWeight="bold">HEATING</text>

      {/* 16A Dedicated Socket Point & Water In/Out Pipes */}
      <path d="M 405 290 L 405 350" stroke="#3b82f6" strokeWidth="8" fill="none" />
      <path d="M 475 290 L 475 350" stroke="#ef4444" strokeWidth="8" fill="none" />
      <text x="440" y="325" fill="#f8fafc" fontSize="11" fontWeight="bold" textAnchor="middle">
        गिझर फिटिंग ₹ २०० - ₹ २५०
      </text>

      {/* Doorstep Home Service Badge */}
      <g transform="translate(60, 360)">
        <rect x="0" y="0" width="480" height="50" rx="8" fill="#020617" stroke="#f59e0b" strokeWidth="1.5" />
        <text x="240" y="25" fill="#f59e0b" fontSize="11" fontWeight="bold" textAnchor="middle">
          १००% घरपोच सेवा • उपकरणे कुठेही घेऊन जाण्याची गरज नाही
        </text>
        <text x="240" y="40" fill="#94a3b8" fontSize="9" textAnchor="middle">
          फॅन, कुलर, गिझर व स्विच बोर्ड दुरुस्ती थेट तुमच्या घरी येऊन
        </text>
      </g>
    </svg>
  );
};

// Fault Finding & Short Circuit Diagnostic Graphic
export const FaultFindingGraphic: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => {
  return (
    <svg viewBox="0 0 600 450" className={`bg-slate-900 rounded-lg select-none ${className}`} xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="600" height="450" fill="#070b14" />

      {/* Digital Multimeter Tester Display */}
      <rect x="140" y="60" width="320" height="260" rx="16" fill="#1e293b" stroke="#f59e0b" strokeWidth="3" />
      <rect x="165" y="85" width="270" height="85" rx="6" fill="#020617" stroke="#334155" />

      {/* Digital LCD Readout */}
      <text x="300" y="135" fill="#10b981" fontSize="32" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
        234.8 V
      </text>
      <text x="300" y="155" fill="#38bdf8" fontSize="10" textAnchor="middle" fontFamily="monospace">
        50.0 Hz · MAINS NORMAL · FAULT ISOLATED
      </text>

      {/* Dial Knob */}
      <circle cx="300" cy="235" r="40" fill="#0f172a" stroke="#64748b" strokeWidth="2" />
      <line x1="300" y1="235" x2="300" y2="205" stroke="#f59e0b" strokeWidth="5" strokeLinecap="round" />
      <text x="300" y="250" fill="#f8fafc" fontSize="9" fontWeight="bold" textAnchor="middle">AC 750V</text>

      {/* Red & Black Test Probes */}
      <path d="M 230 320 Q 200 370 120 380" stroke="#ef4444" strokeWidth="6" fill="none" />
      <path d="M 370 320 Q 400 370 480 380" stroke="#000000" strokeWidth="6" fill="none" />
      <rect x="90" y="370" width="40" height="15" rx="2" fill="#ef4444" />
      <rect x="470" y="370" width="40" height="15" rx="2" fill="#475569" />

      {/* Home Visit Inspection Fee Banner */}
      <g transform="translate(100, 360)">
        <rect x="0" y="0" width="400" height="55" rx="8" fill="#020617" stroke="#10b981" strokeWidth="1.5" />
        <text x="200" y="26" fill="#10b981" fontSize="12" fontWeight="bold" textAnchor="middle">
          घरपोच व्हिजिट व तपासणी फी फक्त ₹ १५०
        </text>
        <text x="200" y="44" fill="#cbd5e1" fontSize="9" textAnchor="middle">
          शॉर्ट सर्किट, वीज गळती व सतत पडणारा एमसीबी शोधून तात्काळ दुरुस्ती
        </text>
      </g>
    </svg>
  );
};

// Dispatcher for Indian residential project graphics
export const ProjectGraphicRenderer: React.FC<{
  type: string;
  className?: string;
}> = ({ type, className }) => {
  switch (type) {
    case 'concealed_wiring':
      return <ConcealedWiringGraphic className={className} />;
    case 'inverter_battery':
      return <InverterBatteryGraphic className={className} />;
    case 'home_repair':
      return <HomeRepairGraphic className={className} />;
    case 'water_motor':
      return <WaterMotorGraphic className={className} />;
    case 'fault_finding':
      return <FaultFindingGraphic className={className} />;
    case 'home_earthing':
      return <HomeEarthingGraphic className={className} />;
    default:
      return <ConcealedWiringGraphic className={className} />;
  }
};

