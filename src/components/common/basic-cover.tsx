interface Props {
  title: string;
  description: string;
}

export default function BasicCover({ title, description }: Props) {
  return (
    <section className="mt-16 flex flex-col items-center justify-center bg-white py-20">
      <h1 className="text-5xl font-bold text-gray-900">{title}</h1>
      <p className="mt-4 max-w-xl text-center text-lg text-gray-600">
        {description}
      </p>
    </section>
  );
}
