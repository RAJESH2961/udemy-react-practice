import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import EditEventPage from './pages/EditEvent';
import ErrorPage from './pages/Error';
import EventDetailPage, {
  loader as eventDetailLoader,
  action as deleteEventAction,
} from './pages/EventDetail';
import EventsPage, { loader as eventsLoader } from './pages/Events';
import EventsRootLayout from './pages/EventsRoot';
import HomePage from './pages/Home';
import NewEventPage from './pages/NewEvent';
import RootLayout from './pages/Root';
import { action as manipulateEventAction } from './components/EventForm';
import NewsletterPage, { action as newsletterAction } from './pages/Newsletter';

// Authentication
import AuthenticationPage, {action as authAction} from './pages/Authentication'
// logout function action to clear storege in local
import { action as logoutAction } from './pages/Logout.js';
// triggering token loader to load data from local storage and make availabe int he token variable to update the UI based on that
import { tokenLoader } from './util/auth.js';
// TO protect route
import { checkAuthLoader } from './util/auth.js';
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    id: 'root', // now root will contain token because in below we called the token loader
    // when / is entered the loader will call the function and getd token.
    loader: tokenLoader, // Here we have token returned by thos function ans stored in above id
    children: [
      { index: true, element: <HomePage /> },
      { path: 'auth', element: <AuthenticationPage />, action: authAction },
      {
        path: 'events',
        element: <EventsRootLayout />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: eventsLoader,
          },
          {
            path: ':eventId',
            id: 'event-detail',
            loader: eventDetailLoader,
            children: [
              {
                index: true,
                element: <EventDetailPage />,
                action: deleteEventAction,
              },
              {
                path: 'edit',
                element: <EditEventPage />,
                action: manipulateEventAction,
                loader: checkAuthLoader,
              },
            ],
          },
          {
            path: 'new',
            element: <NewEventPage />,
            action: manipulateEventAction,
            loader: checkAuthLoader,
          },
        ],
      },
      {
        path: 'newsletter',
        element: <NewsletterPage />,
        action: newsletterAction,
      },
      // LOgout Url
      {
        path: 'logout',
        action: logoutAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
