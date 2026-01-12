"use client";

import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Github, PhoneCall } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    setLoading(false);

    alert(data.message);

    if (res.ok) {
      setForm({ name: "", email: "", phone: "", message: "" });
    }
  };

  return (
    <section className="container mx-auto px-4 py-10">
      <div className="text-center mb-14 relative">
        <h3
          className="text-orange-500 font-bold tracking-[0.3em] 
                 lg:text-4xl sm:text-2xl text-xl
                 inline-block relative"
        >
          CONTACT
          <span
            className="absolute left-1/2 -bottom-3 w-16 h-1 
                     bg-orange-500 rounded-full 
                     -translate-x-1/2"
          ></span>
        </h3>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
        {/* FORM */}
        <div>
          <h3 className="text-2xl font-semibold mb-6">Say Hello</h3>

          <Card className="p-6 rounded-2xl shadow-sm">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <Input
                name="name"
                placeholder="Name"
                value={form.name}
                onChange={handleChange}
                required
              />
              <Input
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                required
              />
              <Input
                name="phone"
                placeholder="Phone"
                value={form.phone}
                onChange={handleChange}
              />
              <Textarea
                name="message"
                placeholder="Message"
                value={form.message}
                onChange={handleChange}
                required
              />

              <Button
                type="submit"
                disabled={loading}
                className="w-fit bg-orange-500 hover:bg-orange-600"
              >
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </Card>
        </div>

        {/* INFO */}
        <div>
          <h2 className="text-2xl font-semibold">Contact Info</h2>

          <div className="mt-6 space-y-6">
            <InfoItem
              icon={<Mail size={18} />}
              title="Email"
              text="ankeshprasad2001gmail@gmail.com"
            />
            <InfoItem
              icon={<Phone size={18} />}
              title="Phone"
              text="+91 9105009865"
            />
            <InfoItem
              icon={<MapPin size={18} />}
              title="Address"
              text="Haridwar Uttarakhand, India"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const InfoItem = ({ icon, title, text }) => (
  <div className="flex items-start gap-4">
    <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center">
      {icon}
    </div>
    <div>
      <h4 className="font-medium">{title}</h4>
      <p className="text-sm text-gray-500">{text}</p>
    </div>
  </div>
);

export default Contact;
