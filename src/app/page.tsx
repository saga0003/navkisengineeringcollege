"use client";

import { useRouter, RouterContext } from "@/lib/use-router";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { HomePage } from "@/components/site/pages/home";
import { AboutPage } from "@/components/site/pages/about";
import { VisionMissionPage } from "@/components/site/pages/vision-mission";
import { LeadershipPage } from "@/components/site/pages/leadership";
import { GoverningCouncilPage } from "@/components/site/pages/governing-council";
import { AccreditationPage } from "@/components/site/pages/accreditation";
import { DepartmentsPage } from "@/components/site/pages/departments";
import { DepartmentDetailPage } from "@/components/site/pages/department-detail";
import { AdmissionsPage } from "@/components/site/pages/admissions";
import { ScholarshipsPage } from "@/components/site/pages/scholarships";
import { ApplyPage } from "@/components/site/pages/apply";
import { CampusLifePage } from "@/components/site/pages/campus-life";
import { FacilitiesPage } from "@/components/site/pages/facilities";
import { ClubsPage } from "@/components/site/pages/clubs";
import { GalleryPage } from "@/components/site/pages/gallery";
import { PlacementsPage } from "@/components/site/pages/placements";
import { RecruitersPage } from "@/components/site/pages/recruiters";
import { TestimonialsPage } from "@/components/site/pages/testimonials";
import { ContactPage } from "@/components/site/pages/contact";
import { CareersPage } from "@/components/site/pages/careers";
import { NotFoundPage } from "@/components/site/pages/not-found";

function RouteRenderer({ page, param }: { page: string; param?: string }) {
  switch (page) {
    case "home": return <HomePage />;
    case "about": return <AboutPage />;
    case "vision-mission": return <VisionMissionPage />;
    case "leadership": return <LeadershipPage />;
    case "governing-council": return <GoverningCouncilPage />;
    case "accreditation": return <AccreditationPage />;
    case "departments": return <DepartmentsPage />;
    case "department": return <DepartmentDetailPage slug={param || "cse"} />;
    case "admissions": return <AdmissionsPage />;
    case "scholarships": return <ScholarshipsPage />;
    case "apply": return <ApplyPage />;
    case "campus-life": return <CampusLifePage />;
    case "facilities": return <FacilitiesPage />;
    case "clubs": return <ClubsPage />;
    case "gallery": return <GalleryPage />;
    case "placements": return <PlacementsPage />;
    case "recruiters": return <RecruitersPage />;
    case "testimonials": return <TestimonialsPage />;
    case "contact": return <ContactPage />;
    case "careers": return <CareersPage />;
    default: return <NotFoundPage />;
  }
}

export default function Home() {
  const { route, navigate } = useRouter();

  return (
    <RouterContext.Provider value={{ route, navigate }}>
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1">
          <RouteRenderer key={`${route.page}-${route.param || ""}`} page={route.page} param={route.param} />
        </main>
        <Footer />
      </div>
    </RouterContext.Provider>
  );
}
