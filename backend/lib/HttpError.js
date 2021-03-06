class HttpError extends Error {
    constructor (status, message) {
      super(message);
      this.name = this.constructor.name;
      Error.captureStackTrace(this, this.constructor);
      this.status = status || 500;
    }
  }
  
 export default HttpError;
  