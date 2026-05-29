"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import {
  MdMail,
  MdPlace,
  MdPhone,
  MdClose,
  MdCloudUpload,
} from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";
import { sendContactEmail } from "@/app/actions/sendEmail";

export default function Contact() {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
      setSelectedFiles((prevFiles) => [...prevFiles, ...filesArray]);
    }
  };

  const removeFile = (indexToRemove: number) => {
    setSelectedFiles((prevFiles) =>
      prevFiles.filter((_, idx) => idx !== indexToRemove),
    );
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Clean out the default single file target and populate the array safely
    formData.delete("files");
    selectedFiles.forEach((file) => {
      formData.append("files", file);
    });

    const result = await sendContactEmail(formData);

    setIsSubmitting(false);
    if (result.success) {
      setStatusMessage({
        type: "success",
        text: "Your message has been sent successfully!",
      });
      setSelectedFiles([]);
      form.reset();
    } else {
      setStatusMessage({
        type: "error",
        text: result.error || "Something went wrong. Please try again.",
      });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 py-20 px-6">
      <div className="mx-auto max-w-7xl bg-white p-8 md:p-14 rounded-3xl shadow-sm border border-slate-200">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-emerald-700">
            Contact Us
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-emerald-900">
            Have questions or need assistance?
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Reach out to us for a fast response.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3 lg:items-start">
          {/* Column 1: Direct Touchpoints */}
          <div className="space-y-8 bg-slate-50 p-8 rounded-2xl border border-slate-100">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Get in Touch
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-emerald-100 p-3 rounded-full text-emerald-700 shrink-0">
                    <MdPhone size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                      Phone
                    </p>
                    <a
                      href="tel:+35312554422"
                      className="text-xl font-bold text-emerald-700 hover:text-emerald-800 transition"
                    >
                      01 255 4422
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-emerald-100 p-3 rounded-full text-emerald-700 shrink-0">
                    <MdPlace size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                      Address
                    </p>
                    <p className="text-base font-medium text-slate-900 leading-relaxed">
                      Bank House, 331 S Circular Rd,
                      <br />
                      Saint James, Dublin 8, D08 FH3E, Ireland
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-200">
              <p className="text-sm text-slate-500">
                Operating standard business hours across the greater Dublin
                area.
              </p>
            </div>
          </div>

          {/* Column 2: Interactive Contact Form */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Send a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-slate-700 mb-1"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white transition text-sm"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-slate-700 mb-1"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white transition text-sm"
                />
              </div>

              {/* Media Upload Component */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">
                  Project Photos / Documents
                </label>

                <div className="relative group border-2 border-dashed border-slate-200 hover:border-emerald-600 rounded-xl transition bg-slate-50 p-4 text-center cursor-pointer">
                  <input
                    type="file"
                    id="file-upload"
                    multiple
                    accept="image/*,application/pdf"
                    onChange={handleFileChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                  />
                  <div className="flex flex-col items-center justify-center space-y-1 text-slate-500">
                    <MdCloudUpload
                      size={28}
                      className="text-slate-400 group-hover:text-emerald-700 transition"
                    />
                    <p className="text-sm font-medium">
                      <span className="text-emerald-700">Click to upload</span>{" "}
                      or drag and drop
                    </p>
                    <p className="text-xs text-slate-400">
                      Select multiple photos or files
                    </p>
                  </div>
                </div>

                {selectedFiles.length > 0 && (
                  <div className="mt-4 max-h-48 overflow-y-auto border border-slate-100 rounded-xl p-2 bg-slate-50 space-y-1.5 custom-scrollbar">
                    {selectedFiles.map((file, idx) => {
                      const isImage = file.type.startsWith("image/");
                      return (
                        <div
                          key={`${file.name}-${idx}`}
                          className="flex items-center justify-between bg-white px-3 py-2 rounded-lg border border-slate-200 text-xs shadow-2xs"
                        >
                          <div className="flex items-center gap-3 min-w-0">
                            {isImage ? (
                              <img
                                src={URL.createObjectURL(file)}
                                alt="Thumbnail"
                                className="w-8 h-8 object-cover rounded-md border border-slate-100 shrink-0"
                                onLoad={(e) =>
                                  URL.revokeObjectURL(
                                    (e.target as HTMLImageElement).src,
                                  )
                                }
                              />
                            ) : (
                              <div className="w-8 h-8 bg-emerald-50 text-emerald-700 rounded-md flex items-center justify-center font-bold text-[10px] uppercase shrink-0">
                                PDF
                              </div>
                            )}
                            <div className="truncate pr-2">
                              <p className="font-semibold text-slate-700 truncate">
                                {file.name}
                              </p>
                              <p className="text-slate-400 text-[10px]">
                                {(file.size / 1024 / 1024).toFixed(2)} MB
                              </p>
                            </div>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeFile(idx)}
                            className="p-1 text-slate-400 hover:text-red-500 rounded-md hover:bg-slate-50 transition shrink-0"
                          >
                            <MdClose size={16} />
                          </button>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-slate-700 mb-1"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  required
                  placeholder="Tell us what you need help with..."
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white transition text-sm resize-none"
                ></textarea>
              </div>

              {/* Status Alert Banner */}
              {statusMessage && (
                <div
                  className={`p-4 rounded-xl text-sm font-medium ${
                    statusMessage.type === "success"
                      ? "bg-emerald-50 text-emerald-800 border border-emerald-100"
                      : "bg-red-50 text-red-800 border border-red-100"
                  }`}
                >
                  {statusMessage.text}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-3 px-6 rounded-xl transition shadow-md hover:shadow-lg text-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting
                  ? "Sending..."
                  : `Send Message (${selectedFiles.length} ${
                      selectedFiles.length === 1 ? "file" : "files"
                    })`}
              </button>
            </form>
          </div>

          {/* Column 3: EPM Banner */}
          <div className="space-y-8 bg-emerald-800 p-8 rounded-2xl text-white shadow-lg">
            <div>
              <h2 className="text-2xl font-bold mb-4">Follow Us</h2>
              <p className="text-emerald-100 leading-relaxed mb-8">
                Stay updated with our latest news, recent projects, and facility
                maintenance tips across Dublin.
              </p>
              <a
                href="https://www.instagram.com/easypropertymaintenance/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white text-emerald-900 px-6 py-3 rounded-full font-bold hover:bg-emerald-50 transition"
              >
                <AiFillInstagram size={24} className="text-emerald-700" />
                Instagram
              </a>
            </div>

            <div className="pt-8 border-t border-emerald-700">
              <h3 className="text-lg font-bold mb-2">Always Available</h3>
              <p className="text-emerald-100 text-sm leading-relaxed">
                We are proud to be part of the EPM Group, providing
                comprehensive reactive and planned maintenance to meet all your
                facility needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
