import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const { slug } = params;
  
  // In a real implementation, this would query Supabase by slug
  const page = {
    slug: slug,
    title: `Page: ${slug}`,
    description: `The ${slug} page content`,
    isPublished: true,
  };
  
  return NextResponse.json(page);
}
