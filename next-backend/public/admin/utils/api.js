// Make API_BASE_URL global for all admin pages
window.API_BASE_URL =
  window.location.hostname === "localhost"
    ? "http://localhost:3001"   // Local backend URL
    : "https://registerwithus.in/"; // Live backend URL
