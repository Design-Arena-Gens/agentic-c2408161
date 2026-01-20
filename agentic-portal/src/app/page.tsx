export default function Home() {
  return (
    <div className="relative overflow-hidden bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[160px]" />
        <div className="absolute bottom-0 left-0 h-[420px] w-[420px] rounded-full bg-purple-500/10 blur-[180px]" />
        <div className="absolute -right-32 top-1/4 h-[380px] w-[380px] rounded-full bg-emerald-400/20 blur-[140px]" />
      </div>

      <main className="relative mx-auto flex min-h-screen max-w-6xl flex-col gap-32 px-6 pb-24 pt-24 sm:px-10 lg:px-16">
        <section className="grid gap-12 lg:grid-cols-[1fr,0.8fr] lg:gap-16">
          <div className="flex flex-col gap-8">
            <span className="w-fit rounded-full border border-cyan-400/40 px-4 py-1 text-sm uppercase tracking-[0.2em] text-cyan-200/80">
              hub de ia premium
            </span>
            <h1 className="text-pretty text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Como ter ChatGPT Plus, Claude e Gemini em um só lugar
            </h1>
            <p className="text-lg text-slate-200/80 sm:text-xl">
              Construa um cockpit de IA que reúne os três assistentes mais
              avançados do mercado, aproveitando suas forças combinadas para
              pesquisa, criação de conteúdo e automação de fluxos em uma
              experiência única.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#plano"
                className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Ver plano de implantação
              </a>
              <a
                href="#ferramentas"
                className="rounded-full border border-slate-200/30 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-cyan-300/60 hover:text-white"
              >
                Stack recomendada
              </a>
            </div>
          </div>
          <div className="rounded-3xl border border-slate-200/10 bg-white/5 p-6 backdrop-blur">
            <h2 className="text-lg font-semibold text-white">
              Panorama rápido
            </h2>
            <p className="mt-3 text-sm text-slate-200/70">
              Combine modelos complementares em um hub personalizado:
            </p>
            <dl className="mt-6 grid gap-4 text-sm">
              <div className="rounded-2xl border border-cyan-400/30 bg-cyan-500/10 p-4">
                <dt className="font-semibold text-cyan-200">ChatGPT Plus</dt>
                <dd className="mt-1 text-cyan-50/80">
                  GPT-4o para raciocínio geral, integrações com GPTs customizados e
                  plugins.
                </dd>
              </div>
              <div className="rounded-2xl border border-emerald-400/30 bg-emerald-500/10 p-4">
                <dt className="font-semibold text-emerald-200">Claude Pro</dt>
                <dd className="mt-1 text-emerald-50/80">
                  Sonnet para análise de documentos extensos, sínteses contextuais e
                  escrita longa.
                </dd>
              </div>
              <div className="rounded-2xl border border-purple-400/30 bg-purple-500/10 p-4">
                <dt className="font-semibold text-purple-200">Gemini Advanced</dt>
                <dd className="mt-1 text-purple-50/80">
                  Interações multimodais, conectores do Google Workspace e automações
                  com AppSheet.
                </dd>
              </div>
            </dl>
            <p className="mt-6 text-xs uppercase tracking-[0.2em] text-slate-200/50">
              Orquestre respostas, automatize handoffs e salve custos.
            </p>
          </div>
        </section>

        <section className="space-y-10">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-semibold text-white">
              Por que unir os três?
            </h2>
            <p className="max-w-3xl text-lg text-slate-200/80">
              ChatGPT Plus, Claude e Gemini têm especialidades diferentes. Um hub
              centralizado garante que cada tarefa chegue ao modelo mais
              eficiente, enquanto mantém governança, histórico e insights em um só
              painel.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                name: "ChatGPT Plus",
                focus:
                  "Assistente universal com GPT-4o, GPTs customizados e integrações robustas.",
                superpower:
                  "Desenvolvimento rápido, qualidade de linguagem natural e ecossistema de plugins.",
                highlight: "Ideal para brainstorming, código e fluxos iterativos.",
                badge: "Base universal",
              },
              {
                name: "Claude Pro",
                focus:
                  "Excelência em compreensão contextual e análise de grandes volumes de texto.",
                superpower:
                  "Janela de contexto extensa, respostas estruturadas e confiabilidade empresarial.",
                highlight: "Perfeito para revisão jurídica, síntese e relatórios.",
                badge: "Contexto profundo",
              },
              {
                name: "Gemini Advanced",
                focus:
                  "IA multimodal integrada ao Google Workspace e ecossistema mobile.",
                superpower:
                  "Integração nativa com documentos, planilhas e automações AppSheet/Zapier.",
                highlight:
                  "Excelente para fluxos dados + multimídia + contexto operacional.",
                badge: "Multimodalidade",
              },
            ].map((item) => (
              <article
                key={item.name}
                className="group flex flex-col gap-4 rounded-3xl border border-slate-200/10 bg-white/5 p-6 transition hover:border-cyan-300/60 hover:bg-white/10"
              >
                <div className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200/70">
                  {item.badge}
                </div>
                <h3 className="text-2xl font-semibold text-white">{item.name}</h3>
                <p className="text-sm text-slate-200/80">{item.focus}</p>
                <div className="rounded-2xl border border-slate-200/20 bg-slate-900/60 p-4 text-sm text-slate-100/80">
                  {item.superpower}
                </div>
                <p className="text-sm text-cyan-100/70">{item.highlight}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="plano" className="space-y-10">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-semibold text-white">
              Plano de implantação em 6 semanas
            </h2>
            <p className="max-w-2xl text-lg text-slate-200/80">
              Siga um roteiro prático para montar a infraestrutura, alinhar equipe
              e validar resultados com indicadores claros.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-[1.3fr,0.7fr]">
            <ol className="space-y-4">
              {[
                {
                  title: "Semana 1 · Estratégia e governança",
                  items: [
                    "Mapeie casos de uso e defina políticas de acesso (LGPD e dados sensíveis).",
                    "Escolha ferramenta de orquestração (Notion, Superflows, Relevance AI ou AirOps).",
                    "Crie repositório central (ex.: Notion + automações Make/Zapier).",
                  ],
                },
                {
                  title: "Semana 2 · Provisionamento e integrações",
                  items: [
                    "Contrate ChatGPT Plus, Claude Pro e Gemini Advanced com contas corporativas.",
                    "Configure APIs e tokens em cofre seguro (1Password, Vault, Doppler).",
                    "Padronize templates de prompts e guidelines de escrita.",
                  ],
                },
                {
                  title: "Semana 3 · Automação de fluxos críticos",
                  items: [
                    "Monte roteadores: se tarefa = \"síntese longa\" → Claude; \"multimídia\" → Gemini.",
                    "Implemente canal central (Slack, Teams, Discord) com bots e slash commands.",
                    "Conecte banco de conhecimento (Vectors/Weaviate/Pinecone) para contexto.",
                  ],
                },
                {
                  title: "Semana 4 · Monitoramento e métricas",
                  items: [
                    "Colete feedback automático após cada entrega (forms embutidos).",
                    "Meça tempo economizado vs. baseline manual e satisfação dos times.",
                    "Configure dashboards (Metabase, Looker Studio) com dados de uso.",
                  ],
                },
                {
                  title: "Semana 5 · Treinamento e governança contínua",
                  items: [
                    "Treine squads com playbooks por persona (Marketing, Produto, Jurídico).",
                    "Crie biblioteca de prompts aprovados e exemplos de respostas esperadas.",
                    "Implemente revisão humana em ponto crítico (Human-in-the-loop).",
                  ],
                },
                {
                  title: "Semana 6 · Escala e otimização de custos",
                  items: [
                    "Revise automações para eliminar redundâncias e ajustar limites de uso.",
                    "Avalie upgrade para APIs empresariais ou licenças em volume.",
                    "Documente resultados e prepare roadmap para novos use cases.",
                  ],
                },
              ].map((step) => (
                <li
                  key={step.title}
                  className="rounded-3xl border border-slate-200/10 bg-white/5 p-6"
                >
                  <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                  <ul className="mt-4 space-y-3 text-sm text-slate-200/75">
                    {step.items.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-cyan-300" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
            <aside className="flex flex-col gap-6 rounded-3xl border border-cyan-300/30 bg-cyan-500/10 p-6 text-sm text-slate-900">
              <div>
                <h3 className="text-lg font-semibold text-slate-950">
                  Principais entregáveis
                </h3>
                <ul className="mt-3 space-y-2 text-slate-900/80">
                  <li>• Matriz de decisão de modelos por tarefa.</li>
                  <li>• Catálogo de prompts com versão controlada.</li>
                  <li>• Dashboard de uso, custo e satisfação.</li>
                  <li>• Playbook de governança e compliance.</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-900/10 bg-white/60 p-5 shadow-lg">
                <h4 className="text-base font-semibold text-slate-950">
                  Métricas piloto sugeridas
                </h4>
                <ul className="mt-3 space-y-2 text-slate-900/70">
                  <li>⏱️ Tempo médio de resposta vs. baseline manual.</li>
                  <li>📄 Número de entregas aprovadas sem retrabalho.</li>
                  <li>💸 Custo médio por tarefa vs. contratação externa.</li>
                  <li>📈 Índice de confiança do usuário interno.</li>
                </ul>
              </div>
              <p className="text-xs uppercase tracking-[0.25em] text-slate-900/60">
                Ajuste para operações maiores com squads dedicados.
              </p>
            </aside>
          </div>
        </section>

        <section id="ferramentas" className="space-y-10">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-semibold text-white">
              Stack recomendada para centralizar o trio
            </h2>
            <p className="max-w-3xl text-lg text-slate-200/80">
              Combine automação low-code, APIs confiáveis e camadas de
              observabilidade para garantir escala e segurança desde o início.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {[
              {
                title: "Orquestração",
                tools: [
                  {
                    name: "Make/Zapier",
                    description:
                      "Automatize roteamento entre os modelos com webhooks e filtros.",
                  },
                  {
                    name: "LangGraph / Flowise",
                    description:
                      "Crie flows com controle de estado, fallback e versionamento.",
                  },
                  {
                    name: "Notion + Widgets",
                    description:
                      "Interface visual para usuários com histórico e favoritar prompts.",
                  },
                ],
              },
              {
                title: "Contexto & dados",
                tools: [
                  {
                    name: "Pinecone / Weaviate",
                    description:
                      "Base vetorial com embeddings compartilhados para os três modelos.",
                  },
                  {
                    name: "Google Drive / Confluence",
                    description:
                      "Fonte mestra de documentos com sincronização automática.",
                  },
                  {
                    name: "Databricks / BigQuery",
                    description:
                      "Camada analítica para métricas de uso, custo e performance.",
                  },
                ],
              },
              {
                title: "Governança & segurança",
                tools: [
                  {
                    name: "1Password / Doppler",
                    description:
                      "Gestão de segredos e rotação periódica de tokens.",
                  },
                  {
                    name: "Retool / Internal",
                    description:
                      "Painel de auditoria com logs de prompts e respostas.",
                  },
                  {
                    name: "Sentra / Nightfall",
                    description:
                      "Monitoramento de dados sensíveis e alertas automatizados.",
                  },
                ],
              },
            ].map((group) => (
              <article
                key={group.title}
                className="flex flex-col gap-6 rounded-3xl border border-slate-200/10 bg-white/5 p-6"
              >
                <header>
                  <h3 className="text-xl font-semibold text-white">
                    {group.title}
                  </h3>
                  <p className="text-sm text-slate-200/60">
                    Curadoria de ferramentas comprovadas.
                  </p>
                </header>
                <ul className="space-y-4 text-sm text-slate-200/80">
                  {group.tools.map((tool) => (
                    <li key={tool.name} className="rounded-2xl bg-slate-900/60 p-4">
                      <div className="font-semibold text-white/90">{tool.name}</div>
                      <p className="mt-2 text-slate-200/70">{tool.description}</p>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-10">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-semibold text-white">
              Táticas de produtividade imediata
            </h2>
            <p className="max-w-3xl text-lg text-slate-200/80">
              Aplique estes workflows para demonstrar valor nas primeiras duas
              semanas de operação integrada.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Painel de triagem no Slack",
                description:
                  "Use slash commands para enviar tarefas. Claude assume sínteses longas, GPT-4o responde perguntas rápidas e Gemini processa anexos multimodais.",
              },
              {
                title: "Roteador de demandas criativas",
                description:
                  "Planilhas conectadas atribuem briefings a GPT-4o (ideação), Gemini (assets visuais) e Claude (edição final) com checklist automático.",
              },
              {
                title: "Suporte interno 24/7",
                description:
                  "Base de conhecimento vetorial + fallback para humanos quando confiança do modelo fica abaixo de 0.7.",
              },
              {
                title: "Sala de controle de projetos",
                description:
                  "Notion centraliza cards com histórico de prompts e variações aprovadas, reduzindo retrabalho entre squads.",
              },
            ].map((play) => (
              <article
                key={play.title}
                className="flex flex-col gap-3 rounded-3xl border border-slate-200/10 bg-white/5 p-6"
              >
                <h3 className="text-xl font-semibold text-white">{play.title}</h3>
                <p className="text-sm text-slate-200/70">{play.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-8">
          <h2 className="text-3xl font-semibold text-white">
            Perguntas frequentes
          </h2>
          <div className="space-y-4">
            {[
              {
                question:
                  "Preciso criar integrações via API ou dá para começar com automação no-code?",
                answer:
                  "Você pode iniciar com ferramentas no-code como Zapier, Make ou n8n. Elas oferecem conectores prontos para os três provedores e permitem roteamento condicional, logs e integrações com Slack/Google Sheets. Evolua para APIs diretas apenas quando precisar de controles personalizados ou volume muito grande.",
              },
              {
                question:
                  "Como lidar com compliance e LGPD usando três fornecedores diferentes?",
                answer:
                  "Mapeie quais dados pessoais entram em cada fluxo, mantenha consentimento explícito e registre logs de prompts/respostas. Utilize cofre de segredos para tokens, defina políticas de retenção (como limpeza automática após 30 dias) e configure análises de DLP com ferramentas como Nightfall para evitar vazamento de dados sensíveis.",
              },
              {
                question:
                  "Existe forma de consolidar custos e uso em um dashboard único?",
                answer:
                  "Sim. Consuma relatórios de faturamento via APIs/rest das plataformas ou via export CSV, normalize em um warehouse (BigQuery, Snowflake) e visualize em dashboards com Looker Studio, Metabase ou Power BI. Automatize a carga com pipelines como Airbyte ou Fivetran.",
              },
              {
                question:
                  "Como escolher qual modelo responderá cada pergunta sem travar o time?",
                answer:
                  "Defina uma matriz de decisão simples (tarefa × modelo) e implemente um roteador automático. Use classificadores baseados em palavras-chave, formulários com seleção do usuário ou até agentes que avaliam complexidade e contexto antes de encaminhar a pergunta.",
              },
            ].map((faq) => (
              <details
                key={faq.question}
                className="group rounded-3xl border border-slate-200/10 bg-white/5 p-6 transition"
              >
                <summary className="cursor-pointer text-lg font-semibold text-white marker:text-cyan-300">
                  {faq.question}
                </summary>
                <p className="mt-4 text-sm text-slate-200/75">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <footer className="rounded-3xl border border-slate-200/10 bg-white/5 p-6 text-sm text-slate-200/70">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p>
              Hub de IA premium construído para extrair o melhor de ChatGPT Plus,
              Claude Pro e Gemini Advanced.
            </p>
            <a
              href="#"
              className="text-sm font-semibold text-cyan-200 transition hover:text-cyan-100"
            >
              Baixar checklist operacional →
            </a>
          </div>
          <p className="mt-4 text-xs text-slate-200/50">
            Atualize seu hub constantemente: novos modelos, plugins e políticas de
            uso surgem a cada semana. Garanta experimentação contínua.
          </p>
        </footer>
      </main>
    </div>
  );
}
