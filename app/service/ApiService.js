import request from 'utils/request';

const BASE_API_URL = 'http://localhost:8080';
const userUrl = `${BASE_API_URL}/user`;

function getHeaders() {
  const headers = new Headers();
  headers.append('cache-control', 'no-cache');
  headers.append('content-type', 'application/json; charset=utf-8');
  return headers;
}

export function fetchUser(userId) {
  const headers = getHeaders();
  return request(
    `${userUrl}/${userId}`,
    { headers }
  );
}

export function saveUser(user, userId) {
  const headers = getHeaders();
  return request(
    `${userUrl}/${userId}`,
    {
      headers,
      method: 'POST',
      body: JSON.stringify(user),
    }
  );
}
