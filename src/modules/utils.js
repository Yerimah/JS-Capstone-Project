const requestURL = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/`;

export const getAppID = async () => {
  const response = await fetch(requestURL, {
    method: 'POST', 
    body: JSON.stringify({
      name: 'cinemash'
    }),
    headers: {
      'Content-type': 'application/json;',
    }
  });
  const result = await response.json();
  console.log(result);
}

