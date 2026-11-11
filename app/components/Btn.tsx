import Link from "next/link";

export default function Btn({
  Icon,
  text,
  link,
}: {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  text: string;
  link: string;
}) {
  return (
    <Link
      href={link}
      title={text}
      target="_blank"
      rel="noopener noreferrer"
      className="btn flex justify-center items-center gap-1 px-3 py-1 rounded-xl border border-muted"
    >
      <div className="h-full w-full">
        <Icon />
      </div>
      <p>{text}</p>
    </Link>
  );
}
