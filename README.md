# FreshEx - Farm Fresh Marketplace

![App Preview](https://imgix.cosmicjs.com/61427ea0-5a4f-11f1-93fc-1339ba0f6cad-autopilot-photo-1518635017498-87f514b751ba-1779943240577.jpeg?w=1200&h=630&fit=crop&auto=format,compress)

A modern farm-to-table marketplace built with Next.js and Cosmic CMS.

## Features

- 🥬 Browse fresh products by category
- 👨‍🌾 Discover local suppliers and farmers
- 🏷️ Category-based product filtering
- 📱 Fully responsive design
- ⚡ Server-side rendering for optimal performance
- 🎨 Beautiful, modern UI with Tailwind CSS

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=6a17c6f8f2c683f5f2b3783a&clone_repository=6a17c7f6f2c683f5f2b3787c)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create content models for: FreshEx"

### Code Generation Prompt

> Build a Next.js application for a website called "FreshEx's Project". The content is managed in Cosmic CMS with the following object types: categories, suppliers, products. Create a beautiful, modern, responsive design with a homepage and pages for each content type.

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Cosmic CMS** - Headless content management
- **Bun** - Fast package manager

## Getting Started

### Prerequisites

- Bun (or Node.js 18+)
- A Cosmic account with the FreshEx bucket

### Installation

```bash
bun install
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Cosmic SDK Examples

```typescript
// Fetch all products with related data
const { objects: products } = await cosmic.objects
  .find({ type: 'products' })
  .depth(1)

// Fetch products by category
const { objects } = await cosmic.objects
  .find({ type: 'products', 'metadata.category': categoryId })
  .depth(1)
```

## Cosmic CMS Integration

This app uses three content types from your Cosmic bucket:
- **Categories** - Product categories with icons
- **Suppliers** - Local farmers and producers
- **Products** - Fresh items with category and supplier connections

Read more in the [Cosmic docs](https://www.cosmicjs.com/docs).

## Deployment Options

Deploy to Vercel, Netlify, or any platform supporting Next.js. Set environment variables:
- `COSMIC_BUCKET_SLUG`
- `COSMIC_READ_KEY`
- `COSMIC_WRITE_KEY`

<!-- README_END -->