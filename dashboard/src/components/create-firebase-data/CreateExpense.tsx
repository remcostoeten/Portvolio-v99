'use client';
import useFetchFirestore from "@/core/hooks/useFetchFirestore";
import { FirebaseForm } from "../FirebaseForm";
import { Spinner } from "@nextui-org/react";

export function CreateExpense() {
    const { data: categories, loading, error } = useFetchFirestore('categories');

    if (loading) {
        return <div className="skeleton">...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    const fields = [
        { name: 'amount', type: 'number', placeholder: 'Amount' },
        { name: 'description', type: 'text', placeholder: 'Description' },
        { name: 'category', type: 'select', options: categories },
    ];

    return <FirebaseForm fields={fields} collectionName="expenses" />;
}