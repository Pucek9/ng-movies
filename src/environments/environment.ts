const
  host = 'http://marblejs-example.herokuapp.com',
  apiVersion = 'v1',
  allowCorsWorkaround = 'https://cors-anywhere.herokuapp.com',
  apiURL = `${allowCorsWorkaround}/${host}/api/${apiVersion}`;

export const environment = {
  production: false,
  apiURL
};
