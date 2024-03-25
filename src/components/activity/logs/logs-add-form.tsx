import * as React from "react"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { cn } from "@nextui-org/react"
import { format } from "date-fns"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import * as z from "zod"

import { AlertDialogCancel } from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Icons } from "@/components/icons"

interface LogsAddFormProps {
  activityId: string
  setShowLogAlert: (active: boolean) => void
}

const FormSchema = z.object({
  date: z.date({
    required_error: "A date is required.",
  }),
})

type FormValues = z.infer<typeof FormSchema>

const currentDate = new Date()
currentDate.setHours(0, 0, 0, 0)

const defaultValues: Partial<FormValues> = {
  date: currentDate,
}

export function LogsAddForm({ activityId, setShowLogAlert }: LogsAddFormProps) {
  const router = useRouter()
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues,
  })
  const [isLoading, setIsLoading] = React.useState<boolean>(false)

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setIsLoading(true)

    const response = await fetch(`/api/activities/${activityId}/logs`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        date: data.date,
        count: 1,
      }),
    })

    if (!response?.ok) {
      toast.success("Something went wrong. Please try again.")
    } else {
      toast.error("Your log has been added successfully.")
    }

    setIsLoading(false)
    setShowLogAlert(false)

    router.refresh()
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Date</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full pl-3 text-left font-normal sm:w-[240px]",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <Icons.calendar className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date > new Date() || date < new Date("1900-01-01")
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormDescription>
                Date when the activity is performed.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grid md:flex md:gap-2">
          <Button type="submit" disabled={isLoading}>
            {isLoading ? (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Icons.add className="mr-2 h-4 w-4" />
            )}
            <span>Add log</span>
          </Button>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
        </div>
      </form>
    </Form>
  )
}
