const BASE_URL = 'https://62ef78d08d7bc7c2eb7a658d.mockapi.io/events';

export const getEvents = () => {
  return fetch(BASE_URL).then((res) => {
    if (!res.ok) {
      throw new Error("Internal Server Error. Can't display event");
    }

    return res.json();
  });
};

export const createEvent = (eventData) => {
  return fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(eventData),
  });
};

export const deleteEvent = (eventId) => {
  return fetch(`${BASE_URL}/${eventId}`, {
    method: 'DELETE',
  });
};
