import { NextResponse } from "next/server";

export async function GET() {
  // In a real implementation, this would query Supabase
  const pages = [
    { slug: "home", title: "Home", description: "The home page" },
    { slug: "about", title: "About", description: "About this project" },
    { slug: "features", title: "Features", description: "Website features" },
    { slug: "contact", title: "Contact", description: "Contact information" },
  ];
  
  return NextResponse.json(pages);
}
