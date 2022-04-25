import Image from 'next/image';

export default function Avatar({ url }) {
  return (
    <Image
      className="w-8 h-8 rounded-full"
      src={url}
      loading="lazy"
      alt="user avatar photo"
      width={32}
      height={32}
    />
  );
}
