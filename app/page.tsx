import { redirect } from 'next/navigation';

// redirect home page to default ielts course in english
export default function Home() {
    redirect('/products/ielts-course/en');
}
