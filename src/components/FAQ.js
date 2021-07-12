import React, { useState } from 'react'
import { Link } from 'react-scroll'
import './FAQ.css'

function Accordian({faq, index, toggleFAQ}) {
    return (
        <div className={"faq " + (faq.open ? "open" : "")} key={index} onClick={() => toggleFAQ(index)}>
            <div className="faq-question">
                {faq.question}
                <i className={"faq-icon fas fa-xs " + (faq.open ? "fa-minus" : "fa-plus")}></i>
            </div>
            <div className="faq-answer">
                {faq.answer1}{faq.link}{faq.answer2}
            </div>
        </div>
    )
}

function FAQ () {
    const [faqs, setFaqs] = useState([
        {
            question: "What is SBUHacks?",
            answer1: "SBUHacks is a hackathon where students are challenged to further what they know by doing projects on what they are passionate about. Come through to have fun with fellow students like you put together something unforgettable.",
            link: null,
            answer2: "",
            open: false
        },
        {
            question: "What’s a hackathon?",
            answer1: "A hackathon is best described as an “invention marathon”. Anyone who has an interest in technology can attend a hackathon to learn, build & share their creations. The space to hack these projects is a relaxed and welcoming atmosphere where anyone can attend. You don’t have to be a programmer and you certainly don’t have to be majoring in Computer Science.",
            link: null,
            answer2: "",
            open: false
        },
        {
            question: "Will SBUHacks be in person or virtual?",
            answer1: "The event will be virtual.",
            link: null,
            answer2: "",
            open: false
        },
        {
            question: "What if I have no experience or ideas?",
            answer1: "SBUHacks is a place for people of all skill levels. Whether you are learning to code for the first time or been coding for years, we have events catered to your needs. Don't have an idea? You don't need one walking in. Either Inspiration will hit or maybe you can rally behind a team member's idea.",
            link: null,
            answer2: "",
            open: false
        },
        {
            question: "What is Discord?",
            answer1: "Throughout the event, we will be using Discord as the main form of communication. Never used Discord before? ",
            link: <a href="https://www.youtube.com/watch?v=LDVqruRsYtA">Here's</a>,
            answer2: " a quick introduction!",
            open: false
        },
        {
            question: "What is DevPost?",
            answer1: "After the 24 hours, you’ll be submitting your project to DevPost for judging! New to Devpost? ",
            link: <a href="https://www.youtube.com/watch?v=vCa7QFFthfU">Here's</a>,
            answer2: " a quick introduction!",
            open: false
        },
        {
            question: "What events are there?",
            answer1: "We will have a number of talks by clubs, companies, as well as virtual games and competitions (with prizes)!",
            link: null,
            answer2: "",
            open: false
        },
        {
            question: "How much does it cost?",
            answer1: "Attendance is 100% free!",
            link: null,
            answer2: "",
            open: false
        },
        {
            question: "How do teams work?",
            answer1: "We encourage people to work in teams of up to four. If you can't find a team beforehand, worry not - there will be time to form teams after registration.",
            link: null,
            answer2: "",
            open: false
        },
        {
            question: "Who can apply?",
            answer1: "Any undergraduate or graduate student! Also, anyone who has graduated within the last 12 months is still eligible to attend.",
            link: null,
            answer2: "",
            open: false
        },
        {
            question: "Guidelines",
            answer1: "Don't bring any firearms, knives, weapons, drugs, or alcohol. Please read the ",
            link: <a href="http://mlh.io/code-of-conduct">MLH Code of Conduct</a>,
            answer2: ". Organizers will enforce this code throughout the event. We are expecting cooperation from all participants to help ensure a safe environment for everybody.",
            open: false
        },
        {
            question: "How will swag work?",
            answer1: "Swag and prizes will be given only to those that submit a project during the hackathon. Those that live near or on campus are encouraged to pick up swag after the event. Otherwise, we will ship to your address indicated on the registration form. Domestic shipping only.",
            link: null,
            answer2: "",
            open: false
        }
    ])

    // returns the faq being opened, sets its opened to true, and closes all others
    const toggleFAQ = i => {
        setFaqs(faqs.map((faq, index) => {
            if (index == i) {
                faq.open = !faq.open
            } else {
                faq.open = false
            }

            return faq
        }))
    }

    return (
        <section className="faq-container" id={"faq"}>
            <h1 className="section-title">FAQ</h1>
            <div className="faq-wrapper">
                <div className="faq-column">
                    {faqs.slice(0, faqs.length / 2).map((faq, index) => (
                        <Accordian faq={faq} index={index} toggleFAQ={toggleFAQ} />
                    ))}
                </div>
                <div className="faq-column">
                    {faqs.slice(faqs.length / 2).map((faq, index) => (
                        <Accordian faq={faq} index={index + faqs.length / 2} toggleFAQ={toggleFAQ} />
                    ))}
                </div>
            </div>
            <h2 className="faq-more">More Questions?</h2>
            <Link to="contact" smooth={true} duration={300} spy={true} exact="true" offset={-10}>
                <button className="general-button">Contact Us</button>
            </Link>
        </section>
    )
}

export default FAQ