import { Suspense } from "react"; 
import { AuthErrorContent } from "@/components/auth-error";

export default function AuthErrorPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AuthErrorContent />
    </Suspense>
  );
}