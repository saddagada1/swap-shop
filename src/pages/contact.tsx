import { zodResolver } from "@hookform/resolvers/zod";
import type { NextPage } from "next";
import Head from "next/head";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Button, ButtonLoading } from "~/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";
import VisitUs from "~/components/visitUs";

const formSchema = z.object({
  name: z.string().min(1, { message: "Required" }),
  email: z.string().email({ message: "Invalid Email" }),
  message: z.string().min(1, { message: "Required" }),
});

const ContactForm: React.FC = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    toast.success("Message Received");
  };

  return (
    <Form {...form}>
      <form
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full space-y-8"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <div className="flex justify-between">
                <FormLabel>Name</FormLabel>
                <FormMessage />
              </div>
              <FormControl>
                <Input placeholder="Your Name" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <div className="flex justify-between">
                <FormLabel>Email</FormLabel>
                <FormMessage />
              </div>
              <FormControl>
                <Input placeholder="Your Email" {...field} type="email" />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <div className="flex justify-between">
                <FormLabel>Message</FormLabel>
                <FormMessage />
              </div>
              <FormControl>
                <Textarea placeholder="Type your message here" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        {form.formState.isSubmitting ? (
          <ButtonLoading className="w-full uppercase" />
        ) : (
          <Button className="w-full uppercase" type="submit">
            Send
          </Button>
        )}
      </form>
    </Form>
  );
};

const Contact: NextPage = ({}) => {
  return (
    <>
      <Head>
        <title>Swap Shop - Contact Us</title>
      </Head>
      <section className="section">
        <VisitUs />
      </section>
      <section className="section">
        <h1 className="section-title">Get In Touch</h1>
        <div className="flex flex-col gap-8 lg:flex-row">
          <p className="w-full">
            Give us a shout and we'll get back to you as soon as we can!
          </p>
          <ContactForm />
        </div>
      </section>
    </>
  );
};

export default Contact;
