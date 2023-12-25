import Container from "@/app/components/Container";

export default async function Page() {
    return (
        <Container>
            <div className="mx-auto max-w-prose space-y-8 py-8">
                <article className="prose md:prose-md prose-primary mx-auto">
                    <img src="https://i1.sndcdn.com/artworks-Z62d9P3HyrSm1tHN-tHTCfQ-t500x500.jpg" className="hidden dark:flex"></img>
                    <img src="https://i1.sndcdn.com/artworks-pcMNUbPjg3NDmTwq-1y2oeg-t500x500.jpg" className="dark:hidden"></img>
                </article>
            </div>
        </Container>
    )
}

