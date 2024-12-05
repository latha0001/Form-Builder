# Form Builder

A React-based form builder application that allows users to create and customize forms with different question types, including **Categorize**, **Cloze**, and **Comprehension**. The app is built with the MERN stack and styled using **Tailwind CSS**.

## Features

- Create forms with a customizable title and header image.
- Add, update, and remove questions with ease.
- Supports three question types:
  - **Categorize**: Multiple-choice questions with customizable options.
  - **Cloze**: Fill-in-the-blank questions.
  - **Comprehension**: Questions based on understanding a passage.
- Save form data (ready for backend integration with MongoDB).

## Tech Stack

- **Frontend**: React, Tailwind CSS
- **Backend**: Node.js, Express (future scope)
- **Database**: MongoDB (future scope)

## Prerequisites

- Node.js and npm installed on your system.
- Basic knowledge of React and JavaScript.

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/form-builder.git
cd form-builder
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Development Server

```bash
npm start
```

The application will be accessible at `http://localhost:3000`.

### 4. Build for Production

```bash
npm run build
```

This will create an optimized production build in the `build` directory.

## Folder Structure

```
form-builder/
├── public/
│   ├── index.html       # Main HTML file
│   └── favicon.ico      # Application favicon
├── src/
│   ├── components/      # React components
│   │   ├── FormBuilder.jsx   # Main form builder component
│   │   ├── QuestionEditor.jsx # Component for editing individual questions
│   ├── App.jsx          # Root React component
│   ├── index.jsx        # Entry point for React app
│   ├── styles/          # CSS or Tailwind configurations
│   └── utils/           # Helper functions (future scope)
├── package.json         # Project metadata and scripts
├── tailwind.config.js   # Tailwind CSS configuration
├── README.md            # Documentation file (this file)
└── .gitignore           # Files to ignore in Git
```

## Future Enhancements

- **Backend Integration**: Save form data to MongoDB via an Express API.
- **Authentication**: Add user login and form ownership features.
- **Form Preview**: Allow users to preview the form before saving.
- **Real-Time Collaboration**: Enable multiple users to work on the same form simultaneously.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For questions or collaboration, feel free to reach out:

- Email: lathakadavath0001@gmail.com
- GitHub: 
