# Brainly 🧠 - Your Personalized Link Manageing App

Brainly is a minimalist web application that allows users to securely store, manage, and access all their important social media links in one place — acting as a digital extension of your memory.

**Website Link:** https://brainly-ivory-delta.vercel.app/


📸 **Working**

https://github.com/user-attachments/assets/a3c566f6-70bf-4c20-af8d-8685c3ff5df1

<img width="1904" height="844" alt="Screenshot 2025-08-11 223624" src="https://github.com/user-attachments/assets/2a98aa54-57dc-4555-bb5c-2778c11957d2" />

<img width="1897" height="836" alt="Screenshot 2025-08-11 223654" src="https://github.com/user-attachments/assets/a5bef295-b85d-4798-8e9f-89504b5a2caf" />



🚀 **Key Features**

*   **User Authentication:** Secure signup and sign-in functionality using JWT tokens.
*   **Managing Content:** Users can create, retrieve, and delete content, organizing learning resources effectively.
*   **Brain Sharing (Link Generation):** Generate shareable links for content, facilitating easy sharing with others.
*   **Personalized Dashboard:** A central hub to view and manage your content.
*   **Dark Mode:** Toggle between light and dark themes for comfortable viewing.
*   **Responsive Design:**  Optimized for various screen sizes, ensuring a seamless experience on any device.

🛠️ **Tech Stack**

*   **Frontend:**
    *   React
    *   React Router DOM
    *   Tailwind CSS
    *   Vite
    *   Axios
*   **Backend:**
    *   Node.js
    *   Express.js
    *   JSON Web Tokens (JWT)
    *   CORS
    *   dotenv
*   **Database:**
    *   MongoDB
    *   Mongoose
*   **Build Tool:**
    *   Typescript

📦 **Getting Started**

Follow these steps to get the project up and running on your local machine.

### Prerequisites

*   Node.js (v16 or higher)
*   npm or yarn
*   MongoDB installed and running

### Installation

1.  **Clone the repository:**

    ```bash
    git clone <repository_url>
    cd brainly
    ```

2.  **Backend Setup:**

    ```bash
    cd brainly
    npm install
    ```

3.  **Create a `.env` file** in the `brainly` directory and add the following environment variables:

    ```
    MONGODB_URL=<your_mongodb_connection_string>
    JWT_PASSWORD=<your_jwt_secret_key>
    FRONTEND_URL=http://localhost:5173 # or your frontend URL
    ```

4.  **Frontend Setup:**

    ```bash
    cd brainly-frontend
    npm install
    ```

5.  **Backend Setup:**

    ```bash
    cd brainly-frontend
    npm install
    ```

### Running Locally

1.  **Start the backend server:**

    ```bash
    cd brainly
    npm run dev
    ```

2.  **Start the frontend development server:**

    ```bash
    cd brainly-frontend
    npm run dev
    ```

💻 **Usage**

1.  Open your browser and navigate to the frontend URL (usually `http://localhost:5173`).
2.  Sign up for a new account or log in with an existing account.
3.  Once logged in, you'll be redirected to the dashboard where you can create, view, and manage your content.
4.  Use the sidebar for navigation and the dark mode toggle for a personalized experience.

🤝 **Contributing**

Contributions are welcome! Please follow these steps:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes and commit them with descriptive messages.
4.  Push your changes to your fork.
5.  Submit a pull request to the main repository.

📬 **Contact**

If you have any questions or suggestions, feel free to contact me at maheshp5447@gmail.com.

💖 **Thanks**

Thank you for checking out Brainly! We hope you find it useful for managing and sharing your learning resources.



