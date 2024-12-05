import React from "react";

const QuestionEditor = ({ question, updateQuestion, removeQuestion }) => {
    const handleChange = (field, value) => {
        updateQuestion(question.id, { ...question, [field]: value });
    };

    return (
        <div className="border p-4 mt-4 rounded shadow">
            <h3 className="text-lg font-semibold">Edit Question</h3>
            <input
                type="text"
                className="w-full border mt-2 p-2"
                placeholder="Question Text"
                value={question.text}
                onChange={(e) => handleChange("text", e.target.value)}
            />
            <input
                type="text"
                className="w-full border mt-2 p-2"
                placeholder="Question Image URL"
                value={question.image}
                onChange={(e) => handleChange("image", e.target.value)}
            />
            {question.type === "categorize" && (
                <div>
                    <p className="mt-2 text-sm">Categorize</p>
                </div>
            )}
            {question.type === "cloze" && (
                <div>
                    <p className="mt-2 text-sm">Cloze</p>
                </div>
            )}
            {question.type === "comprehension" && (
                <div>
                    <p className="mt-2 text-sm">Comprehension</p>
                </div>
            )}
            <button
                className="bg-red-500 text-white px-4 py-2 rounded mt-4"
                onClick={() => removeQuestion(question.id)}
            >
                Remove Question
            </button>
        </div>
    );
};

export default QuestionEditor;
