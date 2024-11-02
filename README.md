## Next.js App Router Course - Starter

This is the starter template for the Next.js App Router Course. It contains the starting code for the dashboard application.

For more information, see the [course curriculum](https://nextjs.org/learn) on the Next.js Website.

## RSC

- It appears NextJS pipes RSC outputs (basically JSX trees) into their router which their router then renders. I haven't found evidence of fancy subtree rendering but instead it just seems to be rendering from the top each time (which client-side React does? but has better paradigm for skipping nodes).
- The model they feed to React seems custom? What's up with that? And I'm not sure how they construct their custom RSC response??
