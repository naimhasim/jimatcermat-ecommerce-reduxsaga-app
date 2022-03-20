import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { GET_PRODUCT_REQUESTED } from "./ProductSlice"

function Product() {
  const product = useSelector((state) => state.product.product)
  const isLoading = useSelector((state) => state.product.isLoading)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(GET_PRODUCT_REQUESTED())
  }, [dispatch])

  const LoadingProducts = () => {
    return (
      <svg
        role="status"
        className="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
        viewBox="0 0 100 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
          fill="currentColor"
        />
        <path
          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
          fill="currentFill"
        />
      </svg>
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
