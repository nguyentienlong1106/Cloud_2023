import Image from "next/image";

const Add_question = () => {
  return (
    <div className="lg:mx-[-80px] bg-accent h-[197px] ">
      <div className="mx-[80px] grid grid-cols-8 gap-[28px]">
        <div className="col-span-3 relative">
          <Image
            src="/paper.png"
            className="absolute bottom-[-38px]"
            alt=""
            width={508}
            height={262}
          />
        </div>
        <div className="col-span-5">
          <h1 className="text-[32px] leading-[37px] font-medium font-raleway text-white mt-[20px] ">
            Скоро запуск приложения — не пропусти!
          </h1>
          <div className="flex gap-[32px] items-end">
            <input
              type="text"
              placeholder="E-mail"
              className="w-[405px] pl-[32px] mt-[33px] text-[20px] leading-[28px] h-[69px] rounded-[24px]"
            />{" "}
            <button className=" bg-hightlight py-[20px] rounded-[900px] text-[20px] text-white font-medium leading-[28px] w-[296px] h-[68px] ">
              Отправить
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add_question;
