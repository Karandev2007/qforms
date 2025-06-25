import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MessageSquare, Plus } from "lucide-react";

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground mt-2">
          Welcome back Karan !!!
        </p>
      </div>

      {/* quick action cards */}
      <div className="max-w-3xl">
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4 md:grid-cols-2">
            <Link href="/admin/forms">
              <Button className="w-full" size="lg">
                <Plus className="mr-2 h-4 w-4" />
                Create New Form
              </Button>
            </Link>
            <Link href="/admin/responses">
              <Button className="w-full" variant="outline" size="lg">
                <MessageSquare className="mr-2 h-4 w-4" />
                View Responses
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 