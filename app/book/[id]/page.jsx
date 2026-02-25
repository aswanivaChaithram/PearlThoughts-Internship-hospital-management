"use client";

import { useParams } from "next/navigation";
import doctors from "../../data/doctors";
import BookApp from "../../components/BookApp";

export default function BookPage() {

  const params = useParams();
  const doctorId = Number(params.id);

  const doctor = doctors.find((doc) => doc.id === doctorId);

  return <BookApp doctor={doctor} />;
}