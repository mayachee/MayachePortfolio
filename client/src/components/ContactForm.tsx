import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const ContactForm = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: (data: ContactFormValues) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: t("contact.success.title"),
        description: t("contact.success.message"),
      });
      form.reset();
    },
    onError: (error) => {
      console.error("Contact form submission error:", error);
      toast({
        title: t("contact.error.title"),
        description: t("contact.error.message"),
        variant: "destructive",
      });
    },
    onSettled: () => {
      setIsSubmitting(false);
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    setIsSubmitting(true);
    contactMutation.mutate(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">{t("contact.form.name")}</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  className="bg-white bg-opacity-10 border border-white border-opacity-20 text-white focus:ring-mayache-green"
                  placeholder={t("contact.form.namePlaceholder")}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">{t("contact.form.email")}</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="email"
                  className="bg-white bg-opacity-10 border border-white border-opacity-20 text-white focus:ring-mayache-green"
                  placeholder={t("contact.form.emailPlaceholder")}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">{t("contact.form.message")}</FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  rows={5}
                  className="bg-white bg-opacity-10 border border-white border-opacity-20 text-white focus:ring-mayache-green"
                  placeholder={t("contact.form.messagePlaceholder")}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="w-full bg-mayache-green text-mayache-dark font-poppins font-bold hover:bg-opacity-90"
          disabled={isSubmitting}
        >
          {isSubmitting ? t("contact.form.sending") : t("contact.form.submit")}
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
