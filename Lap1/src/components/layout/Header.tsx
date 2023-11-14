import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-accent xl:mx-[80px] xl:mt-[24px] rounded-[20px]">
      <div className="grid grid-flow-col justify-between px-[48px] py-[29px] ">
        <div className="grid grid-flow-col items-center">
          <Link
            href={"/"}
            className="font-audiowide text-[32px] leading-[40.8px] text-white"
          >
            LOGO
          </Link>
          <div className="grid grid-flow-col content-center gap-8 ml-[66px]">
            <Link href="/library " className="text-secondary">
              Проекты
            </Link>
            <Link href="/" className="text-secondary">
              Конструктор
            </Link>
            <Link href="/" className="text-secondary">
              Контакты
            </Link>
          </div>
        </div>
        <div className="grid grid-flow-col gap-[10px]">
          <Link href={"/personal_account"}>
            <button className="bg-secondary px-5 rounded-[900px] text-[18px] font-medium flex gap-[16px] justify-items-center items-center">
              <Image
                src="/User.png"
                alt=""
                width={40}
                height={40}
                className="py-1"
              />
              Имя Пользователя{" "}
            </button>
          </Link>
          <Link href={"/"}>
            <button className="bg-hightlight px-5 py-4  rounded-[900px] text-[18px] font-semibold text-white">
              Войти
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
