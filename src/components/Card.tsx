import Image from 'next/image';
import InteractiveCard from './InteractiveCard';
import Rating from '@mui/material/Rating';
import { useState, useEffect } from 'react';

type CardProps = {
  venueName: string;
  imgSrc: string;
  rating: number | null;
  onRatingChange: (venueName: string, newRating: number | null) => void;
};

export default function Card({ venueName, imgSrc, rating, onRatingChange }: CardProps) {
  const [localRating, setLocalRating] = useState<number | null>(rating);

  // Sync local rating if parent changes
  useEffect(() => {
    setLocalRating(rating);
  }, [rating]);

  const handleChange = (event: React.SyntheticEvent, newValue: number | null) => {
    event.stopPropagation();
    event.preventDefault();
    setLocalRating(newValue);
    onRatingChange(venueName, newValue); // Notify parent
  };

  return (
    <InteractiveCard contentName={venueName}>
      <div className='w-full h-[70%] relative rounded-t-lg'>
        <Image
          src={imgSrc}
          alt='Hall Picture'
          fill={true}
          className='object-cover rounded-t-lg'
        />
      </div>
      <div className='w-full h-[30%] p-[10px]'>
        {venueName}
        <Rating
          id={`${venueName} Rating`}
          name={`${venueName} Rating`}
          data-testid={`${venueName} Rating`}
          value={localRating}
          onChange={handleChange}
          onClick={(e)=>{e.stopPropagation()}}
        />
      </div>
    </InteractiveCard>
  );
}
