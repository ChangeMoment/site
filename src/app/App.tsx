// ChangeMoment app shell — preview cache refresh 4
import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import { LanguageProvider } from "./i18n/LanguageProvider";
import { Layout } from "./components/Layout";

const Home = lazy(() => import("./pages/Home").then((module) => ({ default: module.Home })));
const About = lazy(() => import("./pages/About").then((module) => ({ default: module.About })));
const Team = lazy(() => import("./pages/Team").then((module) => ({ default: module.Team })));
const Services = lazy(() => import("./pages/Services").then((module) => ({ default: module.Services })));
const ServiceDetail = lazy(() => import("./pages/ServiceDetail").then((module) => ({ default: module.ServiceDetail })));
const Blogs = lazy(() => import("./pages/Blogs").then((module) => ({ default: module.Blogs })));
const BlogDetail = lazy(() => import("./pages/BlogDetail").then((module) => ({ default: module.BlogDetail })));
const Contact = lazy(() => import("./pages/Contact").then((module) => ({ default: module.Contact })));
const Book = lazy(() => import("./pages/Book").then((module) => ({ default: module.Book })));
const Legal = lazy(() => import("./pages/Legal").then((module) => ({ default: module.Legal })));
const NotFound = lazy(() => import("./pages/NotFound").then((module) => ({ default: module.NotFound })));

export function AppRoutes() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white" aria-label="Loading" />}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="team" element={<Team />} />
          <Route path="services" element={<Services />} />
          <Route path="services/:slug" element={<ServiceDetail />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="blogs/:slug" element={<BlogDetail />} />
          <Route path="contact" element={<Contact />} />
          <Route path="book" element={<Book />} />
          <Route path="privacy" element={<Legal which="privacy" />} />
          <Route path="terms" element={<Legal which="terms" />} />
          <Route path="accessibility" element={<Legal which="accessibility" />} />

          <Route path="fa" element={<Home />} />
          <Route path="fa/about" element={<About />} />
          <Route path="fa/team" element={<Team />} />
          <Route path="fa/services" element={<Services />} />
          <Route path="fa/services/:slug" element={<ServiceDetail />} />
          <Route path="fa/blogs" element={<Blogs />} />
          <Route path="fa/blogs/:slug" element={<BlogDetail />} />
          <Route path="fa/contact" element={<Contact />} />
          <Route path="fa/book" element={<Book />} />
          <Route path="fa/privacy" element={<Legal which="privacy" />} />
          <Route path="fa/terms" element={<Legal which="terms" />} />
          <Route path="fa/accessibility" element={<Legal which="accessibility" />} />
          <Route path="fr" element={<Home />} />
          <Route path="fr/about" element={<About />} />
          <Route path="fr/team" element={<Team />} />
          <Route path="fr/services" element={<Services />} />
          <Route path="fr/services/:slug" element={<ServiceDetail />} />
          <Route path="fr/blogs" element={<Blogs />} />
          <Route path="fr/blogs/:slug" element={<BlogDetail />} />
          <Route path="fr/contact" element={<Contact />} />
          <Route path="fr/book" element={<Book />} />
          <Route path="fr/privacy" element={<Legal which="privacy" />} />
          <Route path="fr/terms" element={<Legal which="terms" />} />
          <Route path="fr/accessibility" element={<Legal which="accessibility" />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </LanguageProvider>
  );
}
