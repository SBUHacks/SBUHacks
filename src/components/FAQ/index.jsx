import React, { useState } from 'react';
import { Link } from 'react-scroll';
import Accordion from './Accordion';
import './faq.css';

// Creates a factory function to generate the FAQs
const faqFactory = (question, answer1, link, answer2) => {
  const properties = {
    question,
    answer1,
    link,
    answer2,
    open: false,
  };

  const methods = {
    get open() {
      return properties.open;
    },
    // eslint-disable-next-line no-empty-function
    set open(bool) { },
  };

  return { ...properties, ...methods };
};

// Array of FAQs using faqFactory
const faqs = [
  faqFactory(
    'What is SBUHacks?',
    'SBUHacks is a hackathon where students are challenged to further what they know by doing projects on what they are passionate about. Come through to have fun with fellow students like you put together something unforgettable.',
    null,
    '',
  ),
  faqFactory(
    'What’s a hackathon?',
    'A hackathon is best described as an “invention marathon”. Anyone who has an interest in technology can attend a hackathon to learn, build & share their creations. The space to hack these projects is a relaxed and welcoming atmosphere where anyone can attend. You don’t have to be a programmer and you certainly don’t have to be majoring in Computer Science.',
    null,
    '',
  ),
  faqFactory(
    'Will SBUHacks be in person or virtual?',
    'The event will be virtual.',
    null,
    '',
  ),
  faqFactory(
    'What if I have no experience or ideas?',
    'SBUHacks is a place for people of all skill levels. Whether you are learning to code for the first time or been coding for years, we have events catered to your needs. Don\'t have an idea? You don\'t need one walking in. Either Inspiration will hit or maybe you can rally behind a team member\'s idea.',
    null,
    '',
  ),
  faqFactory(
    'What is Discord?',
    'Throughout the event, we will be using Discord as the main form of communication. Never used Discord before? ',
    <a href="https://www.youtube.com/watch?v=LDVqruRsYtA">Here&apos;s</a>,
    ' a quick introduction!',
  ),
  faqFactory(
    'What is DevPost?',
    'After the 24 hours, you’ll be submitting your project to DevPost for judging! New to Devpost? ',
    <a href="https://www.youtube.com/watch?v=vCa7QFFthfU">Here&apos;s</a>,
    ' a quick introduction!',
  ),
  faqFactory(
    'What events are there?',
    'We will have a number of talks by clubs, companies, as well as virtual games and competitions (with prizes)!',
    null,
    '',
  ),
  faqFactory(
    'How much does it cost?',
    'Attendance is 100% free!',
    null,
    '',
  ),
  faqFactory(
    'How do teams work?',
    'We encourage people to work in teams of up to four. If you can\'t find a team beforehand, worry not - there will be time to form teams after registration.',
    null,
    '',
  ),
  faqFactory(
    'Who can apply?',
    'Any undergraduate or graduate student! Also, anyone who has graduated within the last 12 months is still eligible to attend.',
    null,
    '',
  ),
  faqFactory(
    'Guidelines',
    'Don\'t bring any firearms, knives, weapons, drugs, or alcohol. Please read the ',
    <a href="http://mlh.io/code-of-conduct">MLH Code of Conduct</a>,
    '. Organizers will enforce this code throughout the event. We are expecting cooperation from all participants to help ensure a safe environment for everybody.',
  ),
  faqFactory(
    'How will swag work?',
    'Swag and prizes will be given only to those that submit a project during the hackathon. Those that live near or on campus are encouraged to pick up swag after the event. Otherwise, we will ship to your address indicated on the registration form. Domestic shipping only.',
    null,
    '',
  ),
];

// The FAQ page
function FAQ() {
  const [currentIndex, setCurrentIndex] = useState(null);

  // Opens the selected FAQ and closes all others
  function handleClick(newIndex) {
    if (currentIndex === null) {
      faqs[newIndex].open = true;
    } else {
      faqs[currentIndex].open = false;
      faqs[newIndex].open = true;
    }
    setCurrentIndex(newIndex);
  }

  return (
    <div className="faq-container general-style" id="faq">
      <h1 className="section-title general-style">FAQ</h1>
      {/* The FAQs are split into 2 independent columns so that opening one on the left side
          does not also create additional space on the right side */}
      <div className="faq-wrapper general-style">
        <div className="faq-column general-style">
          {faqs.slice(0, faqs.length / 2).map((faq, index) => (
            <Accordion
              faq={faq}
              index={index}
              key={faq.question}
              toggleFAQ={handleClick}
            />
          ))}
        </div>
        <div className="faq-column general-style">
          {faqs.slice(faqs.length / 2).map((faq, index) => (
            <Accordion
              faq={faq}
              index={index + faqs.length / 2}
              key={faq.question}
              toggleFAQ={handleClick}
            />
          ))}
        </div>
      </div>
      <Link to="contact" smooth duration={300} spy exact="true" offset={-10}>
        <button id="more-q-button" className="general-button general-style" type="button">
          <p>More Questions?</p>
          <p>Contact Us</p>
        </button>
      </Link>
    </div>
  );
}

export default FAQ;
