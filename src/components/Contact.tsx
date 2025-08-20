import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, Send, Linkedin, Twitter, Facebook } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Contact Form Submission from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Message: ${formData.message}`);
    
    window.open(`mailto:contactsupport@theideagen.com?subject=${subject}&body=${body}`, '_self');
    
    toast({
      title: "Redirecting to Email!",
      description: "Your default email client will open with the message pre-filled.",
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get in <span className="text-primary">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your educational or business needs? Let's start a conversation 
            about how we can help you achieve your goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 animate-slide-in-left">
            <Card>
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input 
                        id="name" 
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name" 
                        required 
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com" 
                        required 
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX" 
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your requirements or questions..." 
                      rows={5}
                      required 
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-primary text-white hover:opacity-90"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6 animate-slide-in-right">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <div>
                      <div className="font-medium">Email</div>
                      <div className="text-sm text-muted-foreground">contactsupport@theideagen.com</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <div>
                      <div className="font-medium">Location</div>
                      <div className="text-sm text-muted-foreground">Tirupati Maruthi Nagar, Andhra Pradesh, India</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://www.linkedin.com/company/the-idea-gen-technologies/posts/?feedView=all" 
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" size="icon" className="hover:bg-primary hover:text-white">
                      <Linkedin className="w-4 h-4" />
                    </Button>
                  </a>
                  <Button variant="outline" size="icon" className="hover:bg-primary hover:text-white">
                    <Twitter className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="hover:bg-primary hover:text-white">
                    <Facebook className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;