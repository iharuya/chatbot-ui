import { Toaster } from "@/components/ui/sonner"
import { GlobalState } from "@/components/utility/global-state"
import { Providers } from "@/components/utility/providers"
import { Database } from "@/supabase/types"
import { createServerClient } from "@supabase/ssr"
import { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { cookies } from "next/headers"
import { FC, PropsWithChildren } from "react"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })
const APP_NAME = "右腕"
const APP_DEFAULT_TITLE = "右腕"
const APP_TITLE_TEMPLATE = "%s - 右腕"
const APP_DESCRIPTION = "ボクのアシスタント"

export const metadata: Metadata = {
	applicationName: APP_NAME,
	title: {
		default: APP_DEFAULT_TITLE,
		template: APP_TITLE_TEMPLATE
	},
	description: APP_DESCRIPTION,
	manifest: "/manifest.json",
	appleWebApp: {
		capable: true,
		statusBarStyle: "black",
		title: APP_DEFAULT_TITLE
	},
	formatDetection: {
		telephone: false
	},
	openGraph: {
		type: "website",
		siteName: APP_NAME,
		title: {
			default: APP_DEFAULT_TITLE,
			template: APP_TITLE_TEMPLATE
		},
		description: APP_DESCRIPTION
	},
	twitter: {
		card: "summary",
		title: {
			default: APP_DEFAULT_TITLE,
			template: APP_TITLE_TEMPLATE
		},
		description: APP_DESCRIPTION
	}
}

export const viewport: Viewport = {
	themeColor: "#000000"
}

export const RootLayout: FC<PropsWithChildren> = async ({ children }) => {
	const cookieStore = cookies()
	const supabase = createServerClient<Database>(
		process.env.NEXT_PUBLIC_SUPABASE_URL!,
		process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
		{
			cookies: {
				get(name: string) {
					return cookieStore.get(name)?.value
				}
			}
		}
	)
	const session = (await supabase.auth.getSession()).data.session

	return (
		<html lang="en" suppressHydrationWarning>
			<body className={inter.className}>
				<Providers attribute="class" defaultTheme="dark">
					<Toaster richColors position="top-center" duration={3000} />
					<div className="bg-background text-foreground flex h-dvh flex-col items-center overflow-x-auto">
						{session ? <GlobalState>{children}</GlobalState> : children}
					</div>
				</Providers>
			</body>
		</html>
	)
}

export default RootLayout
