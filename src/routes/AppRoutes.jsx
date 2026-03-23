import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

// Lazy-loaded pages for code splitting
const Services = lazy(() => import("../pages/Services/Services"));
const AIAutomation = lazy(() => import("../pages/AI_Automation/AI_Automation"));
const CloudServices = lazy(
  () => import("../pages/CloudServices/CloudServices"),
);
const WebDevPage = lazy(() => import("../pages/WebDev/WebDevelopment"));
const MobilePage = lazy(() => import("../pages/MobileApps/MobileApps"));
const ITConsultingPage = lazy(
  () => import("../pages/ItConsulting/It_Consulting"),
);
const UXDesignPage = lazy(() => import("../pages/UiUx/UiUxDesign"));
const APIIntegrationsPage = lazy(
  () => import("../pages/ApiIntegration/API_Integration"),
);
const Blog = lazy(() => import("../pages/Blog/Blog"));
const Body = lazy(() => import("../pages/Bodypage/Body"));
const Career = lazy(() => import("../pages/Career/Career"));
const Study = lazy(() => import("../pages/CaseStudies/Study"));
const Community = lazy(() => import("../pages/Community/Community"));
const Contact = lazy(() => import("../pages/Contact/Contact"));

function PageLoader() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <div className="w-8 h-8 border-3 border-blue-600 border-t-transparent rounded-full animate-spin" />
        <p className="text-gray-400 text-sm">Loading...</p>
      </div>
    </div>
  );
}

export default function AppRoutes() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="blog" element={<Blog />} />
        <Route path="career" element={<Career />} />
        <Route path="study" element={<Study />} />
        <Route path="community" element={<Community />} />
        <Route path="contact" element={<Contact />} />
        <Route path="services" element={<Services />}></Route>
        <Route path="ai-automation" element={<AIAutomation />} />
        <Route path="api-integration" element={<APIIntegrationsPage />} />
        <Route path="cloud-services" element={<CloudServices />} />
        <Route path="web-development" element={<WebDevPage />} />
        <Route path="mobile-apps" element={<MobilePage />} />
        <Route path="it-consulting" element={<ITConsultingPage />} />
        <Route path="ui-ux-design" element={<UXDesignPage />} />
      </Routes>
    </Suspense>
  );
}

// import { Outlet } from "react-router-dom";

// function Services() {
//   return (
//     <div>
//       <h1>Services Page</h1>
//       <Outlet />
//     </div>
//   );
// }
