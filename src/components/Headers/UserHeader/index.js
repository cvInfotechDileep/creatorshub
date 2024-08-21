import ThemeToggle from '@/components/ThemeToggle';
import Link from 'next/link';

export default function UserHeader() {
  return (
    <header className="bg-blue-600 text-white p-4">
      <nav>
        <ul className="flex space-x-4">
        <li>
            <Link href="/user/timeline">Timeline</Link>
          </li>
          <li>
            <Link href="/user/my-page">My Page</Link>
          </li>
          <li>
            <Link href="/user/send-gifts">Send Gifts</Link>
          </li>
          <li>
            <Link href="/user/explore">Explore</Link>
          </li>
          <li><ThemeToggle /></li>
        </ul>
      </nav>
    </header>
  );
}
