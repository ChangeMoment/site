// Central image registry. Local brand photos are imported as ES modules
// (so Vite hashes them for production); Unsplash photos are referenced by URL.
import welcomeTherapistPhoto from "../../imports/photo_2026-05-25_23-36-50.jpg";
import onlineCounsellingImage from "../../imports/Online_Counselling.jpg";
import relationshipCouplesImage from "../../imports/Relationship___Couples_Counselling.jpg";
import anxietyImage from "../../imports/Anxiety.jpg";
import traumaImage from "../../imports/Trauma.jpg";
import angerManagementImage from "../../imports/Anger_Management.jpg";
import prenatalPregnancyImage from "../../imports/Prenatal___Pregnancy.jpg";
import cvapClientsImage from "../../imports/CVAP_Clients.jpg";
import individualCounsellingImage from "../../imports/Individual_Counselling.jpg";
import familyCounsellingImage from "../../imports/Family_Counselling.jpg";
import depressionImage from "../../imports/Depression.jpg";
import griefLossImage from "../../imports/Grief___Loss.jpg";
import adhdImage from "../../imports/ADHD.jpg";
import lgbtqia2sImage from "../../imports/LGBTQIA2S_.jpg";
import icbcClientsImage from "../../imports/ICBC_Clients.jpg";
import blogImage1 from "../../imports/blog_1_-_What_Is_Therapy_and_What_Happens_in_Your_First_Therapy_Session_.jpg";
import blogImage2 from "../../imports/blog_2_-_Why_Do_I_Feel_Anxious_Even_When_Everything_Seems_Fine.jpg";

export const localImages = {
  welcomeTherapist: welcomeTherapistPhoto,
};

// Bright, calm hero — green water and soft light
export const heroImage =
  "https://images.unsplash.com/photo-1614939745068-1a8cbb55b6c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600";

export const aboutImage =
  "https://images.unsplash.com/photo-1720534670515-c18393c64efd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1400";

export const contactImage =
  "https://images.unsplash.com/photo-1585643522404-ed84cecb7ff1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200";

// A pool of calm nature images used for service & blog visuals
const nature = [
  "https://images.unsplash.com/photo-1721456794513-66071e3de1ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1100",
  "https://images.unsplash.com/photo-1602964343204-ce8e29467aa0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1100",
  "https://images.unsplash.com/photo-1759304863516-ff601cf6b86c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1100",
  "https://images.unsplash.com/photo-1623100989250-27155460738b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1100",
  "https://images.unsplash.com/photo-1444044205806-38f3ed106c10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1100",
  "https://images.unsplash.com/photo-1444791252404-500e5b11f71b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1100",
  "https://images.unsplash.com/photo-1627678434579-3b4102d6d3a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1100",
  "https://images.unsplash.com/photo-1474540412665-1cdae210ae6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1100",
  "https://images.unsplash.com/photo-1501597301489-8b75b675ba0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1100",
  "https://images.unsplash.com/photo-1587836386515-d7bca0304b38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1100",
  "https://images.unsplash.com/photo-1682883498492-5104c20cf851?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1100",
  "https://images.unsplash.com/photo-1746169957635-32933afa054e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1100",
  "https://images.unsplash.com/photo-1764445578321-d11ed50fa9cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1100",
  "https://images.unsplash.com/photo-1766231720442-36b81cd2b17f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1100",
];

// Service id -> image
export const serviceImages: Record<string, string> = {
  "online-counselling": onlineCounsellingImage,
  "individual-counselling": individualCounsellingImage,
  "relationship-and-couples-counselling": relationshipCouplesImage,
  "family-counselling": familyCounsellingImage,
  anxiety: anxietyImage,
  depression: depressionImage,
  trauma: traumaImage,
  "grief-and-loss": griefLossImage,
  "anger-management": angerManagementImage,
  adhd: adhdImage,
  "prenatal-and-pregnancy": prenatalPregnancyImage,
  lgbtqia2s: lgbtqia2sImage,
  "cvap-clients": cvapClientsImage,
  "icbc-clients": icbcClientsImage,
  ifhp: "https://images.unsplash.com/photo-1714976694867-bc0e012fab70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1100",
};

// Blog id -> image
export const blogImages: Record<string, string> = {
  "blog-1": blogImage1,
  "blog-2": blogImage2,
};

export const fallbackBlogImage = blogImage1;

export function getBlogImage(postId: string) {
  return blogImages[postId] ?? fallbackBlogImage;
}

// Therapist id -> portrait
export const therapistImages: Record<string, string> = {
  "therapist-1": "https://images.unsplash.com/photo-1622352607117-88f6089aa418?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
  "therapist-2": "https://images.unsplash.com/photo-1606738132449-e3590ddb6793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
  "therapist-3": "https://images.unsplash.com/photo-1734365294772-2f59212083d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
  "therapist-4": "https://images.unsplash.com/photo-1764081968565-c30ba2cab961?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
  "therapist-5": "https://images.unsplash.com/photo-1733685373178-b49c3943ccef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
  "therapist-6": "https://images.unsplash.com/photo-1767288322682-af2063ad3f49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
};
