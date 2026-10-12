import Image from "next/image";
import Link from "next/link";

export default function Nav() {
    return (
        <nav className="flex flex-col items-center gap-4 p-6 font-[family-name:var(--font-inter)] text-sm font-medium sm:grid sm:grid-cols-3">
            <Link href="/" className="sm:col-start-2 sm:justify-self-center">
                <Image src="/logo.png" alt="Cirqit Labs" width={80} height={80} priority />
            </Link>
            <div className="flex gap-6 sm:col-start-3 sm:justify-self-end">
                {/*<Link href="/about">about</Link>*/}
                {/*<Link href="/reviews">reviews</Link>*/}
                {/*<Link href="/contact">contact</Link>*/}
            </div>
        </nav>
    )
}
