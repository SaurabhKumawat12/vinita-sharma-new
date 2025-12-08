import React, { useState, useEffect } from 'react';
import { Header, Footer } from "./Layout";
import { Icon } from '@iconify/react';
import CountdownTimer from "./CountdownTimer";
import {
  Play,
  Star,
  Users,
  TrendingUp,
  MessageCircle,
  Instagram,
  Youtube,
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  DollarSign,
  Award,
  Target,
  Phone,
  Mail,
  ArrowRight,
  X,
  UserPlus,
  BookOpen,
  User,
  Check,
  ChevronDown,
  ShieldCheck
} from 'lucide-react';

function App() {
  const [showWhatsAppPopup, setShowWhatsAppPopup] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentFeedback, setCurrentFeedback] = useState(0);

  // NOX-style 1-Hour Countdown (for FOMO Section)
  function CountdownBoxes() {
    const target = React.useMemo(() => new Date(Date.now() + 60 * 60 * 1000), []);
    const [timeLeft, setTimeLeft] = React.useState({ m: 0, s: 0 });

    React.useEffect(() => {
      const tick = () => {
        const diff = Math.max(0, target - new Date());
        const m = Math.floor((diff / (1000 * 60)) % 60);
        const s = Math.floor((diff / 1000) % 60);
        setTimeLeft({ m, s });
      };
      tick();
      const id = setInterval(tick, 1000);
      return () => clearInterval(id);
    }, [target]);

    const Box = ({ label, value }) => (
      <div className="min-w-[80px] md:min-w-[100px]">
        <div className="relative rounded-xl p-4 bg-white/5 border border-white/10 backdrop-blur-md shadow-[inset_0_0_40px_rgba(255,255,255,0.06)]">
          <div
            className="absolute inset-0 rounded-xl pointer-events-none"
            style={{
              boxShadow:
                "0 0 20px rgba(199,160,85,0.25), inset 0 0 12px rgba(199,160,85,0.10)",
            }}
          />
          <div className="text-3xl md:text-5xl font-extrabold tracking-widest text-white tabular-nums">
            {String(value).padStart(2, "0")}
          </div>
          <div className="text-[11px] md:text-xs uppercase tracking-[0.25em] text-[#EFD9B0] mt-1">
            {label}
          </div>
        </div>
      </div>
    );

    useEffect(() => {
      const btns = document.querySelectorAll(".track-subscribe-btn");

      btns.forEach((btn) => {
        btn.addEventListener("click", () => {
          if (window.fbq) {
            window.fbq("track", "Subscribe");
          }
        });
      });

      return () => {
        btns.forEach((btn) => {
          btn.removeEventListener("click", () => { });
        });
      };
    }, []);


    return (
      <div className="flex items-center justify-center gap-4 md:gap-6">
        <Box label="Minutes" value={timeLeft.m} />
        <span className="text-[#EFD9B0]/70 font-bold text-3xl">:</span>
        <Box label="Seconds" value={timeLeft.s} />
      </div>
    );
  }




  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWhatsAppPopup(true);
    }, 30000); // Show popup after 30 seconds

    return () => clearTimeout(timer);
  }, []);



  return (
    <>

      <div
        className="min-h-screen bg-[#F8F8F8]"
        style={{
          '--color-primary': '#C7A055',
          '--color-primary1': '#EFD9B0',
          '--color-secondary': '#182432',
          '--color-accent': '#421B20',
          '--color-bg': '#F8F8F8',
          '--color-bg1': '#012B85',
          '--color-text': '#182432',
          '--color-body-text': '#000000'
        } as React.CSSProperties & Record<string, string>}
      >

        <Header />
        {/* Hero Section – Vinita Sharma */}
        <section
          id="about"
          className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#FFFDF9] via-[#FFF8F0] to-[#EFD9B0]/20 text-[#182432] overflow-hidden"
        >
          <div className="container mx-auto px-4 py-12">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

              {/* Left Side - Content */}
              <div className="space-y-8">
                <div className="space-y-6">
                  <h1 className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight">
                    Hi, I’m
                    <span className="text-[#C7A055]"> Vinita Sharma</span>
                  </h1>

                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                    Jhansi ki ek <span className="font-semibold text-[#C7A055]">housewife</span> hone ke bawajood,
                    maine ghar ke saare kaam sambhalte hue{" "}
                    <span className="font-semibold text-[#C7A055]">digital skills</span> seekhe — aur apni life ko
                    ek naye direction mein badla.
                    <br /><br />
                    StraviX ke saath sirf kuch mahino me maine apni income ko{" "}
                    <span className="font-bold text-[#C7A055]">400%+</span> grow kiya —
                    wo bhi pure ghar se, bina kisi office ya degree ke.
                    <br /><br />
                    Ab main doosri housewives ko guide karti hoon ki kaise woh bhi apni{" "}
                    <span className="font-semibold text-[#C7A055]">digital earning journey</span> start karke
                    apni pehchaan bana sakti hain.
                  </p>
                </div>

                {/* FOMO Line */}
                <div className="bg-gradient-to-r from-red-50 to-red-100 border-l-4 border-red-500 p-4 rounded-xl shadow-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                    <p className="text-red-700 font-bold text-base md:text-lg">
                      Only <span className="text-red-600">7/10 mentorship seats</span> left this month —
                      first come, first guided.
                    </p>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="space-y-3">
                  <a
                    href="https://wa.aisensy.com/aaas0k"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="track-subscribe-btn inline-flex items-center justify-center bg-[#25D366] hover:bg-[#20C157] text-white px-4 py-3 rounded-full text-lg font-bold transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-xl gap-3"
                  >
                    <Icon icon="mdi:whatsapp" className="w-6 h-6 text-white" />
                    <span>Message Me on WhatsApp Now</span>
                  </a>
                </div>
              </div>

              {/* Right Side - Profile Picture */}
              <div className="flex justify-center lg:justify-end">
                <div className="relative">
                  <div className="relative w-64 md:w-80 h-80 rounded-2xl overflow-hidden shadow-2xl border border-[#E9E4D8] bg-white transition-all duration-500 hover:shadow-[0_10px_50px_rgba(0,0,0,0.15)] hover:-translate-y-1">
                    <img
                      src="/assets/images/vinita-sharma.jpeg" // replace with Vinita's image when available
                      alt="Vinita Sharma – StraviX Mentor"
                      className="w-full h-full object-cover"
                    />

                    {/* Bottom Overlay Text */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                      <h3 className="text-lg md:text-xl font-bold text-white">Vinita Sharma</h3>
                      <p className="text-sm md:text-base text-[#C7A055] font-semibold">
                        StraviX Homemaker Mentor
                      </p>
                    </div>

                    {/* Vertical Badge */}
                    <div className="absolute top-4 right-0 bg-[#182432] text-white font-bold px-3 py-2 rounded-l-lg shadow-md flex flex-col items-center space-y-1">
                      <img
                        src="/assets/images/stravix.png"
                        alt="StraviX Logo"
                        className="w-14 md:w-20"
                      />
                      <p className="text-sm md:text-md">Affiliate</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>



        {/* Feedback Highlight Section */}
        <section className="py-10 md:py-20 bg-gradient-to-br from-[#FFF8F0] via-white to-[#FDFBF7] relative overflow-hidden">

          {/* Soft Decorative Glow */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#C7A055]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-52 h-52 bg-[#EFD9B0]/10 rounded-full blur-3xl"></div>

          <div className="relative max-w-5xl mx-auto px-6 text-center">

            {/* Headline */}
            <h2 className="text-2xl lg:text-5xl font-extrabold text-[#182432] mb-4 leading-snug">
              How StraviX Changed Lives
              <br className="hidden md:block" />
              <span className="text-[#C7A055]"> - StraviX Success Stories</span>
            </h2>

            {/* Description */}
            <p className="text-md  text-gray-700 max-w-2xl mx-auto mb-12 leading-relaxed">
              In this video, you’ll hear directly from our learners and affiliates —
              how they started their journey, overcame challenges, and built their digital careers
              with the StraviX community. 💫
            </p>

            {/* Video Wrapper */}
            <div className="relative max-w-4xl mx-auto rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] overflow-hidden group">

              {/* Subtle Shine on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-20 transition-all duration-500 pointer-events-none"></div>

              <iframe
                src="https://www.youtube.com/embed/ypC2S3WExWc?rel=0"
                title="StraviX Success Meet 2025 Feedback - Sasmita Mohanty"
                className="w-full h-full aspect-video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

          </div>
        </section>

        {/* Social Proof Section – Vinita Sharma */}
        <section className="py-14 bg-gradient-to-br from-[#FFFDF9] via-white to-[#FFF8F0] relative overflow-hidden">

          {/* Decorative Glows */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#EFD9B0]/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-56 h-56 bg-[#C7A055]/10 rounded-full blur-3xl"></div>

          <div className="relative container mx-auto px-4">
            <div className="max-w-6xl mx-auto">

              {/* Headings */}
              <div className="text-center mb-14">
                <h2 className="text-2xl md:text-3xl font-bold mb-3 text-[#C7A055] tracking-wide uppercase">
                  Real Results
                </h2>

                <h3 className="text-3xl md:text-4xl font-extrabold mb-6 text-[#182432] leading-snug">
                  Milestones That Tell a Story
                </h3>

                <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                  Har achievement ek sign tha ki sahi mentorship + consistent action se
                  <span className="text-[#C7A055] font-semibold"> life badal sakti hai.</span>
                  <br />
                  Yeh kuch moments hain jinhone meri journey ko naye level par pahunchaya.
                </p>
              </div>

              {/* Image Slider */}
              <div className="relative mb-12">
                <div className="overflow-x-auto scrollbar-hide">
                  <div className="flex space-x-6 pb-4" style={{ width: 'max-content' }}>

                    {/* Slide 1 – Growth Icon */}
                    <div className="w-64 md:w-80 flex-shrink-0 bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-3xl transition-all duration-500">
                      <div className="relative">
                        <img
                          src="/assets/images/stravix-growth-icon-sq.jpeg"
                          alt="StraviX Growth Icon"
                          className="w-full h-64 md:h-96 object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                      </div>
                      <div className="p-5 text-white bg-[#182432] h-full">
                        <p className="font-semibold text-base leading-relaxed">
                          Honoured with the <span className="text-[#C7A055] font-bold">StraviX Growth Icon Award 🏆</span>
                          — a moment that proved hard work truly shines.
                        </p>
                      </div>
                    </div>

                    {/* Slide 2 – First Income */}
                    <div className="w-64 md:w-80 flex-shrink-0 bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-3xl transition-all duration-500">
                      <div className="relative">
                        <img
                          src="/assets/images/vinita-sharma-first-income.png"
                          alt="First Income"
                          className="w-full h-64 md:h-96 object-contain"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                      </div>
                      <div className="p-5 text-white bg-[#182432] h-full">
                        <p className="font-semibold text-base leading-relaxed">
                          My first earning — <span className="text-[#C7A055] font-bold">₹4,000</span>.
                          Small start, but the confidence it gave? Priceless.
                        </p>
                      </div>
                    </div>

                    {/* Slide 3 – Success Meet 2025 */}
                    <div className="w-64 md:w-80 flex-shrink-0 bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-3xl transition-all duration-500">
                      <div className="relative">
                        <img
                          src="/assets/images/Stravix-success-meet.jpeg"
                          alt="StraviX Success Meet 2025"
                          className="w-full h-64 md:h-96 object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                      </div>
                      <div className="p-5 text-white bg-[#182432] h-full">
                        <p className="font-semibold text-base leading-relaxed">
                          Featured at <span className="text-[#C7A055] font-bold">StraviX Success Meet 2025</span>
                          — a proud moment for my family & my journey.
                        </p>
                      </div>
                    </div>

                    {/* Slide 4 – Total Income 20K+ */}
                    <div className="w-64 md:w-80 flex-shrink-0 bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-3xl transition-all duration-500">
                      <div className="relative">
                        <img
                          src="/assets/images/vinita-sharma-20k.png"
                          alt="Total Income 20K+"
                          className="w-full h-64 md:h-96 object-contain"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                      </div>
                      <div className="p-5 text-white bg-[#182432] h-full">
                        <p className="font-semibold text-base leading-relaxed">
                          Crossed <span className="text-[#C7A055] font-bold">₹20,000+</span> in digital earnings —
                          proof that consistency compounds.
                        </p>
                      </div>
                    </div>

                    {/* Slide 5 – Community Family */}
                    <div className="w-64 md:w-80 flex-shrink-0 bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-3xl transition-all duration-500">
                      <div className="relative">
                        <img
                          src="/assets/images/my-comunity.jpeg"
                          alt="StraviX Family Community"
                          className="w-full h-64 md:h-96 object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                      </div>
                      <div className="p-5 text-white bg-[#182432] h-full">
                        <p className="font-semibold text-base leading-relaxed">
                          Found friends who feel like <span className="text-[#C7A055] font-bold">family</span> —
                          a community that lifts you higher every day.
                        </p>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Scroll Indicator (Mobile) */}
                <div className="flex justify-center mt-4 md:hidden">
                  <p className="text-sm text-gray-500">← Swipe to see more →</p>
                </div>
              </div>

              {/* Mini CTA */}
              <div className="bg-gradient-to-r from-red-50 to-red-100 border-l-4 border-red-500 p-6 rounded-xl shadow-sm">
                <div className="text-center">
                  <p className="text-red-700 font-bold text-lg mb-4">
                    ⚡ Seats filling fast — only 7/10 mentorship seats left this month.
                  </p>
                  <a
                    href="https://wa.aisensy.com/aaas0k"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="track-subscribe-btn inline-flex items-center justify-center bg-[#25D366] hover:bg-[#20C157] text-white px-4 py-2 gap-1 rounded-full text-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    <Icon icon="mdi:whatsapp" className="w-6 h-6 text-white" />

                    Message Me on WhatsApp
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Real People. Real Growth - Community Section */}
        <section id="testimonials" className="bg-gradient-to-br from-white via-[#F8F8F8] to-[#EFD9B0]/10 pb-10 relative overflow-hidden">

          {/* Soft Decorative Glow */}
          <div className="absolute -top-10 left-0 w-48 h-48 bg-[#C7A055]/20 blur-3xl rounded-full"></div>
          <div className="absolute bottom-0 right-0 w-56 h-56 bg-[#EFD9B0]/20 blur-3xl rounded-full"></div>

          <div className="relative container mx-auto px-4">
            <div className="max-w-6xl mx-auto">

              {/* Heading */}
              <div className="text-center mb-14">
                <h2 className="text-2xl md:text-3xl font-bold my-3 text-[#C7A055]">
                  Real People. Real Progress.
                </h2>
                <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                  StraviX ne sirf earning hi nahi badhai — mindset, confidence
                  aur self-belief ko bhi rebuild kiya hai.
                  Yahan har story ek reminder hai: jo seekhne aur action lene ko taiyar hota hai,
                  uski growth pakki hoti hai. ✨
                </p>
              </div>

              {/* ========================= */}
              {/* Part 1: Image Testimonials */}
              {/* ========================= */}
              <div className="mb-20">
                <h3 className="text-xl md:text-2xl font-bold mb-6 text-[#182432] text-center">
                  Stories That Speak For Themselves
                </h3>

                <div className="relative mb-6">
                  <div className="overflow-x-auto scrollbar-hide">
                    <div className="flex space-x-5 pb-4" style={{ width: "max-content" }}>

                      {/* IMAGES SAME — Only UI improved */}
                      {[
                        "jyoti.webp",
                        // "taniya-sadh.webp",
                        "sumyya.webp",
                        // "kanak.webp",
                        "sikha.webp",
                        "vishnu.webp",
                        "seema.webp",
                        // "priyanka.webp",
                        "poonam.webp",
                        // "ritu-soni.webp",
                      ].map((img, index) => (
                        <div key={index} className="relative w-64 md:w-64 flex-shrink-0">
                          <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-white">
                            <img
                              src={`/assets/screenshots/${img}`}
                              alt={`Community testimonial ${index + 1}`}
                              className="w-full h-102 md:h-96 object-contain bg-gray-100"
                            />
                          </div>
                        </div>
                      ))}

                    </div>
                  </div>

                  <div className="flex justify-center mt-4 md:hidden">
                    <p className="text-sm text-gray-500">← Swipe to explore →</p>
                  </div>
                </div>

                <p className="text-center text-gray-600 italic">
                  Yeh sab stories proof hain ki right guidance + right system se ordinary log
                  extraordinary results create kar sakte hain.
                </p>
              </div>

              {/* ======================= */}
              {/* Part 2: Video Testimonials */}
              {/* ======================= */}
              <div className="mb-12">
                <h3 className="text-xl md:text-2xl font-bold mb-6 text-[#182432] text-center">
                  Real Journeys. Real Breakthroughs.
                </h3>
                <p className="text-lg text-gray-700 text-center mb-8 max-w-3xl mx-auto leading-relaxed">
                  In videos mein aap dekhenge kaise students, professionals aur homemakers ne
                  StraviX ke through apna pehla income, nayi confidence
                  aur ek stable digital identity create ki.
                </p>

                {/* Videos as-is, UI upgraded */}
                <div className="relative mb-6">
                  <div className="overflow-x-auto scrollbar-hide">
                    <div className="flex space-x-5 pb-4" style={{ width: "max-content" }}>

                      {[
                        "UrStFuEXobo",
                        "6Y1gwobHrZI",
                        "LAkCQVt49Nc",
                        "L8AC4cuKH9Q",
                        // "qO1z4eUK0FA",
                        // "PEmhU6LLlGQ",
                        // "1aExYton2S8",
                        // "Z6AuXUE8gU4",
                        // "Mqkn0yj7gsk",
                      ].map((id, index) => (
                        <div key={index} className="relative w-54 md:w-64 flex-shrink-0">
                          <div className="relative aspect-[9/16] bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                            <iframe
                              width="100%"
                              height="100%"
                              src={`https://www.youtube.com/embed/${id}`}
                              title={`Success Story ${index + 1}`}
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              referrerPolicy="strict-origin-when-cross-origin"
                              allowFullScreen
                              className="rounded-xl"
                            ></iframe>
                          </div>
                        </div>
                      ))}

                    </div>
                  </div>

                  <div className="flex justify-center mt-4 md:hidden">
                    <p className="text-sm text-gray-500">← Swipe to watch more →</p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-r from-red-50 to-red-100 border-l-4 border-red-500 p-6 rounded-lg shadow-sm">
                <div className="text-center">
                  <p className="text-red-700 font-bold text-lg mb-4">
                    ⚡ Your transformation can be next! Only 7/10 mentorship seats open.
                  </p>
                  <a
                    href="https://wa.aisensy.com/aaas0k"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="track-subscribe-btn inline-flex items-center justify-center bg-[#25D366] hover:bg-[#20C157] text-white px-4 py-2 rounded-full text-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    <Icon icon="mdi:whatsapp" className="w-6 h-6 mr-1 text-white" />

                    Message Me on WhatsApp
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Registered & Legal Section - Polished UI (with PAN Image Fix) */}
        <section className="py-20 bg-gradient-to-b from-[#FFFDF9] via-[#FFF8F0] to-white relative overflow-hidden">

          {/* Soft Background Glows */}
          <div className="absolute top-10 -left-10 w-40 h-40 bg-[#C7A055]/20 blur-3xl rounded-full"></div>
          <div className="absolute bottom-10 -right-10 w-52 h-52 bg-[#EFD9B0]/20 blur-3xl rounded-full"></div>

          <div className="relative container mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center">

              {/* Title */}
              <h2 className="text-[#C7A055] text-3xl md:text-5xl font-extrabold mb-5 tracking-wide leading-snug">
                100% Registered & Legal
              </h2>

              <p className="text-lg md:text-xl text-[#182432] mb-14 font-medium max-w-3xl mx-auto leading-relaxed">
                StraviX is a fully verified and compliant organization — trusted by thousands across India.
              </p>

              {/* ====================== */}
              {/* Documents Grid */}
              {/* ====================== */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">

                {/* MSME Certificate */}
                <div className="bg-white rounded-2xl shadow-lg border border-[#E8E3D8] overflow-hidden 
                        hover:shadow-2xl hover:-translate-y-1 transition-all duration-500">
                  <div className="aspect-[3/4] overflow-hidden relative">
                    <img
                      src="https://res.cloudinary.com/dqqfy0u4u/image/upload/v1757486593/StraviX_Official_Docs_2__pages-to-jpg-0001_kzkph1.jpg"
                      alt="MSME Certificate"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 cursor-pointer"
                    />
                  </div>
                  <div className="p-5 bg-[#182432]/5">
                    <h3 className="font-semibold text-[#182432] text-lg tracking-wide">
                      MSME Certificate
                    </h3>
                  </div>
                </div>

                {/* PAN Card (Old Aspect Handling Restored) */}
                <div className="bg-white rounded-2xl shadow-lg border border-[#E8E3D8] overflow-hidden 
                        hover:shadow-2xl hover:-translate-y-1 transition-all duration-500">
                  <div className="aspect-auto md:aspect-[3/4] overflow-hidden relative">
                    <img
                      src="https://res.cloudinary.com/dqqfy0u4u/image/upload/v1757486593/StraviX_Official_Docs_2__pages-to-jpg-0002_dtnmph.jpg"
                      alt="PAN Card"
                      className="w-full h-full object-contain bg-white hover:scale-105 transition-transform duration-500 cursor-pointer"
                    />
                  </div>
                  <div className="p-5 bg-[#182432]/5">
                    <h3 className="font-semibold text-[#182432] text-lg tracking-wide">
                      PAN Card
                    </h3>
                  </div>
                </div>

                {/* ISO Certificate */}
                <div className="bg-white rounded-2xl shadow-lg border border-[#E8E3D8] overflow-hidden 
                        hover:shadow-2xl hover:-translate-y-1 transition-all duration-500">
                  <div className="aspect-[3/4] overflow-hidden relative">
                    <img
                      src="https://res.cloudinary.com/dqqfy0u4u/image/upload/v1757486594/StraviX_Official_Docs_2__pages-to-jpg-0003_ahwvng.jpg"
                      alt="ISO Certificate"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 cursor-pointer"
                    />
                  </div>
                  <div className="p-5 bg-[#182432]/5">
                    <h3 className="font-semibold text-[#182432] text-lg tracking-wide">
                      ISO Certificate
                    </h3>
                  </div>
                </div>

              </div>

              {/* CTA Button */}
              <div className="text-center">
                <button
                  onClick={() => {
                    setShowWhatsAppPopup(true);
                  }}
                  className="bg-[#25D366] hover:bg-[#20C157] text-white px-4 py-2 rounded-full 
                     text-[16px] font-bold transition-all duration-300 transform hover:scale-105 
                     shadow-lg hover:shadow-[#25D366]/40 flex items-center gap-2 mx-auto"
                >
                  <Icon icon="mdi:whatsapp" className="w-6 h-6 text-white" />
                  Secure Your Seat Now on WhatsApp
                </button>
              </div>

            </div>
          </div>
        </section>

        {/* Growth & Impact Section - Premium Redesigned */}
        <section className="relative py-20 bg-gradient-to-br from-[#FFFDF9] via-[#FFF8F0] to-[#EFD9B0]/40 overflow-hidden">

          {/* Soft Pattern + Light Overlay */}
          <div className="absolute inset-0 bg-[url('/assets/patterns/soft-floral-bg.png')] bg-cover bg-center opacity-5"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-white/70 to-transparent"></div>

          <div className="relative container mx-auto px-4">
            <div className="max-w-6xl mx-auto">

              {/* Header */}
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-extrabold leading-snug text-[#182432]">
                  Step Into the <span className="text-[#C7A055]">StraviX Growth Movement</span>
                </h2>
                <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mt-4 leading-relaxed">
                  1000+ students, creators & working professionals are leveling up their income, skills
                  & confidence with <span className="text-[#C7A055] font-semibold">StraviX</span> —
                  a community built on learning, action & real transformation.
                </p>
              </div>

              {/* Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-20">

                {/* Card Template */}
                {[
                  {
                    title: "A Community That Lifts You Up",
                    text: "Ek ambitious network jahan log sirf seekhte nahi — ek-dusre ko grow bhi karte hain.",
                    icon: <Users className="w-8 h-8 text-white" />,
                  },
                  {
                    title: "Trust That Actually Delivers",
                    text: "Registered, legal & transparent — StraviX real mentorship ke saath real income banata hai.",
                    icon: <Award className="w-8 h-8 text-white" />,
                  },
                  {
                    title: "Every Win Matters",
                    text: "Chhoti earnings ho ya big milestone — har achievement ko celebrate karna humari culture ka part hai.",
                    icon: <Star className="w-8 h-8 text-white" />,
                  },
                  {
                    title: "Your Effort. Your Spotlight.",
                    text: "Jo consistent rehta hai, woh shine bhi karta hai — features, recognition, mentorship… sab yahi milta hai.",
                    icon: <Target className="w-8 h-8 text-white" />,
                  }
                ].map((card, i) => (
                  <div
                    key={i}
                    className="group relative cursor-pointer bg-white/60 backdrop-blur-xl border border-[#EFD9B0]/50 p-8 rounded-2xl 
                       shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                  >
                    {/* Glow Layer */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#EFD9B0]/40 to-white/50 rounded-2xl opacity-0 
                            group-hover:opacity-100 transition-all duration-500"></div>

                    {/* Card Content */}
                    <div className="relative z-10 flex flex-col items-center text-center space-y-5">
                      <div className="w-16 h-16 bg-[#C7A055] rounded-2xl flex items-center justify-center shadow-lg 
                              transform group-hover:scale-110 transition-all duration-300">
                        {card.icon}
                      </div>
                      <h3 className="text-lg font-bold text-[#182432]">{card.title}</h3>
                      <p className="text-gray-600 leading-relaxed">
                        {card.text}
                      </p>
                    </div>
                  </div>
                ))}

              </div>

              {/* CTA Block */}
              <div className="bg-gradient-to-r from-[#FFF1F1] to-[#FFEFE0] border-l-4 border-[#C7A055] p-10 rounded-2xl text-center shadow-lg">
                <p className="text-[#182432] font-semibold text-lg md:text-xl mb-6 leading-relaxed">
                  🚀 Join India’s fastest-growing community of
                  <span className="text-[#C7A055] font-bold"> creators, professionals </span>
                  & <span className="text-[#C7A055] font-bold">action-takers</span> —
                  jahan learning, earning aur growth saath-saath hoti hai.
                </p>

                <a
                  href="https://wa.aisensy.com/aaas0k"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="track-subscribe-btn inline-flex items-center justify-center bg-[#25D366] hover:bg-[#20C157] 
                     text-white px-6 py-3 rounded-full text-lg font-bold transition-all duration-300 
                     transform hover:scale-105 shadow-lg hover:shadow-[#25D366]/40 gap-2"
                >
                  <Icon icon="mdi:whatsapp" className="w-6 h-6 text-white" />

                  Connect with Me
                </a>
              </div>

            </div>
          </div>
        </section>

        {/* How It Works - Premium Redesigned */}
        <section className="relative py-24 bg-gradient-to-br from-[#FFFDF9] via-[#FFF8F0] to-[#EFD9B0]/30 overflow-hidden">

          {/* Soft Background Layers */}
          <div className="absolute inset-0 bg-[url('/assets/patterns/soft-waves.svg')] bg-cover bg-center opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-white/70 to-transparent"></div>

          <div className="relative container mx-auto px-6">

            {/* Header */}
            <div className="max-w-5xl mx-auto text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#182432] leading-snug">
                Your <span className="text-[#C7A055]">Path to Digital Success</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mt-4 leading-relaxed">
                Bas 3 clear steps — aur aap apni digital income journey
                mentorship, clarity aur support ke saath shuru kar sakte ho.
              </p>
            </div>

            {/* Steps Flow */}
            <div className="relative flex flex-col md:flex-row justify-center items-start gap-16 mb-20">

              {/* Connector Line */}
              <div className="hidden md:block absolute top-32 left-0 right-0 h-[4px] bg-gradient-to-r from-[#EFD9B0] to-[#C7A055]/70 rounded-full -z-10"></div>

              {/* Step 1 */}
              <div className="group relative bg-white/70 backdrop-blur-xl border border-[#EFD9B0]/50 p-10 rounded-2xl 
                      shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 
                      w-full md:w-1/3 text-center">
                {/* Step badge */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-[#182432] text-white 
                        flex items-center justify-center font-bold text-xl shadow-lg">
                  1
                </div>

                <div className="w-20 h-20 bg-[#C7A055] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg 
                        group-hover:scale-110 transition-transform duration-300">
                  <UserPlus className="w-10 h-10 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-[#182432] mb-3">Join Mentorship</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  StraviX mentorship join karo aur ek supportive
                  community ke saath apni digital journey start karo —
                  jahan har step par guidance milti hai.
                </p>
              </div>

              {/* Step 2 */}
              <div className="group relative bg-white/70 backdrop-blur-xl border border-[#EFD9B0]/50 p-10 rounded-2xl 
                      shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 
                      w-full md:w-1/3 text-center">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-[#182432] text-white 
                        flex items-center justify-center font-bold text-xl shadow-lg">
                  2
                </div>

                <div className="w-20 h-20 bg-[#C7A055] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg 
                        group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="w-10 h-10 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-[#182432] mb-3">Learn Practically</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Step-by-step training, live support aur proven
                  frameworks ke saath affiliate marketing ko
                  practical tarike se master karo — beginner ho ya pro.
                </p>
              </div>

              {/* Step 3 */}
              <div className="group relative bg-white/70 backdrop-blur-xl border border-[#EFD9B0]/50 p-10 rounded-2xl 
                      shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 
                      w-full md:w-1/3 text-center">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-[#182432] text-white 
                        flex items-center justify-center font-bold text-xl shadow-lg">
                  3
                </div>

                <div className="w-20 h-20 bg-[#C7A055] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg 
                        group-hover:scale-110 transition-transform duration-300">
                  <DollarSign className="w-10 h-10 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-[#182432] mb-3">Earn Consistently</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Few weeks me pehla payout unlock karo aur
                  ek structured system ke saath apni income ko
                  month-on-month grow karte jao.
                </p>
              </div>
            </div>

            {/* CTA Section */}
            <div className="relative bg-gradient-to-r from-[#FFF3E0] to-[#FDE9C9] border border-[#EFD9B0]/50 rounded-2xl p-6 text-center 
                    shadow-xl hover:shadow-2xl transition-all duration-500">
              <p className="text-lg md:text-xl font-semibold text-[#182432] mb-6 leading-relaxed">
                🚀 Ready to rewrite your story?
                Only <span className="text-red-600 font-bold">7/10 mentorship seats</span> left for this month.
              </p>

              <a
                href="https://wa.aisensy.com/aaas0k"
                target="_blank"
                rel="noopener noreferrer"
                className="track-subscribe-btn inline-flex items-center justify-center bg-[#25D366] hover:bg-[#20C157] 
                   text-white font-bold py-3 px-6 rounded-full text-[16px] transition-all duration-300 
                   shadow-lg hover:shadow-[#25D366]/40 transform hover:scale-105"
              >
                <Icon icon="mdi:whatsapp" className="w-6 h-6 mr-1 text-white" />

                Message Me on WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* What You'll Get - Premium Modern UI */}
        <section className="relative py-24 bg-gradient-to-b from-[#FFFDF9] via-[#FFF8F0] to-[#EFD9B0]/30 overflow-hidden">

          {/* Background Soft Texture */}
          <div className="absolute inset-0 bg-[url('/assets/patterns/soft-floral-bg.png')] bg-cover bg-center opacity-10"></div>

          <div className="relative max-w-6xl mx-auto px-6">

            {/* Header */}
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#182432] leading-snug">
                What You’ll <span className="text-[#C7A055]">Experience Inside</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mt-4 leading-relaxed">
                Mentorship, practical digital training, aur ek
                <span className="text-[#C7A055] font-semibold"> action-focused community</span> —
                jahan aapko har step par clarity, confidence aur support milta hai.
              </p>
            </div>

            {/* Benefit Cards - New UI */}
            <div className="grid md:grid-cols-2 gap-10 mb-20">

              {/* Card Template */}
              {[
                {
                  icon: <User className="w-7 h-7 text-white" />,
                  title: "Step-by-Step Personal Mentorship",
                  text: "Clear roadmap + practical guidance — taaki aap kabhi stuck na ho aur har week progress dikhe.",
                },
                {
                  icon: <BookOpen className="w-7 h-7 text-white" />,
                  title: "Digital Skills + Sales Mastery",
                  text: "Content, communication, branding & sales — wo skills jo real earning banati hain.",
                },
                {
                  icon: <Users className="w-7 h-7 text-white" />,
                  title: "Supportive Learning Community",
                  text: "India bhar ke learners ke saath grow karo — homemakers, professionals & students, sab ek mission par.",
                },
                {
                  icon: <Target className="w-7 h-7 text-white" />,
                  title: "Proven Success System",
                  text: "1000+ learners ne isi system se apna pehla income earn kiya — next success story aap ho sakte ho.",
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className="group relative cursor-pointer bg-white/80 backdrop-blur-xl border border-[#EFD9B0]/50 
                     rounded-2xl p-8 shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 flex gap-6 items-start"
                >
                  {/* Icon */}
                  <div className="bg-gradient-to-br from-[#C7A055] to-[#EFD9B0] rounded-2xl p-4 shadow-md 
                          group-hover:scale-110 transition-all duration-300">
                    {item.icon}
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="text-xl font-bold text-[#182432] mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.text}</p>
                  </div>
                </div>
              ))}

              {/* Long Card */}
              <div className="group relative cursor-pointer bg-white/80 backdrop-blur-xl border border-[#EFD9B0]/50 
                     rounded-2xl p-8 shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 md:col-span-2 flex gap-6">
                <div className="h-fit bg-gradient-to-br from-[#C7A055] to-[#EFD9B0] rounded-2xl p-4 shadow-md group-hover:scale-110 transition-all duration-300">
                  <Award className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#182432] mb-2">Rewards, Recognition & Monthly Highlights</h3>
                  <p className="text-gray-600">
                    Har consistent effort ko spotlight milta hai — awards, features, shoutouts aur StraviX Stage moments.
                  </p>
                </div>
              </div>

            </div>

            {/* Comparison Section — Redesigned */}
            <div className="rounded-3xl bg-white/70 backdrop-blur-xl shadow-xl border border-[#EFD9B0]/50 mb-20 relative overflow-hidden">

              {/* Gradient Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#FFE9E9]/40 via-transparent to-[#E8FFE9]/40 pointer-events-none"></div>

              <div className="relative grid md:grid-cols-2 gap-10 text-center">

                {/* Without StraviX */}
                <div className="group p-4 rounded-xl hover:bg-red-50 transition-all duration-300">
                  <div className="bg-red-100 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-5">
                    <X className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-red-600 mb-2">Without StraviX</h3>
                  <p className="text-red-600 leading-relaxed">
                    Confusion, overthinking, trial & error —
                    bina roadmap ke growth slow hoti hai.
                  </p>
                </div>

                {/* With StraviX */}
                <div className="group p-4 rounded-xl hover:bg-green-50 transition-all duration-300">
                  <div className="bg-green-100 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-5">
                    <Check className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-green-700 mb-2">With StraviX</h3>
                  <p className="text-green-700 leading-relaxed">
                    Step-by-step roadmap, daily support,
                    expert mentorship & guaranteed progress environment.
                  </p>
                </div>

              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <div className="bg-gradient-to-r from-[#FFF4E0] to-[#FDE9C9] rounded-3xl shadow-lg p-6 border border-[#EFD9B0]/50">
                <p className="text-lg md:text-xl font-semibold text-[#182432] mb-6 leading-relaxed">
                  🎯 Ye sab benefits sirf
                  <span className="text-red-500 font-bold"> limited mentorship seats </span>
                  ke liye available hain —
                  aaj hi apni earning journey start karo.
                </p>

                <a
                  href="https://wa.aisensy.com/aaas0k"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="track-subscribe-btn inline-flex items-center justify-center bg-[#25D366] hover:bg-[#20C157] 
                     text-white font-bold py-3 px-6 rounded-full text-[16px] transition-all shadow-lg 
                     hover:shadow-[#25D366]/40 transform hover:scale-105"
                >
                  <Icon icon="mdi:whatsapp" className="w-6 h-6 mr-1 text-white" />

                  Message Me on WhatsApp
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* My Real Journey - Premium Redesigned */}
        <section className="relative py-24 bg-gradient-to-br from-[#FFFDF9] via-[#FFF8F0] to-[#EFD9B0]/40 overflow-hidden">

          {/* Soft Pattern */}
          <div className="absolute inset-0 bg-[url('/assets/patterns/soft-floral-bg.png')] bg-cover bg-center opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-white/70 to-transparent"></div>

          <div className="relative max-w-6xl mx-auto px-6">

            {/* Heading */}
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#182432] leading-snug mb-4">
                My <span className="text-[#C7A055]">Transformation Journey</span> —
                From <span className="text-[#C7A055]">Routine</span> to
                <span className="text-[#C7A055]"> Real Freedom</span>
              </h2>

              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Kaam, stress aur time ki kami ke beech, maine digital world ko explore kiya —
                aur wahi se meri life ka sabse bada shift start hua.
                Aaj, main un logo ko guide karti hoon jo apni life me real change lana chahte hain.
              </p>
            </div>

            {/* Timeline */}
            <div className="relative flex flex-col md:flex-row items-center justify-center mb-24 gap-14">

              {/* Line */}
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-[4px] 
                      bg-gradient-to-r from-[#FFC7C7] via-[#EFD9B0] to-[#B9F5C2] rounded-full -z-10"></div>

              {/* Step 1 */}
              <div className="group text-center relative z-10">
                <div className="w-24 h-24 bg-white border border-red-200 rounded-full flex items-center justify-center mx-auto shadow-lg
                        group-hover:scale-110 transition-all duration-300">
                  <span className="text-3xl">💻</span>
                </div>
                <h3 className="font-bold text-lg text-[#182432] mt-4">Routine Without Growth</h3>
                <p className="text-gray-600 text-sm">Long working hours, zero flexibility, no control.</p>
              </div>

              {/* Step 2 */}
              <div className="group text-center relative z-10">
                <div className="w-24 h-24 bg-white border border-yellow-200 rounded-full flex items-center justify-center mx-auto shadow-lg
                        group-hover:scale-110 transition-all duration-300">
                  <span className="text-3xl">🚀</span>
                </div>
                <h3 className="font-bold text-lg text-[#182432] mt-4">Digital Breakthrough</h3>
                <p className="text-gray-600 text-sm">Affiliate marketing seekha, skills build ki, mindset shift hua.</p>
              </div>

              {/* Step 3 */}
              <div className="group text-center relative z-10">
                <div className="w-24 h-24 bg-white border border-green-200 rounded-full flex items-center justify-center mx-auto shadow-lg
                        group-hover:scale-110 transition-all duration-300">
                  <span className="text-3xl">🌟</span>
                </div>
                <h3 className="font-bold text-lg text-[#182432] mt-4">Freedom & Impact</h3>
                <p className="text-gray-600 text-sm">₹3 Lakh+ earned & 150+ students guided across India.</p>
              </div>

            </div>

            {/* Images Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
              <img
                src="/assets/images/smm225.jpeg"
                className="w-full rounded-3xl object-cover shadow-xl hover:shadow-2xl transition-all duration-500"
                alt="Award"
              />
              <img
                src="/assets/images/inspirational-ceo-aakash-gupta.jpeg"
                className="w-full rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500"
                alt="Award"
              />
              <img
                src="/assets/images/stravix-growth-icon.jpeg"
                className="w-full rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500"
                alt="Meetup"
              />
            </div>

            {/* Emotional Quote */}
            <div className="text-center mb-20">
              <p className="text-lg md:text-2xl text-[#182432] font-medium italic leading-relaxed max-w-4xl mx-auto">
                “Meri journey ka sabse powerful moment tha —
                <span className="text-[#C7A055] font-semibold">khud ko ek chance dena.</span>
                Aaj main StraviX ke through logon ko wohi freedom dila rahi hoon jo maine khud experience ki.”
              </p>
            </div>

            {/* Video Highlight Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-20">

              {/* Keep all videos same — only UI updated */}
              {[
                // {
                //   title: "StraviX Growth Icon Award 2025",
                //   src: "https://www.youtube.com/embed/FMRsA3LPKdc"
                // },
                // {
                //   title: "First Achievement At MT",
                //   src: "https://www.youtube.com/embed/2Ym-14x6VqE"
                // },
                // {
                //   title: "Millionaire Retreat 2025",
                //   src: "https://www.youtube.com/embed/iEHcofYv6h0"
                // },
                // {
                //   title: "Gifted Phone To Mom",
                //   src: "https://www.youtube.com/embed/GEurN5IpTlo"
                // }
              ].map((v, idx) => (
                <div
                  key={idx}
                  className="bg-white/70 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500"
                >
                  <h3 className="text-xl font-bold text-[#182432] mb-4 text-center">
                    {v.title}
                  </h3>
                  <div className="relative aspect-[9/16] rounded-xl overflow-hidden">
                    <iframe
                      src={v.src}
                      className="absolute top-0 left-0 w-full h-full rounded-xl"
                      frameBorder="0"
                      title="journey"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="text-center">
              <div className="bg-gradient-to-r from-[#FFF4E0] to-[#FFE9E9] border border-[#EFD9B0]/50 p-6 rounded-3xl shadow-lg">
                <p className="text-lg md:text-xl font-semibold text-[#182432] mb-6">
                  🌟 Aap bhi agar routine life se freedom chahte ho,
                  to meri tarah apni digital journey shuru kar sakte ho —
                  bas ek right step ki zarurat hoti hai.
                </p>
                <a
                  href="https://wa.aisensy.com/aaas0k"
                  className="inline-flex items-center justify-center gap-1 bg-[#25D366] hover:bg-[#20C157] text-white font-bold py-4 px-4 max-w-fit rounded-full text-[16px] shadow-lg hover:shadow-[#25D366]/40 transform hover:scale-105 transition-all duration-300"
                >
                  <Icon icon="ic:baseline-whatsapp" className='w-6 h-6' />
                  Message on WhatsApp
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* Final CTA – Premium Redesign */}
        <section className="relative py-24 bg-[#070B14] overflow-hidden">

          {/* Background Glow Mesh */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[45rem] h-[45rem] bg-[#C7A055]/10 blur-[140px] rounded-full" />
            <div className="absolute bottom-0 right-0 w-[32rem] h-[32rem] bg-[#EFD9B0]/10 blur-[120px] rounded-full" />
            <div className="absolute top-20 left-10 w-[18rem] h-[18rem] bg-[#C7A055]/20 blur-[90px] rounded-full opacity-30" />
          </div>

          {/* Subtle Grid Overlay */}
          <div className="absolute inset-0 opacity-[0.04] bg-[url('/assets/patterns/grid.svg')] bg-cover"></div>

          <div className="relative max-w-5xl mx-auto px-6 text-center">

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              Your Digital Income Journey
              <span className="block text-[#C7A055]">Starts Today</span>
            </h2>

            {/* Sub Text */}
            <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Main <span className="text-[#C7A055] font-semibold">Pooja Sharma</span>,
              ek working professional se digital earner bani —
              aur ab main aapko wohi system sikhaungi jisne meri life change ki.
              Clear roadmap, real guidance & result-driven mentorship.
            </p>

            {/* Trust Badges - Premium UI */}
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-7 mb-12">

              <div className="flex items-center gap-2 bg-white/5 px-5 py-2.5 rounded-full backdrop-blur-xl border border-white/10 shadow-inner">
                <ShieldCheck className="w-5 h-5 text-[#C7A055]" />
                <span className="text-sm text-gray-300 tracking-wide">Registered & Verified</span>
              </div>

              <div className="flex items-center gap-2 bg-white/5 px-5 py-2.5 rounded-full backdrop-blur-xl border border-white/10 shadow-inner">
                <Users className="w-5 h-5 text-[#C7A055]" />
                <span className="text-sm text-gray-300 tracking-wide">1000+ Learners Mentored</span>
              </div>

              <div className="flex items-center gap-2 bg-white/5 px-5 py-2.5 rounded-full backdrop-blur-xl border border-white/10 shadow-inner">
                <Award className="w-5 h-5 text-[#C7A055]" />
                <span className="text-sm text-gray-300 tracking-wide">Proven Results</span>
              </div>
            </div>

            {/* FOMO Line */}
            <div className="mb-10">
              <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-white/5 border border-[#C7A055]/30 backdrop-blur-xl shadow-md">
                <span className="text-xl">⚡</span>
                <span className="text-[#EFD9B0] font-semibold text-base md:text-lg">
                  This month only: <span className="font-bold">7/10 mentorship seats</span> remaining — secure your spot now
                </span>
              </div>
            </div>

            {/* Countdown (unchanged) */}
            <div className="mb-12">
              <CountdownBoxes />
            </div>

            {/* CTA Button */}
            <a
              href="https://wa.aisensy.com/aaas0k"
              target="_blank"
              rel="noopener noreferrer"
              className="track-subscribe-btn inline-flex items-center justify-center bg-[#25D366] hover:bg-[#20C157] 
                 text-white font-bold py-4 px-6 rounded-full text-[16px] transition-all duration-300 
                 shadow-[0_0_40px_rgba(37,211,102,0.25)] hover:scale-[1.06] gap-1 mx-auto"
            >
              <Icon icon="ic:baseline-whatsapp" className='w-6 h-6' />
              Start Your Journey on WhatsApp
            </a>
          </div>

          {/* Floating WhatsApp Button (Mobile) */}
          <div className="fixed bottom-4 left-4 right-4 z-50 md:hidden">
            <a
              href="https://wa.aisensy.com/aaas0k"
              className="w-full bg-[#25D366] hover:bg-[#20C157] text-white font-bold py-4 px-6 
                 rounded-full text-lg shadow-2xl flex items-center justify-center gap-3 
                 animate-bounce relative"
            >
              <Icon icon="ic:baseline-whatsapp" className='w-6 h-6' />
              <span className="absolute w-6 h-6 flex justify-center items-center -top-0 -right-0 
                       bg-red-500 text-white text-[10px] font-bold rounded-full animate-pulse">
                1
              </span>
              Message Me on WhatsApp
            </a>
          </div>

        </section>

        {/* FAQ Section – Premium Redesign */}
        <section
          id="faq"
          className="relative py-24 bg-[#FDFBF6] overflow-hidden"
        >
          {/* Background Glow */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] bg-[#C7A055]/10 blur-[120px] rounded-full" />
            <div className="absolute bottom-0 right-0 w-[25rem] h-[25rem] bg-[#EFD9B0]/20 blur-[100px] rounded-full" />
          </div>

          {/* Subtle Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.06] bg-[url('/assets/patterns/grid.svg')] bg-cover"></div>

          <div className="relative max-w-5xl mx-auto px-6">

            {/* Heading */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#182432] mb-4">
                Your Questions,
                <span className="text-[#C7A055]"> Answered Clearly</span>
              </h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                StraviX mentorship ke baare me sabse common doubts — honest,
                simple, aur practical answers yahan milenge.
              </p>
            </div>

            {/* FAQ List */}
            <div className="space-y-6 mb-20">

              {[
                {
                  q: "Kya mujhe pehle se digital marketing ya sales ka knowledge chahiye?",
                  a: "Bilkul nahi 🌟. Training zero se start hoti hai — beginner ho ya working professional, sab kuch step-by-step sikhaya jaata hai."
                },
                {
                  q: "Mujhe daily kitna time dena hoga?",
                  a: "Agar aap consistently 2–3 hours daily de sakte ho, toh aap easily results dekh paoge. Yahan smart work > hard work."
                },
                {
                  q: "Ye platform genuine hai?",
                  a: "100% genuine & registered. StraviX ek legal, verified aur transparent earning ecosystem hai — real system + real mentorship."
                },
                {
                  q: "Is mentorship me mujhe exactly kya milega?",
                  a: "Aapko milega personal mentorship, live support, digital skills training, aur ek powerful community jo aapko daily push karti hai."
                },
                {
                  q: "Kya investment karni padegi?",
                  a: "Haan, ek small one-time investment hoti hai jo aapke training resources, tools aur mentorship ke liye required hoti hai."
                },
                {
                  q: "Kya mujhe live support milta hai?",
                  a: "Haan 💬. Aapko WhatsApp mentorship, weekly sessions, Q&A support aur regular updates sab milte hain."
                }
              ].map((item, i) => (
                <details
                  key={i}
                  className="group bg-white/70 backdrop-blur-xl border border-[#EFD9B0]/40 
                     rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 
                     overflow-hidden"
                >
                  <summary className="flex justify-between items-center cursor-pointer 
                             px-6 py-5 text-left text-lg font-semibold text-[#182432] 
                             list-none select-none group-open:text-[#C7A055] transition-all">
                    <span>{item.q}</span>

                    {/* Icon */}
                    <div className="w-8 h-8 flex items-center justify-center rounded-full 
                            bg-[#C7A055]/10 text-[#C7A055] group-open:rotate-180 
                            transition-all duration-300">
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </summary>

                  <div className="px-6 pb-6 text-gray-600 text-base leading-relaxed border-t 
                          border-[#EFD9B0]/40 bg-gradient-to-r from-white via-[#FFFDF9] 
                          to-[#FFF5E4] animate-fadeIn">
                    {item.a}
                  </div>
                </details>
              ))}

            </div>

            {/* CTA Box */}
            <div className="relative bg-gradient-to-r from-[#C7A055] to-[#D8B464] 
                    rounded-3xl p-6 text-center shadow-2xl border border-[#EFD9B0]/40 
                    overflow-hidden">

              {/* Texture */}
              <div className="absolute inset-0 bg-[url('/assets/patterns/gold-wave.svg')] 
                      bg-cover opacity-15"></div>

              <p className="relative text-md md:text-2xl md:font-semibold mb-6 text-white z-10">
                ✨ Agar aapke doubts clear ho gaye —
                ab time hai action ka. Digital freedom journey start karein mere saath.
              </p>

              <a
                href="https://wa.aisensy.com/aaas0k"
                target="_blank"
                rel="noopener noreferrer"
                className="relative track-subscribe-btn inline-flex items-center justify-center 
                   bg-[#25D366] hover:bg-[#20BA5A] max-w-fit text-white font-bold py-3 px-4 
                   rounded-full text-[16px] md:text-xl transition-all duration-300 
                   transform hover:scale-105 shadow-xl hover:shadow-green-400/30 gap-1 z-10"
              >
                <Icon icon="ic:baseline-whatsapp" className='w-6 h-6' />
                Message on WhatsApp
              </a>
            </div>
          </div>
        </section>


        {/* Floating WhatsApp Button – Premium Edition */}
        <div className="fixed bottom-6 right-6 z-50 hidden md:block">
          <button
            onClick={() => setShowWhatsAppPopup(true)}
            aria-label="Open WhatsApp Chat"
            className="group relative bg-[#25D366] text-white p-4 rounded-full shadow-xl 
               hover:shadow-green-400/40 transform hover:scale-110 transition-all duration-300"
          >
            {/* Official WhatsApp Icon */}
            <Icon icon="ic:baseline-whatsapp" className='w-8 h-8' />

            {/* Notification Badge */}
            <span
              className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold 
                 px-1.5 py-[1px] rounded-full animate-pulse shadow-md"
            >
              1
            </span>
          </button>
        </div>


        {/* WhatsApp Popup */}
        {showWhatsAppPopup && (
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn">

            <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl border border-[#EFD9B0]/50 
                    shadow-[0_0_60px_rgba(199,160,85,0.25)] max-w-md w-full p-8 animate-slideUp">

              {/* Close Icon */}
              <button
                onClick={() => setShowWhatsAppPopup(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-[#C7A055] transition-all"
                aria-label="Close"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Icon Glow */}
              <div className="relative w-24 h-24 mx-auto mb-8">
                <div className="absolute inset-0 bg-[#25D366]/25 blur-2xl rounded-full animate-pulse"></div>
                <div className="relative w-24 h-24 text-white bg-[#25D366] rounded-3xl flex items-center justify-center shadow-xl">
                  <Icon icon="ic:baseline-whatsapp" className='w-12 h-12' />
                </div>
              </div>

              {/* Heading */}
              <h3 className="text-3xl font-extrabold text-[#182432] mb-3 text-center leading-snug">
                Start Your <span className="text-[#C7A055]">Digital Journey</span>
              </h3>

              {/* Description */}
              <p className="text-gray-700 mb-8 leading-relaxed text-center text-base md:text-lg">
                Message on WhatsApp and get <span className="font-semibold text-[#C7A055]">step-by-step mentorship</span>
                to build your online income — with clarity & confidence.
              </p>

              {/* CTA Button */}
              <a
                href="https://wa.aisensy.com/aaas0k"
                target="_blank"
                rel="noopener noreferrer"
                className="track-subscribe-btn flex items-center justify-center gap-3 bg-[#25D366] 
                   hover:bg-[#20C157] text-white font-bold max-w-fit py-2 px-4 rounded-full text-lg 
                   transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-400/30 mx-auto"
              >
                <Icon icon="ic:baseline-whatsapp" className='w-6 h-6' />

                Chat on WhatsApp
              </a>

              {/* Trust Line */}
              <p className="text-sm text-gray-500 mt-6 italic text-center">
                Direct mentorship • No spam • Real support 💬
              </p>
            </div>
          </div>
        )}


        <Footer />
      </div>
    </>
  );
}

export default App;
