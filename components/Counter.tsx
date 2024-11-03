"use client";
export default function Counter({ value, animationClass, customClass }: any) {
  return (
    <span
      className={`text-20 leading-20 md:text-24 md:leading-24 font-medium ${customClass}`}
    >
      <style jsx>
        {`
          @property --num {
            syntax: "<integer>";
            initial-value: ${value};
            inherits: false;
          }

          .${customClass} {
            animation: ${animationClass} 3s alternate ease-in-out;
            counter-reset: num var(--num);
          }
          .${customClass}::after {
            content: counter(num);
          }

          @keyframes ${animationClass} {
            from {
              --num: 0;
            }
            to {
              --num: ${value};
            }
          }
        `}
      </style>
    </span>
  );
}
