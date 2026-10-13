import { NextResponse } from "next/server";

export async function GET(request: Request) {
  // In a real implementation, this would get the user from Supabase Auth
  const user = {
    id: "user_123",
    email: "user@example.com",
    full_name: "John Doe",
    avatar_url: "/avatar.png",
    created_at: new Date().toISOString(),
  };
  
  return NextResponse.json({ user });
}

export async function PATCH(request: Request) {
  const { full_name, avatar_url } = await request.json();
  
  // In a real implementation, this would update the user in Supabase Auth
  const updatedUser = {
    id: "user_123",
    email: "user@example.com",
    full_name: full_name || "user_123",
    avatar_url: avatar_url || "/avatar.png",
    updated_at: new Date().toISOString(),
  };
  
  return NextResponse.json({ user: updatedUser });
}
