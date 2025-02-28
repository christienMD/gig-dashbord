import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { MoreVertical, Eye, Pencil, Trash2 } from 'lucide-react';

const GigActions = ({ gigId, onDelete, gigTitle }) => {
  const navigate = useNavigate();
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  const handleView = () => {
    navigate(`/learner-dashboard/gigs/${gigId}`);
  };

  const handleEdit = () => {
    navigate(`/learner-dashboard/gigs/${gigId}/edit`);
  };

  const handleDelete = () => {
    setShowDeleteDialog(true);
  };

  const confirmDelete = () => {
    onDelete && onDelete(gigId);
    setShowDeleteDialog(false);
  };

  return (
    <>
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger className="focus:outline-none">
          <MoreVertical className="h-5 w-5 text-gray-500 hover:text-gray-700" />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48">
          <DropdownMenuItem 
            onClick={handleView}
            className="p-3 font-medium cursor-pointer"
          >
            <Eye className="h-4 w-4 mr-2" />
            View Details
          </DropdownMenuItem>
          <DropdownMenuItem 
            onClick={handleEdit}
            className="p-3 font-medium cursor-pointer"
          >
            <Pencil className="h-4 w-4 mr-2" />
            Edit Gig
          </DropdownMenuItem>
          <DropdownMenuItem 
            onClick={handleDelete}
            className="p-3 font-medium text-red-600 focus:text-red-600 cursor-pointer"
          >
            <Trash2 className="h-4 w-4 mr-2" />
            Delete Gig
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Delete Confirmation Modal */}
      <AlertDialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
        <AlertDialogContent className='bg-neutral-50'>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This will permanently delete this gig , This cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction 
              onClick={confirmDelete}
              className="bg-red-500 text-white hover:bg-red-600 hover:opacity-75"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default GigActions;