/* =====================================================
   SAHYOG — Client Logic & State Management
   Pure Vanilla JavaScript
   ===================================================== */

const STATE = {
  currentRole: 'department', // 'department' or 'startup'
  currentLang: 'en',
  activeTab: 'overview',
  searchQuery: '',
  challenges: [
    {
      id: 'ch-1',
      code: 'SAHYOG-MOHUA-2026-041',
      title: 'AI-Powered Non-Revenue Water (NRW) Leak Detection for Urban Water Grids',
      department: 'Ministry of Housing and Urban Affairs (MoHUA)',
      ministryCode: 'MOHUA',
      sector: 'Smart Cities & Water Tech',
      description: 'Autonomous acoustic & satellite synthetic aperture radar (SAR) sensor suite to pinpoint underground water pipeline breaches with <0.5m accuracy in high-density tier-1 municipal corporations.',
      escrowBudgetINR: 4500000,
      stage: 'Active Sandbox',
      deadline: '2026-04-30',
      applicantsCount: 14
    },
    {
      id: 'ch-2',
      code: 'SAHYOG-MOD-2026-109',
      title: 'Autonomous Swarm Drone Perimeter Reconnaissance in High-Altitude Cold Deserts',
      department: 'Department of Defence Production (DDP / MoD)',
      ministryCode: 'MOD',
      sector: 'Defence & DeepTech',
      description: 'Resilient indigenous micro-UAV swarm system operating without GNSS/GPS dependencies at altitudes >14,000 ft in sub-zero temps with encrypted mesh coordination.',
      escrowBudgetINR: 8500000,
      stage: 'Blind Evaluation',
      deadline: '2026-05-15',
      applicantsCount: 22
    },
    {
      id: 'ch-3',
      code: 'SAHYOG-MORTH-2026-017',
      title: 'Automated Pothole & Highway Asset Degradation AI Scanner for NHAI',
      department: 'Ministry of Road Transport and Highways (MoRTH / NHAI)',
      ministryCode: 'MORTH',
      sector: 'Smart Mobility & Infrastructure',
      description: 'Vehicle-mounted optical and LiDAR scanner array coupled with edge computer vision to survey National Highway surfaces at 80 km/h with automated work orders.',
      escrowBudgetINR: 3500000,
      stage: 'Open',
      deadline: '2026-06-10',
      applicantsCount: 9
    },
    {
      id: 'ch-4',
      code: 'SAHYOG-MOHFW-2026-083',
      title: 'Offline AI Diagnostic Screeners for Cervical & Oral Cancer in Rural PHCs',
      department: 'Ministry of Health and Family Welfare (MoHFW)',
      ministryCode: 'MOHFW',
      sector: 'HealthTech & Ayushman Bharat',
      description: 'Handheld, battery-powered colposcope and intraoral imaging device with on-device CNN inferencing capable of triage without internet for ASHA workers.',
      escrowBudgetINR: 5000000,
      stage: 'Scale-Up (GeM)',
      deadline: '2026-01-20',
      applicantsCount: 18
    },
    {
      id: 'ch-5',
      code: 'SAHYOG-MNRE-2026-055',
      title: 'Next-Gen BIPV Solar Rooftop Efficiency Optimizer with Micro-Inverter Telemetry',
      department: 'Ministry of New and Renewable Energy (MNRE)',
      ministryCode: 'MNRE',
      sector: 'CleanTech & Solar Mission',
      description: 'Indigenous IoT micro-inverter with MPPT algorithm tailored for Indian dust & temperature conditions to enhance solar generation by >12% on public rooftops.',
      escrowBudgetINR: 6000000,
      stage: 'Open',
      deadline: '2026-05-31',
      applicantsCount: 11
    }
  ],
  proposals: [
    {
      id: 'prop-1',
      challengeCode: 'SAHYOG-MOHUA-2026-041',
      anonymizedCode: 'ANON-STARTUP-772',
      techDomain: 'Acoustic AI & Edge Telemetry',
      scores: { technicalMerit: 35, innovationIndex: 22, feasibility: 18, lifeCycleCost: 14, compositeVfM: 89.0 },
      status: 'Approved for Sandbox',
      shellRisk: 'Low (0%)'
    },
    {
      id: 'prop-2',
      challengeCode: 'SAHYOG-MOD-2026-109',
      anonymizedCode: 'ANON-STARTUP-904',
      techDomain: 'Swarm Robotics & VIO Guidance',
      scores: { technicalMerit: 32, innovationIndex: 20, feasibility: 17, lifeCycleCost: 12, compositeVfM: 81.0 },
      status: 'Under Blind Review',
      shellRisk: 'Low (0%)'
    },
    {
      id: 'prop-3',
      challengeCode: 'SAHYOG-MORTH-2026-017',
      anonymizedCode: 'ANON-STARTUP-318',
      techDomain: 'LiDAR Vision & Edge Compute',
      scores: { technicalMerit: 34, innovationIndex: 19, feasibility: 16, lifeCycleCost: 13, compositeVfM: 82.0 },
      status: 'Under Blind Review',
      shellRisk: 'Low (0%)'
    }
  ],
  pilots: [
    {
      id: 'sbx-101',
      agreementCode: 'SAHYOG-MOHUA-SBX-2026-081',
      startupName: 'AquaPulse Sensing Technologies Pvt Ltd',
      dpiitNumber: 'DIPP-IND-2022-44192',
      totalEscrowBudgetINR: 4500000,
      escrowBalanceINR: 3000000,
      releasedEscrowINR: 1500000,
      milestoneIndex: 2,
      status: 'Active Field Sandbox'
    },
    {
      id: 'sbx-102',
      agreementCode: 'SAHYOG-MOHFW-SBX-2025-019',
      startupName: 'Nidaan BioAI Health Systems Pvt Ltd',
      dpiitNumber: 'DIPP-IND-2021-31094',
      totalEscrowBudgetINR: 5000000,
      escrowBalanceINR: 0,
      releasedEscrowINR: 5000000,
      milestoneIndex: 3,
      status: 'Completed - GeM Ready'
    }
  ],
  consortia: [
    {
      name: 'Bharat Tactical Swarm Systems Consortium',
      mouId: 'SAHYOG-MOU-2026-DEF-009',
      leadStartup: 'Garuda Quantum Aero Dynamics Pvt Ltd',
      targetMinistry: 'Ministry of Defence',
      pooledTurnoverINR: 32500000,
      combinedPatents: 7,
      status: 'Bid Submitted'
    },
    {
      name: 'JalNet CleanTech Innovations Alliance',
      mouId: 'SAHYOG-MOU-2026-MOHUA-034',
      leadStartup: 'AquaPulse Sensing Technologies Pvt Ltd',
      targetMinistry: 'Ministry of Housing & Urban Affairs',
      pooledTurnoverINR: 28000000,
      combinedPatents: 5,
      status: 'MOU Validated'
    }
  ]
};

// Utilities
function formatINR(val) {
  if (val >= 10000000) return '₹' + (val / 10000000).toFixed(2) + ' Cr';
  if (val >= 100000) return '₹' + (val / 100000).toFixed(2) + ' Lakhs';
  return '₹' + val.toLocaleString('en-IN');
}

function showToast(title, desc = '', type = 'success') {
  const container = document.getElementById('toast-container');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <div class="toast-title">${title}</div>
    ${desc ? `<div class="toast-desc">${desc}</div>` : ''}
  `;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transition = 'opacity 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

// Live Clock
function updateClock() {
  const clockEl = document.getElementById('live-clock');
  if (!clockEl) return;
  const now = new Date();
  clockEl.textContent = now.toLocaleString('en-IN', {
    weekday: 'short', day: '2-digit', month: 'short', year: 'numeric',
    hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true,
    timeZone: 'Asia/Kolkata'
  }) + ' IST';
}
setInterval(updateClock, 1000);

// Navigation & Tab Switching
function setTab(tabKey) {
  STATE.activeTab = tabKey;
  document.querySelectorAll('.nav-tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tab === tabKey);
  });
  document.querySelectorAll('.tab-content').forEach(section => {
    section.style.display = section.id === `tab-${tabKey}` ? 'block' : 'none';
  });
  const crumbEl = document.getElementById('crumb-active');
  if (crumbEl) {
    const titles = {
      overview: 'Portal Overview',
      department: 'Govt Dashboard & VfM Scoring',
      startup: 'Startup Sandbox & Escrow',
      scaleup: 'Consortium & Scale-Up Engine',
      challenges: 'Pilot Challenges Registry'
    };
    crumbEl.textContent = titles[tabKey] || 'Portal Overview';
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Role Switcher
function setRole(roleKey) {
  STATE.currentRole = roleKey;
  document.querySelectorAll('.role-pill').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.role === roleKey);
  });
  const headerCard = document.getElementById('hero-persona-header');
  const bodyCard = document.getElementById('hero-persona-body');
  if (headerCard && bodyCard) {
    if (roleKey === 'department') {
      headerCard.className = 'hero-card-header department';
      headerCard.textContent = '🏛 Govt Officer View Active';
      bodyCard.innerHTML = `
        <table class="hero-table">
          <tr><td class="label">Authority:</td><td class="val">GFR Rule 149(viii) &amp; 161</td></tr>
          <tr><td class="label">Blind Review:</td><td class="val">✓ Active (Zero Bias)</td></tr>
          <tr><td class="label">VfM Cut-Off:</td><td class="val">≥ 75.0 / 100</td></tr>
          <tr><td class="label">Escrow:</td><td class="val">Tripartite RBI Regulated</td></tr>
        </table>
        <div style="margin-top:10px; border-top:1px solid rgba(255,255,255,0.1); padding-top:8px;">
          <button class="btn-sm-primary" style="width:100%;" onclick="setTab('department')">Open Department Dashboard »</button>
        </div>
      `;
    } else {
      headerCard.className = 'hero-card-header startup';
      headerCard.textContent = '🚀 DPIIT Startup View Active';
      bodyCard.innerHTML = `
        <table class="hero-table">
          <tr><td class="label">DPIIT Status:</td><td class="val">✓ Verified Innovator</td></tr>
          <tr><td class="label">Shell Risk:</td><td class="val">0% (Authentic)</td></tr>
          <tr><td class="label">Escrow:</td><td class="val">100% Guaranteed</td></tr>
          <tr><td class="label">Exemption:</td><td class="val">GFR Rule 149 (No EMD)</td></tr>
        </table>
        <div style="margin-top:10px; border-top:1px solid rgba(255,255,255,0.1); padding-top:8px;">
          <button class="btn-sm-success" style="width:100%;" onclick="setTab('startup')">Open Startup Portal »</button>
        </div>
      `;
    }
  }
}

// Render dynamic tables
function renderChallengesTable() {
  const tbody = document.getElementById('featured-challenges-body');
  if (!tbody) return;
  tbody.innerHTML = STATE.challenges.slice(0, 5).map(c => `
    <tr>
      <td><code style="font-size:10px; background:#e8f0f7; padding:2px 4px; border-radius:2px;">${c.code}</code></td>
      <td>
        <strong>${c.title}</strong>
        <div style="font-size:10px; color:#64748b; margin-top:2px;">${c.department}</div>
      </td>
      <td style="font-weight:bold; color:#116530; font-family:monospace;">${formatINR(c.escrowBudgetINR)}</td>
      <td>
        <span class="badge ${c.stage === 'Open' ? 'badge-active' : c.stage === 'Active Sandbox' ? 'badge-pending' : 'badge-pilot'}">
          ${c.stage}
        </span>
      </td>
      <td>
        <button class="btn-action" onclick="setTab('challenges')">View »</button>
      </td>
    </tr>
  `).join('');
}

function renderAllChallenges() {
  const container = document.getElementById('all-challenges-grid');
  if (!container) return;
  const filtered = STATE.challenges.filter(c => {
    const q = STATE.searchQuery.toLowerCase();
    return c.title.toLowerCase().includes(q) || c.department.toLowerCase().includes(q) || c.code.toLowerCase().includes(q);
  });
  container.innerHTML = filtered.map(c => `
    <div class="gem-panel">
      <div class="gem-panel-header">
        <span>${c.code} · ${c.sector}</span>
        <span class="badge ${c.stage === 'Open' ? 'badge-active' : 'badge-pilot'}">${c.stage}</span>
      </div>
      <div class="gem-panel-body">
        <h3 style="font-size:14px; font-weight:bold; margin-bottom:6px; color:#1a5276;">${c.title}</h3>
        <div style="font-size:11px; color:#64748b; margin-bottom:10px;">🏛 ${c.department}</div>
        <p style="font-size:12px; color:#334155; line-height:1.6; margin-bottom:14px;">${c.description}</p>
        <div style="display:flex; justify-content:space-between; align-items:center; border-top:1px solid #e2e8f0; padding-top:10px; font-size:11px;">
          <div>
            <span style="color:#64748b;">Escrow Budget:</span>
            <strong style="color:#116530; font-family:monospace; margin-left:4px;">${formatINR(c.escrowBudgetINR)}</strong>
          </div>
          <div>
            <span style="color:#64748b;">Deadline:</span>
            <strong style="margin-left:4px;">${c.deadline}</strong>
          </div>
          <button class="btn-sm-primary" onclick="showToast('Proposal Draft Created', 'Submitting for ${c.code}', 'info')">
            Submit Proposal »
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

function renderProposals() {
  const tbody = document.getElementById('proposals-table-body');
  if (!tbody) return;
  tbody.innerHTML = STATE.proposals.map(p => `
    <tr>
      <td><code>${p.anonymizedCode}</code></td>
      <td>${p.challengeCode}</td>
      <td><strong>${p.techDomain}</strong></td>
      <td style="font-family:monospace; font-weight:bold; color:${p.scores.compositeVfM >= 75 ? '#116530' : '#c0392b'};">
        ${p.scores.compositeVfM}/100
      </td>
      <td><span class="badge badge-active">${p.shellRisk}</span></td>
      <td><span class="badge ${p.status.includes('Approved') ? 'badge-active' : 'badge-pilot'}">${p.status}</span></td>
      <td style="white-space:nowrap;">
        <button class="btn-sm-success" onclick="approveProposal('${p.id}')">Approve GFR 149</button>
      </td>
    </tr>
  `).join('');
}

function approveProposal(id) {
  const p = STATE.proposals.find(x => x.id === id);
  if (p) {
    p.status = 'Approved for Sandbox';
    renderProposals();
    showToast('Sandbox Approved', `${p.anonymizedCode} cleared under GFR Rule 149(viii).`, 'success');
  }
}

// Modal open/close functions
function openModal(id) {
  const m = document.getElementById(id);
  if (m) m.classList.add('active');
}
function closeModal(id) {
  const m = document.getElementById(id);
  if (m) m.classList.remove('active');
}

// Escrow Release
function releaseEscrowMilestone() {
  closeModal('modal-escrow');
  showToast('Escrow Tranche Disbursed', '₹15,00,000 released via RTGS to AquaPulse.', 'success');
}

// DPIIT KYC
function runKycCheck() {
  const cin = document.getElementById('kyc-cin').value;
  const dpiit = document.getElementById('kyc-dpiit').value;
  if (!cin || !dpiit) {
    alert('Please enter CIN and DPIIT numbers.');
    return;
  }
  const res = document.getElementById('kyc-result');
  res.style.display = 'block';
  showToast('DPIIT Verified', 'Authentic Innovator. 0% shell company risk.', 'success');
}

// Create Challenge Form
function handleCreateChallenge(e) {
  e.preventDefault();
  const title = document.getElementById('new-ch-title').value;
  const dept = document.getElementById('new-ch-dept').value;
  const budget = parseInt(document.getElementById('new-ch-budget').value, 10) || 3000000;
  const code = 'SAHYOG-GOI-2026-' + Math.floor(100 + Math.random() * 900);
  STATE.challenges.unshift({
    id: 'ch-' + Date.now(),
    code,
    title,
    department: dept,
    sector: 'National Innovation',
    description: document.getElementById('new-ch-desc').value,
    escrowBudgetINR: budget,
    stage: 'Open',
    deadline: '2026-06-30',
    applicantsCount: 0
  });
  closeModal('modal-new-challenge');
  renderChallengesTable();
  renderAllChallenges();
  showToast('Pilot Challenge Published', code, 'success');
}

// Init on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  updateClock();
  renderChallengesTable();
  renderAllChallenges();
  renderProposals();

  // Search filter
  const searchInp = document.getElementById('portal-search');
  if (searchInp) {
    searchInp.addEventListener('input', (e) => {
      STATE.searchQuery = e.target.value;
      renderAllChallenges();
    });
  }

  // Mobile menu toggle
  const mobBtn = document.getElementById('mobile-toggle');
  const tabs = document.querySelector('.nav-tabs');
  if (mobBtn && tabs) {
    mobBtn.addEventListener('click', () => {
      tabs.classList.toggle('open');
    });
  }

  // Font resize buttons
  document.querySelectorAll('.font-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const size = btn.dataset.size;
      document.documentElement.style.fontSize = size === 'sm' ? '12px' : size === 'lg' ? '15px' : '13px';
    });
  });

  // Language toggle
  const langBtn = document.getElementById('lang-toggle');
  if (langBtn) {
    langBtn.addEventListener('click', () => {
      STATE.currentLang = STATE.currentLang === 'en' ? 'hi' : 'en';
      langBtn.textContent = STATE.currentLang === 'en' ? 'हिन्दी' : 'English';
      showToast('Language Switched', STATE.currentLang === 'en' ? 'Switched to English' : 'हिन्दी भाषा सक्रिय की गई', 'info');
    });
  }
});
