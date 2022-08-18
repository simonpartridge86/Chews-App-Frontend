// ABOUTCARD COMPONENT - used to display our details on about page

export default function AboutCard({ image, name, link }) {
  return (
    <section className="flex flex-row justify-between items-center p-[1vh] gap-[2vh] w-[80vw] max-w-sm pl-[15px]">
      <img
        src={image}
        atr={image}
        className="w-100% h-[13vh] object-fill rounded-full border-solid border-[2px] border-primary-color"
      ></img>
      <section className="flex flex-col justify-center h-[13vh] w-[80vw] text-left ml-[10px]">
        <h2 className="font-nunito text-md font-bold text-middle truncate max-w-[180px]">
          {name}
        </h2>
        <a href={link} target="_blank" className="underline text-primary-color">
          <p>{`View ${name.split(" ")[0]}'s Github`}</p>
        </a>
      </section>
    </section>
  );
}
