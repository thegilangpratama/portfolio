import Link from "next/link";
import React from "react";
import { allProjects } from "contentlayer/generated";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Article } from "./article";
// Remove the Redis import

// Comment out or remove the Redis connection
// const redis = Redis.fromEnv();

export const revalidate = 60;
export default async function ProjectsPage() {
  // Remove the code that uses redis

  const featured = allProjects.find((project) => project.slug === "unkey")!;
  const top2 = allProjects.find((project) => project.slug === "planetfall")!;
  const top3 = allProjects.find((project) => project.slug === "highstorm")!;
  const sorted = allProjects
    .filter((p) => p.published)
    .filter(
      (project) =>
        project.slug !== featured.slug &&
        project.slug !== top2.slug &&
        project.slug !== top3.slug,
    )
    .sort(
      (a, b) =>
        new Date(b.date ?? Number.POSITIVE_INFINITY).getTime() -
        new Date(a.date ?? Number.POSITIVE_INFINITY).getTime(),
    );

    return (
      <div className="relative pb-16">
        <Navigation />
        <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
          
          <div className="w-full h-px bg-zinc-800" />
          <div className="max-w-2xl mx-auto lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
              Workspace Experience
            </h2>
            <p className="mt-4 text-zinc-400">
              Brief explanation of recent work Experience
            </p>
          </div>
  
          <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 ">
            <Card>
              {/* <Link href={`/projects/${featured.slug}`}> */}
                <article className="relative w-full h-full p-4 md:p-8">
                  <div className="flex items-center justify-between gap-2">
                    <div className="text-xs text-zinc-100">
                      December 2023 - Now
                    </div>
                    {/* Uncommented this block */}
                    <span className="flex items-center gap-1 text-xs text-zinc-500">
                      <div className="w-4 h-4" />{" 📍 Sharjah, Dubai, UAE "}
                    </span>
                  </div>
  
                  <h2
                    id="featured-post"
                    className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                  >
                    SnowHeap, LLC
                  </h2>
                  <h3
                    className="mt-4 text-lg font-bold text-zinc-100 group-hover:text-white sm:text-xl font-display">
                    Full Stack Software Engineer for AI Application
                  </h3>
                  <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                    Following internal software development processes, the individual analyzes requirements, 
                    creates detailed technical designs with UML diagrams, and independently or collaboratively 
                    implements solutions. Thorough testing and effective progress communication in internal 
                    meetings are priorities. Direct client engagement includes providing technical support and 
                    promptly resolving reported issues to ensure project success.
                  </p>
                  {/* <div className="absolute bottom-4 md:bottom-8">
                    <p className="hidden text-zinc-200 hover:text-zinc-50 lg:block">
                      Read more <span aria-hidden="true">&rarr;</span>
                    </p>
                  </div> */}
                </article>
              {/* </Link> */}
            </Card>
  
            <div className="flex flex-col w-full gap-8 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0 ">
              {/* Uncommented this block */}
              <Card>
                {/* <Link href={`/projects/${featured.slug}`}> */}
                  <article className="relative w-full h-full p-4 md:p-8">
                    <div className="flex items-center justify-between gap-2">
                      <div className="text-xs text-zinc-100">
                        October 2023 - December 2023
                      </div>
                      {/* Uncommented this block */}
                      <span className="flex items-center gap-1 text-xs text-zinc-500">
                        <div className="w-4 h-4" />{" 📍 Jakarta, Indonesia "}
                      </span>
                    </div>
                    <h2
                      className="mt-4 text-md font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                    >
                      Life Insurance by IFG, PT.
                    </h2>
                    <h3
                      className="mt-4 text-sm font-bold text-zinc-100 group-hover:text-white sm:text-xl font-display">
                      Frontend Developer Lead
                    </h3>
                    <p className="text-sm mt-4 leading-6 duration-150 text-zinc-400 group-hover:text-zinc-300">
                      Collaborating closely with Product Owners and Project Managers, 
                      the individual crafts tailored insurance products, efficiently 
                      managing Sprint cycles and user expectations. Proficient in React Native, 
                      JavaScript, and React JS, they contribute actively to robust software 
                      solutions and analyze complex technical challenges. Strong interpersonal 
                      skills are used to build consensus and influence decision-making, fostering 
                      a collaborative culture. The individual also provides clear direction and 
                      mentorship, promoting innovation within cross-functional teams.
                    </p>
                    {/* <div className="absolute bottom-4 md:bottom-8">
                      <p className="hidden text-zinc-200 hover:text-zinc-50 lg:block">
                        Read more <span aria-hidden="true">&rarr;</span>
                      </p>
                    </div> */}
                  </article>
                {/* </Link> */}
              </Card>
              <Card>
                {/* <Link href={`/projects/${featured.slug}`}> */}
                  <article className="relative w-full h-full p-4 md:p-8">
                    <div className="flex items-center justify-between gap-2">
                      <div className="text-xs text-zinc-100">
                        January 2021 - September 2023
                      </div>
                      {/* Uncommented this block */}
                      <span className="flex items-center gap-1 text-xs text-zinc-500">
                        <div className="w-4 h-4" />{" 📍 Kallang, Singapore "}
                      </span>
                    </div>
                    <h2
                      className="mt-4 text-md font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                    >
                      CPR Vision Pte. Ltd.
                    </h2>
                    <h3
                      className="mt-4 text-sm font-bold text-zinc-100 group-hover:text-white sm:text-xl font-display">
                      Fullstack Developer - Junior Team Lead
                    </h3>
                    <p className="text-sm mt-4 leading-6 duration-150 text-zinc-400 group-hover:text-zinc-300">
                      Starting as a Fullstack Developer mainly focused on web development, I progressed to creating long-term plans for optimal 
                      performance in multi-project environments. Collaborating with managers, 
                      I transitioned to supervising teams, ensuring timely delivery, 
                      and translating technical concepts for effective communication. I estimated work hours using 
                      Scrum methodology and contributed hands-on to designing and developing programs. 
                      This marked a progression from project involvement to a leadership role in development 
                      planning and team supervision.
                    </p>
                    {/* <div className="absolute bottom-4 md:bottom-8">
                      <p className="hidden text-zinc-200 hover:text-zinc-50 lg:block">
                        Read more <span aria-hidden="true">&rarr;</span>
                      </p>
                    </div> */}
                  </article>
                {/* </Link> */}
              </Card>
            </div>
          </div>

          <div className="hidden w-full h-px md:block bg-zinc-800" />

          <div className="max-w-2xl mx-auto lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
              Projects
            </h2>
            <p className="mt-4 text-zinc-400">
              Some of the projects are from work and some are on my own time.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3">
            <div className="grid grid-cols-1 gap-4">
              {sorted
                .filter((_, i) => i % 3 === 0)
                .map((project) => (
                  <Card key={project.slug}>
                    {/* <Article project={project}  /> */}
                  </Card>
                ))}
            </div>
            <div className="grid grid-cols-1 gap-4">
              {sorted
                .filter((_, i) => i % 3 === 1)
                .map((project) => (
                  <Card key={project.slug}>
                    {/* <Article project={project}  /> */}
                  </Card>
                ))}
            </div>
            <div className="grid grid-cols-1 gap-4">
              {sorted
                .filter((_, i) => i % 3 === 2)
                .map((project) => (
                  <Card key={project.slug}>
                    {/* <Article project={project}  /> */}
                  </Card>
                ))}
            </div>
          </div>
        </div>
      </div>
    );
  }