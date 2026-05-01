import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { ChevronRight, Menu, MapPin, Phone, ArrowUpRight, MousePointer2 } from "lucide-react";
import Showcase from "./components/Showcase";
import Inventory from "./components/Inventory";
import { useState } from "react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Concierge", type: "page" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "WhatsApp", href: "https://wa.me/16452485555" },
];

const faqItems = [
  { q: "What services do you provide?", a: "Latouche Hospitality offers a complete luxury ecosystem: Exotic & Luxury Car Rentals, Private Yacht Charters, Luxury Villa Rentals, Professional Chauffeur Services, and Private Jet Charters." },
  { q: "How do I book a service?", a: "You can book directly via our website, WhatsApp (+1 645 248 5555), or by calling our 24/7 concierge line." },
  { q: "Are international bookings available?", a: "While we specialize in Miami, we offer yacht and villa placements in select global territories including NY, the Hamptons, and the Caribbean." },
  { q: "What are the requirements for car rentals?", a: "Drivers must be 21+ (25+ for select models), have a valid license, and proof of full insurance coverage." },
  { q: "Do you offer delivery?", a: "Yes, we provide seamless delivery for all cars and chauffeurs to your villa, airport (MIA/FLL), or yacht dock." },
];

const specs = [
  { val: "VIP", label: "Access" },
  { val: "Global", label: "Network" },
  { val: "MIAMI", label: "HQ" },
  { val: "24/7", label: "Concierge" },
];

export default function App() {
  const [showInventory, setShowInventory] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.98]);

  return (
    <div className="relative bg-black font-sans selection:bg-accent selection:text-black overflow-x-hidden" id="home">
      {/* Background HUD Layers */}
      <div className="fixed inset-0 z-0 bg-grid-scan opacity-20 pointer-events-none" />
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-accent/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-accent/20 to-transparent" />
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white opacity-[0.02]" />
      </div>

      {/* Floating HUD Navigation */}
      <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-100 flex items-center gap-2 px-2 py-2 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full pointer-events-auto">
        <div className="flex items-center gap-3 px-6 py-2 border-r border-white/10">
          <img 
            src="https://p19-common-sign.tiktokcdn-us.com/tos-maliva-avt-0068/6e692398319f1aa74aea50d71666b66f~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=ab2e6c1d&x-expires=1777831200&x-signature=UteOV96JZOjlegmMscVUgEU91G0%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5" 
            alt="Latouche Hospitality" 
            className="h-6 w-6 rounded-full"
          />
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white hidden md:block">Latouche</span>
        </div>
        <div className="flex items-center gap-1 md:gap-4 px-2">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                if (link.type === "page") {
                  e.preventDefault();
                  setShowInventory(true);
                }
              }}
              className="px-4 py-2 text-[9px] uppercase tracking-widest font-bold text-white/50 hover:text-white transition-colors cursor-pointer rounded-full hover:bg-white/5"
            >
              {link.name}
            </motion.a>
          ))}
        </div>
        <button 
          onClick={() => setShowInventory(true)}
          className="ml-2 bg-accent text-black px-6 py-2 rounded-full text-[9px] font-bold uppercase tracking-widest hover:bg-accent/80 transition-colors shadow-[0_0_20px_rgba(197,164,126,0.3)]"
        >
          Reserve
        </button>
      </nav>

      {/* HERO SECTION: ASYMMETRIC HUD LAYOUT */}
      <motion.section 
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="relative z-10 min-h-screen flex flex-col justify-center items-center px-10 md:px-24 pt-32"
      >
        <div className="w-full max-w-[1600px] grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-12 items-end">
          {/* Left: Aggressive Typography */}
          <div className="relative z-20">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-0.5 bg-accent" />
                <span className="text-[10px] font-black uppercase tracking-[0.8em] text-accent">Distinction Ready</span>
              </div>
              <h1 className="text-7xl md:text-9xl lg:text-[140px] font-serif font-bold leading-[0.8] uppercase tracking-[-0.06em] mb-12">
                Absolute <br/> 
                <span className="text-outline">Distinction.</span>
              </h1>
              <div className="grid grid-cols-2 gap-12 max-w-md border-t border-white/10 pt-12">
                <div>
                  <p className="text-[9px] uppercase tracking-widest text-white/30 mb-2">Lifestyle Assets</p>
                  <p className="text-sm font-medium leading-relaxed font-serif italic text-white/80">Villas, Yachts, Jets, and the world's finest motorcars.</p>
                </div>
                <div>
                  <p className="text-[9px] uppercase tracking-widest text-white/30 mb-2">Hospitality Hub</p>
                  <p className="text-sm font-medium leading-relaxed">Miami luxury lifestyle services 🌎🌴</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Technical Data + Visual */}
          <div className="relative group">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="relative aspect-3/4 w-full bg-luxury-grey rounded-sm overflow-hidden corner-bracket"
            >
              <img 
                src="https://static.wixstatic.com/media/dfb3c4_0fd7d8ad30e046cd8149d8b77cd62c79~mv2.jpeg/v1/fill/w_590,h_514,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Roller%20Pics_JPEG.jpeg" 
                className="w-full h-full object-cover opacity-60 group-hover:scale-110 group-hover:opacity-100 transition-editorial"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black transition-opacity group-hover:opacity-40" />
              
              {/* HUD Elements on Image */}
              <div className="absolute top-8 left-8 flex flex-col gap-1">
                <span className="text-[8px] font-mono text-white/50 tracking-widest">SCAN_SEQ_082</span>
                <div className="w-10 h-0.5 bg-accent" />
              </div>

              <div className="absolute bottom-8 left-8 right-8">
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-4xl font-bold mb-1 tracking-tighter uppercase">Latouche Hospitality</p>
                    <p className="text-[10px] uppercase tracking-[0.4em] text-accent font-bold">Bespoke Miami Lifestyle</p>
                  </div>
                  <MousePointer2 className="text-white/20 -rotate-12" size={32} />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Global Specs - HUD Strips */}
        <div className="w-full max-w-[1600px] mt-24 border-y border-white/5 grid grid-cols-2 lg:grid-cols-4 gap-0 divide-x divide-white/5">
          {specs.map((spec, i) => (
            <div key={i} className="px-10 py-12 flex flex-col gap-2 group cursor-crosshair hover:bg-accent/5 transition-colors">
              <span className="text-[9px] font-mono text-white/20 tracking-widest uppercase">[{i.toString().padStart(2, '0')}] {spec.label}</span>
              <span className="text-4xl font-bold tracking-tighter group-hover:text-accent transition-colors uppercase">{spec.val}</span>
            </div>
          ))}
        </div>
      </motion.section>

      {/* SHOWCASE SECTION */}
      <div id="fleet" className="relative z-10">
        <Showcase />
      </div>

      {/* SERVICES: BENTO DATA GRID */}
      <section id="services" className="relative z-20 py-40 bg-black px-10 md:px-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-24">
            <div className="max-w-2xl">
              <span className="text-[10px] font-bold uppercase tracking-[0.8em] text-accent mb-6 block">Concierge Protocols</span>
              <h2 className="text-6xl md:text-8xl font-serif font-bold tracking-tighter uppercase leading-[0.85]">Bespoke <br/> <span className="text-outline">Assistance.</span></h2>
            </div>
            <div className="flex flex-col items-end text-right">
              <p className="text-white/40 text-sm leading-relaxed max-w-xs mb-8 uppercase tracking-widest font-mono">
                White-glove logistics / 24-7 Client service / Seamless delivery
              </p>
              <div className="flex gap-2">
                {[1, 2, 3].map(i => <div key={i} className="w-1.5 h-1.5 bg-accent" />)}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[300px] md:auto-rows-[400px]">
            {/* Featured Bento Item */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="md:col-span-8 group relative bg-luxury-grey rounded-sm overflow-hidden border border-white/5 corner-bracket"
            >
              <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-editorial grayscale group-hover:grayscale-0" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent h-full" />
              <div className="absolute bottom-12 left-12">
                <span className="text-[10px] font-bold text-accent mb-4 block uppercase tracking-widest font-mono">ESTATE_PORTFOLIO</span>
                <h3 className="text-4xl font-bold mb-4 uppercase">Luxury Villa Rentals</h3>
                <p className="text-white/40 text-sm max-w-xs uppercase tracking-widest leading-loose">The most exclusive residences in Miami Beach and beyond.</p>
              </div>
              <div className="absolute top-12 right-12 text-3xl font-bold text-white/10 group-hover:text-accent/40 transition-colors">01</div>
            </motion.div>

            {/* Square Bento Item */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="md:col-span-4 group bg-accent p-12 rounded-sm flex flex-col justify-between hover:bg-accent/90 transition-colors cursor-pointer"
            >
              <div className="text-black">
                <span className="text-[10px] font-bold text-black/50 mb-4 block uppercase tracking-widest font-mono">YACHT_CHARTER</span>
                <h3 className="text-4xl font-bold mb-6 uppercase">Oceanic Luxury</h3>
              </div>
              <div className="flex flex-col gap-6">
                <p className="text-black/70 text-xs uppercase tracking-[0.2em] leading-relaxed">Private yacht charters featuring world-class crews and bespoke itineraries.</p>
                <ArrowUpRight size={48} className="text-black/20 group-hover:text-black transition-all transform group-hover:translate-x-2 group-hover:-translate-y-2" />
              </div>
            </motion.div>

            {/* Small Bento Item */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="md:col-span-4 bg-luxury-grey p-10 border border-white/5 hover:border-accent/40 transition-colors"
            >
              <div className="flex flex-col h-full justify-between">
                <div className="w-12 h-12 bg-white/5 flex items-center justify-center rounded-sm">
                  <Phone size={20} className="text-accent" />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-2 uppercase">+1 (645) 248 5555</h4>
                  <p className="text-white/30 text-[10px] uppercase tracking-widest leading-relaxed">Direct concierge line for immediate bookings and inquiries.</p>
                </div>
              </div>
            </motion.div>

            {/* Horizontal Bento Item */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="md:col-span-8 group relative bg-luxury-grey rounded-sm overflow-hidden border border-white/5 flex items-center p-12"
            >
              <div className="flex flex-col md:flex-row gap-12 items-center w-full">
                <div className="w-24 h-24 border border-accent/40 flex items-center justify-center rounded-full hud-glow shrink-0">
                  <div className="w-16 h-16 border border-white/10 rounded-full animate-pulse" />
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold mb-4 uppercase">Bespoke Valet Delivery</h3>
                  <p className="text-white/40 text-sm uppercase tracking-widest leading-loose">Seamless door-to-door transit and personalized handover at any of our served multi-state locations.</p>
                </div>
                <button className="px-8 py-4 bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-widest hover:bg-accent hover:text-black transition-colors shrink-0">Inquire</button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ABOUT: INDUSTRIAL STYLE */}
      <section id="about" className="relative z-20 py-48 bg-black">
        <div className="max-w-[1400px] mx-auto px-10 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <div className="order-2 lg:order-1">
              <div className="flex items-center gap-6 mb-12">
                <div className="w-20 h-[1px] bg-accent" />
                <span className="text-[10px] font-bold uppercase tracking-[0.8em] text-accent">Core Protocol</span>
              </div>
              <h2 className="text-7xl md:text-9xl font-serif font-bold tracking-tighter uppercase leading-[0.85] mb-12">Total <br/> <span className="text-outline">Excellence.</span></h2>
              <div className="space-y-8 text-white/50 text-xl leading-relaxed font-light font-mono">
                <p>
                  &gt; LATOUCHE HOSPITALITY IS THE PINNACLE OF MIAMI LIFESTYLE.<br/>
                  &gt; VILLAS • CARS • YACHTS • CHAUFFEURS • PRIVATE JETS.
                </p>
                <p className="text-base text-white/30 uppercase tracking-widest leading-loose">
                  Our portfolio is a curated selection of global luxury. We provide the entry to the most exclusive experiences, maintained to obsessive standards of excellence and delivered with absolute discretion.
                </p>
              </div>
              <div className="mt-16 grid grid-cols-2 gap-12 border-t border-white/5 pt-16">
                <div>
                  <p className="text-5xl font-bold mb-2">04</p>
                  <p className="text-[9px] uppercase tracking-[0.4em] text-accent font-bold">Primary Hubs</p>
                </div>
                <div>
                  <p className="text-5xl font-bold mb-2">100%</p>
                  <p className="text-[9px] uppercase tracking-[0.4em] text-accent font-bold">Execution</p>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 relative aspect-3/4 bg-white/[0.02] border border-white/10 flex items-center justify-center p-12 corner-bracket">
              <div className="absolute inset-0 opacity-10 blur-3xl bg-accent/20" />
              <img 
                src="https://static.wixstatic.com/media/dfb3c4_b6f26321e375441caaf70f3e26f8cef5~mv2.jpg" 
                className="w-full h-full object-cover border border-white/5 grayscale group-hover:grayscale-0 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
              {/* Technical Overlay */}
              <div className="absolute top-1/2 left-0 w-full h-px bg-accent/40" />
              <div className="absolute top-0 left-1/2 w-px h-full bg-accent/40" />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER: TECHNICAL DARK */}
      <footer id="contact" className="relative z-20 bg-luxury-black border-t border-white/5 px-10 pt-40 pb-20 md:px-16">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-32">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-4 mb-12">
              <img 
                src="https://p19-common-sign.tiktokcdn-us.com/tos-maliva-avt-0068/6e692398319f1aa74aea50d71666b66f~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=ab2e6c1d&x-expires=1777831200&x-signature=UteOV96JZOjlegmMscVUgEU91G0%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5" 
                alt="Latouche Hospitality" 
                className="h-10 w-10 rounded-full"
              />
              <div>
                <span className="text-xl font-bold tracking-tighter text-white uppercase leading-none block">Latouche</span>
                <span className="text-[10px] tracking-[0.4em] text-accent font-bold uppercase mt-1">Hospitality Group</span>
              </div>
            </div>
            <div className="flex flex-col gap-4 text-[9px] font-mono uppercase tracking-[0.2em] text-white/30">
              <p>REGION: GLOBAL_HOSPITALITY</p>
              <p>STATUS: ELITE_CURATION</p>
              <p>ESTABLISHED: MMXXIV</p>
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.6em] mb-12 text-accent">The Collection</h4>
            <div className="flex flex-col gap-8 text-[11px] font-bold uppercase tracking-[0.3em] text-white/50">
              {["Master Registry", "Concierge Hub", "Client Portal", "Private Inquiry"].map(label => (
                <a key={label} href="#" className="hover:text-accent transition-colors w-fit">{label}</a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.6em] mb-12 text-accent">Contact Protocol</h4>
            <div className="flex flex-col gap-8 text-[11px] font-bold uppercase tracking-[0.3em] text-white/30">
              <p>Direct: FL_NY_TERRITORIES</p>
              <p>Secure: ENCRYPTED_INBOX</p>
              <p>Global: HUB_LOGISTICS</p>
            </div>
          </div>

          <div className="relative p-12 bg-white/[0.02] border border-white/10 corner-bracket overflow-hidden group">
            <div className="absolute inset-0 bg-accent/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            <h4 className="relative text-[10px] font-black uppercase tracking-[0.4em] mb-8 text-white">Private Inquiry</h4>
            <button className="relative w-full py-5 bg-accent text-black text-[10px] font-black uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all hud-glow">
              Initialize Experience
            </button>
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto border-t border-white/5 pt-10 flex justify-between items-center">
          <p className="text-[9px] font-mono tracking-[0.4em] text-white/10 uppercase">© 2026 LATOUCHE_HOSPITALITY_GROUP // ALL_RIGHTS_RESERVED.</p>
          <div className="hidden md:flex gap-10">
            {["Terms", "Privacy", "System"].map(link => (
              <a key={link} href="#" className="text-[9px] font-mono tracking-[0.4em] text-white/10 hover:text-accent transition-colors uppercase">{link}</a>
            ))}
          </div>
        </div>
      </footer>

      {/* Grid Lines Global Overlay */}
      <div className="fixed inset-0 z-10 pointer-events-none border-x border-white opacity-[0.03] mx-auto max-w-[1400px]" />

      {/* Fleet Overlay Component */}
      <AnimatePresence>
        {showInventory && (
          <Inventory onClose={() => setShowInventory(false)} />
        )}
      </AnimatePresence>
    </div>
  );
}



