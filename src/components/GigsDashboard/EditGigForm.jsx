import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import DashedSeparator from "../DashedSeparator";
import { cn } from "../../lib/utils";

// Sample categories - in a real app, you'd fetch these from your API
const categories = [
  { id: 1, name: "Music" },
  { id: 2, name: "Languages" },
  { id: 3, name: "Academic" },
  { id: 4, name: "Arts" },
  { id: 5, name: "Sports" },
  { id: 6, name: "Technology" },
  { id: 7, name: "Cooking" },
];

// Zod schema for form validation
const editGigSchema = z.object({
  category_id: z.string().min(1, "Please select a category"),
  title: z.string().min(10, "Title must be at least 10 characters"),
  description: z.string().min(50, "Description must be at least 50 characters"),
  budget: z
    .string()
    .min(1, "Budget is required")
    .refine((val) => !isNaN(Number(val)) && Number(val) >= 1000, {
      message: "Budget must be at least 1000",
    }),
  location: z.string().min(1, "Location is required"),
  status: z.enum(["open", "completed", "cancelled"]).optional().default("open"),
});

const EditGigForm = ({ initialGig }) => {
  const form = useForm({
    resolver: zodResolver(editGigSchema),
    defaultValues: {
      category_id: initialGig ? initialGig.category_id : "",
      title: initialGig ? initialGig.title : "",
      description: initialGig ? initialGig.description : "",
      budget: initialGig ? initialGig.budget.toString() : "",
      location: initialGig ? initialGig.location : "",
      status: initialGig ? initialGig.status : "open",
    },
  });

  const onSubmit = (values) => {
    console.log("Form submitted with values:", values);
    // In a real implementation, you would send this data to your API
    // and handle success/error states
  };

  return (
    <Card className="w-full h-full border-none shadow-none">
      <CardHeader className="p-0">
        <CardTitle className="text-xl sm:text-3xl font-bold text-[#0097A7]" >Edit Gig</CardTitle>
      </CardHeader>
      <div className="p-0">
        <DashedSeparator />
      </div>
      <CardContent className="p-0">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-y-4">
              {/* Category */}
              <FormField
                control={form.control}
                name="category_id"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel style={{ color: "#333333" }}>Category</FormLabel>
                    <FormControl>
                      <Select
                        defaultValue={field.value}
                        onValueChange={field.onChange}
                      >
                        <FormControl>
                          <SelectTrigger style={{ borderColor: "#C7B8EA" }}>
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                        </FormControl>
                        <FormMessage style={{ color: "#0097A7" }} />
                        <SelectContent>
                          {categories.map((category) => (
                            <SelectItem
                              key={category.id}
                              value={category.id.toString()}
                            >
                              {category.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage style={{ color: "#0097A7" }} />
                  </FormItem>
                )}
              />

              {/* Title */}
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel style={{ color: "#333333" }}>Gig Title</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Enter gig title (min 10 characters)"
                        style={{ borderColor: "#C7B8EA" }}
                      />
                    </FormControl>
                    <FormMessage style={{ color: "#0097A7" }} />
                  </FormItem>
                )}
              />

              {/* Description */}
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel style={{ color: "#333333" }}>Description</FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        placeholder="Describe what you want to learn (min 50 characters)"
                        className="min-h-32 resize-y"
                        style={{ borderColor: "#C7B8EA" }}
                      />
                    </FormControl>
                    <FormMessage style={{ color: "#0097A7" }} />
                  </FormItem>
                )}
              />

              {/* Budget */}
              <FormField
                control={form.control}
                name="budget"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel style={{ color: "#333333" }}>Budget</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="number"
                        min="1000"
                        placeholder="Enter your budget (min 1000)"
                        style={{ borderColor: "#C7B8EA" }}
                      />
                    </FormControl>
                    <FormMessage style={{ color: "#0097A7" }} />
                  </FormItem>
                )}
              />

              {/* Location */}
              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel style={{ color: "#333333" }}>Preferred Location</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Where would you like to learn? (e.g. Online, City)"
                        style={{ borderColor: "#C7B8EA" }}
                      />
                    </FormControl>
                    <FormMessage style={{ color: "#0097A7" }} />
                  </FormItem>
                )}
              />

              {/* Status */}
              <FormField
                control={form.control}
                name="status"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel style={{ color: "#333333" }}>Status</FormLabel>
                    <FormControl>
                      <Select
                        defaultValue={field.value}
                        onValueChange={field.onChange}
                      >
                        <FormControl>
                          <SelectTrigger style={{ borderColor: "#C7B8EA" }}>
                            <SelectValue placeholder="Select status" />
                          </SelectTrigger>
                        </FormControl>
                        <FormMessage style={{ color: "#0097A7" }} />
                        <SelectContent>
                          <SelectItem value="open">Open</SelectItem>
                          <SelectItem value="completed">Completed</SelectItem>
                          <SelectItem value="cancelled">Cancelled</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage style={{ color: "#0097A7" }} />
                  </FormItem>
                )}
              />
            </div>
            <DashedSeparator className="py-7" />
            <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-4 sm:gap-2 w-full">
              <div className="w-full sm:w-fit">
                <Button
                  type="button"
                  size="lg"
                  variant="secondary"
                  className="w-full sm:w-auto"
                  style={{ backgroundColor: "#F7F7F7", color: "#333333" }}
                >
                  Cancel
                </Button>
              </div>
              <div className="w-full sm:w-fit">
                <Button 
                  className="w-full sm:w-auto" 
                  type="submit" 
                  size="lg" 
                  style={{ 
                    background: "linear-gradient(135deg, #C7B8EA 0%, #87CEEB 100%)",
                    color: "#FFFFFF" 
                  }}
                >
                  Update Gig
                </Button>
              </div>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default EditGigForm;