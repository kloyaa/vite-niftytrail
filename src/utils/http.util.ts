import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

// HTTP client class
export class HttpClient {
  private instance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL as string, 
  });

  // Method for making HTTP requests
  async request<T>(config: AxiosRequestConfig): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.instance.request<T>(config);
      return response.data;
    } catch (error) {
      throw this.handleRequestError(error as AxiosError);
    }
  }

  // Handle request errors and convert them to a consistent format
  private handleRequestError(error: AxiosError): any {
    if (error.response) {
      // The request was made and the server responded with a status code
      const { data } = error.response;
      return data;
    } else if (error.request) {
      // The request was made but no response was received
      return new Error('No response received from the server.');
    } else {
      // Something happened in setting up the request
      return new Error(`Error: ${error.message}`);
    }
  }
}

