export function generateShortId() {
  return Math.random().toString(36).substring(2, 8); 
}

export function saveToStorage(id, url) {
  localStorage.setItem(`short_${id}`, url);
}

export function getFromStorage(id) {
  return localStorage.getItem(`short_${id}`);
}
