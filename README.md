README\

# **NextNoetics** - The Next-Gen Headless CMS & Web Platform

### **Overview**

**NextGenerics** is a modern, modular, and scalable CMS and web
framework built with **Next.js**. Designed to be a **developer-friendly
alternative to WordPress**, it offers seamless content management,
multi-tenant support, and integrations with **Supabase, Netlify, and
more**.

Whether you need a blog, landing page builder, or full-scale
application, DeadGenerics provides **flexible APIs, templating options,
and an extensible plugin system**.

## **Features**

✅ **Next.js 14+ (App Router + TurboRepo Monorepo)**\
✅ **Headless CMS for dynamic content management**\
✅ **API-first approach for seamless integrations**\
✅ **Multi-template support (Basic, Minimal, Modern, Custom)**\
✅ **Supabase as the primary database & authentication layer**\
✅ **Netlify integration for automatic deployments**\
✅ **Turborepo monorepo structure for scalability**\
✅ **Prisma ORM for database management**\
✅ **Tailwind CSS for UI styling**\
✅ **MDX support for content-driven sites**\
✅ **Custom CLI for easy setup & site provisioning**

## **Tech Stack**

-   **Framework:** Next.js (Pages Router & App Router Support)
-   **Database:** Supabase (PostgreSQL) + Prisma ORM
-   **Auth:** Supabase Auth
-   **Storage:** Supabase Buckets for media handling
-   **Hosting:** Netlify / Vercel
-   **Styling:** Tailwind CSS
-   **Build Tooling:** TurboRepo
-   **API Layer:** Next.js API Routes

## **Getting Started**

### **1️⃣ Install Dependencies**

*npm install*

### **2️⃣ Configure Environment Variables**

Create a *.env* file in the root with the following:

*DATABASE_URL=your_supabase_db_url*

*NEXT_PUBLIC_SUPABASE_URL=your_supabase_url*

*NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key*

*NEXT_NETLIFY_WEBHOOK=your_netlify_webhook_url*

*PUBLIC_DG_CMS_TOKEN=your_secure_token*

### **3️⃣ Run the Project**

*npm run dev*

### **4️⃣ Set Up Prisma & Database**

*npx prisma migrate dev \--name init*

## **Project Structure**

*deadgenerics/*

*│── apps/*

*│ └── web/ \# Next.js main app*

*│ ├── components/ \# Shared UI components*

*│ ├── pages/ \# Next.js Pages Router*

*│ ├── app/ \# Next.js App Router (if needed)*

*│ ├── public/ \# Static assets*

*│ ├── styles/ \# Global CSS & Tailwind*

*│ ├── tsconfig.json*

*│ ├── package.json*

*│ └── next.config.js*

*│*

*│── packages/*

*│ ├── db/ \# Prisma ORM & database logic*

*│ ├── eslint-config/ \# Shared ESLint configuration*

*│ ├── typescript-config/# Shared TS config*

*│ ├── ui/ \# UI Component Library*

*│*

*│── netlify/ \# Netlify functions & deployment configs*

*│── turbo.json \# Turborepo config*

*│── tailwind.config.ts \# Tailwind CSS setup*

*│── README.md \# Documentation*

*│── .gitignore*

*│── .env*

*│── package.json*

## **Development Workflow**

1.  **Create a New Blog Post via CMS Dashboard**
2.  **Submit & Trigger Netlify Build for Static Generation**
3.  **Client Site Fetches Blog Content via API**
4.  **Render Dynamic or Static Content on the Client Site**

## **Deployment**

DeadGenerics is optimized for deployment on **Netlify, Vercel, or any
serverless hosting**.\
To deploy to **Netlify**, simply connect your repo and enable build
hooks.

## **Contributing**

This project may be open-sourced soon. If you\'re interested in
contributing:

-   Fork the repo
-   Create a new branch (*feature/my-new-feature*)
-   Submit a PR for review

\
\
**License**

MIT License © 2025 **DeadGenerics Inc.**
