'use client';

import Head from 'next/head'
import Grid from "@/components/landing/Grid";
import { Suspense, lazy } from 'react';
import { seoKeywords } from '@/config/keywords';

const LatestBlogSingle = lazy(() => import("@/components/landing/LatestBlogSingle"));
const VisualStoryteller = lazy(() => import("@/components/loaders/VisualStoryteller"));
import GraphComponent from "../graphql/GraphComponent";
import Spinner from '@/components/loaders/Spinners';

export default function page() {
  return (
    <>
      <GraphComponent />
      <Head>
        <title>Remco Stoeten - remcostoeten.com</title>
        <meta name="description" content="Remco Stoeten - remcostoeten.com - Front-end developer" />
        <meta name="keywords" content={seoKeywords.join(', ')} />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <GraphComponent />
      <div className="contained h-[20px]"></div >
      <div id="about"><Grid /></div>
      <div id="work">
        <Suspense fallback={<div><Spinner size='small' /></div>}>
          <VisualStoryteller />
          /</Suspense>
      </div>
      <div id="articles">
        <Suspense fallback={<div><Spinner size='medium' /></div>}>
          <LatestBlogSingle />
        </Suspense>
      </div>
    </>
  )
}