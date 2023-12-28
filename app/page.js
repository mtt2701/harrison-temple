import { LinkButton } from "./components/Button"
import { PortableText } from "@portabletext/react";
import Container from "./components/Container"

export default function Home() {
  return (
        <Container>
            <div className="mx-auto max-w-prose space-y-8 py-8 ">
                <article className="prose md:prose-xl prose-primary mx-auto text-center px-8 text-black dark:text-white">
                    Click the button below to begin initiation.
                </article>
            </div>
            <div className="w-full px-4 md:w-1/2 mx-auto">
                <LinkButton title="Harrison Temple" target="/hana"/>
            </div>
        </Container>
  )
}
