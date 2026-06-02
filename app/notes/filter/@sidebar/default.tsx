import Link from "next/link";
import css from "./SidebarNotes.module.css";

export default function DefaultSidebar() {
  return (
    <nav className={css.sidebar}>
      <ul>
        <li><Link href="/notes/filter/All">All notes</Link></li>
        <li><Link href="/notes/filter/Todo">Todo</Link></li>
        <li><Link href="/notes/filter/Work">Work</Link></li>
        <li><Link href="/notes/filter/Personal">Personal</Link></li>
        <li><Link href="/notes/filter/Meeting">Meeting</Link></li>
        <li><Link href="/notes/filter/Shopping">Shopping</Link></li>
      </ul>
    </nav>
  );
}
