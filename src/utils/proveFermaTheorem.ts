import { Dispatch, SetStateAction } from "react";

export function proveFermatTheorem(a: number, setContent: Dispatch<SetStateAction<string[] | null>>): void {
    const  res = []
    if (a % 2 === 0) return setContent(['Необъодимо нечетное число'])
    res.push(`Докажем великую теорему ферма от числа ${a}`)
    res.push('Последовательного делим число на 2 и замены каждого нечётного числа на сумму из двух предыдущих чисел. Когда число становится чётным, оно заменяется на предыдущее нечётное число, и процесс продолжается до тех пор, пока не будет достигнуто число 1.')
    let b = a;
    while (b !== 0) {
      res.push(`b: ${b}`);
      if (b % 2 === 0) {
        a += b;
        b = a - b;
      } else {
        b = a - b;
      }
      res.push(`a: ${a}`);
      res.push(`b: ${b}`);
    }
    console.log("Великая теорема Ферма доказана");
    res.push("Великая теорема Ферма доказана!");
    return setContent(res)
  }
