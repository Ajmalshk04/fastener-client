// Example function to handle API errors
export const handleApiError = (error) => {
  if (error.response) {
    // Server responded with a status code outside the range 2xx
    console.error("Server Error:", error.response.data);
  } else if (error.request) {
    // Request was made but no response received
    console.error("Network Error:", error.request);
  } else {
    // Something happened in setting up the request
    console.error("Error:", error.message);
  }
};

// Example function to format request payload
export const formatRequestPayload = (data) => {
  return JSON.stringify(data);
};
