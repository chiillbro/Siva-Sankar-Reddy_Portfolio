/* eslint-disable react/no-unescaped-entities, @typescript-eslint/no-unused-vars */

// "use client";

// import { useForm, SubmitHandler } from "react-hook-form";
// import emailjs from "@emailjs/browser";
// import { Toaster, toast } from "sonner";
// import { motion } from "framer-motion";
// import { Mail, Phone, Linkedin, Github, Send, Check } from "lucide-react";
// import { Button } from "@/components/ui/button";

// interface ContactFormInputs {
//   name: string;
//   email: string;
//   message: string;
//   honeypot?: string; // Anti-spam field
// }

// const ContactSection = () => {
//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors, isSubmitting },
//   } = useForm<ContactFormInputs>();

//   const sendEmail = async (params: ContactFormInputs) => {
//     if (params.honeypot) {
//       return toast.error("Bot detection triggered");
//     }

//     try {
//       const toastId = toast.loading(
//         <div className="flex items-center gap-2">
//           <div className="w-3 h-3 rounded-full animate-pulse bg-primary" />
//           Securing your message...
//         </div>
//       );

//       await emailjs.send(
//         process.env.NEXT_PUBLIC_SERVICE_ID!,
//         process.env.NEXT_PUBLIC_TEMPLATE_ID!,
//         {
//           from_name: params.name,
//           reply_to: params.email,
//           message: params.message,
//         },
//         { publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY! }
//       );

//       toast.success(
//         <div className="flex items-center gap-2">
//           <Check className="w-4 h-4 text-green-400" />
//           Message encrypted & delivered
//         </div>,
//         { id: toastId }
//       );
//       reset();
//     } catch (error) {
//       toast.error(
//         <div className="flex items-center gap-2">
//           <div className="w-3 h-3 rounded-full bg-red-500" />
//           Secure channel failed - Please try alternate route
//         </div>
//       );
//     }
//   };

//   const onSubmit: SubmitHandler<ContactFormInputs> = (data) => sendEmail(data);

//   return (
//     <section 
//       id="contact" 
//       className="min-h-screen py-20 px-4 sm:px-6 bg-gradient-to-b from-[#0F172A] to-[#1E293B]"
//     >
//       <div className="max-w-6xl mx-auto w-full overflow-x-hidden">
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           className="mb-20 text-center"
//         >
//           <h2 className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
//             Secure Channel
//           </h2>
//           <p className="text-gray-400">Let's build something extraordinary</p>
//         </motion.div>

//         <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-start">
//           {/* Contact Channels */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             className="space-y-6 w-full max-w-[calc(100vw-2rem)]"
//           >
//             <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
//               <div className="flex items-center gap-4 mb-4">
//                 <div className="p-3 rounded-lg bg-primary/10">
//                   <Mail className="w-6 h-6 text-primary" />
//                 </div>
//                 <div className="truncate">
//                   <h3 className="text-lg font-semibold text-gray-300">Email</h3>
//                   <a
//                     href="mailto:aasamsivasankarreddynani143@gmail.com"
//                     className="text-gray-400 hover:text-primary transition-colors"
//                   >
//                     aasamsivasankarreddynani143@gmail.com
//                   </a>
//                 </div>
//               </div>
//             </div>

//             <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
//               <div className="flex items-center gap-4 mb-4">
//                 <div className="p-3 rounded-lg bg-primary/10">
//                   <Phone className="w-6 h-6 text-primary" />
//                 </div>
//                 <div>
//                   <h3 className="text-lg font-semibold text-gray-300">Voice</h3>
//                   <a
//                     href="tel:+918688660794"
//                     className="text-gray-400 hover:text-primary transition-colors"
//                   >
//                     +91 868 866 0794
//                   </a>
//                 </div>
//               </div>
//             </div>

//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//               <Button
//                 variant="outline"
//                 className="gap-2 justify-start h-14"
//                 asChild
//               >
//                 <a
//                   href="https://linkedin.com/in/sivasankarra"
//                   target="_blank"
//                   rel="noopener"
//                 >
//                   <Linkedin className="w-5 h-5" />
//                   LinkedIn
//                 </a>
//               </Button>
//               <Button
//                 variant="outline"
//                 className="gap-2 justify-start h-14"
//                 asChild
//               >
//                 <a
//                   href="https://github.com/chiillbro"
//                   target="_blank"
//                   rel="noopener"
//                 >
//                   <Github className="w-5 h-5" />
//                   GitHub
//                 </a>
//               </Button>
//             </div>
//           </motion.div>

//           {/* Encrypted Form */}
//           <motion.form
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             onSubmit={handleSubmit(onSubmit)}
//             className="p-4 sm:p-6 md:p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm"
//           >
//             <input
//               type="hidden"
//               {...register("honeypot")}
//               className="hidden"
//             />

//             <div className="space-y-6 w-full">
//               <div className="max-w-[calc(100vw-2rem)] w-full">
//                 <label className="text-sm font-medium text-gray-300 mb-2 block">
//                   Full Name
//                 </label>
//                 <input
//                   {...register("name", {
//                     required: "Identity verification required",
//                     minLength: { value: 3, message: "Minimum 3 characters" },
//                   })}
//                   className="w-full p-3 rounded-lg bg-gray-900 border border-white/10 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all max-w-full"
//                 />
//                 {errors.name && (
//                   <span className="text-sm text-red-400 mt-1">
//                     {errors.name.message}
//                   </span>
//                 )}
//               </div>

//               <div>
//                 <label className="text-sm font-medium text-gray-300 mb-2 block">
//                   Secure Email
//                 </label>
//                 <input
//                   type="email"
//                   {...register("email", { 
//                     required: "Encryption channel required",
//                     pattern: {
//                       value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
//                       message: "Invalid secure address",
//                     },
//                   })}
//                   className="w-full p-3 rounded-lg bg-gray-900 border border-white/10 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all"
//                 />
//                 {errors.email && (
//                   <span className="text-sm text-red-400 mt-1">
//                     {errors.email.message}
//                   </span>
//                 )}
//               </div>

//               <div>
//                 <label className="text-sm font-medium text-gray-300 mb-2 block">
//                   Message
//                 </label>
//                 <textarea
//                   {...register("message", {
//                     required: "Payload required",
//                     minLength: { value: 10, message: "Minimum 10 characters" },
//                     maxLength: { 
//                       value: 500, 
//                       message: "Maximum 500 characters" 
//                     },
//                   })}
//                   className="w-full p-3 rounded-lg bg-gray-900 border border-white/10 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all h-32"
//                 />
//                 {errors.message && (
//                   <span className="text-sm text-red-400 mt-1">
//                     {errors.message.message}
//                   </span>
//                 )}
//               </div>

//               <Button
//                 type="submit"
//                 disabled={isSubmitting}
//                 className="w-full max-w-full gap-2 hover:shadow-lg hover:shadow-primary/10 transition-all truncate"
//               >
//                 {isSubmitting ? (
//                   <>
//                     <div className="w-4 h-4 border-2 border-transparent border-t-current rounded-full animate-spin" />
//                     Encrypting...
//                   </>
//                 ) : (
//                   <>
//                     <Send className="w-5 h-5" />
//                     Send Secure Message
//                   </>
//                 )}
//               </Button>
//             </div>
//           </motion.form>
//         </div>
//       </div>
//       <Toaster richColors theme="dark" />
//     </section>
//   );
// };

// export default ContactSection;











// ************************************* Version 2 *********************************************** //











// app/components/ContactSection.tsx
/* eslint-disable react/no-unescaped-entities */
"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "sonner";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, Send, Loader2, Check, XCircle } from "lucide-react"; // Added icons
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"; // Use shadcn Input
import { Textarea } from "@/components/ui/textarea"; // Use shadcn Textarea
import { Label } from "@/components/ui/label"; // Use shadcn Label
// import Link from 'next/link'; // For social links

interface ContactFormInputs {
  name: string;
  email: string;
  message: string;
  honeypot?: string; // Anti-spam field
}

// Animation variants
const sectionVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { delay: 0.2, duration: 0.6 } } };
const itemVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 90 } } };

const ContactSection = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormInputs>();

  const sendEmail = async (params: ContactFormInputs) => {
    // Basic honeypot check
    if (params.honeypot) {
      console.warn("Honeypot triggered!");
      toast.error("Could not send message (Bot detected).");
      return; // Silently fail for bots
    }

    // Input validation (react-hook-form handles most)
    const toastId = toast.loading("Sending message...", {
      description: "Establishing secure connection...",
    });

    try {
      // Ensure ENV variables are loaded correctly
      const serviceID = process.env.NEXT_PUBLIC_SERVICE_ID!;
      const templateID = process.env.NEXT_PUBLIC_TEMPLATE_ID!;
      const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY!;

      if (!serviceID || !templateID || !publicKey) {
          throw new Error("EmailJS configuration is missing.");
      }

      await emailjs.send(
        serviceID,
        templateID,
        { from_name: params.name, reply_to: params.email, message: params.message },
        { publicKey: publicKey }
      );

      toast.success("Message Sent!", {
        id: toastId,
        description: "Thanks for reaching out, I'll get back to you soon.",
        icon: <Check className="w-4 h-4" />,
      });
      reset(); // Clear form on success

    } catch (error: any) {
       console.error("EmailJS Send Error:", error);
       toast.error("Send Failed", {
         id: toastId,
         description: error?.text || "Could not send message. Please try email.",
         icon: <XCircle className="w-4 h-4" />,
       });
    }
  };

  const onSubmit: SubmitHandler<ContactFormInputs> = (data) => sendEmail(data);

  return (
    <section
      id="contact"
      className="w-full py-16 md:py-24 px-4 lg:px-8 bg-gradient-to-b from-background to-muted/10" // Match skills section background
    >
      <motion.div
        className="max-w-4xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        {/* Section Title */}
        <motion.div variants={itemVariants} className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Let's Connect</h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                Interested in collaborating or have a question? Reach out!
            </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">

          {/* Left: Contact Form */}
          <motion.form
            variants={itemVariants}
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-5 p-6 md:p-8 rounded-lg border bg-card shadow-sm" // Use Card styling
          >
            {/* Honeypot field */}
            <input type="hidden" {...register("honeypot")} className="hidden" />

            {/* Name Field */}
            <div className="space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                placeholder="Your Name"
                {...register("name", { required: "Name is required" })}
                aria-invalid={errors.name ? "true" : "false"}
                disabled={isSubmitting}
              />
              {errors.name && <p className="text-xs text-destructive">{errors.name.message}</p>}
            </div>

            {/* Email Field */}
            <div className="space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                {...register("email", {
                  required: "Email is required",
                  pattern: { value: /^\S+@\S+\.\S+$/, message: "Invalid email address" },
                })}
                aria-invalid={errors.email ? "true" : "false"}
                disabled={isSubmitting}
              />
              {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
            </div>

            {/* Message Field */}
            <div className="space-y-1.5">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Your message..."
                rows={5}
                {...register("message", {
                  required: "Message is required",
                  minLength: { value: 10, message: "Message too short (min 10 chars)" },
                })}
                aria-invalid={errors.message ? "true" : "false"}
                disabled={isSubmitting}
              />
              {errors.message && <p className="text-xs text-destructive">{errors.message.message}</p>}
            </div>

            {/* Submit Button */}
            <Button type="submit" disabled={isSubmitting} className="w-full gap-2">
              {isSubmitting ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Send className="h-4 w-4" />
              )}
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </motion.form>

          {/* Right: Contact Info & Links */}
          <motion.div variants={itemVariants} className="space-y-6">
             <h3 className="text-xl font-semibold text-foreground">Other Ways to Reach Me</h3>
             <div className="space-y-4">
                 {/* Email */}
                 <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                        <h4 className="font-medium text-foreground">Email</h4>
                        <a href="mailto:aasamsivasankarreddynani143@gmail.com" className="text-sm text-muted-foreground hover:text-primary transition-colors break-all">
                            aasamsivasankarreddynani143@gmail.com
                        </a>
                    </div>
                 </div>
                 {/* Phone */}
                 <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                     <div>
                        <h4 className="font-medium text-foreground">Phone</h4>
                        <a href="tel:+918688660794" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                            +91 868 866 0794
                        </a>
                    </div>
                 </div>
             </div>

             <h3 className="text-xl font-semibold text-foreground pt-4">Find Me Online</h3>
             <div className="flex flex-col sm:flex-row gap-3">
                <Button variant="outline" className="gap-2 justify-center flex-1" asChild>
                    <a href="https://linkedin.com/in/sivasankarra" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="w-4 h-4" /> LinkedIn
                    </a>
                </Button>
                <Button variant="outline" className="gap-2 justify-center flex-1" asChild>
                    <a href="https://github.com/chiillbro" target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" /> GitHub
                    </a>
                </Button>
             </div>
          </motion.div>

        </div>
      </motion.div>
       {/* Ensure Toaster is included, usually in RootLayout or Providers */}
       <Toaster richColors theme="dark" position="bottom-right" />
    </section>
  );
};

export default ContactSection;