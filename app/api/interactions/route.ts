import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { user_id, page_id, action, metadata } = await request.json();
  
  // In a real implementation, this would insert into Supabase
  const interaction = {
    user_id,
    page_id,
    action,
    metadata,
    created_at: new Date().toISOString(),
  };
  
  return NextResponse.json({
    success: true,
    interaction,
  }, { status: 201 });
}
