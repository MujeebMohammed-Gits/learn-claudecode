import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug?: string }> }
) {
  const slug = (await params).slug || `home`;

  // In a real implementation, this would query Supabase by slug
  const page = {
    slug: slug || 'home',
    title: `Page: ${slug || 'home'}`,
    description: `The ${slug || 'home'} page content`,
    isPublished: true,
  };

  return NextResponse.json(page);
}
