// src/services/apiClient.js

// Obtiene la API key desde el archivo .env
const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

// Valida que la API key exista
if (!API_KEY) {
  throw new Error("Falta configurar VITE_OPENWEATHER_API_KEY en el archivo .env");
}

// URL base de OpenWeather
const BASE_URL = "https://api.openweathermap.org/data/2.5";

// Obtiene el clima actual según latitud y longitud
export async function obtenerClimaActual(lat, lon) {
  try {
    const res = await fetch(
      `${BASE_URL}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=es`
    );

    // Valida si la respuesta fue exitosa
    if (!res.ok) {
      throw new Error(`Error API clima actual: ${res.status}`);
    }

    // Convierte la respuesta a JSON
    const data = await res.json();

    // Retorna los datos obtenidos
    return data;
  } catch (error) {
    console.error("Error al obtener clima actual:", error);
    throw error;
  }
}

// Obtiene el pronóstico según latitud y longitud
export async function obtenerPronostico(lat, lon) {
  try {
    const res = await fetch(
      `${BASE_URL}/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=es`
    );

    // Valida si la respuesta fue exitosa
    if (!res.ok) {
      throw new Error(`Error API pronóstico: ${res.status}`);
    }

    // Convierte la respuesta a JSON
    const data = await res.json();

    // Retorna los datos obtenidos
    return data;
  } catch (error) {
    console.error("Error al obtener pronóstico:", error);
    throw error;
  }
}