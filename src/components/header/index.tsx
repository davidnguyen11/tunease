'use client';

interface Props {
  bgColor?: string;
  textColor?: string;
}

export function Header(props: Props) {
  const { bgColor, textColor } = props;
  return (
    <div className={`mx-auto px-2 sm:px-6 lg:px-8 ease-in-out duration-500 ${bgColor}`}>
      <div className="relative flex items-center justify-between h-16">
        <div className="flex-1 flex items-center sm:items-stretch sm:justify-start">
          <a href="/" className="flex-shrink-0 flex items-center">
            <img
              className="ml-4 lg:block h-9 w-auto"
              src="/spotify-extension-64x64.png"
              alt="Spotify Exntesion"
            />
            <span className={`ml-4 font-bold text-lg text-${textColor}`}>TuneEase</span>
          </a>
        </div>
      </div>
    </div>
  );
}
