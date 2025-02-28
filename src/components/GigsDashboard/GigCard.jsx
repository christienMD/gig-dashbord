import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import GigActions from './GigActions';

const GigCard = ({ gig }) => {
  const navigate = useNavigate();

  // Status badge styling based on status
  const getStatusBadgeStyle = (status) => {
    switch(status) {
      case 'open':
        return 'bg-green-100 text-green-800 border-green-300';
      case 'completed':
        return 'bg-blue-100 text-blue-800 border-blue-300';
      case 'cancelled':
        return 'bg-red-100 text-red-800 border-red-300';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  const handleCardClick = () => {
    navigate(`/learner-dashboard/gigs/${gig.id}`);
  };

  const handleDeleteGig = (id) => {
    // delete logic here
    console.log('Deleting gig with ID:', id);
  };

  const handleActionsClick = (e) => {
    e.stopPropagation();
  };

  return (
    <Card 
      className="overflow-hidden hover:shadow-sm transition-all duration-300 p-4 pb-2 cursor-pointer"
      onClick={handleCardClick}
    >
      <CardContent className="p-0">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-lg line-clamp-2">{gig.title}</h3>
          <div className="flex items-center gap-2">
            <Badge variant="outline" className={getStatusBadgeStyle(gig.status)}>
              {gig.status}
            </Badge>
            <div onClick={handleActionsClick}>
              <GigActions 
                gigId={gig.id} 
                onDelete={handleDeleteGig} 
                gigTitle={gig.title}
              />
            </div>
          </div>
        </div>
        
        <p className="text-sm text-gray-600 line-clamp-2 mb-3">{gig.description}</p>
        
        <div className="flex justify-between items-center">
          <Badge variant="outline" className="bg-[var(--light-blue)] bg-opacity-10 text-[var(--teal)] border-[var(--light-blue)]">
            Category {gig.category_id}
          </Badge>
          <div className="text-[var(--teal)] font-medium">${gig.budget}</div>
        </div>
      </CardContent>
      
      <CardFooter className="py-3 border-t bg-gray-50">
        <div className="w-full flex justify-between items-center">
          <div className="text-sm text-gray-500">Location: {gig.location}</div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default GigCard;