"use client";
import Modal from "@/components/Modal/Modal";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { fetchNoteById } from "@/lib/api";
import css from "./NotePreview.module.css";

export default function NotePreview({ params }: { params: { id: string } }) {
  const router = useRouter();
  const { data, isLoading } = useQuery({
    queryKey: ["note", params.id],
    queryFn: () => fetchNoteById(params.id),
  });

  if (isLoading) return <p>Loading...</p>;

  return (
    <Modal onClose={() => router.back()}>
      <div className={css.preview}>
        <h2>{data?.title}</h2>
        <p>{data?.content}</p>
        <span>{data?.tag}</span>
      </div>
    </Modal>
  );
}
