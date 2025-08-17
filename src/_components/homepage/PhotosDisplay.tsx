import Image from "next/image";

const photos = [
  '/images/clicked.png',
  '/images/watched.png',
  '/images/listed.png',
]


const PhotosDisplay = () => {
  return (

    <section className="w-full px-4 sm:px-8 xl:px-[78px] py-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 sm:gap-5">
      {
        photos.map((item) => (
          <Image key={item} src={item} alt={item} width={418} height={286}
            className="w-full"
          />
        ))
      }
    </section>

  )
}

export default PhotosDisplay