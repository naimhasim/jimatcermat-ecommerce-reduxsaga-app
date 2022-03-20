import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { GET_PRODUCT_REQUESTED } from "./ProductSlice"
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"

function Product() {
  const product = useSelector((state) => state.product.product)
  const isLoading = useSelector((state) => state.product.isLoading)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(GET_PRODUCT_REQUESTED())
  }, [dispatch])

  const LoadingProducts = () => {
    return (
      <SkeletonTheme>
        <div className="px-0 shadow-lg md:rounded-2xl min-w-full md:w-56 ">
          <Skeleton height={321} width={224} />
        </div>
        <div className="px-0 shadow-lg md:rounded-2xl min-w-full md:w-56 ">
          <Skeleton height={321} width={224} />
        </div>
        <div className="px-0 shadow-lg md:rounded-2xl min-w-full md:w-56 ">
          <Skeleton height={321} width={224} />
        </div>
        <div className="px-0 shadow-lg md:rounded-2xl min-w-full md:w-56 ">
          <Skeleton height={321} width={224} />
        </div>
        <div className="px-0 shadow-lg md:rounded-2xl min-w-full md:w-56 ">
          <Skeleton height={321} width={224} />
        </div>
        <div className="px-0 shadow-lg md:rounded-2xl min-w-full md:w-56 ">
          <Skeleton height={321} width={224} />
        </div>
        <div className="px-0 shadow-lg md:rounded-2xl min-w-full md:w-56 ">
          <Skeleton height={321} width={224} />
        </div>
        <div className="px-0 shadow-lg md:rounded-2xl min-w-full md:w-56 ">
          <Skeleton height={321} width={224} />
        </div>
      </SkeletonTheme>
    )
  }
  const ShowProducts = () => {
    return (
      <>
        {product.map((item) => (
          <div
            key={item.id}
            className="md:hover:scale-105 px-0 py-3 transition duration-300 shadow-lg md:rounded-2xl min-w-full md:w-56 bg-white"
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
      </>
    )
  }

  return (
    <div className="bg-orange-100">
      <div className="flex flex-col items-center justify-center">
        <div className="bg-slate-800 min-w-full py-28 flex flex-col items-center justify-center ">
          <h3 className="px-24 pb-0 text-white text-xl font-bold">
            Fashion is the armor to survive the reality of everyday life
          </h3>
          <div className="min-w-full md:min-w-fit">
            <span className="px-24 text-white text-sm ">Bill Cunningham</span>
          </div>
        </div>

        <div className="grid gap-2 md:gap-6 md:grid-cols-3 lg:grid-cols-4 md:my-20">
          {isLoading ? <LoadingProducts /> : <ShowProducts />}
        </div>

        <div className=" min-w-max bg-slate-800 text-white"></div>
      </div>
    </div>
  )
}

export default Product
