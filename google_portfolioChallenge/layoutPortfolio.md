# Portfolio Blueprint: [Ulrike Herold]
## Aesthetic: Modern Hacker / Minimalist Monospace

---

### 🏗️ 01 // Layout Architecture

| Section | Component | Visual Behavior / CSS Logic |
| :--- | :--- | :--- |
| **Header** | `[Root]` `[Projects]` `[Logs]` | Static, minimalist top-right navigation. 0px box-shadow. |
| **Hero** | The Terminal Hook | Typing effect on title. Single blinking cursor (`#0047AB`). |
| **About** | `about_me.sh` | Contained in a div with `border-left: 2px solid #FDF5E6` and line numbers. |
| **Projects** | The Repository | Max-width container. 1px solid borders. Hover: Subtle lift. |
| **Skills** | `system_config.json` | Syntax-highlighted code block look. |
| **Footer** | `poweroff --now` | Simple contact links in monospace lowercase. |


---

### 📝 02 // Site Copy

#### > [Hero Section]
**Title:** `> Hello, I'm Ulrike.`  
**Subtitle:** Systems Engineer in training. Data Architect in the making. 
**Motto:** Efficiency is quiet. Logic is loud.

---

#### > 00 // System_Overview (About)
`// Initializing about_me.sh...`

I am a developer who values technical truth over optics. I don’t believe in "faking it"—I believe in the grit required to make a project actually work. My approach is defined by a refusal to accept the first "no" and a dry sense of humor that keeps me grounded when a system is failing.

While others chase "shiny" frameworks, I find my flow state in the architecture of complex systems and the meditative process of data cleaning. To me, a messy dataset isn’t a chore; it’s a puzzle. I combine the curiosity of a researcher with the precision of a Project Manager to ensure that every line of code serves a purpose and every milestone is hit.

I am a perpetual learner currently expanding my technical reach, but I bring a high level of discipline to every mission. I don’t need false approval—just a challenging problem and the space to build a cleaner, more efficient way to solve it.

I don't just solve problems; I optimize the process of solving them.

**System Preferences:**
* **Logic over Fluff:** I prefer direct communication and honest code reviews over "polite" errors.
* **Efficiency:** I don’t look for the most complex solution; I look for the one that is most practical. If it can be simplified, it should be.
* **The "Win":** That specific moment when a chaotic dataset finally aligns into 
  a perfect schema.

**Operational Status:** Actively seeking freelance missions where the data is messy and the requirements demand a "get it done" mindset.
* **Philosophy:** Less code, more impact. White space over clutter.
* **Driven by:** Continuous improvement, documentation-as-art, and the "Type-2 Fun" of debugging.
* **Current_Focus:** Becoming exceptionally good at Python, data security, and optimizing my personal CLI.
* **Availability:** Actively seeking freelance missions where the data is messy and the requirements demand a "get it done" mindset.

---

## 01 // The_Repository
#### > [Project Showcase]

##### **Project 01: [Local council budgets 2021 - ongoing]**
// Status: Version 2.1 (Active) // Impact: €550,000 Annual Public Spend managed
* **The Challenge (The Hard Part):** Digitizing the distribution of local council budgets for 10 districts in Leipzig. The mission: build a transparent, legally compliant system to manage €55,000 per council annually, ensuring every Euro is traceable from application to public dashboard.
* **The Process (The Way):** I lead a cross-functional team, moving from a blank slate to a live application system in under 90 days. My role bridged the gap between political diplomacy (council buy-in) and technical architecture. I designed a centralized database to track the who, what, when, and how much, transforming administrative chaos into a structured monitoring system.
* **The Logic (The How):** I engineered a multi-stage pipeline:
    * Ingestion: Structured intake via Formcycle.
    * Validation: Manual/Technical audit and migration to the Council Information System.
    * Relational Storage: Custom database design to map project status, funding documents, and district-specific telemetry.
    * Reporting: Automated annual reports and a 5-year feedback loop powered by public/stakeholder surveys.
* **✨ The Data Cleaning Flex**
    * **Input (the raw chaos):** Dealing with the "Excel-as-Word" syndrome. Data was frequently corrupted by inconsistent formatting, non-numeric strings in budget fields, and varied naming conventions across different team members..
    * **The Fix (The Elegant Logic):** I implemented strict validation rules and conditional logic at the entry point to force data integrity. For legacy cleanup, I built a pipeline using Python and R to sanitize misspellings, normalize strings, and ensure that "numbers are numbers.
    * **Result (The Satisfaction):** Transitioned the project from "guesswork" to a verifiable, high-fidelity public dashboard. Increased the budget by €50k based on the strength of our data-driven reporting.
* **The Code (The Source):** `[ Open Data Portal] - https://opendata.leipzig.de/dataset/stadtbezirksbudget`| `[Documentation] - https://ratsinformation.leipzig.de/allris_leipzig_public/vo020?VOLFDNR=2013109&refresh=false`
* **The Tools (The Tech):** Python / R / Excel (Power Query) / Formcycle / SQL (Database Design)
* **The Future (The Next):** Eliminating remaining "data breaks" by automating the API handshake between Formcycle and the Council Information System. Next milestone: A real-time internal monitoring dashboard.

##### **Project 02: [Tech layoffs] // Industry Intelligence**
// Status: Maintenance Mode (Updating for 2025) // Dataset: 2020 - 2024 (Ongoing)
* **The Challenge (The Hard Part):** Quantifying the volatility of the modern tech landscape. Entering a new industry requires an objective understanding of its risks and cycles. The mission was to transform raw, external reporting into a high-integrity dataset that tracks the "who, where, and when" of industry-wide downsizing.
* **The Process (The Way):** I sourced the primary data via a custom scraper targeting layoffs.fyi. The workflow followed a strict engineering pipeline: Extraction -> Normalization -> PostgreSQL Storage -> Jupyter-based Analysis. This project served as my "training ground" for handling large-scale public datasets and maintaining a local data warehouse.
* **The Logic (The How):** The system is built around a PostgreSQL database designed to store long-term industry trends. I utilized Jupyter Notebooks for the exploratory data analysis (EDA), allowing for a reproducible research environment where every chart is backed by a verifiable query.
* **✨ The Data Cleaning Flex**
    * **Input (the raw chaos):** Scraped data with significant fragmentation—missing employee counts, inconsistent company naming (aliases), and varying date formats.
    * **The Fix (The Elegant Logic):** I utilized R and Python in tandem. I built a series of imputation scripts to handle missing values and a deduplication layer to ensure company entities remained unique across the 4-year span. This ensured that "numbers stayed numbers" and the trends remained statistically significant.
    * **Result (The Satisfaction):** Gained a granular, non-biased view of the tech market. I successfully published the cleaned dataset on Kaggle to contribute back to the data community.
* **The Code (The Source):** [ GitHub Repository ] - tech_layoffs [ Kaggle Dataset ] - tech-layoffs-2020-2024
* **The Tools (The Tech):** `Python` / `Pandas` / `R` / `Postgres` / `Jupyter` / `Excel`
* **The Future (The Next):** Ingesting 2025 telemetry. The goal is to evolve the project into a predictive dashboard that identifies early signals of industry stabilization or shift.

##### **Project 03: [..on the road] // Personal Data Audit**
// Status: Continuous Integration // Focus: Geo-Spatial Intelligence & Data Sovereignty
* **The Challenge (The Hard Part):** Aggregating disparate, high-volume telemetry from Google Maps, Apple Fitness, Spotify, and Meta into a unified "Life Dashboard." The goal is to reclaim my own metadata and transform it from corporate tracking points into meaningful visual insights, while navigating the complex layers of personal data privacy and security.
* **The Process (The Way):** This is a multi-stage technical research project. I reverse-engineer my own digital footprint by extracting raw exports, decoding their proprietary structures, and normalizing them into a queryable format. Visually, I draw inspiration from high-end art newsletters and minimal design, such as using dynamic scaling markers—where the radius of a location pin corresponds to visit frequency.
* **The Logic (The How):** I utilize Python and R for the heavy lifting. The pipeline involves:
    * Extraction: Automating the retrieval of personal archives.
    * Geo-Processing: Using OSMNX and GeoPandas to map coordinates against OpenStreetMap data.
    * Synthesis: Storing the normalized results in a local SQL environment.
    * Refinement: Applying QGIS techniques to create high-fidelity, "postcard-quality" cartography for public-facing visualizations.
* **✨ The Data Cleaning Flex**
    * **Input (the raw chaos):** Thousands of JSON/CSV files with overlapping timestamps, inconsistent GPS accuracy, and varying schemas across different platforms.
    * **The Fix (The Elegant Logic):** I treat this as a deep-research mission. I’ve developed custom logic to deduplicate location pings and handle "signal noise," using a mix of Python scripts and AI-assisted debugging to find the most efficient way to merge Apple’s health metrics with Google’s location history.
    * **Result (The Satisfaction):** Turning "tracking data" into a curated digital autobiography. The methodology developed here directly informs my professional work in educating the public on city layouts and municipal budgets.
* **The Code (The Source):** [ View Map Visualization ] - ulrikedetective.github.io [ View Source Repository ] - [GitHub] - https://github.com/UlrikeDetective/maps 
* **The Tools (The Tech):** `Python` / `R` / `SQL` / `OSMNX` / `GEOPANDAS` / `QGIS`
* **The Future (The Next):** Consolidating these insights into a dedicated technical blog. Future iterations will focus on hardening the local security layer to ensure the dashboard remains a private "sovereign" system.
* **The Look:** - Build here a small gallery of maps and visualizations to show my skills and knowledge.

#### > [Project 05: [Coffee Code] // Weekend Experiment
// Status: Complete // Type: UI/UX Rapid Prototype
* **The Challenge (The Hard Part):** Combatting a grey weekend by translating coffee culture into code. The goal was to execute a high-quality frontend response to a community CSS challenge within a 24-hour window.
* **The Process (The Way):** Utilized Gemini and Google AI Studio as pair programmers to accelerate the prototyping phase. I focused on iterative prompting to refine the UI components, ensuring the "vibe" matched the technical execution.
* **The Logic (The How):** Standard HTML5, CSS3, and vanilla JavaScript. No heavy frameworks—just clean, lightweight code focused on visual impact.
* **✨ The Data Cleaning Flex**
    * **Input (the raw chaos):** A messy blend of initial creative concepts and experimental CSS snippets.
    * **The Fix (The Elegant Logic):** Disciplined iteration. I refactored the generated AI output into a maintainable stylesheet, stripping away the bloat to find a "Less is More" visual balance.
    * **Result (The Satisfaction):** A polished weekend artifact that proves my ability to ship creative frontend work under tight deadlines.
* **The Code (The Source):** [ Live Site ] — Coffee Culture
* **The Tools (The Tech):** `HTML` / `CSS` / `JS` / `Gemini` / `Google AI Studio`
* **The Future (The Next):** Synthesizing this creative "front-end" energy with my "back-end" data pipelines to build more expressive, data-driven web interfaces.

---

## 02 // Environment_Variables
#### > [Skills / system_requirements.json]
```json
{
  "core_languages": ["Python", "R", "SQL"],
  "web_frameworks": ["Django", "REST APIs", "Modern Web Dev"],
  "data_engineering": [
    "PostgreSQL", 
    "MySQL", 
    "Pandas", 
    "NumPy", 
    "ETL Pipelines", 
    "Data Scraping"
  ],
  "dev_ops_environment": [
    "Linux/zsh", 
    "Homebrew", 
    "Conda", 
    "GitHub"
  ],
  "ai_automation": [
    "Gemini CLI", 
    "Google AI Studio", 
    "Google Cloud Console"
  ],
  "system_management": [
    "Agile/Scrum", 
    "Risk Mitigation", 
    "Technical Roadmap Design",
    "Stakeholder Diplomacy"
  ]
}

```

---

## 03 // The_Log
#### > [Current Experiments]

* `[2026-01-10]`: Audit Mode. Performing a massive personal data review of 2025 (metadata, logs, and media assets) with the goal of synthesizing it all into a unified personal dashboard.
* `[In_Progress]`: Compiling the 2025 Municipal Budget Report. High-stakes documentation and data visualization for the Leipzig local councils.
* `[Maintenance]`: Completed a deep dive into GitHub workflow optimization. Sanitized local environments, deprecated stagnant projects, and unified my virtual environment strategy for better system hygiene.
* `[Side_Quest]`: Successfully bypassed a BBC Sounds geo-block annoyance. Since I can't access the audio, I wrote a scraping script to extract playlists from The Chillest Hour. The logic automates the transition to Spotify so the music remains, even if the voice of Sian Eleri is stuck behind a UK IP address.

#### > [System_Updates]

* `[2025_Completed]`: Certified in Full Stack Web Development and Data Security (Coursera).
* `[Current_Stack]`: Building active projects using Django, Python, R, and Postgres.
* `[Research]`: Monitoring daily shifts in the AI and data engineering landscape to keep my "Next" section updated.
---

## 04 // Connect

* **Terminal:** `[herold.ulrike@gmail.com]`
* **Network:** `[https://www.linkedin.com/in/ulrike-herold/]`
* **Source:** `[GitHub Profile https://github.com/UlrikeDetective]`

---

### 🎨 05 // Visual Identity & Variables

* | ***Color Theme*** | Athens (Greece) | Theme: Ancient Marble and the Aegean Sea. The quintessential Mediterranean palette. Sun-baked white, warm marble that glows at sunset, deep olive greens, and the varying blues of the sea surrounding Attica.
Tone	Hex Codes
The Acropolis	#FDF5E6 (Warm White), #FAEBD7 (Antique Marble), #E6CDB7 (Sunlit Column)
The Aegean	#0047AB (Cobalt Blue), #007FFF (Azure), #40E0D0 (Turquoise Shallows)
Landscape	#556B2F (Olive Grove), #808000 (Dried Herb), #A9A9A9 (Stone Grey)
Accents	#E2725B (Terracotta Roof), #FFDAB9 (Peach Sunset), #B8860B (Byzantine Gold)
* **Background:** `#FDF5E6` (Off-white canvas)
* **Text:** `#0047AB` (High-contrast ink)
* **Typography:** `JetBrains Mono` or `Fira Code`
* **Spacing:** `padding: 4rem` (Embrace the white space)
* ** To maintain the "Less is More" aesthetic with all these new sections, I recommend a two-column layout for the project details:
    * Left Side: Title, Challenge, The Way, The Next.
    * Right Side: (Boxed in a light grey 1px border) The Data Cleaning Flex and The Tech.
* adding a small "Project Health" indicator (like a tiny green status light icon) at the top of each project to show you think about the lifecycle, not just the code.
