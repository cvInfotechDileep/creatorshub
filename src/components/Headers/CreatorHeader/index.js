import ThemeToggle from '@/components/ThemeToggle';
import Link from 'next/link';

export default function CreatorHeader() {
  return (
    <header className="bg-green-600 text-white p-4">
      <nav>
        <ul className="flex space-x-4">
          
          <li>
            <Link href="/creator/my-page">My Page</Link>
          </li>
          <li>
            <Link href="/creator/timeline">Timeline</Link>
          </li>
          <li>
            <Link href="/creator/received-gifts">Received Gift</Link>
          </li>
          <li>
            <Link href="/signout">Sign Out</Link>
          </li>
          <li><li><ThemeToggle /></li></li>
        </ul>
      </nav>
    </header>
  );
}
