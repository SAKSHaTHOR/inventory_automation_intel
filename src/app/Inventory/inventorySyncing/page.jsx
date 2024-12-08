"use client"

import React, { useState, useEffect } from "react";

const InventorySync = () => {
  const [inventory, setInventory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [syncing, setSyncing] = useState(false);

  // Fetch inventory data from the server
  const fetchInventory = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/inventory");
      const data = await response.json();
      setInventory(data);
    } catch (error) {
      console.error("Error fetching inventory:", error);
    } finally {
      setLoading(false);
    }
  };

  // Sync inventory data with the server
  const syncInventory = async () => {
    setSyncing(true);
    try {
      const response = await fetch("/api/inventory/sync", {
        method: "POST",
      });
      const result = await response.json();
      console.log("Sync result:", result);
      fetchInventory(); // Refresh inventory after syncing
    } catch (error) {
      console.error("Error syncing inventory:", error);
    } finally {
      setSyncing(false);
    }
  };

  useEffect(() => {
    fetchInventory();
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Inventory Syncing</h1>

      <div className="mb-4 space-x-2">
        <button
          onClick={syncInventory}
          disabled={syncing}
          className={`px-4 py-2 text-white font-semibold rounded ${
            syncing ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"
          }`}
        >
          {syncing ? "Syncing..." : "Sync Inventory"}
        </button>
        <button
          onClick={fetchInventory}
          disabled={loading}
          className={`px-4 py-2 text-white font-semibold rounded ${
            loading ? "bg-gray-400" : "bg-green-500 hover:bg-green-600"
          }`}
        >
          {loading ? "Loading..." : "Refresh Inventory"}
        </button>
      </div>

      <div className="bg-white shadow-md rounded-lg p-4">
        {loading ? (
          <p className="text-gray-500">Loading inventory...</p>
        ) : inventory.length > 0 ? (
          <ul className="divide-y divide-gray-200">
            {inventory.map((item) => (
              <li key={item.id} className="py-2 flex justify-between items-center">
                <span className="font-medium text-gray-700">{item.name}</span>
                <span className="text-gray-500">{item.quantity} in stock</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No inventory data available.</p>
        )}
      </div>
    </div>
  );
};

export default InventorySync;
