import Link from "next/link"
import LargeButton from "./components/LargeButton"

export default function Home() {
  return (
    <div className="flex items-center justify-center py-20">
      <Link href="/hana" passHref className="space-y-4">
          <LargeButton>
          Harrison Temple
        </LargeButton>
        </Link>
    </div>
  )
}
