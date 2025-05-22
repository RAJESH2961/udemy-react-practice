import React from 'react';

import { useParams } from 'react-router-dom'


function EventDetailPage() {
    const params = useParams();

  return <>
  <p>Event id : {params.eventId}</p>
  
  </>
}

export default EventDetailPage;
