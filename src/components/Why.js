import React, { useState } from 'react'
import './Why.css'

function WhyCard({card, index}) {
    return (
        <div className="card" key={index}>
            <div className="card-icon">
                <div className="card-circle" style={{background: card.color}}>
                    {card.icon}
                </div>
            </div>
            <div className="card-content">
                <span className="card-title">{card.title}</span>
                <p className="card-text">{card.text}</p>
            </div>
        </div>
    )
}

function Why () {
    const [cards, setCards] = useState([
        {
            icon: <i class="fas fa-users"></i>, 
            title: "Sponsors", 
            color: "linear-gradient(-45deg, #ff4242, #ff8845)",
            text: "Large companies and inspiring startups looking for talented students like you",
        },
        {
            icon: <i class="fas fa-chalkboard-teacher"></i>, 
            title: "Workshops",  
            color: "linear-gradient(-45deg, #fff73a, #ffa132)",
            text: "Learn about how to transfer your skills to industry or academia"
        },
        {
            icon: <i class="fas fa-laptop-code"></i>, 
            title: "Hacks", 
            color: "linear-gradient(-45deg, #cfff46, #ffdf35)",
            text: "Work on an amazing hack with help from your peers and mentors"
        },
        {
            icon: <i class="fas fa-calendar"></i>, 
            title: "Events", 
            color: "linear-gradient(-45deg, #3effd1, #43fd6c)",
            text: "Fun-packed festivities to make friends and destress"
        },
        {
            icon: <i class="fas fa-comments"></i>, 
            title: "Community", 
            color: "linear-gradient(-45deg, #43ddff, #3e74ff)",
            text: "Create bonds and have unforgettable memories with friends from all over"
        },
        {
            icon: <i class="fas fa-trophy"></i>, 
            title: "Prizes", 
            color: "linear-gradient(-45deg, #d331fc, #8f3afc)",
            text: "Over $4000 in prizes ranging from airpods to Nintendo Switches"
        }
    ])

    return (
        <section className="why-container">
            <h1 className="section-title">Why SBUHacks?</h1>
            <div className="cards-container">
                {cards.map((card, index) => (
                    <WhyCard card={card} key={index}/>
                ))}
            </div>
        </section>
    );
}

export default Why