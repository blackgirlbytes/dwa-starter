import { Typography } from "@/components/ui/typography";

/**
 * About page, sections copied from the README file
 */
export const AboutPage = () => {
  return (
    <div className="space-y-4">
      <Typography variant="h1">DWA Starter React</Typography>
      <Typography variant="p">
        Decentralized Web App: it's a Web5 Progressive Web App.
      </Typography>
      <Typography variant="h2">Why PWA?</Typography>
      <Typography variant="p">
        It's a perfect match with Web5 DWNs since a PWA can work offline and DWN
        has a synced local storage.
      </Typography>
    </div>
  );
};
