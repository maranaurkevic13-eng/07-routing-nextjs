"use client";
import { useQuery } from "@tanstack/react-query";
import { fetchNoteById } from "@/lib/api";
import { Note } from "@/types/note";

export default function NoteModalPage({ params }: { params: { id: string } }) {
  const { data, isLoading } = useQuery<Note>({
    queryKey: ["note", params.id],
    queryFn: () => fetchNoteById(params.id),
  });

  if (isLoading) return <p>Loading...</p>;

  if (!data) return <p>Note not found</p>;

  return (
    <div className="modal">
      <h2>{data.title}</h2>
      <p>{data.content}</p>
      <span>{data.tag}</span>
    </div>
  );
}
