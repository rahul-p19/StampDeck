# **StampDeck**

A national web community for philatelists, designed to fulfill all their stamp-collecting needs.

## **Contributing Guide**

> The following steps outline the process of setting up and contributing to this project. Please reach out if you encounter any issues or if additional clarification is needed.

### **Getting Started: Running the Project Locally**

**Prerequisites**

- Ensure that you have the following installed:
  - `git`
  - `node` (version 16+)
  - `npm` (Node Package Manager)
  - `Python 3.8+`
  - `pip` (Python Package Installer)

#### **Step 1: Fork and Clone the Repository**

1. **Fork** the repository to create your copy.
2. **Copy the link to your fork**:
   - Go to your forked repository’s code section and click the green **Code** button. Copy the HTTPS link.
3. Open your terminal and navigate to the desired directory where you’d like to clone the project.
4. Run the following command, making sure to sync your fork if there have been new commits to the main repo:

    ```sh
    git clone <link-to-your-fork>
    ```

5. **Navigate to the StampDeck directory** (if not already in it):

    ```sh
    cd StampDeck
    ```

#### **Step 2: Setting Up the Frontend**

1. Navigate to the frontend directory:

    ```sh
    cd frontend
    ```

2. Install dependencies:

    ```sh
    npm install
    ```

3. Start the frontend server in development mode:

    ```sh
    npm run dev
    ```

4. After running the command, a localhost link (e.g., `http://localhost:5173`) will appear in your terminal. Click on this link to view the frontend locally.

#### **Step 3: Setting Up the Backend**

1. In the main `StampDeck` directory, navigate to the `backend` folder:

    ```sh
    cd ../backend
    ```

2. Create and activate a virtual environment:

    ```sh
    python -m venv venv
    source venv/bin/activate   # On Windows use `venv\Scripts\activate`
    ```

3. Install the backend dependencies:

    ```sh
    pip install -r requirements.txt
    ```

4. Set up environment variables if required by creating a `.env` file. Populate it with variables for the database, JWT secrets, and any API keys (such as Razorpay, Twilio, and Discourse).

5. Run database migrations to set up the required tables:

    ```sh
    python manage.py migrate
    ```

6. Start the backend server:

    ```sh
    python manage.py runserver
    ```

7. The backend should now be running on `http://localhost:8000`. If both frontend and backend are correctly configured, they should communicate seamlessly.

---

### **Committing and Pushing Changes**

1. **Push to your own fork** unless you're confident in pushing directly to the main repo.
2. Verify that `node_modules` and any other temporary files are correctly included in `.gitignore` and are not staged for commit.
3. From the main `StampDeck` folder, stage and commit your changes:

    ```sh
    git add .
    git commit -m "Descriptive commit message about changes made"
    ```

4. Push your changes to your fork:

    ```sh
    git push origin <branch-name>
    ```

> **Tip**: Use clear, informative commit messages to make reviewing changes easier for everyone.

---

**By following these steps, you should have the project running locally with a secure setup for both frontend and backend development.**
