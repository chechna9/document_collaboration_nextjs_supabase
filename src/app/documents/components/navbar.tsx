import { Button } from "@/components/ui/button";
import Link from "next/link";
import { logout } from "@/app/(authentication)/actions";
const Navbar = () => {
  

  return (
    <nav className="flex justify-between">
      <Link href="/documents">
        <img
          src="/images/logo_generated_1.svg"
          alt="logo"
          width={50}
          height={50}
        />
      </Link>
      <form action={logout}>
        <Button variant={"destructive"}>
          Logout
        </Button>
      </form>
    </nav>
  );
};

export default Navbar;
