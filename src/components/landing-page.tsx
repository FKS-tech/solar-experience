"use client";

import { FormEvent, ReactNode, useEffect, useMemo, useRef, useState } from "react";
import { Icons } from "./icons";

const whatsappLink = "https://wa.me/5511999990000?text=Ol%C3%A1%2C%20quero%20um%20or%C3%A7amento%20da%20Solar%20Experience";

const navItems = [
  { label: "Sobre", href: "#sobre" },
  { label: "Benefícios", href: "#beneficios" },
  { label: "Como funciona", href: "#processo" },
  { label: "Soluções", href: "#solucoes" },
  { label: "FAQ", href: "#faq" },
];

const benefits = [
  { icon: Icons.chart, title: "Economia na conta de luz", text: "Projetos dimensionados para reduzir custos e tornar o gasto com energia mais previsível." },
  { icon: Icons.home, title: "Valorização do imóvel", text: "Sistemas fotovoltaicos aumentam atratividade, eficiência e percepção de modernidade do patrimônio." },
  { icon: Icons.leaf, title: "Energia limpa", text: "Produza energia renovável e reduza a dependência de fontes com maior impacto ambiental." },
  { icon: Icons.monitor, title: "Monitoramento inteligente", text: "Acompanhe geração, economia estimada e desempenho por meio de indicadores simples." },
  { icon: Icons.wrench, title: "Suporte técnico", text: "Time especializado para orientar, resolver dúvidas e acompanhar o pós-venda com proximidade." },
  { icon: Icons.map, title: "Projeto personalizado", text: "Cada proposta considera consumo, telhado, área disponível, objetivos e perfil de investimento." },
];

const steps = [
  "Análise da conta de energia",
  "Estudo técnico",
  "Proposta personalizada",
  "Instalação",
  "Homologação",
  "Acompanhamento pós-venda",
];

const solutions = [
  { icon: Icons.home, title: "Residencial", text: "Mais conforto para sua família, menor impacto das bandeiras tarifárias e autonomia energética no dia a dia." },
  { icon: Icons.building, title: "Comercial", text: "Eficiência para empresas que querem proteger margens, planejar custos e fortalecer compromissos ESG." },
  { icon: Icons.tractor, title: "Rural", text: "Projetos para propriedades, irrigação, refrigeração, granjas e operações que demandam energia constante." },
  { icon: Icons.users, title: "Condomínios", text: "Soluções compartilhadas para áreas comuns, redução de custos coletivos e implantação com governança clara." },
];

const stats = [
  { value: "+480", label: "projetos instalados" },
  { value: "R$ 18 mi", label: "em economia projetada" },
  { value: "+1.200", label: "clientes atendidos" },
  { value: "9", label: "anos de experiência" },
];

const testimonials = [
  { name: "Marina Duarte", role: "Cliente residencial em Campinas", text: "A equipe explicou tudo com transparência. Em poucos meses já percebemos a redução na conta e o app de monitoramento virou parte da rotina." },
  { name: "Rafael Nogueira", role: "Diretor de operações", text: "Precisávamos previsibilidade para a loja. A proposta veio clara, a instalação foi organizada e o suporte continuou depois da entrega." },
  { name: "Helena Prado", role: "Produtora rural", text: "O projeto considerou nossos horários de consumo e a operação da fazenda. Foi uma decisão estratégica para reduzir custos sem parar a produção." },
];

const faqs = [
  { question: "Em quanto tempo começo a economizar?", answer: "Após instalação, vistoria e homologação junto à distribuidora, o sistema começa a gerar créditos de energia. O prazo varia conforme a concessionária e as características do projeto." },
  { question: "A Solar Experience cuida da homologação?", answer: "Sim. A experiência completa inclui documentação, acompanhamento técnico e comunicação necessária para a aprovação do sistema fotovoltaico." },
  { question: "Preciso trocar toda a instalação elétrica?", answer: "Nem sempre. Durante o estudo técnico avaliamos o padrão de entrada, quadro elétrico, telhado e demais pontos para indicar eventuais adequações." },
  { question: "O sistema funciona em dias nublados?", answer: "Sim. A geração pode ser menor, mas os módulos continuam produzindo energia com radiação difusa. O dimensionamento considera médias históricas da região." },
  { question: "Existe suporte depois da instalação?", answer: "Sim. Monitoramos indicadores, orientamos o cliente e oferecemos suporte pós-venda para manter a performance e a tranquilidade da operação." },
];

function scrollToQuote() {
  document.getElementById("orcamento")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold: 0.14 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`${className} reveal ${visible ? "reveal-visible" : ""}`}>
      {children}
    </div>
  );
}

function SectionHeader({ eyebrow, title, description, align = "center" }: { eyebrow: string; title: string; description: string; align?: "center" | "left" }) {
  return (
    <div className={`mx-auto max-w-3xl ${align === "center" ? "text-center" : "text-left mx-0"}`}>
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-amber-500">{eyebrow}</p>
      <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">{title}</h2>
      <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">{description}</p>
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/50 bg-white/85 shadow-sm shadow-slate-900/5 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8" aria-label="Navegação principal">
        <a href="#topo" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-amber-400 via-orange-500 to-emerald-500 text-white shadow-lg shadow-amber-500/25 transition-transform group-hover:scale-105">
            <Icons.sun className="h-6 w-6" />
          </span>
          <span className="leading-tight">
            <span className="block text-lg font-black tracking-tight text-slate-950">Solar</span>
            <span className="block text-sm font-semibold text-emerald-600">Experience</span>
          </span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-semibold text-slate-600 transition hover:text-slate-950">
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a href={whatsappLink} target="_blank" rel="noreferrer" className="rounded-full border border-slate-200 px-5 py-3 text-sm font-bold text-slate-700 transition hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-700">
            WhatsApp
          </a>
          <button onClick={scrollToQuote} className="rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-slate-950/20 transition hover:-translate-y-0.5 hover:bg-emerald-600">
            Fazer orçamento
          </button>
        </div>

        <button aria-label="Abrir menu" onClick={() => setOpen((current) => !current)} className="grid h-11 w-11 place-items-center rounded-full border border-slate-200 text-slate-800 lg:hidden">
          {open ? <Icons.x /> : <Icons.menu />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-slate-100 bg-white px-5 py-5 shadow-xl lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-2xl px-4 py-3 text-base font-semibold text-slate-700 hover:bg-amber-50">
                {item.label}
              </a>
            ))}
            <button onClick={() => { setOpen(false); scrollToQuote(); }} className="mt-3 rounded-full bg-slate-950 px-5 py-4 text-sm font-bold text-white">
              Fazer orçamento
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

function HeroSection() {
  return (
    <section id="topo" className="relative isolate overflow-hidden bg-[radial-gradient(circle_at_top_left,#fff7ed_0,#ffffff_32%,#ecfdf5_75%)] pt-32 sm:pt-36 lg:pt-40">
      <div className="absolute -left-32 top-24 h-72 w-72 rounded-full bg-amber-300/30 blur-3xl" />
      <div className="absolute right-0 top-10 h-96 w-96 rounded-full bg-emerald-300/25 blur-3xl" />
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 pb-20 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pb-28">
        <Reveal>
          <div className="relative z-10">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white/80 px-4 py-2 text-sm font-bold text-slate-700 shadow-sm">
              <Icons.bolt className="h-4 w-4 text-amber-500" /> Energia solar com jornada completa
            </div>
            <h1 className="max-w-4xl text-4xl font-black tracking-[-0.04em] text-slate-950 sm:text-6xl lg:text-7xl">
              Transforme sua conta de luz em uma experiência de economia inteligente.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
              A Solar Experience projeta, instala, homologa e monitora sistemas fotovoltaicos sob medida para residências, empresas, propriedades rurais e condomínios.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <button onClick={scrollToQuote} className="group inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 px-7 py-4 text-base font-black text-slate-950 shadow-xl shadow-amber-500/25 transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-amber-500/35">
                Fazer orçamento <Icons.arrow className="h-5 w-5 transition group-hover:translate-x-1" />
              </button>
              <a href={whatsappLink} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-3 rounded-full border border-slate-200 bg-white px-7 py-4 text-base font-black text-slate-800 shadow-sm transition hover:-translate-y-1 hover:border-emerald-300 hover:text-emerald-700">
                <Icons.phone /> Entrar em contato
              </a>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-3 max-sm:text-center sm:max-w-xl">
              {stats.slice(0, 3).map((stat) => (
                <div key={stat.label} className="rounded-3xl border border-white bg-white/70 p-4 shadow-sm backdrop-blur">
                  <strong className="block text-xl font-black text-slate-950 sm:text-2xl">{stat.value}</strong>
                  <span className="mt-1 block text-xs font-medium text-slate-500 sm:text-sm">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal className="lg:delay-150">
          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-amber-200 via-white to-emerald-200 blur-xl" />
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white bg-slate-950 p-5 text-white shadow-2xl shadow-slate-950/20">
              <div className="rounded-[2rem] bg-[linear-gradient(135deg,#1e293b,#0f172a)] p-5">
                <div className="grid grid-cols-3 gap-3">
                  {Array.from({ length: 12 }).map((_, index) => (
                    <div key={index} className="h-16 rounded-2xl border border-cyan-200/20 bg-gradient-to-br from-cyan-300/30 to-blue-500/20 shadow-inner" />
                  ))}
                </div>
              </div>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-white p-5 text-slate-950">
                  <p className="text-sm font-bold text-slate-500">Geração mensal</p>
                  <p className="mt-2 text-3xl font-black">1.240 kWh</p>
                  <p className="mt-3 text-sm text-emerald-600">+18% acima da previsão</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/10 p-5">
                  <p className="text-sm font-bold text-slate-300">Economia estimada</p>
                  <p className="mt-2 text-3xl font-black text-amber-300">R$ 980</p>
                  <p className="mt-3 text-sm text-slate-300">neste ciclo de energia</p>
                </div>
              </div>
              <div className="mt-5 rounded-3xl border border-emerald-300/20 bg-emerald-400/10 p-5">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-bold text-emerald-200">Status do sistema</p>
                    <p className="mt-1 text-lg font-black">Operando com performance ideal</p>
                  </div>
                  <span className="relative flex h-4 w-4">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-75" />
                    <span className="relative inline-flex h-4 w-4 rounded-full bg-emerald-300" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="sobre" className="section bg-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <Reveal>
          <SectionHeader align="left" eyebrow="O que fazemos" title="Energia solar do diagnóstico ao suporte, sem ruído técnico." description="Mais do que vender placas, conduzimos uma jornada consultiva para entender consumo, projetar a solução ideal e acompanhar a performance depois da instalação." />
          <button onClick={scrollToQuote} className="mt-8 rounded-full bg-emerald-600 px-6 py-4 text-sm font-black text-white shadow-lg shadow-emerald-600/20 transition hover:-translate-y-1 hover:bg-emerald-700">
            Quero simular minha economia
          </button>
        </Reveal>
        <Reveal>
          <div className="grid gap-5 sm:grid-cols-2">
            {["Diagnóstico da conta de energia", "Engenharia e projeto executivo", "Instalação com equipe especializada", "Monitoramento e suporte pós-venda"].map((item, index) => (
              <div key={item} className="rounded-[2rem] border border-slate-100 bg-slate-50 p-6 transition hover:-translate-y-1 hover:bg-white hover:shadow-xl hover:shadow-slate-900/5">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-amber-100 text-lg font-black text-amber-600">0{index + 1}</span>
                <h3 className="mt-5 text-xl font-black text-slate-950">{item}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">Processo claro, documentado e orientado para segurança, retorno e tranquilidade do cliente.</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function StorySection() {
  return (
    <section className="section bg-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-6 lg:grid-cols-2 lg:px-8">
        <Reveal>
          <div className="rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/20 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-300">Nossa história</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">Criada para simplificar uma decisão importante.</h2>
            <p className="mt-5 leading-8 text-slate-300">A Solar Experience nasceu da percepção de que muitos consumidores queriam energia solar, mas encontravam propostas confusas, prazos incertos e pouco acompanhamento depois da instalação. Por isso, nossa equipe fictícia reuniu engenharia, atendimento e tecnologia para transformar cada projeto em uma experiência previsível e bem guiada.</p>
          </div>
        </Reveal>
        <Reveal>
          <div className="space-y-5">
            {["Atendimento consultivo, sem pressão comercial.", "Projetos com linguagem clara e premissas transparentes.", "Tecnologia para acompanhar geração e economia.", "Relacionamento pós-venda pensado para o longo prazo."].map((item) => (
              <div key={item} className="flex gap-4 rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                <span className="mt-1 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-emerald-400 text-slate-950"><Icons.shield className="h-4 w-4" /></span>
                <p className="text-base font-semibold text-slate-100">{item}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function BenefitsSection() {
  return (
    <section id="beneficios" className="section bg-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <Reveal><SectionHeader eyebrow="Benefícios" title="Economia, controle e sustentabilidade no mesmo projeto." description="Um sistema solar bem planejado reduz custos, melhora a eficiência energética e fortalece uma escolha alinhada ao futuro." /></Reveal>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => {
            const IconComponent = benefit.icon;
            return (
              <Reveal key={benefit.title}>
                <article className="group h-full rounded-[2rem] border border-slate-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-900/10">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-amber-100 to-emerald-100 text-emerald-700 transition group-hover:scale-110"><IconComponent className="h-7 w-7" /></span>
                  <h3 className="mt-6 text-xl font-black text-slate-950">{benefit.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{benefit.text}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section id="processo" className="section bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <Reveal><SectionHeader eyebrow="Como funciona" title="Um passo a passo simples para uma decisão segura." description="Da análise inicial ao acompanhamento, cada etapa é conduzida com clareza para que você saiba exatamente o que está contratando." /></Reveal>
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <Reveal key={step}>
              <div className="relative h-full overflow-hidden rounded-[2rem] border border-slate-100 bg-white p-6 shadow-sm">
                <span className="absolute -right-4 -top-7 text-8xl font-black text-slate-100">{index + 1}</span>
                <div className="relative">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-slate-950 text-sm font-black text-white">0{index + 1}</span>
                  <h3 className="mt-6 text-xl font-black text-slate-950">{step}</h3>
                  <p className="mt-3 leading-7 text-slate-600">A etapa conecta dados, engenharia e atendimento para manter o projeto no caminho certo.</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function SolutionsSection() {
  return (
    <section id="solucoes" className="section bg-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <Reveal><SectionHeader eyebrow="Soluções" title="Projetos solares para diferentes realidades de consumo." description="Cada imóvel tem uma rotina energética. Por isso, criamos propostas adaptadas ao perfil de uso, espaço disponível e objetivo financeiro." /></Reveal>
        <div className="mt-14 grid gap-5 lg:grid-cols-4">
          {solutions.map((solution) => {
            const IconComponent = solution.icon;
            return (
              <Reveal key={solution.title}>
                <article className="h-full rounded-[2rem] bg-slate-950 p-6 text-white shadow-xl shadow-slate-950/10 transition hover:-translate-y-2 hover:bg-emerald-700">
                  <IconComponent className="h-9 w-9 text-amber-300" />
                  <h3 className="mt-8 text-2xl font-black">{solution.title}</h3>
                  <p className="mt-4 leading-7 text-slate-200">{solution.text}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  return (
    <section className="bg-gradient-to-r from-amber-400 via-orange-400 to-emerald-500 py-12">
      <div className="mx-auto grid max-w-7xl gap-4 px-5 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        {stats.map((stat) => (
          <Reveal key={stat.label}>
            <div className="rounded-[2rem] bg-white/90 p-7 text-center shadow-xl shadow-slate-950/10 backdrop-blur">
              <p className="text-4xl font-black tracking-tight text-slate-950">{stat.value}</p>
              <p className="mt-2 text-sm font-bold uppercase tracking-[0.18em] text-slate-500">{stat.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="section bg-slate-50">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <Reveal><SectionHeader eyebrow="Depoimentos" title="Clientes fictícios, dores reais do mercado." description="As histórias abaixo ilustram o tipo de experiência que uma operação solar bem conduzida deve entregar." /></Reveal>
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Reveal key={testimonial.name}>
              <blockquote className="h-full rounded-[2rem] border border-slate-100 bg-white p-7 shadow-sm">
                <div className="flex gap-1 text-amber-400">{Array.from({ length: 5 }).map((_, index) => <Icons.star key={index} className="h-4 w-4 fill-current" />)}</div>
                <p className="mt-6 text-lg leading-8 text-slate-700">“{testimonial.text}”</p>
                <footer className="mt-7 border-t border-slate-100 pt-5">
                  <strong className="block text-slate-950">{testimonial.name}</strong>
                  <span className="mt-1 block text-sm text-slate-500">{testimonial.role}</span>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const [active, setActive] = useState(0);

  return (
    <section id="faq" className="section bg-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <Reveal><SectionHeader align="left" eyebrow="FAQ" title="Perguntas frequentes antes do orçamento." description="Reunimos respostas objetivas para ajudar você a entender o processo e avançar com confiança." /></Reveal>
        <Reveal>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={faq.question} className="rounded-3xl border border-slate-100 bg-slate-50 p-2">
                <button onClick={() => setActive(active === index ? -1 : index)} className="flex w-full items-center justify-between gap-4 rounded-2xl px-5 py-4 text-left text-lg font-black text-slate-950">
                  {faq.question}
                  <Icons.chevron className={`h-5 w-5 shrink-0 transition ${active === index ? "rotate-180" : ""}`} />
                </button>
                <div className={`grid transition-all duration-300 ${active === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 leading-7 text-slate-600">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function QuoteForm() {
  const initialForm = useMemo(() => ({ name: "", phone: "", city: "", property: "", bill: "", message: "" }), []);
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [success, setSuccess] = useState(false);

  function updateField(field: keyof typeof form, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: "" }));
    setSuccess(false);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors: Record<string, string> = {};

    if (form.name.trim().length < 3) nextErrors.name = "Informe seu nome completo.";
    if (form.phone.replace(/\D/g, "").length < 10) nextErrors.phone = "Informe um telefone válido com DDD.";
    if (form.city.trim().length < 2) nextErrors.city = "Informe sua cidade.";
    if (!form.property) nextErrors.property = "Selecione o tipo de imóvel.";
    if (!form.bill || Number(form.bill) <= 0) nextErrors.bill = "Informe o valor médio da conta.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setSuccess(true);
      setForm(initialForm);
    }
  }

  return (
    <section id="orcamento" className="section bg-[radial-gradient(circle_at_top,#ecfdf5_0,#ffffff_48%,#fff7ed_100%)] scroll-mt-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <Reveal>
          <SectionHeader align="left" eyebrow="Orçamento" title="Receba uma análise inicial para seu projeto solar." description="Preencha os dados e nossa equipe fictícia entrará em contato pelo telefone informado com uma simulação personalizada." />
          <div className="mt-8 rounded-[2rem] bg-slate-950 p-6 text-white">
            <p className="text-lg font-black">O que você recebe</p>
            <ul className="mt-5 space-y-3 text-slate-300">
              {["Estimativa de economia", "Orientação técnica inicial", "Indicação da solução mais adequada", "Próximos passos para instalação"].map((item) => (
                <li key={item} className="flex items-center gap-3"><Icons.shield className="h-5 w-5 text-emerald-300" /> {item}</li>
              ))}
            </ul>
          </div>
        </Reveal>
        <Reveal>
          <form onSubmit={handleSubmit} noValidate className="rounded-[2.5rem] border border-white bg-white p-5 shadow-2xl shadow-slate-900/10 sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <FormField label="Nome" error={errors.name}><input value={form.name} onChange={(event) => updateField("name", event.target.value)} className="input" placeholder="Seu nome completo" /></FormField>
              <FormField label="Telefone" error={errors.phone}><input value={form.phone} onChange={(event) => updateField("phone", event.target.value)} className="input" placeholder="(11) 99999-0000" /></FormField>
              <FormField label="Cidade" error={errors.city}><input value={form.city} onChange={(event) => updateField("city", event.target.value)} className="input" placeholder="Cidade/UF" /></FormField>
              <FormField label="Tipo de imóvel" error={errors.property}>
                <select value={form.property} onChange={(event) => updateField("property", event.target.value)} className="input">
                  <option value="">Selecione</option>
                  <option>Residencial</option>
                  <option>Comercial</option>
                  <option>Rural</option>
                  <option>Condomínio</option>
                </select>
              </FormField>
              <FormField label="Valor médio da conta de energia" error={errors.bill}>
                <input type="number" min="0" value={form.bill} onChange={(event) => updateField("bill", event.target.value)} className="input" placeholder="Ex.: 650" />
              </FormField>
              <FormField label="Mensagem"><textarea value={form.message} onChange={(event) => updateField("message", event.target.value)} className="input min-h-32 resize-none" placeholder="Conte sobre seu objetivo ou dúvidas" /></FormField>
            </div>
            {success && <p className="mt-5 rounded-2xl bg-emerald-50 px-5 py-4 text-sm font-bold text-emerald-700">Solicitação enviada com sucesso! Em breve entraremos em contato.</p>}
            <button className="mt-6 w-full rounded-full bg-gradient-to-r from-amber-400 to-orange-500 px-7 py-4 text-base font-black text-slate-950 shadow-xl shadow-amber-500/25 transition hover:-translate-y-1">
              Enviar solicitação de orçamento
            </button>
            <p className="mt-4 text-center text-xs leading-6 text-slate-500">Este formulário é demonstrativo e não envia dados para backend.</p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function FormField({ label, error, children }: { label: string; error?: string; children: ReactNode }) {
  return (
    <label className="block text-sm font-bold text-slate-700">
      {label}
      <span className="mt-2 block">{children}</span>
      {error && <span className="mt-2 block text-xs font-bold text-red-500">{error}</span>}
    </label>
  );
}

function Footer() {
  return (
    <footer className="bg-slate-950 px-5 py-12 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
        <div>
          <div className="flex items-center gap-3"><span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-amber-400 to-emerald-500"><Icons.sun /></span><strong className="text-xl">Solar Experience</strong></div>
          <p className="mt-5 max-w-sm leading-7 text-slate-400">Empresa fictícia de energia solar criada para demonstrar uma landing page moderna, consultiva e focada em geração de leads.</p>
        </div>
        <div>
          <h3 className="font-black">Links</h3>
          <div className="mt-5 space-y-3 text-slate-400">{navItems.map((item) => <a key={item.href} href={item.href} className="block hover:text-white">{item.label}</a>)}</div>
        </div>
        <div>
          <h3 className="font-black">Contato</h3>
          <div className="mt-5 space-y-3 text-slate-400"><p>(11) 99999-0000</p><p>contato@solarexperience.fake</p><p>Av. Energia Limpa, 1000<br />São Paulo, SP</p></div>
        </div>
        <div>
          <h3 className="font-black">Redes sociais</h3>
          <div className="mt-5 flex flex-wrap gap-3">
            {["Instagram", "LinkedIn", "YouTube"].map((item) => <a key={item} href="#" className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300 hover:bg-white/10">{item}</a>)}
          </div>
          <p className="mt-6 rounded-2xl border border-amber-300/20 bg-amber-300/10 p-4 text-sm leading-6 text-amber-100">Aviso: a Solar Experience é uma empresa fictícia. Dados, números e contatos são demonstrativos.</p>
        </div>
      </div>
    </footer>
  );
}

function FloatingWhatsApp() {
  return (
    <a href={whatsappLink} target="_blank" rel="noreferrer" aria-label="Entrar em contato pelo WhatsApp" className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-emerald-500 text-white shadow-2xl shadow-emerald-700/30 transition hover:-translate-y-1 hover:bg-emerald-600 sm:h-16 sm:w-16">
      <Icons.phone className="h-7 w-7" />
    </a>
  );
}

export default function LandingPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-slate-950">
      <Header />
      <HeroSection />
      <AboutSection />
      <StorySection />
      <BenefitsSection />
      <ProcessSection />
      <SolutionsSection />
      <StatsSection />
      <TestimonialsSection />
      <FAQSection />
      <QuoteForm />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
