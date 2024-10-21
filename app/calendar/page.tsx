"use client";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import CalendarForm from "../calendarForm/page";

export default function DatePicker() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="flex flex-col w-full">
      <a id="calendar"></a>
      <h4>Calendar</h4>
      <div className="flex flex-col lg:flex-row gap-10 justify-center">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border"
        />
        <CalendarForm />
      </div>
    </div>
  );
}
