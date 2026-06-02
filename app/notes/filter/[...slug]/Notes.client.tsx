"use client";
import { useQuery } from "@tanstack/react-query";
import { fetchNotes } from "@/lib/api";
import { Note } from "@/types/note";

export default function NotesClient({ tag }: { tag: string }) {
  const { data, isLoading } = useQuery({
    queryKey: ["notes", tag],
    queryFn: () =>
      tag === "all" ? fetchNotes(1, 10) : fetchNotes(1, 10, undefined, tag),
  });

  if (isLoading) return <p>Loading...</p>;

  if (!data) return <p>No notes found</p>;

  return (
    <ul>
      {data.notes.map((note: Note) => (
        <li key={note.id}>
          <h2>{note.title}</h2>
          <p>{note.content}</p>
          <span>{note.tag}</span>
        </li>
      ))}
    </ul>
  );
}
