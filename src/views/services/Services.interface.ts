export interface SlidesProps {
  slides: SlideProps[];
}

export interface SlideProps {
  id: number;
  bg_image: BgImage;
  date: Date;
  image: Image;
  description: string;
  text: string;
}

export interface BgImage {
  src: string;
  alt: string;
}

export interface Date {
  day: string;
  month: string;
}

export interface Image {
  src: string;
  alt: string;
}
