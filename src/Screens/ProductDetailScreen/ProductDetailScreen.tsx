import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CardType } from "../../Components/Cards/type";
import { getProduct } from "../../Api/api";
import { ComponentRatingTile } from "../../Components/Cards/Components/ComponentRatingTile";
import { ComponentPriceTile } from "../../Components/Cards/Components/ComponentPriceTile";
import { ComponentColorPallet } from "./components/ComponentColorPallet";
import { ComponentTitleValueWithSquareBox } from "./components/ComponentTitleValueWithSquareBox";
import { Button, IconButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../Feature/Cart/cartSlice";
import { RootState } from "../../App/store";
import { add, remove } from "../../Feature/Favorite/favoriteSlice";
import { Favorite } from "@mui/icons-material";

interface ProductDetailType extends CardType {
  size: string[];
  color: string[];
  availableQuantity: number;
}

export const ProductDetailScreen = () => {
  const { productId } = useParams();
  const [data, setData] = useState<ProductDetailType>();
  const dispatch = useDispatch();
  const favoriteData = useSelector((state: RootState) =>
  state.favorite
);
  const isAdded=favoriteData[productId as string] !== undefined ;

  const toggled = () => {
    isAdded
      ? dispatch(remove(data!.id!))
      : dispatch(
          add({
            key: productId as string,
            data: {id:productId as string,title: data!.title!, price: data!.cost!, url: data!.img! },
          })
        );
  };

  useEffect(() => {
    async function fetchData() {
      const res = await getProduct({
        id: productId!,
      });
      const product = await res.json();
      setData(product[0]);
    }
    fetchData();
  }, [productId]);
  return (
    <div className="flex flex-col md:flex-row gap-6 justify-center w-full p-8">
      <div className="flex  w-[100%] md:w-[50vw] flex-col-reverse lg:flex-row gap-4">
        <div className="flex  lg:flex-col gap-2  shrink-0">
          {new Array(2).fill(1).map((_, idx) => (
            <img key={idx} src={data?.img} className="w-[100px] shrink-0" />
          ))}
        </div>
        <img src={data?.img} className=" w-full md:w-[500px] shrink-0 object-cover" />
      </div>
      <div className="flex flex-col gap-2 flex-1">
        <div className="flex justify-between">
          <h1 className="text-[32px] font-bold capitalize">{data?.brand}</h1>
          <IconButton onClick={toggled}>
            <Favorite color={isAdded ? "error" : "disabled"} />
          </IconButton>
        </div>
        <h2 className="text-[24px] capitalize">{data?.title}</h2>
        {data?.size && (
          <ComponentTitleValueWithSquareBox value={data.size} title="size" />
        )}
        {data?.color && <ComponentColorPallet color={data.color} />}
        <div className="flex items-center gap-1">
          <span className="font-bold text-[16px] gap-1">Price </span>
          <ComponentPriceTile cost={data?.cost} discount={data?.discount} />
        </div>
        <div className="flex items-center gap-1">
          <span className="font-bold text-[16px]">Rating </span>

          <ComponentRatingTile count={data?.count} rating={data?.ratings} />
        </div>
        <div className="flex items-start gap-1">
          <span className="font-bold text-[16px]">Shipping </span>
          <div className="flex flex-col">
            <span className="font-bold text-[14px]">
              Free Shipping to Victoria teritory
            </span>
            <span className="text-[12px] text-light-tritary-text">
              Delivery Time: 14–17 days
            </span>
          </div>
        </div>
        <div className="flex justify-center flex-wrap items-center gap-2">
          <Button variant="contained" className="w-[200px]">Shop Now</Button>
          <Button
            variant="outlined"
            className="w-[200px]"
            onClick={() => {
              dispatch(addItemToCart({ id: data?.id, product: data }));
            }}
          >
            {" "}
            Add To Basket
          </Button>
        </div>
      </div>
    </div>
  );
};
