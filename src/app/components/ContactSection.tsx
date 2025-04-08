"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "sonner";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, Send, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ContactFormInputs {
  name: string;
  email: string;
  message: string;
  honeypot?: string; // Anti-spam field
}

const ContactSection = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormInputs>();

  const sendEmail = async (params: ContactFormInputs) => {
    if (params.honeypot) {
      return toast.error("Bot detection triggered");
    }

    try {
      const toastId = toast.loading(
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full animate-pulse bg-primary" />
          Securing your message...
        </div>
      );

      await emailjs.send(
        process.env.NEXT_PUBLIC_SERVICE_ID!,
        process.env.NEXT_PUBLIC_TEMPLATE_ID!,
        {
          from_name: params.name,
          reply_to: params.email,
          message: params.message,
        },
        { publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY! }
      );

      toast.success(
        <div className="flex items-center gap-2">
          <Check className="w-4 h-4 text-green-400" />
          Message encrypted & delivered
        </div>,
        { id: toastId }
      );
      reset();
    } catch (error) {
      toast.error(
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          Secure channel failed - Please try alternate route
        </div>
      );
    }
  };

  const onSubmit: SubmitHandler<ContactFormInputs> = (data) => sendEmail(data);

  return (
    <section 
      id="contact" 
      className="min-h-screen relative py-20 px-4 bg-gradient-to-b from-[#0F172A] to-[#1E293B]"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Secure Channel
          </h2>
          <p className="text-gray-400">Let's build something extraordinary</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Channels */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-300">Email</h3>
                  <a
                    href="mailto:aasamsivasankarreddynani143@gmail.com"
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    aasamsivasankarreddynani143@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-300">Voice</h3>
                  <a
                    href="tel:+918688660794"
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    +91 868 866 0794
                  </a>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Button
                variant="outline"
                className="gap-2 justify-start h-14"
                asChild
              >
                <a
                  href="https://linkedin.com/in/sivasankarra"
                  target="_blank"
                  rel="noopener"
                >
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </a>
              </Button>
              <Button
                variant="outline"
                className="gap-2 justify-start h-14"
                asChild
              >
                <a
                  href="https://github.com/chiillbro"
                  target="_blank"
                  rel="noopener"
                >
                  <Github className="w-5 h-5" />
                  GitHub
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Encrypted Form */}
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            onSubmit={handleSubmit(onSubmit)}
            className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm"
          >
            <input
              type="hidden"
              {...register("honeypot")}
              className="hidden"
            />

            <div className="space-y-6">
              <div>
                <label className="text-sm font-medium text-gray-300 mb-2 block">
                  Full Name
                </label>
                <input
                  {...register("name", {
                    required: "Identity verification required",
                    minLength: { value: 3, message: "Minimum 3 characters" },
                  })}
                  className="w-full p-3 rounded-lg bg-gray-900 border border-white/10 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all"
                />
                {errors.name && (
                  <span className="text-sm text-red-400 mt-1">
                    {errors.name.message}
                  </span>
                )}
              </div>

              <div>
                <label className="text-sm font-medium text-gray-300 mb-2 block">
                  Secure Email
                </label>
                <input
                  type="email"
                  {...register("email", { 
                    required: "Encryption channel required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid secure address",
                    },
                  })}
                  className="w-full p-3 rounded-lg bg-gray-900 border border-white/10 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all"
                />
                {errors.email && (
                  <span className="text-sm text-red-400 mt-1">
                    {errors.email.message}
                  </span>
                )}
              </div>

              <div>
                <label className="text-sm font-medium text-gray-300 mb-2 block">
                  Message
                </label>
                <textarea
                  {...register("message", {
                    required: "Payload required",
                    minLength: { value: 10, message: "Minimum 10 characters" },
                    maxLength: { 
                      value: 500, 
                      message: "Maximum 500 characters" 
                    },
                  })}
                  className="w-full p-3 rounded-lg bg-gray-900 border border-white/10 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all h-32"
                />
                {errors.message && (
                  <span className="text-sm text-red-400 mt-1">
                    {errors.message.message}
                  </span>
                )}
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full gap-2 hover:shadow-lg hover:shadow-primary/10 transition-all"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-transparent border-t-current rounded-full animate-spin" />
                    Encrypting...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Secure Message
                  </>
                )}
              </Button>
            </div>
          </motion.form>
        </div>
      </div>
      <Toaster richColors theme="dark" />
    </section>
  );
};

export default ContactSection;