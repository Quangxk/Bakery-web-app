import { defineStore } from "pinia";
import axios from "axios";
export interface Item {
  link: string;
  name: string;
  type: Array<string>;
  categories: Array<string>;
  id: number;
  price: number;
  description: string;
}
const items: Item[] = [];

const Getdata = async () => {
  try {
    const response = await axios.get(
      "https://vue-bakery-eb895-default-rtdb.asia-southeast1.firebasedatabase.app/Items.json"
    );
    for (const id in response.data) {
      items.push(response.data[id]);
    }
  } catch (err) {
    console.log(err);
  }
};
Getdata();
export const useProduct = defineStore("Product", {
  state: () => ({
    items,
  }),
});
