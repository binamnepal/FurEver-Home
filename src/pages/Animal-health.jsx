import React from 'react';
import { Link } from 'react-router-dom';
import '../Css file/AnimalHealth.css'; 

const AnimalHealth = () => {
    const healthTips = [
        {
            title: "Balanced Nutrition",
            icon: "🥗",
            content: "Research the specific dietary needs of your pet species. Avoid toxic human foods like onions, caffeine, and artificial sweeteners."
        },
        {
            title: "Enrichment & Play",
            icon: "🎡",
            content: "Physical and mental stimulation prevents boredom and obesity. Use toys, climbing structures, or puzzles tailored to your pet's natural instincts."
        },
        {
            title: "Routine Checkups",
            icon: "🩺",
            content: "Regular veterinary visits are vital for early disease detection. Stay up to date on species-specific vaccinations and parasite prevention."
        },
        {
            title: "Clean Environment",
            icon: "✨",
            content: "Maintain clean habitats, whether it's a litter box, cage, or aquarium. Proper hygiene prevents respiratory issues and skin infections."
        }
    ];

    return (
        <div className="health-page-wrapper">
            <Link to="/" className="back-link">← Back to Home</Link>
            
            <header className="health-header">
                <h1>Universal Animal Health & Wellness</h1>
                <p>Proactive care tips for every member of your furry, feathered, or scaled family.</p>
            </header>

            <section className="health-grid">
                {healthTips.map((tip, index) => (
                    <div className="health-card" key={index}>
                        <div className="card-icon">{tip.icon}</div>
                        <h3>{tip.title}</h3>
                        <p>{tip.content}</p>
                    </div>
                ))}
            </section>

            

            <div className="warning-banner">
                <h3>Universal Emergency Signs</h3>
                <p>Regardless of the species, seek veterinary care if you notice:</p>
                <ul>
                    <li>Difficulty breathing or unusual vocalization of pain</li>
                    <li>Sudden changes in behavior, hiding, or extreme lethargy</li>
                    <li>Refusing food or water for more than 12–24 hours</li>
                    <li>Visible injury, bleeding, or inability to move properly</li>
                </ul>
                <p><strong>Knowing your pet's "normal" is the best way to spot an emergency early.</strong></p>
            </div>
        </div>
    );
};

export default AnimalHealth;