# ☀️ Weather Web

[![Vercel](https://img.shields.io/badge/WEATHER_WEB-%E2%86%92_VERCEL-purple?style=for-the-badge&logo=vercel)]([weather-web-tawny.vercel.app](https://weather-web-tawny.vercel.app/))

## 📌 ¿Qué hace?  
La web muestra:
- **Clima actual**: Temperatura (°C), precipitación (mm), humedad (%).  
- **Pronóstico 3 días**: Temperaturas máximas/mínimas.

### 🔍 Funcionamiento de geolocalización
1. Al abrir la aplicación, el navegador solicitará permiso para acceder a tu ubicación
2. Si se otorga el permiso:
   - Usa la [API de Geolocalización del navegador](https://developer.mozilla.org/es/docs/Web/API/Geolocation_API) para obtener tus coordenadas
   - Envía estas coordenadas a WeatherAPI para obtener los datos meteorológicos
3. Si se deniega el permiso:
   - Los datos no se cargarán automáticamente

**Nota sobre precisión**: 
- La ubicación mostrada depende de cómo WeatherAPI interprete tus coordenadas

##  🛠 Tecnologías Usadas  
- **Frontend**: React y Tailwind CSS.  
- **API**: WeatherAPI y API de geolocalización (navegador)
- **Deployment**: Vercel.  

## 🚀 Cómo Usarla Localmente
1. Clona el repositorio:  
    ```bash
    git clone https://github.com/Lou2714/WeatherWeb.git

2. Navegas a la carpeta weatherWeb:  
    ```bash
    cd weatherWeb

3. En la raíz del proyecto se debe crear un archivo .env e indicar la siguiente variable de entorno:  
    ```bash
    VITE_APIKEY_WEATHER="Tu_apikey_de_weatherAPI"

4. Instala las dependencias:
    ```bash
    npm install

5. Ejecuta el proyecto:
    ```bash
    npm run dev

**Nota**:    
> Si clonas el repo, crea tu propia key gratuita en [WeatherAPI](https://www.weatherapi.com/). 
> Permitir permisos de ubicación en tu navegador para la funcionalidad completa