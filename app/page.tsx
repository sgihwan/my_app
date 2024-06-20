import { JSX, SVGProps } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <MountainIcon className="size-6" />
          <span className="sr-only">Graphic East</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Work
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full pt-12 md:pt-24 lg:pt-32 flex justify-center items-center">
          <div className="container space-y-10 xl:space-y-16">
            <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
              <img
                alt="Hero"
                className="mx-auto aspect-[3/2] overflow-hidden rounded-xl object-cover"
                height="600"
                src="/gh1.jpg" // 이미지 파일 경로 수정
                width="1200"
              />
              <div className="flex flex-col items-start space-y-4">
                <div className="space-y-2">
                  <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                    Graphic East
                  </h1>
                  <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                    Graphic East is a leading graphic design agency that specializes in creating visually stunning and
                    impactful designs for businesses of all sizes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 flex justify-center items-center">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Work</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Check out some of our latest projects and see how we can help your business stand out.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
                <Link className="absolute inset-0 z-10" href="#">
                  <span className="sr-only">View Project</span>
                </Link>
                <img
                  alt="Project 1"
                  className="object-cover w-full h-64"
                  height={400}
                  src="/gh2.jpg" // 이미지 파일 경로 수정
                  style={{
                    aspectRatio: "500/400",
                    objectFit: "cover",
                  }}
                  width={500}
                />
                <div className="bg-white p-4 dark:bg-gray-950">
                  <h3 className="font-bold text-xl">Branding for Acme Inc</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Designed a modern and cohesive brand identity for Acme Inc.
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
                <Link className="absolute inset-0 z-10" href="#">
                  <span className="sr-only">View Project</span>
                </Link>
                <img
                  alt="Project 2"
                  className="object-cover w-full h-64"
                  height={400}
                  src="/gh3.jpg" // 이미지 파일 경로 수정
                  style={{
                    aspectRatio: "500/400",
                    objectFit: "cover",
                  }}
                  width={500}
                />
                <div className="bg-white p-4 dark:bg-gray-950">
                  <h3 className="font-bold text-xl">Website Design for XYZ Co.</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Developed a responsive and visually appealing website for XYZ Co.
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
                <Link className="absolute inset-0 z-10" href="#">
                  <span className="sr-only">View Project</span>
                </Link>
                <img
                  alt="Project 3"
                  className="object-cover w-full h-64"
                  height={400}
                  src="/gh4.jpg" // 이미지 파일 경로 수정
                  style={{
                    aspectRatio: "500/400",
                    objectFit: "cover",
                  }}
                  width={500}
                />
                <div className="bg-white p-4 dark:bg-gray-950">
                  <h3 className="font-bold text-xl">Packaging Design for ABC Corp</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Created a unique and eye-catching packaging design for ABC Corp&apos;s new product line.
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
                <Link className="absolute inset-0 z-10" href="#">
                  <span className="sr-only">View Project</span>
                </Link>
                <img
                  alt="Project 4"
                  className="object-cover w-full h-64"
                  height={400}
                  src="/gh5.jpg" // 이미지 파일 경로 수정
                  style={{
                    aspectRatio: "500/400",
                    objectFit: "cover",
                  }}
                  width={500}
                />
                <div className="bg-white p-4 dark:bg-gray-950">
                  <h3 className="font-bold text-xl">Social Media Campaign for DEF Inc</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Designed a visually engaging social media campaign that drove results for DEF Inc.
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
                <Link className="absolute inset-0 z-10" href="#">
                  <span className="sr-only">View Project</span>
                </Link>
                <img
                  alt="Project 5"
                  className="object-cover w-full h-64"
                  height={400}
                  src="/gh6.jpg" // 이미지 파일 경로 수정
                  style={{
                    aspectRatio: "500/400",
                    objectFit: "cover",
                  }}
                  width={500}
                />
                <div className="bg-white p-4 dark:bg-gray-950">
                  <h3 className="font-bold text-xl">Infographic Design for GHI Ltd</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Created a visually engaging infographic that effectively communicated complex data for GHI Ltd.
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
                <Link className="absolute inset-0 z-10" href="#">
                  <span className="sr-only">View Project</span>
                </Link>
                <img
                  alt="Project 6"
                  className="object-cover w-full h-64"
                  height={400}
                  src="/gh7.jpg" // 이미지 파일 경로 수정
                  style={{
                    aspectRatio: "500/400",
                    objectFit: "cover",
                  }}
                  width={500}
                />
                <div className="bg-white p-4 dark:bg-gray-950">
                  <h3 className="font-bold text-xl">Illustration for JKL Corp</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Developed a series of custom illustrations that enhanced the brand identity of JKL Corp.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <div className="flex justify-center items-center min-h-[100vh]">
        <footer className="bg-gray-100 p-6 md:py-12 w-full max-w-7xl dark:bg-gray-800">
          <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-sm">
            <div className="grid gap-1">
              <h3 className="font-semibold">Contact Us</h3>
              <p>
                Graphic East
                <br />
                123 Main Street
                <br />
                Anytown, USA 12345
                <br />
                info@graphiceast.com
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="font-semibold">Quick Links</h3>
              <Link href="#">Home</Link>
              <Link href="#">Work</Link>
              <Link href="#">About</Link>
              <Link href="#">Contact</Link>
            </div>
            <div className="grid gap-1">
              <h3 className="font-semibold">Get in Touch</h3>
              <form className="flex space-x-2">
                <Input className="max-w-lg flex-1" placeholder="Enter your email" type="email" />
                <Button type="submit">Submit</Button>
              </form>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

function MountainIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
