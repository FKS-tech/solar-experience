# Solar Experience

Landing page profissional, moderna e responsiva para a **Solar Experience**, uma empresa fictícia de energia solar especializada em projetos fotovoltaicos residenciais, comerciais, rurais e para condomínios.

## Objetivo do projeto

O objetivo da página é converter visitantes em leads interessados em orçamento de energia solar. A experiência foi pensada para transmitir confiança, tecnologia, economia e sustentabilidade, apresentando a jornada completa da empresa: diagnóstico da conta de energia, projeto personalizado, instalação, homologação, monitoramento e suporte pós-venda.

## Tecnologias usadas

- **Next.js 16** com App Router
- **React 19**
- **TypeScript**
- **Tailwind CSS 4**
- **CSS animations e IntersectionObserver** para microinterações e revelação suave das seções
- **SVG icons reutilizáveis** criados no próprio projeto

> Observação: Framer Motion e Lucide React foram considerados, mas a instalação de pacotes externos foi bloqueada pelo registry do ambiente. Por isso, as animações e ícones foram implementados sem dependências adicionais.

## Como rodar localmente

Instale as dependências:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Abra o navegador em:

```text
http://localhost:3000
```

Para validar uma build de produção:

```bash
npm run build
```

## Funcionalidades

- Header fixo com logo fictícia e navegação por âncoras.
- Menu mobile com abertura e fechamento em telas menores.
- Hero section com proposta de valor clara e CTAs para orçamento e WhatsApp.
- Rolagem suave até o formulário ao clicar em **Fazer orçamento**.
- Link fictício de WhatsApp para contato direto.
- Seções completas sobre empresa, história, benefícios, processo, soluções, números, depoimentos e FAQ.
- FAQ interativo com abertura individual de perguntas.
- Formulário de orçamento com validação simples para:
  - nome;
  - telefone;
  - cidade;
  - tipo de imóvel;
  - valor médio da conta de energia.
- Mensagem de sucesso após envio válido, sem backend.
- Botão flutuante de WhatsApp.
- Footer completo com links, contatos fictícios, redes sociais e aviso de empresa fictícia.
- Layout responsivo para celular, tablet e desktop.
- Microinterações em cards, botões e seções.

## Limitações

- A Solar Experience é fictícia; textos, contatos, números e depoimentos são demonstrativos.
- O formulário não envia dados para backend nem integra CRM ou automação comercial.
- O link de WhatsApp usa um número fictício.
- Não há integração real com mapas, analytics, pixel de conversão ou ferramentas de monitoramento.
- As métricas de economia e projetos instalados são ilustrativas.

## Próximos passos possíveis

- Integrar o formulário a uma API, CRM ou ferramenta de automação de marketing.
- Adicionar cálculo real de economia com base em tarifa, consumo e localização.
- Implementar analytics e eventos de conversão para CTAs e envio do formulário.
- Criar páginas internas para cada solução: residencial, comercial, rural e condomínios.
- Adicionar CMS para edição de FAQs, depoimentos e conteúdos institucionais.
- Incluir imagens reais ou renders 3D de sistemas fotovoltaicos.
- Adicionar testes automatizados de interface e acessibilidade.
