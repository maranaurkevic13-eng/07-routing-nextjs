"use client";
import { useQuery } from "@tanstack/react-query";
import { fetchNotes } from "@/lib/api";
import { Note } from "@/types/note";
import css from "../../NotesPage.module.css";

export default function FilteredNotesPage({ params }: { params: { slug: string[] } }) {
  const currentTag = params.slug?.[0];

  const { data, isLoading } = useQuery({
    queryKey: ["notes", currentTag],
    queryFn: () =>
      currentTag === "all"
        ? fetchNotes(1, 10)
        : fetchNotes(1, 10, undefined, currentTag),
  });

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className={css.wrapper}>
      <h1 className={css.title}>
        {currentTag === "all" ? "All notes" : `Notes tagged: ${currentTag}`}
      </h1>
      <ul className={css.list}>
        {data?.notes.map((note: Note) => (
          <li key={note.id} className={css.item}>
            <h2>{note.title}</h2>
            <p>{note.content}</p>
            <span>{note.tag}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
