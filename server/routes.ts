import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const contactData = contactSchema.parse(req.body);
      
      // In a real app, you'd send an email or store the contact request in a database
      // Here we'll just log it and return success
      console.log("New contact form submission:", contactData);
      
      return res.status(200).json({ success: true, message: "Message received!" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          success: false, 
          message: "Invalid form data", 
          errors: error.errors 
        });
      }
      
      return res.status(500).json({ 
        success: false, 
        message: "Server error, please try again later" 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
