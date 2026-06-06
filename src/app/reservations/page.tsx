"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { BRANCHES, CAFE_METADATA } from "@/config/cafe";
import { Calendar, Users, Clock, Coffee, MessageSquare, Sparkles } from "lucide-react";

function ReservationPageContent() {
  const searchParams = useSearchParams();

  // Form states
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("2");
  const [selectedBranchId, setSelectedBranchId] = useState(BRANCHES[0].id);
  const [requests, setRequests] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Sync branch selection if passed in query param
  useEffect(() => {
    const branchParam = searchParams.get("branch");
    if (branchParam) {
      const match = BRANCHES.find((b) => b.id === branchParam);
      if (match) setSelectedBranchId(match.id);
    }
  }, [searchParams]);

  const activeBranch = BRANCHES.find((b) => b.id === selectedBranchId) || BRANCHES[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Set submitted state
    setSubmitted(true);
  };

  const getWhatsAppMessage = () => {
    const text = `*TABLE RESERVATION REQUEST - Z HOUSE CAFÉ*\n\n` +
      `- *Branch:* ${activeBranch.name}\n` +
      `- *Guest Name:* ${name}\n` +
      `- *Phone:* ${phone}\n` +
      `- *Date:* ${date}\n` +
      `- *Time:* ${time}\n` +
      `- *Number of Guests:* ${guests}\n` +
      (requests ? `- *Special Request:* ${requests}` : "");

    const whatsappNumber = activeBranch.whatsapp.replace(/\+/g, "");
    return `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(text)}`;
  };

  if (submitted) {
    return (
      <div className="py-20 max-w-lg mx-auto px-4 text-center space-y-6 font-sans animate-fade-in">
        <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto border border-gold/30 text-gold">
          <Sparkles className="w-8 h-8" />
        </div>
        <h1 className="font-serif text-3xl font-bold text-espresso">Reservation Request Received</h1>
        <p className="text-sm text-espresso/70 leading-relaxed font-light">
          Your request has been successfully registered for <strong className="text-espresso">{activeBranch.name}</strong>. Our branch team will review the availability and call you shortly to confirm your booking.
        </p>

        {/* WhatsApp Option */}
        <div className="p-6 bg-off-white border border-gold-light/20 rounded-lg space-y-4 shadow-xs text-left">
          <h3 className="text-sm font-semibold text-espresso flex items-center gap-1.5">
            <MessageSquare className="w-4 h-4 text-green-600" /> Confirm Instantly via WhatsApp
          </h3>
          <p className="text-xs text-espresso/60 leading-normal font-light">
            Skip the call wait times. Click below to forward your reservation details directly to the branch manager on duty for instant scheduling.
          </p>
          <a
            href={getWhatsAppMessage()}
            target="_blank"
            rel="noreferrer"
            className="w-full text-center py-3 bg-green-600 hover:bg-green-700 text-white font-semibold uppercase tracking-wider text-xs rounded-md transition-colors flex items-center justify-center gap-2"
          >
            <MessageSquare className="w-4 h-4 fill-white" /> Confirm on WhatsApp
          </a>
        </div>

        <div className="pt-2">
          <button
            onClick={() => {
              setSubmitted(false);
              setName("");
              setPhone("");
              setDate("");
              setTime("");
              setRequests("");
            }}
            className="text-xs font-semibold uppercase tracking-wider text-espresso/60 hover:text-espresso transition-colors underline underline-offset-4"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 font-sans">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Info Column */}
        <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
          <div className="space-y-2.5">
            <span className="text-xs uppercase tracking-widest text-gold font-bold">Bookings</span>
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-espresso">Reserve a Table</h1>
            <div className="w-12 h-0.5 bg-gold" />
          </div>
          <p className="text-xs md:text-sm text-espresso/70 leading-relaxed font-light">
            Whether it’s a quiet workspace setup with reliable sockets, a project discussion table with teammates, or a warm candlelight setting for an evening date, we’ll reserve the perfect spot for you.
          </p>

          <div className="space-y-4 pt-2">
            <div className="flex gap-3">
              <div className="p-2.5 bg-espresso/5 border border-gold-light/10 rounded-md h-fit text-espresso">
                <Coffee className="w-4 h-4 text-gold" />
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-espresso">No Booking Fees</h4>
                <p className="text-[11px] text-espresso/60 mt-0.5">Reservations are completely free. We only hold tables for 15 minutes past request times.</p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="p-2.5 bg-espresso/5 border border-gold-light/10 rounded-md h-fit text-espresso">
                <Users className="w-4 h-4 text-gold" />
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-espresso">Group & Workspace packages</h4>
                <p className="text-[11px] text-espresso/60 mt-0.5">Hosting a meeting or a workspace meetup? Let us know in the requests to assign plug-accessible tables.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Form Column */}
        <div className="lg:col-span-7 bg-off-white p-6 md:p-8 rounded-lg border border-gold-light/15 shadow-xs">
          <form onSubmit={handleSubmit} className="space-y-5">
            <h2 className="font-serif text-xl font-bold text-espresso border-b border-espresso/5 pb-3">
              Reservation Details
            </h2>

            {/* Branch */}
            <div>
              <label className="block text-xs font-bold text-espresso/60 uppercase tracking-widest mb-1.5">
                Select Branch
              </label>
              <select
                value={selectedBranchId}
                onChange={(e) => setSelectedBranchId(e.target.value)}
                className="w-full text-sm py-2.5 px-3 bg-white border border-gold-light/35 rounded-md focus:outline-none focus:border-gold text-espresso font-semibold"
                required
              >
                {BRANCHES.map((b) => (
                  <option key={b.id} value={b.id}>
                    {b.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Name and Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-espresso/60 uppercase tracking-widest mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter name"
                  className="w-full text-sm py-2.5 px-3 bg-white border border-gold-light/35 rounded-md focus:outline-none focus:border-gold text-espresso"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-espresso/60 uppercase tracking-widest mb-1.5">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. 03001234567"
                  className="w-full text-sm py-2.5 px-3 bg-white border border-gold-light/35 rounded-md focus:outline-none focus:border-gold text-espresso"
                  required
                />
              </div>
            </div>

            {/* Date, Time, and Guests */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-bold text-espresso/60 uppercase tracking-widest mb-1.5">
                  Date
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full text-sm py-2.5 px-3 bg-white border border-gold-light/35 rounded-md focus:outline-none focus:border-gold text-espresso"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-espresso/60 uppercase tracking-widest mb-1.5">
                  Time Slot
                </label>
                <input
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full text-sm py-2.5 px-3 bg-white border border-gold-light/35 rounded-md focus:outline-none focus:border-gold text-espresso"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-espresso/60 uppercase tracking-widest mb-1.5">
                  Guests Count
                </label>
                <select
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="w-full text-sm py-2.5 px-3 bg-white border border-gold-light/35 rounded-md focus:outline-none focus:border-gold text-espresso font-semibold"
                >
                  <option value="1">1 Person</option>
                  <option value="2">2 People</option>
                  <option value="3">3 People</option>
                  <option value="4">4 People</option>
                  <option value="6">6 People</option>
                  <option value="8">8+ People (Group)</option>
                </select>
              </div>
            </div>

            {/* Special Request */}
            <div>
              <label className="block text-xs font-bold text-espresso/60 uppercase tracking-widest mb-1.5">
                Special Requests / Workspace Setup
              </label>
              <textarea
                rows={3}
                value={requests}
                onChange={(e) => setRequests(e.target.value)}
                placeholder="e.g. Quiet corner, socket accessibility, high chair, birthday decoration, silent meeting room"
                className="w-full text-sm py-2.5 px-3 bg-white border border-gold-light/35 rounded-md focus:outline-none focus:border-gold text-espresso resize-none"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-3.5 bg-[#C89245] hover:bg-[#C89245]/90 text-white uppercase font-bold text-xs tracking-wider rounded-[10px] transition-colors shadow-xs cursor-pointer"
            >
              Request Table Reservation
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default function ReservationPage() {
  return (
    <Suspense fallback={
      <div className="py-20 text-center text-espresso/60">
        Loading Reservations...
      </div>
    }>
      <ReservationPageContent />
    </Suspense>
  );
}
