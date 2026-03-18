/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { Check, X, BookOpen, Star, ShieldCheck, ArrowRight, Car, AlertTriangle, PlayCircle } from "lucide-react";

const Badge = ({ children, icon: Icon, color = "green" }: { children: React.ReactNode; icon: any; color?: "green" | "purple" | "gray" }) => {
  const colors = {
    green: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    purple: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    gray: "bg-white/5 text-gray-300 border-white/10"
  };

  return (
    <div className={`flex items-center gap-2 px-4 py-2 rounded-full border ${colors[color]} text-sm font-medium backdrop-blur-sm`}>
      <Icon size={16} />
      <span>{children}</span>
    </div>
  );
};

const SmartphoneMockup = () => (
  <div className="relative w-[280px] h-[560px] md:w-[300px] md:h-[600px] bg-gray-900 rounded-[3rem] border-8 border-gray-800 shadow-2xl mx-auto transform transition-transform hover:scale-105 duration-500">
    {/* Screen Content */}
    <div className="absolute inset-0 bg-gradient-to-b from-[#4C1D95] via-[#7C3AED] to-[#BE185D] rounded-[2.5rem] overflow-hidden flex flex-col items-center text-center p-6 border-4 border-black">
      {/* Status Bar Mockup */}
      <div className="w-full flex justify-between items-center text-white/70 text-[10px] mb-6 px-2">
        <span>9:41</span>
        <div className="flex gap-1">
          <div className="w-3 h-3 bg-white/70 rounded-full" />
          <div className="w-3 h-3 bg-white/70 rounded-full" />
        </div>
      </div>

      {/* Ebook Content Scaled for Phone */}
      <div className="flex-1 flex flex-col items-center justify-center w-full">
        {/* Decorative corners */}
        <div className="absolute top-10 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -mr-10 -mt-10" />
        <div className="absolute bottom-10 left-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -ml-10 -mb-10" />

        {/* Icon */}
        <div className="mb-6 w-16 h-16 rounded-full border border-white/30 flex items-center justify-center bg-white/5 backdrop-blur-sm shadow-lg">
          <Car className="text-white w-8 h-8" strokeWidth={1.5} />
        </div>

        {/* Top Text */}
        <p className="text-[10px] tracking-[0.2em] font-bold text-white/80 uppercase mb-4">
          Para Mulheres Que Querem
        </p>

        {/* Title */}
        <h1 className="font-display font-bold text-5xl leading-[0.9] text-white mb-1 drop-shadow-lg tracking-tight">
          DIRIGIR
        </h1>
        <h1 className="font-display font-bold text-4xl leading-[0.9] text-pink-200 mb-6 drop-shadow-lg tracking-tight">
          SEM MEDO
        </h1>

        {/* Divider */}
        <div className="flex items-center gap-2 w-full justify-center mb-6 opacity-50">
          <div className="h-px w-12 bg-white" />
          <div className="w-1.5 h-1.5 rotate-45 bg-white" />
          <div className="h-px w-12 bg-white" />
        </div>

        {/* Subtitle */}
        <p className="text-sm font-medium text-white/90 leading-relaxed max-w-[220px]">
          O guia prático para recuperar sua <span className="italic">autonomia</span> e a liberdade de dirigir
        </p>


      </div>
    </div>

    {/* Notch */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-20" />
  </div>
);

const SocialProofNotification = () => {
  const names = [
    "Sandra", "Cláudia", "Maria", "Juliana", "Beatriz", "Renata", "Fernanda",
    "Patrícia", "Aline", "Bruna", "Débora", "Helena", "Isabela", "Camila",
    "Nathália", "Priscila", "Raquel", "Sabrina", "Vanessa", "Paula",
    "Letícia", "Larissa", "Gisele", "Andressa", "Tatiane", "Daniela", "Cristiane",
    "Amanda", "Thais", "Gabriela", "Mariana", "Roberta", "Silvia", "Simone", "Tatiana"
  ];

  const [currentName, setCurrentName] = React.useState("");
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const showRandom = () => {
      const idx = Math.floor(Math.random() * names.length);
      setCurrentName(names[idx]);
      setIsVisible(true);
      setTimeout(() => setIsVisible(false), 5000); // Exibe por 5 segundos
    };

    const initialDelay = setTimeout(showRandom, 4000);
    const interval = setInterval(showRandom, 15000);

    return () => {
      clearTimeout(initialDelay);
      clearInterval(interval);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -100 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed bottom-6 left-6 z-50 flex items-center gap-3 bg-[#10b981] text-white px-5 py-3.5 rounded-xl shadow-2xl border border-emerald-400/20 max-w-sm pointer-events-none"
    >
      <div className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-white/30 bg-white/10 shrink-0">
        <Check size={16} className="text-white" strokeWidth={3} />
      </div>
      <p className="text-sm font-medium">
        <span className="font-bold">{currentName}</span> acabou de comprar
      </p>
    </motion.div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden selection:bg-pink-500/30">
      {/* Top Notification Bar */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-center py-2 px-4 text-xs md:text-sm font-bold tracking-wide uppercase">
        Sua liberdade de dirigir começa agora
      </div>



      {/* Hero Section */}
      <main className="relative pt-8 pb-20 px-4 md:px-6 max-w-7xl mx-auto">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] -z-10 pointer-events-none" />
        <div className="absolute top-20 right-1/4 w-[400px] h-[400px] bg-pink-600/20 rounded-full blur-[100px] -z-10 pointer-events-none" />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text */}
          <div className="text-center lg:text-left space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-xs font-bold uppercase tracking-wider mb-4"
            >
              <Star size={12} fill="currentColor" />
              Método Exclusivo para Mulheres
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.1] tracking-tight"
            >
              Perca o medo de dirigir e <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">pegue no volante</span> com <span className="text-white underline decoration-pink-500 decoration-4 underline-offset-4">naturalidade</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto lg:mx-0"
            >
              O guia prático para você vencer a insegurança, dominar o volante e conquistar sua independência no trânsito em menos de <span className="text-pink-400 font-bold">15 dias</span>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap justify-center lg:justify-start gap-3"
            >
              <Badge icon={BookOpen} color="gray">Leitura Rápida</Badge>
              <Badge icon={ShieldCheck} color="green">Método Comprovado</Badge>
            </motion.div>
          </div>

          {/* Right Column: Smartphone Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: 30 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative flex justify-center lg:justify-end perspective-1000"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-pink-600/30 to-purple-600/30 blur-[60px] rounded-full -z-10" />

              {/* Decorative images */}
              <motion.div
                initial={{ opacity: 0, x: 20, rotate: 0 }}
                animate={{ opacity: 1, x: 0, rotate: -6 }}
                transition={{ delay: 0.6, duration: 1 }}
                className="absolute -left-20 top-20 w-48 h-48 rounded-2xl overflow-hidden border-4 border-white/10 shadow-2xl z-0 hidden xl:block transition-transform group-hover:rotate-[-12deg] duration-700"
              >
                <img src="/22644.jpg" alt="Foco ao dirigir" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20, rotate: 0 }}
                animate={{ opacity: 1, x: 0, rotate: 12 }}
                transition={{ delay: 0.8, duration: 1 }}
                className="absolute -right-20 bottom-20 w-48 h-48 rounded-2xl overflow-hidden border-4 border-white/10 shadow-2xl z-0 hidden xl:block transition-transform group-hover:rotate-[18deg] duration-700"
              >
                <img src="/69454.jpg" alt="Liberdade ao dirigir" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
              </motion.div>

              <SmartphoneMockup />
            </div>
          </motion.div>
        </div>

        {/* Comparison Visual (Old vs New style) */}
        <div className="mt-32 relative">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-display font-bold">Sua transformação em <span className="text-pink-500">15 dias</span></h2>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">

            {/* Card 1: The Problem */}
            <motion.div
              initial={{ opacity: 0, x: -50, rotate: -3 }}
              whileInView={{ opacity: 1, x: 0, rotate: -3 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full max-w-xs"
            >
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-gray-800 text-gray-300 px-4 py-1 rounded-full text-sm font-bold border border-gray-700">
                Antes
              </div>

              <div className="bg-gray-200 rounded-[2.5rem] p-4 shadow-2xl border-8 border-gray-300 opacity-90 grayscale-[0.5]">
                <div className="bg-white rounded-[2rem] overflow-hidden h-[400px] flex flex-col items-center p-6 text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                    <AlertTriangle className="text-red-500 w-8 h-8" />
                  </div>
                  <h3 className="text-gray-800 font-bold text-xl mb-2">Dependência</h3>
                  <p className="text-gray-500 text-sm mb-6">Carro na garagem, dependendo de marido, pai ou Uber para tudo.</p>

                  <div className="w-full space-y-2">
                    <div className="h-8 w-full bg-red-50 rounded flex items-center px-3 text-xs text-red-400 gap-2">
                      <X size={12} /> Ansiedade
                    </div>
                    <div className="h-8 w-full bg-red-50 rounded flex items-center px-3 text-xs text-red-400 gap-2">
                      <X size={12} /> Medo de errar
                    </div>
                    <div className="h-8 w-full bg-red-50 rounded flex items-center px-3 text-xs text-red-400 gap-2">
                      <X size={12} /> Suor frio
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Arrow */}
            <div className="hidden md:block text-gray-600">
              <ArrowRight size={40} />
            </div>

            {/* Card 2: The Solution */}
            <motion.div
              initial={{ opacity: 0, x: 50, rotate: 3 }}
              whileInView={{ opacity: 1, x: 0, rotate: 3 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full max-w-xs z-10"
            >
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-gradient-to-r from-pink-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg border border-white/20">
                Depois do Método
              </div>

              <div className="bg-gray-900 rounded-[2.5rem] p-4 shadow-[0_20px_60px_-15px_rgba(139,92,246,0.5)] border-8 border-gray-800 relative overflow-hidden">
                <div className="bg-gray-800 rounded-[2rem] overflow-hidden h-[400px] flex flex-col items-center relative">
                  <img
                    src="/4938.jpg"
                    alt="Mulher feliz dirigindo"
                    className="absolute inset-0 w-full h-full object-cover opacity-70"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />

                  <div className="relative z-10 p-6 flex flex-col h-full w-full">
                    <div className="mt-auto">
                      <h3 className="text-white font-bold text-2xl mb-1">Liberdade ✨</h3>
                      <p className="text-gray-300 text-sm mb-4">Você no controle da sua vida e do seu carro.</p>

                      <div className="space-y-2">
                        <div className="h-8 w-full bg-green-500/20 backdrop-blur-md border border-green-500/20 rounded flex items-center px-3 gap-2 text-green-400 text-xs font-bold">
                          <Check size={12} /> Autonomia Total
                        </div>
                        <div className="h-8 w-full bg-green-500/20 backdrop-blur-md border border-green-500/20 rounded flex items-center px-3 gap-2 text-green-400 text-xs font-bold">
                          <Check size={12} /> Segurança
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </main>

      {/* Problem Section (New) */}
      <section className="relative">
        {/* Dark Header */}
        <div className="bg-[#18181b] py-16 px-4 text-center relative z-10 border-t border-white/5">
          <div className="max-w-4xl mx-auto">
            <AlertTriangle className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
            <h2 className="text-2xl md:text-4xl font-display font-bold mb-4 leading-tight">
              Sua CNH está na gaveta? <br className="hidden md:block" />
              O carro está parado na garagem?
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Isso acontece porque o medo te paralisa e cria desculpas na sua mente...
            </p>
            <span className="bg-yellow-400 text-black font-bold px-6 py-2 text-lg md:text-xl rounded-sm inline-block transform -rotate-1">
              E quem não enfrenta, perde a liberdade!
            </span>
          </div>
        </div>

        {/* Light Body */}
        <div className="bg-[#f5f5f5] text-gray-800 py-20 px-4">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">

            {/* Left Text & Grid */}
            <div className="flex-1 w-full">
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-4 text-gray-500 font-medium">
                  <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                    <X className="text-red-500 w-5 h-5" />
                  </div>
                  Por isso se você ainda sente isso...
                </div>
                <h3 className="text-4xl md:text-5xl font-display font-bold mb-2 leading-tight">
                  Pare <span className="text-red-600 underline decoration-4 underline-offset-4">imediatamente!</span>
                </h3>
                <p className="text-gray-600 text-lg">Esse ciclo de medo está te custando caro.</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: "👻", title: "Pânico", desc: "Ao pegar no volante" },
                  { icon: "😰", title: "Ansiedade", desc: "Dias antes de dirigir" },
                  { icon: "🚧", title: "Limitação", desc: "Perde oportunidades" },
                  { icon: "💸", title: "Prejuízo", desc: "Gastos com Uber/Táxi" }
                ].map((item, i) => (
                  <div key={i} className="bg-white p-5 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                    <div className="text-3xl mb-3">{item.icon}</div>
                    <div className="font-bold text-lg text-gray-900">{item.title}</div>
                    <div className="text-sm text-gray-500">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Phone - Dependency Chat */}
            <div className="flex-1 relative w-full max-w-sm mx-auto lg:max-w-none flex justify-center">
              {/* Arrow */}
              <div className="absolute top-0 left-0 -translate-x-8 -translate-y-8 hidden lg:block">
                <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-red-500 rotate-12">
                  <path d="M10 50 C 20 20, 50 10, 80 30" stroke="currentColor" strokeWidth="4" fill="none" markerEnd="url(#arrowhead)" />
                  <defs>
                    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                      <polygon points="0 0, 10 3.5, 0 7" fill="currentColor" />
                    </marker>
                  </defs>
                </svg>
              </div>

              <div className="relative w-[280px] h-[560px] bg-gray-900 rounded-[3rem] border-8 border-gray-800 shadow-2xl">
                {/* Screen */}
                <div className="absolute inset-0 bg-gray-100 rounded-[2.5rem] overflow-hidden flex flex-col">
                  {/* Chat Header */}
                  <div className="bg-emerald-600 p-4 pt-10 text-white flex items-center gap-3 shadow-md">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center font-bold">A</div>
                    <div>
                      <div className="font-bold text-sm">Amor ❤️</div>
                      <div className="text-[10px] opacity-80">Online</div>
                    </div>
                  </div>

                  {/* Chat Messages */}
                  <div className="flex-1 p-4 space-y-4 overflow-hidden bg-[#e5ddd5]">
                    <div className="flex justify-end">
                      <div className="bg-[#dcf8c6] text-gray-800 p-3 rounded-lg rounded-tr-none text-xs shadow-sm max-w-[80%]">
                        Amor, pode me buscar no trabalho hoje? Tá chovendo muito... 🌧️
                        <div className="text-[9px] text-gray-500 text-right mt-1">17:45</div>
                      </div>
                    </div>

                    <div className="flex justify-start">
                      <div className="bg-white text-gray-800 p-3 rounded-lg rounded-tl-none text-xs shadow-sm max-w-[80%]">
                        Hoje não consigo, tô preso numa reunião. Pede um Uber.
                        <div className="text-[9px] text-gray-500 text-right mt-1">17:48</div>
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <div className="bg-[#dcf8c6] text-gray-800 p-3 rounded-lg rounded-tr-none text-xs shadow-sm max-w-[80%]">
                        Mas tá dando R$ 50,00 o Uber! 😭
                        <div className="text-[9px] text-gray-500 text-right mt-1">17:49</div>
                      </div>
                    </div>

                    <div className="flex justify-start">
                      <div className="bg-white text-gray-800 p-3 rounded-lg rounded-tl-none text-xs shadow-sm max-w-[80%]">
                        Poxa vida... O carro tá aí na garagem parado. Tenta ir devagarzinho.
                        <div className="text-[9px] text-gray-500 text-right mt-1">17:50</div>
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <div className="bg-[#dcf8c6] text-gray-800 p-3 rounded-lg rounded-tr-none text-xs shadow-sm max-w-[80%]">
                        Não consigo... tenho medo de bater. Vou de ônibus mesmo. 😔
                        <div className="text-[9px] text-gray-500 text-right mt-1">17:51</div>
                      </div>
                    </div>
                  </div>

                  {/* Chat Input Mockup */}
                  <div className="bg-gray-200 p-3 flex gap-2 items-center">
                    <div className="flex-1 h-8 bg-white rounded-full"></div>
                    <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center text-white">
                      <ArrowRight size={14} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Content Preview Section */}
      <section className="py-20 px-4 bg-white/5 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">O que você vai <span className="text-pink-500">aprender</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Não é apenas teoria. É um método passo a passo para reprogramar sua mente e dominar o veículo.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Entendendo o Medo", desc: "Descubra a raiz da sua insegurança e como desligar o gatilho da ansiedade.", icon: "🧠" },
              { title: "Domínio do Veículo", desc: "Técnicas simples para sentir o carro como uma extensão do seu corpo.", icon: "🚗" },
              { title: "Trânsito Real", desc: "Como lidar com ladeiras, balizas e rodovias sem suar frio.", icon: "🚦" }
            ].map((item, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Reinforcement */}
      <section className="py-24 px-4 bg-gradient-to-b from-transparent to-[#0f0f0f]">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1 relative h-[600px] w-full rounded-[2.5rem] overflow-hidden group shadow-2xl border-4 border-white/5"
          >
            <img src="/69454.jpg" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-105" alt="Mulher feliz dirigindo" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
            <div className="absolute bottom-10 left-10 right-10">
              <h3 className="text-3xl font-bold text-white mb-3">Um mundo de possibilidades se abre...</h3>
              <p className="text-gray-200 text-lg font-medium">Ir ao mercado, buscar os filhos, viajar no fim de semana. Agora é você quem decide para onde quer ir.</p>
            </div>
          </motion.div>

          <div className="order-1 lg:order-2 space-y-10">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-6xl font-display font-bold leading-tight"
              >
                A <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">liberdade</span> de ir e vir
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-gray-400 text-xl leading-relaxed mt-6"
              >
                Não é apenas sobre dirigir um carro, é sobre <span className="italic">retomar o controle</span> da sua vida. Imagine entrar no veículo, colocar sua música favorita e simplesmente sair.
              </motion.p>
            </div>

            <div className="flex flex-col gap-6">
              {[
                { title: "Passeios sem estresse", desc: "Aproveite cada quilômetro com quem você ama.", icon: "👨‍👩‍👧‍👦" },
                { title: "Autonomia profissional", desc: "Chegue onde quiser por conta própria.", icon: "💼" },
                { title: "Rotina sob seu comando", desc: "Nunca mais dependa de horários alheios.", icon: "⏱️" }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (i * 0.1) }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-2xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-2xl">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-white">{item.title}</h4>
                    <p className="text-gray-400">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Two Options Section */}
      <section className="py-20 px-4 bg-white text-gray-900 relative overflow-hidden">
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900">Agora você tem duas opções:</h2>
          </div>

          <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch relative">
            {/* "OU" in the middle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 font-black text-8xl text-gray-100 select-none pointer-events-none hidden md:block opacity-50">
              ou
            </div>

            {/* Option 1 */}
            <div className="flex-1 bg-gray-50 rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center text-5xl mb-6 shadow-inner">
                😌
              </div>
              <span className="bg-red-500 text-white px-4 py-1 rounded-full text-sm font-bold mb-4">Opção 01</span>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">A Zona de Conforto</h3>
              <ul className="space-y-3 text-left w-full max-w-xs mx-auto text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-xl">👉</span> Ignorar tudo que você viu
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-xl">👉</span> Continuar dependendo de carona
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-xl">👉</span> Carro parado na garagem
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-xl">👉</span> Medo e ansiedade constantes
                </li>
              </ul>
            </div>

            {/* Option 2 */}
            <div className="flex-1 bg-white rounded-3xl p-8 border-2 border-purple-500 shadow-xl flex flex-col items-center text-center relative transform md:-translate-y-4 z-10">
              <div className="w-24 h-24 bg-purple-100 rounded-full flex items-center justify-center text-5xl mb-6 shadow-inner">
                🤩
              </div>
              <span className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-bold mb-4">Opção 02</span>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">A Mudança Definitiva</h3>
              <ul className="space-y-3 text-left w-full max-w-xs mx-auto text-gray-700 font-medium">
                <li className="flex items-start gap-2">
                  <div className="bg-green-500 rounded-full p-0.5 mt-1 shrink-0"><Check size={12} className="text-white" strokeWidth={4} /></div> Aproveitar a oportunidade
                </li>
                <li className="flex items-start gap-2">
                  <div className="bg-green-500 rounded-full p-0.5 mt-1 shrink-0"><Check size={12} className="text-white" strokeWidth={4} /></div> Conquistar sua independência
                </li>
                <li className="flex items-start gap-2">
                  <div className="bg-green-500 rounded-full p-0.5 mt-1 shrink-0"><Check size={12} className="text-white" strokeWidth={4} /></div> Dirigir para onde quiser
                </li>
                <li className="flex items-start gap-2">
                  <div className="bg-green-500 rounded-full p-0.5 mt-1 shrink-0"><Check size={12} className="text-white" strokeWidth={4} /></div> Segurança e confiança
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
              É com você. <span className="bg-yellow-400 px-2 inline-block transform -rotate-1">Qual você escolhe?</span>
            </h3>
          </div>
        </div>
      </section>

      {/* Special Offer Section */}
      <section className="py-10 px-4 bg-[#f5f5f5]">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-gray-100">
            <div className="grid lg:grid-cols-2 gap-8 p-8 lg:p-12 items-center">

              {/* Left: Mockup */}
              <div className="relative flex justify-center items-center">
                <div className="relative z-10 transform scale-90 lg:scale-100">
                  <SmartphoneMockup />
                </div>

                {/* Floating Elements for "Collage" feel */}
                <div className="absolute top-10 -left-4 bg-white p-3 rounded-xl shadow-lg border border-gray-100 transform -rotate-6 hidden md:block">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600"><Check size={16} /></div>
                    <span className="font-bold text-xs text-gray-800">Aprovado</span>
                  </div>
                </div>
                <div className="absolute bottom-20 -right-4 bg-white p-3 rounded-xl shadow-lg border border-gray-100 transform rotate-6 hidden md:block">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center text-pink-600"><Star size={16} /></div>
                    <span className="font-bold text-xs text-gray-800">5 Estrelas</span>
                  </div>
                </div>

                {/* Badge */}
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-gradient-to-r from-pink-600 to-purple-600 text-white px-8 py-2 rounded-full font-bold shadow-lg z-20 whitespace-nowrap">
                  OFERTA ESPECIAL
                </div>
              </div>

              {/* Right: Pricing & CTA */}
              <div className="text-center lg:text-left pt-8 lg:pt-0">
                <div className="flex items-center justify-center lg:justify-start gap-2 font-display text-2xl font-bold text-gray-900 mb-8">
                  <Car className="text-pink-500 w-8 h-8" />
                  <span>Direção Sem Medo</span>
                </div>

                <div className="space-y-2 mb-8">
                  <p className="text-gray-500 text-lg">De <span className="line-through text-red-500">R$ 67,00</span> por:</p>
                  <h3 className="text-5xl md:text-6xl font-black text-green-600 tracking-tight">
                    R$ 37,00
                  </h3>
                  <p className="text-gray-500">Pagamento Único</p>
                </div>

                <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full font-bold text-sm mb-8 border border-green-100">
                  <div className="bg-green-500 rounded-full p-0.5"><Check size={10} className="text-white" strokeWidth={4} /></div>
                  Você economiza R$ 30,00
                </div>

                <button
                  onClick={() => window.open('https://pay.hotmart.com/J104718348Y', '_blank')}
                  className="w-full bg-[#65a30d] hover:bg-[#4d7c0f] text-white font-bold py-4 rounded-xl text-xl shadow-lg transition-transform hover:scale-[1.02] active:scale-[0.98] mb-6 cursor-pointer"
                >
                  Quero perder o medo de dirigir
                </button>

                <div className="flex items-center justify-center lg:justify-start gap-4 text-gray-400 text-xs font-medium">
                  <span>Compra Única</span>
                  <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="14" rx="2" /><line x1="2" y1="10" x2="22" y2="10" /></svg>
                    Cartão de Crédito
                  </div>
                  <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l16 16" /><path d="M4 20L20 4" /></svg>
                    PIX
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Recap & Bonuses Section */}
      <section className="py-16 px-4 bg-[#f5f5f5] text-gray-900">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-center mb-8 text-black">
            Recapitulando o que você irá receber...
          </h2>

          <div className="bg-white p-6 md:p-10 rounded-xl shadow-lg border border-gray-200">
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-4 border-b border-gray-100 pb-4">
                <div className="flex items-center gap-3">
                  <div className="bg-green-500 rounded text-white p-0.5">
                    <Check size={16} strokeWidth={4} />
                  </div>
                  <span className="font-bold text-lg md:text-xl">Ebook: Dirigir Sem Medo</span>
                </div>
                <span className="text-red-500 font-bold text-lg md:text-xl line-through decoration-2 decoration-red-500/50">R$ 47,00</span>
              </div>

              <div className="flex items-center justify-between gap-4 border-b border-gray-100 pb-4">
                <div className="flex items-center gap-3">
                  <div className="bg-green-500 rounded text-white p-0.5">
                    <Check size={16} strokeWidth={4} />
                  </div>
                  <div>
                    <span className="font-bold text-lg md:text-xl">Bônus 1:</span>
                    <span className="text-gray-600 ml-1 block md:inline">Mecânica Básica para Mulheres</span>
                  </div>
                </div>
                <span className="text-red-500 font-bold text-lg md:text-xl line-through decoration-2 decoration-red-500/50">R$ 10,00</span>
              </div>

              <div className="flex items-center justify-between gap-4 border-b border-gray-100 pb-4">
                <div className="flex items-center gap-3">
                  <div className="bg-green-500 rounded text-white p-0.5">
                    <Check size={16} strokeWidth={4} />
                  </div>
                  <div>
                    <span className="font-bold text-lg md:text-xl">Bônus 2:</span>
                    <span className="text-gray-600 ml-1 block md:inline">Checklist: Segurança Antes de Sair</span>
                  </div>
                </div>
                <span className="text-red-500 font-bold text-lg md:text-xl line-through decoration-2 decoration-red-500/50">R$ 10,00</span>
              </div>

              <div className="text-center pt-8 pb-4 border-t border-gray-100 mt-4">
                <p className="text-lg md:text-xl font-medium text-gray-800 mb-2">
                  Tudo isso deveria custar <span className="text-red-600 font-bold">R$ 67,00</span>
                </p>
                <p className="text-lg md:text-xl font-bold text-gray-900 leading-tight">
                  Mas hoje você tem acesso ao ebook Dirigir Sem Medo <br className="hidden md:block" />
                  junto com todos os bônus por apenas...
                </p>
                <p className="text-5xl md:text-6xl font-black text-green-600 tracking-tight mt-4">
                  R$ 37,00
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-black/20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-display font-bold mb-10 text-center">Perguntas Frequentes</h2>
          <div className="space-y-4">
            {[
              { q: "Serve para quem tem medo de rodovia?", a: "Sim! Temos um capítulo inteiro dedicado a altas velocidades e troca de faixas em rodovias." },
              { q: "O acesso é vitalício?", a: "Sim, você compra uma vez e o ebook é seu para sempre, incluindo futuras atualizações." },
              { q: "E se eu não gostar?", a: "Você tem 7 dias de garantia incondicional. Se não gostar, devolvemos 100% do seu dinheiro." },
              { q: "Como recebo o material?", a: "Imediatamente após a confirmação do pagamento, você recebe o link de download no seu e-mail." }
            ].map((faq, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="font-bold text-lg mb-2 text-white">{faq.q}</h3>
                <p className="text-gray-400">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-900/20 pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">
            Pare de perder oportunidades por <br /> <span className="text-pink-500">medo de dirigir</span>
          </h2>
          <div className="flex flex-col items-center gap-6">
            <div className="text-5xl font-bold text-white">
              <span className="text-2xl text-gray-500 line-through mr-4">R$ 67,00</span>
              R$ 37,00
            </div>
            <button
              onClick={() => window.open('https://pay.hotmart.com/J104718348Y', '_blank')}
              className="group relative inline-flex items-center justify-center gap-2 px-12 py-5 text-xl font-bold text-white transition-all duration-200 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full hover:from-pink-500 hover:to-purple-500 hover:scale-105 shadow-[0_0_50_px_-10px_rgba(236,72,153,0.6)] cursor-pointer"
            >
              GARANTIR MEU ACESSO AGORA
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <ShieldCheck size={16} className="text-green-500" />
              <span>Compra 100% Segura e Garantia de 7 Dias</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} Direção Sem Medo. Todos os direitos reservados.</p>
        <p className="mt-2">Este produto não garante a obtenção de resultados. Qualquer referência ao desempenho de uma estratégia não deve ser interpretada como uma garantia de resultados.</p>
      </footer>
      <SocialProofNotification />
    </div>
  );
}
