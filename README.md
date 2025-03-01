TATA CLiQ Clone 

🚀 Project Description

This is a Tata CLiQ Clone built using React, Redux, Firebase, and Bootstrap. The project replicates key features of the Tata CLiQ e-commerce website, including authentication, product listing, cart, and wishlist functionality.  

🛠 Tech Stack

Frontend: React, Redux, Redux Toolkit, React Router, Bootstrap

Backend: Firebase (Firestore for database, Firebase Authentication for user management)

State Management: Redux

Styling: Bootstrap  


✨ Features

🔑 User Authentication (Sign Up, Login, Logout) using Firebase

🛍️ Product Listings with categories and search functionality

❤️ Wishlist Feature to save favorite items

🛒 Cart Management (Add/Remove products, checkout)

🔍 Search Functionality to filter products

📱 Responsive UI using Bootstrap  



📦 Installation & Setup  

1.Clone the repository:   

    git clone https://github.com/NileshPatil-18/TATACLiQ-Clone.git  
    
cd TATACLiQ-Clone   


2.Install dependencies: 

   npm install  


3.Set up Firebase:  

Create a Firebase project from Firebase Console. 

Enable Firestore Database and Authentication. 

Create a .env file in the project root and add your Firebase credentials:  

VITE_FIREBASE_API_KEY=your_api_key  
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain  
VITE_FIREBASE_PROJECT_ID=your_project_id  
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket  
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id  
VITE_FIREBASE_APP_ID=your_app_id   


4.Run the project locally:  
npm run dev  
 app will be available at http://localhost:5173/.    

.

🚀 Deployment  

This project is deployed on Netlify. To deploy your own version:

Push your code to GitHub.

Connect your repository to Netlify.

Set environment variables in Netlify settings.


Deploy the project.  

📌 Folder Structure  
  TATACLiQ-Clone/  
│── public/               # Static assets  
│── src/  
│   ├── components/       # Reusable components (Navbar, Footer, Search, etc.)  
│   ├── pages/            # Page components (Home, Login, Signup, Cart, Wishlist)  
│   ├── redux/            # Redux store & slices  
│   ├── firebase.js       # Firebase configuration  
│   ├── App.jsx           # Main App component  
│   ├── main.jsx          # Entry point  
│── .env                  # Environment variables (not committed)  
│── package.json          # Dependencies and scripts  
│── README.md             # Project documentation   


🙌 Contributing  

Feel free to fork this project and submit pull requests with improvements! 🚀  

📜 License  
This project is for educational purposes only and is not affiliated with Tata CLiQ.  

 Live Demo: https://67c319cff589fbd5f5bf3941--exquisite-otter-451e82.netlify.app/  
