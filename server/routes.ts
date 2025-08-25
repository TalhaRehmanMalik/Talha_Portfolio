import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from "path";
import express from "express";

export async function registerRoutes(app: Express): Promise<Server> {
  // Serve static assets (PDFs)
  app.use('/attached_assets', (req, res, next) => {
    res.setHeader('Content-Disposition', 'attachment');
    next();
  });
  app.use('/attached_assets', express.static(path.join(process.cwd(), 'attached_assets')));

  // Health check endpoint
  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok", message: "Portfolio API is running" });
  });

  // Contact form endpoint (placeholder for future implementation)
  app.post("/api/contact", (req, res) => {
    const { name, email, message } = req.body;
    
    // In a real application, you would:
    // 1. Validate the input
    // 2. Send an email notification
    // 3. Store the message in a database
    // 4. Return appropriate response
    
    console.log("Contact form submission:", { name, email, message });
    
    res.json({ 
      success: true, 
      message: "Thank you for your message! I'll get back to you soon." 
    });
  });

  // CV download tracking endpoint
  app.post("/api/cv-download", (_req, res) => {
    // Track CV downloads for analytics
    console.log("CV downloaded at:", new Date().toISOString());
    
    res.json({ success: true });
  });

  const httpServer = createServer(app);

  return httpServer;
}
