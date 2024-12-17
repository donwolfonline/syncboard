'use client';

import { Github, LogIn, Pencil, Play } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function PageWrapper(): JSX.Element {
  const [play, setPlay] = useState(false);

  const playVideo = () => {
    (document.getElementById('video-landing') as HTMLVideoElement).play();

    play ? setPlay(false) : setPlay(true);
  };

  return (
    <>
      <header className="z-50 flex w-full flex-wrap text-sm md:flex-nowrap md:justify-start">
        <nav
          className="relative mx-2 mt-6 flex w-full max-w-[85rem] items-center justify-between rounded-xl border border-gray-200 bg-white px-4 py-3 dark:border-gray-700 dark:bg-gray-800 md:px-6 md:py-0 lg:px-8 xl:mx-auto"
          aria-label="Global"
        >
          <div className="flex items-center justify-between">
            <Link
              className="hidden flex-none text-xl font-semibold dark:text-white md:block"
              href="/"
              aria-label="Brand"
            >
              <Image
                src={'/logo.svg'}
                width={160}
                height={160}
                alt="logo"
              ></Image>
            </Link>

            <a href="https://github.com/donwolfonline/syncboard" target="_blank">
              <div className="ml-3 flex items-center gap-1 rounded-full bg-black p-2 px-4 text-white">
                <Github className="h-4 w-4 text-white"></Github>
                <span className="hidden md:block">Visit Repository</span>
              </div>
            </a>
          </div>
          <div
            id="navbar-collapse-with-animation"
            className="duration-300block overflow-hidden transition-all"
          >
            <div className="flex flex-row gap-x-2 gap-y-4 md:mt-0 md:flex-row md:items-center md:justify-end md:gap-x-7 md:gap-y-0 md:ps-7">
              <Link
                className="flex items-center gap-x-2 font-medium text-gray-500 hover:text-orange-600  md:my-6 md:ps-6"
                href="/draw"
              >
                <Pencil></Pencil>
                Try Now
              </Link>

              <Link
                className="flex items-center gap-x-2 font-medium text-gray-500 hover:text-orange-600  md:my-6 md:border-s md:border-gray-300 md:ps-6"
                href="/auth"
              >
                <LogIn></LogIn>
                Log in
              </Link>
            </div>
          </div>
        </nav>
      </header>

      <div className="relative mt-5  overflow-hidden">
        <div className="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-xl text-center">
            <div className="flex justify-center">
              <div className="mb-4 flex items-center gap-2 rounded-full border px-1 py-1">
                <div className="rounded-full bg-orange-600 px-2 py-1 text-sm font-medium text-white">
                  AI FEATURE
                </div>
                <p className="mr-2 text-sm">
                  Generate any diagram with the help of AI
                </p>
              </div>
            </div>
            <h1 className="block text-3xl font-bold text-gray-800 dark:text-white sm:text-4xl md:text-5xl">
              Collaborate with team in one simple{' '}
              <span className="text-orange-600">board</span>
            </h1>
          </div>

          <div className="relative mx-auto mt-10 max-w-5xl">
            {/* <div className="h-96 w-full rounded-xl bg-[url('https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1981&q=80')] bg-cover bg-center bg-no-repeat object-cover sm:h-[480px]"></div> */}
            <video
              src="/video-landing.mp4"
              className="w-full rounded-lg border shadow-xl grayscale-0"
              id="video-landing"
            ></video>

            {!play && (
              <div className="absolute left-0 top-0 z-20 flex h-full w-full flex-col items-center justify-center">
                <div
                  onClick={() => playVideo()}
                  className="inline-flex cursor-pointer items-center gap-x-2 rounded-full border border-gray-200 bg-white px-4 py-3 text-sm font-semibold text-gray-800 shadow-sm hover:bg-gray-50 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-slate-900 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                >
                  <Play className="h-4 w-4 flex-shrink-0"></Play>
                  Play the overview
                </div>
              </div>
            )}

            <div className="absolute -start-20 bottom-12 -z-[1] h-48 w-48 rounded-lg bg-gradient-to-b from-orange-500 to-white p-px dark:to-slate-900">
              <div className="h-48 w-48 rounded-lg bg-white dark:bg-slate-900"></div>
            </div>

            <div className="absolute -end-20 -top-12 -z-[1] h-48 w-48 rounded-full bg-gradient-to-t from-blue-600 to-cyan-400 p-px">
              <div className="h-48 w-48 rounded-full bg-white dark:bg-slate-900"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
