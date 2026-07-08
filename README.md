# 🌾 CropSense AI

> **An Intelligent Agricultural Decision Support System Powered by Google Gemma**

CropSense AI is an AI-powered agricultural decision support platform designed to assist farmers with informed crop planning and decision-making. The system combines government weather reports, rainfall statistics, and crop market analysis with Google's Gemma Large Language Model (LLM) to generate intelligent, context-aware farming recommendations.

Developed as part of the **Google Gemma Hackathon**, CropSense AI demonstrates how Artificial Intelligence can simplify agricultural decision-making by transforming complex government reports into practical insights for farmers.

---

## 🌐 Live Demo

**Frontend Application**

> https://YOUR-LIVE-DEMO-LINK

---

## 💻 GitHub Repository

https://github.com/SubhasisRoy578/CropSense-AI

---

## 📖 Table of Contents

- Project Overview
- Problem Statement
- Key Features
- Technology Stack
- System Architecture
- Project Workflow
- Installation Guide
- Dataset Information
- Google Gemma Integration
- Project Structure
- Results
- Future Improvements
- Contributors
- License

---

# Project Overview

Agriculture generates enormous amounts of valuable information every day through weather bulletins, rainfall reports, and crop market statistics. However, interpreting these reports requires technical expertise and significant time, making them less accessible to many farmers.

CropSense AI addresses this challenge by collecting agricultural information from government sources, extracting and organizing the relevant content, and using Google Gemma to generate personalized farming recommendations. The platform enables users to obtain actionable agricultural insights through an intuitive and modern web interface.

---

# Problem Statement

Farmers often struggle to interpret lengthy government reports and rapidly changing weather conditions before making critical agricultural decisions. Existing information is fragmented across multiple sources, making timely and informed decision-making difficult.

CropSense AI bridges this gap by integrating multiple agricultural datasets with Artificial Intelligence to provide reliable, easy-to-understand recommendations for smarter farming decisions.

---

# Key Features

- AI-powered agricultural recommendations
- Google Gemma integration
- Government weather report analysis
- Rainfall statistics analysis
- Crop market trend analysis
- Intelligent prompt engineering
- PDF text extraction
- OCR support for scanned documents
- Automated report generation
- Modern responsive frontend
- User-friendly interface
- End-to-end AI workflow

---

# Technology Stack

| Category | Technology |
|----------|------------|
| Programming Language | Python, JavaScript |
| Frontend | React |
| Styling | Tailwind CSS |
| Artificial Intelligence | Google Gemma |
| Notebook Environment | Kaggle |
| Data Source | Government Agricultural Reports |
| Version Control | GitHub |
| Deployment | Vercel |
| PDF Processing | pdfplumber, OCR |
| Machine Learning | Transformers |

---

# System Architecture

```
Government Reports
        │
        ▼
PDF Extraction & OCR
        │
        ▼
Data Cleaning
        │
        ▼
Weather Analysis
        │
        ▼
Crop Market Analysis
        │
        ▼
Prompt Engineering
        │
        ▼
Google Gemma
        │
        ▼
AI Recommendation
        │
        ▼
Frontend Dashboard
```

---

# Project Workflow

```
Farmer Query

      │

      ▼

Government Weather Reports

      │

      ▼

Rainfall Statistics

      │

      ▼

Crop Market Reports

      │

      ▼

Data Extraction & Cleaning

      │

      ▼

Prompt Engineering

      │

      ▼

Google Gemma

      │

      ▼

AI Recommendation

      │

      ▼

Frontend Dashboard
```

---

# Installation Guide

## 1. Clone the Repository

```bash
git clone https://github.com/SubhasisRoy578/CropSense-AI.git
```

---

## 2. Navigate to the Project Folder

```bash
cd CropSense-AI
```

---

## 3. Install Frontend Dependencies

```bash
npm install
```

---

## 4. Install Required Python Libraries

```bash
pip install pdfplumber
pip install pytesseract
pip install pdf2image
pip install transformers
pip install torch
pip install pandas
pip install matplotlib
pip install pillow
```

---

## 5. Start the Frontend

```bash
npm run dev
```

---

## 6. Open the Application

```
http://localhost:5173
```

---

## 7. Kaggle Notebook Execution

Run all notebook cells sequentially from top to bottom.

The notebook performs:

- PDF loading
- OCR processing
- Weather analysis
- Rainfall analysis
- Crop market analysis
- Prompt generation
- Google Gemma inference
- Final recommendation generation

---

# Dataset Information

CropSense AI utilizes publicly available government agricultural datasets.

Included datasets include:

- Weather Bulletins
- Rainfall Distribution Reports
- Crop Price Variance Reports

These reports are processed to generate structured agricultural insights before being passed to Google Gemma.

---

# Google Gemma Integration

Google Gemma serves as the reasoning engine of CropSense AI.

The workflow includes:

1. Extraction of agricultural information from government reports.
2. Cleaning and organizing the extracted text.
3. Generation of structured weather and market summaries.
4. Construction of an AI prompt containing agricultural context.
5. Processing of the prompt by Google Gemma.
6. Generation of intelligent farming recommendations.
7. Presentation of recommendations through the frontend dashboard.

This enables farmers to receive context-aware, explainable, and actionable agricultural guidance.

---

# Project Structure

```
CropSense-AI/

├── frontend/
├── public/
├── src/
├── assets/
├── notebook/
├── datasets/
├── README.md
└── package.json
```

---

# Results

CropSense AI successfully demonstrates the integration of government agricultural datasets with Google Gemma to generate intelligent farming recommendations.

The application provides:

- Weather summaries
- Rainfall insights
- Crop market analysis
- AI-generated recommendations
- Structured agricultural reports
- Interactive user interface

The modular architecture enables future expansion through additional datasets and advanced AI capabilities.

---

# Future Improvements

Future enhancements planned for CropSense AI include:

- Live weather API integration
- Real-time crop market prices
- Soil health analysis
- Satellite imagery support
- Voice assistant
- Regional language support
- Mobile application
- IoT sensor integration
- Personalized farmer profiles
- Disease detection using Computer Vision

---

# Contributors

**Subhasis Roy**

Project Developer

---

# Acknowledgements

This project was developed for the **Google Gemma Hackathon**.

Special thanks to:

- Google AI
- Kaggle
- Google Gemma
- Open-source Python community
- Government agencies providing agricultural datasets

---

# License

This project is released under the **MIT License**.

---

## Contact

**Developer:** Subhasis Roy

**GitHub:** https://github.com/SubhasisRoy578/CropSense-AI

---

## ⭐ Support

If you found this project useful, consider giving the repository a **Star ⭐** on GitHub.
