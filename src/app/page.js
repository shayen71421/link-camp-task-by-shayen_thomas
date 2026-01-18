"use client";

import LinkCampNavbar from "@/components/Navbar/LinkCampNavbar";
import LinkCampHeroSection from "@/sections/HomePage/LinkCampHeroSection";
import LinkCampAboutSection from "@/sections/HomePage/LinkCampAboutSection";
import LinkCampScheduleSection from "@/sections/HomePage/LinkCampScheduleSection";
import LinkCampRegistrationSection from "@/sections/HomePage/LinkCampRegistrationSection";
import LinkCampFooterSection from "@/sections/HomePage/LinkCampFooterSection";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    document.title = "LINK CAMP 2026 - IEEE LINK"
  }, []);
  
  return (
    <div>
      <LinkCampNavbar />
      <div className="pt-16">
        <LinkCampHeroSection />
        <div id="about">
          <LinkCampAboutSection />
        </div>
        <div id="schedule">
          <LinkCampScheduleSection />
        </div>
        <LinkCampRegistrationSection />
        <LinkCampFooterSection />
      </div>
    </div>
  );
};

export default Home;
