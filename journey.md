This is a journey file which is helpful to understand the flow of the code.
Reference repo: [github](https://github.com/hiteshchoudhary/chai-aur-react/tree/main/12MegaBlog).

# App overview

- This is an blog app with technologies like:
  - Appwrite for backend
  - tinymce for real-time markdown text-editing interface
  - react as frontend
  - react-hook-form and html-parser
- reference: [React + appwrite by chai aur code: Appwrite backend for react project](https://youtu.be/zLWif1pFYJg?si=2LJeXcZ_JfC-k3W-)

# 13th June 2024:

- declared environmental variables in `.env` file. And assign all variables to the `src/conf/conf.js` file.
- setup Appwrite for backend services.
- reference: [React + appwrite by chai aur code: ENV and appwrite in react project](https://youtu.be/zLWif1pFYJg?si=--tKqamgGCFow_5f).

# 14th June 2024:

- Appwrite authentication setup in `src/appwrite/auth.js`.
- reference: [React + appwrite by chai aur code: Build authentication service with appwrite](https://youtu.be/0Py5cGGW2lE?si=QEOMRYZOxO2GtVx-).

# 15th June 2024:

- **Session-01:**
- Database and Bucket configuration in `src/appwrite/dbConfig.js` and `src/appwrite/bucketConfig.js` files.
- reference: [React + appwrite by chai aur code: Appwrite database, file upload and custom queries](https://youtu.be/lzx52HnWh4Y?si=iTBlW2E3ftVeEtGy).

- **Session-02:**
- Redux-toolkit setup and slice creation in `src/store/`.
- Using authService and code for condition rendering using Loading state in `src/App.jsx`.
- Creation of `Header`, `Footer` and `Loading` components in `src/Components/` folder.
- Reference: [React + appwrite by chai aur code: How to configure redux toolkit in big projects](https://youtu.be/8QGKg_W5sDQ?si=Z7Zz5huUP1J0Ci35).

# 17th June 2024:

- **Session-01**
- created production grade components. And used `forwardRef` in `src/Components/Input.jsx`.
- Reference: [React + appwrite by chai aur code: Production grade react components](https://youtu.be/BSaYsHVpaK0?si=aaA2K2sUwPo3-Yeh).

- **Session-02**
- Created more components like Login, Signup and AuthLayout.
- Used `react-hook-from` in Login and Signup Components.
- reference: [React + appwrite by chai aur code: How to use react-hook-form in production](https://youtu.be/lfMyCuB6xfc?si=eA7czUJq87GPhdFJ).

- **Session-03**
- Created `src/Components/PostForm.jsx` and `src/Components/RTE.jsx` components.
- reference: [React + appwrite by chai aur code: Adding form and slug values](https://youtu.be/-6LvNku2nJE?si=WZwlD-eeKainJbjJ).
