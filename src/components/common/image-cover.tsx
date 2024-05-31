interface Props {
  title: string;
  description: string;
  imageUrl: string;
}

export default function ImageCover({ title, description, imageUrl }: Props) {
  return (
    <section
      className="relative overflow-hidden bg-blue-900/5 bg-cover bg-center py-40 dark:bg-blue-900/20 md:py-48"
      style={{ backgroundImage: `url("${imageUrl}")` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container relative mt-8">
        <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-2">
          <div>
            <h1 className="mb-5 text-4xl font-semibold leading-normal tracking-wide text-white lg:text-5xl lg:leading-normal">
              {title}
            </h1>
            <p className="max-w-xl text-lg font-medium text-white">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
