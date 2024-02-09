import { selector } from "recoil";
import SelectedPiercings from "./SelectedPiercings";
import IntPiercings from "../interfaces/piercings";

const TotalPriceSelector = selector<number>({
  key: 'TotalPriceSelector',
  get: ({get}) => {
    var Total: number = 0
    const selectedPiercings : IntPiercings[] = get(SelectedPiercings);
    selectedPiercings.forEach(item => {
        Total += item.price
    });
    return Total;
  }
});

export default TotalPriceSelector;
