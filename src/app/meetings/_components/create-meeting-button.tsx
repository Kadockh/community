"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { CreateMeetingDialog } from "./create-meeting-dialog";

export function CreateMeetingButton() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setIsDialogOpen(true)}
        className="bg-rose-600 hover:bg-rose-700 text-white"
      >
        <Plus className="h-4 w-4 mr-2" />
        Criar Reunião
      </Button>

      <CreateMeetingDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
      />
    </>
  );
}
