"use client"
import React, { useState } from "react";
import { Home, Package, Truck, BarChart, Settings, CheckCircle, Sync, TrendingUp } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarHeader,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";

export function AppSidebar() {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);


  return (
    <Sidebar collapsible="icon">
       <SidebarHeader>LS</SidebarHeader>
      <SidebarContent>
        {/* Main Menu */}
        
        <SidebarGroup>
          <SidebarGroupLabel>LogiSmart - AI Powered</SidebarGroupLabel>
          <SidebarMenu>
            {/* Dashboard */}
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <a href="/dashboard" className="flex items-center gap-2">
                  <Home className="h-5 w-5" />
                  <span>Dashboard</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>

            {/* Inventory */}
            <Collapsible open={isOpen1} onOpenChange={setIsOpen1} className="group/collapsible">
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton className="flex items-center gap-2">
                    <Package className="h-5 w-5" />
                    <span>Inventory</span>
                    <span
                      className={`ml-auto transform transition-transform duration-300 ${
                        isOpen1 ? "rotate-90" : ""
                      }`}
                    >
                      &#8250; {/* Arrow symbol */}
                    </span>
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SidebarMenuSub>
                    <SidebarMenuSubItem>
                      <SidebarMenuButton asChild>
                        <a href="/inventory/add" className="pl-8">
                          Add Products
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuSubItem>
                    <SidebarMenuSubItem>
                      <SidebarMenuButton asChild>
                        <a href="/inventory/distribution" className="pl-8">
                          Stock Distribution
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuSubItem>
                    <SidebarMenuSubItem>
                      <SidebarMenuButton asChild>
                        <a href="/inventory/sync" className="pl-8">
                          Inventory Syncing
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuSubItem>
                    <SidebarMenuSubItem>
                      <SidebarMenuButton asChild>
                        <a href="/inventory/smart-suggestions" className="pl-8">
                          Smart Inventory Suggestions
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuSubItem>
                    <SidebarMenuSubItem>
                      <SidebarMenuButton asChild>
                        <a href="/inventory/forecast" className="pl-8">
                          Demand Forecasting & Prediction
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuSubItem>
                  </SidebarMenuSub>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>

            {/* Product Verification */}
            <Collapsible open={isOpen2} onOpenChange={setIsOpen2} className="group/collapsible">
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5" />
                    <span>Product Verification</span>
                    <span
                      className={`ml-auto transform transition-transform duration-300 ${
                        isOpen2 ? "rotate-90" : ""
                      }`}
                    >
                      &#8250; {/* Arrow symbol */}
                    </span>
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SidebarMenuSub>
                    <SidebarMenuSubItem>
                      <SidebarMenuButton asChild>
                        <a href="/product/verify" className="pl-8">
                          Verify Products
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuSubItem>
                    <SidebarMenuSubItem>
                      <SidebarMenuButton asChild>
                        <a href="/product/audits" className="pl-8">
                          Audits & Reviews
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuSubItem>
                  </SidebarMenuSub>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>

            {/* Shipping */}
            <Collapsible open={isOpen3} onOpenChange={setIsOpen3} className="group/collapsible">
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton className="flex items-center gap-2">
                    <Truck className="h-5 w-5" />
                    <span>Shipping</span>
                    <span
                      className={`ml-auto transform transition-transform duration-300 ${
                        isOpen3 ? "rotate-90" : ""
                      }`}
                    >
                      &#8250; {/* Arrow symbol */}
                    </span>
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SidebarMenuSub>
                    <SidebarMenuSubItem>
                      <SidebarMenuButton asChild>
                        <a href="/shipping/track" className="pl-8">
                          Track Orders
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuSubItem>
                    <SidebarMenuSubItem>
                      <SidebarMenuButton asChild>
                        <a href="/shipping/routes" className="pl-8">
                          Optimize Routes
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuSubItem>
                  </SidebarMenuSub>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>

            {/* Analytics */}
            <Collapsible open={isOpen4} onOpenChange={setIsOpen4} className="group/collapsible">
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton className="flex items-center gap-2">
                    <BarChart className="h-5 w-5" />
                    <span>Analytics</span>
                    <span
                      className={`ml-auto transform transition-transform duration-300 ${
                        isOpen4 ? "rotate-90" : ""
                      }`}
                    >
                      &#8250; {/* Arrow symbol */}
                    </span>
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SidebarMenuSub>
                    <SidebarMenuSubItem>
                      <SidebarMenuButton asChild>
                        <a href="/analytics/sales" className="pl-8">
                          Sales Reports
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuSubItem>
                    <SidebarMenuSubItem>
                      <SidebarMenuButton asChild>
                        <a href="/analytics/ai-insights" className="pl-8">
                          AI Insights
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuSubItem>
                  </SidebarMenuSub>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>

            {/* Settings */}
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <a href="/settings" className="flex items-center gap-2">
                  <Settings className="h-5 w-5" />
                  <span>Settings</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
