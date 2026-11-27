export type Locale = 'en' | 'id';
export const locale = (url: URL): Locale => /^\/id(?:\/|$)/.test(url.pathname) ? 'id' : 'en';
const id: Record<string, string> = {
  'Email your brief': 'Kirim brief via email',
  'Solutions': 'Layanan', 'Case study': 'Studi kasus', 'Start': 'Mulai', 'About': 'Tentang',
  'Primary navigation': 'Navigasi utama', 'View work': 'Lihat proyek',
  'Fast software for': 'Dari ide, jadi software', 'teams that move now.': 'yang siap dipakai.',
  'A software development studio building SaaS, mobile apps, and AI automation for teams worldwide.': 'Kami bantu bangun SaaS, aplikasi mobile, dan otomasi AI sesuai kebutuhan bisnis Anda.',
  'Software development services for modern teams': 'Apa yang bisa kami bantu?',
  'Browse services': 'Jelajahi layanan', 'Previous services': 'Layanan sebelumnya', 'Next services': 'Layanan berikutnya',
  'Services, scroll horizontally to explore': 'Layanan, geser ke samping untuk menjelajahi',
  'Mobile app': 'Aplikasi mobile', 'Native-feeling apps for iOS and Android': 'Aplikasi yang nyaman dipakai, di iOS dan Android',
  'Ship mobile products with polished flows, clean performance, and production-ready foundations.': 'Dari alur penggunaan hingga performa, kami siapkan aplikasi yang mudah dipakai dan siap dikembangkan.',
  'Internal dashboards that teams actually use': 'Semua pekerjaan tim, lebih teratur',
  'Turn operations, reporting, and admin workflows into fast web dashboards built for daily work.': 'Pantau operasional, baca laporan, dan kelola data dari satu dashboard yang sesuai cara kerja tim Anda.',
  'AI automation': 'Otomasi AI', 'Automation for repetitive team workflows': 'Kurangi pekerjaan manual dengan AI',
  'Connect tools, trigger actions, summarize data, and automate handoffs across your business.': 'Hubungkan aplikasi yang sudah dipakai, rangkum data, dan otomatisasi tugas rutin agar tim bisa fokus ke hal penting.',
  'Web design': 'Desain web', 'High-performance sites with sharp visual systems': 'Website yang mewakili bisnis Anda',
  'Design and build landing pages, product sites, and marketing experiences that feel premium and load fast.': 'Landing page dan website bisnis dengan desain yang rapi, pesan yang jelas, dan akses yang cepat.',
  'MVP to usable product in focused sprints': 'Mulai dari MVP, tumbuh jadi produk',
  'Build authentication, SaaS flows, billing-ready surfaces, and product foundations.': 'Wujudkan fitur utama lebih dulu, dari login hingga alur berlangganan, dengan fondasi yang bisa terus dikembangkan.',
  'From MVPs to real products, Fixora Studio builds software fast without losing reliability or performance': 'Dari ide awal sampai peluncuran, kami bantu produk Anda siap digunakan.',
  'Book a call': 'Jadwalkan diskusi', 'Case studies': 'Studi kasus', 'Project categories': 'Kategori proyek',
  'Data APIs, without the scraping headache.': 'API data tanpa repot scraping.',
  'We built Zapi as a developer-first API platform that makes external data easier to discover, access, and integrate. From structured datasets to scalable API infrastructure, everything is designed to help developers ship faster.': 'Kami membangun Zapi sebagai platform API yang memudahkan developer menemukan, mengakses, dan mengintegrasikan data eksternal. Dari dataset terstruktur hingga infrastruktur API yang skalabel, semuanya dirancang untuk mempercepat pengembangan.',
  'From an idea to a product that works.': 'Ide Anda, kami bantu wujudkan.',
  'A focused product build, from the first prototype to a reliable launch. We bring design, development, and infrastructure together to create software that feels simple and performs well.': 'Kami mengerjakan desain, pengembangan, dan infrastruktur dalam satu proses, dari prototipe hingga produk siap digunakan.',
  'Paid plan purchases / 30 days': 'Pembelian paket / 30 hari', 'Monthly requests on Pro': 'Permintaan bulanan di Pro', 'APIs Data': 'Data API', 'Unified data access': 'Akses data terpadu', '1 API Key': '1 Kunci API',
  'API Platform': 'Platform API', 'Developer Tools': 'Tools developer', 'Data Infrastructure': 'Infrastruktur data', 'Product Design': 'Desain produk', 'Development': 'Pengembangan', 'Infrastructure': 'Infrastruktur',
  'Pick the sprint that matches how fast you want to move': 'Punya ide atau kebutuhan software?',
  'Contact us': 'Hubungi kami', 'Send your project brief, questions, or build request directly to our team.': 'Ceritakan kebutuhan bisnis Anda. Sudah ada brief atau masih berupa ide, boleh langsung diskusi dengan tim kami.',
  '2-week ready system': 'Sprint pengembangan 2 minggu', 'For products, dashboards, and automation systems that need to be ready for real users.': 'Kerjakan kebutuhan paling penting lebih dulu. Fitur dan target sprint kita sepakati bersama sebelum mulai.',
  'Production-ready system': 'Sistem siap digunakan', 'Reliable integrations': 'Integrasi yang andal', 'Performance pass': 'Pemeriksaan performa', 'Team walkthrough': 'Panduan untuk tim',
  'Ready to ship software without moving slow?': 'Yuk, mulai dari kebutuhan Anda.',
  'Tell us your goal. We will map the fastest path from idea to useful software.': 'Ceritakan yang ingin Anda bangun. Kami bantu tentukan langkah pertama dan ruang lingkup pengerjaannya.',
  "Let's build together": 'Mari membangun bersama',
  'Custom software, apps, and AI automation for teams worldwide.': 'Bantu bisnis berkembang lewat software, aplikasi, dan otomasi AI.',
  'Explore': 'Jelajahi', 'Address': 'Alamat', 'Services': 'Layanan', 'Portfolio': 'Portofolio', 'Start Project': 'Mulai proyek', 'Site footer': 'Footer situs',
  'Fixora Studio, back to top': 'Fixora Studio, kembali ke atas', 'Interactive pixel illustration': 'Ilustrasi piksel interaktif',
};
export function translator(lang: Locale) { return (text: string) => lang === 'id' ? id[text] ?? text : text; }
// Translate content fields without mutating shared data or changing URLs and IDs.
export function localize<T>(value: T, lang: Locale): T {
  if (lang === 'en') return value;
  if (typeof value === 'string') return (id[value] ?? value) as T;
  if (Array.isArray(value)) return value.map(v => localize(v, lang)) as T;
  if (value && typeof value === 'object') return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, ['href', 'id', 'icon', 'logo', 'email', 'mark', 'name'].includes(k) ? v : localize(v, lang)])) as T;
  return value;
}
