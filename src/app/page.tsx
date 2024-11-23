import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center space-x-10 bg-gray-700">
      <Link href={"/login"}>
        <Button>Login</Button>
      </Link>

      <Link href={"/signup"}>
        <Button variant="outline">Signup</Button>
      </Link>
    </div>
  );
}
