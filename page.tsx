import React from "react";

function Icon({ type }: { type: "game" | "zap" | "shield" | "truck" | "wallet" | "star" | "search" | "message" | "ticket" | "copy" | "clock" | "heart" }) {
  const common = "h-5 w-5";
  switch (type) {
    case "game":
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 11h12" />
          <path d="M12 5v12" />
          <rect x="3" y="7" width="18" height="10" rx="5" />
        </svg>
      );
    case "zap":
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M13 2 4 14h7l-1 8 10-14h-7l0-6z" />
        </svg>
      );
    case "shield":
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3 20 6v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-3z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );
    case "truck":
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 7h11v10H3z" />
          <path d="M14 10h4l3 3v4h-7z" />
          <circle cx="7" cy="18" r="2" />
          <circle cx="18" cy="18" r="2" />
        </svg>
      );
    case "wallet":
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 7h18v10H3z" />
          <path d="M17 12h4v3h-4a1.5 1.5 0 0 1 0-3z" />
          <path d="M7 7V5a2 2 0 0 1 2-2h9" />
        </svg>
      );
    case "star":
      return (
        <svg viewBox="0 0 24 24" className={common} fill="currentColor" stroke="currentColor" strokeWidth="1">
          <path d="m12 2 3 6 6 .9-4.4 4.3 1 6.2L12 16.9 6.4 19.4l1-6.2L3 8.9 9 8z" />
        </svg>
      );
    case "search":
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-3.5-3.5" />
        </svg>
      );
    case "message":
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a4 4 0 0 1-4 4H8l-5 3v-3a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h14a4 4 0 0 1 4 4z" />
        </svg>
      );
    case "ticket":
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9a2 2 0 0 0 0 6v3h18v-3a2 2 0 0 0 0-6V6H3z" />
          <path d="M12 8v8" />
        </svg>
      );
    case "copy":
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="9" y="9" width="10" height="10" rx="2" />
          <path d="M7 15H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v1" />
        </svg>
      );
    case "clock":
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </svg>
      );
    case "heart":
      return (
        <svg viewBox="0 0 24 24" className={common} fill="currentColor">
          <path d="M12 21s-7-4.35-9.5-8.66C.37 9.1 1.6 5.95 4.5 4.5A5.54 5.54 0 0 1 12 6.1a5.54 5.54 0 0 1 7.5-1.6c2.9 1.45 4.13 4.6 2 7.84C19 16.65 12 21 12 21Z" />
        </svg>
      );
  }
}

const games = [
  { name: "Mobile Legends", label: "Populer", emoji: "🎮" },
  { name: "Free Fire", label: "Cepat", emoji: "🔥" },
  { name: "Roblox", label: "Voucher", emoji: "🧱" },
  { name: "Genshin Impact", label: "Premium", emoji: "✨" },
  { name: "PUBG Mobile", label: "Hot", emoji: "🎯" },
  { name: "Valorant", label: "PC", emoji: "⚡" },
];

const promos = [
  {
    title: "Flash Deal Hari Ini",
    desc: "Diskon spesial untuk top up terpilih dengan proses instan.",
    value: "-15%",
  },
  {
    title: "Bonus Member Baru",
    desc: "Dapatkan kupon tambahan untuk transaksi pertama kamu.",
    value: "BONUS",
  },
  {
    title: "Promo Weekend",
    desc: "Penawaran terbatas setiap akhir pekan untuk transaksi hemat.",
    value: "HEMAT",
  },
];

const news = [
  {
    title: "Kode promo aktif bulan ini",
    date: "30 Juni 2026",
    excerpt: "Kumpulkan voucher dan nikmati harga terbaik untuk top up favoritmu.",
  },
  {
    title: "Metode pembayaran makin lengkap",
    date: "30 Juni 2026",
    excerpt: "Transfer bank, e-wallet, dan QRIS tersedia untuk transaksi cepat.",
  },
  {
    title: "Proses pesanan otomatis",
    date: "30 Juni 2026",
    excerpt: "Pesanan diproses instan agar akun kamu langsung terisi tanpa menunggu lama.",
  },
];

const testimonials = [
  {
    name: "Rafi",
    role: "Pelanggan tetap",
    text: "Prosesnya cepat dan tampilannya enak dipakai. Cocok buat top up harian.",
  },
  {
    name: "Nadia",
    role: "Player aktif",
    text: "Promo dan pilihan pembayarannya lengkap. Aku suka bagian tracking order-nya.",
  },
  {
    name: "Kevin",
    role: "Content creator",
    text: "Simple, bersih, dan terasa profesional. Cocok jadi landing page toko game.",
  },
];

const payments = [
  "QRIS",
  "BCA",
  "BRI",
  "BNI",
  "Mandiri",
  "Gopay",
  "OVO",
  "ShopeePay",
  "DANA",
  "Alfamart",
  "Indomaret",
  "DuitNow",
];

const faqs = [
  {
    q: "Berapa lama proses top up?",
    a: "Sebagian besar pesanan diproses otomatis dalam hitungan menit setelah pembayaran berhasil.",
  },
  {
    q: "Apakah bisa lacak pesanan?",
    a: "Bisa. Ada menu tracking order untuk memantau status transaksi secara cepat.",
  },
  {
    q: "Apakah tersedia promo?",
    a: "Ya, promo harian, flash deal, dan kupon member bisa ditampilkan di halaman utama.",
  },
  {
    q: "Bisa dipakai untuk bisnis pribadi?",
    a: "Bisa. Template ini cocok sebagai landing page awal untuk store pribadi yang ingin terlihat profesional.",
  },
];

function SectionTitle({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="mb-6">
      <h2 className="text-2xl font-bold md:text-3xl">{title}</h2>
      <p className="mt-2 text-slate-300">{desc}</p>
    </div>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-100">
      {children}
    </span>
  );
}

export default function Page() {
  const wa = "085188342839";
  const waLink = `https://wa.me/62${wa.slice(1)}?text=${encodeURIComponent("Halo, saya mau order di Kazuki Store.")}`;

  return (
    <div className="min-h-screen bg-[#07111f] text-white selection:bg-cyan-400/40">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.16),_transparent_40%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.16),_transparent_30%)]" />

      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#07111f]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-400 text-slate-950 shadow-lg shadow-cyan-500/20">
              <Icon type="game" />
            </div>
            <div>
              <div className="text-lg font-bold tracking-wide">Kazuki Store</div>
              <div className="text-xs text-slate-300">Top up cepat • aman • simpel</div>
            </div>
          </div>

          <nav className="hidden items-center gap-6 md:flex text-sm text-slate-200">
            <a href="#game" className="hover:text-cyan-300">
              Game
            </a>
            <a href="#promo" className="hover:text-cyan-300">
              Promo
            </a>
            <a href="#news" className="hover:text-cyan-300">
              News
            </a>
            <a href="#faq" className="hover:text-cyan-300">
              FAQ
            </a>
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href={waLink}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl bg-white/10 px-4 py-2.5 text-sm text-white transition hover:bg-white/15"
            >
              Track Order
            </a>
            <a
              href={waLink}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl bg-cyan-400 px-4 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Sign In
            </a>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 pb-16 pt-8 md:px-6">
        <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="space-y-6">
            <div className="flex flex-wrap gap-2">
              <Pill>24 Jam Aktif</Pill>
              <Pill>Instant Delivery</Pill>
              <Pill>Trusted Store</Pill>
            </div>

            <div className="space-y-4">
              <h1 className="max-w-2xl text-4xl font-black leading-tight md:text-6xl">
                Kazuki Store,
                <span className="block bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 bg-clip-text text-transparent">
                  top up game yang lebih modern.
                </span>
              </h1>
              <p className="max-w-2xl text-base leading-7 text-slate-300 md:text-lg">
                Landing page premium untuk toko pribadi kamu, dibuat dengan gaya bersih, cepat, dan responsif. Cocok untuk top up game, voucher, dan produk digital lainnya.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={waLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-2xl bg-cyan-400 px-6 py-4 text-base font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Mulai Top Up
                <span className="ml-2">›</span>
              </a>
              <a
                href={waLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-2xl bg-white/10 px-6 py-4 text-base text-white transition hover:bg-white/15"
              >
                <Icon type="message" />
                <span className="ml-2">Hubungi Admin</span>
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {[
                ["1M+", "Transaksi"],
                ["5s", "Respon cepat"],
                ["99%", "Pelanggan puas"],
              ].map(([a, b]) => (
                <div key={b} className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-xl shadow-black/10 backdrop-blur">
                  <div className="text-2xl font-bold">{a}</div>
                  <div className="mt-1 text-sm text-slate-300">{b}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl shadow-cyan-950/20 backdrop-blur">
              <div className="p-6 md:p-8">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-slate-300">Promo hari ini</div>
                    <div className="mt-1 text-2xl font-bold">PastiHematKazuki</div>
                  </div>
                  <div className="rounded-2xl bg-cyan-400/15 p-3 text-cyan-200">
                    <Icon type="ticket" />
                  </div>
                </div>

                <div className="mt-6 rounded-3xl border border-white/10 bg-slate-950/40 p-5">
                  <div className="flex items-center justify-between text-sm text-slate-300">
                    <span>Kode promo</span>
                    <span>Aktif sekarang</span>
                  </div>
                  <div className="mt-3 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3">
                    <div className="flex-1 font-mono text-lg tracking-wider text-cyan-200">KAZUKIHEMAT</div>
                    <button className="rounded-xl bg-white/10 px-3 py-2 text-sm text-white transition hover:bg-white/15">
                      <span className="inline-flex items-center gap-2">
                        <Icon type="copy" />
                        Copy
                      </span>
                    </button>
                  </div>
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {[
                    ["Diproses otomatis", "clock"],
                    ["Pembayaran aman", "shield"],
                    ["Delivery instan", "truck"],
                    ["Banyak metode", "wallet"],
                  ].map(([label, icon]) => (
                    <div key={label} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                      <div className="rounded-2xl bg-white/10 p-2 text-cyan-200">
                        <Icon type={icon as any} />
                      </div>
                      <div className="text-sm text-slate-200">{label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="game" className="mt-16">
          <SectionTitle title="Silahkan pilih game" desc="Cari produk favorit kamu dengan cepat." />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {games.map((game) => (
              <div key={game.name} className="group rounded-3xl border border-white/10 bg-white/5 transition hover:-translate-y-1 hover:bg-white/8">
                <div className="flex items-center gap-4 p-5">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-2xl">
                    {game.emoji}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-3">
                      <div className="font-semibold">{game.name}</div>
                      <span className="rounded-full bg-cyan-400/15 px-3 py-1 text-xs font-medium text-cyan-200">
                        {game.label}
                      </span>
                    </div>
                    <div className="mt-1 text-sm text-slate-300">Top up cepat, aman, dan langsung diproses.</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="promo" className="mt-16">
          <SectionTitle title="Promo unggulan" desc="Bagian ini bisa kamu pakai untuk flash deal dan campaign harian." />
          <div className="grid gap-4 lg:grid-cols-3">
            {promos.map((promo) => (
              <div key={promo.title} className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-xl font-bold">{promo.title}</div>
                    <p className="mt-2 text-sm leading-6 text-slate-300">{promo.desc}</p>
                  </div>
                  <div className="rounded-2xl bg-cyan-400/15 px-3 py-2 text-sm font-bold text-cyan-200">
                    {promo.value}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="news" className="mt-16 grid gap-8 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <SectionTitle title="News & informasi" desc="Update terbaru, pengumuman promo, dan info layanan." />
            <div className="space-y-4">
              {news.map((item) => (
                <div key={item.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <Icon type="clock" />
                    {item.date}
                  </div>
                  <h3 className="mt-3 text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{item.excerpt}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-cyan-400/15 p-3 text-cyan-200">
                  <Icon type="heart" />
                </div>
                <div>
                  <div className="font-semibold">Unggulan Kazuki Store</div>
                  <div className="text-sm text-slate-300">Simple, cepat, dan terpercaya</div>
                </div>
              </div>

              <div className="mt-5 space-y-3 text-sm text-slate-300">
                <div className="flex items-center gap-3">
                  <Icon type="zap" />
                  Proses otomatis
                </div>
                <div className="flex items-center gap-3">
                  <Icon type="shield" />
                  Sistem aman
                </div>
                <div className="flex items-center gap-3">
                  <Icon type="truck" />
                  Pengiriman instan
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold">Follow latest promo</h3>
                  <p className="text-sm text-slate-300">Hubungkan akun sosial kamu di sini.</p>
                </div>
                <Icon type="message" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  ["Instagram", "@kazukistore"],
                  ["WhatsApp", wa],
                  ["TikTok", "@kazukistore"],
                  ["YouTube", "Kazuki Store"],
                ].map(([a, b]) => (
                  <div key={a} className="rounded-2xl border border-white/10 bg-slate-950/30 p-4">
                    <div className="text-xs text-slate-400">{a}</div>
                    <div className="mt-1 text-sm font-medium text-white">{b}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16 grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div>
            <SectionTitle title="KOL testimonials" desc="Testimoni singkat untuk memperkuat kepercayaan pengunjung." />
          </div>
          <div className="grid gap-4">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="font-semibold">{t.name}</div>
                    <div className="text-sm text-slate-400">{t.role}</div>
                  </div>
                  <div className="flex items-center gap-1 text-cyan-300">
                    <Icon type="star" />
                    <Icon type="star" />
                    <Icon type="star" />
                    <Icon type="star" />
                    <Icon type="star" />
                  </div>
                </div>
                <p className="mt-4 text-sm leading-6 text-slate-300">“{t.text}”</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-bold">Metode pembayaran</h2>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              Tampilkan metode pembayaran paling nyaman untuk pelanggan kamu.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {payments.map((pay) => (
                <div key={pay} className="rounded-2xl border border-white/10 bg-slate-950/30 px-4 py-3 text-center text-sm font-medium text-slate-200">
                  {pay}
                </div>
              ))}
            </div>
          </div>

          <div id="faq">
            <SectionTitle title="Frequently Asked Questions" desc="Pertanyaan umum yang paling sering ditanyakan." />
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-2">
              {faqs.map((faq) => (
                <details key={faq.q} className="group border-b border-white/10 px-4 py-4 last:border-b-0">
                  <summary className="cursor-pointer list-none text-white outline-none">
                    <div className="flex items-center justify-between gap-4">
                      <span>{faq.q}</span>
                      <span className="text-slate-400 transition group-open:rotate-45">+</span>
                    </div>
                  </summary>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-16">
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-r from-cyan-400/15 via-white/5 to-blue-500/15 p-8 md:grid md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <h2 className="text-2xl font-bold md:text-3xl">Siap dipakai untuk toko pribadi kamu</h2>
              <p className="mt-2 max-w-2xl text-slate-300">
                Template ini bisa langsung kamu jadikan landing page utama. Nama, kontak, dan kontennya tinggal kamu ganti sesuai kebutuhan.
              </p>
            </div>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row md:mt-0 md:flex-col lg:flex-row">
              <a href={waLink} target="_blank" rel="noreferrer" className="rounded-2xl bg-cyan-400 px-6 py-4 text-center font-semibold text-slate-950 transition hover:bg-cyan-300">
                Hubungi Admin
              </a>
              <a href="#promo" className="rounded-2xl bg-white/10 px-6 py-4 text-center text-white transition hover:bg-white/15">
                Lihat Promo
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-black/20">
        <div className="mx-auto max-w-7xl px-4 py-10 md:px-6">
          <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-start">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-400 text-slate-950">
                  <Icon type="game" />
                </div>
                <div>
                  <div className="text-lg font-bold">Kazuki Store</div>
                  <div className="text-sm text-slate-400">Top up games & voucher digital</div>
                </div>
              </div>
              <p className="mt-4 max-w-xl text-sm leading-6 text-slate-400">
                Website dibuat sebagai landing page pribadi yang modern, cepat, dan mudah disesuaikan.
              </p>
              <p className="mt-3 text-sm text-slate-300">WhatsApp: {wa}</p>
            </div>
            <div className="grid gap-3 text-sm text-slate-300 sm:grid-cols-2">
              <div>Home</div>
              <div>Track Order</div>
              <div>About</div>
              <div>Privacy Policy</div>
            </div>
          </div>
          <div className="mt-8 text-sm text-slate-500">© 2026 Kazuki Store. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
