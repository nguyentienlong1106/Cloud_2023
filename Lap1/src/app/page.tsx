import Image from "next/image";
import "@/style/globals.scss";
import { Add_question, Question, Sientific_guide } from "@/components";

export default function Home() {
  return (
    <main className="lg:mx-[80px] lg:mt-[24px] ">
      <section className="grid grid-cols-8 mt-[50px]">
        <div className="col-span-5 ">
          <h1 className="font-raleway font-semibold text-[40px] leading-[46.96px] w-[710px]">
            Фитнес тренировки онлайн —  какой тип занятий подойдет вам?
          </h1>
          <p className="mt-[40px] text-[24px] leading-[33.6px] w-[499px]">
            Зарегестрируйтесь на нашей платформе и мы подберем для вас вашу
            идеальную тренировку
          </p>
          <button className="bg-hightlight px-[70px] py-5 rounded-[900px] text-[24px] font-medium text-white mt-[173px]">
            Зарегистрироваться
          </button>
        </div>
        <div className="col-span-3 grid grid-cols-11 gap-[20px] mt-[10px]">
          <div className="col-span-5 grid gap-[20px]">
            <Image src="/image 1.png" alt="" width={266} height={309} />
            <Image src="/image 3.png" alt="" width={266} height={93} />
            <Image src="/image 4.png" alt="" width={266} height={41} />
          </div>
          <div className="col-span-6 grid gap-[20px]">
            <Image
              src="/image 4.png"
              alt=""
              className="rotate-180"
              width={266}
              height={41}
            />
            <Image src="/image 2.png" alt="" width={266} height={422} />
          </div>
        </div>
      </section>

      <section className="grid mt-[125px]">
        <Add_question />
        <h1 className="text-[48px] leading-[56.35px] font-semibold font-raleway mt-[120px]">
          Почему мы
        </h1>
        <p className="mt-[40px] mb-[32px] text-[20px] leading-[28px] w-[608px]">
          Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos.
        </p>
        <Sientific_guide />
      </section>

      <section className="grid">
        <h1 className="text-[48px] leading-[67px] font-semibold font-raleway mt-[120px] w-[551px]">
          Мы упрощаем путь
        </h1>
        <h1 className="text-[48px] leading-[67px] font-semibold font-raleway w-[551px]">
          к здоровью и счастью
        </h1>
        <div className="grid grid-cols-3 gap-[40px] ">
          <div className="col-span-1">
            <h2 className="font-raleway font-semibold text-[22px] leading-[30.8px] w-[292px] mt-[40px]">
              Ищем тренера, который подойдет именно вам
            </h2>
            <p className="text-[16px] leading-[22.4px] mt-[16px]">
              Предлагаем до 3 пробных тренировок с разными тренерами, пока не
              подберем вашего идеального
            </p>
            <h2 className="font-raleway font-semibold text-[22px] leading-[30.8px] w-[292px] mt-[48px]">
              Ищем тренера, который подойдет именно вам
            </h2>
            <p className="text-[16px] leading-[22.4px] mt-[16px]">
              Предлагаем до 3 пробных тренировок с разными тренерами, пока не
              подберем вашего идеального
            </p>
          </div>
          <div className="col-span-1">
            <h2 className="font-raleway font-semibold text-[22px] leading-[30.8px] w-[292px] mt-[40px]">
              Ищем тренера, который подойдет именно вам
            </h2>
            <p className="text-[16px] leading-[22.4px] mt-[16px]">
              Предлагаем до 3 пробных тренировок с разными тренерами, пока не
              подберем вашего идеального
            </p>
            <h2 className="font-raleway font-semibold text-[22px] leading-[30.8px] w-[292px] mt-[48px]">
              Ищем тренера, который подойдет именно вам
            </h2>
            <p className="text-[16px] leading-[22.4px] mt-[16px]">
              Предлагаем до 3 пробных тренировок с разными тренерами, пока не
              подберем вашего идеального
            </p>
          </div>
          <div className="col-span-1 relative grid grid-cols-2">
            <Image
              src="/image 6.png"
              className="absolute top-[-5rem]"
              alt=""
              width={193}
              height={251}
            />
            <Image
              src="/image 7.png"
              className="absolute top-[-2rem] right-0"
              alt=""
              width={193}
              height={429}
            />
            <Image
              src="/image 8.png"
              className="absolute bottom-[-6.6rem]"
              alt=""
              width={193}
              height={251}
            />
          </div>
        </div>
        <div className="lg:mx-[-80px] bg-accent h-[253px] mt-[160px]">
          <div className="mx-[80px] grid grid-cols-2 gap-[45px] items-center mt-[38px]">
            <div className="col-span-1">
              <h1 className="font-raleway font-mediun text-[48px] leading-[56px] text-white">
                Зарегестрируйтесь
              </h1>
              <h1 className="font-raleway font-mediun text-[48px] leading-[56px] text-white">
                и запишитесь на занятие прямо сейчас!
              </h1>
            </div>
            <div className="col-span-1">
              <button className=" bg-hightlight py-[20px] rounded-[900px] text-[20px] text-white font-medium leading-[28px] w-[623px] h-[74px] ">
                Зарегистрироваться
              </button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <Question />
      </section>
    </main>
  );
}
