# EduGenius AI

EduGenius AI is an advanced web application that combines personalized learning with AI-powered recommendations. The platform provides a video-based learning experience similar to YouTube, complete with user profiles, recommendations, and advanced CSS styling.

## Features

- **Video Playback**: Watch educational videos with a responsive video player.
- **User Profiles**: Create and manage user profiles with personalized recommendations.
- **Navbar**: Navigate between different sections of the application.
- **Profile Menu**: Access login and signup functionalities.
- **Advanced CSS Styling**: Modern, clean UI design.

## Technologies Used

- **Frontend**: React, React Router DOM, CSS
- **Backend**: Node.js, Express, MongoDB
- **Machine Learning**: Scikit-learn, joblib
- **Database**: MongoDB

## Installation

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) and [MongoDB](https://www.mongodb.com/) installed on your machine.

### Frontend Setup

1. Navigate to the `frontend` directory:

    ```bash
    cd frontend
    ```

2. Install the necessary npm packages:

    ```bash
    npm install
    ```

3. Start the development server:

    ```bash
    npm start
    ```

### Backend Setup

1. Navigate to the root directory:

    ```bash
    cd ..
    ```

2. Install the necessary npm packages:

    ```bash
    npm install
    ```

3. Set up environment variables:

    Create a `.env` file in the root directory and add your MongoDB URI:

    ```env
    MONGO_URI=your_mongodb_uri_here
    ```

4. Start the backend server:

    ```bash
    node server.js
    ```

### Machine Learning

1. Ensure you have Python and the necessary packages installed.

2. Run the Python script to train and save the machine learning model:

    ```bash
    python train_model.py
    ```

## Usage

- **Homepage**: View and watch educational videos.
- **Profile**: Create an account or log in to view personalized recommendations.
- **Admin**: Manage user accounts and lesson data.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add some feature'`).
5. Push to the branch (`git push origin feature/your-feature`).
6. Create a new Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [React](https://reactjs.org/) for the frontend framework.
- [Express](https://expressjs.com/) for the backend framework.
- [MongoDB](https://www.mongodb.com/) for the database.
- [Scikit-learn](https://scikit-learn.org/) for machine learning.
