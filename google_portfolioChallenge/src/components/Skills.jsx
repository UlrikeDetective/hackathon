import React from 'react';

const Skills = () => {
  const skills = {
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
  };

  return (
    <section className="section-padding">
      <h3 style={{ marginBottom: '2rem', color: 'var(--stone-grey)' }}>{'> 02 // Environment_Variables'}</h3>
      <h4 style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>[Skills / system_requirements.json]</h4>
      
      <div style={{ 
        backgroundColor: '#f5f5f5', 
        padding: '2rem', 
        borderRadius: '8px', 
        fontFamily: 'monospace', 
        fontSize: '0.9rem',
        overflowX: 'auto',
        border: '1px solid #e0e0e0'
      }}>
        <pre style={{ margin: 0 }}>
          <code style={{ color: 'var(--text-color)' }}>
            {`{`}
            {Object.entries(skills).map(([category, items], index, arr) => (
              <div key={category} style={{ paddingLeft: '1.5rem' }}>
                <span style={{ color: 'var(--accent-terracotta)' }}>"{category}"</span>: [
                {items.map((item, i) => (
                  <span key={item}>
                    <br/>
                    <span style={{ paddingLeft: '1.5rem', color: 'var(--accent-olive)' }}>"{item}"</span>
                    {i < items.length - 1 ? ',' : ''}
                  </span>
                ))}
                <br/>
                ]{index < arr.length - 1 ? ',' : ''}
              </div>
            ))}
            {`}`}
          </code>
        </pre>
      </div>
    </section>
  );
};

export default Skills;
