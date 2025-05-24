    // Adjusting code to fetch data based on keywords and normal fetch
    // The url will be changed dynamically
    export default async function fetchEvents({ signal, searchTerm }) {
        console.log(searchTerm);
        
        let url = 'http://localhost:3000/events';
        // if there is searchterm then the url will change
        if(searchTerm) {
            url +='?search=' + searchTerm
        }

      const response = await fetch(url, {signal: signal});

      if (!response.ok) {
        const error = new Error('An error occurred while fetching the events');
        error.code = response.status;
        error.info = await response.json();
        throw error;
      }

      const { events } = await response.json();

      return events;
    }