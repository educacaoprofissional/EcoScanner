import { motion } from "motion/react";
import { GlassButton } from "./components/GlassButton";
import { GlassCard } from "./components/GlassCard";
import { FeatureCard } from "./components/FeatureCard";
import { Recycle, Lock, Leaf, Users, ChevronDown } from "lucide-react";

const FloatingOrb = ({
  className,
  delay = 0,
  duration = 8,
}: {
  className: string;
  delay?: number;
  duration?: number;
}) => (
  <motion.div
    className={`absolute rounded-full blur-3xl pointer-events-none ${className}`}
    animate={{ y: [0, -30, 0], x: [0, 15, 0], scale: [1, 1.08, 1] }}
    transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
  />
);

export default function App() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen relative overflow-hidden font-sans">
      {/* ── Background ────────────────────────────────────── */}
      <div className="fixed inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1781963749727-f12168518d43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxncmVlbiUyMGNpdHklMjBhZXJpYWwlMjBuYXR1cmUlMjBibHVlJTIwc2t5JTIwc3VzdGFpbmFiaWxpdHl8ZW58MXx8fHwxNzg1OTU5NjgyfDA&ixlib=rb-4.1.0&q=80&w=1920"
          alt="Paisagem verde com cidade ao fundo e céu azul"
          className="w-full h-full object-cover object-center scale-105"
        />
        {/* colour grading layers */}
        <div className="absolute inset-0 bg-gradient-to-b from-sky-400/30 via-teal-300/10 to-emerald-500/40" />
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 via-transparent to-green-400/20" />
        {/* vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_40%,_rgba(0,30,60,0.55)_100%)]" />
      </div>

      {/* ── Animated orbs ─────────────────────────────────── */}
      <div className="fixed inset-0 z-[1] pointer-events-none overflow-hidden">
        <FloatingOrb className="w-[600px] h-[600px] bg-sky-400/20 top-[-10%] left-[-8%]" delay={0} duration={10} />
        <FloatingOrb className="w-[500px] h-[500px] bg-emerald-400/20 top-[20%] right-[-12%]" delay={2} duration={12} />
        <FloatingOrb className="w-[400px] h-[400px] bg-teal-300/15 bottom-[5%] left-[20%]" delay={4} duration={9} />
        <FloatingOrb className="w-[300px] h-[300px] bg-blue-300/20 bottom-[30%] right-[10%]" delay={1} duration={11} />
      </div>

      {/* ── Navbar ────────────────────────────────────────── */}
      <nav className="fixed top-0 left-0 right-0 z-50">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400/70 to-sky-400/70 backdrop-blur-md border border-white/40 flex items-center justify-center shadow-lg">
              <Recycle className="w-5 h-5 text-white drop-shadow" />
            </div>
            <span className="text-white font-bold text-xl drop-shadow-lg tracking-wide">EcoScanner</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden md:flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-2 py-2 shadow-lg"
          >
            {(["sobre", "funcionalidades", "como-funciona"] as const).map((id, i) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="px-5 py-2 rounded-xl text-white/90 hover:text-white hover:bg-white/20 transition-all duration-200 font-medium text-sm"
              >
                {["Sobre", "Funcionalidades", "Como Funciona"][i]}
              </button>
            ))}
          </motion.div>
        </div>
      </nav>

      {/* ── Content ───────────────────────────────────────── */}
      <div className="relative z-10">

        {/* Hero */}
        <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-20">
          {/* badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 flex items-center gap-2 bg-white/15 backdrop-blur-md border border-white/25 rounded-full px-5 py-2 shadow-lg"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_2px_rgba(52,211,153,0.7)]" />
            <span className="text-white/95 text-sm font-medium tracking-wide">
              Tecnologia de descarte inteligente
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="text-center mb-10 max-w-4xl"
          >
            <h1
              className="text-5xl sm:text-7xl md:text-8xl font-black text-white mb-6 leading-none tracking-tight"
              style={{ textShadow: "0 2px 20px rgba(0,0,0,0.35), 0 0 60px rgba(52,211,153,0.25)" }}
            >
              Eco
              <span style={{
                background: "linear-gradient(135deg, #6ee7b7 0%, #38bdf8 50%, #a7f3d0 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>
                Scanner
              </span>
            </h1>
            <p className="text-2xl text-white/95 mb-4 drop-shadow-lg font-light tracking-wide">
              Lixeiras Inteligentes para um Futuro Sustentável
            </p>
            <p className="text-lg text-white/80 drop-shadow-md max-w-2xl mx-auto leading-relaxed">
              Tecnologia de reconhecimento que garante a separação correta de resíduos
            </p>
          </motion.div>

          {/* hero glass sphere */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, type: "spring", bounce: 0.4 }}
            className="mb-12"
          >
            <div className="relative w-56 h-56">
              <div
                className="absolute inset-0 rounded-full border-2 border-white/20 animate-spin"
                style={{ animationDuration: "20s" }}
              />
              <div
                className="absolute inset-3 rounded-full border border-white/15 animate-spin"
                style={{ animationDuration: "14s", animationDirection: "reverse" }}
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-emerald-400/30 to-sky-500/30 blur-2xl scale-110" />
              <div className="absolute inset-6 rounded-full bg-gradient-to-br from-white/40 via-emerald-300/30 to-sky-400/30 backdrop-blur-xl border-2 border-white/50 shadow-2xl flex items-center justify-center overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/50 to-transparent rounded-t-full" />
                <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-sky-300/20 to-transparent" />
                <Recycle className="w-16 h-16 text-white drop-shadow-2xl relative z-10" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex gap-4 flex-wrap justify-center"
          >
            <GlassButton onClick={() => scrollToSection("sobre")}>Conheça o Projeto</GlassButton>
            <GlassButton onClick={() => scrollToSection("funcionalidades")}>Funcionalidades</GlassButton>
          </motion.div>

          {/* scroll cue */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
            onClick={() => scrollToSection("sobre")}
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="text-white/50"
            >
              <ChevronDown className="w-7 h-7" />
            </motion.div>
          </motion.div>
        </section>

        {/* About */}
        <section id="sobre" className="min-h-screen flex items-center justify-center px-6 py-24">
          <div className="max-w-6xl mx-auto w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <p className="text-emerald-300 font-semibold uppercase tracking-widest text-sm mb-3 drop-shadow">
                Sobre o Projeto
              </p>
              <h2 className="text-5xl font-black text-white drop-shadow-2xl leading-tight">
                Uma nova era no descarte{" "}
                <br className="hidden md:block" />
                <span className="text-sky-300">de resíduos</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <GlassCard delay={0.2}>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400/60 to-sky-400/60 backdrop-blur-sm border border-white/30 flex items-center justify-center">
                    <Recycle className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white drop-shadow-lg">O Que é o EcoScanner?</h3>
                </div>
                <p className="text-white/90 text-lg leading-relaxed drop-shadow-md mb-4">
                  O EcoScanner é um sistema revolucionário de lixeiras inteligentes equipadas
                  com tecnologia de reconhecimento de resíduos. Cada lixeira possui sensores
                  avançados que identificam o tipo de material descartado.
                </p>
                <p className="text-white/90 text-lg leading-relaxed drop-shadow-md">
                  Se o resíduo não corresponder à categoria da lixeira (reciclável, orgânico
                  ou rejeito), um sistema de bloqueio é ativado automaticamente, educando o
                  usuário sobre a forma correta de descarte.
                </p>
              </GlassCard>

              <GlassCard delay={0.4}>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400/60 to-sky-400/60 backdrop-blur-sm border border-white/30 flex items-center justify-center">
                    <Leaf className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white drop-shadow-lg">Nossa Missão</h3>
                </div>
                <p className="text-white/90 text-lg leading-relaxed drop-shadow-md mb-4">
                  Transformar a gestão de resíduos através da tecnologia, promovendo uma
                  cultura de sustentabilidade e responsabilidade ambiental.
                </p>
                <p className="text-white/90 text-lg leading-relaxed drop-shadow-md">
                  Com o EcoScanner, cada pessoa se torna parte ativa da solução ambiental,
                  contribuindo para um planeta mais limpo e um futuro sustentável para as
                  próximas gerações.
                </p>
              </GlassCard>
            </div>

            {/* stat strip */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-10 grid grid-cols-3 gap-4"
            >
              {[
                { value: "95%", label: "precisão de identificação" },
                { value: "3×", label: "mais reciclagem eficiente" },
                { value: "0 kg", label: "de contaminação evitada" },
              ].map(({ value, label }) => (
                <div
                  key={label}
                  className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 px-6 py-5 text-center shadow-lg"
                >
                  <p className="text-3xl font-black text-white drop-shadow-lg mb-1">{value}</p>
                  <p className="text-white/70 text-sm leading-snug">{label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Features */}
        <section id="funcionalidades" className="min-h-screen flex items-center justify-center px-6 py-24">
          <div className="max-w-7xl mx-auto w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <p className="text-emerald-300 font-semibold uppercase tracking-widest text-sm mb-3 drop-shadow">
                Funcionalidades
              </p>
              <h2 className="text-5xl font-black text-white drop-shadow-2xl leading-tight">
                Tudo que o EcoScanner{" "}
                <br className="hidden md:block" />
                <span className="text-sky-300">oferece</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <FeatureCard
                icon={Lock}
                title="Sistema de Bloqueio"
                description="Bloqueio automático quando o resíduo não corresponde à categoria da lixeira, garantindo separação correta."
                delay={0.1}
              />
              <FeatureCard
                icon={Leaf}
                title="Impacto Ambiental"
                description="Contribui diretamente para a redução da contaminação de materiais recicláveis."
                delay={0.2}
              />
              <FeatureCard
                icon={Users}
                title="Educação Ambiental"
                description="Feedback instantâneo que educa os usuários sobre práticas corretas de descarte."
                delay={0.3}
              />
              <FeatureCard
                icon={Recycle}
                title="Reciclagem Eficiente"
                description="Aumenta significativamente a taxa de reciclagem através da separação adequada."
                delay={0.4}
              />
            </div>
          </div>
        </section>

        {/* How it Works */}
        <section id="como-funciona" className="min-h-screen flex items-center justify-center px-6 py-24">
          <div className="max-w-5xl mx-auto w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <p className="text-emerald-300 font-semibold uppercase tracking-widest text-sm mb-3 drop-shadow">
                Passo a passo
              </p>
              <h2 className="text-5xl font-black text-white drop-shadow-2xl leading-tight">
                Como <span className="text-sky-300">Funciona</span>
              </h2>
            </motion.div>

            <div className="relative space-y-6">
              {/* vertical connector */}
              <div className="absolute left-[31px] top-16 bottom-16 w-0.5 bg-gradient-to-b from-emerald-400/60 via-sky-400/40 to-transparent hidden md:block" />

              {[
                {
                  n: "1",
                  title: "Identificação do Resíduo",
                  body: "Sensores avançados de visão computacional e IA escaneiam o item descartado, identificando sua composição e categoria (reciclável, orgânico ou rejeito).",
                },
                {
                  n: "2",
                  title: "Validação Inteligente",
                  body: "O sistema compara o tipo de resíduo identificado com a categoria da lixeira. Se houver correspondência, a tampa se abre automaticamente.",
                },
                {
                  n: "3",
                  title: "Bloqueio e Orientação",
                  body: "Em caso de descarte incorreto, a lixeira permanece bloqueada e exibe orientações visuais e sonoras sobre onde descartar corretamente o item.",
                },
              ].map(({ n, title, body }, i) => (
                <GlassCard key={n} delay={0.2 + i * 0.2}>
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-400/60 to-sky-500/60 backdrop-blur-sm border-2 border-white/40 flex items-center justify-center shadow-xl relative z-10">
                      <span className="text-2xl font-black text-white drop-shadow-lg">{n}</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-lg">{title}</h3>
                      <p className="text-white/90 text-lg leading-relaxed drop-shadow-md">{body}</p>
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="mt-14 text-center"
            >
              <GlassButton>Saiba Mais Sobre a Tecnologia</GlassButton>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <GlassCard>
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-400/60 to-sky-400/60 backdrop-blur-md border border-white/40 flex items-center justify-center shadow-lg">
                    <Recycle className="w-6 h-6 text-white drop-shadow" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-white drop-shadow-lg">EcoScanner</h3>
                    <p className="text-white/70 text-sm">Juntos por um futuro mais sustentável</p>
                  </div>
                </div>
                <p className="text-white/60 text-sm">
                  © 2026 EcoScanner. Tecnologia para um planeta melhor.
                </p>
              </div>
            </GlassCard>
          </div>
        </footer>

      </div>
    </div>
  );
}
