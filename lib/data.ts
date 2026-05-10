export type EpisodeStatus = 'available' | 'soon' | 'planned';

export interface TranscriptBlock {
  speaker: string;
  text: string;
}

export interface Episode {
  id: number;
  number: string;
  title: string;
  guest: string;
  role: string;
  tags: string[];
  status: EpisodeStatus;
  description: string;
  themes?: string[];
  quote?: string;
  duration: string;
  intro?: boolean;
  transcript?: TranscriptBlock[];
}

export interface TeamMember {
  name: string;
  role: string;
}

export interface ThemeTeaser {
  tag: string;
  color: string;
}

export interface Article {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  author: string;
  role: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  excerpt: string;
  content: string;
}

export const EPISODES: Episode[] = [
  {
    id: 1,
    number: '001',
    title: 'Erasmus, Așteptări și Realități',
    guest: 'George Tudose',
    role: 'Lector universitar, REI',
    tags: ['Erasmus', 'Mobilitate', 'Cultură'],
    status: 'soon',
    description:
      'Dincolo de bursă și fotografii la apus — ce înseamnă, de fapt, Erasmus pentru formarea unui economist global. Birocrație, șoc cultural, revelații profesionale.',
    themes: [
      'Adaptabilitate culturală',
      'Birocrație academică',
      'Piața muncii internațională',
      'Post-Erasmus Depression',
    ],
    quote:
      'Birocrația e primul tău curs de Managementul Riscului. Dacă supraviețuiești dosarului, poți gestiona orice contract internațional.',
    duration: '~55 min',
    intro: true,
    transcript: [
      {
        speaker: 'Moderator',
        text: 'Salutare tuturor! Suntem la podcastul REI Insights — locul unde transformăm teoria economică în povești de viață. Astăzi îl avem alături de noi pe George Tudose, lector universitar la Facultatea de Relații Economice Internaționale. George, lumea te vede pe holurile facultății, la seminare sau cursuri — dar cine este omul din spatele catedrei?',
      },
      {
        speaker: 'George Tudose',
        text: 'Mulțumesc pentru invitație. E o întrebare bună, pentru că de obicei când intri la curs există o anumită dinamică formală. Dincolo de asta, sunt un om care a ajuns la REI dintr-o fascinație reală pentru relațiile internaționale — nu dintr-un plan strategic, ci dintr-o curiozitate despre cum funcționează lumea dincolo de granițe.',
      },
      {
        speaker: 'Moderator',
        text: 'Hai să vorbim despre Erasmus. Dacă cauți pe Google, Erasmus e un program de mobilitate. Dacă întrebi un student, e "cea mai tare experiență". Pentru tine, ce înseamnă Erasmus în trei cuvinte?',
      },
      {
        speaker: 'George Tudose',
        text: 'Adaptare, revelație, responsabilitate. Și subliniez ultimul cuvânt — pentru că Erasmus nu e o vacanță plătită de UE. E un test de stres controlat pentru viitoarea ta carieră internațională. Pleci cu o imagine despre cum va fi, și realitatea e aproape întotdeauna diferită — uneori mai bună, uneori mai complicată.',
      },
      {
        speaker: 'Moderator',
        text: 'Vorbește-ne despre birocrație — elefantul din cameră pentru orice student care vrea să plece. Learning Agreement, echivalări, dosare...',
      },
      {
        speaker: 'George Tudose',
        text: 'Da, e o realitate. Dar îi spun mereu studenților: birocrația Erasmus e primul tău curs de Managementul Riscului. Dacă supraviețuiești dosarului de candidatură, dacă gestionezi negocierea Learning Agreement-ului între ce vrei tu, ce oferă universitatea gazdă și ce cere București-ul — poți gestiona orice contract internațional mai târziu. E o abilitate deghizată în frustrare administrativă.',
      },
      {
        speaker: 'Moderator',
        text: 'Există mitul că în Erasmus mergi doar pentru petreceri. Cât de real e acest mit și cât ajută programul cu adevărat în CV?',
      },
      {
        speaker: 'George Tudose',
        text: 'Mitul există pentru că există și oameni care aleg să-l trăiască așa. Dar angajatorii care înțeleg ce înseamnă Erasmus văd altceva: văd un candidat care a funcționat singur într-un sistem necunoscut, care a lucrat în echipe multiculturale, care s-a adaptat academic la un sistem diferit. Asta e un diferențiator real pe piața muncii.',
      },
      {
        speaker: 'Moderator',
        text: 'Hai să vorbim despre bani. Bursa Erasmus e suficientă?',
      },
      {
        speaker: 'George Tudose',
        text: 'Depinde de destinație. În Europa de Est, poți trăi decent. În Europa de Vest — Olanda, Suedia, Elveția dacă e posibil — bursa acoperă poate 60-70% din cheltuieli. Sfatul meu: bugetează pentru primele două săptămâni separat, pentru că atunci vin cheltuielile mari — chirie în avans, transport, echipament de bază. Studenții care nu fac asta ajung în dificultate rapid.',
      },
      {
        speaker: 'Moderator',
        text: 'Ultima întrebare: Post-Erasmus Depression — e real?',
      },
      {
        speaker: 'George Tudose',
        text: 'E complet real și complet nevorbit. Revenirea acasă după 6 luni în care ai trăit ca un cetățean global, cu prieteni din 15 țări, cu o independență totală — poate fi dezorientantă. Brusc ești din nou în contextul familiar, dar tu nu mai ești același om. Sfatul meu: nu ignora perioada de readaptare. Vorbește despre ea. Și folosește-o să înțelegi cât de mult ai crescut.',
      },
    ],
  },
  {
    id: 2,
    number: '002',
    title: 'Soft Skills Lab — Ce Nu Îți Spune Nicio Materie',
    guest: 'Ana-Maria Marinoiu',
    role: 'Lector universitar, REI',
    tags: ['Piața muncii', 'Soft Skills', 'AI'],
    status: 'planned',
    description:
      'Dacă ChatGPT poate scrie raportul, ce mai rămâne uman în jobul de economist? Critical thinking, inteligență emoțională și ce caută, de fapt, angajatorii.',
    themes: [
      'Soft vs. hard skills',
      'AI și piața muncii',
      'Limbaj non-verbal',
      'Interviu de angajare',
    ],
    quote: 'Hard skills îți aduc primul interviu. Soft skills îți construiesc cariera.',
    duration: '~50 min',
  },
  {
    id: 3,
    number: '003',
    title: 'Micro-Mesaje, Macro-Impact — Piețe Dictate de Rețele Sociale',
    guest: 'Cernat-Gruici Bogdan',
    role: 'Conferențiar universitar, REI',
    tags: ['Piețe financiare', 'Social Media', 'Algoritmi'],
    status: 'planned',
    description:
      'Un emoji cu o rachetă poate schimba capitalizarea unei firme cu miliarde. Analiză fundamentală versus sentimentul de pe X — cine câștigă în 2026?',
    themes: [
      'High-Frequency Trading',
      'FOMO financiar',
      'Influenceri financiari',
      'Reglementare digitală',
    ],
    quote:
      'Algoritmii citesc postări mai repede decât putem clipi. Întrebarea e: mai suntem investitori sau devenim spectatori?',
    duration: '~60 min',
  },
  {
    id: 4,
    number: '004',
    title: 'Negocieri Celebre — Lecții din Culise',
    guest: 'Belu Mihaela Gabriela / Dieaconescu (Țarțavulea) Ramona Iulia',
    role: 'Cadre didactice, REI',
    tags: ['Negociere', 'Diplomație', 'Strategie'],
    status: 'planned',
    description:
      'Marile acorduri care au schimbat lumea, analizate prin lentila economistului. De la Bretton Woods la negocierile comerciale ale erei digitale.',
    themes: ['Tehnici de negociere', 'Diplomație economică', 'Studii de caz istorice'],
    duration: '~55 min',
  },
  {
    id: 5,
    number: '005',
    title: 'Logistica Internațională în Context Geopolitic',
    guest: 'Belu Mihaela Gabriela',
    role: 'Cadru didactic, REI',
    tags: ['Geopolitică', 'Logistică', 'Lanțuri de aprovizionare'],
    status: 'planned',
    description:
      'Când conflictele redefinesc rutele comerciale. Cum se adaptează logistica globală la o lume tot mai fragmentată politic.',
    themes: ['Supply chain disruption', 'Geopolitică economică', 'Diversificarea rutelor'],
    duration: '~50 min',
  },
  {
    id: 6,
    number: '006',
    title: 'Comunismul Românesc și Insuficiențele Cortinei de Fier',
    guest: 'Vladimir Topan',
    role: 'Conferențiar universitar, REI',
    tags: ['Ideologii', 'Istorie', 'Economie politică'],
    status: 'planned',
    description:
      'Ce ne spune istoria recentă despre limitele sistemelor închise? O perspectivă neconvențională asupra trecutului care explică prezentul.',
    themes: ['Economie centralizată', 'Tranziție post-comunistă', 'Libertate economică'],
    duration: '~65 min',
  },
  {
    id: 7,
    number: '007',
    title: 'Fascism și Socialism — Opuse sau Apropiate?',
    guest: 'Jora Octavian Dragomir',
    role: 'Cadru didactic, REI',
    tags: ['Ideologii', 'Politică', 'Filozofie economică'],
    status: 'planned',
    description:
      'O dezbatere care deranjează confortul intelectual. Dincolo de etichetele politice, spre structura profundă a ideologiilor colectiviste.',
    themes: ['Comparație ideologică', 'Autoritarism economic', 'Libertate individuală'],
    duration: '~60 min',
  },
  {
    id: 8,
    number: '008',
    title: 'Calea către o Etică Universală într-o Lume Multiculturală',
    guest: 'Cernat-Gruici Bogdan',
    role: 'Cadru didactic, REI',
    tags: ['Etică', 'Multiculturalism', 'Filozofie'],
    status: 'planned',
    description:
      'Există valori universal acceptabile dincolo de granițele culturale? O explorare la intersecția filozofiei morale, economiei globale și relațiilor internaționale.',
    themes: ['Etică aplicată', 'Relativism cultural', 'Drept internațional'],
    duration: '~55 min',
  },
];

export const TEAM: TeamMember[] = [
  { name: 'Buga Daria-Andreea-Valentina', role: 'Producție & Coordonare' },
  { name: 'Burtea Ioana-Bianca', role: 'Design & Brand & Crearea Site-ului' },
  { name: 'Gabor Vlăduț', role: 'Tehnic Audio-Video' },
  { name: 'Ipate Delia-Andreea', role: 'Social Media & Distribuție' },
  { name: 'Leonte George', role: 'Regie & Montaj' },
  { name: 'Melnic Arina', role: 'Comunicare & PR' },
  { name: 'Mihai Sara', role: 'Cercetare & Conținut' },
  { name: 'Niculae Ioana-Alexandra', role: 'Tehnic & Distribuție' },
  { name: 'Nistor Miruna-Ionela', role: 'Producție' },
  { name: 'Oprișor-Domnar Ana-Maria', role: 'Scenariu & Redacție' },
  { name: 'Voicu Bogdan-Alexandru', role: 'Relații Invitați' },
];

export const THEMES_TEASER: ThemeTeaser[] = [
  { tag: 'Erasmus', color: 'var(--blue-bright)' },
  { tag: 'Piața muncii', color: 'var(--cream)' },
  { tag: 'Geopolitică', color: 'var(--blue-bright)' },
  { tag: 'Negociere', color: 'var(--cream)' },
  { tag: 'Ideologii', color: 'var(--red)' },
  { tag: 'Etică', color: 'var(--blue-bright)' },
  { tag: 'Piețe financiare', color: 'var(--cream)' },
  { tag: 'AI și societate', color: 'var(--blue-bright)' },
  { tag: 'Diplomație', color: 'var(--cream)' },
  { tag: 'Soft Skills', color: 'var(--blue-bright)' },
];

export const ARTICLES: Article[] = [
  {
    id: 1,
    slug: 'erasmus-mai-mult-decat-o-bursa',
    title: 'Erasmus: Mai Mult Decât o Bursă',
    subtitle: 'De ce mobilitatea academică remodelează mai mult decât un CV',
    author: 'Leonte George',
    role: 'Cercetare & Conținut',
    date: '28 aprilie 2026',
    readTime: '5 min citire',
    category: 'Erasmus',
    tags: ['Erasmus', 'Mobilitate', 'Cultură'],
    excerpt:
      'Există o diferență fundamentală între a pleca la Erasmus și a trăi Erasmus. Prima e o decizie administrativă. A doua e o transformare.',
    content: `Există o diferență fundamentală între a pleca la Erasmus și a trăi Erasmus. Prima e o decizie administrativă. A doua e o transformare.

Când vorbim despre programul Erasmus în context academic, discutăm de obicei despre credite ECTS, Learning Agreement-uri și echivalări. Acestea sunt importante — dar sunt scheletul, nu carnea experienței.

**Ce nu apare în niciun formular de candidatură**

Erasmus îți testează o abilitate pe care niciun curs de la facultate nu o predă explicit: capacitatea de a funcționa într-un sistem pe care nu l-ai construit tu. Un sistem cu alte reguli, alte așteptări, altă logică birocratică.

Primul contact cu universitatea gazdă e adesea dezorientant. Cursurile au alt ritm. Profesorii au alte convenții. Colegii de grupă vin din zece culturi diferite și fiecare aduce cu el o altă definiție a "muncii în echipă".

Tocmai în această fricțiune stă valoarea reală.

**Adaptabilitate ca abilitate profesională**

Angajatorii care recrutează absolvenți REI nu caută doar oameni care știu să citească un bilanț contabil. Caută oameni care funcționează bine în incertitudine. Care pot gestiona un proiect cu un partener din altă cultură. Care nu paralizează când regulile se schimbă.

Erasmus e un mediu controlat în care înveți exact aceste lucruri — cu filet de siguranță, dar cu mize reale.

**Concluzie**

Data viitoare când cineva te întreabă de ce mergi la Erasmus, nu răspunde cu "pentru experiență". Răspunde cu: pentru că vreau să știu cum reacționez când sistemul nu e cel pe care l-am învățat. Asta e întrebarea care contează.`,
  },
  {
    id: 2,
    slug: 'ai-si-economistul-de-maine',
    title: 'AI și Economistul de Mâine',
    subtitle: 'Când algoritmii scriu rapoarte, ce mai rămâne de făcut pentru noi?',
    author: 'Oprișor-Domnar Ana-Maria',
    role: 'Scenariu & Redacție',
    date: '2 mai 2026',
    readTime: '7 min citire',
    category: 'AI și societate',
    tags: ['AI', 'Piața muncii', 'Soft Skills'],
    excerpt:
      'ChatGPT poate genera un raport de analiză financiară în 30 de secunde. Asta nu înseamnă că economistul e pe cale de dispariție — înseamnă că trebuie să devii altceva.',
    content: `ChatGPT poate genera un raport de analiză financiară în 30 de secunde. Asta nu înseamnă că economistul e pe cale de dispariție — înseamnă că trebuie să devii altceva.

**Problema cu întrebarea greșită**

Când discutăm despre AI și locurile de muncă, punem de obicei întrebarea greșită: "Va înlocui AI-ul jobul meu?" Întrebarea corectă e: "Ce anume din jobul meu nu poate fi automatizat — și cum devin mai bun la exact acele lucruri?"

Pentru un economist, răspunsul e nuanțat.

**Ce face AI-ul mai bine decât tine**

Procesarea datelor la scară. Identificarea pattern-urilor în seturi mari de informații. Generarea de variante de text după un template. Calculul rapid al scenariilor financiare standard.

Dacă jobul tău se reduce la aceste activități, da — e vulnerabil.

**Ce nu poate face AI-ul (deocamdată)**

Să înțeleagă contextul politic care face un număr economic irelevant în practică. Să negocieze cu un partener care are o altă cultură a deciziei. Să construiască încredere cu un client sceptic. Să pună întrebarea pe care nimeni nu a gândit-o încă.

Acestea sunt abilități umane — și paradoxal, cu cât AI-ul devine mai capabil la sarcini tehnice, cu atât aceste abilități devin mai valoroase.

**Implicații pentru studenții REI**

Facultatea noastră pregătește economiști internaționali. Asta înseamnă că lucrăm cu cel mai complex tip de context: intersecția dintre economie, cultură, politică și relații umane. Exact acolo unde AI-ul are cele mai mari limitări.

Asta nu e o scuză să ignori tehnologia. E un argument să o folosești ca instrument, nu ca înlocuitor al gândirii.`,
  },
  {
    id: 3,
    slug: 'de-ce-conteaza-un-podcast-la-rei',
    title: 'De Ce Contează un Podcast la REI',
    subtitle: 'Comunicarea modernă nu e un moft — e o competență',
    author: 'Melnic Arina',
    role: 'Comunicare & PR',
    date: '4 mai 2026',
    readTime: '4 min citire',
    category: 'Despre noi',
    tags: ['Media', 'Comunicare', 'REI'],
    excerpt:
      'Când am propus ideea unui podcast al facultății, prima reacție a fost: "de ce?". Acum, câteva luni mai târziu, întrebarea corectă e: "de ce nu am făcut asta mai devreme?"',
    content: `Când am propus ideea unui podcast al facultății, prima reacție a fost: "de ce?". Acum, câteva luni mai târziu, întrebarea corectă e: "de ce nu am făcut asta mai devreme?"

**Problema de vizibilitate**

Facultatea de Relații Economice Internaționale are profesori cu expertiză reală în domenii extrem de actuale — de la geopolitică economică la piețe financiare, de la negocieri internaționale la etică aplicată. Această expertiză există. Pur și simplu nu e vizibilă.

O carte academică ajunge la câteva sute de cititori. Un articol de specialitate — la câteva zeci. Un episod de podcast bine produs — la câteva mii, potențial zeci de mii.

**Formatul contează**

Nu e vorba doar de numărul de ascultători. E vorba de tipul de comunicare. Un podcast e conversație, nu monolog. E profesor care explică, nu profesor care predă. E expert care povestește, nu expert care demonstrează.

Această diferență de ton schimbă fundamental relația dintre vorbitor și ascultător.

**Ce construim, de fapt**

REI Insights nu e un proiect de marketing pentru facultate. E un experiment de comunicare publică. Testăm dacă vocea academică poate fi și accesibilă. Dacă un profesor poate fi și un interlocutor pentru un student de anul I sau pentru cineva care n-a studiat niciodată economia.

Credem că poate. Asta vrem să demonstrăm.`,
  },
];
