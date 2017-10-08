function ServiceError(status) {
  this.status = status;
  this.serviceError = true;
}

export default class ApiService {
  setup(baseUrl, token) {
    this.baseUrl = baseUrl;
    this.token = token;
  }

  request(uri, opts) {
    opts = opts || {};

    const newHeaders = {
      "Content-Type": "application/json"
    };

    if (opts.body) {
      opts.body = JSON.stringify(opts.body);
    }

    if (this.token) {
      newHeaders["Authorization"] = `Bearer ${this.token}`;
    }

    opts = {
      ...opts,
      headers: {
        ...opts.headers,
        ...newHeaders
      }
    };


    return fetch(this.baseUrl + uri, opts)
      .then(response => {
        if (response.status >= 200 && response.status < 300) {
          return response.json();
        }
        const error = new ServiceError(response.status);
        if (response.status === 400) {
          return response.json().then(r => {
            const errors = r.error;
            error.validation = !!errors;
            error.errors = errors;
            throw error;
          });
        }
        throw error;
      });
  }
}
