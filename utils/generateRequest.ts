// requestHelper.ts

type RequestMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

interface GenerateRequestOptions {
  method: RequestMethod;
  url: string;
  headers?: HeadersInit;
  body?: any;
}

export const generateRequest = async ({
  method,
  url,
  headers = {},
  body,
}: GenerateRequestOptions): Promise<any> => {
  const options: RequestInit = {
    method,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
  };

  if (body) {
    options.body = JSON.stringify(body);
  }

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Request failed", error);
    throw error;
  }
};
