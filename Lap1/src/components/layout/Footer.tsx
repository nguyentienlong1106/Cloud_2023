import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#324262] text-secondary xl:mt-[74px]">
      <div className="grid grid-cols-12 xl:mx-[80px] pt-[58px] py-[95px] gap-[22px]">
        <div className="col-span-3">
          <Image src="/logo.png" alt="" width={107} height={49} />
        </div>
        <div className="col-span-3 text-white text-[16px] leading-[21.78px]">
          <h2 className="text-white font-semibold text-[24px] leading-[33/6px] font-raleway">
            Полезные ссылки
          </h2>
          <p className="mt-[20px]">Блог</p>
          <p className="mt-[16px]">Подарочный сертификат</p>
          <p className="mt-[16px]">Реферальная программа</p>
          <p className="mt-[16px]">Работа у нас</p>
        </div>
        <div className="col-span-3 text-white text-[16px] leading-[21.78px]">
          <h2 className="text-white font-semibold text-[24px] leading-[33/6px] font-raleway">
            Документы
          </h2>
          <p className="mt-[20px]">Договор оферты</p>
          <p className="mt-[16px]">Политика конфиденциальности</p>
          <p className="mt-[16px]">Пользовательское соглашение</p>
          <p className="mt-[16px]">Способы оплаты и возврат средств</p>
        </div>
        <div className="col-span-3 text-white text-[16px] leading-[21.78px]">
          <h2 className="text-white font-semibold text-[24px] leading-[33/6px] font-raleway">
            Контакты
          </h2>
          <p className="mt-[20px]">+7 (999) 999-99-99</p>
          <p className="mt-[16px]">example@mail.ru</p>
          <p className="mt-[16px]">Telegram</p>
          <p className="mt-[16px]">WhatsApp</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
