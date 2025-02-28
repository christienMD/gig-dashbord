import React from "react";
import GigCard from "./GigCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PlusCircle, Search } from "lucide-react";
import { Link, Navigate } from "react-router-dom";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";

const myGigs = [
  {
    id: 1,
    category_id: 1,
    title: "Professional Logo Design for Business Branding",
    description:
      "I need a professional logo design for my new business. The logo should be modern, versatile, and reflect our brand values of innovation and reliability.",
    budget: 1500,
    location: "Remote",
    status: "open",
  },
  {
    id: 2,
    category_id: 2,
    title: "Full Stack Web Application Development Project",
    description:
      "Looking for a developer to build a full-stack web application using React for frontend and Node.js for backend. The project requires database integration and user authentication.",
    budget: 5000,
    location: "New York",
    status: "open",
  },
  {
    id: 3,
    category_id: 3,
    title: "SEO Optimization and Content Marketing Strategy",
    description:
      "Need assistance with improving our website's search engine rankings and developing a content marketing strategy that targets our specific audience demographic.",
    budget: 2000,
    location: "Chicago",
    status: "completed",
  },
  {
    id: 4,
    category_id: 4,
    title: "Video Editing for Company Promotional Materials",
    description:
      "Seeking a video editor to create promotional videos for our company products. The videos should be 2-3 minutes long and include motion graphics and professional transitions.",
    budget: 1800,
    location: "Los Angeles",
    status: "cancelled",
  },
];

const GigsPage = () => {
  return (
    <div className="container mx-auto w-full">
      <div className="flex flex-wrap justify-between items-center mb-8 gap-4 w-full">
        <div className="w-full">
          <div className="flex items-center justify-between w-full">
            <h1 className="text-3xl font-bold text-[#0097A7]">
              My Gigs
            </h1>
            <Button
              asChild
              className="bg-[var(--teal)] hover:bg-[var(--teal)]/90 flex items-center justify-center"
            >
              <Link to={`/learner-dashboard/gigs/create`}>
                <PlusCircle className="sm:mr-2 h-4 w-4" />
                <span className="hidden sm:inline-block"> Create New Gig</span>
              </Link>
            </Button>
          </div>
          <p className="text-gray-600 mt-2">Manage your service offerings</p>
        </div>
      </div>

      <div className="mb-8">
        <Tabs defaultValue="all" className="w-full">
          <div className="w-full mb-6">
            <ScrollArea className="w-full p-1">
              <div className="flex min-w-max p-1">
                <TabsList>
                  <TabsTrigger value="all" className="px-4">
                    All Gigs ({myGigs.length})
                  </TabsTrigger>
                  <TabsTrigger value="open" className="px-4">
                    Open ({myGigs.filter((g) => g.status === "open").length})
                  </TabsTrigger>
                  <TabsTrigger value="completed" className="px-4">
                    Completed (
                    {myGigs.filter((g) => g.status === "completed").length})
                  </TabsTrigger>
                  <TabsTrigger value="cancelled" className="px-4">
                    Cancelled (
                    {myGigs.filter((g) => g.status === "cancelled").length})
                  </TabsTrigger>
                </TabsList>
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </div>

          {/* Filter section remains the same */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
            <div className="relative w-full sm:max-w-sm">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              <Input placeholder="Search your gigs..." className="pl-10" />
            </div>

            <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
              <Select defaultValue="newest">
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="oldest">Oldest</SelectItem>
                  <SelectItem value="budget-high">
                    Budget: High to Low
                  </SelectItem>
                  <SelectItem value="budget-low">
                    Budget: Low to High
                  </SelectItem>
                </SelectContent>
              </Select>

              <Select defaultValue="all">
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="1">Category 1</SelectItem>
                  <SelectItem value="2">Category 2</SelectItem>
                  <SelectItem value="3">Category 3</SelectItem>
                  <SelectItem value="4">Category 4</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* TabsContent sections remain the same */}
          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {myGigs.map((gig) => (
                <GigCard key={gig.id} gig={gig} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="open" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {myGigs
                .filter((gig) => gig.status === "open")
                .map((gig) => (
                  <GigCard key={gig.id} gig={gig} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="completed" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {myGigs
                .filter((gig) => gig.status === "completed")
                .map((gig) => (
                  <GigCard key={gig.id} gig={gig} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="cancelled" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {myGigs
                .filter((gig) => gig.status === "cancelled")
                .map((gig) => (
                  <GigCard key={gig.id} gig={gig} />
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default GigsPage;
