export default class RequestApi {
  static RequestType = Object.freeze({
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE',
  });

  static request = async (requestType, apiUrl, param, data) => {
    const url = new URL(apiUrl);
    if (param) {
      Object.keys(param).forEach((key) => url.searchParams.append(key, param[key]));
    }

    const response = await fetch(url, {
      method: requestType,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return response.json();
  };

  static GET = async (apiUrl, param) => this.request(this.RequestType.GET, apiUrl, param);

  static POST = async (apiUrl, data) => this.request(this.RequestType.POST, apiUrl, null, data);

  static PUT = async (apiUrl, data) => this.request(this.RequestType.PUT, apiUrl, null, data);

  static DELETE = async (apiUrl, data) => this.request(this.RequestType.DELETE, apiUrl, null, data);
}
