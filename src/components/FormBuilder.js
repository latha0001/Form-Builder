import React, { useState } from "react";
import axios from "../api"; // Axios instance
import QuestionEditor from "./QuestionEditor";

const FormBuilder = () => {
    const [formTitle, setFormTitle] = useState("");
    const [formImage, setFormImage] = useState("");
    const [questions, setQuestions] = useState([]);

    const addQuestion = (type) => {
        setQuestions([
            ...questions,
            { id: Date.now(), type, text: "", image: "", options: [] },
        ]);
    };

    const updateQuestion = (id, updatedQuestion) => {
        setQuestions(questions.map((q) => (q.id === id ? updatedQuestion : q)));
    };

    const removeQuestion = (id) => {
        setQuestions(questions.filter((q) => q.id !== id));
    };

    const saveForm = async () => {
        try {
            const response = await axios.post("/forms", {
                title: formTitle,
                image: formImage,
                questions,
            });
            alert("Form saved successfully!");
        } catch (error) {
            console.error("Error saving form", error);
        }
    };

    return (
        <div className="container mx-auto p-4">
            <div className="bg-white shadow p-6 rounded">
                <h1 className="text-2xl font-bold">Form Builder</h1>
                <input
                    type="text"
                    className="w-full border mt-4 p-2"
                    placeholder="Form Title"
                    value={formTitle}
                    onChange={(e) => setFormTitle(e.target.value)}
                />
                <input
                    type="text"
                    className="w-full border mt-4 p-2"
                    placeholder="Form Image URL"
                    value={formImage}
                    onChange={(e) => setFormImage(e.target.value)}
                />
                <div className="mt-4">
                    <button
                        className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
                        onClick={() => addQuestion("categorize")}
                    >
                        Add Categorize
                    </button>
                    <button
                        className="bg-green-500 text-white px-4 py-2 rounded mr-2"
                        onClick={() => addQuestion("cloze")}
                    >
                        Add Cloze
                    </button>
                    <button
                        className="bg-purple-500 text-white px-4 py-2 rounded"
                        onClick={() => addQuestion("comprehension")}
                    >
                        Add Comprehension
                    </button>
                </div>
                {questions.map((q) => (
                    <QuestionEditor
                        key={q.id}
                        question={q}
                        updateQuestion={updateQuestion}
                        removeQuestion={removeQuestion}
                    />
                ))}
                <button
                    className="bg-indigo-500 text-white px-4 py-2 rounded mt-4"
                    onClick={saveForm}
                >
                    Save Form
                </button>
            </div>
            <footer className="bg-gray-800 text-white mt-8 p-4 text-center rounded">
                <p className="text-sm">
                    © {new Date().getFullYear()} Form Builder. All rights reserved.
                </p>
                <p className="text-sm">
                    Built with ❤️ by Kadavath Latha
                </p>
            </footer>
        </div>
    );
};

export default FormBuilder;
