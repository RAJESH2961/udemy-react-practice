import React from 'react';
import { Link } from 'react-router-dom';
import './EventsList.css'; // Import the CSS for styling

const DUMMY_EVENTS = [
  {
    id: 'e1',
    title: 'React Conference 2025',
    date: '2025-06-10',
    location: 'San Francisco, CA',
    description: 'A conference to learn and connect with React experts around the globe.'
  },
  {
    id: 'e2',
    title: 'JavaScript Bootcamp',
    date: '2025-07-01',
    location: 'New York, NY',
    description: 'Intensive bootcamp covering modern JavaScript, ES6+, and real-world apps.'
  },
  {
    id: 'e3',
    title: 'Frontend Dev Meetup',
    date: '2025-08-15',
    location: 'Austin, TX',
    description: 'Casual meetup for frontend developers to share ideas and collaborate.'
  },
  {
    id: 'e4',
    title: 'Tech Talk: AI in Web Dev',
    date: '2025-09-05',
    location: 'Remote',
    description: 'Join us for a talk on how AI tools are changing front-end development.'
  },
  {
    id: 'e5',
    title: 'CSS Mastery Workshop',
    date: '2025-10-12',
    location: 'Chicago, IL',
    description: 'Hands-on CSS workshop focusing on layout, animations, and advanced techniques.'
  },
];

function EventsPage() {
  return <>
  <h1>Events Page</h1>
<div className="event-list">
  {DUMMY_EVENTS.map(event => (
    <div className="event-card" key={event.id}>
      <img 
        src={`https://picsum.photos/seed/${event.id}/300/150`} 
        alt={event.title} 
        className="event-image" 
      />
      <h2>{event.title}</h2>
      <p><strong>Date:</strong> {event.date}</p>
      <p><strong>Location:</strong> {event.location}</p>
      <p>{event.description}</p>
      <Link to={event.id} className="btn">View Details</Link>
    </div>
  ))}
</div>

  </>
}

export default EventsPage;
