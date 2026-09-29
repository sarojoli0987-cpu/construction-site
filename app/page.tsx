import { Button } from "@/components/ui/button";
import { HardHat } from "@phosphor-icons/react/dist/ssr";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center gap-4">
      <HardHat size={48} weight="fill" />
      <Button>It works</Button>
    </main>
  );
}