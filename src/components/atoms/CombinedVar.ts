import { atom } from "recoil";
import { Argola } from "../Piercings/Argola";
import { Barbell } from "../Piercings/Barbell";
import { Cristina } from "../Piercings/Cristina";
import { BananaBell } from "../Piercings/BananaBell";
import { Labret } from "../Piercings/Labret";
import { MicrodermalSurface } from "../Piercings/MicrodermalSurface";

const Combinend: any[] = [];

Combinend.push(...Argola);
Combinend.push(...Labret);
Combinend.push(...Barbell);
Combinend.push(...Cristina);
Combinend.push(...BananaBell);
Combinend.push(...MicrodermalSurface);

const CombinedVar = atom({
  key: 'piercingsAtom',
  default: Combinend
});

export default CombinedVar;
