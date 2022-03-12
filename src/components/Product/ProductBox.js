import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { GET_PRODUCT_REQUESTED } from "./ProductSlice"

function Product() {
  const product = useSelector((state) => state.product.product)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(GET_PRODUCT_REQUESTED())
  }, [dispatch])

  return (
    <div className="bg-orange-100">
      <div className="flex flex-col items-center justify-center">
        <div className="bg-slate-800 min-w-full py-28 flex flex-wrap flex-col gap-7 items-center justify-center ">
          <h3 className="text-white text-xl font-bold">
            Fashion is the armor to survive the reality of everyday life
          </h3>
          <p className="text-white text-l ">- Bill Cunningham -</p>
        </div>
        <div className="grid gap-6 grid-row-3 md:grid-cols-3 lg:md:grid-cols-3 xl:md:grid-cols-4 2xl:md:grid-cols-4 py-10">
          {product.map((item) => (
            <div
              key={item.id}
              className="hover:scale-105 px-0 py-3 shadow-lg rounded-2xl w-56 bg-white"
              role="button"
            >
              <div className="flex items-center justify-center">
                <img
                  className="shrink h-48 float-left px-3 object-contain"
                  src={item.image}
                />
              </div>
              <div>
                <p className="shrink px-3 text-gray-900 font-bold text-base mb-2 truncate">
                  {item.title}
                </p>
                <p className="shrink font-bold px-3 text-lg truncate mb-3 text-center text-purple-900">
                  RM {item.price}
                </p>
              </div>
              <div
                className="shrink bg-orange-600 align-middle text-center text-white font-bold overflow-hidden rounded-b-lg"
                role="button"
              >
                HOT DEALS
              </div>
            </div>
          ))}
        </div>
        <div className="w-full h-64 min-w-max bg-slate-800">ss</div>
      </div>
    </div>
  )
}

export default Product
