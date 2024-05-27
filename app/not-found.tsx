import Link from "next/link"

export default function NotFound() {
	return (
		<div className="h-screen flex flex-col items-center justify-center">
			<h2 className="text-2xl font-bold">Not Found</h2>
			<p className="text-lg">Could not find requested resource</p>
			<Link href="/" className="link">
				Return Home
			</Link>
		</div>
	)
}
