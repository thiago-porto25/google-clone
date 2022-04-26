import Image from 'next/image';

export default function Avatar({ url, className }) {
  return (
    <Image
      className={`w-8 h-8 rounded-full ${className}`}
      src={url}
      alt="user avatar photo"
      width={32}
      height={32}
    />
  );
}
