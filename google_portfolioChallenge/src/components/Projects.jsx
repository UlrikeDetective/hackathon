import React from 'react';
import { Circle, Database, Code, ArrowUpRight } from 'lucide-react';

const projectsData = [
  {
    title: "Local council budgets",
    status: "Version 2.1 (Active)",
    impact: "€550,000 Annual Public Spend managed",
    challenge: "Digitizing the distribution of local council budgets for 10 districts in Leipzig. The mission: build a transparent, legally compliant system to manage €55,000 per council annually.",
    process: "Led a cross-functional team. Bridged political diplomacy and technical architecture. Designed a centralized database to track the who, what, when, and how much.",
    logic: "Ingestion (Formcycle) -> Validation -> Relational Storage -> Reporting (Automated annual reports).",
    cleanFlex: {
      input: "The 'Excel-as-Word' syndrome. Inconsistent formatting, non-numeric strings.",
      fix: "Strict validation rules. Python/R pipeline to sanitize misspellings and normalize strings.",
      result: "Transitioned from 'guesswork' to a verifiable dashboard. Increased budget by €50k."
    },
    code: [
      { label: "Open Data Portal", url: "https://opendata.leipzig.de/dataset/stadtbezirksbudget" },
      { label: "Documentation", url: "https://ratsinformation.leipzig.de/allris_leipzig_public/vo020?VOLFDNR=2013109&refresh=false" }
    ],
    tech: ["Python", "R", "Excel (Power Query)", "Formcycle", "SQL"],
    next: "Eliminating 'data breaks' by automating the API handshake.",
    healthColor: "#40E0D0" // Turquoise
  },
  {
    title: "Tech layoffs // Industry Intelligence",
    status: "Maintenance Mode",
    impact: "Dataset: 2020 - 2024",
    challenge: "Quantifying volatility. Transform raw reporting into a high-integrity dataset tracking industry-wide downsizing.",
    process: "Scraper targeting layoffs.fyi. Extraction -> Normalization -> PostgreSQL Storage -> Jupyter-based Analysis.",
    logic: "PostgreSQL for long-term trends. Jupyter for reproducible EDA.",
    cleanFlex: {
      input: "Significant fragmentation—missing counts, inconsistent naming, varying date formats.",
      fix: "Imputation scripts in R/Python. Deduplication layer for unique entities.",
      result: "Granular, non-biased view. Published on Kaggle."
    },
    code: [
      { label: "GitHub Repository", url: "https://github.com/UlrikeDetective/DataScienceProjects/tree/main/tech_layoffs" }, 
      { label: "Kaggle Dataset", url: "https://www.kaggle.com/datasets/ulrikeherold/tech-layoffs-2020-2024" }
    ],
    tech: ["Python", "Pandas", "R", "Postgres", "Jupyter"],
    next: "Ingesting 2025 telemetry. Predictive dashboard.",
    healthColor: "#E2725B" // Terracotta
  },
  {
    title: "..on the road // Personal Data Audit",
    status: "Continuous Integration",
    impact: "Focus: Geo-Spatial Intelligence",
    challenge: "Aggregating disparate telemetry from Google Maps, Apple Fitness, Spotify, and Meta into a unified 'Life Dashboard'.",
    process: "Reverse-engineering digital footprint. Extracting raw exports, decoding proprietary structures.",
    logic: "Extraction -> Geo-Processing (OSMNX) -> Synthesis (SQL) -> Refinement (QGIS).",
    cleanFlex: {
      input: "Thousands of JSON/CSV files with overlapping timestamps and noise.",
      fix: "Custom logic to deduplicate location pings. AI-assisted debugging.",
      result: "Curated digital autobiography."
    },
    code: [
      { label: "Map Visualization", url: "https://ulrikedetective.github.io/UlrikeHerold/continent_map_pins.html" },
      { label: "GitHub", url: "https://github.com/UlrikeDetective/maps" }
    ],
    tech: ["Python", "R", "SQL", "OSMNX", "GEOPANDAS", "QGIS"],
    next: "Consolidating insights into a dedicated technical blog.",
    healthColor: "#556B2F" // Olive
  },
  {
    title: "Coffee Code // Weekend Experiment",
    status: "Complete",
    impact: "UI/UX Rapid Prototype",
    challenge: "Translating coffee culture into code. High-quality frontend response to a CSS challenge in 24h.",
    process: "Utilized Gemini as pair programmer. Iterative prompting.",
    logic: "Standard HTML5, CSS3, Vanilla JS. No heavy frameworks.",
    cleanFlex: {
      input: "Messy blend of creative concepts.",
      fix: "Disciplined iteration. Refactored AI output into maintainable stylesheet.",
      result: "Polished weekend artifact."
    },
    code: [
      { label: "Live Site", url: "https://ulrikedetective.github.io/UlrikeHerold/coffeeculture/index.html" }
    ],
    tech: ["HTML", "CSS", "JS", "Gemini"],
    next: "Synthesizing creative front-end with back-end pipelines.",
    healthColor: "#B8860B" // Gold
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding">
      <h3 style={{ marginBottom: '3rem', color: 'var(--stone-grey)' }}>{'> 01 // The_Repository'}</h3>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
        {projectsData.map((project, index) => (
          <article key={index} style={{ marginBottom: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <Circle size={12} fill={project.healthColor} stroke="none" />
              <h4 style={{ fontSize: '1.5rem', margin: 0 }}>{project.title}</h4>
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--stone-grey)', marginBottom: '2rem', fontFamily: 'monospace' }}>
              [{project.status}] // {project.impact}
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
              {/* Left Column */}
              <div>
                <div style={{ marginBottom: '2rem' }}>
                  <h5 style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>// The Challenge</h5>
                  <p>{project.challenge}</p>
                </div>
                
                <div style={{ marginBottom: '2rem' }}>
                  <h5 style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>// The Way & Logic</h5>
                  <p style={{ marginBottom: '0.5rem' }}>{project.process}</p>
                  <p style={{ fontSize: '0.9rem', opacity: 0.9 }}>{project.logic}</p>
                </div>

                <div>
                  <h5 style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>{'>_ Next'}</h5>
                  <p>{project.next}</p>
                </div>
              </div>

              {/* Right Column */}
              <div>
                {/* Data Cleaning Flex Box */}
                <div style={{ 
                  border: '1px solid var(--stone-grey)', 
                  padding: '1.5rem', 
                  marginBottom: '2rem',
                  backgroundColor: '#fafafa'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: 'var(--accent-terracotta)' }}>
                    <Database size={16} />
                    <strong>The Data Cleaning Flex</strong>
                  </div>
                  
                  <div style={{ fontSize: '0.9rem' }}>
                    <p style={{ marginBottom: '0.8rem' }}><strong>Input:</strong> {project.cleanFlex.input}</p>
                    <p style={{ marginBottom: '0.8rem' }}><strong>Fix:</strong> {project.cleanFlex.fix}</p>
                    <p><strong>Result:</strong> {project.cleanFlex.result}</p>
                  </div>
                </div>

                <div style={{ marginBottom: '2rem' }}>
                  <h5 style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>// The Tech</h5>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {project.tech.map(t => (
                      <span key={t} style={{ 
                        fontSize: '0.8rem', 
                        padding: '0.2rem 0.6rem', 
                        border: '1px solid var(--text-color)',
                        borderRadius: '4px'
                      }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h5 style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>// Source</h5>
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    {project.code.map((link, i) => (
                      <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', textDecoration: 'underline' }}>
                        {link.label} <ArrowUpRight size={14} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div style={{ borderBottom: '1px solid #e0e0e0', marginTop: '3rem', width: '100%' }}></div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
