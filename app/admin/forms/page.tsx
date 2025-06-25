import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function FormsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Forms</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Create Form
        </Button>
      </div>
    </div>
  );
} 