import Image from "next/image";

const Data = [
  {
    step: "/icon1.png",
    color: "hightlight",
    name: "Под контролем личного тренера",
    infor: "Подберем вам подходящего личного тренера из 160 профессионалов",
  },
  {
    step: "/icon2.png",
    name: "По видеосвязи",
    color: "hightlight",
    infor:
      "Смартфон, планшет, ноутбук (Zoom, Skype, WhatsApp, пр.).Выбирайте то, что удобно вам",
  },
  {
    step: "/icon3.png",
    color: "accent",
    name: "В любое время, в любом месте",
    infor: "Тренировки в любых часовых поясах, спортзале, дома или в офисе",
  },
  {
    step: "/icon4.png",
    color: "accent",
    name: "С заботой о себе",
    infor:
      "Мы за здоровье и хорошее самочувствие, а не за спорт высоких достижений",
  },
];

const Sientific_guide = () => {
  return (
    <div className="grid grid-cols-4 gap-[32px] ">
      {Data.map((e, i) => (
        <div
          key={i}
          className="col-span-1 h-[294px] rounded-[24px] bg-white shadow-2xl px-[12px] py-[40px]"
        >
          <Image src={e.step} alt="" width={56} height={56} />

          <h2 className="mt-[20px] font-raleway font-semibold text-[22px] leading-[31px] w-[202px]">
            {e.name}
          </h2>
          <p className="mt-[16px] text-[15px] leading-[21px] w-[231px]">
            {e.infor}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Sientific_guide;
