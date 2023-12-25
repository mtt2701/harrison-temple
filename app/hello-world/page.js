import Container from "@/app/components/Container";

export default async function Page() {
    return (
        <Container>
            <div className="flex mx-auto max-w-prose space-y-8 py-8">
                <article className="prose md:prose-md prose-primary mx-auto text-black dark:text-white">
                    <img src="https://i1.sndcdn.com/artworks-qLKWyN93HaYz5lxx-YWKg6g-t240x240.jpg"></img>
                    Initiation Complete.
                </article>
            </div>
        </Container>
    )
}
