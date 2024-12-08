"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardHeader, CardBody, CardFooter } from "@/components/ui/card";
import { Select, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AddProductPage() {
  const [uploadedImage, setUploadedImage] = useState(null);

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result); // Store image as base64
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle form submission
  const handleSubmit = () => {
    toast.success("Product added to inventory successfully!", {
      position: "top-center",
    });

    // Simulate a delay and refresh the page
    setTimeout(() => {
      window.location.reload();
    }, 3000);
  };

  return (
    <div className="min-h-screen p-6 justify-center w-max mx-auto px-auto pt-14">
      <div className="max-w-4xl mx-auto">
        {/* Page Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-semibold ">Add New Product</h1>
          <p className="text-sm ">Fill in the details to add a new product to your inventory.</p>
        </div>

        {/* Card Wrapper */}
        <Card className="shadow-lg">
          <CardHeader className="border-b">
            <h2 className="text-lg font-semibold ">Product Details</h2>
          </CardHeader>
          <CardBody className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Product Name */}
            <div>
              <Label htmlFor="product-name">Product Name</Label>
              <Input id="product-name" placeholder="e.g., AI Robot" className="mt-2" />
            </div>

            {/* SKU */}
            <div>
              <Label htmlFor="product-sku">Product SKU</Label>
              <Input id="product-sku" placeholder="e.g., SKU12345" className="mt-2" />
            </div>

            {/* Category */}
            <div>
              <Label htmlFor="category">Category</Label>
              <Select>
                <SelectTrigger id="category" className="mt-2">
                  Select Category
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="electronics">Electronics</SelectItem>
                  <SelectItem value="warehouse-tools">Warehouse Tools</SelectItem>
                  <SelectItem value="ai-models">AI Models</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Price */}
            <div>
              <Label htmlFor="price">Price ($)</Label>
              <Input id="price" type="number" placeholder="e.g., 500" className="mt-2" />
            </div>

            {/* Image Upload */}
            <div className="md:col-span-2">
              <Label htmlFor="image-upload">Product Image</Label>
              <Input
                id="image-upload"
                type="file"
                accept="image/*"
                className="mt-2"
                onChange={handleImageUpload}
              />
              {uploadedImage && (
                <div className="mt-4">
                  <img
                    src={uploadedImage}
                    alt="Uploaded Product"
                    className="w-full h-80 object-cover rounded-lg shadow-md"
                  />
                </div>
              )}
            </div>

            {/* Description */}
            <div className="md:col-span-2">
              <Label htmlFor="description">Product Description</Label>
              <Textarea
                id="description"
                placeholder="Provide a brief description of the product."
                className="mt-2"
              />
            </div>
          </CardBody>

          {/* Footer */}
          <CardFooter className="flex justify-end border-t">
            <Button variant="secondary" className="mr-4">
              Cancel
            </Button>
            <Button onClick={handleSubmit}>Add Product</Button>
          </CardFooter>
        </Card>
      </div>

      {/* Toast Notifications */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}
