"use client";

import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function VerifyProductPage() {
  const [productLink, setProductLink] = useState("");
  const [loading, setLoading] = useState(false);
  const [matchPercentage, setMatchPercentage] = useState(null);
  const [verificationStatus, setVerificationStatus] = useState("");
  const [productImage, setProductImage] = useState("");
  const [uploadedImage, setUploadedImage] = useState(null);
  const [steps, setSteps] = useState([]);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const processSteps = [
    { text: "🔗 Fetching product image from the link...", delay: 1000 },
    { text: "📂 Checking the uploaded image...", delay: 2000 },
    { text: "🤖 Running image comparison using ResNet-50...", delay: 3000 },
    { text: "🛠️ Calculating match percentage...", delay: 1000 },
  ];

  const simulateVerification = async () => {
    setLoading(true);
    setSteps([]);
    setCurrentStepIndex(0);

    // Execute steps with delay
    for (let i = 0; i < processSteps.length; i++) {
      const step = processSteps[i];
      setSteps((prev) => [...prev, step.text]);
      await new Promise((resolve) => setTimeout(resolve, step.delay));
    }

    // Simulate final calculation
    const randomMatch = Math.floor(Math.random() * (101 - 90) + 90);
    setMatchPercentage(randomMatch);

    // Show final results
    if (randomMatch >= 90) {
      setVerificationStatus("✅ Product Verified - Ready for shipping!");
      toast.success("Product Verified! Ready to ship.");
    } else {
      setVerificationStatus("❌ Verification Failed - Match below threshold.");
      toast.error("Verification Failed!");
    }

    setSteps((prev) => [...prev, `📊 Match Percentage: ${randomMatch}%`]);
    setLoading(false);
  };

  useEffect(() => {
    if (productLink) {
      setProductImage(`data:image/jpeg;base64,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`);
    }
  }, [productLink]);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-6 p-6 text-neutral-700 dark:text-white justify-center mx-auto px-auto">
      <h1 className="text-3xl font-bold">Product Verification</h1>
      <div className="text-sm text-center grid grid-cols-1 md:grid-cols-2 md:gap-32">
      {/* Inputs Section */}
      <div className="grid grid-cols-2 gap-6 w-full sm:grid-cols-1">
        <div className="col-span-1">
          <input
            type="text"
            placeholder="Enter Product Link"
            value={productLink}
            onChange={(e) => setProductLink(e.target.value)}
            className="border p-2 rounded-lg w-full"
          />
        </div>
        {productImage && (
          <div className="col-span-1 flex justify-center items-center">
            <img
              src={productImage}
              alt="Product"
              className="object-cover w-80 h-80 rounded-lg shadow-lg"
            />
          </div>
        )}
      </div>

      {/* Upload Image Section */}
      <div className="w-full">
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="border p-2 rounded-lg w-full"
        />
        {uploadedImage && (
          <div className="mt-4 flex justify-center items-center">
            <img
              src={uploadedImage}
              alt="Uploaded Product"
              className="object-cover w-80 h-80 rounded-lg shadow-lg"
            />
          </div>
        )}
      </div>
</div>
      {/* Verify Button */}
      <button
        onClick={simulateVerification}
        disabled={loading}
        className="bg-blue-500 text-white p-2 rounded-lg mt-4 disabled:bg-gray-400"
      >
        {loading ? "Processing..." : "Verify Product"}
      </button>

      {/* Progress Steps */}
      <div className="grid col-span-2 gap-4 mt-6 w-full text-neutral-700">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`p-4 border-l-4 rounded-lg ${
              index === steps.length - 1 ? "border-blue-500" : "border-gray-300"
            } bg-gray-100 shadow`}
          >
            {step}
          </div>
        ))}
      </div>

      {/* Final Result */}
      {matchPercentage !== null && (
        <div className="text-center mt-6 text-black dark:text-white">
          <p className="text-xl font-bold">
            Match Percentage: {matchPercentage}%
          </p>
          <p
            className={`text-xl ${
              matchPercentage >= 90 ? "text-green-600" : "text-red-600"
            }`}
          >
            {verificationStatus}
          </p>
        </div>
      )}

      {/* Toast Notifications */}
      <ToastContainer
        position="top-center"
        autoClose={5000}
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

export default VerifyProductPage;
