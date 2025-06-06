import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { todoInputSchema } from "../../schemas/TodoInput.scheme";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Loader2, X } from "lucide-react";
import useToastStore from "@/store/toast/toast.store";
import { toast } from "sonner";
import { TodoServices } from "@/api/todo.api";

interface ITodoInputProps {
  setRefresh: React.Dispatch<React.SetStateAction<boolean>>;
}
function TodoInput({ setRefresh }: ITodoInputProps) {
  const { setOpen: setOpenToast } = useToastStore();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof todoInputSchema>>({
    resolver: zodResolver(todoInputSchema),
    defaultValues: {
      task: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof todoInputSchema>) => {
    try {
      setIsLoading(true);
      const { data } = await TodoServices.createTodo({ task: values.task });
      if (data) {
        setRefresh(true);
        setOpenToast(
          "SuccessToast",
          toast.success("Success", {
            className: "!bg-green-400 !border-green-400",
            description: `Create task ${values.task}`,
          })
        );
      }
    } catch (error) {
      console.log({ error });
      setOpenToast(
        "ErrorToast",
        toast.error("Error", {
          className: "!bg-red-400 !border-red-400",
          description: `Duplicate task : ${values.task}`,
        })
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleClear = () => {
    form.setValue("task", "");
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex space-x-3">
          <FormField
            control={form.control}
            name="task"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="relative">
                    <Input
                      placeholder="Add a task"
                      className="w-[500px] pr-7"
                      {...field}
                    />
                    <div className="absolute right-2 top-1/2 -translate-y-1/2">
                      {form.getValues("task").length > 0 && (
                        <X
                          className="cursor-pointer"
                          onClick={handleClear}
                          size={18}
                        />
                      )}
                    </div>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="w-20 cursor-pointer"
            disabled={isLoading}
          >
            {isLoading ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              "Submit"
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
}

export default TodoInput;
