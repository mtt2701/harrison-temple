import Container from "@/app/components/Container";

export default async function Page() {
    return (
        <Container>
            <div className="flex justify-center mx-auto py-8">
                <img src="https://i1.sndcdn.com/artworks-qLKWyN93HaYz5lxx-YWKg6g-t240x240.jpg"></img>
            </div>
            <div className="mx-auto max-w-prose space-y-8 py-8 ">
                <article className="prose md:prose-xl prose-primary mx-auto text-center px-8 text-black dark:text-white">
                    Initiation complete.
                </article>
            </div>
        </Container>
    )
}
