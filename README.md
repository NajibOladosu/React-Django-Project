# NAJIB OLADOSU - Web Developer

## Simple React & Django Website Project

### GitHub Repository
[https://github.com/NajibOladosu/React-Django-Project](https://github.com/NajibOladosu/React-Django-Project)

---

### Project Description

#### 1. Frontend:
- **Technology Used:** React.js
- **Description:** The website is built using React.js and showcases a simple portfolio-style page. It includes an introduction section about myself, along with dynamically fetched weather data based on the user’s location.
- **Components:**
  - **Main Component:** Displays the introductory text about myself.
  - **Weather Component:** Automatically fetches and displays the current weather for the user’s location using a weather API.

#### 2. Backend:
- **Technology Used:** Django
- **API Endpoints**: `/api/get-weather/`
  - **Description:** This API endpoint takes the user's latitude and longitude as input, calls the OpenWeatherMap API, and returns the current weather conditions.
  - **Usage:** The frontend calls this endpoint after retrieving the user’s location using the browser’s Geolocation API.

---

### How the Project Works

1. **Frontend Interaction:** When the website is loaded, the browser prompts the user for permission to access their location. Upon receiving the latitude and longitude, the frontend calls the Django API to retrieve weather data for the user’s current location. The data is then displayed on the webpage.

2. **Backend Functionality:** The Django backend processes requests from the React frontend. Specifically, it handles the request to fetch weather data from OpenWeatherMap and returns it to the frontend.

---

### Instructions to Run the Project

1. **Clone the Repository:**
   - Open your terminal and run the following command to clone the repository:
     ```bash
     git clone https://github.com/NajibOladosu/React-Django-Project
     ```

2. **Backend (Django):**
   - Navigate to the backend directory:
     ```bash
     cd backend/
     ```
   - Install the required dependencies by running:
     ```bash
     pip install -r requirements.txt
     ```
   - Run the Django server:
     ```bash
     python manage.py runserver
     ```

3. **Frontend (React):**
   - Open a new terminal window/tab and navigate to the frontend directory:
     ```bash
     cd frontend/
     ```
   - Install the necessary packages:
     ```bash
     npm install
     ```
   - Start the React development server:
     ```bash
     npm start
     ```

4. **Access the Website:**
   - Open your browser and go to:
     [http://localhost:3000](http://localhost:3000)
   - You should now see the website running locally.
