'use client';

import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

interface Review {
  id?: string;
  name: string;
  review: string;
}

interface ReviewsSectionProps {
  reviews: Review[];
  updateReviews: (reviews: Review[]) => void;
}

export const ReviewsSection = ({ reviews, updateReviews }: ReviewsSectionProps) => {
  const [editingReview, setEditingReview] = useState<Review | null>(null);
  const [isAdding, setIsAdding] = useState(false);

  // Add IDs to reviews if they don't have them (for internal tracking)
  const reviewsWithIds: (Review & { id: string })[] = reviews.map((review) => {
    if (!review.id) {
      return { ...review, id: uuidv4() };
    }
    return { ...review, id: review.id };
  });

  // New review template
  const newReviewTemplate: Review = {
    id: '',
    name: '',
    review: '',
  };

  // Start adding a new review
  const startAddingReview = () => {
    setEditingReview({ ...newReviewTemplate, id: uuidv4() });
    setIsAdding(true);
  };

  // Start editing an existing review
  const startEditingReview = (review: Review) => {
    setEditingReview({ ...review });
    setIsAdding(false);
  };

  // Cancel editing
  const cancelEditing = () => {
    setEditingReview(null);
  };

  // Save review changes
  const saveReview = () => {
    if (!editingReview || !editingReview.name.trim() || !editingReview.review.trim()) return;

    if (isAdding) {
      // Remove the id before saving to match the expected format
      const { id, ...reviewWithoutId } = editingReview;
      updateReviews([...reviews, reviewWithoutId]);
    } else {
      const updatedReviews = reviewsWithIds.map((r) => {
        if (r.id === editingReview.id) {
          // Remove the id before saving to match the expected format
          const { id, ...reviewWithoutId } = editingReview;
          return reviewWithoutId;
        }
        return r;
      });

      // Remove internal IDs before updating
      updateReviews(updatedReviews.map((r) => ({ name: r.name, review: r.review })));
    }

    setEditingReview(null);
    setIsAdding(false);
  };

  // Delete a review
  const deleteReview = (reviewId: string) => {
    if (confirm('Czy na pewno chcesz usunąć tę opinię?')) {
      const updatedReviews = reviewsWithIds.filter((r) => r.id !== reviewId);
      // Remove internal IDs before updating
      updateReviews(updatedReviews.map((r) => ({ name: r.name, review: r.review })));
    }
  };

  // Handle input changes for editing review
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (!editingReview) return;

    const { name, value } = e.target;
    setEditingReview({
      ...editingReview,
      [name]: value,
    });
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Zarządzanie Opiniami</h2>
        <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md" onClick={startAddingReview}>
          Dodaj Opinię
        </button>
      </div>

      {/* Review Editing Form */}
      {editingReview && (
        <div className="bg-gray-50 p-6 rounded-lg mb-6 border">
          <h3 className="text-xl font-semibold mb-4">{isAdding ? 'Dodaj Nową Opinię' : 'Edytuj Opinię'}</h3>
          <div className="space-y-4">
            <div>
              <label className="block mb-2 font-medium">Imię i Nazwisko</label>
              <input
                type="text"
                name="name"
                value={editingReview.name}
                onChange={handleInputChange}
                className="w-full border rounded-md px-4 py-2"
                required
              />
            </div>
            <div>
              <label className="block mb-2 font-medium">Treść Opinii</label>
              <textarea
                name="review"
                value={editingReview.review}
                onChange={handleInputChange}
                className="w-full border rounded-md px-4 py-2 h-32"
                required
              />
            </div>
          </div>
          <div className="flex justify-end gap-4 mt-6">
            <button className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded-md" onClick={cancelEditing}>
              Anuluj
            </button>
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
              onClick={saveReview}
              disabled={!editingReview.name.trim() || !editingReview.review.trim()}
            >
              Zapisz
            </button>
          </div>
        </div>
      )}

      {/* Reviews List */}
      <div className="space-y-4">
        {reviewsWithIds.length === 0 ? (
          <p className="text-gray-500 italic">Brak opinii</p>
        ) : (
          reviewsWithIds.map((review) => (
            <div key={review.id} className="border rounded-lg p-4">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-medium text-lg">{review.name}</h4>
                <div className="flex gap-2">
                  <button className="bg-blue-100 text-blue-700 px-3 py-1 rounded hover:bg-blue-200" onClick={() => startEditingReview(review)}>
                    Edytuj
                  </button>
                  <button className="bg-red-100 text-red-700 px-3 py-1 rounded hover:bg-red-200" onClick={() => deleteReview(review.id!)}>
                    Usuń
                  </button>
                </div>
              </div>
              <p className="text-gray-700">{review.review}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
