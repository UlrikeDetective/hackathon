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
| ***Color Theme*** | Athens (Greece) | Theme: Ancient Marble and the Aegean Sea. The quintessential Mediterranean palette. Sun-baked white, warm marble that glows at sunset, deep olive greens, and the varying blues of the sea surrounding Attica.
Tone	Hex Codes
The Acropolis	#FDF5E6 (Warm White), #FAEBD7 (Antique Marble), #E6CDB7 (Sunlit Column)
The Aegean	#0047AB (Cobalt Blue), #007FFF (Azure), #40E0D0 (Turquoise Shallows)
Landscape	#556B2F (Olive Grove), #808000 (Dried Herb), #A9A9A9 (Stone Grey)
Accents	#E2725B (Terracotta Roof), #FFDAB9 (Peach Sunset), #B8860B (Byzantine Gold)


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
* **The Challenge (The Hard Part):** Getting a task - local council budgets for the 10 local councils in Leipzig. 50.000 Euros (now 55.000 Euros - thanks to our good work) per Council and year and show the data in a dashboard. Make it work legally and transparently. And show that the budgets are working for local participation efforts.
* **The Process (The Way):** After setting up the project, find a team of 3-4 people to work on it, create, test and set-up application forms to apply for the budgets (all in less than three months), get the council members on board, do promote the local budgets to the public, I also set-up a database to store all the information about the when, where, who, what, how much and so on to can monitor the project but also can generate insights in the project. My team is great in the administrative work and I am the one who is responsible for the technical, data and political side of the project.
* **The Logic (The How):** The technical strategy. > *Example:* "Sadly we still have a few data breaks in the data, but we are working on it. At the moment the applications for the budgets are received through Formcycle (Step 1). We than check the application and transfer them into the concil information system (Step 2). All informations about an application can be found here including the status of the application, the documents, the budget, the project, the council, the date, the time and so on. I also set-up a database to store all the information about the when, where, who, what, how much and so on to can monitor the project but also can generate insights in the project (Step 3). The data from Step 3 is used to generate insights in the project (Step 4). A report is generated every year and sent to the council (Step 5). Every five years an audit is done and the budget is updated (Step 6). For this step we also do a survey to get the feedback of the council members, applicants and the public (Step 7)."
* **✨ The Data Cleaning Flex**
    * **Input (the raw chaos):** Not everyone love and cares about good, clean data like I do. I again learned the hard way that half of my team thought Excel is Word. Since than I put quiet a lot of conditional statements and rules into the files to make sure that the data is clean and consistent. That numbers are numbers and texts are strings.
    * **The Fix (The Elegant Logic):** Still some cleanings are still needed. I normally start with Excel to clean misspellings and then I use Python or R to clean the data and make sure that the data is clean and consistent. I also use Python to create charts and visualizations to make the data more accessible and easier to understand. With the cleaned Excel/csv the public dashboard is also created.
    * **Result (The Satisfaction):** Turned a project into a success and I have proof of it.
* **The Code (The Source):** `[ open data ] - https://opendata.leipzig.de/dataset/stadtbezirksbudget`| `[Read Documentation] - https://ratsinformation.leipzig.de/allris_leipzig_public/vo020?VOLFDNR=2013109&refresh=false`
* **The Tools (The Tech):** `Python` / `R` / `Excel` / `Formcycle`
* **The Future (The Next):** Getting ride of some data breaks. Next the automation of the application into the council information system and to build an internal dashboard to monitor the project.

##### **Project 01: [Project Name]**
* **The Challenge (The Hard Part):** Briefly describe the "impossible" problem. Why was this difficult? (e.g., "The API was failing under 500ms latency requirements."). A legacy system was leaking memory and dropping 15% of its incoming packets due to unoptimized JSON parsing.
* **The Process (The Way):** Explain your PM approach. Did you use a Gantt chart? A Lean workflow? > *Example:* "Mapped the data flow using a state machine before writing the first line of Python."
* **The Logic (The How):** The technical strategy. > *Example:* "Rebuilt the ingestion engine using an asynchronous worker pattern to decouple the data stream from the processing layer."
* **✨ The Data Cleaning Flex**
    * **Input (the raw chaos):** 4.2GB of "junk" telemetry with inconsistent timestamps and nested null values.
    * **The Fix (The Elegant Logic):** Wrote a custom Python-based sanitizer that normalized time-series data and handled edge-case nulls via a predictive imputation script.
    * **Result (The Satisfaction):** Turned a corrupted graveyard into a high-fidelity analytics source.
* **The Code (The Source):** `[ View Repository ]`| `[Read Documentation]`
* **The Tools (The Tech):** `Python` / `Pandas` / `Docker`
* **The Future (The Next):** Scaling to handle real-time streaming via Kafka.

##### **Project 01: [Project Name]**
* **The Challenge (The Hard Part):** Briefly describe the "impossible" problem. Why was this difficult? (e.g., "The API was failing under 500ms latency requirements."). A legacy system was leaking memory and dropping 15% of its incoming packets due to unoptimized JSON parsing.
* **The Process (The Way):** Explain your PM approach. Did you use a Gantt chart? A Lean workflow? > *Example:* "Mapped the data flow using a state machine before writing the first line of Python."
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
  "environment": ["Docker", "AWS", "Linux/zsh"],
  "data_science": ["Pandas", "NumPy", "BeautifulSoup", "ETL Pipelines"],
  "leadership": ["Agile/Scrum", "Risk Mitigation", "Technical Roadmap Design"]
}

```

---

## 03 // The_Log
#### > [Current Experiments]

* `[Current Date]`: Investigating the performance overhead of [Tech] vs [Tech].
* `[Last Week]`: Finally mastered a complex Vim workflow. Efficiency increased by 12%.
* `[Learning]`: Deep dive into Distributed Systems and CAP Theorem.

---

## 04 // Connect

* **Terminal:** `[Email Address]`
* **Network:** `[LinkedIn Profile]`
* **Source:** `[GitHub Profile]`

---

### 🎨 05 // Visual Identity & Variables

* **Background:** `#FAFAFA` (Off-white canvas)
* **Text:** `#1A1A1A` (High-contrast ink)
* **Accent:** `#00FF41` (Terminal Green) OR `#007AFF` (Cyber Blue)
* **Typography:** `JetBrains Mono` or `Fira Code`
* **Spacing:** `padding: 4rem` (Embrace the white space)
* ** To maintain the "Less is More" aesthetic with all these new sections, I recommend a two-column layout for the project details:
    * Left Side: Title, Challenge, The Way, The Next.
    * Right Side: (Boxed in a light grey 1px border) The Data Cleaning Flex and The Tech.
* adding a small "Project Health" indicator (like a tiny green status light icon) at the top of each project to show you think about the lifecycle, not just the code.
