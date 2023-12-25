import { client } from "@/sanity/lib/client";
import Container from "@/app/components/Container";
import { PortableText } from "@portabletext/react";
import { urlForImage } from "@/sanity/lib/image";
import {tryGetImageDimensions} from "@sanity/asset-utils"
import Image from "next/image";
import LargeButton from "@/app/components/LargeButton"
import Link from "next/link";

export default async function Page({params}) {
    const postStuff = await getStuff(params.addSlug)
    const top = await getTop(params.addSlug);
    const but = await getBut(params.addSlug);
    return (
        <Container>
            <div className="mx-auto max-w-prose space-y-8 py-8 ">
                <article className="prose md:prose-md prose-primary mx-auto text-black dark:text-white">
                    <PortableText value={postStuff.content} components={portableTextComponents} />
                </article>
            </div>
            <div className="flex justify-center py-8 max-w-7xl px-4 mx-auto">
              {checkUndefined(top)}
            </div>
            <div className="py-8 max-w-7xl px-4 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {checkUndef2(but)}
            </div>
        </div>
        </Container>
        
    )
}

function checkUndefined(top) {
  if (typeof top!=="undefined") {
    return (
      <Link href={`${top.target}`} passHref className="space-y-4">
          <LargeButton>
          {top.title}
        </LargeButton>
        </Link>
    )
  }
}

function checkUndef2(stuffs) {
  if (typeof stuffs!=="undefined") {
    return (
      stuffs.map((stuff)=> (
        <Link href={`${stuff.target}`} passHref className="flex items-center justify-center">
        <LargeButton>
          {stuff.title}
        </LargeButton>
        </Link>
        
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
        className="mx-auto md:max-w-prose rounded-lg"
        style={{
          aspectRatio: width / height,
        }}
      />
    );
  }

async function getStuff(thisSlug) {
    // mysterious: only "new" queries fetch new stuff
    const query = `*[_type=="blogPost" && $thisSlug==slug.current] {
        title,
        "slug":slug.current,
        content,
    }`;
    const posts = await client.fetch(query,{thisSlug});
    return posts[0];
}

async function getTop(thisSlug) {
  // mysterious: only "new" queries fetch new stuff
  const query = `*[_type=="choice" && current==$thisSlug && top] {
  title,
    current,
      target,
  }`;
  const posts = await client.fetch(query,{thisSlug});
  return posts[0];
}

async function getBut(thisSlug) {
  // mysterious: only "new" queries fetch new stuff
  const query = `*[_type=="choice" && current==$thisSlug && !top] {
  title,
    current,
      target,
  }`;
  const posts = await client.fetch(query,{thisSlug});
  return posts;
}
