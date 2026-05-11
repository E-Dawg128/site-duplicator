import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const templateParams = {
        subject: `This email is from ${formData.name} email: ${formData.email}`,
        message: `This email is from ${formData.name} \n Contact: ${formData.email} \n Message: ${formData.message}`,
      };
      emailjs
        .send("service_vruqono", "template_c13xhn9", templateParams, "user_O7KSyjF3rQEItHM4zGMUl")
        .then(
          () => {
            toast.success("Message sent!", { description: "We'll get back to you soon." });
            setFormData({ name: "", email: "", message: "" });
          },
          () => {
            toast.error("Error", { description: "Failed to send message. Please try again." });
          }
        );
    } catch {
      toast.error("Error", { description: "Failed to send message. Please try again." });
    }
  };

  return (
    <section id="contact" className="py-20 pt-0 bg-white flex flex-col items-center">
      <div className="container mx-auto px-4 pt-10">
        <h2 className="text-4xl font-bold text-center mb-12">Let's Chat!</h2>
        <div className="max-w-md mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Input
                placeholder="Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
            <div>
              <Input
                type="email"
                placeholder="Email or Phone Number"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>
            <div>
              <Textarea
                placeholder="Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                className="min-h-[150px]"
              />
            </div>
            <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
