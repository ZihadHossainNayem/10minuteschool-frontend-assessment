# 10 Minute School – IELTS Course Page

A fully responsive and dynamic IELTS Course product page built with **Next.js 15**, **TypeScript**, and **Tailwind CSS**. Developed as part of the **10 Minute School Frontend Assessment**.

---

## 🔗 Live Demo

Check out the live demo here:
[https://10minuteschool-frontend-assessment.vercel.app/products/ielts-course/en](https://10minuteschool-frontend-assessment.vercel.app/products/ielts-course/en)

---

## 🚀 How to Run

### ✅ Using Docker (Recommended)

```bash
docker build -t nayem-submission .
docker run -p 3000:3000 nayem-submission
```

Visit: [http://localhost:3000/products/ielts-course/en](http://localhost:3000/products/ielts-course/en)

---

### 🧪 Local Development

```bash
npm install
npm run build
npm start
```

Visit: [http://localhost:3000/products/ielts-course/en](http://localhost:3000/products/ielts-course/en)

---

## 📋 What I Built

### 🧩 Core Features

-   ✅ **Responsive Product Page** – Mobile-first design that works across all devices
-   🌐 **Multi-language Support** – English and Bengali via URL (`/en`, `/bn`)
-   🔗 **API Integration** – Connected to the 10 Minute School API for dynamic content
-   ⚡ **Server-Side Rendering (SSR)** – Faster page loads with Next.js App Router
-   🔍 **SEO Optimization** – Dynamic metadata for improved search visibility

---

## 🧱 Product Page Sections

-   **Product Title & Description** – Course name and HTML description from API
-   **Instructor Section** – Instructor info with photos and bios
-   **Features Section** – Course structure and modules
-   **Learning Points** – Key takeaways and what students will learn
-   **Exclusive Features** – Special offerings and benefits
-   **Course Details** – Detailed breakdown of course content
-   **Media Player** – Embedded YouTube trailer
-   **Call-to-Action (CTA)** – Purchase button with a checklist
-   **Sticky Navigation** – Smooth scroll to each section

---

## ⚙️ Technical Implementation

-   ⚛️ **Next.js 15** – Using App Router for SSR/ISR
-   🟦 **TypeScript** – Ensures type safety throughout the codebase
-   🎨 **Tailwind CSS** – Utility-first CSS framework
-   🌐 **React Context API** – Manages language switching
-   📡 **Axios** – For API communication
-   🪄 **Incremental Static Regeneration (ISR)** – 1-hour cache revalidation
-   🐳 **Docker** – Containerized for deployment
-   🛡️ **Error Boundaries** – Catches and handles UI errors
-   ⏳ **Loading States** – Skeleton loaders and fallbacks during data fetch

---

## 🚄 Performance Features

-   🖼 **Image Optimization** – Via Next.js `<Image />` for faster loads
-   ✂️ **Code Splitting** – Reduces initial JS payload
-   🏁 **Static Generation** – Prebuilt pages for performance
-   🔄 **Caching** – 1-hour revalidation using ISR

---

## 📱 Mobile Experience

-   ✅ **Responsive Design** – Works beautifully on mobile, tablet, and desktop
-   📌 **Sticky CTA** – Mobile-optimized purchase button
-   ✋ **Touch Navigation** – Smooth scrolling and swipe interactions

---

## 🛠️ Tech Stack

-   **Next.js 15** – App Router, SSR, ISR
-   **React 19**
-   **TypeScript**
-   **Tailwind CSS**
-   **Axios**
-   **React Icons**
-   **Docker**

---

## 🌐 Language Support

-   ![🇬🇧](https://flagcdn.com/16x12/gb.png) English: `/products/ielts-course/en`
-   ![🇧🇩](https://flagcdn.com/16x12/bd.png) Bengali: `/products/ielts-course/bn`
-   🚀 Auto-redirect: Home page redirects to English version
