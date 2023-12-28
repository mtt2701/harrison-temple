import Container from "@/app/components/Container";
import Link from "next/link";

export default async function Page() {
    return (
        <Container>
            <div className="mx-auto max-w-prose space-y-8 py-8 ">
                <article className="prose md:prose-xl prose-primary mx-auto text-center px-8 text-black dark:text-white">
                    Initiation complete.
                </article>
            </div>
            <div className="flex justify-center mx-auto py-8">
                <img src="https://i1.sndcdn.com/artworks-qLKWyN93HaYz5lxx-YWKg6g-t240x240.jpg"></img>
            </div>
            <div className="mx-auto max-w-prose space-y-8 py-8 ">
                <article className="prose md:prose-xl prose-primary mx-auto text-center px-8 text-black dark:text-white">
                    Designed by <Link href="https://github.com/mtt2701/harrison-temple" class="text-black dark:text-white">mtt2701</Link>
                </article>
                <article className="prose md:prose-xl prose-primary mx-auto text-center px-8 text-black dark:text-white">
                    Quotes and images from <Link href="https://twitch.tv/vedal987" class="text-black dark:text-white">Vedal987</Link> and <Link href="https://www.youtube.com/@_neurosama" class="text-black dark:text-white">Neuro-sama</Link>
                </article>
            </div>
        </Container>
    )
}
