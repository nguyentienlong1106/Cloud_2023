"use client";
import { Disclosure } from "@headlessui/react";
import Image from "next/image";

const Data = [
  {
    question: "Могут ли возникнуть трудности в работе с конструктором?",
    answer:
      "Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
  },
  {
    question: "Какой возраст подходит для занятия с конструктором?",
    answer:
      "Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
  },
  {
    question: "Как происходит доставка конструктора?",
    answer:
      "Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
  },
  {
    question: "Чем полезны профориентационные тесты?",
    answer:
      "Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
  },
];

const Question = () => {
  return (
    <div className="grid justify-items-center mb-[105px]">
      <h1 className="text-[52px] leading-[72.8px] font-medium font-raleway mt-[64px] mb-[48px]">
        Ответили на популярные вопросы
      </h1>
      {Data.map((e, i) => (
        <div key={i} className="border-b-[1px] border-solid border-[#C9C9C9]">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between items-center w-[1280px] h-[140px]">
                  <span className="font-raleway font-medium text-[32px] leading-[44.8px] ">
                    {e.question}
                  </span>
                  <Image
                    alt=""
                    src="/ep_arrow-down-bold.png"
                    className={`${open ? "rotate-90 transform" : ""}`}
                    width={48}
                    height={48}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="text-[24px] leading-[33.6px] w-[1034px] max-w-full mb-[36px] ml-[24px] border-l-[1px] pl-[20px]  border-solid border-[#C9C9C9]">
                  {e.answer}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      ))}
    </div>
  );
};

export default Question;
