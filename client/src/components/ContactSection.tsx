import { useState } from "react";
import { Mail, Linkedin, Github, Send, MessageSquare } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-card overflow-hidden">
      {/* Background image for Let's Connect */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/68cc656723637e665f45b15e_Row%20(2)%20(1).jpg')" }}
        aria-hidden="true"
      />
  <div className="absolute inset-0 bg-black/30" aria-hidden="true" />
      <div className="absolute top-10 left-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-block">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-1 bg-accent rounded-full" />
              <MessageSquare className="w-8 h-8 text-accent" />
              <div className="w-12 h-1 bg-accent rounded-full" />
            </div>
            <h2 className="text-4xl md:text-6xl font-bold font-heading mb-6" data-testid="text-contact-title">
              Let's <span className="text-primary">Connect</span>
            </h2>
            <div className="relative">
              <div className="h-1.5 w-56 bg-primary/20 rounded-full mx-auto">
                <div className="h-full w-4/5 bg-gradient-to-r from-accent to-primary rounded-full transition-all duration-700 ease-out ml-auto" />
              </div>
              <svg className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-32 h-8" viewBox="0 0 120 30">
                <path d="M 15 15 Q 60 5, 105 15" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary/40" />
              </svg>
            </div>
          </div>
          <p className="text-lg md:text-xl text-muted-foreground mt-8 max-w-2xl mx-auto" data-testid="text-contact-subtitle">
            Have a project in mind or want to discuss data engineering? I'd love to hear from you!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <Card className="p-8 hover-elevate border-2 bg-gradient-to-br from-card to-primary/5">
              <h3 className="text-xl font-bold mb-6 font-heading">Send Me a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="h-12"
                    data-testid="input-name"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="h-12"
                    data-testid="input-email"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={6}
                    data-testid="input-message"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full h-12 hover-elevate text-base"
                  disabled={isSubmitting}
                  data-testid="button-send"
                >
                  <Send className="w-5 h-5 mr-2" />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Card>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-6 font-heading" data-testid="text-connect-title">
                Connect With Me
              </h3>
              <div className="space-y-4">
                <a
                  href="https://mailto:Parmardev379@gmail.com"
                  className="group flex items-center gap-5 p-5 rounded-xl hover-elevate active-elevate-2 bg-background border-2 border-border transition-all"
                  data-testid="link-email"
                >
                  <div className="p-4 bg-gradient-to-br from-primary to-primary/70 rounded-xl shadow-lg group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-lg">Email</div>
                    <div className="text-sm text-muted-foreground">Contact me</div>
                  </div>
                </a>

                <a
                  href="https://linkedin.com/in/dev-parmar-427b09267/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-5 p-5 rounded-xl hover-elevate active-elevate-2 bg-background border-2 border-border transition-all"
                  data-testid="link-linkedin"
                >
                  <div className="p-4 bg-gradient-to-br from-chart-1 to-chart-1/70 rounded-xl shadow-lg group-hover:scale-110 transition-transform">
                    <Linkedin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-lg">LinkedIn</div>
                    <div className="text-sm text-muted-foreground">Connect professionally</div>
                  </div>
                </a>

                <a
                  href="https://github.com/Dev-Parmar17"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-5 p-5 rounded-xl hover-elevate active-elevate-2 bg-background border-2 border-border transition-all"
                  data-testid="link-github"
                >
                  <div className="p-4 bg-gradient-to-br from-chart-2 to-chart-2/70 rounded-xl shadow-lg group-hover:scale-110 transition-transform">
                    <img src="https://cdn.simpleicons.org/github/000" alt="GitHub" className="w-6 h-6" width={24} height={24} />
                  </div>
                  <div>
                    <div className="font-semibold text-lg">GitHub</div>
                    <div className="text-sm text-muted-foreground">Check out my profile & code</div>
                  </div>
                </a>
              </div>
            </div>

            <Card className="p-6 md:p-8 bg-gradient-to-br from-primary/10 via-accent/5 to-card border-2 border-primary/20">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/20 rounded-lg shrink-0">
                  <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2" data-testid="text-availability">Currently Available</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed" data-testid="text-availability-description">
                    I'm actively seeking opportunities in data engineering roles where I can contribute to
                    building scalable data solutions and grow my skills alongside talented teams.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
