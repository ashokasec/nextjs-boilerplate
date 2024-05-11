# NextJs Boilerplate

Dude! I'm tired of starting NextJS projects from Scratch.
This boilerplate is designed to streamline your development process, providing you with a solid foundation to kickstart your projects without the hassle of repetitive setup tasks.

> Note: I made this on my prefernces :)

![Screenshot of a Boilderplates page](https://raw.githubusercontent.com/ashokasec/nextjs-boilerplate/main/src/components/temp/screenshot.png)

## Processes
1. __Cleaning__
   
   I've removed unnecessary files like `next.svg`, `vercel.svg`, and `favicon.ico` so you can focus on what matters and also cleaned the `page.tsx`. There only a single component there which you can comment or delete without the hassle of scrolling long to delete the unnecessary.
   
2.  __Things I Added__

    - I've installed `framer-motion` and `@tabler/icons-react` packages.
    - Created a `@/components/Aniamtion/FadeInPage.tsx`, so it becomes easy to Animate on a page load.
    - Created `@/components/Header/Header.tsx` & `@/components/Footer/Footer.tsx` beacuse its a common thing in every app :)
    - Created `@/config.ts` where i stored info about branding, nav-items and social links, so its easier to tweak one thing which reflects in whole app.
      
      ```
      export const project = {
        name: "@ashokasec",
        link: "https://ashokasec.com",
        twitter: "https://twitter.com/ashokasec"
      }

      export const navItems = [
        {
            text: "Features",
            link: "/features"
        },
        {   
            text: "Pricing",
            link: "/pricing"
        },
        {
          text: "Blog",
          link: "/blog"
        }
      ]
      ```

    - Added 3 fonts `Inter`, `Space Grotesk` and `Epilogue` and also configured in `tailwind.config.ts`.
  
## Setup

  1. Clone the repo
     
     ```
     git clone https://github.com/ashokasec/nextjs-boilerplate frontend
     ```

  3. Install Packages
     
     ```
     cd frontend && npm i
     ```

  5. Enjoyyy.....
