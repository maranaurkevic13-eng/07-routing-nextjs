import Link from "next/link";
import css from "./SidebarNotes.module.css";

export default function DefaultSidebar() {
  return (
    <nav className={css.sidebar}>
      <ul>
        <li><Link href="/notes/filter/all">All notes</Link></li>
        <li><Link href="/notes/filter/todo">Todo</Link></li>
        <li><Link href="/notes/filter/work">Work</Link></li>
        <li><Link href="/notes/filter/personal">Personal</Link></li>
        <li><Link href="/notes/filter/meeting">Meeting</Link></li>
        <li><Link href="/notes/filter/shopping">Shopping</Link></li>
      </ul>
    </nav>
  );
}
