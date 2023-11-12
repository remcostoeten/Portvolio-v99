'use client';
import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "./firebase"; // import your Firebase config
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { toast } from "sonner";

interface CategoryFormProps {
    onSubmit: (category: string) => Promise<void>;
}

const CategoryForm: React.FC<CategoryFormProps> = ({ onSubmit }) => {
    const [category, setCategory] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!category) {
            return;
        }
        await onSubmit(category);
        toast.success('Category created!');
        setCategory("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Category:
                <Input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
            </label>
            <Button type="submit">Create Category</Button>
        </form>
    );
};

export default CategoryForm