EduGenius AI
EduGenius AI is an advanced web application that combines personalized learning with AI-powered recommendations. The platform provides a video-based learning experience similar to YouTube, complete with user profiles, recommendations, and advanced CSS styling.

Features
Video Playback: Watch educational videos with a responsive video player.
User Profiles: Create and manage user profiles with personalized recommendations.
Navbar: Navigate between different sections of the application.
Profile Menu: Access login and signup functionalities.
Advanced CSS Styling: Modern, clean UI design.
Technologies Used
Frontend: React, React Router DOM, CSS
Backend: Node.js, Express, MongoDB
Machine Learning: Scikit-learn, joblib
Database: MongoDB
Installation
Prerequisites
Ensure you have Node.js and MongoDB installed on your machine.

Frontend Setup
Navigate to the frontend directory:

bash
Copy code
cd frontend
Install the necessary npm packages:

bash
Copy code
npm install
Start the development server:

bash
Copy code
npm start
Backend Setup
Navigate to the root directory:

bash
Copy code
cd ..
Install the necessary npm packages:

bash
Copy code
npm install
Set up environment variables:

Create a .env file in the root directory and add your MongoDB URI:

env
Copy code
MONGO_URI=your_mongodb_uri_here
Start the backend server:

bash
Copy code
node server.js
Machine Learning
Ensure you have Python and the necessary packages installed.

Run the Python script to train and save the machine learning model:

bash
Copy code
python train_model.py
Usage
Homepage: View and watch educational videos.
Profile: Create an account or log in to view personalized recommendations.
Admin: Manage user accounts and lesson data.
Contributing
Fork the repository.
Create a new branch (git checkout -b feature/your-feature).
Make your changes.
Commit your changes (git commit -am 'Add some feature').
Push to the branch (git push origin feature/your-feature).
Create a new Pull Request.
License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgments
React for the frontend framework.
Express for the backend framework.
MongoDB for the database.
Scikit-learn for machine learning.
