'use client';
import { useReducer } from "react";
import Card from "./Card";
import Link from "next/link";

// Action Types
type Action =
  | { type: 'UPDATE_RATING'; venueName: string; rating: number | null }
  | { type: 'REMOVE_RATING'; venueName: string };

// Reducer Function
const ratingReducer = (state: Map<string, number | null>, action: Action) => {
  const newState = new Map(state);
  switch (action.type) {
    case 'UPDATE_RATING':
      newState.set(action.venueName, action.rating);
      return newState;
    case 'REMOVE_RATING':
      newState.delete(action.venueName);
      return newState;
    default:
      return state;
  }
};

// Mapping venue names to correct image paths
const venueImages: Record<string, string> = {
  "The Bloom Pavilion": "/img/bloom.jpg",
  "Spark Space": "/img/sparkspace.jpg",
  "The Grand Table": "/img/grandtable.jpg",
};

export default function CardPanel() {
  const initialRatings = new Map<string, number | null>([
    ["The Bloom Pavilion", 0],
    ["Spark Space", 0],
    ["The Grand Table", 0],
  ]);

  const [ratings, dispatch] = useReducer(ratingReducer, initialRatings);

  const handleRatingChange = (venueName: string, newRating: number | null) => {
    dispatch({ type: 'UPDATE_RATING', venueName, rating: newRating });
  };

  const handleRemoveRating = (venueName: string) => {
    dispatch({ type: 'REMOVE_RATING', venueName });
  };

  const mockVenueRepo = [
    { vid: "001", name: "The Bloom Pavillion", image: "/img/bloom.jpg" },
    { vid: "002", name: "Spark Space", image: "/img/sparkspace.jpg" },
    { vid: "003", name: "The Grand Table", image: "/img/grandtable.jpg" }
  ];

  return (
    <div>
      <div
        style={{
          margin: "20px",
          display: "flex",
          flexDirection: "row",
          alignContent: "space-around",
          justifyContent: "space-around",
          flexWrap: "wrap",
          padding: "10px",
        }}
      >
        {
          mockVenueRepo.map((cardItem) => (
            <Link href={`/venue/${cardItem.vid}`} className="w-1/5">
            <Card 
                venueName={cardItem.name} 
                imgSrc={cardItem.image}
                rating={0} //fix
                onRatingChange={handleRatingChange}
            />
            </Link>
        ))
        }
      </div>

      {/* Display rating list */}
      <div style={{ margin: "20px" }}>
        {Array.from(ratings.entries()).map(([venueName, rating]) => (
          <div
            key={venueName}
            data-testid={venueName}
            style={{ cursor: "pointer", marginBottom: "8px" }}
            onClick={() => handleRemoveRating(venueName)}
          >
            {`${venueName} Rating: ${rating}`}
          </div>
        ))}
      </div>
    </div>
  );
}
