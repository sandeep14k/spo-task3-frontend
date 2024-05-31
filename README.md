backend repo-https://github.com/sandeep14k/spo-task3-backend
##User Authentication Frontend Application
This is a frontend application for user authentication, built using HTML, CSS, and JavaScript. It consists of signup, login, and home pages. The application communicates with a backend server to handle user authentication using JWT tokens.

css/: Contains CSS styles for the frontend application.

js/: Contains JavaScript files for handling signup, login, and home functionality.

index.html: HTML file that serves as the entry point for the application. It includes links to CSS and JavaScript files and defines the structure of the signup, login, and home pages.

Pages
Signup Page
Allows users to sign up by providing an email and password.
Sends a POST request to the backend server with the signup details.
Receives a JWT token from the server upon successful signup and stores it in cookies.
Login Page
Allows users to log in by providing their email and password.
Sends a POST request to the backend server with the login credentials.
Receives a JWT token from the server upon successful login and stores it in cookies.
Redirects to the home page upon successful login.
Home Page
Accessible only after successful login.
Displays a welcome message and user information.
Uses the JWT token stored in cookies to authenticate the user with the backend server.
Dependencies
This project does not have any external dependencies. It can be run directly in a web browser.

You can customize this README further based on your specific project requirements or preferences. Make sure to include any additional instructions or information relevant to your project.








