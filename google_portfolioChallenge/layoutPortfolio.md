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

##### **Project 02: [Tech layoffs]**
* **The Challenge (The Hard Part):** Getting to know the industry I am thinking of entering and building a project to show my skills and knowledge.
* **The Process (The Way):** Explain your PM approach. Did you use a Gantt chart? A Lean workflow? > *Example:* "Mapped the data flow using a state machine before writing the first line of Python."
* **The Logic (The How):** The technical strategy. > *Example:* "Rebuilt the ingestion engine using an asynchronous worker pattern to decouple the data stream from the processing layer."
* **✨ The Data Cleaning Flex**
    * **Input (the raw chaos):** 4.2GB of "junk" telemetry with inconsistent timestamps and nested null values.
    * **The Fix (The Elegant Logic):** Wrote a custom Python-based sanitizer that normalized time-series data and handled edge-case nulls via a predictive imputation script.
    * **Result (The Satisfaction):** Turned a corrupted graveyard into a high-fidelity analytics source.
* **The Code (The Source):** `[ View Repository ]`| `[Read Documentation]`
* **The Tools (The Tech):** `Python` / `Pandas` / `Docker`
* **The Future (The Next):** Scaling to handle real-time streaming via Kafka.

##### **Project 03: [... on the road] - Ongoing**
* **The Challenge (The Hard Part):** Getting my three passions together: Data, Coding and Travel. And finding a usecase for my metadata from photos, google maps and apple fitness. And having side trips into data privacy and security.
* **The Process (The Way):** Actually this project contains several subprojects. I am currently working on. The public one is a webpage with the places I visited - https://ulrikedetective.github.io/UlrikeHerold/continent_map_pins.html . Then there is the data collecting of my data from google maps and apple fitness and others with the process of understanding the structure of the data and bring them into a format I can work with. And then there is the data cleaning and analysis of my data.
* **The Logic (The How):** The technical strategy. > *Example:* "Rebuilt the ingestion engine using an asynchronous worker pattern to decouple the data stream from the processing layer."
* **✨ The Data Cleaning Flex**
    * **Input (the raw chaos):** 4.2GB of "junk" telemetry with inconsistent timestamps and nested null values.
    * **The Fix (The Elegant Logic):** Wrote a custom Python-based sanitizer that normalized time-series data and handled edge-case nulls via a predictive imputation script.
    * **Result (The Satisfaction):** Turned a corrupted graveyard into a high-fidelity analytics source.
* **The Code (The Source):** `[ View Repository ]`| `[Read Documentation]`
* **The Tools (The Tech):** `Python` / `Pandas` / `Docker`
* **The Future (The Next):** Scaling to handle real-time streaming via Kafka.

#### > [Project 05: [Coffee Code - the fun weekend CSS project]]
* **The Challenge (The Hard Part):** I love coffee, it's not nice outside and there is a CSS Challenge on devpost (I think)
* **The Process (The Way):** 
* **The Logic (The How):** The technical strategy. > *Example:* "Rebuilt the ingestion engine using an asynchronous worker pattern to decouple the data stream from the processing layer."
* **✨ The Data Cleaning Flex**
    * **Input (the raw chaos):** 4.2GB of "junk" telemetry with inconsistent timestamps and nested null values.
    * **The Fix (The Elegant Logic):** Wrote a custom Python-based sanitizer that normalized time-series data and handled edge-case nulls via a predictive imputation script.
    * **Result (The Satisfaction):** Turned a corrupted graveyard into a high-fidelity analytics source.
* **The Code (The Source):** `[ View Repository ]`| `[Read Documentation]`
* **The Tools (The Tech):** `Python` / `Pandas` / `Docker`
* **The Future (The Next):** Scaling to handle real-time streaming via Kafka.

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
