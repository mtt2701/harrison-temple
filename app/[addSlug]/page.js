import { client } from "@/sanity/lib/client";
import Container from "@/app/components/Container";
import { PortableText } from "@portabletext/react";
import { urlForImage } from "@/sanity/lib/image";
import {tryGetImageDimensions} from "@sanity/asset-utils"
import Image from "next/image";
import { LinkButton } from "../components/Button";

export default async function Page({params}) {
    const postStuff = await getStuff(params.addSlug)
    const top = await getTop(params.addSlug);
    const but = await getBut(params.addSlug);
    return (
        <Container>
            <div className="mx-auto max-w-prose space-y-8 py-8 ">
                <article className="prose md:prose-xl prose-primary mx-auto px-8 text-black dark:text-white">
                    <PortableText value={postStuff.content} components={portableTextComponents} />
                </article>
            </div>
            <div className="w-full px-4 md:w-1/2 mx-auto">
              {checkUndefTop(top)}
            </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4 px-4 mx-auto">
                {checkUndefBut(but)}
              </div>
        </Container>
        
    )
}

function checkUndefTop(stuff) {
  if (typeof stuff!=="undefined") {
    return (
      <LinkButton title={stuff.title} current={stuff.current} target={stuff.target}/>
    )
  }
}

function checkUndefBut(stuffs) {
  if (typeof stuffs!=="undefined") {
    return (
      stuffs.map((stuff)=> (
        <LinkButton key={Math.random()} title={stuff.title} current={stuff.current} target={stuff.target}/>
        ))
    )
  }
}

const portableTextComponents = {
    types: {
        image: ImageComponent,
    },
}

function ImageComponent({ value }) {
    const { width, height } = tryGetImageDimensions(value);
  
    return (
      <Image
        src={urlForImage(value)}
        width={width}
        height={height}
        loading="lazy"
        className="mx-auto rounded-lg"
        style={{
          aspectRatio: width / height,
        }}
      />
    );
  }

async function getStuff(thisSlug) {
    const query = `*[_type=="blogPost" && $thisSlug==slug.current] {
        title,
        "slug":slug.current,
        content,
    }`;
    const posts = await client.fetch(query,{thisSlug});
    return posts[0];
}

async function getTop(thisSlug) {
  const query = `*[_type=="choice" && current==$thisSlug && top] {
  title,
    current,
      target,
  }`;
  const posts = await client.fetch(query,{thisSlug});
  return posts[0];
}

async function getBut(thisSlug) {
  const query = `*[_type=="choice" && current==$thisSlug && !top] {
  title,
    current,
      target,
  }`;
  const posts = await client.fetch(query,{thisSlug});
  return posts;
}
