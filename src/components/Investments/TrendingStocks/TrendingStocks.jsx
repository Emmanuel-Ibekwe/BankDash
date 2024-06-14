import { capitalizeWords } from "./../../../utils/graph";

export default function TrendingStocks() {
  const stocks = [
    {
      name: "trivago",
      price: 520,
      return: 5
    },
    {
      name: "canon",
      price: 480,
      return: 10
    },
    {
      name: "uber food",
      price: 350,
      return: -3
    },
    {
      name: "nokia",
      price: 940,
      return: 2
    },
    {
      name: "tiktok",
      price: 670,
      return: -12
    }
  ];

  return (
    <div className="w-full min-[800px]:w-[40.45%] ">
      <h2 className="text-primary_2 font-semibold text-base min-[600px]:text-lg xl:text-xl pb-3 ">
        Trending Stocks
      </h2>
      <div className="w-full text-xs xl:text-base h-[230px] xl:h-[310px] bg-white rounded-[20px] flex flex-col justify-between p-6 ">
        <div className="w-full flex justify-between text-text_2 font-medium">
          <p className="w-[18.67%]">SL No</p>
          <p className="w-[37.52%]">Name</p>
          <p className="w-[23.81%]">Price</p>
          <p className="w-[20%]">Return</p>
        </div>
        {stocks.map((el, i) => (
          <div className="w-full flex justify-between text-text_2 font-medium  text-text_3">
            <p className="w-[18.67%]">{i + 1 < 10 ? `0${i + 1}` : i + 1}.</p>
            <p className="w-[37.52%]">{capitalizeWords(el.name)}</p>
            <p className="w-[23.81%]">${el.price}</p>
            <p
              className={`w-[20%] ${
                el.return < 0 ? "text-[#FE5C73]" : "text-[#16DBAA]"
              }`}
            >{`${el.return < 0 ? "" : "+"}${el.return}%`}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
