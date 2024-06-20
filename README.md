# Blogify

### Description

This is a full-featured blog application built with React.js, Appwrite (Backend-as-a-Service), and react-hook-form. It empowers users to:

* **Create, Edit, and Delete Blogs:** Craft compelling posts, edit existing ones, and manage them effortlessly.
* **Rich Text Editor:** Unleash your creativity with a powerful text editor equipped with formatting options and image support.
* **User Authentication:** Secure login enables user management and content ownership.
* **Responsive Design:** Seamlessly adapts to all devices for a consistent and delightful user experience.
* **Beautiful UI:** A visually appealing and intuitive interface enhances user engagement.

See the live app [here](https://appwrite-blog-app-mauve.vercel.app/).

### Tech Stack

* Frontend: React.js
* Backend: Appwrite
* Form Management: react-hook-form

### Features

* **User Authentication:** Users can sign up and log in to manage their blogs.
* **Blog Creation:** Users can create new blog posts with rich text formatting and image uploads.
* **Blog Editing:** Users can edit existing blog posts and update content.
* **Blog Deletion:** Users can delete their own blog posts.
* **Blog Listing:** View a list of all blogs created by users (including filtering and pagination, if implemented).
* **Blog Reading:** Read the content of any blog post with proper formatting and image display.

### Getting Started

1. **Prerequisites:**
   
   * Node.js and npm (or yarn) installed on your system.
   * An Appwrite instance configured and running. Refer to Appwrite's documentation for setup: [Docs - Appwrite](https://www.appwrite.io/docs)

2* **Clone the Repository:**
   
   ```bash
   git clone https://your-github-repository.git
   ```

3. Install Dependencies:
   
   ```bash
   cd your-blog-app
   npm install
   ```

4. **Configure Appwrite:**
   
   * Create a `.env` file in the project root directory.
   
   * Add the following environment variables, replacing placeholders with your Appwrite configuration:
     
         REACT_APP_APPWRITE_ENDPOINT=YOUR_APPWRITE_ENDPOINT
         REACT_APP_APPWRITE_PROJECT=YOUR_APPWRITE_PROJECT_ID
         

5. **Start the Development Server:**
   
   ```bash
   npm dev run
   ```

#### Usage

1. **Visit http://localhost:3000 (or your development port) in your browser.**
2. **Sign in or create an account to begin using the blog.**

#### Deployment

Instructions for deploying your blog app to a production environment will vary depending on your chosen hosting provider. Refer to their documentation for guidance.

#### Contributing

Feel free to contribute to this project by creating pull requests. Please ensure your code adheres to the existing code style and best practices.

**License**

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

**Additional Notes**

* Consider including screenshots or a short demo video in your README to showcase the app's functionality.
* If you've implemented specific features or functionalities beyond the core ones listed here, be sure to document them in the README.
* Provide details on how to test the application (unit tests, integration tests, etc.) if applicable.
