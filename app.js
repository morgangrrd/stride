const plans = {
  half: {
    name: "Semi-marathon", distance: 21.1, duration: 12, experience: "Être capable de courir régulièrement 3 fois par semaine et une sortie longue de 10 km.",
    overview: "Un cycle progressif de 12 semaines, avec quatre sorties hebdomadaires, des semaines d'assimilation et un affûtage.",
    guidance: [
      ["Allures", "Endurance facile : respiration confortable, RPE 3–4/10. Les fractions soutenues se font à l'effort, sans sprint."],
      ["Sortie longue", "Construis progressivement jusqu'à 19–20 km, sans chercher à courir vite. Marche pour récupérer si nécessaire."],
      ["Renforcement", "Ajoute si possible deux courtes séances de renforcement général, espacées des séances clés."],
      ["Prérequis", "Ce plan suppose une pratique régulière et une base de course déjà installée. Reprends après une blessure avec avis professionnel."]
    ],
    weeks: [
      [24,10,6,"6 × 1 min soutenue, récupération 2 min en footing.","Endurance facile, respiration aisée.","Première semaine du cycle : reste en contrôle."],
      [28,12,7,"8 × 1 min soutenue, récupération 90 s en footing.","Endurance facile, relâchée.","Augmente seulement si la semaine précédente a été bien assimilée."],
      [32,14,8,"3 × 5 min au seuil confortable, récupération 2 min en footing.","Endurance facile.","Le seuil est soutenu mais régulier : tu peux dire quelques mots."],
      [26,12,6,"6 × 1 min en côte, effort maîtrisé, retour en marchant ou trottinant.","Endurance facile, sans accélérer.","Semaine d'assimilation : garde les sorties faciles vraiment faciles."],
      [34,15,8,"5 × 3 min à allure soutenue, récupération 2 min en footing.","Endurance facile.","Reprends la progression sans chercher à compenser la semaine allégée."],
      [38,17,9,"2 × 10 min au seuil confortable, récupération 3 min en footing.","Endurance facile.","Pratique une hydratation que tu tolères sur les sorties longues."],
      [42,18,10,"6 × 800 m à effort 10 km, récupération 2 min en footing.","Endurance facile.","Les fractions restent régulières, sans finir à bloc."],
      [34,15,8,"20 min au seuil confortable, encadrées par un footing facile.","Endurance facile.","Semaine d'assimilation : priorise le sommeil et la récupération."],
      [44,19,10,"3 × 8 min à allure cible semi, récupération 3 min en footing.","Endurance facile.","Sortie longue progressive jusqu'à 19 km, sans forcer la fin."],
      [48,20,10,"2 × 15 min à allure cible semi, récupération 4 min en footing.","Endurance facile.","Semaine de pic : réduis ou supprime une séance si la fatigue persiste."],
      [38,16,8,"4 × 4 min soutenues, récupération 2 min en footing.","Endurance facile.","Début de l'affûtage : la baisse de charge aide à assimiler."],
      [27.1,21.1,0,"Pas de séance de qualité : garde l'énergie pour la course.","Footing très facile et bref, puis repos.","Semaine de course. Réduis la charge, garde le sommeil et pars prudemment."]
    ]
  },
  marathon: {
    name: "Marathon", distance: 42.2, duration: 16, experience: "Avoir déjà couru régulièrement au moins 4 fois par semaine, environ 30 km hebdomadaires, avec une sortie longue de 16 km.",
    overview: "Un cycle de 16 semaines mêlant endurance, travail au seuil et allure marathon, sorties longues progressives, semaines allégées et affûtage.",
    guidance: [
      ["Allures", "Endurance facile à RPE 3–4/10. Les blocs à allure marathon doivent rester contrôlés, surtout en première moitié de cycle."],
      ["Sortie longue", "Le plan culmine à 32 km. Il n'est pas nécessaire de courir la distance marathon à l'entraînement."],
      ["Ravitaillement", "Teste tôt les boissons et glucides que tu utiliseras en course. Ne teste rien de nouveau le jour J."],
      ["Prérequis", "Plan destiné aux coureurs déjà entraînés. Si tu débutes ou reviens d'une blessure, fais valider la charge par un professionnel."]
    ],
    weeks: [
      [32,16,8,"6 × 2 min à effort soutenu, récupération 2 min en footing.","Endurance facile.","Établis ta routine, sans accélérer les sorties faciles."],
      [36,18,9,"3 × 8 min au seuil confortable, récupération 3 min en footing.","Endurance facile.","Entraîne-toi à manger et boire comme tu le feras sur les longues sorties."],
      [40,20,10,"5 × 1 km à effort 10 km, récupération 2 min en footing.","Endurance facile.","Garde de la marge sur les répétitions."],
      [34,16,7,"Footing facile avec 6 accélérations relâchées de 20 s.","Endurance facile.","Semaine d'assimilation : baisse volontaire du volume."],
      [44,22,10,"3 × 10 min au seuil, récupération 3 min en footing.","Endurance facile.","Retour à la progression, en surveillant la récupération."],
      [48,24,11,"3 × 3 km à allure marathon contrôlée, récupération 1 km facile.","Endurance facile.","Teste ton ravitaillement sur la sortie longue."],
      [52,26,12,"6 × 1 km soutenu, récupération 2 min en footing.","Endurance facile.","L'effort prime sur l'allure affichée : adapte au terrain et à la forme."],
      [41,20,9,"2 × 10 min au seuil confortable, récupération 3 min en footing.","Endurance facile.","Semaine d'assimilation : pas de séance à rattraper."],
      [56,28,12,"2 × 5 km à allure marathon, récupération 1 km facile.","Endurance facile.","Répète la stratégie d'hydratation et d'alimentation prévue."],
      [60,30,12,"3 × 4 km à allure marathon, récupération 1 km facile.","Endurance facile.","Sur la sortie longue, finis les derniers kilomètres à l'effort prévu seulement si tu es en forme."],
      [64,32,12,"4 × 2 km au seuil, récupération 1 km facile.","Endurance facile.","Pic de charge : mieux vaut raccourcir une séance que courir épuisé."],
      [50,24,8,"2 × 4 km à allure marathon contrôlée, récupération 1 km facile.","Endurance facile.","Semaine d'assimilation après le pic."],
      [48,26,8,"3 × 3 km à allure marathon, récupération 1 km facile.","Endurance facile.","Dernière longue sortie spécifique, reste frais."],
      [38,20,6,"3 × 2 km à allure marathon, récupération 1 km facile.","Endurance facile.","L'affûtage commence : réduis le volume, garde quelques rappels d'allure."],
      [28,14,5,"Footing facile avec 4 accélérations relâchées de 20 s.","Footing très facile.","Semaine légère. Pas de musculation lourde ni d'effort compensatoire."],
      [52.2,42.2,0,"Pas de séance de qualité : conserve ton énergie pour le marathon.","Footing très facile et bref, puis repos.","Semaine de course : pars avec un effort maîtrisé, et suis ta stratégie éprouvée."]
    ]
  },
  trail: {
    name: "Trail 50 km", distance: 50, duration: 16, experience: "Une pratique régulière d'au moins 35 km hebdomadaires, une expérience en trail et la capacité de courir ou marcher longtemps en terrain vallonné.",
    overview: "Un cycle de 16 semaines axé sur le temps d'effort, le dénivelé, la marche active, la technique et l'autonomie en terrain varié.",
    guidance: [
      ["Effort plutôt qu'allure", "En côte, régule à RPE 3–5/10 et marche activement si nécessaire. Le terrain et le dénivelé rendent les allures au kilomètre peu comparables."],
      ["Sorties longues", "Cours ou marche sur terrain proche de celui de la course. La plus longue sortie du plan est de 34 km : pas de sortie de 50 km à l'entraînement."],
      ["Autonomie", "Teste chaussures, sac, couches, hydratation et ravitaillement lors des longues sorties. Adapte l'apport énergétique à tes besoins."],
      ["Prérequis", "Les kilomètres ne représentent pas le dénivelé : ajuste la charge au terrain, à l'expérience et à la récupération, idéalement avec un entraîneur."]
    ],
    weeks: [
      [36,18,8,"8 × 1 min en côte à effort soutenu, retour en récupération.","Endurance facile sur terrain souple.","Commence le cycle sur des sentiers familiers."],
      [40,20,9,"10 × 1 min en côte, récupération en descente très facile.","Endurance facile.","Privilégie la durée d'effort plutôt que la vitesse."],
      [44,22,10,"3 × 8 min de montée à effort régulier, récupération en descente.","Endurance facile sur sentiers.","En descente, reste relâché et attentif à tes appuis."],
      [36,18,7,"Footing vallonné facile, sans accélération.","Endurance facile.","Semaine d'assimilation : diminue le dénivelé si la fatigue monte."],
      [48,24,10,"6 × 3 min en montée, récupération en descente contrôlée.","Endurance facile.","Teste le matériel sur une sortie, pas le jour de la course."],
      [52,26,11,"3 × 10 min de montée au seuil confortable.","Sentier facile, ajoute de la marche active en côte.","Pratique la marche rapide dans les pentes raides."],
      [56,28,12,"8 × 2 min en côte, effort soutenu mais régulier.","Endurance facile.","Choisis un terrain progressif, pas une descente technique à risque."],
      [44,22,8,"Footing vallonné facile avec 6 accélérations en montée de 15 s.","Endurance facile.","Semaine d'assimilation : vérifie ton matériel et tes chaussures."],
      [60,30,12,"4 × 8 min en côte, effort contrôlé, récupération en descente.","Sentier facile.","Sortie longue avec ravitaillement et sac de course testés."],
      [64,32,12,"3 × 12 min de montée à RPE 6/10, récupération en descente facile.","Endurance facile.","Si possible, enchaîne deux sorties longues mais faciles le week-end."],
      [68,34,12,"6 × 4 min en côte à effort soutenu, récupération complète en descente.","Sentier vallonné facile.","Semaine de pic : adapte le dénivelé à ta récupération."],
      [54,26,8,"3 × 8 min de montée régulière, récupération en descente facile.","Endurance facile.","Semaine d'assimilation : garde seulement le terrain qui te convient."],
      [62,32,10,"3 × 10 min en montée, effort de course contrôlé.","Sentier facile, teste une dernière fois ton autonomie.","Dernier week-end spécifique : teste une stratégie réaliste, sans te vider."],
      [48,24,8,"6 × 2 min en montée à RPE 6/10, récupération en descente.","Endurance facile.","Affûtage : baisse le volume et garde un peu de mobilité."],
      [36,16,0,"Pas de séance de qualité : de courtes sorties faciles seulement.","Footing très facile, sans chercher de dénivelé.","Semaine légère, prépare le matériel et le ravitaillement."],
      [60,50,0,"Pas de séance de qualité : garde ton énergie pour le trail.","Footing très facile et bref, puis repos.","Semaine de course : pars prudemment, marche les côtes et ravitaille tôt."]
    ]
  }
};

const storageKey = "stride-training-v1";
const weekdays = ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"];
const dayShort = ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."];
let state = readState();
let currentWeek = 0;
let toastTimer;
let supabaseClient = null;
let authUser = null;
let authMode = "signup";
let remoteSaveTimer;
let requestedPlan = null;

function readState() {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey) || "{}");
    return {
      plan: plans[saved.plan] ? saved.plan : null,
      raceDate: typeof saved.raceDate === "string" ? saved.raceDate : "",
      completed: saved.completed && typeof saved.completed === "object" ? saved.completed : {},
      profile: {
        name: typeof saved.profile?.name === "string" ? saved.profile.name : "",
        weeklyKm: Number(saved.profile?.weeklyKm) || 0,
        longestRunKm: Number(saved.profile?.longestRunKm) || 0,
        sessionsPerWeek: [3, 4, 5].includes(Number(saved.profile?.sessionsPerWeek)) ? Number(saved.profile.sessionsPerWeek) : 4
      }
    };
  } catch (error) {
    console.error("Impossible de lire le carnet enregistré.", error);
    return { plan: null, raceDate: "", completed: {}, profile: { name: "", weeklyKm: 0, longestRunKm: 0, sessionsPerWeek: 4 } };
  }
}

function saveState() {
  try {
    localStorage.setItem(authUser ? `${storageKey}:${authUser.id}` : storageKey, JSON.stringify(state));
    if (authUser) {
      const userId = authUser.id;
      const snapshot = JSON.parse(JSON.stringify(state));
      window.clearTimeout(remoteSaveTimer);
      remoteSaveTimer = window.setTimeout(() => {
        persistRemoteState(userId, snapshot).catch(error => {
          console.error("Impossible de synchroniser le profil Supabase.", error);
          showToast("La synchronisation a échoué. Vérifie ta connexion puis réessaie.");
        });
      }, 250);
    }
    return true;
  } catch (error) {
    console.error("Impossible d'enregistrer le carnet.", error);
    showToast("Tes modifications ne peuvent pas être enregistrées dans ce navigateur.");
    return false;
  }
}

async function persistRemoteState(userId = authUser?.id, snapshot = state) {
  if (!supabaseClient || !authUser || authUser.id !== userId) return;
  const { error } = await supabaseClient.from("training_profiles").upsert({
    user_id: userId,
    display_name: snapshot.profile.name.trim(),
    plan: snapshot.plan,
    race_date: snapshot.raceDate || null,
    weekly_km: snapshot.profile.weeklyKm,
    longest_run_km: snapshot.profile.longestRunKm,
    sessions_per_week: snapshot.profile.sessionsPerWeek,
    completed: snapshot.completed,
    updated_at: new Date().toISOString()
  }, { onConflict: "user_id" });
  if (error) throw error;
}

function showToast(message) {
  const toast = document.querySelector("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove("show"), 3500);
}

function getRaceDate() {
  if (state.raceDate) {
    const [year, month, day] = state.raceDate.split("-").map(Number);
    const date = new Date(year, month - 1, day, 12);
    if (!Number.isNaN(date.getTime())) return date;
  }
  const today = new Date();
  today.setHours(12, 0, 0, 0);
  const untilSunday = (7 - today.getDay()) % 7 || 7;
  today.setDate(today.getDate() + untilSunday);
  return today;
}

function dateInputValue(date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

function defaultRaceDate(planDuration) {
  const date = new Date();
  date.setHours(12, 0, 0, 0);
  date.setDate(date.getDate() + planDuration * 7 - 2);
  date.setDate(date.getDate() + (7 - date.getDay()) % 7);
  return date;
}

function formatDate(date, options = { day: "numeric", month: "short" }) {
  return new Intl.DateTimeFormat("fr-FR", options).format(date);
}

function getWeekDates(index) {
  const raceDate = getRaceDate();
  const weekAnchor = new Date(raceDate);
  weekAnchor.setDate(weekAnchor.getDate() - (plans[state.plan].duration - 1 - index) * 7);
  const days = Number(state.profile.sessionsPerWeek) === 3 ? [-5, -3, 0] : Number(state.profile.sessionsPerWeek) === 5 ? [-6, -5, -3, -1, 0] : [-5, -3, -1, 0];
  return days.map(offset => {
    const date = new Date(weekAnchor);
    date.setDate(date.getDate() + offset);
    return date;
  });
}

function getWeekData(index) {
  const raw = plans[state.plan].weeks[index];
  const [baseVolume, baseLong, baseQuality, qualityDescription, easyDescription, note] = raw;
  const isRaceWeek = index === plans[state.plan].duration - 1;
  const reference = plans[state.plan].weeks[0][0];
  const scale = state.profile.weeklyKm > 0 ? Math.max(0.75, Math.min(1.2, state.profile.weeklyKm / reference)) : 1;
  const scaled = value => Math.round(value * scale * 10) / 10;
  const quality = scaled(baseQuality);
  const long = isRaceWeek ? plans[state.plan].distance : scaled(baseLong);
  const volume = isRaceWeek
    ? Math.round((long + scaled(Math.max(0, baseVolume - baseLong))) * 10) / 10
    : scaled(baseVolume);
  const easyTotal = Math.max(0, volume - long - quality);
  const shakeout = quality ? 0 : Math.round(easyTotal * 0.25 * 10) / 10;
  const remainingEasy = easyTotal - shakeout;
  const easyA = Math.round(remainingEasy * 0.55 * 10) / 10;
  const easyB = Math.round((remainingEasy - easyA) * 10) / 10;
  let sessions = [
      { id: `${index}-quality`, title: quality ? "Séance de qualité" : "Footing de réveil", type: quality ? "qualite" : "facile", distance: quality || shakeout, description: quality ? qualityDescription : "Footing très facile, sans séance intense. Raccourcis si tu en ressens le besoin.", focus: quality ? "Échauffement 15 min + retour au calme 10 min inclus dans la distance." : "Cette semaine, la récupération passe avant le volume." },
      { id: `${index}-easy`, title: "Endurance fondamentale", type: "facile", distance: easyA, description: easyDescription, focus: "RPE 3–4/10 · tu peux parler en phrases complètes." },
      { id: `${index}-easy2`, title: "Footing de récupération", type: "recuperation", distance: easyB, description: "Course très facile et relâchée, ou footing raccourci si tu ressens de la fatigue.", focus: "RPE 2–3/10 · allège ou remplace par du repos si besoin." },
      { id: `${index}-long`, title: index === plans[state.plan].duration - 1 ? "Course objectif" : "Sortie longue", type: index === plans[state.plan].duration - 1 ? "course" : "longue", distance: long, description: index === plans[state.plan].duration - 1 ? `${plans[state.plan].name} · ${plans[state.plan].distance} km. Échauffe-toi doucement et pars à un effort maîtrisé.` : state.plan === "trail" ? "Sur chemins vallonnés si possible. Alterne course et marche active dans les montées, à effort régulier." : "Allure conversationnelle, hydratation et ravitaillement testés. Pas de finish rapide si la fatigue monte.", focus: index === plans[state.plan].duration - 1 ? "Le jour J : suis ton plan d'allure et de ravitaillement déjà testé." : "RPE 3–4/10 · priorité à la durée et à la régularité." }
    ];
  if (Number(state.profile.sessionsPerWeek) === 3) {
    sessions = [sessions[0], {
      ...sessions[1],
      id: `${index}-easy-combined`,
      distance: Math.round((easyA + easyB) * 10) / 10,
      description: "Footing facile en aisance respiratoire. Garde une allure confortable.",
      focus: "RPE 3–4/10 · termine en te sentant capable de continuer."
    }, sessions[3]];
  } else if (Number(state.profile.sessionsPerWeek) === 5) {
    const firstEasy = Math.round(easyA / 2 * 10) / 10;
    sessions = [
      sessions[0],
      { ...sessions[1], id: `${index}-easy-a`, distance: firstEasy },
      { ...sessions[1], id: `${index}-easy-b`, title: "Endurance fondamentale", distance: Math.round((easyA - firstEasy) * 10) / 10 },
      sessions[2],
      sessions[3]
    ];
  }
  sessions = sessions.filter(session => session.distance > 0);
  return { volume, long, quality, note, sessions };
}

const prerequisites = {
  half: { weeklyKm: 15, longestRunKm: 10, sessions: 3 },
  marathon: { weeklyKm: 30, longestRunKm: 16, sessions: 4 },
  trail: { weeklyKm: 35, longestRunKm: 18, sessions: 4 }
};

function profileValues() {
  return {
    name: document.querySelector("#profile-name").value.trim(),
    weeklyKm: Number(document.querySelector("#profile-weekly-km").value),
    longestRunKm: Number(document.querySelector("#profile-longest-run").value),
    sessionsPerWeek: Number(document.querySelector("#profile-sessions").value)
  };
}

function profilePrerequisiteMessage(planKey, profile = profileValues()) {
  const minimum = prerequisites[planKey];
  if (!minimum) return "";
  const unmet = [];
  if (profile.weeklyKm < minimum.weeklyKm) unmet.push(`${minimum.weeklyKm} km hebdomadaires`);
  if (profile.longestRunKm < minimum.longestRunKm) unmet.push(`une sortie longue récente de ${minimum.longestRunKm} km`);
  if (profile.sessionsPerWeek < minimum.sessions) unmet.push(`${minimum.sessions} sorties par semaine`);
  return unmet.length
    ? `Avant ce plan, construis une base régulière : prérequis non atteints (${unmet.join(", ")}). Le plan n’est pas généré tant que ces repères ne sont pas remplis.`
    : "Ta base actuelle correspond aux prérequis minimaux du plan. Continue à adapter la charge à ta récupération.";
}

function updateReadinessMessage() {
  const planKey = document.querySelector("#profile-plan").value;
  const message = document.querySelector("#readiness-message");
  message.textContent = profilePrerequisiteMessage(planKey);
  message.classList.toggle("warning", Boolean(planKey && !message.textContent.startsWith("Ta base")));
}

function showFormMessage(selector, message, isError = false) {
  const element = document.querySelector(selector);
  element.textContent = message;
  element.classList.toggle("error", isError);
}

function updateAccountUi() {
  const label = document.querySelector("#account-label");
  const dot = document.querySelector("#account-status-dot");
  const avatar = document.querySelector(".avatar-button");
  if (authUser) {
    const name = state.profile.name || authUser.email || "Mon compte";
    label.textContent = name;
    avatar.textContent = name.trim().charAt(0).toUpperCase() || "C";
    dot.style.background = "#8bcf57";
  } else {
    label.textContent = "Mode visiteur";
    avatar.textContent = "C";
    dot.style.background = "#d6a54c";
  }
}

function renderProfile() {
  const authPanel = document.querySelector("#auth-panel");
  const profileEditor = document.querySelector("#profile-editor");
  authPanel.classList.toggle("hidden", Boolean(authUser));
  profileEditor.classList.toggle("hidden", !authUser);
  document.querySelector("#supabase-notice").classList.toggle("hidden", Boolean(supabaseClient));
  if (!authUser) return;
  document.querySelector("#profile-name").value = state.profile.name || "";
  document.querySelector("#profile-plan").value = state.plan || "";
  document.querySelector("#profile-race-date").value = state.raceDate || "";
  document.querySelector("#profile-weekly-km").value = state.profile.weeklyKm || "";
  document.querySelector("#profile-longest-run").value = state.profile.longestRunKm || "";
  document.querySelector("#profile-sessions").value = String(state.profile.sessionsPerWeek || 4);
  updateReadinessMessage();
}

async function loadUserProfile(user) {
  if (!supabaseClient || !user) return;
  try {
    const { data, error } = await supabaseClient
      .from("training_profiles")
      .select("*")
      .eq("user_id", user.id)
      .maybeSingle();
    if (error) throw error;
    if (authUser?.id !== user.id) return;
    state = {
      plan: plans[data?.plan] ? data.plan : null,
      raceDate: typeof data?.race_date === "string" ? data.race_date : "",
      completed: data?.completed && typeof data.completed === "object" ? data.completed : {},
      profile: {
        name: data?.display_name || user.user_metadata?.display_name || "",
        weeklyKm: Number(data?.weekly_km) || 0,
        longestRunKm: Number(data?.longest_run_km) || 0,
        sessionsPerWeek: [3, 4, 5].includes(Number(data?.sessions_per_week)) ? Number(data.sessions_per_week) : 4
      }
    };
    if (state.plan && !state.raceDate) state.raceDate = dateInputValue(defaultRaceDate(plans[state.plan].duration));
    currentWeek = state.plan ? getCurrentWeekIndex() : 0;
    if (requestedPlan) {
      document.querySelector("#profile-plan").value = requestedPlan;
      document.querySelector("#profile-race-date").value = dateInputValue(defaultRaceDate(plans[requestedPlan].duration));
    }
    localStorage.setItem(`${storageKey}:${user.id}`, JSON.stringify(state));
    renderAll();
    updateAccountUi();
  } catch (error) {
    console.error("Impossible de charger le profil Supabase.", error);
    showToast("Impossible de charger ton profil. Vérifie la configuration Supabase et réessaie.");
  }
}

async function initializeSupabase() {
  const config = window.STRIDE_SUPABASE_CONFIG;
  if (!config?.url || !config?.anonKey || !window.supabase?.createClient) {
    renderProfile();
    return;
  }
  try {
    supabaseClient = window.supabase.createClient(config.url, config.anonKey);
    const { data, error } = await supabaseClient.auth.getSession();
    if (error) throw error;
    if (data.session?.user) {
      authUser = data.session.user;
      await loadUserProfile(authUser);
    }
    supabaseClient.auth.onAuthStateChange((_event, session) => {
      const nextUser = session?.user || null;
      if (nextUser?.id === authUser?.id) return;
      window.clearTimeout(remoteSaveTimer);
      authUser = nextUser;
      if (authUser) {
        window.setTimeout(() => loadUserProfile(authUser).catch(error => {
          console.error("Impossible de recharger le profil après connexion.", error);
          showToast("Impossible de charger ton profil.");
        }), 0);
      } else {
        state = readState();
        currentWeek = state.plan ? getCurrentWeekIndex() : 0;
        renderAll();
        updateAccountUi();
      }
      renderProfile();
    });
    renderProfile();
    updateAccountUi();
  } catch (error) {
    supabaseClient = null;
    console.error("Impossible d'initialiser Supabase.", error);
    showToast("La connexion au service de comptes a échoué.");
    renderProfile();
  }
}

function setAuthMode(mode) {
  authMode = mode;
  const signup = mode === "signup";
  document.querySelector("#auth-name").closest(".form-field").classList.toggle("hidden", !signup);
  document.querySelector("#auth-name").required = signup;
  document.querySelector("#auth-password").autocomplete = signup ? "new-password" : "current-password";
  document.querySelector("#auth-title").textContent = signup ? "Crée ton compte Stride" : "Content de te revoir";
  document.querySelector("#auth-description").textContent = signup
    ? "Ton profil, ton programme et tes sorties seront enregistrés dans ton compte et synchronisés sur tes appareils."
    : "Connecte-toi pour retrouver ton profil, ton programme et ta progression.";
  document.querySelector("#auth-submit").innerHTML = signup ? "Créer mon compte <span>→</span>" : "Me connecter <span>→</span>";
  document.querySelector("#auth-switch").textContent = signup ? "J'ai déjà un compte — me connecter" : "Créer un nouveau compte";
  showFormMessage("#auth-message", "");
}

async function submitAuth(event) {
  event.preventDefault();
  if (!supabaseClient) {
    showFormMessage("#auth-message", "La connexion Supabase n’est pas configurée. Consulte les instructions ci-dessus.", true);
    return;
  }
  const button = document.querySelector("#auth-submit");
  const email = document.querySelector("#auth-email").value.trim();
  const password = document.querySelector("#auth-password").value;
  button.disabled = true;
  showFormMessage("#auth-message", authMode === "signup" ? "Création du compte…" : "Connexion…");
  try {
    const result = authMode === "signup"
      ? await supabaseClient.auth.signUp({ email, password, options: { data: { display_name: document.querySelector("#auth-name").value.trim() } } })
      : await supabaseClient.auth.signInWithPassword({ email, password });
    if (result.error) throw result.error;
    if (!result.data.session) {
      setAuthMode("login");
      showFormMessage("#auth-message", "Compte créé. Vérifie ta boîte e-mail pour confirmer ton adresse, puis connecte-toi.");
      return;
    }
    authUser = result.data.user;
    await loadUserProfile(authUser);
    if (requestedPlan) {
      document.querySelector("#profile-plan").value = requestedPlan;
      document.querySelector("#profile-race-date").value = dateInputValue(defaultRaceDate(plans[requestedPlan].duration));
      updateReadinessMessage();
      requestedPlan = null;
    }
    setView("profile");
    showFormMessage("#profile-message", "Compte connecté. Complète ton profil pour créer ton programme.");
  } catch (error) {
    console.error("Échec de l'authentification Supabase.", error);
    showFormMessage("#auth-message", error.message || "Connexion impossible. Vérifie tes informations et réessaie.", true);
  } finally {
    button.disabled = false;
  }
}

async function saveProfileOnly() {
  if (!document.querySelector("#profile-name").value.trim() ||
      document.querySelector("#profile-weekly-km").value === "" ||
      document.querySelector("#profile-longest-run").value === "") {
    showFormMessage("#profile-message", "Renseigne ton nom, ton volume hebdomadaire et ta plus longue sortie récente.", true);
    return;
  }
  const nextProfile = profileValues();
  if (state.profile.weeklyKm !== nextProfile.weeklyKm || state.profile.sessionsPerWeek !== nextProfile.sessionsPerWeek) {
    state.completed = {};
  }
  state.profile = nextProfile;
  saveState();
  window.clearTimeout(remoteSaveTimer);
  try {
    await persistRemoteState(authUser?.id, JSON.parse(JSON.stringify(state)));
    showFormMessage("#profile-message", "Profil enregistré dans ton compte.");
    renderAll();
    updateAccountUi();
  } catch (error) {
    console.error("Impossible d'enregistrer le profil Supabase.", error);
    showFormMessage("#profile-message", "Enregistrement impossible. Vérifie ta connexion puis réessaie.", true);
  }
}

async function createProgram(event) {
  event.preventDefault();
  if (!authUser || !supabaseClient) {
    setView("profile");
    showToast("Connecte-toi pour enregistrer ton programme dans ton compte.");
    return;
  }
  const planKey = document.querySelector("#profile-plan").value;
  const raceDate = document.querySelector("#profile-race-date").value;
  const profile = profileValues();
  if (!plans[planKey] || !raceDate || !profile.name || !document.querySelector("#profile-weekly-km").value || !document.querySelector("#profile-longest-run").value) {
    showFormMessage("#profile-message", "Complète tous les champs du profil et choisis un objectif et une date de course.", true);
    return;
  }
  const minimum = prerequisites[planKey];
  const unmet = profilePrerequisiteMessage(planKey, profile);
  if (unmet.startsWith("Avant")) {
    showFormMessage("#profile-message", unmet, true);
    return;
  }
  const race = new Date(`${raceDate}T12:00:00`);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const weeksUntilRace = Math.ceil((race - today) / (7 * 86400000));
  if (race <= today || weeksUntilRace < plans[planKey].duration) {
    showFormMessage("#profile-message", `Choisis une date dans au moins ${plans[planKey].duration} semaines pour suivre le cycle complet.`, true);
    return;
  }
  if (profile.sessionsPerWeek < minimum.sessions) {
    showFormMessage("#profile-message", `Ce plan nécessite au moins ${minimum.sessions} sorties par semaine.`, true);
    return;
  }
  if (state.plan !== planKey ||
      state.raceDate !== raceDate ||
      state.profile.weeklyKm !== profile.weeklyKm ||
      state.profile.sessionsPerWeek !== profile.sessionsPerWeek) {
    state.completed = {};
  }
  state.profile = profile;
  state.plan = planKey;
  state.raceDate = raceDate;
  currentWeek = getCurrentWeekIndex();
  requestedPlan = null;
  saveState();
  window.clearTimeout(remoteSaveTimer);
  try {
    await persistRemoteState(authUser?.id, JSON.parse(JSON.stringify(state)));
    renderAll();
    setView("program");
    showToast("Ton programme est créé et synchronisé avec ton compte.");
  } catch (error) {
    console.error("Impossible d'enregistrer le programme Supabase.", error);
    showFormMessage("#profile-message", "Le programme n’a pas pu être enregistré. Vérifie ta connexion puis réessaie.", true);
  }
}

function checked(key) { return Boolean(state.completed[key]); }

function setView(view) {
  const titles = { dashboard: "Vue d'ensemble", program: "Mon programme", progress: "Ma progression", profile: "Mon profil" };
  document.querySelectorAll(".view").forEach(section => section.classList.toggle("hidden", section.id !== `${view}-view`));
  document.querySelectorAll(".nav-link").forEach(button => button.classList.toggle("active", button.dataset.view === view));
  document.querySelector("#breadcrumb-current").textContent = titles[view];
  if (view === "progress") renderProgress();
  if (view === "profile") renderProfile();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function toggleSession(key) {
  if (state.completed[key]) delete state.completed[key];
  else state.completed[key] = true;
  saveState();
  renderAll();
}

function makeDashboardSession(session, date) {
  const item = document.createElement("div");
  item.className = "dashboard-session";
  const weekday = document.createElement("span");
  weekday.className = "session-day";
  weekday.textContent = dayShort[date.getDay()];
  const detail = document.createElement("div");
  const title = document.createElement("div");
  title.className = "session-mini-title";
  title.textContent = session.title;
  const meta = document.createElement("div");
  meta.className = "session-mini-meta";
  meta.textContent = `${session.distance.toLocaleString("fr-FR")} km · ${formatDate(date)}`;
  detail.append(title, meta);
  const side = document.createElement("div");
  side.style.display = "flex";
  side.style.alignItems = "center";
  const distance = document.createElement("span");
  distance.className = "session-km";
  distance.textContent = `${session.distance.toLocaleString("fr-FR")} km`;
  const status = document.createElement("span");
  status.className = "session-check";
  status.textContent = checked(session.id) ? "✓" : "";
  side.append(distance, status);
  item.append(weekday, detail, side);
  return item;
}

function renderDashboard() {
  const cardContainer = document.querySelector("#dashboard-sessions");
  cardContainer.replaceChildren();
  const date = getRaceDate();
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const daysLeft = Math.ceil((date.setHours(0, 0, 0, 0) - today.getTime()) / 86400000);
  document.querySelector("#countdown").textContent = state.plan ? Math.max(0, daysLeft).toString() : "—";
  document.querySelector("#countdown-race").textContent = state.plan ? `${plans[state.plan].name} · ${formatDate(getRaceDate(), { day: "numeric", month: "long", year: "numeric" })}` : "Choisis ta course";
  const activeCards = document.querySelectorAll(".plan-card");
  activeCards.forEach(card => card.classList.toggle("selected", card.dataset.plan === state.plan));
  if (!state.plan) {
    document.querySelector("#weekly-km").textContent = "0";
    document.querySelector("#weekly-target").textContent = "Choisis un plan pour commencer";
    document.querySelector("#weekly-progress-bar").style.width = "0%";
    document.querySelector("#completed-count").textContent = "0";
    document.querySelector("#session-count").textContent = "0";
    document.querySelector("#completion-caption").textContent = "Chaque pas compte.";
    document.querySelector("#next-workout-name").textContent = "Choisis un objectif";
    document.querySelector("#next-workout-meta").textContent = "Ton programme apparaîtra ici.";
    return;
  }
  const plan = plans[state.plan];
  const weekIndex = getCurrentWeekIndex();
  const week = getWeekData(weekIndex);
  const dates = getWeekDates(weekIndex);
  let completedKm = 0;
  let completedThisWeek = 0;
  let totalCompleted = 0;
  let totalSessions = 0;
  for (let i = 0; i < plan.duration; i++) {
    const data = getWeekData(i);
    data.sessions.forEach(session => {
      totalSessions++;
      if (checked(session.id)) {
        totalCompleted++;
        if (i === weekIndex) { completedThisWeek++; completedKm += session.distance; }
      }
    });
  }
  document.querySelector("#weekly-km").textContent = completedKm.toLocaleString("fr-FR", { maximumFractionDigits: 1 });
  document.querySelector("#weekly-target").textContent = `sur ${week.volume.toLocaleString("fr-FR", { maximumFractionDigits: 1 })} km prévus`;
  document.querySelector("#weekly-progress-bar").style.width = `${Math.min(100, completedKm / week.volume * 100)}%`;
  document.querySelector("#completed-count").textContent = totalCompleted;
  document.querySelector("#session-count").textContent = totalSessions;
  document.querySelector("#completion-caption").textContent = `${completedThisWeek} séance${completedThisWeek > 1 ? "s" : ""} cette semaine.`;
  cardContainer.replaceChildren(...week.sessions.map((session, index) => makeDashboardSession(session, dates[index])));
  const allSessions = [];
  for (let i = 0; i < plan.duration; i++) {
    const data = getWeekData(i);
    const datesForWeek = getWeekDates(i);
    data.sessions.forEach((session, index) => allSessions.push({ session, date: datesForWeek[index] }));
  }
  const next = allSessions.find(({ session }) => !checked(session.id));
  document.querySelector("#next-workout-name").textContent = next ? next.session.title : "Cycle terminé — bravo !";
  document.querySelector("#next-workout-meta").textContent = next ? `${dayShort[next.date.getDay()]} ${formatDate(next.date)} · ${next.session.distance.toLocaleString("fr-FR")} km` : "Toutes les sorties du plan ont été validées.";
}

function getCurrentWeekIndex() {
  const raceDate = getRaceDate();
  const start = new Date(raceDate);
  start.setDate(start.getDate() - plans[state.plan].duration * 7);
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  const days = Math.floor((now - start) / 86400000);
  return Math.max(0, Math.min(plans[state.plan].duration - 1, Math.floor(days / 7)));
}

function renderProgram() {
  if (!state.plan) {
    document.querySelector("#program-name").textContent = "Aucun plan sélectionné";
    document.querySelector("#program-description").textContent = "Complète ton profil pour créer un programme adapté à ton objectif.";
    document.querySelector("#plan-volume").textContent = "— km";
    document.querySelector("#program-frequency").textContent = "— sorties / semaine";
    document.querySelector("#current-phase").textContent = "À définir";
    document.querySelector("#week-heading").textContent = "Choisis ton objectif";
    document.querySelector("#week-position").textContent = "— / —";
    document.querySelector("#sessions-list").replaceChildren();
    document.querySelector("#week-note").textContent = "";
    document.querySelector("#plan-guidance").replaceChildren();
    document.querySelector("#week-date-range").textContent = "";
    return;
  }
  const plan = plans[state.plan];
  currentWeek = Math.max(0, Math.min(plan.duration - 1, currentWeek));
  const week = getWeekData(currentWeek);
  const dates = getWeekDates(currentWeek);
  document.querySelector("#program-name").textContent = plan.name;
  document.querySelector("#program-description").textContent = `${plan.overview} Volume ajusté à ta base récente (${state.profile.weeklyKm || "—"} km/semaine).`;
  document.querySelector("#plan-duration").textContent = `${plan.duration} semaines`;
  document.querySelector("#program-frequency").textContent = `${state.profile.sessionsPerWeek} sorties / semaine`;
  const warning = document.querySelector("#plan-timeline-warning");
  const raceDate = getRaceDate();
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  if (raceDate <= today) {
    warning.textContent = "La date de course est passée. Choisis une nouvelle date pour planifier ton cycle.";
    warning.classList.remove("hidden");
  } else if (getCurrentWeekIndex() > 0) {
    warning.textContent = `La course est dans moins de ${plan.duration} semaines : le cycle a déjà commencé. Choisis une date plus éloignée pour suivre le plan complet.`;
    warning.classList.remove("hidden");
  } else {
    warning.textContent = "";
    warning.classList.add("hidden");
  }
  document.querySelector("#plan-volume").textContent = `${week.volume.toLocaleString("fr-FR", { maximumFractionDigits: 1 })} km`;
  document.querySelector("#current-phase").textContent = currentWeek === plan.duration - 1 ? "Course" : currentWeek >= plan.duration - (state.plan === "half" ? 2 : 4) ? "Affûtage" : week.long >= (state.plan === "half" ? 18 : 30) ? "Spécifique" : currentWeek < 3 ? "Construction" : "Progression";
  document.querySelector("#week-heading").textContent = `Semaine ${currentWeek + 1}`;
  document.querySelector("#week-position").textContent = `${currentWeek + 1} / ${plan.duration}`;
  document.querySelector("#prev-week").disabled = currentWeek === 0;
  document.querySelector("#next-week").disabled = currentWeek === plan.duration - 1;
  document.querySelector("#week-date-range").textContent = `${formatDate(dates[0], { day: "numeric", month: "long" })} – ${formatDate(dates[dates.length - 1], { day: "numeric", month: "long", year: "numeric" })}`;
  document.querySelector("#week-total").textContent = `${week.volume.toLocaleString("fr-FR", { maximumFractionDigits: 1 })} km planifiés`;
  const sessionsList = document.querySelector("#sessions-list");
  sessionsList.replaceChildren();
  week.sessions.forEach((session, index) => {
    const row = document.createElement("article");
    row.className = `workout${checked(session.id) ? " completed" : ""}`;
    const day = document.createElement("div");
    day.className = "workout-day";
    day.append(document.createTextNode(weekdays[dates[index].getDay()]));
    const dateLabel = document.createElement("span");
    dateLabel.textContent = formatDate(dates[index], { day: "numeric", month: "short" });
    day.append(dateLabel);
    const main = document.createElement("div");
    main.className = "workout-main";
    const title = document.createElement("div");
    title.className = "workout-title";
    title.append(document.createTextNode(session.title));
    const tag = document.createElement("span");
    tag.className = "workout-tag";
    tag.textContent = session.type === "qualite" ? "QUALITÉ" : session.type === "longue" ? "SORTIE LONGUE" : session.type === "course" ? "OBJECTIF" : "FACILE";
    title.append(tag);
    const description = document.createElement("p");
    description.className = "workout-description";
    description.textContent = session.description;
    const focus = document.createElement("div");
    focus.className = "workout-focus";
    focus.textContent = session.focus;
    main.append(title, description, focus);
    const aside = document.createElement("div");
    aside.className = "workout-aside";
    const distance = document.createElement("span");
    distance.className = "workout-distance";
    distance.textContent = `${session.distance.toLocaleString("fr-FR", { maximumFractionDigits: 1 })} km`;
    const check = document.createElement("button");
    check.type = "button";
    check.className = `check-button${checked(session.id) ? " checked" : ""}`;
    check.setAttribute("aria-label", `${checked(session.id) ? "Annuler" : "Valider"} : ${session.title}`);
    check.setAttribute("aria-pressed", String(checked(session.id)));
    check.textContent = checked(session.id) ? "✓" : "";
    check.addEventListener("click", () => toggleSession(session.id));
    aside.append(distance, check);
    row.append(day, main, aside);
    sessionsList.append(row);
  });
  document.querySelector("#week-note").textContent = `À retenir · ${week.note}`;
  const guidance = document.querySelector("#plan-guidance");
  guidance.replaceChildren();
  plan.guidance.forEach(([heading, description]) => {
    const item = document.createElement("div");
    item.className = "guidance-item";
    const title = document.createElement("strong");
    title.textContent = heading;
    const body = document.createElement("p");
    body.textContent = description;
    item.append(title, body);
    guidance.append(item);
  });
}

function renderProgress() {
  if (!state.plan) {
    document.querySelector("#progress-completed").textContent = "0";
    document.querySelector("#progress-distance").textContent = "0";
    document.querySelector("#progress-week").textContent = "—";
    document.querySelector("#progress-phase").textContent = "Choisis un objectif";
    document.querySelector("#history-summary").textContent = "Choisis un objectif pour commencer";
    document.querySelector("#history-chart").replaceChildren();
    return;
  }
  const plan = plans[state.plan];
  const currentIndex = getCurrentWeekIndex();
  let completedCount = 0;
  let completedDistance = 0;
  const chart = document.querySelector("#history-chart");
  chart.replaceChildren();
  const maxVolume = Math.max(...plan.weeks.map((_week, index) => getWeekData(index).volume));
  for (let i = 0; i < plan.duration; i++) {
    const data = getWeekData(i);
    const done = data.sessions.filter(session => checked(session.id));
    completedCount += done.length;
    completedDistance += done.reduce((sum, session) => sum + session.distance, 0);
    const column = document.createElement("div");
    column.className = "chart-week";
    const track = document.createElement("div");
    track.className = "chart-bar-track";
    const plannedBar = document.createElement("span");
    plannedBar.className = "chart-bar";
    plannedBar.style.height = `${Math.max(3, data.volume / maxVolume * 105)}px`;
    plannedBar.setAttribute("title", `${data.volume.toLocaleString("fr-FR")} km planifiés`);
    const doneBar = document.createElement("span");
    doneBar.className = "chart-bar done";
    doneBar.style.height = `${Math.max(done.length ? 3 : 0, done.reduce((sum, session) => sum + session.distance, 0) / maxVolume * 105)}px`;
    doneBar.setAttribute("title", `${done.length} séance${done.length > 1 ? "s" : ""} terminée${done.length > 1 ? "s" : ""}`);
    track.append(plannedBar, doneBar);
    const label = document.createElement("span");
    label.className = "chart-label";
    label.textContent = `S${i + 1}`;
    column.append(track, label);
    chart.append(column);
  }
  document.querySelector("#progress-completed").textContent = completedCount;
  document.querySelector("#progress-distance").textContent = completedDistance.toLocaleString("fr-FR", { maximumFractionDigits: 1 });
  document.querySelector("#progress-week").textContent = `${currentIndex + 1}/${plan.duration}`;
  document.querySelector("#progress-phase").textContent = currentIndex === plan.duration - 1 ? "Semaine de course" : "Du cycle";
  document.querySelector("#history-summary").textContent = `${completedCount} sortie${completedCount > 1 ? "s" : ""} · ${completedDistance.toLocaleString("fr-FR", { maximumFractionDigits: 1 })} km enregistrés`;
}

function renderAll() {
  renderDashboard();
  renderProgram();
  if (!document.querySelector("#progress-view").classList.contains("hidden")) renderProgress();
  document.querySelector("#race-date").value = state.raceDate || dateInputValue(getRaceDate());
  renderProfile();
  updateAccountUi();
}

function selectPlan(key) {
  if (!plans[key]) return;
  requestedPlan = key;
  setView("profile");
  document.querySelector("#profile-plan").value = key;
  if (state.plan !== key || !document.querySelector("#profile-race-date").value || document.querySelector("#profile-race-date").value < dateInputValue(new Date())) {
    document.querySelector("#profile-race-date").value = dateInputValue(defaultRaceDate(plans[key].duration));
  }
  updateReadinessMessage();
  if (!authUser) showToast("Crée un compte ou connecte-toi pour générer ton programme personnalisé.");
}

document.querySelectorAll("[data-view]").forEach(button => button.addEventListener("click", () => setView(button.dataset.view)));
document.querySelectorAll("[data-go]").forEach(button => button.addEventListener("click", () => setView(button.dataset.go)));
document.querySelectorAll("[data-plan]").forEach(button => button.addEventListener("click", () => selectPlan(button.dataset.plan)));
document.querySelector("#change-plan").addEventListener("click", () => setView("dashboard"));
document.querySelector("#prev-week").addEventListener("click", () => { currentWeek--; renderProgram(); });
document.querySelector("#next-week").addEventListener("click", () => { currentWeek++; renderProgram(); });
document.querySelector("#auth-form").addEventListener("submit", submitAuth);
document.querySelector("#auth-switch").addEventListener("click", () => setAuthMode(authMode === "signup" ? "login" : "signup"));
document.querySelector("#profile-editor").addEventListener("submit", createProgram);
document.querySelector("#save-profile").addEventListener("click", saveProfileOnly);
document.querySelector("#sign-out").addEventListener("click", async () => {
  if (!supabaseClient) return;
  try {
    const { error } = await supabaseClient.auth.signOut();
    if (error) throw error;
    window.clearTimeout(remoteSaveTimer);
    authUser = null;
    state = readState();
    renderAll();
    setView("profile");
    showToast("Tu es déconnecté.");
  } catch (error) {
    console.error("Impossible de fermer la session Supabase.", error);
    showToast("Déconnexion impossible. Réessaie.");
  }
});
["#profile-plan", "#profile-weekly-km", "#profile-longest-run", "#profile-sessions"].forEach(selector => {
  document.querySelector(selector).addEventListener("input", updateReadinessMessage);
  document.querySelector(selector).addEventListener("change", updateReadinessMessage);
});
document.querySelector("#race-date").addEventListener("change", event => {
  if (!event.target.value) return;
  const chosen = new Date(`${event.target.value}T12:00:00`);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  if (chosen <= today) {
    showToast("Choisis une date de course à venir.");
    event.target.value = state.raceDate || dateInputValue(getRaceDate());
    return;
  }
  state.raceDate = event.target.value;
  currentWeek = getCurrentWeekIndex();
  saveState();
  renderAll();
});

if (state.plan) {
  if (!state.raceDate) state.raceDate = dateInputValue(defaultRaceDate(plans[state.plan].duration));
  currentWeek = getCurrentWeekIndex();
}
setAuthMode("signup");
document.querySelector("#auth-name").closest(".form-field").classList.remove("hidden");
initializeSupabase();
renderAll();
setView("dashboard");
