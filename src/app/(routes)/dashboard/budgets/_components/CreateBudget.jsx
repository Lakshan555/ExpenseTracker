import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import EmojiPicker from "emoji-picker-react";

function CreateBudget() {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <div className="p-10 bg-custom-orange rounded-md items-center flex flex-col border-4 border-dotted cursor-pointer hover:shadow-lg ">
            <h2 className="text-3xl">+</h2>
            <h2>Create New Budget</h2>
          </div>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create New Budget</DialogTitle>
            <DialogDescription>
              <div>
                <EmojiPicker />
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default CreateBudget;
