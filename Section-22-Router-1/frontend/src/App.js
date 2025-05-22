// Challenge / Exercise

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// 4. Add properly working links to the MainNavigation
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

// Page Components
import HomePage from './pages/Home';
import EventsPage, {loader as eventLoader} from './pages/Events';
import EventDetailPage, { loader as eventDetailLoader ,action as deleteEventAction} from './pages/EventDetail';
import NewEventPage,{ action as newEventAction } from './pages/NewEvent';
import EditEventPage from './pages/EditEvent';

// Layout Components
import RootLayout from './pages/Root';
import EventRootLayout from './pages/EventsRoot';

//Error code
import ErrorPage from './pages/Error';

// Define router configuration
// Define router configuration
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage/>,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'events',
        element: <EventRootLayout />,
        children: [
          { index: true, element: <EventsPage />, // <EventsPage /> gets the data returned by below function
            loader: eventLoader, // this will call the Loader() in Event.js
          },
          {
          path: ':eventId',
          id : 'event-detail',
          loader: eventDetailLoader,
          children: [
            { index: true, element: <EventDetailPage />, action: deleteEventAction },
            { path: 'edit', element: <EditEventPage />},
          ],
        },
          { path: 'new', element: <NewEventPage />, action: newEventAction },
        ],
      },
    ],
  },
]);

// Root App component
function App() {
  return <RouterProvider router={router} />;
}

export default App;

