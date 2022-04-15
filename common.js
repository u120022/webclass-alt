const auth = async (username, password) => {
  const res = await fetch('https://u120022.npkn.net/auth-webclass/', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({'username': username, 'password': password})
  });
  return {status: res.status, json: await res.json()};
};

const check = async sessionId => {
  const res = await fetch('https://u120022.npkn.net/check-webclass/', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({'sessionId': sessionId})
  });
  return {status: res.status/*, json: await res.json()*/};
};

const fetches = async (sessionId, paths) => {
  const res = await fetch('https://u120022.npkn.net/fetch-webclass/', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({'sessionId': sessionId, 'paths': paths})
  });
  return {status: res.status, json: await res.json()};
};
