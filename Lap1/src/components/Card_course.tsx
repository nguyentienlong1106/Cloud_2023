import Image from "next/image";
const Data = [
  {
    choice: "Хорошее начало",
    icon: "/choice1.png",
    color: "hightlight",
    level: "Конструктор MINI",
    price: "20 000 ₽",
    infor: ["Конструктор «MINI»", "3 проекта"],
  },
  {
    choice: "Оптимальный выбор",
    icon: "/choice2.png",
    color: "accent",
    level: "Конструктор BASE",
    price: "30 000 ₽",
    infor: ["Конструктор «BASE»", "6 проектов", "Чат студентов с ментором"],
  },
  {
    choice: "Полное погружение",
    icon: "/choice3.png",
    color: "accent2",
    level: "Конструктор MAXIMUS",
    price: "40 000 ₽",
    infor: ["Конструктор «MAXIMUS»", "10 проектов", "Личный ментор"],
  },
];

const Card_course = () => {
  return (
    <div className="grid grid-cols-3 gap-[24px] mt-[48px]">
      {Data.map((e, i) => (
        <div className="col-span-1 grid justify-items-center" key={i}>
          <div
            className={`bg-${e.color} flex items-center rounded-[16px] py-[16px] px-[40px]`}
          >
            <Image alt="" src={e.icon} width={32} height={32} />{" "}
            <p
              className={`ml-2 font-medium text-[22px] ${
                e.color == "accent" ? "text-white" : ""
              }`}
            >
              {e.choice}
            </p>
          </div>
          <div className="bg-[#F0F0F0] rounded-[16px] h-[625px] grid mt-[16px] relative">
            <div
              className={`bg-${e.color} h-[149px] rounded-[16px] py-[24px] pl-[40px] w-[410px]`}
            >
              {" "}
              <p
                className={`font-nunito font-semibold text-[28px] text-text_accent ${
                  e.color == "accent" ? "text-white" : ""
                } leading-[39.2px]`}
              >
                {e.level}
              </p>{" "}
              <span
                className={`${
                  e.color == "accent" ? "text-white" : ""
                } mt-[12px] text-[36px] font-medium leading-[50.4px]`}
              >
                {e.price}
              </span>
            </div>
            <ul className="list-disc ml-[50px] absolute top-[160px]">
              {e.infor.map((item, x) => {
                return (
                  <li
                    key={x}
                    className="text-[22px] leading-[30.8px] mt-[16px]"
                  >
                    {item}
                  </li>
                );
              })}
            </ul>
            <button
              className={` bg-${
                e.color
              } text-text_accent text-[24px] font-medium leading-[33.6px] rounded-[900px] mb-[32px] mx-[16px] h-[83px] absolute bottom-0 py-[26px] px-[115px] ${
                e.color == "accent" ? "text-white" : ""
              }`}
            >
              Приобрести
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card_course;
