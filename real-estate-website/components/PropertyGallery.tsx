'use client';

interface PropertyGalleryProps {
  gallery: string[];
}

export default function PropertyGallery({ gallery }: PropertyGalleryProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {gallery.map((image) => (
        <div key={image} className="overflow-hidden rounded-[1.75rem] bg-slate-100">
          <img src={image} alt="Property gallery" className="h-64 w-full object-cover transition duration-500 hover:scale-105" />
        </div>
      ))}
    </div>
  );
}
