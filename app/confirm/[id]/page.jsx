"use client";

import { useParams } from "next/navigation";
import doctors from "../../data/doctors";
import ConfirmApp from "../../components/ConfirmApp";

export default function ConfirmPage() {

  const params = useParams();
  const doctorId = Number(params.id);

  const doctor = doctors.find((doc) => doc.id === doctorId);

  return <ConfirmApp doctor={doctor} />;
}