import { TextEffect } from "./lib/text-effect";

export function Header() {
  return (
    <header className="absolute top-10 right-0 left-0 z-30">
      <div className="container mx-auto flex items-center justify-center py-4">
        <TextEffect preset="slide" speedSegment={0.3} as="h1" className="text-3xl font-light ">
          promptU
        </TextEffect>
      </div>
    </header>
  );
}
